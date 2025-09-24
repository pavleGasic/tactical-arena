(ns ui.battlefield.state
  (:require [reagent.core :as r]))

(defonce assets (r/atom {}))
(defonce map-data (r/atom nil))

(defonce map-container (r/atom nil))

(defonce overlay-placeholders (r/atom []))

(defrecord Position [x y])
(defrecord Hero [id type position sprite selected? health max-health])
(defonce home-heroes (r/atom []))
(defonce opponent-heroes (r/atom []))

(defrecord Turn [turn-no
                 phase])
(defonce turn!
         (r/atom
           (->Turn 1 :select)))
