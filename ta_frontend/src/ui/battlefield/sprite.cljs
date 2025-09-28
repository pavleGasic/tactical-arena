(ns ui.battlefield.sprite
  (:require ["pixi.js" :refer [Texture Point Graphics Container Sprite Rectangle Assets Ticker SCALE_MODES]]
            [ui.battlefield.consts :as consts]
            [ui.battlefield.state :as state]
            [cljs.core.async :refer [chan <! timeout go]]))

(defn load-asset [path]
  "Return a promise for loading an asset."
  (.load Assets path))

(defn init-assets []
  "Load all hero and placeholder textures, store in state/assets."
  (let [all-paths (assoc consts/hero-paths :placeholder consts/placeholder-path :spritesheet consts/spritesheet-path)
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
  "Animate hero (`sprite`) move from (`from-x`, `from-y`) to (`to-x`, `to-y`)"
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

(defn create-hero-sprite
  "Create hero sprite from `texture`"
  [hero hero-tex weapon-tex side]
  (let [hero-sprite (Sprite. hero-tex)
        weapon-sprite (Sprite. weapon-tex)
        ph-color (case side
                   :home consts/home-color
                   :opponent consts/opponent-color
                   0x000000)
        ph-sprite (Sprite. (:placeholder @state/assets))]
    (set! (.-x hero-sprite) (* (:x (:position hero)) consts/tile-size consts/tile-scale))
    (set! (.-y hero-sprite) (* (:y (:position hero)) consts/tile-size consts/tile-scale))
    (set! (.-scale.x hero-sprite) consts/tile-scale)
    (set! (.-scale.y hero-sprite) consts/tile-scale)

    (set! (.-scale.x weapon-sprite) consts/weapon-scale)
    (set! (.-scale.y weapon-sprite) consts/weapon-scale)
    (set! (.-x weapon-sprite) -3)
    (set! (.-y weapon-sprite) 7)
    (set! (.-rotation weapon-sprite) -0.3)

    (set! (.-alpha ph-sprite) 0.3)
    (set! (.-tint ph-sprite) ph-color)

    (.addChild hero-sprite weapon-sprite)
    (.addChild hero-sprite ph-sprite)

    (animate-floating! hero-sprite)

    {:hero-sprite hero-sprite :weapon-sprite weapon-sprite}))

(defonce active-tickers (atom {}))

(defn animate-alpha-with-ticker
  "Animate ph-sprite alpha up and down repeatedly using Ticker.
   Store ticker callback in global atom for later removal."
  [ph-sprite start end key]
  (let [t (atom 0)
        step-fn (fn []
                  (swap! t + 0.05)
                  (let [alpha (+ start (* (- end start) (/ (+ 1 (js/Math.sin @t)) 4)))]
                    (set! (.-alpha ph-sprite) alpha)))]
    (swap! active-tickers assoc key step-fn)
    (.add ^js Ticker.shared step-fn)))

(defn make-sprite-glow
  [hero-sprite side hero-id]
  (let [ph-color (case side
                   :home consts/home-color
                   :bot consts/opponent-color
                   0x000000)
        ph-sprite (Sprite. (:placeholder @state/assets))]
    (set! (.-alpha ph-sprite) 0.3)
    (set! (.-tint ph-sprite) ph-color)
    (.addChild ^js hero-sprite ph-sprite)
    (animate-alpha-with-ticker ph-sprite 0.3 1 {side hero-id})
    {:hero-sprite hero-sprite :ph-sprite ph-sprite}))

(defn remove-sprite-glow
  [hero-sprite ph-sprite side hero-id]
  (when-let [cb (@active-tickers {side hero-id})]
    (.remove ^js Ticker.shared cb)
    (swap! active-tickers dissoc {side hero-id}))
  (.removeChild hero-sprite ph-sprite))

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

(defn animate-action
  "Flash hero sprite with color based on action-type (:attack = red, :heal = green).
   Returns a channel that closes after the animation finishes."
  [hero action-type]
  (let [c (chan)
        hero-sprite (:sprite hero)
        orig-tint   (.-tint hero-sprite)
        flash-color (case action-type
                      :attack 0xFF0000
                      :heal   0x00FF00
                      orig-tint)
        duration    1000]
    (set! (.-tint hero-sprite) flash-color)
    (go
      (<! (timeout duration))
      (set! (.-tint hero-sprite) orig-tint)
      (cljs.core.async/close! c))
    c))

(defn remove-sprite
  [sprite]
  (.removeChild ^js @state/map-container sprite))
