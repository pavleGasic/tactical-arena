(ns ui.battlefield.hero
  (:require [ui.battlefield.sprite :as sprite]
            [ui.battlefield.state :as state]
            [ui.service.utils :as utils]
            [cljs.core.async :refer [<! go]]
            [ui.battlefield.move-overlay :as mo]))

(defn actions-by-hero-type [available-actions]
  (group-by #(get-in % [:from :type]) available-actions))

(defn attach-actions-to-heroes [heroes available-actions]
  (let [actions-map (actions-by-hero-type available-actions)]
    (mapv (fn [hero]
            (let [hero-type (name (:type hero))
                  hero-actions (get actions-map hero-type [])]
              (assoc hero :available-actions hero-actions)))
          heroes)))

(defn start-action-phase
  "Highlight all player heroes that can perform an action."
  [available-actions]
  (swap! state/turn! #(assoc % :phase :action))
  (reset! state/home-heroes
          (attach-actions-to-heroes @state/home-heroes available-actions))

  (mo/remove-sprite-glow-overlay! :bot)
  (mo/display-home-sprite-glow-overlay))


(defn move-hero
  "Action for clicking on placeholder, moving hero to (`dx`, `dy`)"
  [dx dy hero-id heroes]
  (swap! heroes
         (fn [hs]
           (mapv (fn [h]
                   (if (= (:type h) hero-id)
                     (do
                       (let [sprite (:sprite h)]
                         (sprite/animate-move! sprite
                                               (:x (:position h)) (:y (:position h))
                                               dx dy))
                       (assoc h :position (state/Position. dx dy) :selected? false))
                     h))
                 hs))))

(defn do-action
  "Animate and apply action for a single target hero, then end turn."
  [to to-heroes action-type is-player-action?]
  (go
    (let [hero (some #(when (= (:type %) (utils/get-hero-type (:type to))) %) @to-heroes)]
      (when hero
        (<! (sprite/animate-action hero action-type))

        (swap! to-heroes
               (fn [hs]
                 (mapv (fn [h]
                         (if (= (:type h) (:type hero))
                           (let [updated (assoc h :health (:hp to))
                                 hero-sprite (:sprite updated)]
                             (if (<= (:health updated) 0)
                               (do
                                 (sprite/remove-sprite hero-sprite)
                                 (assoc updated :sprite nil :position (state/->Position 0 0)))
                               updated))
                           h))
                       hs)))

        (when is-player-action?
          (ui.battlefield.gameplay.core/end-turn!)
          (mo/remove-sprite-glow-overlay! :bot)
          (ui.api.game-api/end-turn))))))


(defn render-heroes!
  "Render every hero onto `map-container` and mutate
  the atom so each hero now carries its `sprite`"
  [heroes side]
  (doseq [h @heroes]
    (let [hero-tex (@state/assets (:type h))
          weapon-tex (@state/assets (utils/get-weapon-type (:type h)))
          created-hero (sprite/create-hero-sprite h hero-tex weapon-tex side)
          hero-sprite (:hero-sprite created-hero)
          weapon-sprite (:weapon-sprite created-hero)]
      (swap! heroes
             #(mapv (fn [hs]
                      (if (= (:id hs) (:id h))
                        (assoc hs :sprite hero-sprite :weapon-sprite weapon-sprite)
                        hs))
                    %))
      (.addChild ^js @state/map-container hero-sprite))))

