(ns ui.battlefield.state
  (:require [reagent.core :as r]))

(defonce assets (r/atom {}))
(defonce map-data (r/atom nil))

(defonce map-container (r/atom nil))

(defonce overlay-placeholders (r/atom []))

(defrecord Position [x y])
(defrecord Hero [id type position sprite weapon-sprite selected? health max-health available-actions])
(defonce home-heroes (r/atom []))
(defonce bot-heroes (r/atom []))

(defrecord Turn [turn-no
                 phase])
(defonce turn!
         (r/atom
           (->Turn 1 :select)))

(defonce active-glows (atom {}))

(defrecord Action [type to])

(defonce home-turns-in-target (atom 0))
(defonce bot-turns-in-target (atom 0))
