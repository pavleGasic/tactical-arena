goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__32320__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__32320 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32321__i = 0, G__32321__a = new Array(arguments.length -  0);
while (G__32321__i < G__32321__a.length) {G__32321__a[G__32321__i] = arguments[G__32321__i + 0]; ++G__32321__i;}
  args = new cljs.core.IndexedSeq(G__32321__a,0,null);
} 
return G__32320__delegate.call(this,args);};
G__32320.cljs$lang$maxFixedArity = 0;
G__32320.cljs$lang$applyTo = (function (arglist__32322){
var args = cljs.core.seq(arglist__32322);
return G__32320__delegate(args);
});
G__32320.cljs$core$IFn$_invoke$arity$variadic = G__32320__delegate;
return G__32320;
})()
);

(o.error = (function() { 
var G__32323__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__32323 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32324__i = 0, G__32324__a = new Array(arguments.length -  0);
while (G__32324__i < G__32324__a.length) {G__32324__a[G__32324__i] = arguments[G__32324__i + 0]; ++G__32324__i;}
  args = new cljs.core.IndexedSeq(G__32324__a,0,null);
} 
return G__32323__delegate.call(this,args);};
G__32323.cljs$lang$maxFixedArity = 0;
G__32323.cljs$lang$applyTo = (function (arglist__32325){
var args = cljs.core.seq(arglist__32325);
return G__32323__delegate(args);
});
G__32323.cljs$core$IFn$_invoke$arity$variadic = G__32323__delegate;
return G__32323;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null, ));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
