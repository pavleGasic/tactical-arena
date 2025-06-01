(ns app.frontend.ui.battlefield.characters
  (:require [app.frontend.ui.battlefield.state :as state]
            [app.frontend.ui.battlefield.sprites :as sprites]
            ["pixi.js" :refer [Texture Assets SCALE_MODES]]
            [app.frontend.ui.battlefield.config :as config]))


(defn animate-move! [sprite from-x from-y to-x to-y]
  (let [start-time (.now js/performance)
        pixel-from-x (* from-x config/tile-size config/tile-scale)
        pixel-from-y (* from-y config/tile-size config/tile-scale)
        pixel-to-x (* to-x config/tile-size config/tile-scale)
        pixel-to-y (* to-y config/tile-size config/tile-scale)]
    (letfn [(step []
              (let [now (.now js/performance)
                    elapsed (- now start-time)
                    t (min 1 (/ elapsed 300))
                    new-x (+ pixel-from-x (* (- pixel-to-x pixel-from-x) t))
                    new-y (+ pixel-from-y (* (- pixel-to-y pixel-from-y) t))]
                (set! (.-x sprite) new-x)
                (set! (.-y sprite) new-y)
                (when (< t 1)
                  (js/requestAnimationFrame step))))]
      (js/requestAnimationFrame step))))

(defn render-characters! [map-container]
  (-> (.load Assets config/warrior-sprite-path)
      (.then (fn [_]
               (let [texture (Texture.from config/warrior-sprite-path)]
                 (set! (.-scaleMode (.-baseTexture texture)) SCALE_MODES.NEAREST)
                 (doseq [character @state/characters]
                   (let [sprite (sprites/create-character-sprite character texture)]
                     (swap! state/characters #(mapv (fn [c]
                                                (if (= (:id c) (:id character))
                                                  (assoc c :sprite sprite) c)) %))
                     (.addChild ^js map-container sprite))))))))