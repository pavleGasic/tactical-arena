(ns ui.battlefield.info-bar
  (:require [ui.battlefield.state :as state]
            [ui.battlefield.consts :as consts]
            [ui.components.heroes :as heroes]))

(def hero-icons
  {:warrior heroes/display-warrior
   :wizard  heroes/display-wizard
   :medic   heroes/display-medic})

(def hero-colors
  {:warrior "is-primary"
   :wizard  "is-warning"
   :medic   "is-success"})

(defn hero-info [c]
  (let [hp (:health c)
        max-hp (:max-health c)
        percent (js/Math.floor (* 100 (/ hp max-hp)))
        icon-fn (get hero-icons (:type c))
        bar-color (get hero-colors (:type c))]
    [:div {:style {:display "flex" :align-items "center" :gap "5px"}}
     (when icon-fn (icon-fn 48))
     [:div {:style {:display "flex" :flex-direction "column" :align-items "flex-start"}}
      [:progress {:class (str "nes-progress " bar-color)
                  :value percent
                  :max   100
                  :style {:width "100px" :height "30px"}}]
      [:p {:style {:margin "0" :font-size "10px"}} (str hp "/" max-hp "HP")]]]))

(defn turns-progress [side turns]
  (let [max-turns 5
        percent (* 100 (/ turns max-turns))
        bar-color (if (= side :home) "is-success" "is-error")
        label "Target"]
    [:div {:style {:margin-top "5px"}}
     [:p {:style {:margin "0" :font-size "12px" :font-weight "bold"}} label]
     [:progress {:class (str "nes-progress " bar-color)
                 :value percent
                 :max   100
                 :style {:width "160px" :height "30px"}}]
     [:p {:style {:margin "0" :font-size "10px"}} (str turns "/" max-turns " turns")]]))

(defn side-info-bar [heroes side title turns-atom]
  (let [pos-style (case side
                    :home {:bottom "10px" :left "10px"}
                    :bot   {:top "10px" :right "10px"})
        title-color (case side
                      :home {:color consts/home-color}
                      :bot   {:color consts/opponent-color})]
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
     (for [c @heroes]
       ^{:key (:id c)} [hero-info c])
     [turns-progress side @turns-atom]]))

(defn info-bar []
  [:<>
   [side-info-bar state/home-heroes :home "Home" state/home-turns-in-target]
   [side-info-bar state/bot-heroes :bot "Opponent" state/bot-turns-in-target]])
