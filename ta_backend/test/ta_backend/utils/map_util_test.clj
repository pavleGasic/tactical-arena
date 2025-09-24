(ns ta-backend.utils.map-util-test
  (:require [clojure.test :refer :all]
            [midje.sweet :refer :all]
            [ta-backend.utils.map-utils :as mu]
            [ta-backend.game.state :as state]))

(def mock-map
  {:layers [{:name  "Layer_0"
             :tiles [{:id "10" :x 0 :y 0}
                     {:id "99" :x 1 :y 0}
                     {:id "12" :x 2 :y 1}]}]})

(fact "mark-walkable marks tiles correctly"
      (mu/mark-walkable {:id "10" :x 0 :y 0}) => {:x 0 :y 0 :walkable? true}
      (mu/mark-walkable {:id "99" :x 1 :y 0}) => {:x 1 :y 0 :walkable? false})

(with-redefs [cheshire.core/parse-stream (fn [_ _] mock-map)
              clojure.java.io/reader (fn [_] nil)]
  (mu/load-map!)
  (fact "load-map! loads first layer and stores keyed by [x y]"
        @state/game-map => [{:x 0 :y 0 :walkable? true}
                            {:x 1 :y 0 :walkable? false}
                            {:x 2 :y 1 :walkable? true}]))