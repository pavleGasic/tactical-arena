(ns ta-backend.endpoints
  (:require [reitit.ring :as ring]
            [reitit.swagger :as swagger]
            [reitit.swagger-ui :as swagger-ui]
            [reitit.ring.middleware.muuntaja :as rrmm]
            [reitit.coercion.schema :as rcs]
            [reitit.ring.coercion :as rrc]
            [muuntaja.core :as muuntaja]
            [schema.core :as s]
            [ring.middleware.params :as params]
            [ring.middleware.cors :refer [wrap-cors]]
            [ta-backend.handlers.ping-handler :as ph]
            [ta-backend.handlers.game-handler :as gh]))

(def swagger-config
  {:swagger             "2.0"                               ;; explicitly define version
   :info                {:title       "Tactical Arena API"
                         :description "API documentation for Tactical Arena game"
                         :version     "0.1.0"}
   :securityDefinitions {:token {:type "apiKey"
                                 :name "Authorization"
                                 :in   "header"}}})

(def common-middleware
  [params/wrap-params
   rrmm/format-middleware
   rrc/coerce-exceptions-middleware
   rrc/coerce-response-middleware
   rrc/coerce-request-middleware
   [wrap-cors
    :access-control-allow-origin #".*"
    :access-control-allow-methods [:get :put :post :patch :delete]]])

(def routes
  [["/ping" {:get {:summary   "Ping server"
                   :handler   ph/ping
                   :responses {200 {:body {:message s/Str}}}}}]
   ["/game/start"
    {:get {:summary    "Start a new game"
           :parameters {:query {:bot-level s/Str}}
           :handler    gh/handle-game-start}}]
   ["/game/turn/move"
    {:post {:summary    "Perform a move for the current turn"
            :parameters {:body {:hero-id s/Str
                                :new-x   s/Int
                                :new-y   s/Int}}
            :responses  {200 {:body {:success           s/Bool
                                     :updated-hero      s/Any
                                     :available-actions s/Any}}}
            :handler    gh/handle-game-turn-move}}]
   ["/game/turn/action"
    {:post {:summary    "Perform a action for the current turn"
            :parameters {:body {:action s/Str
                                :from   s/Any
                                :to     s/Any}}
            :responses  {200 {:body {:success s/Bool
                                     :action  s/Str
                                     :from    s/Any
                                     :to-home s/Any
                                     :to-bot  s/Any}}}
            :handler    gh/handle-game-turn-action}}]
   ["/game/turn/end"
    {:get {:summary   "End player turn and return bot turn"
           :responses {200 {:body {:success          s/Bool
                                   :bot-updated-hero s/Any
                                   :bot-action       s/Any
                                   :winner           s/Any
                                   :end              s/Any
                                   :bot-target        s/Any
                                   :home-target       s/Any}}}
           :handler   gh/handle-game-turn-end}}]
   ["/swagger.json" {:get {:no-doc  true
                           :handler (swagger/create-swagger-handler)}}]
   ["/api-docs/*" {:get {:no-doc  true
                         :handler (swagger-ui/create-swagger-ui-handler)}}]])

(defn app []
  (ring/ring-handler
    (ring/router routes
                 {:data {:swagger    swagger-config
                         :muuntaja   muuntaja/instance
                         :coercion   rcs/coercion
                         :middleware common-middleware}})
    (ring/create-default-handler
      {:not-found (constantly {:status 404 :body "Not found"})})))