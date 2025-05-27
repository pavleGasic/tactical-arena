goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___37928 = arguments.length;
var i__5727__auto___37929 = (0);
while(true){
if((i__5727__auto___37929 < len__5726__auto___37928)){
args__5732__auto__.push((arguments[i__5727__auto___37929]));

var G__37930 = (i__5727__auto___37929 + (1));
i__5727__auto___37929 = G__37930;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq37643){
var G__37644 = cljs.core.first(seq37643);
var seq37643__$1 = cljs.core.next(seq37643);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37644,seq37643__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__37649 = cljs.core.seq(sources);
var chunk__37650 = null;
var count__37651 = (0);
var i__37652 = (0);
while(true){
if((i__37652 < count__37651)){
var map__37658 = chunk__37650.cljs$core$IIndexed$_nth$arity$2(null, i__37652);
var map__37658__$1 = cljs.core.__destructure_map(map__37658);
var src = map__37658__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37658__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37658__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37658__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37658__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37659){var e_37931 = e37659;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37931);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37931.message)].join('')));
}

var G__37932 = seq__37649;
var G__37933 = chunk__37650;
var G__37934 = count__37651;
var G__37935 = (i__37652 + (1));
seq__37649 = G__37932;
chunk__37650 = G__37933;
count__37651 = G__37934;
i__37652 = G__37935;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__37649);
if(temp__5823__auto__){
var seq__37649__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37649__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__37649__$1);
var G__37936 = cljs.core.chunk_rest(seq__37649__$1);
var G__37937 = c__5525__auto__;
var G__37938 = cljs.core.count(c__5525__auto__);
var G__37939 = (0);
seq__37649 = G__37936;
chunk__37650 = G__37937;
count__37651 = G__37938;
i__37652 = G__37939;
continue;
} else {
var map__37660 = cljs.core.first(seq__37649__$1);
var map__37660__$1 = cljs.core.__destructure_map(map__37660);
var src = map__37660__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37660__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37660__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37660__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37660__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37661){var e_37940 = e37661;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37940);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37940.message)].join('')));
}

var G__37941 = cljs.core.next(seq__37649__$1);
var G__37942 = null;
var G__37943 = (0);
var G__37944 = (0);
seq__37649 = G__37941;
chunk__37650 = G__37942;
count__37651 = G__37943;
i__37652 = G__37944;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__37664 = cljs.core.seq(js_requires);
var chunk__37665 = null;
var count__37666 = (0);
var i__37667 = (0);
while(true){
if((i__37667 < count__37666)){
var js_ns = chunk__37665.cljs$core$IIndexed$_nth$arity$2(null, i__37667);
var require_str_37945 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37945);


var G__37946 = seq__37664;
var G__37947 = chunk__37665;
var G__37948 = count__37666;
var G__37949 = (i__37667 + (1));
seq__37664 = G__37946;
chunk__37665 = G__37947;
count__37666 = G__37948;
i__37667 = G__37949;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__37664);
if(temp__5823__auto__){
var seq__37664__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37664__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__37664__$1);
var G__37950 = cljs.core.chunk_rest(seq__37664__$1);
var G__37951 = c__5525__auto__;
var G__37952 = cljs.core.count(c__5525__auto__);
var G__37953 = (0);
seq__37664 = G__37950;
chunk__37665 = G__37951;
count__37666 = G__37952;
i__37667 = G__37953;
continue;
} else {
var js_ns = cljs.core.first(seq__37664__$1);
var require_str_37954 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37954);


