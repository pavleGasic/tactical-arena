(ns ui.battlefield.gameplay.core
  (:require [ui.battlefield.state :as state]
            [ui.battlefield.hero :as hero]
            [ui.battlefield.gameplay.home-turn :as home-turn]))

(def ranges {:warrior 1 :wizard 3 :medic 3})

(def damages {:warrior 300 :wizard 200})
(def healing {:medic 200})

(defn distance
  "Cheapest Manhattan distance in tiles."
  [[x1 y1] [x2 y2]]
  (+ (js/Math.abs (- x1 x2))
     (js/Math.abs (- y1 y2))))


(defn switch-side [side]
  (if (= side :home) :opponent :home))

(defn enemy-chars
  "Returns enemy team atom, from current move perspective"
  []
  (if (= (:current @state/turn!) :home)
    @state/opponent-heroes
    @state/home-heroes))

(defn home-chars
  "Returns home team atom, from current move perspective"
  []
  (if (= (:current @state/turn!) :home)
    @state/home-heroes
    @state/opponent-heroes))

(defn start-turn!
  "Starting new turn"
  []
  (swap! @state/turn!
         #(assoc % :phase :select
                   :selected-id nil)))

(defn end-turn!
  "Ending current turn"
  []
  (swap! state/turn!
         (fn [{:keys [turn current]}]
           {:turn        (inc turn)
            :current     (switch-side current)
            :phase       :select
            :selected-id nil}))
  (reset! state/overlay-placeholders []))

(defn init-characters
  "Render both, home and opponent characters on initial positions"
  []
  (hero/render-heroes!
    state/home-heroes :home)
  (hero/render-heroes!
    state/opponent-heroes :opponent))

(defn attach-character-pointer-listener!
  "Attach pointer event listener to each home character"
  []
  (doseq [character @state/home-heroes]
    (let [sprite (:sprite character)]
      (set! ^js (.-eventMode sprite) "dynamic")
      (set! ^js (.-buttonMode sprite) true)
      (.on sprite "pointerdown"
           (fn [_]
             (if (= (:phase @state/turn!) :select)
               (home-turn/select-hero! (:id character)))
             ))
      )))

(defn start-game
  "Initialize all components for game"
  []
  (init-characters)
  (attach-character-pointer-listener!)
  ;loop
  ;select phase
  ;attack phase
  ;end phase
  ;check end
  ())
