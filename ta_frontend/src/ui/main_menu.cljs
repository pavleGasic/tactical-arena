(ns ui.main-menu
  (:require [ui.components.buttons :as buttons]
            [ui.components.text :refer [animated-text]]
            [ui.components.heroes :as heroes]
            [ui.api.game-api :as api]
            [ui.components.radio :as radio]))

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
    [buttons/primary-button "Start Game" #(api/start-game @radio/selected-level)]
    [:div {:style {:height "50px"}}]
    [:h1 {:style {:font-size   "30px"
                  :font-family "'Press Start 2P', cursive"}}
     "Select bot level"]
    [:div {:style {:display "flex" :gap "20px"}}
     [radio/radio-button {:value :easy :label "Easy" :group "bot-level"}]
     [radio/radio-button {:value :hard :label "Hard" :group "bot-level"}]]]
   [:div {:style {:display "flex" :gap "10px"}}
    [heroes/display-warrior 48]
    [heroes/display-wizard 48]
    [heroes/display-medic 48]]])
