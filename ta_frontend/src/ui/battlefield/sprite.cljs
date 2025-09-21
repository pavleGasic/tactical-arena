(ns ui.battlefield.sprite
  (:require ["pixi.js" :refer [Texture Graphics Container Sprite Rectangle Assets Ticker SCALE_MODES]]
            [ui.battlefield.consts :as consts]
            [ui.battlefield.state :as state]))

(defn load-asset [path]
  "Return a promise for loading an asset."
  (.load Assets path))

(defn init-assets []
  "Load all character and placeholder textures, store in state/assets."
  (let [all-paths (assoc consts/character-paths :placeholder consts/placeholder-path :spritesheet consts/spritesheet-path)
        paths (vals all-paths)]
    (-> (js/Promise.all (clj->js (map load-asset paths)))
        (.then (fn [_]
                 (reset! state/assets
                         (reduce-kv (fn [acc k p]
                                      (assoc acc k (Texture.from p)))
                                    {}
                                    all-paths))
                 (doseq [[_ tex] @state/assets]
                   (set! (.-scaleMode (.-baseTexture tex)) SCALE_MODES.NEAREST)))))))

(defn animate-move!
  "Animate character (`sprite`) move from (`from-x`, `from-y`) to (`to-x`, `to-y`)"
  [sprite from-x from-y to-x to-y]
  (let [start-time (.now js/performance)
        pixel-from-x (* from-x consts/tile-size consts/tile-scale)
        pixel-from-y (* from-y consts/tile-size consts/tile-scale)
        pixel-to-x (* to-x consts/tile-size consts/tile-scale)
        pixel-to-y (* to-y consts/tile-size consts/tile-scale)]
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

(defn animate-floating! [sprite]
  (let [t (atom 0)
        float-offset (atom 0)]
    (.add ^js Ticker.shared
          (fn []
            (swap! t + 0.05)
            (let [offset (* 2 (js/Math.sin @t))]
              (set! (.-y sprite) (+ (.-y sprite) (- offset @float-offset)))
              (reset! float-offset offset))))))

(defn create-character-sprite
  "Create character sprite from `texture`"
  [character texture side]
  (let [sprite (Sprite. texture)
        ph-color  (case side
                 :home     consts/home-color
                 :opponent consts/opponent-color
                 0x000000)
        ph-sprite (Sprite. (:placeholder @state/assets))]
    (set! (.-x sprite) (* (:x (:position character)) consts/tile-size consts/tile-scale))
    (set! (.-y sprite) (* (:y (:position character)) consts/tile-size consts/tile-scale))
    (set! (.-scale.x sprite) consts/tile-scale)
    (set! (.-scale.y sprite) consts/tile-scale)

    (set! (.-alpha ph-sprite) 0.3)
    (set! (.-tint ph-sprite) ph-color)

    (.addChild sprite ph-sprite)

    (animate-floating! sprite)

    sprite))

(defn create-map-tile-sprite
  "Return `sprite` for displaying map based on `texture` and position"
  [texture id x y]
  (let [cols consts/spritesheet-cols
        tile-size consts/tile-size
        frame-x (* (mod id cols) tile-size)
        frame-y (* (Math/floor (/ id cols)) tile-size)
        frame (Rectangle. frame-x frame-y tile-size tile-size)
        tile-texture (Texture. texture frame)
        sprite (Sprite. tile-texture)]
    (set! (.-x sprite) (* x tile-size consts/tile-scale))
    (set! (.-y sprite) (* y tile-size consts/tile-scale))
    (set! (.-scale.x sprite) consts/tile-scale)
    (set! (.-scale.y sprite) consts/tile-scale)
    sprite))