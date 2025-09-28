(ns ta-backend.handlers.game-handler-test
  (:require [midje.sweet :refer :all]
            [ta-backend.handlers.game-handler :as gh]
            [ta-backend.game.game-logic :as game-logic]
            [ta-backend.game.state :as state]
            [ta-backend.ai.bot :as bot]
            [ta-backend.utils.map-utils :as mu]
            [ta-backend.logger :as logger]))

;; ------------------------------
;; Helpers
;; ------------------------------
(defn pos [x y] {:x x :y y})

(defn create-test-map []
  ;; simple walkable map for testing
  [{:x 6 :y 27 :walkable? true}
   {:x 7 :y 27 :walkable? true}
   {:x 6 :y 26 :walkable? true}
   {:x 7 :y 26 :walkable? true}])

;; ------------------------------
;; Test Facts
;; ------------------------------
(with-redefs [logger/error (fn [& _] nil)]

  ;; ------------------------------
  ;; Start Game
  ;; ------------------------------
  (fact "starting a game returns correct initial state"
        (with-redefs [mu/load-map! (fn [] (reset! state/game-map (create-test-map)))]
          (let [bot-ai (bot/create-bot :easy)
                resp   (gh/handle-game-start {:query-params {"bot-level" "easy"}})
                body   (:body resp)]
            (:status resp) => 200
            (:player-heroes body) => (contains {:warrior anything
                                                :wizard  anything
                                                :medic   anything})
            (:turn body) => :player
            (:phase body) => :move)))

  (fact "moving a hero updates position"
        (reset! state/game-map (create-test-map))
        (reset! state/game-state {:turn :player
                                  :phase :move
                                  :player-heroes {:warrior (state/create-warrior (state/->Position 6 27))
                                                  :wizard  (state/create-wizard (state/->Position 7 27))
                                                  :medic   (state/create-medic  (state/->Position 6 26))}
                                  :bot-heroes {}
                                  :bot nil})

        (let [resp (:body (gh/handle-game-turn-move {:body-params {:hero-id "warrior"
                                                                   :new-x 7
                                                                   :new-y 26}}))
              updated-hero (get-in @state/game-state [:player-heroes :warrior])
              pos-map {:x (-> updated-hero :position :x)
                       :y (-> updated-hero :position :y)}]
          pos-map => {:x 7 :y 26}
          (:turn @state/game-state) => :bot))

  ;; ------------------------------
  ;; End Bot Turn
  ;; ------------------------------
  (fact "ending bot turn triggers bot actions"
        ;; Reset game state with known positions
        (reset! state/game-state {:turn       :bot
                                  :phase      :move
                                  :bot        (bot/create-bot :easy)
                                  :player-heroes {:warrior (state/create-warrior (state/->Position 41 10))}
                                  :bot-heroes {:warrior (state/create-warrior (state/->Position 42 10))}})

        ;; Redefine bot-play-turn to deterministic result
        (with-redefs [game-logic/bot-play-turn (fn []
                                                 {:success true
                                                  :bot-updated-hero {:type :warrior
                                                                     :hp 1000
                                                                     :position {:x 42 :y 11}}
                                                  :bot-target 0
                                                  :home-target 0
                                                  :bot-action nil
                                                  :end false
                                                  :winner nil})]

          (let [resp (:body (gh/handle-game-turn-end nil))]
            (:status (gh/handle-game-turn-end nil)) => 200
            resp => (contains {:success true
                               :bot-updated-hero anything})))))
