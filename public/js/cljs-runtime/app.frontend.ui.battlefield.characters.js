goog.provide('app.frontend.ui.battlefield.characters');
var module$node_modules$pixi_DOT_js$lib$index=shadow.js.require("module$node_modules$pixi_DOT_js$lib$index", {});
app.frontend.ui.battlefield.characters.animate_move_BANG_ = (function app$frontend$ui$battlefield$characters$animate_move_BANG_(sprite,from_x,from_y,to_x,to_y){
var start_time = performance.now();
var pixel_from_x = ((from_x * app.frontend.ui.battlefield.config.tile_size) * app.frontend.ui.battlefield.config.tile_scale);
var pixel_from_y = ((from_y * app.frontend.ui.battlefield.config.tile_size) * app.frontend.ui.battlefield.config.tile_scale);
var pixel_to_x = ((to_x * app.frontend.ui.battlefield.config.tile_size) * app.frontend.ui.battlefield.config.tile_scale);
var pixel_to_y = ((to_y * app.frontend.ui.battlefield.config.tile_size) * app.frontend.ui.battlefield.config.tile_scale);
var step = (function app$frontend$ui$battlefield$characters$animate_move_BANG__$_step(){
var now = performance.now();
var elapsed = (now - start_time);
var t = (function (){var x__5090__auto__ = (1);
var y__5091__auto__ = (elapsed / (300));
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})();
var new_x = (pixel_from_x + ((pixel_to_x - pixel_from_x) * t));
var new_y = (pixel_from_y + ((pixel_to_y - pixel_from_y) * t));
(sprite.x = new_x);

(sprite.y = new_y);

if((t < (1))){
return requestAnimationFrame(app$frontend$ui$battlefield$characters$animate_move_BANG__$_step);
} else {
return null;
}
});
return requestAnimationFrame(step);
});
app.frontend.ui.battlefield.characters.render_characters_BANG_ = (function app$frontend$ui$battlefield$characters$render_characters_BANG_(map_container){
return module$node_modules$pixi_DOT_js$lib$index.Assets.load(app.frontend.ui.battlefield.config.warrior_sprite_path).then((function (_){
var texture = (module$node_modules$pixi_DOT_js$lib$index.Texture.from.cljs$core$IFn$_invoke$arity$1 ? module$node_modules$pixi_DOT_js$lib$index.Texture.from.cljs$core$IFn$_invoke$arity$1(app.frontend.ui.battlefield.config.warrior_sprite_path) : module$node_modules$pixi_DOT_js$lib$index.Texture.from.call(null, app.frontend.ui.battlefield.config.warrior_sprite_path));
(texture.baseTexture.scaleMode = module$node_modules$pixi_DOT_js$lib$index.SCALE_MODES.NEAREST);

var seq__40453 = cljs.core.seq(cljs.core.deref(app.frontend.ui.battlefield.state.characters));
var chunk__40454 = null;
var count__40455 = (0);
var i__40456 = (0);
while(true){
if((i__40456 < count__40455)){
var character = chunk__40454.cljs$core$IIndexed$_nth$arity$2(null, i__40456);
var sprite_40464 = app.frontend.ui.battlefield.sprites.create_character_sprite(character,texture);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.frontend.ui.battlefield.state.characters,((function (seq__40453,chunk__40454,count__40455,i__40456,sprite_40464,character,texture){
return (function (p1__40440_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (seq__40453,chunk__40454,count__40455,i__40456,sprite_40464,character,texture){
return (function (c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(c),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(character))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c,new cljs.core.Keyword(null,"sprite","sprite",172516848),sprite_40464);
} else {
return c;
}
});})(seq__40453,chunk__40454,count__40455,i__40456,sprite_40464,character,texture))
,p1__40440_SHARP_);
});})(seq__40453,chunk__40454,count__40455,i__40456,sprite_40464,character,texture))
);

map_container.addChild(sprite_40464);


var G__40465 = seq__40453;
var G__40466 = chunk__40454;
var G__40467 = count__40455;
var G__40468 = (i__40456 + (1));
seq__40453 = G__40465;
chunk__40454 = G__40466;
count__40455 = G__40467;
i__40456 = G__40468;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__40453);
if(temp__5823__auto__){
var seq__40453__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40453__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__40453__$1);
var G__40469 = cljs.core.chunk_rest(seq__40453__$1);
var G__40470 = c__5525__auto__;
var G__40471 = cljs.core.count(c__5525__auto__);
var G__40472 = (0);
seq__40453 = G__40469;
chunk__40454 = G__40470;
count__40455 = G__40471;
i__40456 = G__40472;
continue;
} else {
var character = cljs.core.first(seq__40453__$1);
var sprite_40474 = app.frontend.ui.battlefield.sprites.create_character_sprite(character,texture);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.frontend.ui.battlefield.state.characters,((function (seq__40453,chunk__40454,count__40455,i__40456,sprite_40474,character,seq__40453__$1,temp__5823__auto__,texture){
return (function (p1__40440_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (seq__40453,chunk__40454,count__40455,i__40456,sprite_40474,character,seq__40453__$1,temp__5823__auto__,texture){
return (function (c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(c),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(character))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c,new cljs.core.Keyword(null,"sprite","sprite",172516848),sprite_40474);
} else {
return c;
}
});})(seq__40453,chunk__40454,count__40455,i__40456,sprite_40474,character,seq__40453__$1,temp__5823__auto__,texture))
,p1__40440_SHARP_);
});})(seq__40453,chunk__40454,count__40455,i__40456,sprite_40474,character,seq__40453__$1,temp__5823__auto__,texture))
);

map_container.addChild(sprite_40474);


var G__40475 = cljs.core.next(seq__40453__$1);
var G__40476 = null;
var G__40477 = (0);
var G__40478 = (0);
seq__40453 = G__40475;
chunk__40454 = G__40476;
count__40455 = G__40477;
i__40456 = G__40478;
continue;
}
} else {
return null;
}
}
break;
}
}));
});

//# sourceMappingURL=app.frontend.ui.battlefield.characters.js.map
