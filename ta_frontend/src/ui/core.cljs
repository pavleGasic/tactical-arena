(ns ui.core
  (:require [ui.state :as state]
            [reagent.dom :as rdom]
            [ui.battlefield.core :refer [display-battlefield]]
            [ui.main-menu :refer [display-main-menu]]
            [ui.components.dialog :as dialog]))

(defn root-component []
  [:<>
   (let [{:keys [screen]} @state/app-state]
     (case screen
       :menu [display-main-menu]
       :game [display-battlefield]
       [:div "Unknown screen"]))
   [dialog/error-dialog]
   [dialog/info-dialog]])

(defn init []
  (rdom/render [root-component]
               (.getElementById js/document "app")))