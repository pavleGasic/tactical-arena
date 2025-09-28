(ns ta-backend.game.state
  (:require [ta-backend.game.consts :as consts]))
(defonce game-map (atom nil))
(defrecord Hero [type position hp max-hp])
(defrecord Bot [level])
(defrecord Position [x y])
(defrecord GameState [player-heroes bot-heroes bot turn phase])

(defonce game-state (atom
                      (->GameState {} {} nil nil nil)))

(defrecord Action [type from to])

(defn create-warrior
  [position]
  (->Hero :warrior position consts/warrior-max-health consts/warrior-max-health))

(defn create-wizard
  [position]
  (->Hero :wizard position consts/wizard-max-health consts/wizard-max-health))

(defn create-medic
  [position]
  (->Hero :medic position consts/medic-max-health consts/medic-max-health))
