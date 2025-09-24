(ns ta-backend.game.state)

(defonce warrior-max-health 1000)
(defonce medic-max-health 600)
(defonce wizard-max-health 400)
(defonce game-map (atom nil))
(defrecord Hero [type position hp max-hp can-attack? can-heal?])
(defrecord Bot [level])
(defrecord Position [x y])
(defrecord GameState [player-heroes bot-heroes bot turn phase])

(defonce game-state (atom
                      (->GameState {} {} nil nil nil)))

(defn create-warrior
  [position]
  (->Hero :warrior position warrior-max-health warrior-max-health nil nil))

(defn create-wizard
  [position]
  (->Hero :wizard position wizard-max-health wizard-max-health nil nil))

(defn create-medic
  [position]
  (->Hero :medic position medic-max-health medic-max-health nil nil))
