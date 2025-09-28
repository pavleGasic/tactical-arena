(ns ta-backend.game.game-logic-test
  (:require [midje.sweet :refer :all]
            [ta-backend.game.game-logic :as gl]
            [ta-backend.game.state :as state]
            [ta-backend.utils.map-utils :as mu]
            [ta-backend.utils.game-utils :as gu]
            [ta-backend.ai.bot :as bot]
            [ta-backend.game.rules :as rules]))

(defn pos [x y] {:x x :y y})

(with-redefs [mu/load-map! (fn [] (reset! state/game-map
                                          [{:x 38 :y 10 :walkable? true}
                                           {:x 39 :y 10 :walkable? true}
                                           {:x 40 :y 10 :walkable? true}
                                           {:x 41 :y 10 :walkable? true}
                                           {:x 42 :y 7  :walkable? true}
                                           {:x 42 :y 8  :walkable? true}
                                           {:x 41 :y 7  :walkable? true}]))
              gu/valid-move? (fn [_ _ _ _ _] true)
              gu/all-player-actions (fn [_] [])
              gu/perform-action (fn [_from _to _ally _target]
                                  {:from {:type :warrior}
                                   :to-bot {:type :warrior}
                                   :to-home {:type :wizard}})
              rules/update-target-area-counters (fn [] nil)
              rules/check-target-area-victory (fn [] nil)
              bot/choose-hero (fn [_ _] {:type :warrior :position (pos 39 7)})
              bot/choose-move (fn [_ _ _] {:position (pos 39 7)})
              bot/choose-action (fn [_ _] {:type :attack :from {:type :warrior} :to {:type :wizard}})]

  (fact "start-game initializes game-state"
        (let [gs (gl/start-game {:type :easy})]
          (:turn gs) => :player
          (:phase gs) => :move
          (:player-heroes gs) => (contains {:warrior anything
                                            :wizard anything
                                            :medic  anything})
          (:bot-heroes gs) => (contains {:warrior anything
                                         :wizard anything
                                         :medic  anything})))

  (fact "move-hero updates position and turn"
        (gl/start-game {:type :easy})
        (let [resp (gl/move-hero :warrior 41 10)
              updated-hero (:updated-hero resp)]
          (:success resp) => true
          (:position updated-hero) => {:x 41 :y 10}
          (:turn @state/game-state) => :bot))

  (fact "end-game? detects no end"
        (gl/start-game {:type :easy})
        (let [resp (gl/end-game? @state/game-state)]
          (:has-ended resp) => false
          (:winner resp) => nil))

  (fact "reset-game-state! clears everything"
        (gl/reset-game-state!)
        @state/game-state => (state/->GameState {} {} nil nil nil)
        @rules/target-area-counters => {:player 0 :bot 0}))
