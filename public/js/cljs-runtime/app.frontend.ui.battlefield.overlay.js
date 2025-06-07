goog.provide('app.frontend.ui.battlefield.overlay');
app.frontend.ui.battlefield.overlay.on_placeholder_click = (function app$frontend$ui$battlefield$overlay$on_placeholder_click(dx,dy){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.frontend.ui.battlefield.state.characters,(function (cs){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (c){
if(cljs.core.truth_(new cljs.core.Keyword(null,"selected?","selected?",-742502788).cljs$core$IFn$_invoke$arity$1(c))){
var sprite_37140 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(c);
app.frontend.ui.battlefield.characters.animate_move_BANG_(sprite_37140,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(c),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(c),dx,dy);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(c,new cljs.core.Keyword(null,"x","x",2099068185),dx,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776),dy,new cljs.core.Keyword(null,"selected?","selected?",-742502788),false], 0));
} else {
return c;
}
}),cs);
}));
});
app.frontend.ui.battlefield.overlay.clear_overlay_BANG_ = (function app$frontend$ui$battlefield$overlay$clear_overlay_BANG_(map_container){
var seq__37042_37141 = cljs.core.seq(cljs.core.deref(app.frontend.ui.battlefield.state.overlay_placeholders));
var chunk__37043_37142 = null;
var count__37044_37143 = (0);
var i__37045_37144 = (0);
while(true){
if((i__37045_37144 < count__37044_37143)){
var s_37145 = chunk__37043_37142.cljs$core$IIndexed$_nth$arity$2(null, i__37045_37144);
map_container.removeChild(s_37145);


var G__37146 = seq__37042_37141;
var G__37147 = chunk__37043_37142;
var G__37148 = count__37044_37143;
var G__37149 = (i__37045_37144 + (1));
seq__37042_37141 = G__37146;
chunk__37043_37142 = G__37147;
count__37044_37143 = G__37148;
i__37045_37144 = G__37149;
continue;
} else {
var temp__5823__auto___37150 = cljs.core.seq(seq__37042_37141);
if(temp__5823__auto___37150){
var seq__37042_37151__$1 = temp__5823__auto___37150;
if(cljs.core.chunked_seq_QMARK_(seq__37042_37151__$1)){
var c__5525__auto___37152 = cljs.core.chunk_first(seq__37042_37151__$1);
var G__37153 = cljs.core.chunk_rest(seq__37042_37151__$1);
var G__37154 = c__5525__auto___37152;
var G__37155 = cljs.core.count(c__5525__auto___37152);
var G__37156 = (0);
seq__37042_37141 = G__37153;
chunk__37043_37142 = G__37154;
count__37044_37143 = G__37155;
i__37045_37144 = G__37156;
continue;
} else {
var s_37157 = cljs.core.first(seq__37042_37151__$1);
map_container.removeChild(s_37157);


var G__37158 = cljs.core.next(seq__37042_37151__$1);
var G__37159 = null;
var G__37160 = (0);
var G__37161 = (0);
seq__37042_37141 = G__37158;
chunk__37043_37142 = G__37159;
count__37044_37143 = G__37160;
i__37045_37144 = G__37161;
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
var map__37049 = character;
var map__37049__$1 = cljs.core.__destructure_map(map__37049);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37049__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37049__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var seq__37050 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((x - radius),((x + radius) + (1))));
var chunk__37057 = null;
var count__37058 = (0);
var i__37059 = (0);
while(true){
if((i__37059 < count__37058)){
var dx = chunk__37057.cljs$core$IIndexed$_nth$arity$2(null, i__37059);
var seq__37060_37162 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((y - radius),((y + radius) + (1))));
var chunk__37062_37163 = null;
var count__37063_37164 = (0);
var i__37064_37165 = (0);
while(true){
if((i__37064_37165 < count__37063_37164)){
var dy_37166 = chunk__37062_37163.cljs$core$IIndexed$_nth$arity$2(null, i__37064_37165);
if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dx,dy_37166], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
if(and__5000__auto__){
return app.frontend.ui.battlefield.sprites.walkable_tile_QMARK_(dx,dy_37166,cljs.core.deref(app.frontend.ui.battlefield.state.map_data));
} else {
return and__5000__auto__;
}
})())){
var sprite_37167 = app.frontend.ui.battlefield.sprites.create_map_tile_sprite(texture,(0),dx,dy_37166);
(sprite_37167.alpha = 0.6);

(sprite_37167.eventMode = "dynamic");

(sprite_37167.buttonMode = true);

sprite_37167.on("pointerdown",((function (seq__37060_37162,chunk__37062_37163,count__37063_37164,i__37064_37165,seq__37050,chunk__37057,count__37058,i__37059,sprite_37167,dy_37166,dx,radius,map__37049,map__37049__$1,x,y){
return (function (_){
app.frontend.ui.battlefield.overlay.on_placeholder_click(dx,dy_37166);

return app.frontend.ui.battlefield.overlay.clear_overlay_BANG_(map_container);
});})(seq__37060_37162,chunk__37062_37163,count__37063_37164,i__37064_37165,seq__37050,chunk__37057,count__37058,i__37059,sprite_37167,dy_37166,dx,radius,map__37049,map__37049__$1,x,y))
);

map_container.addChild(sprite_37167);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(app.frontend.ui.battlefield.state.overlay_placeholders,cljs.core.conj,sprite_37167);


var G__37168 = seq__37060_37162;
var G__37169 = chunk__37062_37163;
var G__37170 = count__37063_37164;
var G__37171 = (i__37064_37165 + (1));
seq__37060_37162 = G__37168;
chunk__37062_37163 = G__37169;
count__37063_37164 = G__37170;
i__37064_37165 = G__37171;
continue;
} else {
var G__37172 = seq__37060_37162;
var G__37173 = chunk__37062_37163;
var G__37174 = count__37063_37164;
var G__37175 = (i__37064_37165 + (1));
seq__37060_37162 = G__37172;
chunk__37062_37163 = G__37173;
count__37063_37164 = G__37174;
i__37064_37165 = G__37175;
continue;
}
} else {
var temp__5823__auto___37176 = cljs.core.seq(seq__37060_37162);
if(temp__5823__auto___37176){
var seq__37060_37177__$1 = temp__5823__auto___37176;
if(cljs.core.chunked_seq_QMARK_(seq__37060_37177__$1)){
var c__5525__auto___37178 = cljs.core.chunk_first(seq__37060_37177__$1);
var G__37179 = cljs.core.chunk_rest(seq__37060_37177__$1);
var G__37180 = c__5525__auto___37178;
var G__37181 = cljs.core.count(c__5525__auto___37178);
var G__37182 = (0);
seq__37060_37162 = G__37179;
chunk__37062_37163 = G__37180;
count__37063_37164 = G__37181;
i__37064_37165 = G__37182;
continue;
} else {
var dy_37183 = cljs.core.first(seq__37060_37177__$1);
if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dx,dy_37183], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
if(and__5000__auto__){
return app.frontend.ui.battlefield.sprites.walkable_tile_QMARK_(dx,dy_37183,cljs.core.deref(app.frontend.ui.battlefield.state.map_data));
} else {
return and__5000__auto__;
}
})())){
var sprite_37184 = app.frontend.ui.battlefield.sprites.create_map_tile_sprite(texture,(0),dx,dy_37183);
(sprite_37184.alpha = 0.6);

(sprite_37184.eventMode = "dynamic");

(sprite_37184.buttonMode = true);

sprite_37184.on("pointerdown",((function (seq__37060_37162,chunk__37062_37163,count__37063_37164,i__37064_37165,seq__37050,chunk__37057,count__37058,i__37059,sprite_37184,dy_37183,seq__37060_37177__$1,temp__5823__auto___37176,dx,radius,map__37049,map__37049__$1,x,y){
return (function (_){
app.frontend.ui.battlefield.overlay.on_placeholder_click(dx,dy_37183);

return app.frontend.ui.battlefield.overlay.clear_overlay_BANG_(map_container);
});})(seq__37060_37162,chunk__37062_37163,count__37063_37164,i__37064_37165,seq__37050,chunk__37057,count__37058,i__37059,sprite_37184,dy_37183,seq__37060_37177__$1,temp__5823__auto___37176,dx,radius,map__37049,map__37049__$1,x,y))
);

map_container.addChild(sprite_37184);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(app.frontend.ui.battlefield.state.overlay_placeholders,cljs.core.conj,sprite_37184);


var G__37185 = cljs.core.next(seq__37060_37177__$1);
var G__37186 = null;
var G__37187 = (0);
var G__37188 = (0);
seq__37060_37162 = G__37185;
chunk__37062_37163 = G__37186;
count__37063_37164 = G__37187;
i__37064_37165 = G__37188;
continue;
} else {
var G__37189 = cljs.core.next(seq__37060_37177__$1);
var G__37190 = null;
var G__37191 = (0);
var G__37192 = (0);
seq__37060_37162 = G__37189;
chunk__37062_37163 = G__37190;
count__37063_37164 = G__37191;
i__37064_37165 = G__37192;
continue;
}
}
} else {
}
}
break;
}

