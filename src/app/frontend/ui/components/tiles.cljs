(ns app.frontend.ui.components.tiles)

(defn tile-size-px [] (int (/ (.-innerHeight js/window) 15)))

(defn display-tile [image-name]
  [:img {:src   (str "/assets/images/" image-name)
         :style {:width           (tile-size-px) :height (tile-size-px)
                 :image-rendering "pixelated"}}])

(defn display-tile-rotated [image-name deg]
  [:img {:src   (str "/assets/images/" image-name)
         :style {:width           (tile-size-px) :height (tile-size-px)
                 :image-rendering "pixelated"
                 :transform       (str "rotate(" deg "deg)")}}])