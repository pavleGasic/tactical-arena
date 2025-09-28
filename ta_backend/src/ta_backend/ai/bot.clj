(ns ta-backend.ai.bot
  (:require [ta-backend.utils.game-utils :as game-utils]
            [ta-backend.game.state :as state]))

(defprotocol BotAI
  (choose-move [this game-state hero])
  (choose-hero [this game-state])
  (choose-action [this game-state]))

(defrecord EasyBot []
  BotAI
  (choose-hero [_ game-state]
    (let [bot-heroes (vals (:bot-heroes game-state))]
      (rand-nth bot-heroes)))

  (choose-move [_ game-state hero]
    (let [moves (game-utils/valid-moves hero game-state @state/game-map)]
      (when (seq moves)
        (let [closest-move (game-utils/closest-to-center moves)
              new-pos (rand-nth (vec closest-move))
              updated-hero (assoc hero :position (state/->Position (:x new-pos) (:y new-pos)))]
          (select-keys updated-hero [:hp :position :type])))))

  (choose-action [_ game-state]
    (let [actions (game-utils/all-bot-actions game-state)]
      (when (seq actions)
        (rand-nth actions)))))

(defrecord HardBot []
  BotAI
  (choose-move [_ game-state __])
  (choose-hero [_ game-state])
  (choose-action [_ game-state]))

(defn create-bot [level]
  (case level
    :easy (->EasyBot)
    :hard (->HardBot)
    (->EasyBot)))

