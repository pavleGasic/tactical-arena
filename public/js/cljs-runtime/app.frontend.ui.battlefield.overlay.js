goog.provide('app.frontend.ui.battlefield.overlay');
app.frontend.ui.battlefield.overlay.on_placeholder_click = (function app$frontend$ui$battlefield$overlay$on_placeholder_click(dx,dy){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.frontend.ui.battlefield.state.characters,(function (cs){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (c){
console.log(cljs.core.clj__GT_js(new cljs.core.Keyword(null,"selected?","selected?",-742502788).cljs$core$IFn$_invoke$arity$1(c)));

if(cljs.core.truth_(new cljs.core.Keyword(null,"selected?","selected?",-742502788).cljs$core$IFn$_invoke$arity$1(c))){
console.log(cljs.core.clj__GT_js(new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(c)));

var sprite_40586 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(c);
app.frontend.ui.battlefield.characters.animate_move_BANG_(sprite_40586,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(c),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(c),dx,dy);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(c,new cljs.core.Keyword(null,"x","x",2099068185),dx,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776),dy,new cljs.core.Keyword(null,"selected?","selected?",-742502788),false], 0));
} else {
return c;
}
}),cs);
}));
});
app.frontend.ui.battlefield.overlay.clear_overlay_BANG_ = (function app$frontend$ui$battlefield$overlay$clear_overlay_BANG_(map_container){
var seq__40485_40587 = cljs.core.seq(cljs.core.deref(app.frontend.ui.battlefield.state.overlay_placeholders));
var chunk__40486_40588 = null;
var count__40487_40589 = (0);
var i__40488_40590 = (0);
while(true){
if((i__40488_40590 < count__40487_40589)){
var s_40591 = chunk__40486_40588.cljs$core$IIndexed$_nth$arity$2(null, i__40488_40590);
map_container.removeChild(s_40591);


var G__40592 = seq__40485_40587;
var G__40593 = chunk__40486_40588;
var G__40594 = count__40487_40589;
var G__40595 = (i__40488_40590 + (1));
seq__40485_40587 = G__40592;
chunk__40486_40588 = G__40593;
count__40487_40589 = G__40594;
i__40488_40590 = G__40595;
continue;
} else {
var temp__5823__auto___40596 = cljs.core.seq(seq__40485_40587);
if(temp__5823__auto___40596){
var seq__40485_40597__$1 = temp__5823__auto___40596;
if(cljs.core.chunked_seq_QMARK_(seq__40485_40597__$1)){
var c__5525__auto___40598 = cljs.core.chunk_first(seq__40485_40597__$1);
var G__40599 = cljs.core.chunk_rest(seq__40485_40597__$1);
var G__40600 = c__5525__auto___40598;
var G__40601 = cljs.core.count(c__5525__auto___40598);
var G__40602 = (0);
seq__40485_40587 = G__40599;
chunk__40486_40588 = G__40600;
count__40487_40589 = G__40601;
i__40488_40590 = G__40602;
continue;
} else {
var s_40603 = cljs.core.first(seq__40485_40597__$1);
map_container.removeChild(s_40603);


var G__40604 = cljs.core.next(seq__40485_40597__$1);
var G__40605 = null;
var G__40606 = (0);
var G__40607 = (0);
seq__40485_40587 = G__40604;
chunk__40486_40588 = G__40605;
count__40487_40589 = G__40606;
i__40488_40590 = G__40607;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(app.frontend.ui.battlefield.state.overlay_placeholders,cljs.core.PersistentVector.EMPTY);
});
app.frontend.ui.battlefield.overlay.display_move_overlay = (function app$frontend$ui$battlefield$overlay$display_move_overlay(map_container,character,texture){
var radius = app.frontend.ui.battlefield.config.move_overlay_radius;
var map__40491 = character;
var map__40491__$1 = cljs.core.__destructure_map(map__40491);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40491__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40491__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var seq__40492 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((x - radius),((x + radius) + (1))));
var chunk__40499 = null;
var count__40500 = (0);
var i__40501 = (0);
while(true){
if((i__40501 < count__40500)){
var dx = chunk__40499.cljs$core$IIndexed$_nth$arity$2(null, i__40501);
var seq__40502_40608 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((y - radius),((y + radius) + (1))));
var chunk__40504_40609 = null;
var count__40505_40610 = (0);
var i__40506_40611 = (0);
while(true){
if((i__40506_40611 < count__40505_40610)){
var dy_40612 = chunk__40504_40609.cljs$core$IIndexed$_nth$arity$2(null, i__40506_40611);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dx,dy_40612], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))){
var sprite_40613 = app.frontend.ui.battlefield.sprites.create_map_tile_sprite(texture,(0),dx,dy_40612);
(sprite_40613.alpha = 0.6);

(sprite_40613.eventMode = "dynamic");

(sprite_40613.buttonMode = true);

sprite_40613.on("pointerdown",((function (seq__40502_40608,chunk__40504_40609,count__40505_40610,i__40506_40611,seq__40492,chunk__40499,count__40500,i__40501,sprite_40613,dy_40612,dx,radius,map__40491,map__40491__$1,x,y){
return (function (_){
app.frontend.ui.battlefield.overlay.on_placeholder_click(dx,dy_40612);

return app.frontend.ui.battlefield.overlay.clear_overlay_BANG_(map_container);
});})(seq__40502_40608,chunk__40504_40609,count__40505_40610,i__40506_40611,seq__40492,chunk__40499,count__40500,i__40501,sprite_40613,dy_40612,dx,radius,map__40491,map__40491__$1,x,y))
);

map_container.addChild(sprite_40613);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(app.frontend.ui.battlefield.state.overlay_placeholders,cljs.core.conj,sprite_40613);


var G__40614 = seq__40502_40608;
var G__40615 = chunk__40504_40609;
var G__40616 = count__40505_40610;
var G__40617 = (i__40506_40611 + (1));
seq__40502_40608 = G__40614;
chunk__40504_40609 = G__40615;
count__40505_40610 = G__40616;
i__40506_40611 = G__40617;
continue;
} else {
var G__40618 = seq__40502_40608;
var G__40619 = chunk__40504_40609;
var G__40620 = count__40505_40610;
var G__40621 = (i__40506_40611 + (1));
seq__40502_40608 = G__40618;
chunk__40504_40609 = G__40619;
count__40505_40610 = G__40620;
i__40506_40611 = G__40621;
continue;
}
} else {
var temp__5823__auto___40622 = cljs.core.seq(seq__40502_40608);
if(temp__5823__auto___40622){
var seq__40502_40623__$1 = temp__5823__auto___40622;
if(cljs.core.chunked_seq_QMARK_(seq__40502_40623__$1)){
var c__5525__auto___40624 = cljs.core.chunk_first(seq__40502_40623__$1);
var G__40625 = cljs.core.chunk_rest(seq__40502_40623__$1);
var G__40626 = c__5525__auto___40624;
var G__40627 = cljs.core.count(c__5525__auto___40624);
var G__40628 = (0);
seq__40502_40608 = G__40625;
chunk__40504_40609 = G__40626;
count__40505_40610 = G__40627;
i__40506_40611 = G__40628;
continue;
} else {
var dy_40629 = cljs.core.first(seq__40502_40623__$1);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dx,dy_40629], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))){
var sprite_40630 = app.frontend.ui.battlefield.sprites.create_map_tile_sprite(texture,(0),dx,dy_40629);
(sprite_40630.alpha = 0.6);

(sprite_40630.eventMode = "dynamic");

(sprite_40630.buttonMode = true);

sprite_40630.on("pointerdown",((function (seq__40502_40608,chunk__40504_40609,count__40505_40610,i__40506_40611,seq__40492,chunk__40499,count__40500,i__40501,sprite_40630,dy_40629,seq__40502_40623__$1,temp__5823__auto___40622,dx,radius,map__40491,map__40491__$1,x,y){
return (function (_){
app.frontend.ui.battlefield.overlay.on_placeholder_click(dx,dy_40629);

return app.frontend.ui.battlefield.overlay.clear_overlay_BANG_(map_container);
});})(seq__40502_40608,chunk__40504_40609,count__40505_40610,i__40506_40611,seq__40492,chunk__40499,count__40500,i__40501,sprite_40630,dy_40629,seq__40502_40623__$1,temp__5823__auto___40622,dx,radius,map__40491,map__40491__$1,x,y))
);

map_container.addChild(sprite_40630);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(app.frontend.ui.battlefield.state.overlay_placeholders,cljs.core.conj,sprite_40630);


var G__40631 = cljs.core.next(seq__40502_40623__$1);
var G__40632 = null;
var G__40633 = (0);
var G__40634 = (0);
seq__40502_40608 = G__40631;
chunk__40504_40609 = G__40632;
count__40505_40610 = G__40633;
i__40506_40611 = G__40634;
continue;
} else {
var G__40635 = cljs.core.next(seq__40502_40623__$1);
var G__40636 = null;
var G__40637 = (0);
var G__40638 = (0);
seq__40502_40608 = G__40635;
chunk__40504_40609 = G__40636;
count__40505_40610 = G__40637;
i__40506_40611 = G__40638;
continue;
}
}
} else {
}
}
break;
}

