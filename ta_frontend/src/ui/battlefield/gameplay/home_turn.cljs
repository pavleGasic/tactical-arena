(ns ui.battlefield.gameplay.home-turn
  (:require [ui.battlefield.move-overlay :as mo]
            [ui.api.game-api :as game-api]
            [ui.battlefield.state :as state]))

(defn get-home-heroes [id]
  (some #(when (= (:id %) id) %) @state/home-heroes))

(defn perform-move-hero!
  "Perform moving hero to new position and clean placeholder layer"
  [hero new-position]
  (let [hero-id (name (:type hero))
        new-x (:x new-position)
        new-y (:y new-position)]
    (game-api/move-hero hero-id new-x new-y)))

(defn select-hero!
  "Handling click event on home character"
  [hero-id]
  (let [hero (get-home-heroes hero-id)]
    (mo/clear-placeholder-sprites!)
    (swap! state/home-heroes
           #(mapv
              (fn [h]
                (assoc h :selected?
                         (= (:id h) hero-id))) %))
    (mo/display-move-overlay hero (:placeholder @state/assets) perform-move-hero!)))
