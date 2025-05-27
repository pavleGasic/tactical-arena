(ns app.frontend.ui.battlefield
  (:require [app.frontend.ui.components.tiles :as tiles]))

(def tile-images
  {:empty-ground            (tiles/display-tile "empty_ground.png")
   :corner-shadow-ground    (tiles/display-tile-rotated "corner_shadow_ground.png" 270)
   :top-shadow-ground       (tiles/display-tile-rotated "side_shadow_ground.png" 0)
   :left-shadow-ground      (tiles/display-tile-rotated "side_shadow_ground.png" 270)
   :stones-ground           (tiles/display-tile "stones_in_ground.png")
   :placeholder             (tiles/display-tile "placeholder.png")
   :stone-wall              (tiles/display-tile "stone_wall.png")
   :top-stone-wall          (tiles/display-tile "top_stone_wall.png")
   :left-top-stone-wall     (tiles/display-tile "left_top_stone_wall.png")
   :right-top-stone-wall    (tiles/display-tile "right_top_stone_wall.png")
   :right-side-stone-wall   (tiles/display-tile "right_side_stone_wall.png")
   :left-side-stone-wall    (tiles/display-tile "left_side_stone_wall.png")
   :left-bottom-stone-wall  (tiles/display-tile "left_bottom_stone_wall.png")
   :right-bottom-stone-wall (tiles/display-tile "right_bottom_stone_wall.png")
   :bottom-top-stone-wall   (tiles/display-tile "bottom_top_stone_wall.png")
   })

(def sample-map
  [[:left-top-stone-wall :top-stone-wall :top-stone-wall :top-stone-wall :top-stone-wall :top-stone-wall :top-stone-wall :top-stone-wall :top-stone-wall :top-stone-wall :top-stone-wall :top-stone-wall :top-stone-wall :top-stone-wall :right-top-stone-wall]
   [:left-side-stone-wall :stone-wall :stone-wall :stone-wall :stone-wall :stone-wall :stone-wall :stone-wall :stone-wall :stone-wall :stone-wall :stone-wall :stone-wall :stone-wall :right-side-stone-wall]
   [:left-side-stone-wall :corner-shadow-ground :top-shadow-ground :top-shadow-ground :top-shadow-ground :top-shadow-ground :top-shadow-ground :top-shadow-ground :top-shadow-ground :top-shadow-ground :top-shadow-ground :top-shadow-ground :top-shadow-ground :top-shadow-ground :right-side-stone-wall]
   [:left-side-stone-wall :left-shadow-ground :empty-ground :empty-ground :empty-ground :stones-ground :empty-ground :empty-ground :empty-ground :empty-ground :empty-ground :empty-ground :stones-ground :empty-ground :right-side-stone-wall]
   [:left-side-stone-wall :left-shadow-ground :empty-ground :stones-ground :empty-ground :empty-ground :empty-ground :stones-ground :empty-ground :stones-ground :empty-ground :empty-ground :stones-ground :empty-ground :right-side-stone-wall]
   [:left-side-stone-wall :left-shadow-ground :stones-ground :empty-ground :empty-ground :stones-ground :empty-ground :empty-ground :stones-ground :empty-ground :empty-ground :stones-ground :empty-ground :stones-ground :right-side-stone-wall]
   [:left-side-stone-wall :left-shadow-ground :empty-ground :stones-ground :empty-ground :empty-ground :empty-ground :stones-ground :empty-ground :stones-ground :empty-ground :empty-ground :stones-ground :empty-ground :right-side-stone-wall]
   [:left-side-stone-wall :left-shadow-ground :stones-ground :empty-ground :empty-ground :stones-ground :empty-ground :empty-ground :stones-ground :empty-ground :empty-ground :stones-ground :empty-ground :stones-ground :right-side-stone-wall]
   [:left-side-stone-wall :left-shadow-ground :empty-ground :empty-ground :stones-ground :empty-ground :empty-ground :stones-ground :empty-ground :stones-ground :empty-ground :stones-ground :empty-ground :empty-ground :right-side-stone-wall]
   [:left-side-stone-wall :left-shadow-ground :stones-ground :empty-ground :empty-ground :stones-ground :empty-ground :empty-ground :stones-ground :empty-ground :empty-ground :empty-ground :empty-ground :stones-ground :right-side-stone-wall]
   [:left-side-stone-wall :left-shadow-ground :empty-ground :empty-ground :stones-ground :empty-ground :empty-ground :stones-ground :empty-ground :stones-ground :empty-ground :empty-ground :stones-ground :empty-ground :right-side-stone-wall]
   [:left-side-stone-wall :left-shadow-ground :empty-ground :stones-ground :empty-ground :empty-ground :stones-ground :empty-ground :empty-ground :stones-ground :empty-ground :stones-ground :empty-ground :empty-ground :right-side-stone-wall]
   [:left-side-stone-wall :left-shadow-ground :empty-ground :empty-ground :empty-ground :stones-ground :empty-ground :empty-ground :empty-ground :empty-ground :stones-ground :empty-ground :stones-ground :empty-ground :right-side-stone-wall]
   [:left-side-stone-wall :left-shadow-ground :empty-ground :stones-ground :empty-ground :empty-ground :empty-ground :empty-ground :stones-ground :empty-ground :empty-ground :empty-ground :stones-ground :empty-ground :right-side-stone-wall]
   [:left-bottom-stone-wall :bottom-top-stone-wall :bottom-top-stone-wall :bottom-top-stone-wall :bottom-top-stone-wall :bottom-top-stone-wall :bottom-top-stone-wall :bottom-top-stone-wall :bottom-top-stone-wall :bottom-top-stone-wall :bottom-top-stone-wall :bottom-top-stone-wall :bottom-top-stone-wall :bottom-top-stone-wall :right-bottom-stone-wall]])


(defn battlefield []
  (let [rows (count sample-map)
        cols (count (first sample-map))]
    [:div {:style {:display               "grid"
                   :grid-template-columns (str "repeat(" cols ", " (tiles/tile-size-px) "px)")
                   :grid-template-rows    (str "repeat(" rows ", " (tiles/tile-size-px) "px)")}}
     (for [row sample-map
           cell row]
       ^{:key (str (gensym))}
       (tile-images cell))]
    ))