var G__40639 = seq__40492;
var G__40640 = chunk__40499;
var G__40641 = count__40500;
var G__40642 = (i__40501 + (1));
seq__40492 = G__40639;
chunk__40499 = G__40640;
count__40500 = G__40641;
i__40501 = G__40642;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__40492);
if(temp__5823__auto__){
var seq__40492__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40492__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__40492__$1);
var G__40643 = cljs.core.chunk_rest(seq__40492__$1);
var G__40644 = c__5525__auto__;
var G__40645 = cljs.core.count(c__5525__auto__);
var G__40646 = (0);
seq__40492 = G__40643;
chunk__40499 = G__40644;
count__40500 = G__40645;
i__40501 = G__40646;
continue;
} else {
var dx = cljs.core.first(seq__40492__$1);
var seq__40493_40647 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((y - radius),((y + radius) + (1))));
var chunk__40495_40648 = null;
var count__40496_40649 = (0);
var i__40497_40650 = (0);
while(true){
if((i__40497_40650 < count__40496_40649)){
var dy_40651 = chunk__40495_40648.cljs$core$IIndexed$_nth$arity$2(null, i__40497_40650);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dx,dy_40651], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))){
var sprite_40652 = app.frontend.ui.battlefield.sprites.create_map_tile_sprite(texture,(0),dx,dy_40651);
(sprite_40652.alpha = 0.6);

(sprite_40652.eventMode = "dynamic");

(sprite_40652.buttonMode = true);

sprite_40652.on("pointerdown",((function (seq__40493_40647,chunk__40495_40648,count__40496_40649,i__40497_40650,seq__40492,chunk__40499,count__40500,i__40501,sprite_40652,dy_40651,dx,seq__40492__$1,temp__5823__auto__,radius,map__40491,map__40491__$1,x,y){
return (function (_){
app.frontend.ui.battlefield.overlay.on_placeholder_click(dx,dy_40651);

return app.frontend.ui.battlefield.overlay.clear_overlay_BANG_(map_container);
});})(seq__40493_40647,chunk__40495_40648,count__40496_40649,i__40497_40650,seq__40492,chunk__40499,count__40500,i__40501,sprite_40652,dy_40651,dx,seq__40492__$1,temp__5823__auto__,radius,map__40491,map__40491__$1,x,y))
);

map_container.addChild(sprite_40652);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(app.frontend.ui.battlefield.state.overlay_placeholders,cljs.core.conj,sprite_40652);


var G__40653 = seq__40493_40647;
var G__40654 = chunk__40495_40648;
var G__40655 = count__40496_40649;
var G__40656 = (i__40497_40650 + (1));
seq__40493_40647 = G__40653;
chunk__40495_40648 = G__40654;
count__40496_40649 = G__40655;
i__40497_40650 = G__40656;
continue;
} else {
var G__40657 = seq__40493_40647;
var G__40658 = chunk__40495_40648;
var G__40659 = count__40496_40649;
var G__40660 = (i__40497_40650 + (1));
seq__40493_40647 = G__40657;
chunk__40495_40648 = G__40658;
count__40496_40649 = G__40659;
i__40497_40650 = G__40660;
continue;
}
} else {
var temp__5823__auto___40661__$1 = cljs.core.seq(seq__40493_40647);
if(temp__5823__auto___40661__$1){
var seq__40493_40662__$1 = temp__5823__auto___40661__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40493_40662__$1)){
var c__5525__auto___40663 = cljs.core.chunk_first(seq__40493_40662__$1);
var G__40664 = cljs.core.chunk_rest(seq__40493_40662__$1);
var G__40665 = c__5525__auto___40663;
var G__40666 = cljs.core.count(c__5525__auto___40663);
var G__40667 = (0);
seq__40493_40647 = G__40664;
chunk__40495_40648 = G__40665;
count__40496_40649 = G__40666;
i__40497_40650 = G__40667;
continue;
} else {
var dy_40668 = cljs.core.first(seq__40493_40662__$1);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dx,dy_40668], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))){
var sprite_40669 = app.frontend.ui.battlefield.sprites.create_map_tile_sprite(texture,(0),dx,dy_40668);
(sprite_40669.alpha = 0.6);

(sprite_40669.eventMode = "dynamic");

(sprite_40669.buttonMode = true);

sprite_40669.on("pointerdown",((function (seq__40493_40647,chunk__40495_40648,count__40496_40649,i__40497_40650,seq__40492,chunk__40499,count__40500,i__40501,sprite_40669,dy_40668,seq__40493_40662__$1,temp__5823__auto___40661__$1,dx,seq__40492__$1,temp__5823__auto__,radius,map__40491,map__40491__$1,x,y){
return (function (_){
app.frontend.ui.battlefield.overlay.on_placeholder_click(dx,dy_40668);

return app.frontend.ui.battlefield.overlay.clear_overlay_BANG_(map_container);
});})(seq__40493_40647,chunk__40495_40648,count__40496_40649,i__40497_40650,seq__40492,chunk__40499,count__40500,i__40501,sprite_40669,dy_40668,seq__40493_40662__$1,temp__5823__auto___40661__$1,dx,seq__40492__$1,temp__5823__auto__,radius,map__40491,map__40491__$1,x,y))
);

map_container.addChild(sprite_40669);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(app.frontend.ui.battlefield.state.overlay_placeholders,cljs.core.conj,sprite_40669);


var G__40670 = cljs.core.next(seq__40493_40662__$1);
var G__40671 = null;
var G__40672 = (0);
var G__40673 = (0);
seq__40493_40647 = G__40670;
chunk__40495_40648 = G__40671;
count__40496_40649 = G__40672;
i__40497_40650 = G__40673;
continue;
} else {
var G__40674 = cljs.core.next(seq__40493_40662__$1);
var G__40675 = null;
var G__40676 = (0);
var G__40677 = (0);
seq__40493_40647 = G__40674;
chunk__40495_40648 = G__40675;
count__40496_40649 = G__40676;
i__40497_40650 = G__40677;
continue;
}
}
} else {
}
}
break;
}

var G__40678 = cljs.core.next(seq__40492__$1);
var G__40679 = null;
var G__40680 = (0);
var G__40681 = (0);
seq__40492 = G__40678;
chunk__40499 = G__40679;
count__40500 = G__40680;
i__40501 = G__40681;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=app.frontend.ui.battlefield.overlay.js.map
