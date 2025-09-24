(ns ui.state
  (:require [reagent.core :as r]))

(defrecord AppState [screen])
(defonce app-state
         (r/atom
           (AppState. :menu)))