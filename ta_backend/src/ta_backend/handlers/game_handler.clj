(ns ta-backend.handlers.game-handler
  (:require [ta-backend.game.game-logic :refer [start-game move-hero bot-play-turn do-action]]
            [ring.util.http-response :as response]
            [ta-backend.logger :as logger]
            [ta-backend.ai.bot :as bot]))

(defn handle-game-start [request]
  (try
    (let [bot-level (keyword (get-in request [:query-params "bot-level"] "easy"))
          bot-ai    (bot/create-bot bot-level)
          game-state (start-game bot-ai)
          json-state (select-keys game-state [:phase :turn :bot-heroes :player-heroes])]
      (response/ok json-state))
    (catch Exception e
      (logger/error e "Failed to start game")
      (response/conflict {:error "Failed to start game"}))))

(defn handle-game-turn-move [request]
  (try
    (let [body    (:body-params request)
          hero-id (some-> (:hero-id body) keyword)
          new-x   (:new-x body)
          new-y   (:new-y body)]
      (if hero-id
        (let [result (move-hero hero-id new-x new-y)]
          (response/ok result))
        (response/conflict {:success false :error "Wrong hero-id"})))
    (catch Exception e
      (logger/error e "Failed to perform move")
      (response/conflict {:success false :error "Invalid move"}))))

(defn handle-game-turn-action [request]
  (try
    (let [body   (:body-params request)
          action (some-> (:action body) keyword)
          from   (:from body)
          to     (:to body)
          result (do-action action from to)]
      (if (:success result)
        (response/ok result)
        (response/conflict {:success false :error "Wrong action"})))
    (catch Exception e
      (logger/error e "Failed to perform action")
      (response/conflict {:success false :error "Invalid action"}))))

(defn handle-game-turn-end [_]
  (try
    (let [result (bot-play-turn)]
      (if (:success result)
        (response/ok result)
        (response/bad-request result)))
    (catch Exception e
      (logger/error e "Failed to perform bot turn")
      (response/conflict {:success false :error "Failed to end turn"}))))
