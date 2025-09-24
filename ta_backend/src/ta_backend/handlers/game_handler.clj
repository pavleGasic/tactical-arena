(ns ta-backend.handlers.game-handler
  (:require [ta-backend.game.game-logic :refer [start-game move-hero]]
            [ring.util.http-response :as response]
            [ta-backend.logger :as logger]
            [ta-backend.game.state :as state]
            [ta-backend.ai.bot :as bot]))

(defn handle-game-start [request]
  (try
    (let [bot-level (keyword (get-in request [:query-params "bot-level"] "easy"))
          bot (bot/create-bot bot-level)
          game-state (start-game bot)
          json-state (into {} game-state)]
      (response/ok json-state))
    (catch Exception e
      (logger/error e (str "Failed to start game"))
      (response/conflict {:error "Failed to start game"}))))

(defn handle-game-turn-move [request]
  (try
    (let [body (:body-params request)
          hero-id (keyword (:hero-id body))
          new-x (:new-x body)
          new-y (:new-y body)]
      (if hero-id
        (let [response (move-hero hero-id new-x new-y)]
          (response/ok response))
        (response/conflict {:success false :error "Wrong hero-id"})))
    (catch Exception e
      (logger/error e (str "Failed to perform move"))
      (response/conflict {:success false :error "Invalid move"}))))

(defn handle-game-turn-end [_]
  (try
    (let [game-state @state/game-state
          bot (:bot game-state)]
      (if (= (:turn game-state) :bot)
        (let [hero (bot/choose-hero bot game-state)
              move (bot/choose-move bot game-state hero)
              action (bot/choose-action bot @state/game-state hero)]
          (response/ok {:success true
                        :bot-updated-heroes move
                        :player-updated-heroes action}))
        (response/conflict {:success false
                            :error "Not bot's turn"})))
    (catch Exception e
      (logger/error e (str "Failed to perform move"))
      (response/conflict {:success false :error "Failed to end turn"}))))