(ns ta-backend.game.consts)


(defonce warrior-damage 300)
(defonce medic-heal 100)
(defonce wizard-damage 150)
(defonce warrior-max-health 1000)
(defonce medic-max-health 600)
(defonce wizard-max-health 400)
(defonce target-area
         [{:x 23 :y 16} {:x 24 :y 16} {:x 25 :y 16}
          {:x 23 :y 17} {:x 24 :y 17} {:x 25 :y 17}
          {:x 23 :y 18} {:x 24 :y 18} {:x 25 :y 18}])

(defonce center-position {:x 24 :y 17})

(defonce move-range 3)
(defonce warrior-attack-range 1)
(defonce wizard-attack-range 4)
(defonce medic-heal-range 4)
