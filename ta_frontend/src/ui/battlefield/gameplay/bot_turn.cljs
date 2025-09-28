(ns ui.battlefield.gameplay.bot-turn
  (:require [ui.battlefield.state :as state]
            [ui.battlefield.hero :as hero]))

(defn perform-move-hero
  "Perform moving bot hero to new position"
  [bot-updated-hero]
  (let [bot-new-position (:position bot-updated-hero)
        hero-id (keyword (:type bot-updated-hero))]
    (hero/move-hero (:x bot-new-position) (:y bot-new-position) hero-id state/bot-heroes)))

(defn perform-action
  "Perform bot action"
  [hero]
  (let [bot-hero (select-keys (some #(when (= (:type %) (:type hero)) %) @state/bot-heroes)
                              [:type :position])
        hh (some #(when (:selected? %) %) @state/home-heroes)
        available-actions (:available-actions hh)
        home-hero (select-keys hh [:type :position])
        matching-action (some #(when (and (= (:type %) "attack")
                                          (= (ui.service.utils/get-hero-type (:type (:to %)))
                                             (:type bot-hero)))
                                 %)
                              available-actions)]
    (when matching-action
      (ui.api.game-api/hero-action home-hero bot-hero :attack))))
