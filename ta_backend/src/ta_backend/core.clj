(ns ta-backend.core
  (:require [ring.adapter.jetty :as jetty]
            [ta-backend.logger :as logger]
            [ta-backend.endpoints :as endpoints]))

(defn -main [& _]
  (logger/setup-logging)
  (jetty/run-jetty (endpoints/app) {:port 8080 :join? false})
  (logger/info "Server started on http://localhost:8080")
  (logger/info "Swagger documentation is placed on http://localhost:8080/api-docs/index.html"))
