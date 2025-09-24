(ns ui.battlefield.core
  (:require [reagent.core :as r]
            [ui.battlefield.map :as map]
            [ui.battlefield.gameplay.core :as gameplay]
            [ui.battlefield.info-bar :refer [info-bar]]
            [ui.battlefield.state :as state]
            [ui.battlefield.sprite :as sprite]))

(defn display-battlefield
  "Root function for loading battlefield and initialize game"
  []
  (let [container (r/atom nil)
        canvas-div (r/atom nil)
        on-resize (r/atom nil)]
    (r/create-class
      {:component-did-mount
       (fn []
         (sprite/init-assets)
         (add-watch state/assets :init-assets
                    (fn [_ _ _ new-assets]
                      (when new-assets
                        (map/load-map-data!)
                        (remove-watch state/assets :init-assets))))
         (add-watch state/map-data :init-pixi
                    (fn [_ _ _ new-map]
                      (when new-map
                        (map/init-pixi-map! container canvas-div)
                        (gameplay/start-game)
                        (remove-watch state/map-data :init-pixi))))
         (let [resize-handler
               #(when-let [app @container]
                  (.resize (.-renderer app) (.-innerWidth js/window) (.-innerHeight js/window)))]
           (reset! on-resize resize-handler)
           (.addEventListener js/window "resize" resize-handler)))

       :component-will-unmount
       (fn []
         (when @on-resize
           (.removeEventListener js/window "resize" @on-resize)))

       :reagent-render
       (fn []
         [:div {:style {:position "relative"
                        :width    "100vw"
                        :height   "100vh"}}
          [:div {:ref   #(reset! canvas-div %)
                 :style {:width "100%" :height "100%"}}]

          [info-bar]

          (when-not (map/map-populated?)
            [:p {:style {:position "absolute" :top "50%" :left "50%" :transform "translate(-50%, -50%)"}}
             "Loading map..."])])})))