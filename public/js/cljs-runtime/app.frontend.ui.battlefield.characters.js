goog.provide('app.frontend.ui.battlefield.characters');
var module$node_modules$pixi_DOT_js$lib$index=shadow.js.require("module$node_modules$pixi_DOT_js$lib$index", {});
app.frontend.ui.battlefield.characters.load_character_asset = (function app$frontend$ui$battlefield$characters$load_character_asset(asset_path){
return module$node_modules$pixi_DOT_js$lib$index.Assets.load(asset_path).then((function (_){
var texture = (module$node_modules$pixi_DOT_js$lib$index.Texture.from.cljs$core$IFn$_invoke$arity$1 ? module$node_modules$pixi_DOT_js$lib$index.Texture.from.cljs$core$IFn$_invoke$arity$1(asset_path) : module$node_modules$pixi_DOT_js$lib$index.Texture.from.call(null, asset_path));
(texture.baseTexture.scaleMode = module$node_modules$pixi_DOT_js$lib$index.SCALE_MODES.NEAREST);

return texture;
}));
});
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
var seq__36989 = cljs.core.seq(cljs.core.deref(app.frontend.ui.battlefield.state.characters));
var chunk__36990 = null;
var count__36991 = (0);
var i__36992 = (0);
while(true){
if((i__36992 < count__36991)){
var character = chunk__36990.cljs$core$IIndexed$_nth$arity$2(null, i__36992);
var load_promise_texture_37021 = (function (){var G__37012 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(character);
var G__37012__$1 = (((G__37012 instanceof cljs.core.Keyword))?G__37012.fqn:null);
switch (G__37012__$1) {
case "warrior":
return app.frontend.ui.battlefield.characters.load_character_asset(app.frontend.ui.battlefield.config.warrior_path);

break;
case "wizard":
return app.frontend.ui.battlefield.characters.load_character_asset(app.frontend.ui.battlefield.config.wizard_path);

break;
case "medic":
return app.frontend.ui.battlefield.characters.load_character_asset(app.frontend.ui.battlefield.config.medic_path);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37012__$1)].join('')));

}
})();
load_promise_texture_37021.then(((function (seq__36989,chunk__36990,count__36991,i__36992,load_promise_texture_37021,character){
return (function (texture){
var sprite = app.frontend.ui.battlefield.sprites.create_character_sprite(character,texture);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.frontend.ui.battlefield.state.characters,((function (seq__36989,chunk__36990,count__36991,i__36992,sprite,load_promise_texture_37021,character){
return (function (p1__36988_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (seq__36989,chunk__36990,count__36991,i__36992,sprite,load_promise_texture_37021,character){
return (function (c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(c),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(character))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c,new cljs.core.Keyword(null,"sprite","sprite",172516848),sprite);
} else {
return c;
}
});})(seq__36989,chunk__36990,count__36991,i__36992,sprite,load_promise_texture_37021,character))
,p1__36988_SHARP_);
});})(seq__36989,chunk__36990,count__36991,i__36992,sprite,load_promise_texture_37021,character))
);

return map_container.addChild(sprite);
});})(seq__36989,chunk__36990,count__36991,i__36992,load_promise_texture_37021,character))
);


var G__37024 = seq__36989;
var G__37025 = chunk__36990;
var G__37026 = count__36991;
var G__37027 = (i__36992 + (1));
seq__36989 = G__37024;
chunk__36990 = G__37025;
count__36991 = G__37026;
i__36992 = G__37027;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__36989);
if(temp__5823__auto__){
var seq__36989__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36989__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__36989__$1);
var G__37028 = cljs.core.chunk_rest(seq__36989__$1);
var G__37029 = c__5525__auto__;
var G__37030 = cljs.core.count(c__5525__auto__);
var G__37031 = (0);
seq__36989 = G__37028;
chunk__36990 = G__37029;
count__36991 = G__37030;
i__36992 = G__37031;
continue;
} else {
var character = cljs.core.first(seq__36989__$1);
var load_promise_texture_37032 = (function (){var G__37015 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(character);
var G__37015__$1 = (((G__37015 instanceof cljs.core.Keyword))?G__37015.fqn:null);
switch (G__37015__$1) {
case "warrior":
return app.frontend.ui.battlefield.characters.load_character_asset(app.frontend.ui.battlefield.config.warrior_path);

break;
case "wizard":
return app.frontend.ui.battlefield.characters.load_character_asset(app.frontend.ui.battlefield.config.wizard_path);

break;
case "medic":
return app.frontend.ui.battlefield.characters.load_character_asset(app.frontend.ui.battlefield.config.medic_path);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37015__$1)].join('')));

}
})();
load_promise_texture_37032.then(((function (seq__36989,chunk__36990,count__36991,i__36992,load_promise_texture_37032,character,seq__36989__$1,temp__5823__auto__){
return (function (texture){
var sprite = app.frontend.ui.battlefield.sprites.create_character_sprite(character,texture);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.frontend.ui.battlefield.state.characters,((function (seq__36989,chunk__36990,count__36991,i__36992,sprite,load_promise_texture_37032,character,seq__36989__$1,temp__5823__auto__){
return (function (p1__36988_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (seq__36989,chunk__36990,count__36991,i__36992,sprite,load_promise_texture_37032,character,seq__36989__$1,temp__5823__auto__){
return (function (c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(c),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(character))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c,new cljs.core.Keyword(null,"sprite","sprite",172516848),sprite);
} else {
return c;
}
});})(seq__36989,chunk__36990,count__36991,i__36992,sprite,load_promise_texture_37032,character,seq__36989__$1,temp__5823__auto__))
,p1__36988_SHARP_);
});})(seq__36989,chunk__36990,count__36991,i__36992,sprite,load_promise_texture_37032,character,seq__36989__$1,temp__5823__auto__))
);

return map_container.addChild(sprite);
});})(seq__36989,chunk__36990,count__36991,i__36992,load_promise_texture_37032,character,seq__36989__$1,temp__5823__auto__))
);


var G__37035 = cljs.core.next(seq__36989__$1);
var G__37036 = null;
var G__37037 = (0);
var G__37038 = (0);
seq__36989 = G__37035;
chunk__36990 = G__37036;
count__36991 = G__37037;
i__36992 = G__37038;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=app.frontend.ui.battlefield.characters.js.map
