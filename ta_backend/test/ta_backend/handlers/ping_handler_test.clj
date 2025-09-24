(ns ta-backend.handlers.ping-handler-test
  (:require [clojure.test :refer :all]
            [midje.sweet :refer :all]
            [ta-backend.handlers.ping-handler :as ph]))

(fact "ping returns hello message"
      (let [req {}]
        (ph/ping req) => (contains {:status 200
                                    :body   {:message "Hello backend!"}})))
