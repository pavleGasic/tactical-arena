(ns app.frontend.ui.battlefield.overlay
  (:require [app.frontend.ui.battlefield.state :as state]
            [app.frontend.ui.battlefield.config :as config]
            [app.frontend.ui.battlefield.sprites :as sprites]
            [app.frontend.ui.battlefield.characters :as characters]))


(defn on-placeholder-click [dx dy]
  (swap! state/characters
         (fn [cs]
           (mapv (fn [c]
                   (if (:selected? c)
                     (do
                       (let [sprite (:sprite c)]
                         (characters/animate-move! sprite
                                                   (:x c) (:y c)
                                                   dx dy))
                       (assoc c :x dx :y dy :selected? false))
                     c))
                 cs))))

(defn clear-overlay! [map-container]
  (doseq [s @state/overlay-placeholders]
    (.removeChild ^js map-container s))
  (reset! state/overlay-placeholders []))

(defn display-move-overlay [map-container character texture]
  (let [radius config/move-overlay-radius
        {:keys [x y]} character]
    (doseq [dx (range (- x radius) (+ x radius 1))
            dy (range (- y radius) (+ y radius 1))
            :when (and (not= [dx dy] [x y])
                       (sprites/walkable-tile? dx dy @state/map-data))]
      (let [sprite (sprites/create-map-tile-sprite texture 0 dx dy)]
        (set! (.-alpha sprite) 0.6)
        (set! (.-eventMode sprite) "dynamic")
        (set! (.-buttonMode sprite) true)
        (.on sprite "pointerdown"
             (fn [_]
               (on-placeholder-click dx dy)
               (clear-overlay! map-container)))
        (.addChild ^js map-container sprite)
        (swap! state/overlay-placeholders conj sprite)))))


