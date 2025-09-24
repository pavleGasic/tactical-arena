(ns ui.battlefield.hero
  (:require [ui.battlefield.sprite :as sprite]
            [ui.battlefield.state :as state]))


(defn start-attack-phase
  "Changing phase to attack!"
  []
  (swap! state/turn! #(assoc % :phase :attack)))

(defn move-hero
  "Action for clicking on placeholder, moving hero to (`dx`, `dy`)"
  [dx dy hero-id heroes]
  (swap! heroes
         (fn [hs]
           (mapv (fn [h]
                   (if (= (:type h) hero-id)
                     (do
                       (let [sprite (:sprite h)]
                         (sprite/animate-move! sprite
                                               (:x (:position h)) (:y (:position h))
                                               dx dy))
                       (assoc h :position (state/Position. dx dy) :selected? false))
                     h))
                 hs))))

(defn render-heroes!
  "Render every hero onto `map-container` and mutate
  the atom so each hero now carries its `sprite`"
  [heroes side]
  (doseq [h @heroes]
    (js/console.log (clj->js h))
    (let [tex (@state/assets (:type h))
          sprite (sprite/create-hero-sprite h tex side)]
      (swap! heroes
             #(mapv (fn [hs]
                      (if (= (:id hs) (:id h))
                        (assoc hs :sprite sprite)
                        hs))
                    %))
      (.addChild ^js @state/map-container sprite))))

