(ns ta-backend.ai.bot
  (:require [ta-backend.utils.game-utils :as game-utils]
            [ta-backend.game.state :as state]))

(defprotocol BotAI
  (choose-move [this game-state hero])
  (choose-hero [this game-state])
  (choose-action [this game-state hero]))

(defrecord EasyBot []
  BotAI
  (choose-hero [_ game-state]
    (let [bot-heroes (vals (:bot-heroes game-state))]
      (rand-nth bot-heroes)))

  (choose-move [_ game-state hero]
    (let [moves (game-utils/valid-moves hero game-state @state/game-map)]
      (when (seq moves)
        (let [new-pos (rand-nth moves)]
          (assoc hero :position (state/->Position (:x new-pos) (:y new-pos)))))))

  (choose-action [_ game-state hero]
    (let [actions (game-utils/available-actions hero game-state)]
      (when (seq actions)
        (rand-nth actions)
        actions))))

(defrecord HardBot []
  BotAI
  (choose-move [_ game-state __])
  (choose-hero [_ game-state])
  (choose-action [_ game-state __]))

(defn create-bot [level]
  (case level
    :easy (->EasyBot)
    :hard (->HardBot)
    (->EasyBot)))

