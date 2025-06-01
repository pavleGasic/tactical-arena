(ns app.frontend.ui.battlefield.core
  (:require [reagent.core :as r]
            [app.frontend.ui.battlefield.state :as state]
            [app.frontend.ui.battlefield.config :as config]
            [app.frontend.ui.battlefield.map :as tilemap]
            [app.frontend.ui.battlefield.overlay :as overlay]
            [app.frontend.ui.battlefield.characters :as characters]
            ["pixi.js" :refer [Application Assets Texture Sprite Rectangle Container SCALE_MODES]]))


(defn render-tilemap [app]
  (let [{:keys [layers]} @state/map-data
        map-dimensions (tilemap/calc-map-dimensions @state/map-data)
        screen-width (.-width (.-renderer app))
        screen-height (.-height (.-renderer app))
        initial-x 0
        initial-y (- screen-height (- (:map-height map-dimensions) 100))
        map-container (Container.)]
    (-> (.load Assets config/spritesheet-path)
        (.then
          (fn [_]
            (-> (.load Assets config/placeholder-path)
                (.then
                  (fn [_]
                    (let [texture (Texture.from config/spritesheet-path)
                          placeholder-texture (Texture.from config/placeholder-path)]
                      (set! (.-scaleMode (.-baseTexture texture)) SCALE_MODES.NEAREST)
                      (set! (.-scaleMode (.-baseTexture placeholder-texture)) SCALE_MODES.NEAREST)

                      (set! (.-x map-container) initial-x)
                      (set! (.-y map-container) initial-y)

                      (.addChild ^js (.-stage app) map-container)

                      (tilemap/setup-drag-handlers! map-container screen-width screen-height (:map-width map-dimensions) (:map-height map-dimensions))
                      (tilemap/populate-map-container! map-container layers texture)
                      (characters/render-characters! map-container)
                      (add-watch state/characters :movement-overlay
                                 (fn [_ _ _ new-state]
                                   (doseq [c new-state]
                                     (when (:selected? c)
                                       (overlay/display-move-overlay map-container c placeholder-texture))))))))))))))

(defn display-battlefield []
  (let [container (r/atom nil)
        canvas-div (r/atom nil)
        on-resize (r/atom nil)]
    (r/create-class
      {:component-did-mount
       (fn []
         (tilemap/load-map!)
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
         (when (and (nil? @container) @state/map-data @canvas-div)
           (let [app (Application. (clj->js {:width (.-innerWidth js/window) :height (.-innerHeight js/window)}))]
             (reset! container app)
             (.appendChild @canvas-div (.-view app))
             (render-tilemap app))))

       :reagent-render
       (fn []
         [:div
          [:div {:ref #(reset! canvas-div %)}]
          (when-not @state/map-data
            [:p "Loading-map..."])])})))

