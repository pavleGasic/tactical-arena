goog.provide('app.core');
if((typeof app !== 'undefined') && (typeof app.core !== 'undefined') && (typeof app.core.app_state !== 'undefined')){
} else {
app.core.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"grid-size","grid-size",2138480144),(5),new cljs.core.Keyword(null,"units","units",-533089095),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"p1","p1",-936759954),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"hp","hp",-1541237831),(10)], null)], null),new cljs.core.Keyword(null,"bot","bot",-950896508),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"b1","b1",-1270036758),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(4)], null),new cljs.core.Keyword(null,"hp","hp",-1541237831),(10)], null)], null)], null),new cljs.core.Keyword(null,"selected","selected",574897764),null], null));
}
app.core.cell = (function app$core$cell(x,y){
var units = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"units","units",-533089095),new cljs.core.Keyword(null,"player","player",-97687400)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"units","units",-533089095),new cljs.core.Keyword(null,"bot","bot",-950896508)], null)));
var unit = cljs.core.some((function (p1__38221_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(p1__38221_SHARP_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))){
return p1__38221_SHARP_;
} else {
return null;
}
}),units);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cell","div.cell",1471979620),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #ccc",new cljs.core.Keyword(null,"width","width",-384071477),"60px",new cljs.core.Keyword(null,"height","height",1025178622),"60px",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center",new cljs.core.Keyword(null,"background","background",-863952629),(cljs.core.truth_(unit)?"#eef":null)], null)], null),(cljs.core.truth_(unit)?cljs.core.name(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(unit)):null)], null);
});
app.core.board = (function app$core$board(){
var size = new cljs.core.Keyword(null,"grid-size","grid-size",2138480144).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.core.app_state));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.board","div.board",905832129),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"grid",new cljs.core.Keyword(null,"grid-template-columns","grid-template-columns",-594112133),["repeat(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),", 60px)"].join(''),new cljs.core.Keyword(null,"gap","gap",80255254),"4px"], null)], null),(function (){var iter__5480__auto__ = (function app$core$board_$_iter__38222(s__38223){
return (new cljs.core.LazySeq(null,(function (){
var s__38223__$1 = s__38223;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__38223__$1);
if(temp__5823__auto__){
var xs__6383__auto__ = temp__5823__auto__;
var y = cljs.core.first(xs__6383__auto__);
var iterys__5476__auto__ = ((function (s__38223__$1,y,xs__6383__auto__,temp__5823__auto__,size){
return (function app$core$board_$_iter__38222_$_iter__38224(s__38225){
return (new cljs.core.LazySeq(null,((function (s__38223__$1,y,xs__6383__auto__,temp__5823__auto__,size){
return (function (){
var s__38225__$1 = s__38225;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__38225__$1);
if(temp__5823__auto____$1){
var s__38225__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__38225__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__38225__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__38227 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__38226 = (0);
while(true){
if((i__38226 < size__5479__auto__)){
var x = cljs.core._nth(c__5478__auto__,i__38226);
cljs.core.chunk_append(b__38227,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.core.cell,x,y], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__38228 = (i__38226 + (1));
i__38226 = G__38228;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38227),app$core$board_$_iter__38222_$_iter__38224(cljs.core.chunk_rest(s__38225__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38227),null);
}
} else {
var x = cljs.core.first(s__38225__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.core.cell,x,y], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),app$core$board_$_iter__38222_$_iter__38224(cljs.core.rest(s__38225__$2)));
}
} else {
return null;
}
break;
}
});})(s__38223__$1,y,xs__6383__auto__,temp__5823__auto__,size))
,null,null));
});})(s__38223__$1,y,xs__6383__auto__,temp__5823__auto__,size))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(size)));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,app$core$board_$_iter__38222(cljs.core.rest(s__38223__$1)));
} else {
var G__38229 = cljs.core.rest(s__38223__$1);
s__38223__$1 = G__38229;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(size));
})()], null);
});
app.core.root = (function app$core$root(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Tactical Arena"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.core.board], null)], null);
});
app.core.start = (function app$core$start(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.core.root], null),document.getElementById("app"));
});
app.core.init = (function app$core$init(){
return app.core.start();
});

//# sourceMappingURL=app.core.js.map
