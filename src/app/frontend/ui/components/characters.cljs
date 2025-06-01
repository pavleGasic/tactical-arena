(ns app.frontend.ui.components.characters)

(defn base-style [size]
  {:position        "relative"
   :width           (str size "px")
   :height          (str size "px")
   :image-rendering "pixelated"})

(defn display-wizard [size]
  [:div {:style (base-style size)}
   [:img {:src   "/assets/images/wizard.png"
          :style {:position        "absolute"
                  :top             "6%"
                  :left            "19%"
                  :width           "75%"
                  :height          "75%"
                  :image-rendering "pixelated"}}]

   [:img {:src   "/assets/images/wizard_wand.png"
          :style {:position        "relative"
                  :top             "25%"
                  :left            "0%"
                  :height          "60%"
                  :transform       "rotate(-15deg)"
                  :image-rendering "pixelated"}}]])

(defn display-warrior [size]
  [:div {:style (base-style size)}
   [:img {:src   "/assets/images/warrior.png"
          :style {:position        "absolute"
                  :top             "6%"
                  :left            "18%"
                  :width           "75%"
                  :height          "75%"
                  :image-rendering "pixelated"}}]

   [:img {:src   "/assets/images/warrior_shield.png"
          :style {:position        "relative"
                  :top             "32%"
                  :left            "-8%"
                  :height          "64%"
                  :transform       "rotate(-15deg)"
                  :image-rendering "pixelated"}}]

   [:img {:src   "/assets/images/warrior_sword.png"
          :style {:position        "absolute"
                  :top             "25%"
                  :left            "55%"
                  :height          "64%"
                  :transform       "rotate(15deg)"
                  :image-rendering "pixelated"}}]])

(defn display-medic [size]
  [:div {:style (base-style size)}
   [:img {:src   "/assets/images/medic.png"
          :style {:position        "absolute"
                  :top             "6%"
                  :left            "18%"
                  :width           "75%"
                  :height          "75%"
                  :image-rendering "pixelated"}}]

   [:img {:src   "/assets/images/medic_medicine.png"
          :style {:position        "relative"
                  :top             "32%"
                  :left            "0%"
                  :height          "55%"
                  :transform       "rotate(-15deg)"
                  :image-rendering "pixelated"}}]])
