(ns app.frontend.ui.components.characters)

(defn display-wizard []
  [:div {:style {:position        "relative"
                 :width           "64px"
                 :height          "64px"
                 :image-rendering "pixelated"}}
   [:img {:src   "/assets/images/wizard.png"
          :style {:position        "absolute"
                  :top             "4px"
                  :left            "12px"
                  :width           "48px"
                  :height          "48px"
                  :image-rendering "pixelated"}}]

   [:img {:src   "/assets/images/wizard_wand.png"
          :style {:position        "relative"
                  :top             "16px"
                  :left            "-5px"
                  :height          "40px"
                  :transform "rotate(-15deg)"
                  :image-rendering "pixelated"}}]])

(defn display-warrior []
  [:div {:style {:position        "relative"
                 :width           "64px"
                 :height          "64px"
                 :image-rendering "pixelated"}}
   [:img {:src   "/assets/images/warrior.png"
          :style {:position        "absolute"
                  :top             "4px"
                  :left            "12px"
                  :width           "48px"
                  :height          "48px"
                  :image-rendering "pixelated"}}]

   [:img {:src   "/assets/images/warrior_shield.png"
          :style {:position        "relative"
                  :top             "20px"
                  :left            "-5px"
                  :height          "40px"
                  :transform "rotate(-15deg)"
                  :image-rendering "pixelated"}}]

   [:img {:src   "/assets/images/warrior_sword.png"
          :style {:position        "absolute"
                  :top             "16px"
                  :left            "36px"
                  :height          "40px"
                  :transform "rotate(15deg)"
                  :image-rendering "pixelated"}}]])

(defn display-medic []
  [:div {:style {:position        "relative"
                 :width           "64px"
                 :height          "64px"
                 :image-rendering "pixelated"}}
   [:img {:src   "/assets/images/medic.png"
          :style {:position        "absolute"
                  :top             "4px"
                  :left            "12px"
                  :width           "48px"
                  :height          "48px"
                  :image-rendering "pixelated"}}]

   [:img {:src   "/assets/images/medic_medicine.png"
          :style {:position        "relative"
                  :top             "16px"
                  :left            "-5px"
                  :height          "40px"
                  :transform "rotate(-15deg)"
                  :image-rendering "pixelated"}}]])
