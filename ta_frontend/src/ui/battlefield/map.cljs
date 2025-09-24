(ns ui.battlefield.map
  (:require [ui.battlefield.state :as state]
            [ui.battlefield.consts :as consts]
            [ui.battlefield.sprite :as sprite]
            [reagent.core :as r]
            ["pixi.js" :refer [Application Assets Texture Sprite Rectangle Container SCALE_MODES]]))


(def walkable-tile-ids
  "Based on /public/assets/spritesheet.png defined sprite numbers on witch hero can walk"
  #{"10" "11" "12" "19" "23" "26" "27" "28" "29"})

(defn mark-walkable-tile
  "Mark `tile` :walkable? if have id in `walkable-sprite-ids`"
  [tile]
  (assoc tile :walkable? (contains? walkable-tile-ids (:id tile))))

(defn mark-walkable-layer
  "Update `layer` with :walkable? tiles"
  [layer]
  (update layer :tiles #(mapv mark-walkable-tile %)))

(defn map-populated?
  "Returns true if `map-data` is loaded (not nil)"
  []
  (some? @state/map-data))

(defn load-map-data!
  "Load map asset and mutate `map-data` atom"
  []
  (-> (js/fetch consts/map-path)
      (.then #(.json %))
      (.then
        (fn [raw-data]
          (let [data (js->clj raw-data :keywordize-keys true)
                layers (:layers data)
                updated-layers (mapv mark-walkable-layer layers)]
            (reset! state/map-data (assoc data :layers updated-layers)))))
      (.catch #(js/console.error "Failed to load map: " %))))

(defn calculate-map-dimensions
  "Calculate map dimensions based on `tileSize` and `tile-scale`"
  [{:keys [tileSize layers]}]
  (let [height-in-tiles (apply max (mapcat (fn [layer] (map :y (:tiles layer))) layers))
        width-in-tiles (apply max (mapcat (fn [layer] (map :x (:tiles layer))) layers))
        map-height (* (inc height-in-tiles) tileSize consts/tile-scale)
        map-width (* (inc width-in-tiles) tileSize consts/tile-scale)]
    {:map-height map-height :map-width map-width}))

(defn populate-map-container!
  "Populate `map-container` with tiles in layers"
  [layers texture]
  (doseq [{:keys [tiles]} layers
          {:keys [id x y]} tiles]
    (let [sprite (sprite/create-map-tile-sprite texture id x y)]
      (.addChild ^js @state/map-container sprite))))

(defn init-drag-handlers!
  "Setup for dragging map to move through it"
  [screen-width screen-height map-width map-height]
  (let [dragging (r/atom false)
        offset (r/atom {:x 0 :y 0})
        container @state/map-container]
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

(defn render-tilemap
  "Render tilemap to `app` (pixi.js -> Application)"
  [app]
  (let [{:keys [layers]} @state/map-data
        {:keys [map-width map-height]} (calculate-map-dimensions @state/map-data)
        screen-width (.-width (.-renderer app))
        screen-height (.-height (.-renderer app))
        initial-x 0
        initial-y (- screen-height (- map-height 100))]
    (reset! state/map-container (Container.))
    (set! (.-x @state/map-container) initial-x)
    (set! (.-y @state/map-container) initial-y)
    (.addChild ^js (.-stage app) @state/map-container)

    (init-drag-handlers! screen-width screen-height map-width map-height)

    (populate-map-container! layers (:spritesheet @state/assets))))

(defn init-pixi-map!
  "Initializes the PIXI application, stores it in `container`,
   appends its canvas to the DOM, and renders the tilemap."
  [container canvas-div]
  (when (and (nil? @container) @state/map-data @canvas-div)
    (let [app (Application. (clj->js {:width (.-innerWidth js/window)
                                      :height (.-innerHeight js/window)}))]
      (reset! container app)
      (.appendChild @canvas-div (.-view app))
      (render-tilemap app))))