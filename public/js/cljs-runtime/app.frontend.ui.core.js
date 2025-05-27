goog.provide('app.frontend.ui.core');
if((typeof app !== 'undefined') && (typeof app.frontend !== 'undefined') && (typeof app.frontend.ui !== 'undefined') && (typeof app.frontend.ui.core !== 'undefined') && (typeof app.frontend.ui.core.app_state !== 'undefined')){
} else {
app.frontend.ui.core.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"menu","menu",352255198)], null));
}
app.frontend.ui.core.root_component = (function app$frontend$ui$core$root_component(){
var map__28371 = cljs.core.deref(app.frontend.ui.core.app_state);
var map__28371__$1 = cljs.core.__destructure_map(map__28371);
var screen__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28371__$1,new cljs.core.Keyword(null,"screen","screen",1990059748));
var G__28372 = screen__$1;
var G__28372__$1 = (((G__28372 instanceof cljs.core.Keyword))?G__28372.fqn:null);
switch (G__28372__$1) {
case "menu":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.frontend.ui.main_menu.main_menu,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.frontend.ui.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"game","game",-441523833));
})], null);

break;
case "game":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Game screen coming soon..."], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Unknown screen"], null);

}
});
app.frontend.ui.core.init = (function app$frontend$ui$core$init(){
(document.body.style.margin = "0");

(document.body.style.padding = "0");

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.frontend.ui.core.root_component], null),document.getElementById("app"));
});

//# sourceMappingURL=app.frontend.ui.core.js.map
