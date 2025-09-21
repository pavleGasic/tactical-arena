(ns ui.battlefield.info-bar
  (:require [ui.battlefield.state :as state]
            [ui.battlefield.consts :as consts]
            [ui.components.characters :as characters]))

(def character-icons
  {:warrior characters/display-warrior
   :wizard  characters/display-wizard
   :medic   characters/display-medic})

(def character-colors
  {:warrior "is-primary"
   :wizard  "is-warning"
   :medic   "is-success"})

(defn character-info [c]
  (let [hp (:health c)
        max-hp (:max-health c)
        percent (js/Math.floor (* 100 (/ hp max-hp)))
        icon-fn (get character-icons (:type c))
        bar-color (get character-colors (:type c))]
    [:div {:style {:display "flex" :align-items "center" :gap "5px"}}
     (when icon-fn (icon-fn 48))
     [:div {:style {:display "flex" :flex-direction "column" :align-items "flex-start"}}
      [:progress {:class (str "nes-progress " bar-color)
                  :value percent
                  :max   100
                  :style {:width "100px" :height "30px"}}]
      [:p {:style {:margin "0" :font-size "10px"}} (str hp "/" max-hp "HP")]]]))

(defn side-info-bar [characters side title]
  (let [pos-style (case side
                    :left-bottom {:bottom "10px" :left "10px"}
                    :right-top   {:top "10px" :right "10px"})
        title-color (case side
                    :left-bottom {:color consts/home-color}
                    :right-top   {:color consts/opponent-color})]
    [:div {:class "nes-container is-rounded"
           :style (merge {:position "absolute"
                          :display  "flex"
                          :flex-direction "column"
                          :gap      "10px"
                          :padding  "10px"
                          :background-color "rgba(255,255,255,0.5)"}
                         pos-style)}
     [:p {:style (merge
                   {:margin "5px 5px" :font-size "18px"}
                   title-color)}
      title]
     (for [c @characters]
       ^{:key (:id c)} [character-info c])]))

(defn info-bar []
  [:<>
   [side-info-bar state/home-characters :left-bottom "Home"]
   [side-info-bar state/opponent-characters :right-top "Opponent"]])
