(ns app.frontend.ui.components.tiles)

(def tile-size "64px")

(defn display-tile [image-name]
  [:img {:src   (str "/assets/images/" image-name)
         :style {:width           tile-size
                 :height          tile-size
                 :image-rendering "pixelated"}}])

(defn display-tile-rotated [image-name deg]
  [:img {:src   (str "/assets/images/" image-name)
         :style {:width           tile-size
                 :height          tile-size
                 :image-rendering "pixelated"
                 :transform       (str "rotate(" deg "deg)")}}])

(defn display-image [image-name style]
  [:img {:src   (str "/assets/images/" image-name)
         :style (merge {:image-rendering "pixelated"} style)}])