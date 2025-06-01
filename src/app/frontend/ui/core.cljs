(ns app.frontend.ui.core
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [app.frontend.ui.main-menu :refer [main-menu]]
            [app.frontend.ui.battlefield.core :refer [display-battlefield]]))

(defonce app-state (r/atom {:screen :menu}))

(defn root-component []
  (let [{:keys [screen]} @app-state]
    (case screen
      :menu [main-menu #(swap! app-state assoc :screen :game)]
      :game [display-battlefield]
      [:div "Unknown screen"])))

(defn init []
  (rdom/render [root-component]
               (.getElementById js/document "app")))