(ns ta-backend.game.game-logic-test
  (:require [midje.sweet :refer :all]
            [ta-backend.game.game-logic :as gl]
            [ta-backend.game.state :as state]
            [ta-backend.utils.map-utils :as mu]))

(with-redefs [mu/load-map! (fn []
                             (reset! state/game-map
                                     [{:x 38 :y 10 :walkable? true}
                                      {:x 39 :y 10 :walkable? true}
                                      {:x 40 :y 10 :walkable? true}
                                      {:x 41 :y 10 :walkable? true}
                                      {:x 42 :y 7  :walkable? true}
                                      {:x 42 :y 8  :walkable? true}
                                      {:x 41 :y 7  :walkable? true}]))]

  (fact "start-game initializes game state correctly"
        (let [bot {:type :easy} ; mock bot
              gs (gl/start-game bot)]
          (:turn gs) => :player
          (:phase gs) => :move
          (:player-heroes gs) => (contains {:warrior anything
                                            :wizard anything
                                            :medic  anything})
          (:bot-heroes gs) => (contains {:warrior anything
                                         :wizard  anything
                                         :medic   anything})))

  (fact "move-hero updates hero position and sets turn to bot if appropriate"
        (let [gs (gl/start-game {:type :easy})
              hero-id :warrior
              _ (get-in gs [:player-heroes hero-id :position])
              resp (gl/move-hero hero-id 41 10)
              updated-hero (get-in (:updated-hero resp) [:position])]
          (:success resp) => true
          updated-hero => {:x 41 :y 10}
          (:turn @state/game-state) => :bot))

  (fact "move-hero fails if invalid move"
        (gl/start-game {:type :easy})
        (let [resp (gl/move-hero :warrior 100 100)]
          (:success resp) => false)))
