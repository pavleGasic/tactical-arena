(ns ui.battlefield.state
  (:require [reagent.core :as r]))

(defonce warrior-health 1000)
(defonce medic-health 600)
(defonce wizard-health 400)
(defonce assets (r/atom {}))
(defonce map-data (r/atom nil))

(defonce map-container (r/atom nil))

(defonce overlay-placeholders (r/atom []))

(defrecord Position [x y])
(defrecord Character [id type position sprite selected? health max-health])
(defonce home-characters
         (r/atom
           [(->Character 1 :warrior (Position. 6 27) nil false warrior-health warrior-health)
            (->Character 2 :wizard (Position. 7 27) nil false wizard-health wizard-health)
            (->Character 3 :medic (Position. 6 26) nil false medic-health medic-health)]))

(defonce opponent-characters
         (r/atom
           [(->Character 4 :warrior (Position. 42 7) nil false warrior-health warrior-health)
            (->Character 5 :wizard (Position. 42 8) nil false wizard-health wizard-health)
            (->Character 6 :medic (Position. 41 7) nil false medic-health medic-health)]))

(defrecord Turn [turn
                 current                                    ;; :home | :opponent
                 phase                                      ;; :select | :move | :attack
                 selected-id])
(defonce turn!
         (r/atom
           (->Turn 1 :home :select nil)))
