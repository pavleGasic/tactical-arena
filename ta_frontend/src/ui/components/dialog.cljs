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


(defonce info-state (r/atom {:open?   false
                             :title   "Info"
                             :message ""
                             :on-close nil}))

(defn open-info!
  ([msg] (open-info! "Info" msg nil))
  ([title msg on-close]
   (reset! info-state {:open? true :title title :message msg :on-close on-close})))

(defn close-info! []
  (let [on-close (:on-close @info-state)]
    (swap! info-state assoc :open? false :on-close nil)
    (when (fn? on-close)
      (on-close))))

(defn info-dialog []
  (let [{:keys [open? title message]} @info-state]
    [:dialog.nes-dialog.is-rounded
     {:ref (fn [el]
             (when el
               (if open?
                 (.showModal el)
                 (.close el))))}
     [:form {:method "dialog"}
      [:p.title title]
      [:p message]
      [:menu.dialog-menu
       [:button.nes-btn {:on-click close-info!} "OK"]]]]))
