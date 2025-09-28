(ns ui.api.game-api
  (:require [ajax.core :refer [GET POST]]
            [ui.components.dialog :as dialog]
            [ui.service.game-service :as game-service]))

(def host "http://localhost:8080")
(defn start-game [bot-level]
  (GET (str host "/game/start")
       {:params          {:bot-level bot-level}
        :headers         {"Accept" "application/json"}
        :response-format :json
        :keywords?       true
        :keywordize-keys true
        :handler         game-service/handle-start-game
        :error-handler   #(dialog/open-error!
                            "Failed to start game!"
                            (str (.-statusText %)))}))

(defn move-hero
  [hero-id new-x new-y]
  (POST (str host "/game/turn/move")
        {:params          {:hero-id (str hero-id)
                           :new-x   new-x
                           :new-y   new-y}
         :format          :json
         :response-format :json
         :keywords?       true
         :keywordize-keys true
         :handler         game-service/handle-move-hero
         :error-handler   #(dialog/open-error!
                             "Failed to move hero!"
                             (str (.-statusText %)))}))

(defn hero-action
  [from to action]
  (POST (str host "/game/turn/action")
        {:params          {:from   from
                           :to     to
                           :action action}
         :format          :json
         :response-format :json
         :keywords?       true
         :keywordize-keys true
         :handler         game-service/handle-home-hero-action
         :error-handler   #(dialog/open-error!
                             "Failed to move hero!"
                             (str (.-statusText %)))}))

(defn end-turn []
  (GET (str host "/game/turn/end")
       {:response-format :json
        :keywords?       true
        :keywordize-keys true
        :handler         game-service/handle-end-move
        :error-handler   #(dialog/open-error!
                            "Failed to end turn!"
                            (str (.-statusText %)))}))
