(ns ui.main-menu
  (:require [ui.components.buttons :as buttons]
            [ui.components.text :refer [animated-text]]
            [ui.components.heroes :as heroes]
            [ui.api.game-api :as api]))

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

(defn display-main-menu []
  [:div display-background-image
   [animated-text "TACTICAL ARENA"]
   [:div {:style {:display         "flex"
                  :flex-direction  "column"
                  :align-items     "center"
                  :justify-content "center"}}
    [buttons/primary-button "Start Game" #(api/start-game :easy)]
    [:div {:style {:height "50px"}}]
    [buttons/normal-button "Options" #(js/alert "Options coming soon!")]]
   [:div {:style {:display "flex" :gap "10px"}}
    [heroes/display-warrior 48]
    [heroes/display-wizard 48]
    [heroes/display-medic 48]]])
