(ns ui.service.game-service
  (:require [ui.battlefield.state :as state]
            [ui.state :refer [app-state]]
            [ui.battlefield.hero :as hero]
            [ui.battlefield.move-overlay :as mo]
            [ui.service.utils :as utils]
            [ui.components.dialog :as dialog]
            [ui.battlefield.gameplay.bot-turn :as bot-turn]))

(defn update-turns-in-target
  [home bot]
  (reset! state/home-turns-in-target home)
  (reset! state/bot-turns-in-target bot))


(defn map-hero [id hero-data]
  (state/->Hero id
                (utils/get-hero-type (:type hero-data))
                (js->clj (:position hero-data) :keywordize-keys true)
                nil
                nil
                false
                (:hp hero-data)
                (:max-hp hero-data)
                []))

(defn handle-start-game
  "Handle data from /game/start and populate `home-heroes` and `bot-heroes`"
  [response]
  (let [data (js->clj response :keywordize-keys true)
        player-heroes (:player-heroes data)
        bot-heroes (:bot-heroes data)]
    (reset! state/home-heroes
            [(map-hero 1 (:warrior player-heroes))
             (map-hero 2 (:wizard player-heroes))
             (map-hero 3 (:medic player-heroes))])

    (reset! state/bot-heroes
            [(map-hero 4 (:warrior bot-heroes))
             (map-hero 5 (:wizard bot-heroes))
             (map-hero 6 (:medic bot-heroes))])
    (swap! app-state assoc :screen :game)))

(defn handle-move-hero
  "Handle data from /game/turn/move and update `home-heroes` and `bot-heroes`"
  [response]
  (let [data (js->clj response :keywordize-keys true)
        updated-hero (:updated-hero data)
        available-actions (:available-actions data)
        position (:position updated-hero)
        hero-id (keyword (:type updated-hero))]
    (hero/move-hero (:x position) (:y position) hero-id state/home-heroes)
    (mo/clear-placeholder-sprites!)
    (if (not (empty? available-actions))
      (hero/start-action-phase available-actions)
      (ui.api.game-api/end-turn))))

(defn handle-home-hero-action
  "Handle data from /game/turn/action and update `home-heroes` and `bot-heroes`"
  [response]
  (let [data (js->clj response :keywordize-keys true)
        to-heroes (if (:to-bot data)
                    state/bot-heroes
                    state/home-heroes)
        to (if (:to-bot data)
             (:to-bot data)
             (:to-home data))]
    (hero/do-action to to-heroes (keyword (:action data)) true)))

(defn handle-end-move
  "Handle data from /game/turn/end and update `home-heroes` and `bot-heroes"
  [response]
  (let [data (js->clj response :keywordize-keys true)
        bot-updated-hero (:bot-updated-hero data)
        bot-action (:bot-action data)
        home-turns (:home-target data)
        bot-turns (:bot-target data)
        end (:end data)
        winner (:winner data)
        to-heroes (if (:to-bot bot-action)
                    state/bot-heroes
                    state/home-heroes)
        to (if (:to-bot bot-action)
             (:to-bot bot-action)
             (:to-home bot-action))]
    (update-turns-in-target home-turns bot-turns)
    (js/console.log)
    (if (and end (nil? bot-updated-hero))
      (dialog/open-info!
        "Game ended!" (if (= winner "bot") "You lose!" "You won!")
        #(swap! app-state assoc :screen :menu)))
    (bot-turn/perform-move-hero bot-updated-hero)
    (if bot-action
      (hero/do-action to to-heroes (keyword (:type bot-action)) false))
    (if (and end)
      (dialog/open-info!
        "Game ended!" (if (= winner "bot") "You lose!" "You won!")
        #(swap! app-state assoc :screen :menu)))))
