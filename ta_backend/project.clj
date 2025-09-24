(defproject ta_backend "0.1.0-SNAPSHOT"
  :description "Turn based web game - Tactical Arena"
  :license {:name "EPL-2.0 OR GPL-2.0-or-later WITH Classpath-exception-2.0"
            :url "https://www.eclipse.org/legal/epl-2.0/"}
  :dependencies [[org.clojure/clojure "1.11.1"]
                 [ring/ring-defaults "0.5.0"]
                 [ring/ring-jetty-adapter "1.12.2"]
                 [metosin/ring-http-response "0.9.4"]
                 [metosin/reitit "0.7.0"]
                 [metosin/reitit-http "0.7.0"]
                 [metosin/muuntaja "0.6.10"]
                 [ring-cors/ring-cors "0.1.13"]
                 [compojure "1.7.1"]
                 [cheshire "5.12.0"]
                 [com.taoensso/timbre "6.5.0"]
                 [midje "1.10.10"]
                 [ring-mock "0.1.5"]]
  :plugins [[lein-midje "3.2.2"]]
  :main ^:skip-aot ta-backend.core
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all
                       :jvm-opts ["-Dclojure.compiler.direct-linking=true"]}})
