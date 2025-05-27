goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_35731 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_35731(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_35737 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_35737(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__34237 = coll;
var G__34238 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__34237,G__34238) : shadow.dom.lazy_native_coll_seq.call(null, G__34237,G__34238));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5002__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null, );
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__34333 = arguments.length;
switch (G__34333) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__34403 = arguments.length;
switch (G__34403) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__34464 = arguments.length;
switch (G__34464) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__34489 = arguments.length;
switch (G__34489) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__34518 = arguments.length;
switch (G__34518) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__34574 = arguments.length;
switch (G__34574) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
}));
}catch (e34604){if((e34604 instanceof Object)){
var e = e34604;
return console.log("didnt support attachEvent",el,e);
} else {
throw e34604;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__34623 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__34624 = null;
var count__34625 = (0);
var i__34626 = (0);
while(true){
if((i__34626 < count__34625)){
var el = chunk__34624.cljs$core$IIndexed$_nth$arity$2(null, i__34626);
var handler_35791__$1 = ((function (seq__34623,chunk__34624,count__34625,i__34626,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__34623,chunk__34624,count__34625,i__34626,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_35791__$1);


var G__35793 = seq__34623;
var G__35794 = chunk__34624;
var G__35795 = count__34625;
var G__35796 = (i__34626 + (1));
seq__34623 = G__35793;
chunk__34624 = G__35794;
count__34625 = G__35795;
i__34626 = G__35796;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__34623);
if(temp__5823__auto__){
var seq__34623__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34623__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__34623__$1);
var G__35797 = cljs.core.chunk_rest(seq__34623__$1);
var G__35798 = c__5525__auto__;
var G__35799 = cljs.core.count(c__5525__auto__);
var G__35800 = (0);
seq__34623 = G__35797;
chunk__34624 = G__35798;
count__34625 = G__35799;
i__34626 = G__35800;
continue;
} else {
var el = cljs.core.first(seq__34623__$1);
var handler_35801__$1 = ((function (seq__34623,chunk__34624,count__34625,i__34626,el,seq__34623__$1,temp__5823__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__34623,chunk__34624,count__34625,i__34626,el,seq__34623__$1,temp__5823__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_35801__$1);


var G__35802 = cljs.core.next(seq__34623__$1);
var G__35803 = null;
var G__35804 = (0);
var G__35805 = (0);
seq__34623 = G__35802;
chunk__34624 = G__35803;
count__34625 = G__35804;
i__34626 = G__35805;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__34708 = arguments.length;
switch (G__34708) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__34774 = cljs.core.seq(events);
var chunk__34775 = null;
var count__34776 = (0);
var i__34777 = (0);
while(true){
if((i__34777 < count__34776)){
var vec__34809 = chunk__34775.cljs$core$IIndexed$_nth$arity$2(null, i__34777);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34809,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34809,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35813 = seq__34774;
var G__35814 = chunk__34775;
var G__35815 = count__34776;
var G__35816 = (i__34777 + (1));
seq__34774 = G__35813;
chunk__34775 = G__35814;
count__34776 = G__35815;
i__34777 = G__35816;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__34774);
if(temp__5823__auto__){
var seq__34774__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34774__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__34774__$1);
var G__35817 = cljs.core.chunk_rest(seq__34774__$1);
var G__35818 = c__5525__auto__;
var G__35819 = cljs.core.count(c__5525__auto__);
var G__35820 = (0);
seq__34774 = G__35817;
chunk__34775 = G__35818;
count__34776 = G__35819;
i__34777 = G__35820;
continue;
} else {
var vec__34828 = cljs.core.first(seq__34774__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34828,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34828,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35821 = cljs.core.next(seq__34774__$1);
var G__35822 = null;
var G__35823 = (0);
var G__35824 = (0);
seq__34774 = G__35821;
chunk__34775 = G__35822;
count__34776 = G__35823;
i__34777 = G__35824;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__34845 = cljs.core.seq(styles);
var chunk__34846 = null;
var count__34847 = (0);
var i__34848 = (0);
while(true){
if((i__34848 < count__34847)){
var vec__34879 = chunk__34846.cljs$core$IIndexed$_nth$arity$2(null, i__34848);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34879,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34879,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__35828 = seq__34845;
var G__35829 = chunk__34846;
var G__35830 = count__34847;
var G__35831 = (i__34848 + (1));
seq__34845 = G__35828;
chunk__34846 = G__35829;
count__34847 = G__35830;
i__34848 = G__35831;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__34845);
if(temp__5823__auto__){
var seq__34845__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34845__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__34845__$1);
var G__35832 = cljs.core.chunk_rest(seq__34845__$1);
var G__35833 = c__5525__auto__;
var G__35834 = cljs.core.count(c__5525__auto__);
var G__35835 = (0);
seq__34845 = G__35832;
chunk__34846 = G__35833;
count__34847 = G__35834;
i__34848 = G__35835;
continue;
} else {
var vec__34897 = cljs.core.first(seq__34845__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34897,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34897,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__35838 = cljs.core.next(seq__34845__$1);
var G__35839 = null;
var G__35840 = (0);
var G__35841 = (0);
seq__34845 = G__35838;
chunk__34846 = G__35839;
count__34847 = G__35840;
i__34848 = G__35841;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__34911_35846 = key;
var G__34911_35847__$1 = (((G__34911_35846 instanceof cljs.core.Keyword))?G__34911_35846.fqn:null);
switch (G__34911_35847__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_35868 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_35868,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_35868,"aria-");
}
})())){
el.setAttribute(ks_35868,value);
} else {
(el[ks_35868] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__34978){
var map__34979 = p__34978;
var map__34979__$1 = cljs.core.__destructure_map(map__34979);
var props = map__34979__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34979__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__34980 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34980,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34980,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34980,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__34992 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__34992,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__34992;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__34997 = arguments.length;
switch (G__34997) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5823__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5823__auto__)){
var n = temp__5823__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5823__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5823__auto__)){
var n = temp__5823__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__35008){
var vec__35009 = p__35008;
var seq__35010 = cljs.core.seq(vec__35009);
var first__35011 = cljs.core.first(seq__35010);
var seq__35010__$1 = cljs.core.next(seq__35010);
var nn = first__35011;
var first__35011__$1 = cljs.core.first(seq__35010__$1);
var seq__35010__$2 = cljs.core.next(seq__35010__$1);
var np = first__35011__$1;
var nc = seq__35010__$2;
var node = vec__35009;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35027 = nn;
var G__35028 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35027,G__35028) : create_fn.call(null, G__35027,G__35028));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null, nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35033 = nn;
var G__35034 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35033,G__35034) : create_fn.call(null, G__35033,G__35034));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__35040 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35040,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35040,(1),null);
var seq__35044_35887 = cljs.core.seq(node_children);
var chunk__35045_35888 = null;
var count__35046_35889 = (0);
var i__35047_35890 = (0);
while(true){
if((i__35047_35890 < count__35046_35889)){
var child_struct_35891 = chunk__35045_35888.cljs$core$IIndexed$_nth$arity$2(null, i__35047_35890);
var children_35892 = shadow.dom.dom_node(child_struct_35891);
if(cljs.core.seq_QMARK_(children_35892)){
var seq__35097_35893 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35892));
var chunk__35099_35894 = null;
var count__35100_35895 = (0);
var i__35101_35896 = (0);
while(true){
if((i__35101_35896 < count__35100_35895)){
var child_35897 = chunk__35099_35894.cljs$core$IIndexed$_nth$arity$2(null, i__35101_35896);
if(cljs.core.truth_(child_35897)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35897);


var G__35898 = seq__35097_35893;
var G__35899 = chunk__35099_35894;
var G__35900 = count__35100_35895;
var G__35901 = (i__35101_35896 + (1));
seq__35097_35893 = G__35898;
chunk__35099_35894 = G__35899;
count__35100_35895 = G__35900;
i__35101_35896 = G__35901;
continue;
} else {
var G__35902 = seq__35097_35893;
var G__35903 = chunk__35099_35894;
var G__35904 = count__35100_35895;
var G__35905 = (i__35101_35896 + (1));
seq__35097_35893 = G__35902;
chunk__35099_35894 = G__35903;
count__35100_35895 = G__35904;
i__35101_35896 = G__35905;
continue;
}
} else {
var temp__5823__auto___35907 = cljs.core.seq(seq__35097_35893);
if(temp__5823__auto___35907){
var seq__35097_35908__$1 = temp__5823__auto___35907;
if(cljs.core.chunked_seq_QMARK_(seq__35097_35908__$1)){
var c__5525__auto___35912 = cljs.core.chunk_first(seq__35097_35908__$1);
var G__35913 = cljs.core.chunk_rest(seq__35097_35908__$1);
var G__35914 = c__5525__auto___35912;
var G__35915 = cljs.core.count(c__5525__auto___35912);
var G__35916 = (0);
seq__35097_35893 = G__35913;
chunk__35099_35894 = G__35914;
count__35100_35895 = G__35915;
i__35101_35896 = G__35916;
continue;
} else {
var child_35918 = cljs.core.first(seq__35097_35908__$1);
if(cljs.core.truth_(child_35918)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35918);


var G__35919 = cljs.core.next(seq__35097_35908__$1);
var G__35920 = null;
var G__35921 = (0);
var G__35922 = (0);
seq__35097_35893 = G__35919;
chunk__35099_35894 = G__35920;
count__35100_35895 = G__35921;
i__35101_35896 = G__35922;
continue;
} else {
var G__35923 = cljs.core.next(seq__35097_35908__$1);
var G__35924 = null;
var G__35925 = (0);
var G__35926 = (0);
seq__35097_35893 = G__35923;
chunk__35099_35894 = G__35924;
count__35100_35895 = G__35925;
i__35101_35896 = G__35926;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35892);
}


var G__35927 = seq__35044_35887;
var G__35928 = chunk__35045_35888;
var G__35929 = count__35046_35889;
var G__35930 = (i__35047_35890 + (1));
seq__35044_35887 = G__35927;
chunk__35045_35888 = G__35928;
count__35046_35889 = G__35929;
i__35047_35890 = G__35930;
continue;
} else {
var temp__5823__auto___35931 = cljs.core.seq(seq__35044_35887);
if(temp__5823__auto___35931){
var seq__35044_35933__$1 = temp__5823__auto___35931;
if(cljs.core.chunked_seq_QMARK_(seq__35044_35933__$1)){
var c__5525__auto___35936 = cljs.core.chunk_first(seq__35044_35933__$1);
var G__35938 = cljs.core.chunk_rest(seq__35044_35933__$1);
var G__35939 = c__5525__auto___35936;
var G__35940 = cljs.core.count(c__5525__auto___35936);
var G__35941 = (0);
seq__35044_35887 = G__35938;
chunk__35045_35888 = G__35939;
count__35046_35889 = G__35940;
i__35047_35890 = G__35941;
continue;
} else {
var child_struct_35944 = cljs.core.first(seq__35044_35933__$1);
var children_35945 = shadow.dom.dom_node(child_struct_35944);
if(cljs.core.seq_QMARK_(children_35945)){
var seq__35117_35946 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35945));
var chunk__35119_35947 = null;
var count__35120_35948 = (0);
var i__35121_35949 = (0);
while(true){
if((i__35121_35949 < count__35120_35948)){
var child_35950 = chunk__35119_35947.cljs$core$IIndexed$_nth$arity$2(null, i__35121_35949);
if(cljs.core.truth_(child_35950)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35950);


var G__35951 = seq__35117_35946;
var G__35952 = chunk__35119_35947;
var G__35953 = count__35120_35948;
var G__35954 = (i__35121_35949 + (1));
seq__35117_35946 = G__35951;
chunk__35119_35947 = G__35952;
count__35120_35948 = G__35953;
i__35121_35949 = G__35954;
continue;
} else {
var G__35955 = seq__35117_35946;
var G__35956 = chunk__35119_35947;
var G__35957 = count__35120_35948;
var G__35958 = (i__35121_35949 + (1));
seq__35117_35946 = G__35955;
chunk__35119_35947 = G__35956;
count__35120_35948 = G__35957;
i__35121_35949 = G__35958;
continue;
}
} else {
var temp__5823__auto___35959__$1 = cljs.core.seq(seq__35117_35946);
if(temp__5823__auto___35959__$1){
var seq__35117_35960__$1 = temp__5823__auto___35959__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35117_35960__$1)){
var c__5525__auto___35961 = cljs.core.chunk_first(seq__35117_35960__$1);
var G__35962 = cljs.core.chunk_rest(seq__35117_35960__$1);
var G__35963 = c__5525__auto___35961;
var G__35964 = cljs.core.count(c__5525__auto___35961);
var G__35965 = (0);
seq__35117_35946 = G__35962;
chunk__35119_35947 = G__35963;
count__35120_35948 = G__35964;
i__35121_35949 = G__35965;
continue;
} else {
var child_35966 = cljs.core.first(seq__35117_35960__$1);
if(cljs.core.truth_(child_35966)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35966);


var G__35967 = cljs.core.next(seq__35117_35960__$1);
var G__35968 = null;
var G__35969 = (0);
var G__35970 = (0);
seq__35117_35946 = G__35967;
chunk__35119_35947 = G__35968;
count__35120_35948 = G__35969;
i__35121_35949 = G__35970;
continue;
} else {
var G__35971 = cljs.core.next(seq__35117_35960__$1);
var G__35972 = null;
var G__35973 = (0);
var G__35974 = (0);
seq__35117_35946 = G__35971;
chunk__35119_35947 = G__35972;
count__35120_35948 = G__35973;
i__35121_35949 = G__35974;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35945);
}


var G__35975 = cljs.core.next(seq__35044_35933__$1);
var G__35976 = null;
var G__35977 = (0);
var G__35978 = (0);
seq__35044_35887 = G__35975;
chunk__35045_35888 = G__35976;
count__35046_35889 = G__35977;
i__35047_35890 = G__35978;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__35175 = cljs.core.seq(node);
var chunk__35177 = null;
var count__35178 = (0);
var i__35179 = (0);
while(true){
if((i__35179 < count__35178)){
var n = chunk__35177.cljs$core$IIndexed$_nth$arity$2(null, i__35179);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__35991 = seq__35175;
var G__35992 = chunk__35177;
var G__35993 = count__35178;
var G__35994 = (i__35179 + (1));
seq__35175 = G__35991;
chunk__35177 = G__35992;
count__35178 = G__35993;
i__35179 = G__35994;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__35175);
if(temp__5823__auto__){
var seq__35175__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35175__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__35175__$1);
var G__35995 = cljs.core.chunk_rest(seq__35175__$1);
var G__35996 = c__5525__auto__;
var G__35997 = cljs.core.count(c__5525__auto__);
var G__35998 = (0);
seq__35175 = G__35995;
chunk__35177 = G__35996;
count__35178 = G__35997;
i__35179 = G__35998;
continue;
} else {
var n = cljs.core.first(seq__35175__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__36001 = cljs.core.next(seq__35175__$1);
var G__36002 = null;
var G__36003 = (0);
var G__36004 = (0);
seq__35175 = G__36001;
chunk__35177 = G__36002;
count__35178 = G__36003;
i__35179 = G__36004;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__35199 = arguments.length;
switch (G__35199) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__35203 = arguments.length;
switch (G__35203) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__35224 = arguments.length;
switch (G__35224) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5002__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5732__auto__ = [];
var len__5726__auto___36033 = arguments.length;
var i__5727__auto___36034 = (0);
while(true){
if((i__5727__auto___36034 < len__5726__auto___36033)){
args__5732__auto__.push((arguments[i__5727__auto___36034]));

var G__36035 = (i__5727__auto___36034 + (1));
i__5727__auto___36034 = G__36035;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__35255_36037 = cljs.core.seq(nodes);
var chunk__35256_36038 = null;
var count__35257_36039 = (0);
var i__35258_36040 = (0);
while(true){
if((i__35258_36040 < count__35257_36039)){
var node_36042 = chunk__35256_36038.cljs$core$IIndexed$_nth$arity$2(null, i__35258_36040);
fragment.appendChild(shadow.dom._to_dom(node_36042));


var G__36045 = seq__35255_36037;
var G__36046 = chunk__35256_36038;
var G__36047 = count__35257_36039;
var G__36048 = (i__35258_36040 + (1));
seq__35255_36037 = G__36045;
chunk__35256_36038 = G__36046;
count__35257_36039 = G__36047;
i__35258_36040 = G__36048;
continue;
} else {
var temp__5823__auto___36049 = cljs.core.seq(seq__35255_36037);
if(temp__5823__auto___36049){
var seq__35255_36052__$1 = temp__5823__auto___36049;
if(cljs.core.chunked_seq_QMARK_(seq__35255_36052__$1)){
var c__5525__auto___36054 = cljs.core.chunk_first(seq__35255_36052__$1);
var G__36055 = cljs.core.chunk_rest(seq__35255_36052__$1);
var G__36056 = c__5525__auto___36054;
var G__36057 = cljs.core.count(c__5525__auto___36054);
var G__36058 = (0);
seq__35255_36037 = G__36055;
chunk__35256_36038 = G__36056;
count__35257_36039 = G__36057;
i__35258_36040 = G__36058;
continue;
} else {
var node_36059 = cljs.core.first(seq__35255_36052__$1);
fragment.appendChild(shadow.dom._to_dom(node_36059));


var G__36060 = cljs.core.next(seq__35255_36052__$1);
var G__36061 = null;
var G__36062 = (0);
var G__36063 = (0);
seq__35255_36037 = G__36060;
chunk__35256_36038 = G__36061;
count__35257_36039 = G__36062;
i__35258_36040 = G__36063;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq35246){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35246));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__35272_36065 = cljs.core.seq(scripts);
var chunk__35273_36066 = null;
var count__35274_36067 = (0);
var i__35275_36068 = (0);
while(true){
if((i__35275_36068 < count__35274_36067)){
var vec__35286_36071 = chunk__35273_36066.cljs$core$IIndexed$_nth$arity$2(null, i__35275_36068);
var script_tag_36072 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35286_36071,(0),null);
var script_body_36073 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35286_36071,(1),null);
eval(script_body_36073);


var G__36076 = seq__35272_36065;
var G__36077 = chunk__35273_36066;
var G__36078 = count__35274_36067;
var G__36079 = (i__35275_36068 + (1));
seq__35272_36065 = G__36076;
chunk__35273_36066 = G__36077;
count__35274_36067 = G__36078;
i__35275_36068 = G__36079;
continue;
} else {
var temp__5823__auto___36080 = cljs.core.seq(seq__35272_36065);
if(temp__5823__auto___36080){
var seq__35272_36081__$1 = temp__5823__auto___36080;
if(cljs.core.chunked_seq_QMARK_(seq__35272_36081__$1)){
var c__5525__auto___36084 = cljs.core.chunk_first(seq__35272_36081__$1);
var G__36085 = cljs.core.chunk_rest(seq__35272_36081__$1);
var G__36086 = c__5525__auto___36084;
var G__36087 = cljs.core.count(c__5525__auto___36084);
var G__36088 = (0);
seq__35272_36065 = G__36085;
chunk__35273_36066 = G__36086;
count__35274_36067 = G__36087;
i__35275_36068 = G__36088;
continue;
} else {
var vec__35295_36089 = cljs.core.first(seq__35272_36081__$1);
var script_tag_36090 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35295_36089,(0),null);
var script_body_36091 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35295_36089,(1),null);
eval(script_body_36091);


var G__36093 = cljs.core.next(seq__35272_36081__$1);
var G__36094 = null;
var G__36095 = (0);
var G__36096 = (0);
seq__35272_36065 = G__36093;
chunk__35273_36066 = G__36094;
count__35274_36067 = G__36095;
i__35275_36068 = G__36096;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__35301){
var vec__35303 = p__35301;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35303,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35303,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__35319 = arguments.length;
switch (G__35319) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__35345 = cljs.core.seq(style_keys);
var chunk__35346 = null;
var count__35347 = (0);
var i__35348 = (0);
while(true){
if((i__35348 < count__35347)){
var it = chunk__35346.cljs$core$IIndexed$_nth$arity$2(null, i__35348);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36116 = seq__35345;
var G__36117 = chunk__35346;
var G__36118 = count__35347;
var G__36119 = (i__35348 + (1));
seq__35345 = G__36116;
chunk__35346 = G__36117;
count__35347 = G__36118;
i__35348 = G__36119;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__35345);
if(temp__5823__auto__){
var seq__35345__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35345__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__35345__$1);
var G__36121 = cljs.core.chunk_rest(seq__35345__$1);
var G__36122 = c__5525__auto__;
var G__36123 = cljs.core.count(c__5525__auto__);
var G__36124 = (0);
seq__35345 = G__36121;
chunk__35346 = G__36122;
count__35347 = G__36123;
i__35348 = G__36124;
continue;
} else {
var it = cljs.core.first(seq__35345__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36131 = cljs.core.next(seq__35345__$1);
var G__36132 = null;
var G__36133 = (0);
var G__36134 = (0);
seq__35345 = G__36131;
chunk__35346 = G__36132;
count__35347 = G__36133;
i__35348 = G__36134;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k35351,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__35370 = k35351;
var G__35370__$1 = (((G__35370 instanceof cljs.core.Keyword))?G__35370.fqn:null);
switch (G__35370__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35351,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__35374){
var vec__35375 = p__35374;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35375,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35375,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35350){
var self__ = this;
var G__35350__$1 = this;
return (new cljs.core.RecordIter((0),G__35350__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35352,other35353){
var self__ = this;
var this35352__$1 = this;
return (((!((other35353 == null)))) && ((((this35352__$1.constructor === other35353.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35352__$1.x,other35353.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35352__$1.y,other35353.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35352__$1.__extmap,other35353.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k35351){
var self__ = this;
var this__5307__auto____$1 = this;
var G__35399 = k35351;
var G__35399__$1 = (((G__35399 instanceof cljs.core.Keyword))?G__35399.fqn:null);
switch (G__35399__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k35351);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__35350){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__35401 = cljs.core.keyword_identical_QMARK_;
var expr__35402 = k__5309__auto__;
if(cljs.core.truth_((pred__35401.cljs$core$IFn$_invoke$arity$2 ? pred__35401.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__35402) : pred__35401.call(null, new cljs.core.Keyword(null,"x","x",2099068185),expr__35402)))){
return (new shadow.dom.Coordinate(G__35350,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35401.cljs$core$IFn$_invoke$arity$2 ? pred__35401.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__35402) : pred__35401.call(null, new cljs.core.Keyword(null,"y","y",-1757859776),expr__35402)))){
return (new shadow.dom.Coordinate(self__.x,G__35350,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__35350),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__35350){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__35350,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__35358){
var extmap__5342__auto__ = (function (){var G__35426 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35358,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__35358)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35426);
} else {
return G__35426;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__35358),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__35358),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k35445,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__35462 = k35445;
var G__35462__$1 = (((G__35462 instanceof cljs.core.Keyword))?G__35462.fqn:null);
switch (G__35462__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35445,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__35469){
var vec__35471 = p__35469;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35471,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35471,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Size{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35444){
var self__ = this;
var G__35444__$1 = this;
return (new cljs.core.RecordIter((0),G__35444__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35446,other35447){
var self__ = this;
var this35446__$1 = this;
return (((!((other35447 == null)))) && ((((this35446__$1.constructor === other35447.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35446__$1.w,other35447.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35446__$1.h,other35447.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35446__$1.__extmap,other35447.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k35445){
var self__ = this;
var this__5307__auto____$1 = this;
var G__35511 = k35445;
var G__35511__$1 = (((G__35511 instanceof cljs.core.Keyword))?G__35511.fqn:null);
switch (G__35511__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k35445);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__35444){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__35518 = cljs.core.keyword_identical_QMARK_;
var expr__35519 = k__5309__auto__;
if(cljs.core.truth_((pred__35518.cljs$core$IFn$_invoke$arity$2 ? pred__35518.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__35519) : pred__35518.call(null, new cljs.core.Keyword(null,"w","w",354169001),expr__35519)))){
return (new shadow.dom.Size(G__35444,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35518.cljs$core$IFn$_invoke$arity$2 ? pred__35518.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__35519) : pred__35518.call(null, new cljs.core.Keyword(null,"h","h",1109658740),expr__35519)))){
return (new shadow.dom.Size(self__.w,G__35444,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__35444),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__35444){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__35444,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__35450){
var extmap__5342__auto__ = (function (){var G__35539 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35450,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__35450)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35539);
} else {
return G__35539;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__35450),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__35450),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5590__auto__ = opts;
var l__5591__auto__ = a__5590__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5591__auto__)){
var G__36269 = (i + (1));
var G__36270 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__36269;
ret = G__36270;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35559){
var vec__35560 = p__35559;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35560,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35560,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__35564 = arguments.length;
switch (G__35564) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5821__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5821__auto__)){
var child = temp__5821__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__36280 = ps;
var G__36281 = (i + (1));
el__$1 = G__36280;
i = G__36281;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null, parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__35585 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35585,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35585,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35585,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__35589_36290 = cljs.core.seq(props);
var chunk__35590_36291 = null;
var count__35591_36292 = (0);
var i__35592_36293 = (0);
while(true){
if((i__35592_36293 < count__35591_36292)){
var vec__35611_36294 = chunk__35590_36291.cljs$core$IIndexed$_nth$arity$2(null, i__35592_36293);
var k_36295 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35611_36294,(0),null);
var v_36296 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35611_36294,(1),null);
el.setAttributeNS((function (){var temp__5823__auto__ = cljs.core.namespace(k_36295);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36295),v_36296);


var G__36300 = seq__35589_36290;
var G__36301 = chunk__35590_36291;
var G__36302 = count__35591_36292;
var G__36303 = (i__35592_36293 + (1));
seq__35589_36290 = G__36300;
chunk__35590_36291 = G__36301;
count__35591_36292 = G__36302;
i__35592_36293 = G__36303;
continue;
} else {
var temp__5823__auto___36304 = cljs.core.seq(seq__35589_36290);
if(temp__5823__auto___36304){
var seq__35589_36305__$1 = temp__5823__auto___36304;
if(cljs.core.chunked_seq_QMARK_(seq__35589_36305__$1)){
var c__5525__auto___36306 = cljs.core.chunk_first(seq__35589_36305__$1);
var G__36307 = cljs.core.chunk_rest(seq__35589_36305__$1);
var G__36308 = c__5525__auto___36306;
var G__36309 = cljs.core.count(c__5525__auto___36306);
var G__36310 = (0);
seq__35589_36290 = G__36307;
chunk__35590_36291 = G__36308;
count__35591_36292 = G__36309;
i__35592_36293 = G__36310;
continue;
} else {
var vec__35616_36311 = cljs.core.first(seq__35589_36305__$1);
var k_36312 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35616_36311,(0),null);
var v_36313 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35616_36311,(1),null);
el.setAttributeNS((function (){var temp__5823__auto____$1 = cljs.core.namespace(k_36312);
if(cljs.core.truth_(temp__5823__auto____$1)){
var ns = temp__5823__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36312),v_36313);


var G__36314 = cljs.core.next(seq__35589_36305__$1);
var G__36315 = null;
var G__36316 = (0);
var G__36317 = (0);
seq__35589_36290 = G__36314;
chunk__35590_36291 = G__36315;
count__35591_36292 = G__36316;
i__35592_36293 = G__36317;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null, );
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__35623 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35623,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35623,(1),null);
var seq__35626_36326 = cljs.core.seq(node_children);
var chunk__35628_36327 = null;
var count__35629_36328 = (0);
var i__35630_36329 = (0);
while(true){
if((i__35630_36329 < count__35629_36328)){
var child_struct_36330 = chunk__35628_36327.cljs$core$IIndexed$_nth$arity$2(null, i__35630_36329);
if((!((child_struct_36330 == null)))){
if(typeof child_struct_36330 === 'string'){
var text_36331 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36331),child_struct_36330].join(''));
} else {
var children_36332 = shadow.dom.svg_node(child_struct_36330);
if(cljs.core.seq_QMARK_(children_36332)){
var seq__35660_36333 = cljs.core.seq(children_36332);
var chunk__35662_36334 = null;
var count__35663_36335 = (0);
var i__35664_36336 = (0);
while(true){
if((i__35664_36336 < count__35663_36335)){
var child_36337 = chunk__35662_36334.cljs$core$IIndexed$_nth$arity$2(null, i__35664_36336);
if(cljs.core.truth_(child_36337)){
node.appendChild(child_36337);


var G__36338 = seq__35660_36333;
var G__36339 = chunk__35662_36334;
var G__36340 = count__35663_36335;
var G__36341 = (i__35664_36336 + (1));
seq__35660_36333 = G__36338;
chunk__35662_36334 = G__36339;
count__35663_36335 = G__36340;
i__35664_36336 = G__36341;
continue;
} else {
var G__36342 = seq__35660_36333;
var G__36343 = chunk__35662_36334;
var G__36344 = count__35663_36335;
var G__36345 = (i__35664_36336 + (1));
seq__35660_36333 = G__36342;
chunk__35662_36334 = G__36343;
count__35663_36335 = G__36344;
i__35664_36336 = G__36345;
continue;
}
} else {
var temp__5823__auto___36346 = cljs.core.seq(seq__35660_36333);
if(temp__5823__auto___36346){
var seq__35660_36347__$1 = temp__5823__auto___36346;
if(cljs.core.chunked_seq_QMARK_(seq__35660_36347__$1)){
var c__5525__auto___36348 = cljs.core.chunk_first(seq__35660_36347__$1);
var G__36350 = cljs.core.chunk_rest(seq__35660_36347__$1);
var G__36351 = c__5525__auto___36348;
var G__36352 = cljs.core.count(c__5525__auto___36348);
var G__36353 = (0);
seq__35660_36333 = G__36350;
chunk__35662_36334 = G__36351;
count__35663_36335 = G__36352;
i__35664_36336 = G__36353;
continue;
} else {
var child_36356 = cljs.core.first(seq__35660_36347__$1);
if(cljs.core.truth_(child_36356)){
node.appendChild(child_36356);


var G__36357 = cljs.core.next(seq__35660_36347__$1);
var G__36358 = null;
var G__36359 = (0);
var G__36360 = (0);
seq__35660_36333 = G__36357;
chunk__35662_36334 = G__36358;
count__35663_36335 = G__36359;
i__35664_36336 = G__36360;
continue;
} else {
var G__36361 = cljs.core.next(seq__35660_36347__$1);
var G__36362 = null;
var G__36363 = (0);
var G__36364 = (0);
seq__35660_36333 = G__36361;
chunk__35662_36334 = G__36362;
count__35663_36335 = G__36363;
i__35664_36336 = G__36364;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36332);
}
}


var G__36365 = seq__35626_36326;
var G__36366 = chunk__35628_36327;
var G__36367 = count__35629_36328;
var G__36368 = (i__35630_36329 + (1));
seq__35626_36326 = G__36365;
chunk__35628_36327 = G__36366;
count__35629_36328 = G__36367;
i__35630_36329 = G__36368;
continue;
} else {
var G__36369 = seq__35626_36326;
var G__36370 = chunk__35628_36327;
var G__36371 = count__35629_36328;
var G__36372 = (i__35630_36329 + (1));
seq__35626_36326 = G__36369;
chunk__35628_36327 = G__36370;
count__35629_36328 = G__36371;
i__35630_36329 = G__36372;
continue;
}
} else {
var temp__5823__auto___36375 = cljs.core.seq(seq__35626_36326);
if(temp__5823__auto___36375){
var seq__35626_36376__$1 = temp__5823__auto___36375;
if(cljs.core.chunked_seq_QMARK_(seq__35626_36376__$1)){
var c__5525__auto___36377 = cljs.core.chunk_first(seq__35626_36376__$1);
var G__36378 = cljs.core.chunk_rest(seq__35626_36376__$1);
var G__36379 = c__5525__auto___36377;
var G__36380 = cljs.core.count(c__5525__auto___36377);
var G__36381 = (0);
seq__35626_36326 = G__36378;
chunk__35628_36327 = G__36379;
count__35629_36328 = G__36380;
i__35630_36329 = G__36381;
continue;
} else {
var child_struct_36382 = cljs.core.first(seq__35626_36376__$1);
if((!((child_struct_36382 == null)))){
if(typeof child_struct_36382 === 'string'){
var text_36383 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36383),child_struct_36382].join(''));
} else {
var children_36384 = shadow.dom.svg_node(child_struct_36382);
if(cljs.core.seq_QMARK_(children_36384)){
var seq__35668_36385 = cljs.core.seq(children_36384);
var chunk__35670_36386 = null;
var count__35671_36387 = (0);
var i__35672_36388 = (0);
while(true){
if((i__35672_36388 < count__35671_36387)){
var child_36389 = chunk__35670_36386.cljs$core$IIndexed$_nth$arity$2(null, i__35672_36388);
if(cljs.core.truth_(child_36389)){
node.appendChild(child_36389);


var G__36390 = seq__35668_36385;
var G__36391 = chunk__35670_36386;
var G__36392 = count__35671_36387;
var G__36393 = (i__35672_36388 + (1));
seq__35668_36385 = G__36390;
chunk__35670_36386 = G__36391;
count__35671_36387 = G__36392;
i__35672_36388 = G__36393;
continue;
} else {
var G__36394 = seq__35668_36385;
var G__36395 = chunk__35670_36386;
var G__36396 = count__35671_36387;
var G__36397 = (i__35672_36388 + (1));
seq__35668_36385 = G__36394;
chunk__35670_36386 = G__36395;
count__35671_36387 = G__36396;
i__35672_36388 = G__36397;
continue;
}
} else {
var temp__5823__auto___36398__$1 = cljs.core.seq(seq__35668_36385);
if(temp__5823__auto___36398__$1){
var seq__35668_36399__$1 = temp__5823__auto___36398__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35668_36399__$1)){
var c__5525__auto___36400 = cljs.core.chunk_first(seq__35668_36399__$1);
var G__36401 = cljs.core.chunk_rest(seq__35668_36399__$1);
var G__36402 = c__5525__auto___36400;
var G__36403 = cljs.core.count(c__5525__auto___36400);
var G__36404 = (0);
seq__35668_36385 = G__36401;
chunk__35670_36386 = G__36402;
count__35671_36387 = G__36403;
i__35672_36388 = G__36404;
continue;
} else {
var child_36405 = cljs.core.first(seq__35668_36399__$1);
if(cljs.core.truth_(child_36405)){
node.appendChild(child_36405);


var G__36406 = cljs.core.next(seq__35668_36399__$1);
var G__36407 = null;
var G__36408 = (0);
var G__36409 = (0);
seq__35668_36385 = G__36406;
chunk__35670_36386 = G__36407;
count__35671_36387 = G__36408;
i__35672_36388 = G__36409;
continue;
} else {
var G__36410 = cljs.core.next(seq__35668_36399__$1);
var G__36411 = null;
var G__36412 = (0);
var G__36413 = (0);
seq__35668_36385 = G__36410;
chunk__35670_36386 = G__36411;
count__35671_36387 = G__36412;
i__35672_36388 = G__36413;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36384);
}
}


var G__36414 = cljs.core.next(seq__35626_36376__$1);
var G__36415 = null;
var G__36416 = (0);
var G__36417 = (0);
seq__35626_36326 = G__36414;
chunk__35628_36327 = G__36415;
count__35629_36328 = G__36416;
i__35630_36329 = G__36417;
continue;
} else {
var G__36418 = cljs.core.next(seq__35626_36376__$1);
var G__36419 = null;
var G__36420 = (0);
var G__36421 = (0);
seq__35626_36326 = G__36418;
chunk__35628_36327 = G__36419;
count__35629_36328 = G__36420;
i__35630_36329 = G__36421;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___36424 = arguments.length;
var i__5727__auto___36425 = (0);
while(true){
if((i__5727__auto___36425 < len__5726__auto___36424)){
args__5732__auto__.push((arguments[i__5727__auto___36425]));

var G__36426 = (i__5727__auto___36425 + (1));
i__5727__auto___36425 = G__36426;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq35690){
var G__35691 = cljs.core.first(seq35690);
var seq35690__$1 = cljs.core.next(seq35690);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35691,seq35690__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__35696 = arguments.length;
switch (G__35696) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5000__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5000__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5000__auto__;
}
})())){
var c__30503__auto___36432 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30504__auto__ = (function (){var switch__29560__auto__ = (function (state_35709){
var state_val_35710 = (state_35709[(1)]);
if((state_val_35710 === (1))){
var state_35709__$1 = state_35709;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35709__$1,(2),once_or_cleanup);
} else {
if((state_val_35710 === (2))){
var inst_35706 = (state_35709[(2)]);
var inst_35707 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_35709__$1 = (function (){var statearr_35712 = state_35709;
(statearr_35712[(7)] = inst_35706);

return statearr_35712;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35709__$1,inst_35707);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__29561__auto__ = null;
var shadow$dom$state_machine__29561__auto____0 = (function (){
var statearr_35714 = [null,null,null,null,null,null,null,null];
(statearr_35714[(0)] = shadow$dom$state_machine__29561__auto__);

(statearr_35714[(1)] = (1));

return statearr_35714;
});
var shadow$dom$state_machine__29561__auto____1 = (function (state_35709){
while(true){
var ret_value__29562__auto__ = (function (){try{while(true){
var result__29563__auto__ = switch__29560__auto__(state_35709);
if(cljs.core.keyword_identical_QMARK_(result__29563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29563__auto__;
}
break;
}
}catch (e35716){var ex__29565__auto__ = e35716;
var statearr_35717_36436 = state_35709;
(statearr_35717_36436[(2)] = ex__29565__auto__);


if(cljs.core.seq((state_35709[(4)]))){
var statearr_35718_36437 = state_35709;
(statearr_35718_36437[(1)] = cljs.core.first((state_35709[(4)])));

} else {
throw ex__29565__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36438 = state_35709;
state_35709 = G__36438;
continue;
} else {
return ret_value__29562__auto__;
}
break;
}
});
shadow$dom$state_machine__29561__auto__ = function(state_35709){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__29561__auto____0.call(this);
case 1:
return shadow$dom$state_machine__29561__auto____1.call(this,state_35709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__29561__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__29561__auto____0;
shadow$dom$state_machine__29561__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__29561__auto____1;
return shadow$dom$state_machine__29561__auto__;
})()
})();
var state__30505__auto__ = (function (){var statearr_35719 = f__30504__auto__();
(statearr_35719[(6)] = c__30503__auto___36432);

return statearr_35719;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30505__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
