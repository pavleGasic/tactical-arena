goog.provide('app.frontend.ui.components.text_components');
app.frontend.ui.components.text_components.animated_text = (function app$frontend$ui$components$text_components$animated_text(text){
var with_let28164 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let28164","with-let28164",2023041994));
var temp__5827__auto___28173 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5827__auto___28173 == null)){
} else {
var c__27932__auto___28174 = temp__5827__auto___28173;
if((with_let28164.generation === c__27932__auto___28174.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let28164.generation = c__27932__auto___28174.ratomGeneration);
}

var init28165 = (with_let28164.length === (0));
var displayed_text = ((((init28165) || (cljs.core.not(with_let28164.hasOwnProperty((0))))))?(with_let28164[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("")):(with_let28164[(0)]));
var res28166 = (function (){
setInterval((function (){
var current_length = cljs.core.count(cljs.core.deref(displayed_text));
if((current_length < cljs.core.count(text))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(displayed_text,cljs.core.str,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(text,current_length));
} else {
return null;
}
}),(200));

return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"42px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"'Press Start 2P', cursive",new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null)], null),cljs.core.deref(displayed_text)], null);
});
})()
;
return res28166;
});

//# sourceMappingURL=app.frontend.ui.components.text_components.js.map
