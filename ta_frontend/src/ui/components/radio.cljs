(ns ui.components.radio
  (:require [reagent.core :as r]))

(defonce selected-level (r/atom :easy))

(defn radio-button
  "Reusable radio button with NES.css styling"
  [{:keys [value label group]}]
  [:label
   [:input {:type      "radio"
            :class     "nes-radio"
            :name      group
            :checked   (= value @selected-level)
            :on-change #(reset! selected-level value)}]
   [:span label]])

