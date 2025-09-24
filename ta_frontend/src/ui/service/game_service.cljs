(ns ui.service.game-service
  (:require [ui.battlefield.state :as state]
            [ui.state :refer [app-state]]
            [ui.battlefield.hero :as hero]
            [ui.battlefield.move-overlay :as mo]))
(defn get-type [stype]
  (case stype
    "warrior" :warrior
    "wizard" :wizard
    "medic" :medic))

(defn map-hero [id hero-data]
  (state/->Hero id
                (get-type (:type hero-data))
                (js->clj (:position hero-data) :keywordize-keys true)
                nil
                false
                (:hp hero-data)
                (:max-hp hero-data)))

(defn handle-start-game
  "Handle data from /game/start and populate `home-heroes` and `opponent-heroes`"
  [response]
  (let [data (js->clj response :keywordize-keys true)
        player-heroes (:player-heroes data)
        bot-heroes (:bot-heroes data)]
    (reset! state/home-heroes
            [(map-hero 1 (:warrior player-heroes))
             (map-hero 2 (:wizard player-heroes))
             (map-hero 3 (:medic player-heroes))])

    (reset! state/opponent-heroes
            [(map-hero 4 (:warrior bot-heroes))
             (map-hero 5 (:wizard bot-heroes))
             (map-hero 6 (:medic bot-heroes))])
    (swap! app-state assoc :screen :game)))

(defn handle-move-hero
  "Handle data from /game/move and populate `home-heroes` and `opponent-heroes`"
  [response]
  (let [data (js->clj response :keywordize-keys true)
        updated-hero (:updated-hero data)
        position (:position updated-hero)
        hero-id (keyword (:type updated-hero))]
    (hero/move-hero (:x position) (:y position) hero-id state/home-heroes)
    (mo/clear-placeholder-sprites!)
    (hero/start-attack-phase)))



