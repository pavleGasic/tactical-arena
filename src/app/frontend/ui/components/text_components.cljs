(ns app.frontend.ui.components.text-components
  (:require [reagent.core :as r]))

(defn animated-text [text]
  (r/with-let [displayed-text (r/atom "")]

              (js/setInterval
                (fn []
                  (let [current-length (count @displayed-text)]
                    (when (< current-length (count text))
                      (swap! displayed-text str (nth text current-length)))))
                200)

              (fn []
                [:h1 {:style {:font-size   "42px"
                              :font-family "'Press Start 2P', cursive"
                              :white-space "nowrap"
                              :overflow    "hidden"}}
                 @displayed-text])))