var G__37955 = cljs.core.next(seq__37664__$1);
var G__37956 = null;
var G__37957 = (0);
var G__37958 = (0);
seq__37664 = G__37955;
chunk__37665 = G__37956;
count__37666 = G__37957;
i__37667 = G__37958;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__37669){
var map__37670 = p__37669;
var map__37670__$1 = cljs.core.__destructure_map(map__37670);
var msg = map__37670__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37670__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37670__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37671(s__37672){
return (new cljs.core.LazySeq(null,(function (){
var s__37672__$1 = s__37672;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__37672__$1);
if(temp__5823__auto__){
var xs__6383__auto__ = temp__5823__auto__;
var map__37677 = cljs.core.first(xs__6383__auto__);
var map__37677__$1 = cljs.core.__destructure_map(map__37677);
var src = map__37677__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37677__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37677__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5476__auto__ = ((function (s__37672__$1,map__37677,map__37677__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__37670,map__37670__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37671_$_iter__37673(s__37674){
return (new cljs.core.LazySeq(null,((function (s__37672__$1,map__37677,map__37677__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__37670,map__37670__$1,msg,info,reload_info){
return (function (){
var s__37674__$1 = s__37674;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__37674__$1);
if(temp__5823__auto____$1){
var s__37674__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37674__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__37674__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__37676 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__37675 = (0);
while(true){
if((i__37675 < size__5479__auto__)){
var warning = cljs.core._nth(c__5478__auto__,i__37675);
cljs.core.chunk_append(b__37676,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__37959 = (i__37675 + (1));
i__37675 = G__37959;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37676),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37671_$_iter__37673(cljs.core.chunk_rest(s__37674__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37676),null);
}
} else {
var warning = cljs.core.first(s__37674__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37671_$_iter__37673(cljs.core.rest(s__37674__$2)));
}
} else {
return null;
}
break;
}
});})(s__37672__$1,map__37677,map__37677__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__37670,map__37670__$1,msg,info,reload_info))
,null,null));
});})(s__37672__$1,map__37677,map__37677__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__37670,map__37670__$1,msg,info,reload_info))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(warnings));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37671(cljs.core.rest(s__37672__$1)));
} else {
var G__37960 = cljs.core.rest(s__37672__$1);
s__37672__$1 = G__37960;
continue;
}
} else {
var G__37961 = cljs.core.rest(s__37672__$1);
s__37672__$1 = G__37961;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__37678_37962 = cljs.core.seq(warnings);
var chunk__37679_37963 = null;
var count__37680_37964 = (0);
var i__37681_37965 = (0);
while(true){
if((i__37681_37965 < count__37680_37964)){
var map__37684_37966 = chunk__37679_37963.cljs$core$IIndexed$_nth$arity$2(null, i__37681_37965);
var map__37684_37967__$1 = cljs.core.__destructure_map(map__37684_37966);
var w_37968 = map__37684_37967__$1;
var msg_37969__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37684_37967__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37970 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37684_37967__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37971 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37684_37967__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37972 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37684_37967__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37972)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37970),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37971),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37969__$1)].join(''));


var G__37973 = seq__37678_37962;
var G__37974 = chunk__37679_37963;
var G__37975 = count__37680_37964;
var G__37976 = (i__37681_37965 + (1));
seq__37678_37962 = G__37973;
chunk__37679_37963 = G__37974;
count__37680_37964 = G__37975;
i__37681_37965 = G__37976;
continue;
} else {
var temp__5823__auto___37977 = cljs.core.seq(seq__37678_37962);
if(temp__5823__auto___37977){
var seq__37678_37978__$1 = temp__5823__auto___37977;
if(cljs.core.chunked_seq_QMARK_(seq__37678_37978__$1)){
var c__5525__auto___37979 = cljs.core.chunk_first(seq__37678_37978__$1);
var G__37980 = cljs.core.chunk_rest(seq__37678_37978__$1);
var G__37981 = c__5525__auto___37979;
var G__37982 = cljs.core.count(c__5525__auto___37979);
var G__37983 = (0);
seq__37678_37962 = G__37980;
chunk__37679_37963 = G__37981;
count__37680_37964 = G__37982;
i__37681_37965 = G__37983;
continue;
} else {
var map__37685_37984 = cljs.core.first(seq__37678_37978__$1);
var map__37685_37985__$1 = cljs.core.__destructure_map(map__37685_37984);
var w_37986 = map__37685_37985__$1;
var msg_37987__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37685_37985__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37988 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37685_37985__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37989 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37685_37985__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37990 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37685_37985__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37990)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37988),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37989),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37987__$1)].join(''));


