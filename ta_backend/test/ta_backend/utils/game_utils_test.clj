(ns ta-backend.utils.game-utils-test
  (:require [midje.sweet :refer :all]
            [ta-backend.utils.game-utils :as gu]))

(defn pos [x y] {:x x :y y})

(fact "distance computes max of x/y differences"
      (gu/distance (pos 0 0) (pos 3 4)) => 4
      (gu/distance (pos 5 5) (pos 2 1)) => 4)

(fact "occupied? detects occupied tiles"
      (let [chars [{:position (pos 0 0)} {:position (pos 1 1)}]]
        (gu/occupied? 0 0 chars) => truthy
        (gu/occupied? 1 1 chars) => truthy
        (gu/occupied? 2 2 chars) => falsey))

(fact "walkable? returns true only for walkable and unoccupied tiles"
      (let [heroes [{:position (pos 0 0)}]
            map-data [{:x 0 :y 0 :walkable? true}
                      {:x 1 :y 0 :walkable? true}
                      {:x 0 :y 1 :walkable? false}]]
        (gu/walkable? 0 0 heroes map-data) => falsey
        (gu/walkable? 1 0 heroes map-data) => truthy
        (gu/walkable? 0 1 heroes map-data) => falsey
        (gu/walkable? 5 5 heroes map-data) => falsey))

(fact "valid-move? checks hero movement constraints"
      (let [hero {:type :warrior :position (pos 0 0)}
            gs {:turn :player
                :phase :move
                :player-heroes {:warrior hero}
                :bot-heroes {}}
            map-data [{:x 1 :y 0 :walkable? true}
                      {:x 0 :y 1 :walkable? true}]]
        (gu/valid-move? hero 1 0 gs map-data) => truthy
        (gu/valid-move? hero 0 1 gs map-data) => truthy
        (gu/valid-move? hero 2 2 gs map-data) => falsey
        (gu/valid-move? (assoc hero :position (pos 0 0)) 0 1 (assoc gs :turn :bot) map-data) => falsey))

(fact "can-attack? detects attackable bot heroes"
      (let [hero {:type :warrior :position (pos 0 0)}
            bot-heroes {:b1 {:type :warrior :position (pos 1 0)}
                        :b2 {:type :wizard  :position (pos 10 10)}}]
        (gu/can-attack? hero bot-heroes) => truthy
        (gu/can-attack? (assoc hero :position (pos 5 5)) bot-heroes) => falsey))

(fact "can-heal? detects healable player heroes"
      (let [hero {:type :medic :position (pos 0 0)}
            player-heroes {:p1 {:type :warrior :position (pos 1 0) :hp 5 :max-hp 10}
                           :p2 {:type :wizard  :position (pos 10 10) :hp 8 :max-hp 10}}]
        (gu/can-heal? hero player-heroes) => truthy))

(fact "valid-moves returns all valid tiles within move range"
      (let [hero {:type :warrior :position (pos 0 0)}
            gs {:turn :player
                :phase :move
                :player-heroes {:warrior hero}
                :bot-heroes {}}
            map-data (for [x (range -1 2) y (range -1 2)] {:x x :y y :walkable? true})]
        (set (gu/valid-moves hero gs map-data))
        => (set [{:x -1 :y -1} {:x -1 :y 0} {:x -1 :y 1}
                 {:x 0 :y -1}  {:x 0 :y 1}
                 {:x 1 :y -1}  {:x 1 :y 0}  {:x 1 :y 1}])))

(fact "available-actions returns only valid actions for hero type"
      (let [hero {:type :medic :position (pos 0 0)}
            ally-heroes {:p1 {:type :warrior :position (pos 1 0) :hp 5 :max-hp 10}}
            target-heroes {:b1 {:type :wizard :position (pos 2 0) :hp 10 :max-hp 10}}]
        (map :type (gu/available-actions hero target-heroes ally-heroes))
        => (just [:heal] :in-any-order true)))
