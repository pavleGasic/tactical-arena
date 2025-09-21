(ns ui.battlefield.character
  (:require [ui.battlefield.sprite :as sprite]
            [ui.battlefield.state :as state]))

(defn move-character
  "Action for clicking on placeholder, moving character to (`dx`, `dy`)"
  [dx dy characters]
  (swap! characters
         (fn [cs]
           (mapv (fn [c]
                   (if (:selected? c)
                     (do
                       (let [sprite (:sprite c)]
                         (sprite/animate-move! sprite
                                               (:x (:position c)) (:y (:position c))
                                               dx dy))
                       (assoc c :position (state/Position. dx dy) :selected? false))
                     c))
                 cs))))
(defn render-characters!
  "Render every character onto `map-container` and mutate
  the atom so each character now carries its `sprite`"
  [characters side]
  (doseq [c @characters]
    (let [tex (@state/assets (:type c))
          sprite (sprite/create-character-sprite c tex side)]
      (swap! characters
             #(mapv (fn [ch]
                      (if (= (:id ch) (:id c))
                        (assoc ch :sprite sprite)
                        ch))
                    %))
      (.addChild ^js @state/map-container sprite))))

