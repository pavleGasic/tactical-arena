(ns ta-backend.handlers.game-handler-test
  (:require [midje.sweet :refer :all]
            [ta-backend.handlers.game-handler :as gh]
            [ta-backend.game.game-logic :as game-logic]
            [ta-backend.game.state :as state]
            [ta-backend.ai.bot :as bot]
            [ta-backend.utils.map-utils :as mu]
            [ta-backend.logger :as logger]))

(with-redefs [logger/error (fn [& _] nil)]

  (fact "start a game returns correct initial state"
        (with-redefs [mu/load-map! (fn [] (reset! state/game-map
                                                  [{:x 38 :y 10 :walkable? true}
                                                   {:x 39 :y 10 :walkable? true}
                                                   {:x 40 :y 10 :walkable? true}]))]
          (let [_ (bot/create-bot :easy)
                resp (gh/handle-game-start {:query-params {"bot-level" "easy"}})
                body (:body resp)]
            (:status resp) => 200
            (:player-heroes body) => (contains {:warrior anything
                                                :wizard  anything
                                                :medic   anything}))))

  (fact "move hero updates position and turn"
        (game-logic/start-game (bot/create-bot :easy))
        (let [_ :warrior
              resp (gh/handle-game-turn-move {:body-params {:hero-id "warrior" :new-x 41 :new-y 10}})
              updated-hero (get-in (:body resp) [:updated-hero])]
          (:status resp) => 200
          (:position updated-hero) => {:x 41 :y 10}
          (:turn @state/game-state) => :bot))

  (fact "ending bot turn triggers bot actions"
        (reset! state/game-state {:turn          :bot
                                  :bot           (bot/create-bot :easy)
                                  :player-heroes {:warrior (state/create-warrior (state/->Position 41 10))}
                                  :bot-heroes    {:warrior (state/create-warrior (state/->Position 42 10))}})

        (with-redefs [bot/choose-hero   (fn [_ gs] (get-in gs [:bot-heroes :warrior]))
                      bot/choose-move   (fn [_ _ hero]
                                          (assoc hero :position {:x 42 :y 11}))
                      bot/choose-action (fn [_ _ hero]
                                          [{:from hero :to (get-in @state/game-state [:player-heroes :warrior]) :type :attack}])]

          (let [resp (gh/handle-game-turn-end nil)
                body (:body resp)]
            (:status resp) => 200
            body => (contains {:success true
                               :bot-updated-heroes anything
                               :player-updated-heroes anything})))))
