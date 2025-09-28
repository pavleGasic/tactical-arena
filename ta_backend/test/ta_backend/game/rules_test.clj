(ns ta-backend.game.rules-test
  (:require [midje.sweet :refer :all]
            [ta-backend.game.rules :as rules]
            [ta-backend.game.state :as state]
            [ta-backend.game.consts :as consts]))

(defn make-hero [x y]
  {:position {:x x :y y}})

(defn reset-counters []
  (reset! rules/target-area-counters {:player 0 :bot 0}))

(fact "hero-in-target-area? returns true if hero is in target area"
      (with-redefs [consts/target-area [{:x 1 :y 1} {:x 2 :y 2}]]
        (rules/hero-in-target-area? (make-hero 1 1)) => true
        (rules/hero-in-target-area? (make-hero 2 2)) => true
        (rules/hero-in-target-area? (make-hero 0 0)) => nil))

(fact "team-in-target-area? returns true if at least one hero is in target area"
      (with-redefs [consts/target-area [{:x 1 :y 1}]]
        (rules/team-in-target-area? [(make-hero 0 0) (make-hero 1 1)]) => true
        (rules/team-in-target-area? [(make-hero 0 0) (make-hero 0 1)]) => nil))

(fact "update-target-area-counters increments only the correct team"
      (reset-counters)

      ;; Only player present
      (with-redefs [state/game-state (atom {:player-heroes {:h1 (make-hero 1 1)}
                                            :bot-heroes    {:b1 (make-hero 0 0)}})
                    consts/target-area [{:x 1 :y 1}]]
        (rules/update-target-area-counters)
        @rules/target-area-counters => {:player 1 :bot 0})

      (with-redefs [state/game-state (atom {:player-heroes {:h1 (make-hero 0 0)}
                                            :bot-heroes    {:b1 (make-hero 1 1)}})
                    consts/target-area [{:x 1 :y 1}]]
        (reset-counters)
        (rules/update-target-area-counters)
        @rules/target-area-counters => {:player 0 :bot 1})

      (with-redefs [state/game-state (atom {:player-heroes {:h1 (make-hero 1 1)}
                                            :bot-heroes    {:b1 (make-hero 1 1)}})
                    consts/target-area [{:x 1 :y 1}]]
        (reset-counters)
        (rules/update-target-area-counters)
        @rules/target-area-counters => {:player 0 :bot 0})

      (with-redefs [state/game-state (atom {:player-heroes {:h1 (make-hero 0 0)}
                                            :bot-heroes    {:b1 (make-hero 0 0)}})
                    consts/target-area [{:x 1 :y 1}]]
        (reset-counters)
        (rules/update-target-area-counters)
        @rules/target-area-counters => {:player 0 :bot 0}))

(fact "check-target-area-victory returns winner if a team reaches 5 turns"
      (reset-counters)

      (reset! rules/target-area-counters {:player 5 :bot 0})
      (rules/check-target-area-victory) => {:winner :player :reason "target area"}

      (reset! rules/target-area-counters {:player 0 :bot 5})
      (rules/check-target-area-victory) => {:winner :bot :reason "target area"}

      (reset! rules/target-area-counters {:player 4 :bot 3})
      (rules/check-target-area-victory) => nil)
