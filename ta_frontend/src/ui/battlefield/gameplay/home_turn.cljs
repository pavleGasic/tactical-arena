(ns ui.battlefield.gameplay.home-turn
  (:require [ui.battlefield.move-overlay :as mo]
            [ui.battlefield.character :as character]
            [ui.battlefield.state :as state]))

(defn get-home-character [id]
  (some #(when (= (:id %) id) %) @state/home-characters))

(defn perform-move-character!
  "Perform moving character to new position and clean placeholder layer"
  [char new-position]
  (swap! state/turn! assoc :selected-id (:id char) :phase :move)
  (character/move-character (:x new-position) (:y new-position) state/home-characters)
  (swap! state/turn! assoc :selected-id (:id char) :phase :attack)
  (mo/clear-placeholder-sprites!))

(defn select-character!
  "Handling click event on home character"
  [character-id]
  (let [character (get-home-character character-id)]
    (mo/clear-placeholder-sprites!)
    (swap! state/home-characters
           #(mapv
              (fn [c]
                (assoc c :selected?
                         (= (:id c) character-id))) %))
    (mo/display-move-overlay character (:placeholder @state/assets) perform-move-character!)))