var G__37991 = cljs.core.next(seq__37678_37978__$1);
var G__37992 = null;
var G__37993 = (0);
var G__37994 = (0);
seq__37678_37962 = G__37991;
chunk__37679_37963 = G__37992;
count__37680_37964 = G__37993;
i__37681_37965 = G__37994;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__37668_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__37668_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5000__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5000__auto____$1){
return new$;
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__37686){
var map__37687 = p__37686;
var map__37687__$1 = cljs.core.__destructure_map(map__37687);
var msg = map__37687__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37687__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37687__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__37688 = cljs.core.seq(updates);
var chunk__37690 = null;
var count__37691 = (0);
var i__37692 = (0);
while(true){
if((i__37692 < count__37691)){
var path = chunk__37690.cljs$core$IIndexed$_nth$arity$2(null, i__37692);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37802_37995 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37806_37996 = null;
var count__37807_37997 = (0);
var i__37808_37998 = (0);
while(true){
if((i__37808_37998 < count__37807_37997)){
var node_37999 = chunk__37806_37996.cljs$core$IIndexed$_nth$arity$2(null, i__37808_37998);
if(cljs.core.not(node_37999.shadow$old)){
var path_match_38000 = shadow.cljs.devtools.client.browser.match_paths(node_37999.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38000)){
var new_link_38001 = (function (){var G__37834 = node_37999.cloneNode(true);
G__37834.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38000),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37834;
})();
(node_37999.shadow$old = true);

(new_link_38001.onload = ((function (seq__37802_37995,chunk__37806_37996,count__37807_37997,i__37808_37998,seq__37688,chunk__37690,count__37691,i__37692,new_link_38001,path_match_38000,node_37999,path,map__37687,map__37687__$1,msg,updates,reload_info){
return (function (e){
var seq__37835_38002 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37837_38003 = null;
var count__37838_38004 = (0);
var i__37839_38005 = (0);
while(true){
if((i__37839_38005 < count__37838_38004)){
var map__37843_38006 = chunk__37837_38003.cljs$core$IIndexed$_nth$arity$2(null, i__37839_38005);
var map__37843_38007__$1 = cljs.core.__destructure_map(map__37843_38006);
var task_38008 = map__37843_38007__$1;
var fn_str_38009 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37843_38007__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38010 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37843_38007__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38011 = goog.getObjectByName(fn_str_38009,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38010)].join(''));

(fn_obj_38011.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38011.cljs$core$IFn$_invoke$arity$2(path,new_link_38001) : fn_obj_38011.call(null, path,new_link_38001));


var G__38012 = seq__37835_38002;
var G__38013 = chunk__37837_38003;
var G__38014 = count__37838_38004;
var G__38015 = (i__37839_38005 + (1));
seq__37835_38002 = G__38012;
chunk__37837_38003 = G__38013;
count__37838_38004 = G__38014;
i__37839_38005 = G__38015;
continue;
} else {
var temp__5823__auto___38016 = cljs.core.seq(seq__37835_38002);
if(temp__5823__auto___38016){
var seq__37835_38017__$1 = temp__5823__auto___38016;
if(cljs.core.chunked_seq_QMARK_(seq__37835_38017__$1)){
var c__5525__auto___38018 = cljs.core.chunk_first(seq__37835_38017__$1);
var G__38019 = cljs.core.chunk_rest(seq__37835_38017__$1);
var G__38020 = c__5525__auto___38018;
var G__38021 = cljs.core.count(c__5525__auto___38018);
var G__38022 = (0);
seq__37835_38002 = G__38019;
chunk__37837_38003 = G__38020;
count__37838_38004 = G__38021;
i__37839_38005 = G__38022;
continue;
} else {
var map__37844_38023 = cljs.core.first(seq__37835_38017__$1);
var map__37844_38024__$1 = cljs.core.__destructure_map(map__37844_38023);
var task_38025 = map__37844_38024__$1;
var fn_str_38026 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37844_38024__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38027 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37844_38024__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38028 = goog.getObjectByName(fn_str_38026,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38027)].join(''));

(fn_obj_38028.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38028.cljs$core$IFn$_invoke$arity$2(path,new_link_38001) : fn_obj_38028.call(null, path,new_link_38001));


var G__38029 = cljs.core.next(seq__37835_38017__$1);
var G__38030 = null;
var G__38031 = (0);
var G__38032 = (0);
seq__37835_38002 = G__38029;
chunk__37837_38003 = G__38030;
count__37838_38004 = G__38031;
i__37839_38005 = G__38032;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_37999);
});})(seq__37802_37995,chunk__37806_37996,count__37807_37997,i__37808_37998,seq__37688,chunk__37690,count__37691,i__37692,new_link_38001,path_match_38000,node_37999,path,map__37687,map__37687__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38000], 0));

goog.dom.insertSiblingAfter(new_link_38001,node_37999);


var G__38033 = seq__37802_37995;
var G__38034 = chunk__37806_37996;
var G__38035 = count__37807_37997;
var G__38036 = (i__37808_37998 + (1));
seq__37802_37995 = G__38033;
chunk__37806_37996 = G__38034;
count__37807_37997 = G__38035;
i__37808_37998 = G__38036;
continue;
} else {
var G__38037 = seq__37802_37995;
var G__38038 = chunk__37806_37996;
var G__38039 = count__37807_37997;
var G__38040 = (i__37808_37998 + (1));
seq__37802_37995 = G__38037;
chunk__37806_37996 = G__38038;
count__37807_37997 = G__38039;
i__37808_37998 = G__38040;
continue;
}
} else {
var G__38041 = seq__37802_37995;
var G__38042 = chunk__37806_37996;
var G__38043 = count__37807_37997;
var G__38044 = (i__37808_37998 + (1));
seq__37802_37995 = G__38041;
chunk__37806_37996 = G__38042;
count__37807_37997 = G__38043;
i__37808_37998 = G__38044;
continue;
}
} else {
var temp__5823__auto___38045 = cljs.core.seq(seq__37802_37995);
if(temp__5823__auto___38045){
var seq__37802_38046__$1 = temp__5823__auto___38045;
if(cljs.core.chunked_seq_QMARK_(seq__37802_38046__$1)){
var c__5525__auto___38047 = cljs.core.chunk_first(seq__37802_38046__$1);
var G__38048 = cljs.core.chunk_rest(seq__37802_38046__$1);
var G__38049 = c__5525__auto___38047;
var G__38050 = cljs.core.count(c__5525__auto___38047);
var G__38051 = (0);
seq__37802_37995 = G__38048;
chunk__37806_37996 = G__38049;
count__37807_37997 = G__38050;
i__37808_37998 = G__38051;
continue;
} else {
var node_38052 = cljs.core.first(seq__37802_38046__$1);
if(cljs.core.not(node_38052.shadow$old)){
var path_match_38053 = shadow.cljs.devtools.client.browser.match_paths(node_38052.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38053)){
var new_link_38054 = (function (){var G__37845 = node_38052.cloneNode(true);
G__37845.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38053),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37845;
})();
(node_38052.shadow$old = true);

(new_link_38054.onload = ((function (seq__37802_37995,chunk__37806_37996,count__37807_37997,i__37808_37998,seq__37688,chunk__37690,count__37691,i__37692,new_link_38054,path_match_38053,node_38052,seq__37802_38046__$1,temp__5823__auto___38045,path,map__37687,map__37687__$1,msg,updates,reload_info){
return (function (e){
var seq__37846_38055 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37848_38056 = null;
var count__37849_38057 = (0);
var i__37850_38058 = (0);
while(true){
if((i__37850_38058 < count__37849_38057)){
var map__37854_38059 = chunk__37848_38056.cljs$core$IIndexed$_nth$arity$2(null, i__37850_38058);
var map__37854_38060__$1 = cljs.core.__destructure_map(map__37854_38059);
var task_38061 = map__37854_38060__$1;
var fn_str_38062 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37854_38060__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38063 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37854_38060__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38064 = goog.getObjectByName(fn_str_38062,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38063)].join(''));

(fn_obj_38064.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38064.cljs$core$IFn$_invoke$arity$2(path,new_link_38054) : fn_obj_38064.call(null, path,new_link_38054));


var G__38065 = seq__37846_38055;
var G__38066 = chunk__37848_38056;
var G__38067 = count__37849_38057;
var G__38068 = (i__37850_38058 + (1));
seq__37846_38055 = G__38065;
chunk__37848_38056 = G__38066;
count__37849_38057 = G__38067;
i__37850_38058 = G__38068;
continue;
} else {
var temp__5823__auto___38069__$1 = cljs.core.seq(seq__37846_38055);
if(temp__5823__auto___38069__$1){
var seq__37846_38070__$1 = temp__5823__auto___38069__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37846_38070__$1)){
var c__5525__auto___38071 = cljs.core.chunk_first(seq__37846_38070__$1);
var G__38072 = cljs.core.chunk_rest(seq__37846_38070__$1);
var G__38073 = c__5525__auto___38071;
var G__38074 = cljs.core.count(c__5525__auto___38071);
var G__38075 = (0);
seq__37846_38055 = G__38072;
chunk__37848_38056 = G__38073;
count__37849_38057 = G__38074;
i__37850_38058 = G__38075;
continue;
} else {
var map__37855_38076 = cljs.core.first(seq__37846_38070__$1);
var map__37855_38077__$1 = cljs.core.__destructure_map(map__37855_38076);
var task_38078 = map__37855_38077__$1;
var fn_str_38079 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37855_38077__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38080 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37855_38077__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38081 = goog.getObjectByName(fn_str_38079,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38080)].join(''));

(fn_obj_38081.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38081.cljs$core$IFn$_invoke$arity$2(path,new_link_38054) : fn_obj_38081.call(null, path,new_link_38054));


var G__38082 = cljs.core.next(seq__37846_38070__$1);
var G__38083 = null;
var G__38084 = (0);
var G__38085 = (0);
seq__37846_38055 = G__38082;
chunk__37848_38056 = G__38083;
count__37849_38057 = G__38084;
i__37850_38058 = G__38085;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38052);
});})(seq__37802_37995,chunk__37806_37996,count__37807_37997,i__37808_37998,seq__37688,chunk__37690,count__37691,i__37692,new_link_38054,path_match_38053,node_38052,seq__37802_38046__$1,temp__5823__auto___38045,path,map__37687,map__37687__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38053], 0));

goog.dom.insertSiblingAfter(new_link_38054,node_38052);


var G__38086 = cljs.core.next(seq__37802_38046__$1);
var G__38087 = null;
var G__38088 = (0);
var G__38089 = (0);
seq__37802_37995 = G__38086;
chunk__37806_37996 = G__38087;
count__37807_37997 = G__38088;
i__37808_37998 = G__38089;
continue;
} else {
var G__38090 = cljs.core.next(seq__37802_38046__$1);
var G__38091 = null;
var G__38092 = (0);
var G__38093 = (0);
seq__37802_37995 = G__38090;
chunk__37806_37996 = G__38091;
count__37807_37997 = G__38092;
i__37808_37998 = G__38093;
continue;
}
} else {
var G__38094 = cljs.core.next(seq__37802_38046__$1);
var G__38095 = null;
var G__38096 = (0);
var G__38097 = (0);
seq__37802_37995 = G__38094;
chunk__37806_37996 = G__38095;
count__37807_37997 = G__38096;
i__37808_37998 = G__38097;
continue;
}
}
} else {
}
}
break;
}


