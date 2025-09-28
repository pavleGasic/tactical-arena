(ns ui.battlefield.consts)

(def tile-size 16)
(def tile-scale 2.5)

(def weapon-scale 0.65)

(def spritesheet-path "/assets/spritesheet.png")
(def placeholder-path "/assets/images/placeholder.png")
(def hero-paths
  {:warrior        "/assets/images/warrior.png"
   :medic          "/assets/images/medic.png"
   :wizard         "/assets/images/wizard.png"
   :warrior-sword  "/assets/images/warrior_sword.png"
   :medic-medicine "/assets/images/medic_medicine.png"
   :wizard-poison  "/assets/images/wizard_poison.png"})

(def map-path "/assets/map.json")
(def move-overlay-radius 3)
(def spritesheet-cols 8)
(def home-color "#00FF00")
(def opponent-color "#FF0000")
