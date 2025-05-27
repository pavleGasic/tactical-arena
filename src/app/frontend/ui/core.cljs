(ns app.frontend.ui.core
  (:require [reagent.core :as r]
    [reagent.dom :as rdom]
            [app.frontend.ui.main-menu :refer [main-menu]]))

(defonce app-state (r/atom {:screen :menu}))

(defn root-component []
  (let [{:keys [screen]} @app-state]
    (case screen
      :menu [main-menu #(swap! app-state assoc :screen :game)]
      :game [:div "Game screen coming soon..."]
      [:div "Unknown screen"])))

(defn init []
  (set! (.. js/document -body -style -margin) "0")
  (set! (.. js/document -body -style -padding) "0")
  (rdom/render [root-component]
               (.getElementById js/document "app")))
