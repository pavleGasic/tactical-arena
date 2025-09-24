(ns ta-backend.game.game-logic
  (:require [ta-backend.utils.map-utils :as mu]
            [ta-backend.game.state :as state]
            [ta-backend.utils.game-utils :as game-utils]))

(defn start-game
  "Initialize a new game: loads the map, creates player heroes, sets up bot heroes, and resets game-state."
  [bot]
  (mu/load-map!)
  (let [player-heroes {:warrior (state/create-warrior (state/->Position 40 10))
                       :wizard  (state/create-wizard (state/->Position 39 10))
                       :medic   (state/create-medic (state/->Position 38 10))}
        bot-heroes {:warrior (state/create-warrior (state/->Position 42 7))
                    :wizard  (state/create-wizard (state/->Position 42 8))
                    :medic   (state/create-medic (state/->Position 41 7))}]
    (reset! state/game-state
            (state/->GameState player-heroes bot-heroes bot :player :move))
    @state/game-state))

(defn move-hero [hero-id new-x new-y]
  (let [hero (get-in @state/game-state [:player-heroes hero-id])]
    (if (game-utils/valid-move? hero new-x new-y @state/game-state @state/game-map)
      (let [updated-hero (-> hero
                             (assoc :position (state/->Position new-x new-y))
                             (assoc :can-attack? (and (#{:warrior :wizard} (:type hero))
                                                      (game-utils/can-attack? hero (:bot-heroes @state/game-state))))
                             (assoc :can-heal? (and (= :medic (:type hero))
                                                    (game-utils/can-heal? hero (:player-heroes @state/game-state)))))]
        (if (not (and (:can-attack? updated-hero)
                      (:can-heal? updated-hero)))
          (swap! state/game-state
                 (fn [gs]
                   (-> gs
                       (assoc-in [:player-heroes hero-id] updated-hero)
                       (assoc :turn :bot))))
          (swap! state/game-state assoc-in [:player-heroes hero-id] updated-hero))
        {:success      true
         :updated-hero updated-hero})
      {:success false})))
