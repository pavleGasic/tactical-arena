(ns ta-backend.handlers.ping-handler
  (:require [ring.util.http-response :as response]))

(defn ping [request]
  (response/ok {:message "Hello backend!"}))
