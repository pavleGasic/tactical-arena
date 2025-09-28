(ns ui.battlefield.gameplay.home-turn
  (:require [ui.battlefield.move-overlay :as mo]
            [ui.api.game-api :as game-api]
            [ui.battlefield.state :as state]))

(defn get-home-hero [id]
  (some #(when (= (:id %) id) %) @state/home-heroes))

(defn perform-move-hero!
  "Perform moving hero to new position and clean placeholder layer"
  [hero new-position]
  (let [hero-id (name (:type hero))
        new-x (:x new-position)
        new-y (:y new-position)]
    (game-api/move-hero hero-id new-x new-y)))

(defn unselect-home-heroes
  []
  (swap! state/home-heroes
         #(mapv
            (fn [h]
              (assoc h :selected? false)) %)))

(defn select-hero!
  "Handling click event on home character"
  [hero-id]
  (let [hero (get-home-hero hero-id)]
    (mo/clear-placeholder-sprites!)
    (swap! state/home-heroes
           #(mapv
              (fn [h]
                (assoc h :selected?
                         (= (:id h) hero-id))) %))
    (mo/display-move-overlay hero (:placeholder @state/assets) perform-move-hero!)))

(defn select-hero-for-attack
  [hero-type]
  (swap! state/home-heroes
         #(mapv
            (fn [h]
              (assoc h :selected?
                       (= (:type h) hero-type))) %)))
(defn perform-action
  [available-actions type]
  (mo/remove-sprite-glow-overlay! :home)
  (select-hero-for-attack type)
  (mo/display-sprite-glow-overlay available-actions))

(defn heal-action
  [from to]
  (let [from-hero (select-keys from [:type :position])
        to-hero (select-keys to [:type :position])]
    (ui.api.game-api/hero-action from-hero to-hero :heal)))