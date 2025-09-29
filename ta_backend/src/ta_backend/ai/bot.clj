(ns ta-backend.ai.bot
  (:require [ta-backend.utils.game-utils :as game-utils]
            [ta-backend.game.state :as state]
            [ta-backend.ai.heuristics :as heuristics]))

(defprotocol BotAI
  (choose-hero [this game-state])
  (choose-move [this game-state hero])
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
  (choose-hero [_ game-state]
    (heuristics/store-decision! game-state @state/game-map)
    (heuristics/pick-best-hero))

  (choose-move [_ __ ___]
    (heuristics/pick-best-move))

  (choose-action [_ __]
    (heuristics/pick-best-action)))


(defn create-bot [level]
  (case level
    :easy (->EasyBot)
    :hard (->HardBot)
    (->EasyBot)))

