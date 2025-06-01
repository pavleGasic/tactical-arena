goog.provide('ajax.xml_http_request');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__28000 = e.target.readyState;
var fexpr__27999 = new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null);
return (fexpr__27999.cljs$core$IFn$_invoke$arity$1 ? fexpr__27999.cljs$core$IFn$_invoke$arity$1(G__28000) : fexpr__27999.call(null, G__28000));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = (((typeof goog !== 'undefined') && (typeof goog.global !== 'undefined') && (typeof goog.global.XMLHttpRequest !== 'undefined'))?goog.global.XMLHttpRequest:(((typeof require !== 'undefined'))?(function (){var req = require;
return (req.cljs$core$IFn$_invoke$arity$1 ? req.cljs$core$IFn$_invoke$arity$1("xmlhttprequest") : req.call(null, "xmlhttprequest")).XMLHttpRequest;
})():null));
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__28012,handler){
var map__28013 = p__28012;
var map__28013__$1 = cljs.core.__destructure_map(map__28013);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28013__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28013__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28013__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28013__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28013__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28013__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28013__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__28010_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__28010_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null, this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5823__auto___28054 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5823__auto___28054)){
var response_type_28055 = temp__5823__auto___28054;
(this$__$1.responseType = cljs.core.name(response_type_28055));
} else {
}

var seq__28019_28056 = cljs.core.seq(headers);
var chunk__28020_28057 = null;
var count__28021_28058 = (0);
var i__28022_28059 = (0);
while(true){
if((i__28022_28059 < count__28021_28058)){
var vec__28040_28060 = chunk__28020_28057.cljs$core$IIndexed$_nth$arity$2(null, i__28022_28059);
var k_28061 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28040_28060,(0),null);
var v_28062 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28040_28060,(1),null);
this$__$1.setRequestHeader(k_28061,v_28062);


var G__28065 = seq__28019_28056;
var G__28066 = chunk__28020_28057;
var G__28067 = count__28021_28058;
var G__28068 = (i__28022_28059 + (1));
seq__28019_28056 = G__28065;
chunk__28020_28057 = G__28066;
count__28021_28058 = G__28067;
i__28022_28059 = G__28068;
continue;
} else {
var temp__5823__auto___28069 = cljs.core.seq(seq__28019_28056);
if(temp__5823__auto___28069){
var seq__28019_28070__$1 = temp__5823__auto___28069;
if(cljs.core.chunked_seq_QMARK_(seq__28019_28070__$1)){
var c__5525__auto___28071 = cljs.core.chunk_first(seq__28019_28070__$1);
var G__28072 = cljs.core.chunk_rest(seq__28019_28070__$1);
var G__28073 = c__5525__auto___28071;
var G__28074 = cljs.core.count(c__5525__auto___28071);
var G__28075 = (0);
seq__28019_28056 = G__28072;
chunk__28020_28057 = G__28073;
count__28021_28058 = G__28074;
i__28022_28059 = G__28075;
continue;
} else {
var vec__28044_28076 = cljs.core.first(seq__28019_28070__$1);
var k_28077 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28044_28076,(0),null);
var v_28078 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28044_28076,(1),null);
this$__$1.setRequestHeader(k_28077,v_28078);


var G__28079 = cljs.core.next(seq__28019_28070__$1);
var G__28080 = null;
var G__28081 = (0);
var G__28082 = (0);
seq__28019_28056 = G__28079;
chunk__28020_28057 = G__28080;
count__28021_28058 = G__28081;
i__28022_28059 = G__28082;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__5002__auto__ = body;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
}));

//# sourceMappingURL=ajax.xml_http_request.js.map
