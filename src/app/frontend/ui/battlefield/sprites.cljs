(ns app.frontend.ui.battlefield.sprites
  (:require ["pixi.js" :refer [Texture Sprite Rectangle]]
            [app.frontend.ui.battlefield.config :as config]
            [app.frontend.ui.battlefield.state :as state]))

(defn create-map-tile-sprite [texture id x y]
  (let [cols 8
        tile-w config/tile-size
        tile-h config/tile-size
        frame-x (* (mod id cols) tile-w)
        frame-y (* (Math/floor (/ id cols)) tile-h)
        frame (Rectangle. frame-x frame-y tile-w tile-h)
        tile-texture (Texture. texture frame)
        sprite (Sprite. tile-texture)]
    (set! (.-x sprite) (* x tile-w config/tile-scale))
    (set! (.-y sprite) (* y tile-h config/tile-scale))
    (set! (.-scale.x sprite) config/tile-scale)
    (set! (.-scale.y sprite) config/tile-scale)
    sprite))

(defn create-character-sprite [character texture]
  (let [sprite (Sprite. texture)]
    (set! (.-x sprite) (* (:x character) config/tile-size config/tile-scale))
    (set! (.-y sprite) (* (:y character) config/tile-size config/tile-scale))
    (set! (.-scale.x sprite) config/tile-scale)
    (set! (.-scale.y sprite) config/tile-scale)
    (set! (.-eventMode sprite) "dynamic")
    (set! (.-buttonMode sprite) true)
    (.on sprite "pointerdown"
         (fn [_]
           (swap! state/characters #(mapv (fn [c] (assoc c :selected? (= (:id c) (:id character)))) %))))
    sprite))
