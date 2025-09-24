(ns ta-backend.utils.map-utils
  (:require [ta-backend.game.state :as state]
            [clojure.java.io :as io]
            [cheshire.core :as json]))

(def walkable-tile-ids
  "Tile IDs that characters can walk on"
  #{"10" "11" "12" "19" "23" "26" "27" "28" "29"})

(defn mark-walkable
  "Return a tile map with only x, y and :walkable? keys"
  [tile]
  {:x         (:x tile)
   :y         (:y tile)
   :walkable? (contains? walkable-tile-ids (:id tile))})

(defn load-map!
  "Load the first layer of a JSON map into `state/game-map` atom as a vector."
  []
  (let [res (io/resource "game/map.json")]
    (when-not res
      (throw (ex-info "Map resource not found" {:resource "game/map.json"})))
    (let [raw-map (json/parse-stream (io/reader res) true)
          first-layer (-> raw-map :layers first :tiles)
          tiles (map mark-walkable first-layer)]
      (reset! state/game-map (vec tiles)))))