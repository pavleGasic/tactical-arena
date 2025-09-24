(ns ta-backend.logger
  (:require [taoensso.timbre :as logger]))

(defn setup-logging []
  "Setup function for server logging"
  (logger/merge-config!
    {:level :info})
  (logger/info "Logging initialized"))

(defn info
  "Log an info message"
  [msg]
  (logger/info msg))

(defn debug
  "Log a debug message"
  [msg]
  (logger/debug msg))

(defn warn
  "Log a warning message"
  [msg]
  (logger/warn msg))

(defn error
  "Log an error message, optionally with exception"
  ([msg] (logger/error msg))
  ([msg err] (logger/error err msg)))