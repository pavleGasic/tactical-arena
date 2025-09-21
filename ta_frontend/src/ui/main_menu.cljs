(ns ui.main-menu
  (:require [ui.components.buttons :as buttons]
            [ui.components.text :refer [animated-text]]
            [ui.components.characters :as chars]))

(def display-background-image
  {:style {:display           "flex"
           :flex-direction    "column"
           :align-items       "center"
           :justify-content   "space-evenly"
           :height            "100vh"
           :background-image  "url('/assets/images/sky.png')"
           :background-size   "cover"
           :background-repeat "no-repeat"
           :font-family       "'Press Start 2P', cursive"}})

(defn display-main-menu [display-game-screen]
  [:div display-background-image
   [animated-text "TACTICAL ARENA"]
   [:div {:style {:display         "flex"
                  :flex-direction  "column"
                  :align-items     "center"
                  :justify-content "center"}}
    [buttons/primary-button "Start Game" #(display-game-screen)]
    [:div {:style {:height "50px"}}]
    [buttons/normal-button "Options" #(js/alert "Options coming soon!")]]
   [:div {:style {:display "flex" :gap "10px"}}
    [chars/display-warrior 48]
    [chars/display-wizard 48]
    [chars/display-medic 48]]])