var G__38098 = seq__37688;
var G__38099 = chunk__37690;
var G__38100 = count__37691;
var G__38101 = (i__37692 + (1));
seq__37688 = G__38098;
chunk__37690 = G__38099;
count__37691 = G__38100;
i__37692 = G__38101;
continue;
} else {
var G__38102 = seq__37688;
var G__38103 = chunk__37690;
var G__38104 = count__37691;
var G__38105 = (i__37692 + (1));
seq__37688 = G__38102;
chunk__37690 = G__38103;
count__37691 = G__38104;
i__37692 = G__38105;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__37688);
if(temp__5823__auto__){
var seq__37688__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37688__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__37688__$1);
var G__38106 = cljs.core.chunk_rest(seq__37688__$1);
var G__38107 = c__5525__auto__;
var G__38108 = cljs.core.count(c__5525__auto__);
var G__38109 = (0);
seq__37688 = G__38106;
chunk__37690 = G__38107;
count__37691 = G__38108;
i__37692 = G__38109;
continue;
} else {
var path = cljs.core.first(seq__37688__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37856_38110 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37860_38111 = null;
var count__37861_38112 = (0);
var i__37862_38113 = (0);
while(true){
if((i__37862_38113 < count__37861_38112)){
var node_38114 = chunk__37860_38111.cljs$core$IIndexed$_nth$arity$2(null, i__37862_38113);
if(cljs.core.not(node_38114.shadow$old)){
var path_match_38115 = shadow.cljs.devtools.client.browser.match_paths(node_38114.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38115)){
var new_link_38116 = (function (){var G__37888 = node_38114.cloneNode(true);
G__37888.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38115),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37888;
})();
(node_38114.shadow$old = true);

(new_link_38116.onload = ((function (seq__37856_38110,chunk__37860_38111,count__37861_38112,i__37862_38113,seq__37688,chunk__37690,count__37691,i__37692,new_link_38116,path_match_38115,node_38114,path,seq__37688__$1,temp__5823__auto__,map__37687,map__37687__$1,msg,updates,reload_info){
return (function (e){
var seq__37889_38117 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37891_38118 = null;
var count__37892_38119 = (0);
var i__37893_38120 = (0);
while(true){
if((i__37893_38120 < count__37892_38119)){
var map__37897_38121 = chunk__37891_38118.cljs$core$IIndexed$_nth$arity$2(null, i__37893_38120);
var map__37897_38122__$1 = cljs.core.__destructure_map(map__37897_38121);
var task_38123 = map__37897_38122__$1;
var fn_str_38124 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37897_38122__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38125 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37897_38122__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38126 = goog.getObjectByName(fn_str_38124,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38125)].join(''));

(fn_obj_38126.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38126.cljs$core$IFn$_invoke$arity$2(path,new_link_38116) : fn_obj_38126.call(null, path,new_link_38116));


var G__38127 = seq__37889_38117;
var G__38128 = chunk__37891_38118;
var G__38129 = count__37892_38119;
var G__38130 = (i__37893_38120 + (1));
seq__37889_38117 = G__38127;
chunk__37891_38118 = G__38128;
count__37892_38119 = G__38129;
i__37893_38120 = G__38130;
continue;
} else {
var temp__5823__auto___38131__$1 = cljs.core.seq(seq__37889_38117);
if(temp__5823__auto___38131__$1){
var seq__37889_38132__$1 = temp__5823__auto___38131__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37889_38132__$1)){
var c__5525__auto___38133 = cljs.core.chunk_first(seq__37889_38132__$1);
var G__38134 = cljs.core.chunk_rest(seq__37889_38132__$1);
var G__38135 = c__5525__auto___38133;
var G__38136 = cljs.core.count(c__5525__auto___38133);
var G__38137 = (0);
seq__37889_38117 = G__38134;
chunk__37891_38118 = G__38135;
count__37892_38119 = G__38136;
i__37893_38120 = G__38137;
continue;
} else {
var map__37898_38138 = cljs.core.first(seq__37889_38132__$1);
var map__37898_38139__$1 = cljs.core.__destructure_map(map__37898_38138);
var task_38140 = map__37898_38139__$1;
var fn_str_38141 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37898_38139__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38142 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37898_38139__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38143 = goog.getObjectByName(fn_str_38141,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38142)].join(''));

(fn_obj_38143.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38143.cljs$core$IFn$_invoke$arity$2(path,new_link_38116) : fn_obj_38143.call(null, path,new_link_38116));


var G__38144 = cljs.core.next(seq__37889_38132__$1);
var G__38145 = null;
var G__38146 = (0);
var G__38147 = (0);
seq__37889_38117 = G__38144;
chunk__37891_38118 = G__38145;
count__37892_38119 = G__38146;
i__37893_38120 = G__38147;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38114);
});})(seq__37856_38110,chunk__37860_38111,count__37861_38112,i__37862_38113,seq__37688,chunk__37690,count__37691,i__37692,new_link_38116,path_match_38115,node_38114,path,seq__37688__$1,temp__5823__auto__,map__37687,map__37687__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38115], 0));

goog.dom.insertSiblingAfter(new_link_38116,node_38114);


var G__38148 = seq__37856_38110;
var G__38149 = chunk__37860_38111;
var G__38150 = count__37861_38112;
var G__38151 = (i__37862_38113 + (1));
seq__37856_38110 = G__38148;
chunk__37860_38111 = G__38149;
count__37861_38112 = G__38150;
i__37862_38113 = G__38151;
continue;
} else {
var G__38152 = seq__37856_38110;
var G__38153 = chunk__37860_38111;
var G__38154 = count__37861_38112;
var G__38155 = (i__37862_38113 + (1));
seq__37856_38110 = G__38152;
chunk__37860_38111 = G__38153;
count__37861_38112 = G__38154;
i__37862_38113 = G__38155;
continue;
}
} else {
var G__38156 = seq__37856_38110;
var G__38157 = chunk__37860_38111;
var G__38158 = count__37861_38112;
var G__38159 = (i__37862_38113 + (1));
seq__37856_38110 = G__38156;
chunk__37860_38111 = G__38157;
count__37861_38112 = G__38158;
i__37862_38113 = G__38159;
continue;
}
} else {
var temp__5823__auto___38160__$1 = cljs.core.seq(seq__37856_38110);
if(temp__5823__auto___38160__$1){
var seq__37856_38161__$1 = temp__5823__auto___38160__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37856_38161__$1)){
var c__5525__auto___38162 = cljs.core.chunk_first(seq__37856_38161__$1);
var G__38163 = cljs.core.chunk_rest(seq__37856_38161__$1);
var G__38164 = c__5525__auto___38162;
var G__38165 = cljs.core.count(c__5525__auto___38162);
var G__38166 = (0);
seq__37856_38110 = G__38163;
chunk__37860_38111 = G__38164;
count__37861_38112 = G__38165;
i__37862_38113 = G__38166;
continue;
} else {
var node_38167 = cljs.core.first(seq__37856_38161__$1);
if(cljs.core.not(node_38167.shadow$old)){
var path_match_38168 = shadow.cljs.devtools.client.browser.match_paths(node_38167.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38168)){
var new_link_38169 = (function (){var G__37899 = node_38167.cloneNode(true);
G__37899.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38168),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37899;
})();
(node_38167.shadow$old = true);

(new_link_38169.onload = ((function (seq__37856_38110,chunk__37860_38111,count__37861_38112,i__37862_38113,seq__37688,chunk__37690,count__37691,i__37692,new_link_38169,path_match_38168,node_38167,seq__37856_38161__$1,temp__5823__auto___38160__$1,path,seq__37688__$1,temp__5823__auto__,map__37687,map__37687__$1,msg,updates,reload_info){
return (function (e){
var seq__37900_38170 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37902_38171 = null;
var count__37903_38172 = (0);
var i__37904_38173 = (0);
while(true){
if((i__37904_38173 < count__37903_38172)){
var map__37908_38174 = chunk__37902_38171.cljs$core$IIndexed$_nth$arity$2(null, i__37904_38173);
var map__37908_38175__$1 = cljs.core.__destructure_map(map__37908_38174);
var task_38176 = map__37908_38175__$1;
var fn_str_38177 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37908_38175__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38178 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37908_38175__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38179 = goog.getObjectByName(fn_str_38177,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38178)].join(''));

(fn_obj_38179.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38179.cljs$core$IFn$_invoke$arity$2(path,new_link_38169) : fn_obj_38179.call(null, path,new_link_38169));


var G__38180 = seq__37900_38170;
var G__38181 = chunk__37902_38171;
var G__38182 = count__37903_38172;
var G__38183 = (i__37904_38173 + (1));
seq__37900_38170 = G__38180;
chunk__37902_38171 = G__38181;
count__37903_38172 = G__38182;
i__37904_38173 = G__38183;
continue;
} else {
var temp__5823__auto___38184__$2 = cljs.core.seq(seq__37900_38170);
if(temp__5823__auto___38184__$2){
var seq__37900_38185__$1 = temp__5823__auto___38184__$2;
if(cljs.core.chunked_seq_QMARK_(seq__37900_38185__$1)){
var c__5525__auto___38186 = cljs.core.chunk_first(seq__37900_38185__$1);
var G__38187 = cljs.core.chunk_rest(seq__37900_38185__$1);
var G__38188 = c__5525__auto___38186;
var G__38189 = cljs.core.count(c__5525__auto___38186);
var G__38190 = (0);
seq__37900_38170 = G__38187;
chunk__37902_38171 = G__38188;
count__37903_38172 = G__38189;
i__37904_38173 = G__38190;
continue;
} else {
var map__37909_38191 = cljs.core.first(seq__37900_38185__$1);
var map__37909_38192__$1 = cljs.core.__destructure_map(map__37909_38191);
var task_38193 = map__37909_38192__$1;
var fn_str_38194 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37909_38192__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38195 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37909_38192__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38196 = goog.getObjectByName(fn_str_38194,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38195)].join(''));

(fn_obj_38196.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38196.cljs$core$IFn$_invoke$arity$2(path,new_link_38169) : fn_obj_38196.call(null, path,new_link_38169));


var G__38197 = cljs.core.next(seq__37900_38185__$1);
var G__38198 = null;
var G__38199 = (0);
var G__38200 = (0);
seq__37900_38170 = G__38197;
chunk__37902_38171 = G__38198;
count__37903_38172 = G__38199;
i__37904_38173 = G__38200;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38167);
});})(seq__37856_38110,chunk__37860_38111,count__37861_38112,i__37862_38113,seq__37688,chunk__37690,count__37691,i__37692,new_link_38169,path_match_38168,node_38167,seq__37856_38161__$1,temp__5823__auto___38160__$1,path,seq__37688__$1,temp__5823__auto__,map__37687,map__37687__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38168], 0));

