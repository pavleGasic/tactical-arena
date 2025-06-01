goog.provide('app.frontend.ui.battlefield.core');
var module$node_modules$pixi_DOT_js$lib$index=shadow.js.require("module$node_modules$pixi_DOT_js$lib$index", {});
app.frontend.ui.battlefield.core.render_tilemap = (function app$frontend$ui$battlefield$core$render_tilemap(app__$1){
var map__27983 = cljs.core.deref(app.frontend.ui.battlefield.state.map_data);
var map__27983__$1 = cljs.core.__destructure_map(map__27983);
var layers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27983__$1,new cljs.core.Keyword(null,"layers","layers",1944875032));
var map_dimensions = app.frontend.ui.battlefield.map.calc_map_dimensions(cljs.core.deref(app.frontend.ui.battlefield.state.map_data));
var screen_width = app__$1.renderer.width;
var screen_height = app__$1.renderer.height;
var initial_x = (0);
var initial_y = (screen_height - (new cljs.core.Keyword(null,"map-height","map-height",1060022070).cljs$core$IFn$_invoke$arity$1(map_dimensions) - (100)));
var map_container = (new module$node_modules$pixi_DOT_js$lib$index.Container());
return module$node_modules$pixi_DOT_js$lib$index.Assets.load(app.frontend.ui.battlefield.config.spritesheet_path).then((function (_){
return module$node_modules$pixi_DOT_js$lib$index.Assets.load(app.frontend.ui.battlefield.config.placeholder_path).then((function (___$1){
var texture = (module$node_modules$pixi_DOT_js$lib$index.Texture.from.cljs$core$IFn$_invoke$arity$1 ? module$node_modules$pixi_DOT_js$lib$index.Texture.from.cljs$core$IFn$_invoke$arity$1(app.frontend.ui.battlefield.config.spritesheet_path) : module$node_modules$pixi_DOT_js$lib$index.Texture.from.call(null, app.frontend.ui.battlefield.config.spritesheet_path));
var placeholder_texture = (module$node_modules$pixi_DOT_js$lib$index.Texture.from.cljs$core$IFn$_invoke$arity$1 ? module$node_modules$pixi_DOT_js$lib$index.Texture.from.cljs$core$IFn$_invoke$arity$1(app.frontend.ui.battlefield.config.placeholder_path) : module$node_modules$pixi_DOT_js$lib$index.Texture.from.call(null, app.frontend.ui.battlefield.config.placeholder_path));
(texture.baseTexture.scaleMode = module$node_modules$pixi_DOT_js$lib$index.SCALE_MODES.NEAREST);

(placeholder_texture.baseTexture.scaleMode = module$node_modules$pixi_DOT_js$lib$index.SCALE_MODES.NEAREST);

(map_container.x = initial_x);

(map_container.y = initial_y);

app__$1.stage.addChild(map_container);

app.frontend.ui.battlefield.map.setup_drag_handlers_BANG_(map_container,screen_width,screen_height,new cljs.core.Keyword(null,"map-width","map-width",-1419340239).cljs$core$IFn$_invoke$arity$1(map_dimensions),new cljs.core.Keyword(null,"map-height","map-height",1060022070).cljs$core$IFn$_invoke$arity$1(map_dimensions));

app.frontend.ui.battlefield.map.populate_map_container_BANG_(map_container,layers,texture);

app.frontend.ui.battlefield.characters.render_characters_BANG_(map_container);

return cljs.core.add_watch(app.frontend.ui.battlefield.state.characters,new cljs.core.Keyword(null,"movement-overlay","movement-overlay",512888461),(function (___$2,___$3,___$4,new_state){
var seq__27984 = cljs.core.seq(new_state);
var chunk__27985 = null;
var count__27986 = (0);
var i__27987 = (0);
while(true){
if((i__27987 < count__27986)){
var c = chunk__27985.cljs$core$IIndexed$_nth$arity$2(null, i__27987);
if(cljs.core.truth_(new cljs.core.Keyword(null,"selected?","selected?",-742502788).cljs$core$IFn$_invoke$arity$1(c))){
app.frontend.ui.battlefield.overlay.display_move_overlay(map_container,c,placeholder_texture);
} else {
}


var G__27989 = seq__27984;
var G__27990 = chunk__27985;
var G__27991 = count__27986;
var G__27992 = (i__27987 + (1));
seq__27984 = G__27989;
chunk__27985 = G__27990;
count__27986 = G__27991;
i__27987 = G__27992;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__27984);
if(temp__5823__auto__){
var seq__27984__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27984__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__27984__$1);
var G__27993 = cljs.core.chunk_rest(seq__27984__$1);
var G__27994 = c__5525__auto__;
var G__27995 = cljs.core.count(c__5525__auto__);
var G__27996 = (0);
seq__27984 = G__27993;
chunk__27985 = G__27994;
count__27986 = G__27995;
i__27987 = G__27996;
continue;
} else {
var c = cljs.core.first(seq__27984__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"selected?","selected?",-742502788).cljs$core$IFn$_invoke$arity$1(c))){
app.frontend.ui.battlefield.overlay.display_move_overlay(map_container,c,placeholder_texture);
} else {
}


var G__27997 = cljs.core.next(seq__27984__$1);
var G__27998 = null;
var G__27999 = (0);
var G__28000 = (0);
seq__27984 = G__27997;
chunk__27985 = G__27998;
count__27986 = G__27999;
i__27987 = G__28000;
continue;
}
} else {
return null;
}
}
break;
}
}));
}));
}));
});
app.frontend.ui.battlefield.core.display_battlefield = (function app$frontend$ui$battlefield$core$display_battlefield(){
var container = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var canvas_div = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var on_resize = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
app.frontend.ui.battlefield.map.load_map_BANG_();

var resize_handler = (function (){
var temp__5823__auto__ = cljs.core.deref(container);
if(cljs.core.truth_(temp__5823__auto__)){
var app__$1 = temp__5823__auto__;
return app__$1.renderer.resize(window.innerWidth,window.innerHeight);
} else {
return null;
}
});
cljs.core.reset_BANG_(on_resize,resize_handler);

return window.addEventListener("resize",resize_handler);
}),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (){
if(cljs.core.truth_(cljs.core.deref(on_resize))){
return window.removeEventListener("resize",cljs.core.deref(on_resize));
} else {
return null;
}
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (){
if(cljs.core.truth_((function (){var and__5000__auto__ = (cljs.core.deref(container) == null);
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core.deref(app.frontend.ui.battlefield.state.map_data);
if(cljs.core.truth_(and__5000__auto____$1)){
return cljs.core.deref(canvas_div);
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})())){
var app__$1 = (new module$node_modules$pixi_DOT_js$lib$index.Application(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),window.innerWidth,new cljs.core.Keyword(null,"height","height",1025178622),window.innerHeight], null))));
cljs.core.reset_BANG_(container,app__$1);

cljs.core.deref(canvas_div).appendChild(app__$1.view);

return app.frontend.ui.battlefield.core.render_tilemap(app__$1);
} else {
return null;
}
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__27988_SHARP_){
return cljs.core.reset_BANG_(canvas_div,p1__27988_SHARP_);
})], null)], null),(cljs.core.truth_(cljs.core.deref(app.frontend.ui.battlefield.state.map_data))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Loading-map..."], null))], null);
})], null));
});

//# sourceMappingURL=app.frontend.ui.battlefield.core.js.map
