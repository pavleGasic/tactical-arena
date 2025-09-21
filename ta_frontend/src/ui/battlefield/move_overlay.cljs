(ns ui.battlefield.move-overlay
  (:require [ui.battlefield.consts :as consts]
            [ui.battlefield.sprite :as sprite]
            [ui.battlefield.state :as state]))

(defn occupied-tile?
  "Return true if tile is not occupied and character can move to this tile"
  [x y characters]
  (some #(and (= (:x (:position %)) x) (= (:y (:position %)) y)) characters))

(defn walkable-tile? [x y map-data]
  (some (fn [layer]
          (some (fn [tile]
                  (and (= (:x tile) x)
                       (= (:y tile) y)
                       (:walkable? tile)
                       (not (occupied-tile? x y @state/home-characters))
                       (not (occupied-tile? x y @state/opponent-characters))))
                (:tiles layer)))
        (:layers map-data)))

(defn clear-placeholder-sprites!
  "Clear sprites which is marker as a :placeholder? on whole `map-container`"
  []
  (doseq [s @state/overlay-placeholders]
    (.removeChild ^js @state/map-container s))
  (reset! state/overlay-placeholders []))

(defn display-move-overlay
  "Display available moves with visible placeholders (`texture`) based on `character` position"
  [character texture perform-move!]
  (let [radius consts/move-overlay-radius
        {:keys [x y]} (:position character)]
    (doseq [dx (range (- x radius) (+ x radius 1))
            dy (range (- y radius) (+ y radius 1))
            :when (and (not= [dx dy] [x y])
                       (walkable-tile? dx dy @state/map-data))]
      (let [sprite (sprite/create-map-tile-sprite texture 0 dx dy)]
        (set! (.-alpha sprite) 0.6)
        (set! (.-eventMode sprite) "dynamic")
        (set! (.-buttonMode sprite) true)
        (.on sprite "pointerdown"
             (fn [_]
               (perform-move! character (state/Position. dx dy))))
        (.addChild ^js @state/map-container sprite)
        (swap! state/overlay-placeholders conj sprite)))))
