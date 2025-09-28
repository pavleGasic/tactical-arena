(ns ui.battlefield.gameplay.core
  (:require [ui.battlefield.state :as state]
            [ui.battlefield.hero :as hero]
            [ui.battlefield.gameplay.home-turn :as home-turn]
            [ui.battlefield.gameplay.bot-turn :as bot-turn]))

(defn distance
  "Cheapest Manhattan distance in tiles."
  [[x1 y1] [x2 y2]]
  (+ (js/Math.abs (- x1 x2))
     (js/Math.abs (- y1 y2))))

(defn end-turn!
  "Ending current turn"
  []
  (swap! state/turn!
         (fn [{:keys [turn]}]
           {:turn  (inc turn)
            :phase :select}))
  (reset! state/overlay-placeholders []))

(defn init-characters
  "Render both, home and opponent characters on initial positions"
  []
  (hero/render-heroes!
    state/home-heroes :home)
  (hero/render-heroes!
    state/bot-heroes :opponent))

(defn attach-character-pointer-listener!
  "Attach pointer event listener to each hero"
  []
  (doseq [hero @state/home-heroes]
    (let [sprite (:sprite hero)]
      (if sprite
        (do
          (set! ^js (.-eventMode sprite) "dynamic")
          (set! ^js (.-buttonMode sprite) true)
          (.on sprite "pointerdown"
               (fn [_]
                 (let [available-action (:available-actions
                                          (some #(when (=
                                                         (:type %)
                                                         (:type hero)) %)
                                                @state/home-heroes))
                       selected-hero (some #(when (:selected? %) %) @state/home-heroes)
                       medic-selected? (and selected-hero (= (:type selected-hero) :medic))]
                   (case (:phase @state/turn!)
                     :select (home-turn/select-hero! (:id hero))
                     :action (if medic-selected?
                               (home-turn/heal-action selected-hero hero)
                               (home-turn/perform-action available-action
                                                         (:type hero)))))))))))
  (doseq [hero @state/bot-heroes]
    (let [sprite (:sprite hero)]
      (if sprite
        (do
          (set! ^js (.-eventMode sprite) "dynamic")
          (set! ^js (.-buttonMode sprite) true)
          (.on sprite "pointerdown"
               (fn [_]
                 (case (:phase @state/turn!)
                   :action (bot-turn/perform-action hero)
                   nil))))))))
(defn start-game
  "Initialize all components for game"
  []
  (init-characters)
  (attach-character-pointer-listener!))
