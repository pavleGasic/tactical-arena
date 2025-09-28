(ns ui.service.utils)

(defn get-hero-type [stype]
  (case stype
    "warrior" :warrior
    "wizard" :wizard
    "medic" :medic))

(defn get-attack-type [stype]
  (case stype
    "attack" :attack
    "heal" :heal))

(defn get-weapon-type [hero-type]
  (case hero-type
    :warrior :warrior-sword
    :wizard :wizard-poison
    :medic :medic-medicine))

