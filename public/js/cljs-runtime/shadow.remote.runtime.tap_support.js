goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__36019,p__36020){
var map__36022 = p__36019;
var map__36022__$1 = cljs.core.__destructure_map(map__36022);
var svc = map__36022__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36022__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36022__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36022__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__36027 = p__36020;
var map__36027__$1 = cljs.core.__destructure_map(map__36027);
var msg = map__36027__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36027__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36027__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36027__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36027__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__36043,p__36044){
var map__36050 = p__36043;
var map__36050__$1 = cljs.core.__destructure_map(map__36050);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36050__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__36051 = p__36044;
var map__36051__$1 = cljs.core.__destructure_map(map__36051);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36051__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__36069,p__36070){
var map__36074 = p__36069;
var map__36074__$1 = cljs.core.__destructure_map(map__36074);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36074__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36074__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__36075 = p__36070;
var map__36075__$1 = cljs.core.__destructure_map(map__36075);
var msg = map__36075__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36075__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__36101,tid){
var map__36102 = p__36101;
var map__36102__$1 = cljs.core.__destructure_map(map__36102);
var svc = map__36102__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36102__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__36125 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__36126 = null;
var count__36127 = (0);
var i__36128 = (0);
while(true){
if((i__36128 < count__36127)){
var vec__36184 = chunk__36126.cljs$core$IIndexed$_nth$arity$2(null, i__36128);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36184,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36184,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__36245 = seq__36125;
var G__36246 = chunk__36126;
var G__36247 = count__36127;
var G__36248 = (i__36128 + (1));
seq__36125 = G__36245;
chunk__36126 = G__36246;
count__36127 = G__36247;
i__36128 = G__36248;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__36125);
if(temp__5823__auto__){
var seq__36125__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36125__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__36125__$1);
var G__36250 = cljs.core.chunk_rest(seq__36125__$1);
var G__36251 = c__5525__auto__;
var G__36252 = cljs.core.count(c__5525__auto__);
var G__36253 = (0);
seq__36125 = G__36250;
chunk__36126 = G__36251;
count__36127 = G__36252;
i__36128 = G__36253;
continue;
} else {
var vec__36192 = cljs.core.first(seq__36125__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36192,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36192,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__36255 = cljs.core.next(seq__36125__$1);
var G__36256 = null;
var G__36257 = (0);
var G__36258 = (0);
seq__36125 = G__36255;
chunk__36126 = G__36256;
count__36127 = G__36257;
i__36128 = G__36258;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__36106_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__36106_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__36110_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__36110_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__36112_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__36112_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__36113_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__36113_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__36197){
var map__36198 = p__36197;
var map__36198__$1 = cljs.core.__destructure_map(map__36198);
var svc = map__36198__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36198__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36198__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
