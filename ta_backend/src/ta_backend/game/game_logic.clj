(ns ta-backend.game.game-logic
  (:require [ta-backend.utils.map-utils :as mu]
            [ta-backend.game.state :as state]
            [ta-backend.utils.game-utils :as game-utils]
            [ta-backend.ai.bot :as bot]
            [ta-backend.game.rules :as rules]))

(defn start-game
  "Initialize a new game: loads the map, creates player heroes, sets up bot heroes, and resets game-state."
  [bot]
  (mu/load-map!)
  (let [player-heroes {:warrior (state/create-warrior (state/->Position 6 27))
                       :wizard  (state/create-wizard (state/->Position 7 27))
                       :medic   (state/create-medic (state/->Position 6 26))}
        bot-heroes {:warrior (state/create-warrior (state/->Position 42 7))
                    :wizard  (state/create-wizard (state/->Position 41 7))
                    :medic   (state/create-medic (state/->Position 42 8))}]
    (reset! state/game-state
            (state/->GameState player-heroes bot-heroes bot :player :move 1))
    @state/game-state))

(defn move-hero [hero-id new-x new-y]
  (let [hero (get-in @state/game-state [:player-heroes hero-id])]
    (if (game-utils/valid-move? hero new-x new-y @state/game-state @state/game-map)
      (let [updated-hero (assoc hero :position (state/->Position new-x new-y))
            new-state (swap! state/game-state
                             (fn [gs]
                               (assoc-in gs [:player-heroes hero-id] updated-hero)))
            player-actions (game-utils/all-player-actions new-state)]
        (when (empty? player-actions)
          (swap! state/game-state assoc :turn :bot))
        {:success           true
         :updated-hero      updated-hero
         :available-actions player-actions})
      {:success false})))

(defn do-action [action-type from to]
  (let [from-hero (get-in @state/game-state [:player-heroes (keyword (:type from))])
        heroes (if (= action-type :attack)
                 :bot-heroes
                 :player-heroes)
        to-hero (get-in @state/game-state [heroes (keyword (:type to))])]
    (if (game-utils/valid-action? from-hero to-hero action-type @state/game-state)
      (let [updated-state (game-utils/perform-action action-type from to :player-heroes :bot-heroes)
            from (:from updated-state)
            to-bot (:to-bot updated-state)
            to-home (:to-home updated-state)]
        (game-utils/cleanup-dead-heroes state/game-state)
        (swap! state/game-state assoc :turn :bot)
        {:success true
         :action  (name action-type)
         :from    from
         :to-bot  to-bot
         :to-home to-home})
      {:success false})))

(defn reset-game-state! []
  (reset! state/game-state (state/->GameState {} {} nil nil nil 0))
  (reset! rules/target-area-counters {:player 0
                                      :bot    0}))

(defn end-game?
  [game-state]
  (let [player-heroes (vals (:player-heroes game-state))
        bot-heroes    (vals (:bot-heroes game-state))
        target-victory (rules/check-target-area-victory)]
    (cond
      target-victory
      (do (reset-game-state!)
          {:has-ended true
           :winner    (:winner target-victory)
           :reason    (:reason target-victory)})

      (empty? bot-heroes)
      (do (reset-game-state!)
          {:has-ended true
           :winner    :player
           :reason    "all bots defeated"})

      (empty? player-heroes)
      (do (reset-game-state!)
          {:has-ended true
           :winner    :bot
           :reason    "all players defeated"})

      :else
      {:has-ended false
       :winner    nil
       :reason    nil})))


(defn bot-play-turn
  []
  (let [game-state @state/game-state
        bot (:bot game-state)]
    (let [end-game (end-game? game-state)]
      (if (:has-ended end-game)
        {:success          true
         :bot-updated-hero nil
         :bot-action       nil
         :end              true
         :winner           (:winner end-game)
         :bot-target        nil
         :home-target       nil}
        (if (= (:turn game-state) :bot)
          (let [hero (bot/choose-hero bot game-state)
                move (bot/choose-move bot game-state hero)
                updated-hero (when move
                               (assoc hero :position (:position move)))]
            (when updated-hero
              (swap! state/game-state
                     (fn [gs]
                       (assoc-in gs [:bot-heroes (:type hero)] updated-hero))))
            (let [new-game-state @state/game-state
                  action (bot/choose-action bot new-game-state)
                  updated-state (if action
                                  (game-utils/perform-action (:type action) (:from action)
                                                             (:to action)
                                                             :bot-heroes :player-heroes)
                                  nil)
                  bot-action (if updated-state
                               {:from    (:from updated-state)
                                :to-bot  (:to-home updated-state)
                                :to-home (:to-bot updated-state)
                                :type    (:type action)}
                               nil)]
              (game-utils/cleanup-dead-heroes state/game-state)
              (rules/update-target-area-counters)
              (let [end-game-after (end-game? @state/game-state)
                    has-ended (:has-ended end-game-after)
                    winner (:winner end-game-after)]
                (when-not (:has-ended end-game-after)
                  (swap! state/game-state
                         (fn [gs]
                           (-> gs
                               (assoc :turn :player)
                               (update :turn-no inc)))))
                {:success          true
                 :bot-updated-hero move
                 :bot-action       bot-action
                 :end              has-ended
                 :winner           winner
                 :bot-target       (:bot @rules/target-area-counters)
                 :home-target      (:player @rules/target-area-counters)})))
          {:success false
           :error   "Not bot's turn"})))))
