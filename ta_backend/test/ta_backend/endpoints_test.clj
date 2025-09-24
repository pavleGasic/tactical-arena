(ns ta-backend.endpoints-test
  (:require [midje.sweet :refer :all]
            [ring.mock.request :as mock]
            [cheshire.core :as json]
            [ta-backend.endpoints :as endpoints]))

(fact "ping route responds"
      (with-redefs [ta-backend.handlers.ping-handler/ping (fn [_] {:status 200 :body {:message "Hello backend!"}})]
        (let [app (endpoints/app)
              resp (app (mock/request :get "/ping"))
              body (json/parse-stream (clojure.java.io/reader (:body resp)) true)]
          (:status resp) => 200
          body => {:message "Hello backend!"})))

(fact "unknown route returns 404"
      (let [app (endpoints/app)
            resp (app (mock/request :get "/does-not-exist"))]
        (:status resp) => 404
        (:body resp) => "Not found"))
