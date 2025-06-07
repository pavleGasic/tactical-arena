(ns app.frontend.ui.battlefield.state
  (:require [reagent.core :as r]))

(defonce map-data (r/atom nil))

(defonce overlay-placeholders (r/atom []))

(defonce characters
         (r/atom [{:id 1 :type :warrior :x 6 :y 27 :sprite nil :selected? false}
                  {:id 2 :type :wizard :x 7 :y 27 :sprite nil :selected? false}
                  {:id 3 :type :medic :x 6 :y 26 :sprite nil :selected? false}]))