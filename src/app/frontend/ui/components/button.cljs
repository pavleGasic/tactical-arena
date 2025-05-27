(ns app.frontend.ui.components.button
  (:require [clojure.string :as str]
            [reagent.core :as r]))

(defn primary-button [label on-click]
  [:button.nes-btn.is-primary {:on-click on-click}
   (str/upper-case label)])

(defn success-button [label on-click]
  [:button.nes-btn.is-success {:on-click on-click}
   (str/upper-case label)])

(defn normal-button [label on-click]
  [:button.nes-btn {:on-click on-click}
   (str/upper-case label)])



