goog.provide('app.frontend.ui.battlefield.core');
var module$node_modules$pixi_DOT_js$lib$index=shadow.js.require("module$node_modules$pixi_DOT_js$lib$index", {});
app.frontend.ui.battlefield.core.render_tilemap = (function app$frontend$ui$battlefield$core$render_tilemap(app__$1){
var map__37236 = cljs.core.deref(app.frontend.ui.battlefield.state.map_data);
var map__37236__$1 = cljs.core.__destructure_map(map__37236);
var layers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37236__$1,new cljs.core.Keyword(null,"layers","layers",1944875032));
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
var seq__37237 = cljs.core.seq(new_state);
var chunk__37238 = null;
var count__37239 = (0);
var i__37240 = (0);
while(true){
if((i__37240 < count__37239)){
var c = chunk__37238.cljs$core$IIndexed$_nth$arity$2(null, i__37240);
if(cljs.core.truth_((function (){var and__5000__auto__ = new cljs.core.Keyword(null,"selected?","selected?",-742502788).cljs$core$IFn$_invoke$arity$1(c);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.frontend.ui.battlefield.state.overlay_placeholders),cljs.core.PersistentVector.EMPTY);
} else {
return and__5000__auto__;
}
})())){
app.frontend.ui.battlefield.overlay.display_move_overlay(map_container,c,placeholder_texture);
} else {
}


var G__37242 = seq__37237;
var G__37243 = chunk__37238;
var G__37244 = count__37239;
var G__37245 = (i__37240 + (1));
seq__37237 = G__37242;
chunk__37238 = G__37243;
count__37239 = G__37244;
i__37240 = G__37245;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__37237);
if(temp__5823__auto__){
var seq__37237__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37237__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__37237__$1);
var G__37246 = cljs.core.chunk_rest(seq__37237__$1);
var G__37247 = c__5525__auto__;
var G__37248 = cljs.core.count(c__5525__auto__);
var G__37249 = (0);
seq__37237 = G__37246;
chunk__37238 = G__37247;
count__37239 = G__37248;
i__37240 = G__37249;
continue;
} else {
var c = cljs.core.first(seq__37237__$1);
if(cljs.core.truth_((function (){var and__5000__auto__ = new cljs.core.Keyword(null,"selected?","selected?",-742502788).cljs$core$IFn$_invoke$arity$1(c);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.frontend.ui.battlefield.state.overlay_placeholders),cljs.core.PersistentVector.EMPTY);
} else {
return and__5000__auto__;
}
})())){
app.frontend.ui.battlefield.overlay.display_move_overlay(map_container,c,placeholder_texture);
} else {
}


var G__37250 = cljs.core.next(seq__37237__$1);
var G__37251 = null;
var G__37252 = (0);
var G__37253 = (0);
seq__37237 = G__37250;
chunk__37238 = G__37251;
count__37239 = G__37252;
i__37240 = G__37253;
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__37241_SHARP_){
return cljs.core.reset_BANG_(canvas_div,p1__37241_SHARP_);
})], null)], null),(cljs.core.truth_(cljs.core.deref(app.frontend.ui.battlefield.state.map_data))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Loading-map..."], null))], null);
})], null));
});

//# sourceMappingURL=app.frontend.ui.battlefield.core.js.map
