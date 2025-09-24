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
        :error-handler   (fn [err]
                           (dialog/open-error! "Failed to start game!"
                                               (str "Error: " (:status-text err))))}))

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
