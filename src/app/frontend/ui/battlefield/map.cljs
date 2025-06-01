(ns app.frontend.ui.battlefield.map
  (:require [app.frontend.ui.battlefield.state :as state]
            [app.frontend.ui.battlefield.config :as config]
            [app.frontend.ui.battlefield.sprites :as sprites]
            [reagent.core :as r]))

(defn load-map! []
  (-> (js/fetch "/assets/map.json")
      (.then #(.json %))
      (.then #(reset! state/map-data (js->clj % :keywordize-keys true)))
      (.catch #(js/console.error "Failed to load map:" %))))

(defn calc-map-dimensions [{:keys [tileSize layers]}]
  (let [height-in-tiles (apply max (mapcat (fn [layer] (map :y (:tiles layer))) layers))
        width-in-tiles (apply max (mapcat (fn [layer] (map :x (:tiles layer))) layers))
        map-height (* (inc height-in-tiles) tileSize config/tile-scale)
        map-width (* (inc width-in-tiles) tileSize config/tile-scale)]
    {:map-height map-height :map-width map-width}))

(defn populate-map-container! [map-container layers texture]
  (doseq [{:keys [tiles]} layers
          {:keys [id x y]} tiles]
    (let [sprite (sprites/create-map-tile-sprite texture id x y)]
      (js/console.log (clj->js sprite))
      (.addChild ^js map-container sprite))))

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