var G__37193 = seq__37050;
var G__37194 = chunk__37057;
var G__37195 = count__37058;
var G__37196 = (i__37059 + (1));
seq__37050 = G__37193;
chunk__37057 = G__37194;
count__37058 = G__37195;
i__37059 = G__37196;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__37050);
if(temp__5823__auto__){
var seq__37050__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37050__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__37050__$1);
var G__37197 = cljs.core.chunk_rest(seq__37050__$1);
var G__37198 = c__5525__auto__;
var G__37199 = cljs.core.count(c__5525__auto__);
var G__37200 = (0);
seq__37050 = G__37197;
chunk__37057 = G__37198;
count__37058 = G__37199;
i__37059 = G__37200;
continue;
} else {
var dx = cljs.core.first(seq__37050__$1);
var seq__37051_37201 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((y - radius),((y + radius) + (1))));
var chunk__37053_37202 = null;
var count__37054_37203 = (0);
var i__37055_37204 = (0);
while(true){
if((i__37055_37204 < count__37054_37203)){
var dy_37205 = chunk__37053_37202.cljs$core$IIndexed$_nth$arity$2(null, i__37055_37204);
if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dx,dy_37205], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
if(and__5000__auto__){
return app.frontend.ui.battlefield.sprites.walkable_tile_QMARK_(dx,dy_37205,cljs.core.deref(app.frontend.ui.battlefield.state.map_data));
} else {
return and__5000__auto__;
}
})())){
var sprite_37206 = app.frontend.ui.battlefield.sprites.create_map_tile_sprite(texture,(0),dx,dy_37205);
(sprite_37206.alpha = 0.6);

(sprite_37206.eventMode = "dynamic");

(sprite_37206.buttonMode = true);

sprite_37206.on("pointerdown",((function (seq__37051_37201,chunk__37053_37202,count__37054_37203,i__37055_37204,seq__37050,chunk__37057,count__37058,i__37059,sprite_37206,dy_37205,dx,seq__37050__$1,temp__5823__auto__,radius,map__37049,map__37049__$1,x,y){
return (function (_){
app.frontend.ui.battlefield.overlay.on_placeholder_click(dx,dy_37205);

return app.frontend.ui.battlefield.overlay.clear_overlay_BANG_(map_container);
});})(seq__37051_37201,chunk__37053_37202,count__37054_37203,i__37055_37204,seq__37050,chunk__37057,count__37058,i__37059,sprite_37206,dy_37205,dx,seq__37050__$1,temp__5823__auto__,radius,map__37049,map__37049__$1,x,y))
);

map_container.addChild(sprite_37206);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(app.frontend.ui.battlefield.state.overlay_placeholders,cljs.core.conj,sprite_37206);


var G__37207 = seq__37051_37201;
var G__37208 = chunk__37053_37202;
var G__37209 = count__37054_37203;
var G__37210 = (i__37055_37204 + (1));
seq__37051_37201 = G__37207;
chunk__37053_37202 = G__37208;
count__37054_37203 = G__37209;
i__37055_37204 = G__37210;
continue;
} else {
var G__37211 = seq__37051_37201;
var G__37212 = chunk__37053_37202;
var G__37213 = count__37054_37203;
var G__37214 = (i__37055_37204 + (1));
seq__37051_37201 = G__37211;
chunk__37053_37202 = G__37212;
count__37054_37203 = G__37213;
i__37055_37204 = G__37214;
continue;
}
} else {
var temp__5823__auto___37215__$1 = cljs.core.seq(seq__37051_37201);
if(temp__5823__auto___37215__$1){
var seq__37051_37216__$1 = temp__5823__auto___37215__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37051_37216__$1)){
var c__5525__auto___37217 = cljs.core.chunk_first(seq__37051_37216__$1);
var G__37218 = cljs.core.chunk_rest(seq__37051_37216__$1);
var G__37219 = c__5525__auto___37217;
var G__37220 = cljs.core.count(c__5525__auto___37217);
var G__37221 = (0);
seq__37051_37201 = G__37218;
chunk__37053_37202 = G__37219;
count__37054_37203 = G__37220;
i__37055_37204 = G__37221;
continue;
} else {
var dy_37222 = cljs.core.first(seq__37051_37216__$1);
if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dx,dy_37222], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
if(and__5000__auto__){
return app.frontend.ui.battlefield.sprites.walkable_tile_QMARK_(dx,dy_37222,cljs.core.deref(app.frontend.ui.battlefield.state.map_data));
} else {
return and__5000__auto__;
}
})())){
var sprite_37223 = app.frontend.ui.battlefield.sprites.create_map_tile_sprite(texture,(0),dx,dy_37222);
(sprite_37223.alpha = 0.6);

(sprite_37223.eventMode = "dynamic");

(sprite_37223.buttonMode = true);

sprite_37223.on("pointerdown",((function (seq__37051_37201,chunk__37053_37202,count__37054_37203,i__37055_37204,seq__37050,chunk__37057,count__37058,i__37059,sprite_37223,dy_37222,seq__37051_37216__$1,temp__5823__auto___37215__$1,dx,seq__37050__$1,temp__5823__auto__,radius,map__37049,map__37049__$1,x,y){
return (function (_){
app.frontend.ui.battlefield.overlay.on_placeholder_click(dx,dy_37222);

return app.frontend.ui.battlefield.overlay.clear_overlay_BANG_(map_container);
});})(seq__37051_37201,chunk__37053_37202,count__37054_37203,i__37055_37204,seq__37050,chunk__37057,count__37058,i__37059,sprite_37223,dy_37222,seq__37051_37216__$1,temp__5823__auto___37215__$1,dx,seq__37050__$1,temp__5823__auto__,radius,map__37049,map__37049__$1,x,y))
);

map_container.addChild(sprite_37223);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(app.frontend.ui.battlefield.state.overlay_placeholders,cljs.core.conj,sprite_37223);


var G__37224 = cljs.core.next(seq__37051_37216__$1);
var G__37225 = null;
var G__37226 = (0);
var G__37227 = (0);
seq__37051_37201 = G__37224;
chunk__37053_37202 = G__37225;
count__37054_37203 = G__37226;
i__37055_37204 = G__37227;
continue;
} else {
var G__37228 = cljs.core.next(seq__37051_37216__$1);
var G__37229 = null;
var G__37230 = (0);
var G__37231 = (0);
seq__37051_37201 = G__37228;
chunk__37053_37202 = G__37229;
count__37054_37203 = G__37230;
i__37055_37204 = G__37231;
continue;
}
}
} else {
}
}
break;
}

var G__37232 = cljs.core.next(seq__37050__$1);
var G__37233 = null;
var G__37234 = (0);
var G__37235 = (0);
seq__37050 = G__37232;
chunk__37057 = G__37233;
count__37058 = G__37234;
i__37059 = G__37235;
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
