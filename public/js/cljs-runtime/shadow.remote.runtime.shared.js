goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__29672){
var map__29673 = p__29672;
var map__29673__$1 = cljs.core.__destructure_map(map__29673);
var runtime = map__29673__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29673__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5002__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_30028 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_30028)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__29690 = runtime;
var G__29691 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_30028);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__29690,G__29691) : shadow.remote.runtime.shared.process.call(null, G__29690,G__29691));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__29698,res){
var map__29701 = p__29698;
var map__29701__$1 = cljs.core.__destructure_map(map__29701);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29701__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29701__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__29703 = res;
var G__29703__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29703,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__29703);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29703__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__29703__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__29729 = arguments.length;
switch (G__29729) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__29739,msg,handlers,timeout_after_ms){
var map__29740 = p__29739;
var map__29740__$1 = cljs.core.__destructure_map(map__29740);
var runtime = map__29740__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29740__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___30065 = arguments.length;
var i__5727__auto___30067 = (0);
while(true){
if((i__5727__auto___30067 < len__5726__auto___30065)){
args__5732__auto__.push((arguments[i__5727__auto___30067]));

var G__30068 = (i__5727__auto___30067 + (1));
i__5727__auto___30067 = G__30068;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__29760,ev,args){
var map__29762 = p__29760;
var map__29762__$1 = cljs.core.__destructure_map(map__29762);
var runtime = map__29762__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29762__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__29766 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__29769 = null;
var count__29770 = (0);
var i__29771 = (0);
while(true){
if((i__29771 < count__29770)){
var ext = chunk__29769.cljs$core$IIndexed$_nth$arity$2(null, i__29771);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__30078 = seq__29766;
var G__30079 = chunk__29769;
var G__30080 = count__29770;
var G__30081 = (i__29771 + (1));
seq__29766 = G__30078;
chunk__29769 = G__30079;
count__29770 = G__30080;
i__29771 = G__30081;
continue;
} else {
var G__30087 = seq__29766;
var G__30088 = chunk__29769;
var G__30089 = count__29770;
var G__30090 = (i__29771 + (1));
seq__29766 = G__30087;
chunk__29769 = G__30088;
count__29770 = G__30089;
i__29771 = G__30090;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__29766);
if(temp__5823__auto__){
var seq__29766__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29766__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__29766__$1);
var G__30094 = cljs.core.chunk_rest(seq__29766__$1);
var G__30095 = c__5525__auto__;
var G__30096 = cljs.core.count(c__5525__auto__);
var G__30097 = (0);
seq__29766 = G__30094;
chunk__29769 = G__30095;
count__29770 = G__30096;
i__29771 = G__30097;
continue;
} else {
var ext = cljs.core.first(seq__29766__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__30101 = cljs.core.next(seq__29766__$1);
var G__30102 = null;
var G__30103 = (0);
var G__30104 = (0);
seq__29766 = G__30101;
chunk__29769 = G__30102;
count__29770 = G__30103;
i__29771 = G__30104;
continue;
} else {
var G__30105 = cljs.core.next(seq__29766__$1);
var G__30106 = null;
var G__30107 = (0);
var G__30108 = (0);
seq__29766 = G__30105;
chunk__29769 = G__30106;
count__29770 = G__30107;
i__29771 = G__30108;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq29757){
var G__29758 = cljs.core.first(seq29757);
var seq29757__$1 = cljs.core.next(seq29757);
var G__29759 = cljs.core.first(seq29757__$1);
var seq29757__$2 = cljs.core.next(seq29757__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29758,G__29759,seq29757__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__29798,p__29799){
var map__29800 = p__29798;
var map__29800__$1 = cljs.core.__destructure_map(map__29800);
var runtime = map__29800__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29800__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__29801 = p__29799;
var map__29801__$1 = cljs.core.__destructure_map(map__29801);
var msg = map__29801__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29801__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__29807 = cljs.core.deref(state_ref);
var map__29807__$1 = cljs.core.__destructure_map(map__29807);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29807__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29807__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__29824,msg){
var map__29828 = p__29824;
var map__29828__$1 = cljs.core.__destructure_map(map__29828);
var runtime = map__29828__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29828__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__29842,key,p__29843){
var map__29844 = p__29842;
var map__29844__$1 = cljs.core.__destructure_map(map__29844);
var state = map__29844__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29844__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__29846 = p__29843;
var map__29846__$1 = cljs.core.__destructure_map(map__29846);
var spec = map__29846__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29846__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29846__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__29860,key,spec){
var map__29861 = p__29860;
var map__29861__$1 = cljs.core.__destructure_map(map__29861);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29861__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__29863_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__29863_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__29866_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__29866_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__29868_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__29868_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__29870_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__29870_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__29871_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__29871_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__29884,key){
var map__29886 = p__29884;
var map__29886__$1 = cljs.core.__destructure_map(map__29886);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29886__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__29901,msg){
var map__29902 = p__29901;
var map__29902__$1 = cljs.core.__destructure_map(map__29902);
var runtime = map__29902__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29902__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__29927,p__29928){
var map__29930 = p__29927;
var map__29930__$1 = cljs.core.__destructure_map(map__29930);
var runtime = map__29930__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29930__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__29931 = p__29928;
var map__29931__$1 = cljs.core.__destructure_map(map__29931);
var msg = map__29931__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29931__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29931__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null, msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__29963 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__29965 = null;
var count__29966 = (0);
var i__29967 = (0);
while(true){
if((i__29967 < count__29966)){
var map__29987 = chunk__29965.cljs$core$IIndexed$_nth$arity$2(null, i__29967);
var map__29987__$1 = cljs.core.__destructure_map(map__29987);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29987__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__30235 = seq__29963;
var G__30236 = chunk__29965;
var G__30237 = count__29966;
var G__30238 = (i__29967 + (1));
seq__29963 = G__30235;
chunk__29965 = G__30236;
count__29966 = G__30237;
i__29967 = G__30238;
continue;
} else {
var G__30239 = seq__29963;
var G__30240 = chunk__29965;
var G__30241 = count__29966;
var G__30242 = (i__29967 + (1));
seq__29963 = G__30239;
chunk__29965 = G__30240;
count__29966 = G__30241;
i__29967 = G__30242;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__29963);
if(temp__5823__auto__){
var seq__29963__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29963__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__29963__$1);
var G__30243 = cljs.core.chunk_rest(seq__29963__$1);
var G__30244 = c__5525__auto__;
var G__30245 = cljs.core.count(c__5525__auto__);
var G__30246 = (0);
seq__29963 = G__30243;
chunk__29965 = G__30244;
count__29966 = G__30245;
i__29967 = G__30246;
continue;
} else {
var map__29989 = cljs.core.first(seq__29963__$1);
var map__29989__$1 = cljs.core.__destructure_map(map__29989);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29989__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__30247 = cljs.core.next(seq__29963__$1);
var G__30248 = null;
var G__30249 = (0);
var G__30250 = (0);
seq__29963 = G__30247;
chunk__29965 = G__30248;
count__29966 = G__30249;
i__29967 = G__30250;
continue;
} else {
var G__30251 = cljs.core.next(seq__29963__$1);
var G__30252 = null;
var G__30253 = (0);
var G__30254 = (0);
seq__29963 = G__30251;
chunk__29965 = G__30252;
count__29966 = G__30253;
i__29967 = G__30254;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
