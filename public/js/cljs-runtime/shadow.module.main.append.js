
shadow.cljs.devtools.client.env.module_loaded('main');

try { app.frontend.ui.core.init(); } catch (e) { console.error("An error occurred when calling (app.frontend.ui.core/init)"); throw(e); }