goog.dom.insertSiblingAfter(new_link_38169,node_38167);


var G__38201 = cljs.core.next(seq__37856_38161__$1);
var G__38202 = null;
var G__38203 = (0);
var G__38204 = (0);
seq__37856_38110 = G__38201;
chunk__37860_38111 = G__38202;
count__37861_38112 = G__38203;
i__37862_38113 = G__38204;
continue;
} else {
var G__38205 = cljs.core.next(seq__37856_38161__$1);
var G__38206 = null;
var G__38207 = (0);
var G__38208 = (0);
seq__37856_38110 = G__38205;
chunk__37860_38111 = G__38206;
count__37861_38112 = G__38207;
i__37862_38113 = G__38208;
continue;
}
} else {
var G__38209 = cljs.core.next(seq__37856_38161__$1);
var G__38210 = null;
var G__38211 = (0);
var G__38212 = (0);
seq__37856_38110 = G__38209;
chunk__37860_38111 = G__38210;
count__37861_38112 = G__38211;
i__37862_38113 = G__38212;
continue;
}
}
} else {
}
}
break;
}


var G__38213 = cljs.core.next(seq__37688__$1);
var G__38214 = null;
var G__38215 = (0);
var G__38216 = (0);
seq__37688 = G__38213;
chunk__37690 = G__38214;
count__37691 = G__38215;
i__37692 = G__38216;
continue;
} else {
var G__38217 = cljs.core.next(seq__37688__$1);
var G__38218 = null;
var G__38219 = (0);
var G__38220 = (0);
seq__37688 = G__38217;
chunk__37690 = G__38218;
count__37691 = G__38219;
i__37692 = G__38220;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__37910){
var map__37911 = p__37910;
var map__37911__$1 = cljs.core.__destructure_map(map__37911);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37911__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__37912,done,error){
var map__37913 = p__37912;
var map__37913__$1 = cljs.core.__destructure_map(map__37913);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37913__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null, ));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__37914,done,error){
var map__37915 = p__37914;
var map__37915__$1 = cljs.core.__destructure_map(map__37915);
var msg = map__37915__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37915__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37915__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37915__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__37916){
var map__37917 = p__37916;
var map__37917__$1 = cljs.core.__destructure_map(map__37917);
var src = map__37917__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37917__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5000__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5000__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__37918 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__37918) : done.call(null, G__37918));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__37919){
var map__37920 = p__37919;
var map__37920__$1 = cljs.core.__destructure_map(map__37920);
var msg__$1 = map__37920__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37920__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null, sources_to_load));
}catch (e37921){var ex = e37921;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null, ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__37922){
var map__37923 = p__37922;
var map__37923__$1 = cljs.core.__destructure_map(map__37923);
var env = map__37923__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37923__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__37924){
var map__37925 = p__37924;
var map__37925__$1 = cljs.core.__destructure_map(map__37925);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37925__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37925__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__37926){
var map__37927 = p__37926;
var map__37927__$1 = cljs.core.__destructure_map(map__37927);
var svc = map__37927__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37927__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
