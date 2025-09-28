(ns ui.battlefield.move-overlay
  (:require [ui.battlefield.consts :as consts]
            [ui.battlefield.sprite :as sprite]
            [ui.battlefield.state :as state]))

(defn occupied-tile?
  "Return true if tile is not occupied and hero can move to this tile"
  [x y heroes]
  (some #(and (= (:x (:position %)) x) (= (:y (:position %)) y)) heroes))

(defn walkable-tile? [x y map-data]
  (some (fn [layer]
          (some (fn [tile]
                  (and (= (:x tile) x)
                       (= (:y tile) y)
                       (:walkable? tile)
                       (not (occupied-tile? x y @state/home-heroes))
                       (not (occupied-tile? x y @state/bot-heroes))))
                (:tiles layer)))
        (:layers map-data)))

(defn clear-placeholder-sprites!
  "Clear sprites which is marker as a :placeholder? on whole `map-container`"
  []
  (doseq [s @state/overlay-placeholders]
    (.removeChild ^js @state/map-container s))
  (reset! state/overlay-placeholders []))

(defn display-move-overlay
  "Display available moves with visible placeholders (`texture`) based on `hero` position"
  [hero texture perform-move!]
  (let [radius consts/move-overlay-radius
        {:keys [x y]} (:position hero)]
    (doseq [dx (range (- x radius) (+ x radius 1))
            dy (range (- y radius) (+ y radius 1))
            :when (and (not= [dx dy] [x y])
                       (walkable-tile? dx dy @state/map-data))]
      (let [sprite (sprite/create-map-tile-sprite texture 0 dx dy)]
        (set! (.-alpha sprite) 0.6)
        (set! (.-eventMode sprite) "dynamic")
        (set! (.-buttonMode sprite) true)
        (.on sprite "pointerdown"
             (fn [_]
               (perform-move! hero (state/Position. dx dy))))
        (.addChild ^js @state/map-container sprite)
        (swap! state/overlay-placeholders conj sprite)))))

(defn remove-sprite-glow-overlay!
  [side]
  (doseq [[hero-id ph-sprite] @state/active-glows
          :let [hero-record (some #(when (= (:type %) hero-id) %) @state/home-heroes)
                hero-sprite (:sprite hero-record)]]
    (when hero-sprite
      (sprite/remove-sprite-glow hero-sprite ph-sprite side hero-id)))
  (doseq [[hero-id ph-sprite] @state/active-glows
          :let [hero-record (some #(when (= (:type %) hero-id) %) @state/bot-heroes)
                hero-sprite (:sprite hero-record)]]
    (when hero-sprite
      (sprite/remove-sprite-glow hero-sprite ph-sprite side hero-id)))
  (reset! state/active-glows {}))

(defn display-home-sprite-glow-overlay
  []
  (doseq [hero @state/home-heroes
          :when (seq (:available-actions hero))]
    (let [hero-id (:type hero)
          sprite (sprite/make-sprite-glow (:sprite hero) :home hero-id)]
      (swap! state/active-glows assoc hero-id (:ph-sprite sprite)))))

(defn display-sprite-glow-overlay
  "Display glow overlays for heroes depending on action type.
   - Attack → glow bot heroes
   - Heal   → glow home heroes"
  [available-actions]
  (doseq [action available-actions]
    (let [action-type (:type action)
          to-types    (->> [(:to action)]
                           (map :type)
                           (map ui.service.utils/get-hero-type)
                           distinct)
          heroes      (case action-type
                        "attack" @state/bot-heroes
                        "heal"   @state/home-heroes
                        [])]
      (doseq [hero heroes
              :when (some #{(:type hero)} to-types)]
        (let [hero-id (:type hero)
              sprite  (sprite/make-sprite-glow (:sprite hero)
                                               (if (= action-type "attack")
                                                 :bot
                                                 :home)
                                               hero-id)]
          (swap! state/active-glows assoc hero-id (:ph-sprite sprite)))))))
