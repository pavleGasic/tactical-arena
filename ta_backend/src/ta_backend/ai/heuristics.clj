(ns ta-backend.ai.heuristics
  (:require [ta-backend.utils.game-utils :as game-utils]
            [ta-backend.game.consts :as consts]
            [ta-backend.game.state :as state]))

(defn in-target-area? [pos]
  (some #(= pos %) consts/target-area))

(defn dist-to-target [pos]
  (apply min (map #(game-utils/distance pos %) consts/target-area)))

(defn score-target-distance [pos turn-no]
  (let [base (dist-to-target pos)
        weight (if (< turn-no 5) 0 25)]
    (- weight base)))

(defn sum-squared-max-dists [bot-heroes]
  (reduce + (map #(let [d (dist-to-target (:position %))]
                    (* d d))
                 bot-heroes)))

(defn score-group-progress [hero new-pos game-state turn-no]
  (if (< turn-no 12)
    (let [bot-heroes (vals (:bot-heroes game-state))
          old-sum (sum-squared-max-dists bot-heroes)
          moved-hero (assoc hero :position (state/->Position (:x new-pos) (:y new-pos)))
          new-bots (assoc-in (:bot-heroes game-state) [(:type hero)] moved-hero)
          new-sum (sum-squared-max-dists (vals new-bots))
          n-heroes (count bot-heroes)]
      (* n-heroes (max 0 (- old-sum new-sum))))
    0))

(defn score-action [a]
  (case (:type a)
    :attack (let [damage (case (:type (:from a))
                           :warrior consts/warrior-damage
                           :wizard consts/wizard-damage
                           0)
                  hp (:hp (:to a))]
              (if (<= damage hp)
                30
                10))
    :heal (let [hp (:hp (:to a))
                max-hp (:max-hp (:to a))]
            (if (< hp max-hp)
              (if (<= (+ hp consts/medic-heal) max-hp)
                10
                20)
              0))
    0))

(defn score-actions [actions]
  (reduce + (map score-action actions)))

(defn score-target-control [hero pos player-heroes]
  (let [base-score (cond
                     (and (in-target-area? pos)
                          (not-any? #(in-target-area? (:position %)) player-heroes))
                     30
                     (and (in-target-area? pos)
                          (some #(in-target-area? (:position %)) player-heroes))
                     20
                     :else 0)
        warrior-bonus (if (= (:type hero) :warrior) 20 0)]
    (+ base-score warrior-bonus)))

(defn score-move [hero new-pos game-state]
  (let [moved-hero (assoc hero :position (state/->Position (:x new-pos) (:y new-pos)))
        new-gs (assoc-in game-state [:bot-heroes (:type hero)] moved-hero)
        player-heroes (vals (:player-heroes new-gs))
        actions (game-utils/all-bot-actions new-gs)
        turn-no (:turn-no game-state)]
    (+ (score-target-distance new-pos turn-no)
       (score-group-progress hero new-pos game-state turn-no)
       (score-actions actions)
       (score-target-control hero new-pos player-heroes))))

(defn best-move-for-hero [hero game-state map-data]
  (let [moves (game-utils/valid-moves hero game-state map-data)]
    (when (seq moves)
      (apply max-key #(score-move hero % game-state) moves))))

(defonce decision! (atom nil))

(defn best-action [game-state]
  (let [actions (game-utils/all-bot-actions game-state)]
    (when (seq actions)
      (apply max-key score-action actions))))

(defn evaluate-turn [game-state map-data]
  (let [bot-heroes (vals (:bot-heroes game-state))
        results (map (fn [h]
                       (when-let [best-move (best-move-for-hero h game-state map-data)]
                         (let [updated-hero (assoc h :position (state/->Position (:x best-move)
                                                                                 (:y best-move)))]
                           {:hero  h
                            :move  (select-keys updated-hero [:hp :position :type])
                            :score (score-move h best-move game-state)})))
                     bot-heroes)
        best (when (seq results)
               (apply max-key :score results))
        best-action (best-action (assoc-in game-state
                                           [:bot-heroes (:id (:hero best))]
                                           (assoc (:hero best)
                                             :position (state/->Position (:x (:position (:move best)))
                                                                         (:y (:position (:move best)))))))]
    {:hero   (:hero best)
     :move   (:move best)
     :action best-action
     :score  (:score best)}))

(defn store-decision! [game-state map-data]
  (reset! decision! (evaluate-turn game-state map-data)))

(defn pick-best-hero [] (:hero @decision!))
(defn pick-best-move [] (:move @decision!))
(defn pick-best-action [] (:action @decision!))