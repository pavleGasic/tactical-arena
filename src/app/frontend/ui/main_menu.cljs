(ns app.frontend.ui.main-menu
  (:require [app.frontend.ui.components.button :as buttons]
            [app.frontend.ui.battlefield :as bf]
            [app.frontend.ui.components.text-components :refer [animated-text]]
            [app.frontend.ui.components.characters :as chars]))


(defn main-menu []
  [:div {:style {:display           "flex"
                 :flex-direction    "column"
                 :align-items       "center"
                 :justify-content   "space-evenly"
                 :height            "100vh"
                 :background-image  "url('/assets/images/sky.png')"
                 :background-size   "cover"
                 :background-repeat "no-repeat"
                 :font-family       "'Press Start 2P', cursive"}}
   ;[animated-text "TACTICAL ARENA"]
   ;[:div {:style {:display         "flex"
   ;               :flex-direction  "column"
   ;               :align-items     "center"
   ;               :justify-content "center"}}
   ; [buttons/primary-button "Start Game" #()]
   ; [:div {:style {:height "50px"}}]
   ; [buttons/normal-button "Options" #(js/alert "Options coming soon!")]]
   ;[:div {:style {:display "flex" :gap "10px"}}
   ; [chars/display-warrior]
   ; [chars/display-wizard]
   ; [chars/display-medic]]]
   [bf/battlefield]]
  )