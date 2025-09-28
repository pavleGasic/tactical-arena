(ns ta-backend.game.rules
  (:require [ta-backend.game.consts :as consts]
            [ta-backend.game.state :as state]))

(defonce target-area-counters
         (atom {:player 0
                :bot    0}))

(defn hero-in-target-area? [hero]
  "Check if a hero's position is inside the target area."
  (some #(and (= (:x %) (:x (:position hero)))
              (= (:y %) (:y (:position hero))))
        consts/target-area))

(defn team-in-target-area? [heroes]
  "Check if at least one hero in a collection is in target area."
  (some hero-in-target-area? heroes))

(defn update-target-area-counters []
  "Update consecutive turn counters for both teams.
   If both teams are in target area, no one increments."
  (swap! target-area-counters
         (fn [counters]
           (let [gs @state/game-state
                 player-present (team-in-target-area? (vals (:player-heroes gs)))
                 bot-present    (team-in-target-area? (vals (:bot-heroes gs)))]
             (cond
               (and player-present (not bot-present))
               {:player (inc (:player counters)) :bot 0}

               (and bot-present (not player-present))
               {:player 0 :bot (inc (:bot counters))}

               (and player-present bot-present)
               counters

               :else
               {:player 0 :bot 0})))))

(defn check-target-area-victory []
  "Check if any team has won by being in target area 5 turns consecutively."
  (let [{:keys [player bot]} @target-area-counters]
    (cond
      (>= player 5) {:winner :player :reason "target area"}
      (>= bot 5)    {:winner :bot :reason "target area"}
      :else         nil)))
