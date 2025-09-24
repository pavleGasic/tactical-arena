(ns ui.components.dialog
  (:require [reagent.core :as r]))

(defonce dialog-state (r/atom {:open?   false
                               :title   "Error"
                               :message "Something went wrong."}))

(defn open-error!
  ([msg] (open-error! "Error" msg))
  ([title msg]
   (reset! dialog-state {:open? true :title title :message msg})))

(defn close-error! []
  (swap! dialog-state assoc :open? false))

(defn error-dialog []
  (let [{:keys [open? title message]} @dialog-state]
    [:dialog.nes-dialog.is-rounded
     {:ref     (fn [el]
                 (when el
                   (if open?
                     (.showModal el)
                     (.close el))))
      :id "error-dialog"}
     [:form {:method "dialog"}
      [:p.title title]
      [:p message]
      [:menu.dialog-menu
       [:button.nes-btn {:on-click close-error!} "OK"]]]]))
