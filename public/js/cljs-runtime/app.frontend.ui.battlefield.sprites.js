goog.provide('app.frontend.ui.battlefield.sprites');
var module$node_modules$pixi_DOT_js$lib$index=shadow.js.require("module$node_modules$pixi_DOT_js$lib$index", {});
app.frontend.ui.battlefield.sprites.create_map_tile_sprite = (function app$frontend$ui$battlefield$sprites$create_map_tile_sprite(texture,id,x,y){
var cols = (8);
var tile_w = app.frontend.ui.battlefield.config.tile_size;
var tile_h = app.frontend.ui.battlefield.config.tile_size;
var frame_x = (cljs.core.mod(id,cols) * tile_w);
var frame_y = (Math.floor((id / cols)) * tile_h);
var frame = (new module$node_modules$pixi_DOT_js$lib$index.Rectangle(frame_x,frame_y,tile_w,tile_h));
var tile_texture = (new module$node_modules$pixi_DOT_js$lib$index.Texture(texture,frame));
var sprite = (new module$node_modules$pixi_DOT_js$lib$index.Sprite(tile_texture));
(sprite.x = ((x * tile_w) * app.frontend.ui.battlefield.config.tile_scale));

(sprite.y = ((y * tile_h) * app.frontend.ui.battlefield.config.tile_scale));

(sprite.scale.x = app.frontend.ui.battlefield.config.tile_scale);

(sprite.scale.y = app.frontend.ui.battlefield.config.tile_scale);

return sprite;
});
app.frontend.ui.battlefield.sprites.create_character_sprite = (function app$frontend$ui$battlefield$sprites$create_character_sprite(character,texture){
var sprite = (new module$node_modules$pixi_DOT_js$lib$index.Sprite(texture));
(sprite.x = ((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(character) * app.frontend.ui.battlefield.config.tile_size) * app.frontend.ui.battlefield.config.tile_scale));

(sprite.y = ((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(character) * app.frontend.ui.battlefield.config.tile_size) * app.frontend.ui.battlefield.config.tile_scale));

(sprite.scale.x = app.frontend.ui.battlefield.config.tile_scale);

(sprite.scale.y = app.frontend.ui.battlefield.config.tile_scale);

(sprite.eventMode = "dynamic");

(sprite.buttonMode = true);

sprite.on("pointerdown",(function (_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.frontend.ui.battlefield.state.characters,(function (p1__40434_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (c){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c,new cljs.core.Keyword(null,"selected?","selected?",-742502788),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(c),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(character)));
}),p1__40434_SHARP_);
}));
}));

return sprite;
});

//# sourceMappingURL=app.frontend.ui.battlefield.sprites.js.map
