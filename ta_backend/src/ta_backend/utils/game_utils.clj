(ns ta-backend.utils.game-utils
  (:require [ta-backend.game.state :as state]
            [ta-backend.game.consts :as consts]))

(defn distance [p1 p2]
  (max (abs (- (:x p1) (:x p2)))
       (abs (- (:y p1) (:y p2)))))

(defn occupied?
  "Return true if the tile (x,y) is occupied by any character."
  [x y characters]
  (boolean
    (some #(and (= (:x (:position %)) x)
                (= (:y (:position %)) y))
          characters)))

(defn walkable?
  "Return true if tile at (x y) is walkable and not occupied by any hero."
  [x y heroes map-data]
  (some
    (fn [tile]
      (and (= (:x tile) x)
           (= (:y tile) y)
           (:walkable? tile)
           (not (occupied? x y heroes))))
    map-data))

(defn valid-move? [hero new-x new-y game-state map-data]
  (let [heroes (concat (vals (:player-heroes game-state))
                       (vals (:bot-heroes game-state)))]
    (and (= :player (:turn game-state))
         (= :move (:phase game-state))
         (walkable? new-x new-y heroes map-data)
         (<= (distance (:position hero) (state/->Position new-x new-y)) consts/move-range))))

(defn can-be-attacked? [from to]
  (case (:type from)
    :warrior (<= (distance (:position from) (:position to)) consts/warrior-attack-range)
    :wizard (<= (distance (:position from) (:position to)) consts/wizard-attack-range)
    false))

(defn can-be-healed? [from to]
  (if (= (:type from) :medic)
    (<= (distance (:position from) (:position to)) consts/medic-heal-range)
    false))

(defn valid-hero-type-action? [from to action]
  (case action
    :attack (or (= (:type from) :warrior) (= (:type from) :wizard))
    :heal (and (= (:type from) :medic) (or (= (:type to) :warrior) (= (:type to) :wizard)))))

(defn action-heroes-from-valid-hero-team? [from to action game-state]
  (case action
    :attack (and (contains? (set (vals (:player-heroes game-state))) from) (contains? (set (vals (:bot-heroes game-state))) to))
    :heal (and (contains? (set (vals (:player-heroes game-state))) from) (contains? (set (vals (:player-heroes game-state))) to))))

(defn valid-action? [from to action game-state]
  (and (action-heroes-from-valid-hero-team? from to action game-state)
       (valid-hero-type-action? from to action)
       (or (can-be-attacked? from to) (can-be-healed? from to))))

(defn can-attack? [hero bot-heroes]
  (case (:type hero)
    :warrior (some #(<= (distance (:position hero) (:position %)) consts/warrior-attack-range) (vals bot-heroes))
    :wizard (some #(<= (distance (:position hero) (:position %)) consts/wizard-attack-range) (vals bot-heroes))
    false))

(defn can-heal? [hero player-heroes]
  (when (= (:type hero) :medic)
    (some #(and (< (:hp %) (:max-hp %))
                (<= (distance (:position hero) (:position %)) consts/medic-heal-range))
          (vals player-heroes))))

(defn valid-moves
  "Return all valid tiles (x,y) the hero can move to based on map-data and move range."
  [hero game-state map-data]
  (let [pos (:position hero)
        all-heroes (concat (vals (:player-heroes game-state))
                           (vals (:bot-heroes game-state)))]
    (for [x (range (- (:x pos) consts/move-range) (inc (+ (:x pos) consts/move-range)))
          y (range (- (:y pos) consts/move-range) (inc (+ (:y pos) consts/move-range)))
          :let [dist (distance pos (state/->Position x y))]
          :when (and (<= dist consts/move-range)
                     (walkable? x y all-heroes map-data))]
      {:x x :y y})))

(defn closest-to-center
  "Pick move that is closest to `center-position`"
  [moves]
  (let [min-dist (apply min (map #(distance % consts/center-position) moves))]
    (filter #(= (distance % consts/center-position) min-dist) moves)))

(defn available-actions
  "Return all possible actions for a bot hero: {:type :attack/:heal/:move :from hero :to target (nil for move)}"
  [hero target-heroes ally-heroes]
  (let [target-heroes-vals (vals target-heroes)
        ally-heroes-vals (vals ally-heroes)]
    (concat
      (for [target target-heroes-vals
            :when (<= (distance (:position hero) (:position target))
                      (case (:type hero)
                        :warrior consts/warrior-attack-range
                        :wizard consts/wizard-attack-range
                        0))]
        (state/->Action :attack hero target))
      (for [target ally-heroes-vals
            :when (and (< (:hp target) (:max-hp target)) (= (:type hero) :medic) (not (= (:type hero) (:type target)))
                       (<= (distance (:position hero) (:position target)) consts/medic-heal-range))]
        (state/->Action :heal hero target)))))

(defn all-bot-actions [game-state]
  (let [bot-heroes (vals (:bot-heroes game-state))]
    (vec (mapcat #(available-actions % (:player-heroes game-state) (:bot-heroes game-state)) bot-heroes))))

(defn all-player-actions [game-state]
  (let [player-heroes (vals (:player-heroes game-state))]
    (vec (mapcat #(available-actions % (:bot-heroes game-state) (:player-heroes game-state)) player-heroes))))

(defn apply-damage [hero damage]
  (-> hero
      (update :hp #(max 0 (- % damage)))))

(defn apply-heal [hero amount]
  (-> hero
      (update :hp #(min (:max-hp hero) (+ % amount)))))

(defn cleanup-dead-heroes [gs]
  (swap! gs
         (fn [gs]
           (-> gs
               (update :player-heroes
                       (fn [heroes]
                         (into {} (remove (fn [[_ h]] (<= (:hp h) 0)) heroes))))
               (update :bot-heroes
                       (fn [heroes]
                         (into {} (remove (fn [[_ h]] (<= (:hp h) 0)) heroes))))))))


(defn perform-action [action from to ally target]
  (let [from-k (if (keyword? (:type from)) (:type from) (keyword (:type from)))
        to-k (if (keyword? (:type to)) (:type to) (keyword (:type to)))
        updated-gs
        (swap! state/game-state
               (fn [gs]
                 (case action
                   :attack
                   (update-in gs [target to-k]
                              (fn [hero]
                                (apply-damage hero
                                              (case from-k
                                                :warrior consts/warrior-damage
                                                :wizard consts/wizard-damage))))

                   :heal
                   (update-in gs [ally to-k]
                              (fn [hero]
                                (apply-heal hero consts/medic-heal))))))]
    {:from    (get-in updated-gs [ally from-k])
     :to-bot  (when (= action :attack)
                (get-in updated-gs [target to-k]))
     :to-home (when (= action :heal)
                (get-in updated-gs [ally to-k]))}))
