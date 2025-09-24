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
        bot-heroes (:bot-heroes game-state)]
    (for [x (range (- (:x pos) consts/move-range) (inc (+ (:x pos) consts/move-range)))
          y (range (- (:y pos) consts/move-range) (inc (+ (:y pos) consts/move-range)))
          :let [dist (distance pos (state/->Position x y))]
          :when (and (<= dist consts/move-range)
                     (walkable? x y bot-heroes map-data))]
      {:x x :y y})))

(defn available-actions
  "Return all possible actions for a bot hero:
   {:type :attack/:heal/:move
    :from hero
    :to target (nil for move)}"
  [hero game-state]
  (let [player-heroes (vals (:player-heroes game-state))
        bot-heroes (vals (:bot-heroes game-state))]
    (concat
      (for [target player-heroes
            :when (<= (distance (:position hero) (:position target))
                      (case (:type hero)
                        :warrior consts/warrior-attack-range
                        :wizard consts/wizard-attack-range
                        0))]
        {:type :attack :from hero :to target})
;check medic heal
      (for [target bot-heroes
            :when (and (< (:hp target) (:max-hp target))
                       (<= (distance (:position hero) (:position target))
                           consts/medic-heal-range))]
        {:type :heal :from hero :to target}))))


