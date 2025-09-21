(ns ui.core
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [ui.battlefield.core :refer [display-battlefield]]
            [ui.main-menu :refer [display-main-menu]]))

(defrecord AppState [screen])
(defonce app-state
    (r/atom
      (AppState. :menu)))

(defn root-component []
  (let [{:keys [screen]} @app-state]
    (case screen
      :menu [display-main-menu #(swap! app-state assoc :screen :game)]
      :game [display-battlefield]
      [:div "Unknown screen"])))

(defn init []
  (rdom/render [root-component]
               (.getElementById js/document "app")))