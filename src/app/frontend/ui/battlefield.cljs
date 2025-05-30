(ns app.frontend.ui.battlefield
  (:require [app.frontend.ui.components.tiles :as tiles]
            [reagent.core :as r]
            ["pixi.js" :refer [Application Assets Texture Sprite Rectangle Container SCALE_MODES]]))

(def tile-images
  {:empty-ground            (tiles/display-tile "empty_ground.png")
   :corner-shadow-ground    (tiles/display-tile-rotated "corner_shadow_ground.png" 270)
   :top-shadow-ground       (tiles/display-tile-rotated "side_shadow_ground.png" 0)
   :left-shadow-ground      (tiles/display-tile-rotated "side_shadow_ground.png" 270)
   :stone-ground            (tiles/display-tile "stones_in_ground.png")
   :rock-ground             (tiles/display-tile "rocks_in_ground.png")
   :placeholder             (tiles/display-tile "placeholder.png")
   :stone-wall              (tiles/display-tile "stone_wall.png")
   :top-stone-wall          (tiles/display-tile "top_stone_wall.png")
   :left-top-stone-wall     (tiles/display-tile "left_top_stone_wall.png")
   :right-top-stone-wall    (tiles/display-tile "right_top_stone_wall.png")
   :right-side-stone-wall   (tiles/display-tile "right_side_stone_wall.png")
   :left-side-stone-wall    (tiles/display-tile "left_side_stone_wall.png")
   :left-bottom-stone-wall  (tiles/display-tile "left_bottom_stone_wall.png")
   :right-bottom-stone-wall (tiles/display-tile "right_bottom_stone_wall.png")
   :bottom-top-stone-wall   (tiles/display-tile "bottom_top_stone_wall.png")
   })
(defonce map-data (r/atom nil))

(defn load-map! []
  (-> (js/fetch "/assets/map.json")
      (.then #(.json %))
      (.then #(reset! map-data (js->clj % :keywordize-keys true)))
      (.catch #(js/console.error "Failed to load map:" %))))

(defn calc-map-dimensions [{:keys [tileSize layers]} tile-scale]
  (let [height-in-tiles (apply max (mapcat (fn [layer] (map :y (:tiles layer))) layers))
        width-in-tiles (apply max (mapcat (fn [layer] (map :x (:tiles layer))) layers))
        map-height (* (inc height-in-tiles) tileSize tile-scale)
        map-width (* (inc width-in-tiles) tileSize tile-scale)]
    {:map-height map-height :map-width map-width}))


(defn setup-drag-handlers! [container screen-width screen-height map-width map-height]
  (let [dragging (r/atom false)
        offset (r/atom {:x 0 :y 0})]
    (.on container "pointerdown"
         (fn [event]
           (reset! dragging true)
           (let [pos (.-global (.-data event))]
             (reset! offset {:x (- (.-x pos) (.-x container))
                             :y (- (.-y pos) (.-y container))}))))
    (.on container "pointerup" #(reset! dragging false))
    (.on container "pointerupoutside" #(reset! dragging false))
    (.on container "pointermove"
         (fn [event]
           (when @dragging
             (let [pos (.-global (.-data event))
                   new-x (Math/floor (- (.-x pos) (:x @offset)))
                   new-y (Math/floor (- (.-y pos) (:y @offset)))
                   clamped-x (max (min 0 new-x) (- screen-width map-width))
                   clamped-y (max (min 0 new-y) (- screen-height map-height))]
               (set! (.-x container) clamped-x)
               (set! (.-y container) clamped-y)))))
    (set! (.-eventMode container) "dynamic")))

(defn create-sprite [texture id x y tileSize tile-scale]
  (let [cols 8
        tile-w tileSize
        tile-h tileSize
        frame-x (* (mod id cols) tile-w)
        frame-y (* (Math/floor (/ id cols)) tile-h)
        frame (Rectangle. frame-x frame-y tile-w tile-h)
        tile-texture (Texture. texture frame)
        sprite (Sprite. tile-texture)]
    (set! (.-x sprite) (* x tile-w tile-scale))
    (set! (.-y sprite) (* y tile-h tile-scale))
    (set! (.-scale.x sprite) tile-scale)
    (set! (.-scale.y sprite) tile-scale)
    sprite))

(defn populate-map-container! [map-container layers texture tileSize tile-scale]
  (doseq [{:keys [tiles]} layers
          {:keys [id x y]} tiles]
    (let [sprite (create-sprite texture id x y tileSize tile-scale)]
      (.addChild ^js map-container sprite))))

(defn render-tilemap [app]
  (let [{:keys [tileSize layers]} @map-data
        tile-scale 2.5
        map-dimensions (calc-map-dimensions @map-data tile-scale)
        screen-width (.-width (.-renderer app))
        screen-height (.-height (.-renderer app))
        initial-x 0
        initial-y (- screen-height (- (:map-height map-dimensions) 100))
        map-container (Container.)]
    (-> (.load Assets "/assets/spritesheet.png")
        (.then
          (fn [_]
            (let [texture (Texture.from "/assets/spritesheet.png")]
              (set! (.-scaleMode (.-baseTexture texture)) SCALE_MODES.NEAREST)
              (set! (.-x map-container) initial-x)
              (set! (.-y map-container) initial-y)
              (.addChild ^js (.-stage app) map-container)
              (setup-drag-handlers! map-container screen-width screen-height (:map-width map-dimensions) (:map-height map-dimensions))
              (populate-map-container! map-container layers texture tileSize tile-scale)))))))


(defn display-battlefield []
  (let [container (r/atom nil)
        canvas-div (r/atom nil)
        on-resize (r/atom nil)]
    (r/create-class
      {:component-did-mount
       (fn []
         (load-map!)
         (let [resize-handler
               (fn []
                 (when-let [app @container]
                   (.resize (.-renderer app) (.-innerWidth js/window) (.-innerHeight js/window))))]
           (reset! on-resize resize-handler)
           (.addEventListener js/window "resize" resize-handler)))

       :component-will-unmount
       (fn []
         (when @on-resize
           (.removeEventListener js/window "resize" @on-resize)))

       :component-did-update
       (fn []
         (when (and (nil? @container) @map-data @canvas-div)
           (let [app (Application. (clj->js {:width (.-innerWidth js/window) :height (.-innerHeight js/window)}))]
             (reset! container app)
             (.appendChild @canvas-div (.-view app))
             (render-tilemap app))))

       :reagent-render
       (fn []
         [:div
          [:div {:ref #(reset! canvas-div %)}]
          (when-not @map-data
            [:p "Loading-map..."])])})))