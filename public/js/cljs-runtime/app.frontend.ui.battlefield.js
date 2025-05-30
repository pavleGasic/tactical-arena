goog.provide('app.frontend.ui.battlefield');
var module$node_modules$pixi_DOT_js$lib$index=shadow.js.require("module$node_modules$pixi_DOT_js$lib$index", {});
app.frontend.ui.battlefield.tile_images = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"corner-shadow-ground","corner-shadow-ground",573819076),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"right-top-stone-wall","right-top-stone-wall",1236163974),new cljs.core.Keyword(null,"bottom-top-stone-wall","bottom-top-stone-wall",1895355561),new cljs.core.Keyword(null,"top-shadow-ground","top-shadow-ground",1095224106),new cljs.core.Keyword(null,"right-side-stone-wall","right-side-stone-wall",-254746035),new cljs.core.Keyword(null,"left-bottom-stone-wall","left-bottom-stone-wall",-1295085199),new cljs.core.Keyword(null,"left-shadow-ground","left-shadow-ground",-1772136204),new cljs.core.Keyword(null,"left-top-stone-wall","left-top-stone-wall",-505599404),new cljs.core.Keyword(null,"right-bottom-stone-wall","right-bottom-stone-wall",1472805588),new cljs.core.Keyword(null,"stone-ground","stone-ground",-1106064586),new cljs.core.Keyword(null,"left-side-stone-wall","left-side-stone-wall",-1429670057),new cljs.core.Keyword(null,"top-stone-wall","top-stone-wall",615363769),new cljs.core.Keyword(null,"empty-ground","empty-ground",1381514973),new cljs.core.Keyword(null,"stone-wall","stone-wall",-1598985954),new cljs.core.Keyword(null,"rock-ground","rock-ground",-33468353)],[app.frontend.ui.components.tiles.display_tile_rotated("corner_shadow_ground.png",(270)),app.frontend.ui.components.tiles.display_tile("placeholder.png"),app.frontend.ui.components.tiles.display_tile("right_top_stone_wall.png"),app.frontend.ui.components.tiles.display_tile("bottom_top_stone_wall.png"),app.frontend.ui.components.tiles.display_tile_rotated("side_shadow_ground.png",(0)),app.frontend.ui.components.tiles.display_tile("right_side_stone_wall.png"),app.frontend.ui.components.tiles.display_tile("left_bottom_stone_wall.png"),app.frontend.ui.components.tiles.display_tile_rotated("side_shadow_ground.png",(270)),app.frontend.ui.components.tiles.display_tile("left_top_stone_wall.png"),app.frontend.ui.components.tiles.display_tile("right_bottom_stone_wall.png"),app.frontend.ui.components.tiles.display_tile("stones_in_ground.png"),app.frontend.ui.components.tiles.display_tile("left_side_stone_wall.png"),app.frontend.ui.components.tiles.display_tile("top_stone_wall.png"),app.frontend.ui.components.tiles.display_tile("empty_ground.png"),app.frontend.ui.components.tiles.display_tile("stone_wall.png"),app.frontend.ui.components.tiles.display_tile("rocks_in_ground.png")]);
if((typeof app !== 'undefined') && (typeof app.frontend !== 'undefined') && (typeof app.frontend.ui !== 'undefined') && (typeof app.frontend.ui.battlefield !== 'undefined') && (typeof app.frontend.ui.battlefield.map_data !== 'undefined')){
} else {
app.frontend.ui.battlefield.map_data = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
app.frontend.ui.battlefield.load_map_BANG_ = (function app$frontend$ui$battlefield$load_map_BANG_(){
return fetch("/assets/map.json").then((function (p1__28331_SHARP_){
return p1__28331_SHARP_.json();
})).then((function (p1__28332_SHARP_){
return cljs.core.reset_BANG_(app.frontend.ui.battlefield.map_data,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(p1__28332_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)));
})).catch((function (p1__28333_SHARP_){
return console.error("Failed to load map:",p1__28333_SHARP_);
}));
});
app.frontend.ui.battlefield.calc_map_dimensions = (function app$frontend$ui$battlefield$calc_map_dimensions(p__28334,tile_scale){
var map__28335 = p__28334;
var map__28335__$1 = cljs.core.__destructure_map(map__28335);
var tileSize = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28335__$1,new cljs.core.Keyword(null,"tileSize","tileSize",997837978));
var layers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28335__$1,new cljs.core.Keyword(null,"layers","layers",1944875032));
var height_in_tiles = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (layer){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"tiles","tiles",178505240).cljs$core$IFn$_invoke$arity$1(layer));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([layers], 0)));
var width_in_tiles = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (layer){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"tiles","tiles",178505240).cljs$core$IFn$_invoke$arity$1(layer));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([layers], 0)));
var map_height = (((height_in_tiles + (1)) * tileSize) * tile_scale);
var map_width = (((width_in_tiles + (1)) * tileSize) * tile_scale);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"map-height","map-height",1060022070),map_height,new cljs.core.Keyword(null,"map-width","map-width",-1419340239),map_width], null);
});
app.frontend.ui.battlefield.setup_drag_handlers_BANG_ = (function app$frontend$ui$battlefield$setup_drag_handlers_BANG_(container,screen_width,screen_height,map_width,map_height){
var dragging = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var offset = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null));
container.on("pointerdown",(function (event){
cljs.core.reset_BANG_(dragging,true);

var pos = event.data.global;
return cljs.core.reset_BANG_(offset,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(pos.x - container.x),new cljs.core.Keyword(null,"y","y",-1757859776),(pos.y - container.y)], null));
}));

container.on("pointerup",(function (){
return cljs.core.reset_BANG_(dragging,false);
}));

container.on("pointerupoutside",(function (){
return cljs.core.reset_BANG_(dragging,false);
}));

container.on("pointermove",(function (event){
if(cljs.core.truth_(cljs.core.deref(dragging))){
var pos = event.data.global;
var new_x = Math.floor((pos.x - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(offset))));
var new_y = Math.floor((pos.y - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(offset))));
var clamped_x = (function (){var x__5087__auto__ = (function (){var x__5090__auto__ = (0);
var y__5091__auto__ = new_x;
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})();
var y__5088__auto__ = (screen_width - map_width);
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
var clamped_y = (function (){var x__5087__auto__ = (function (){var x__5090__auto__ = (0);
var y__5091__auto__ = new_y;
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})();
var y__5088__auto__ = (screen_height - map_height);
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
(container.x = clamped_x);

return (container.y = clamped_y);
} else {
return null;
}
}));

return (container.eventMode = "dynamic");
});
app.frontend.ui.battlefield.create_sprite = (function app$frontend$ui$battlefield$create_sprite(texture,id,x,y,tileSize,tile_scale){
var cols = (8);
var tile_w = tileSize;
var tile_h = tileSize;
var frame_x = (cljs.core.mod(id,cols) * tile_w);
var frame_y = (Math.floor((id / cols)) * tile_h);
var frame = (new module$node_modules$pixi_DOT_js$lib$index.Rectangle(frame_x,frame_y,tile_w,tile_h));
var tile_texture = (new module$node_modules$pixi_DOT_js$lib$index.Texture(texture,frame));
var sprite = (new module$node_modules$pixi_DOT_js$lib$index.Sprite(tile_texture));
(sprite.x = ((x * tile_w) * tile_scale));

(sprite.y = ((y * tile_h) * tile_scale));

(sprite.scale.x = tile_scale);

(sprite.scale.y = tile_scale);

return sprite;
});
app.frontend.ui.battlefield.populate_map_container_BANG_ = (function app$frontend$ui$battlefield$populate_map_container_BANG_(map_container,layers,texture,tileSize,tile_scale){
var seq__28336 = cljs.core.seq(layers);
var chunk__28341 = null;
var count__28342 = (0);
var i__28343 = (0);
while(true){
if((i__28343 < count__28342)){
var map__28358 = chunk__28341.cljs$core$IIndexed$_nth$arity$2(null, i__28343);
var map__28358__$1 = cljs.core.__destructure_map(map__28358);
var tiles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28358__$1,new cljs.core.Keyword(null,"tiles","tiles",178505240));
var seq__28344_28372 = cljs.core.seq(tiles);
var chunk__28345_28373 = null;
var count__28346_28374 = (0);
var i__28347_28375 = (0);
while(true){
if((i__28347_28375 < count__28346_28374)){
var map__28361_28376 = chunk__28345_28373.cljs$core$IIndexed$_nth$arity$2(null, i__28347_28375);
var map__28361_28377__$1 = cljs.core.__destructure_map(map__28361_28376);
var id_28378 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28361_28377__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var x_28379 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28361_28377__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_28380 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28361_28377__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var sprite_28381 = app.frontend.ui.battlefield.create_sprite(texture,id_28378,x_28379,y_28380,tileSize,tile_scale);
map_container.addChild(sprite_28381);


var G__28382 = seq__28344_28372;
var G__28383 = chunk__28345_28373;
var G__28384 = count__28346_28374;
var G__28385 = (i__28347_28375 + (1));
seq__28344_28372 = G__28382;
chunk__28345_28373 = G__28383;
count__28346_28374 = G__28384;
i__28347_28375 = G__28385;
continue;
} else {
var temp__5823__auto___28386 = cljs.core.seq(seq__28344_28372);
if(temp__5823__auto___28386){
var seq__28344_28387__$1 = temp__5823__auto___28386;
if(cljs.core.chunked_seq_QMARK_(seq__28344_28387__$1)){
var c__5525__auto___28388 = cljs.core.chunk_first(seq__28344_28387__$1);
var G__28389 = cljs.core.chunk_rest(seq__28344_28387__$1);
var G__28390 = c__5525__auto___28388;
var G__28391 = cljs.core.count(c__5525__auto___28388);
var G__28392 = (0);
seq__28344_28372 = G__28389;
chunk__28345_28373 = G__28390;
count__28346_28374 = G__28391;
i__28347_28375 = G__28392;
continue;
} else {
var map__28362_28394 = cljs.core.first(seq__28344_28387__$1);
var map__28362_28395__$1 = cljs.core.__destructure_map(map__28362_28394);
var id_28396 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28362_28395__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var x_28397 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28362_28395__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_28398 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28362_28395__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var sprite_28399 = app.frontend.ui.battlefield.create_sprite(texture,id_28396,x_28397,y_28398,tileSize,tile_scale);
map_container.addChild(sprite_28399);


var G__28400 = cljs.core.next(seq__28344_28387__$1);
var G__28401 = null;
var G__28402 = (0);
var G__28403 = (0);
seq__28344_28372 = G__28400;
chunk__28345_28373 = G__28401;
count__28346_28374 = G__28402;
i__28347_28375 = G__28403;
continue;
}
} else {
}
}
break;
}

var G__28404 = seq__28336;
var G__28405 = chunk__28341;
var G__28406 = count__28342;
var G__28407 = (i__28343 + (1));
seq__28336 = G__28404;
chunk__28341 = G__28405;
count__28342 = G__28406;
i__28343 = G__28407;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__28336);
if(temp__5823__auto__){
var seq__28336__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28336__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__28336__$1);
var G__28408 = cljs.core.chunk_rest(seq__28336__$1);
var G__28409 = c__5525__auto__;
var G__28410 = cljs.core.count(c__5525__auto__);
var G__28411 = (0);
seq__28336 = G__28408;
chunk__28341 = G__28409;
count__28342 = G__28410;
i__28343 = G__28411;
continue;
} else {
var map__28363 = cljs.core.first(seq__28336__$1);
var map__28363__$1 = cljs.core.__destructure_map(map__28363);
var tiles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28363__$1,new cljs.core.Keyword(null,"tiles","tiles",178505240));
var seq__28337_28412 = cljs.core.seq(tiles);
var chunk__28338_28413 = null;
var count__28339_28414 = (0);
var i__28340_28415 = (0);
while(true){
if((i__28340_28415 < count__28339_28414)){
var map__28366_28416 = chunk__28338_28413.cljs$core$IIndexed$_nth$arity$2(null, i__28340_28415);
var map__28366_28417__$1 = cljs.core.__destructure_map(map__28366_28416);
var id_28418 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28366_28417__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var x_28419 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28366_28417__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_28420 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28366_28417__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var sprite_28421 = app.frontend.ui.battlefield.create_sprite(texture,id_28418,x_28419,y_28420,tileSize,tile_scale);
map_container.addChild(sprite_28421);


var G__28422 = seq__28337_28412;
var G__28423 = chunk__28338_28413;
var G__28424 = count__28339_28414;
var G__28425 = (i__28340_28415 + (1));
seq__28337_28412 = G__28422;
chunk__28338_28413 = G__28423;
count__28339_28414 = G__28424;
i__28340_28415 = G__28425;
continue;
} else {
var temp__5823__auto___28426__$1 = cljs.core.seq(seq__28337_28412);
if(temp__5823__auto___28426__$1){
var seq__28337_28427__$1 = temp__5823__auto___28426__$1;
if(cljs.core.chunked_seq_QMARK_(seq__28337_28427__$1)){
var c__5525__auto___28428 = cljs.core.chunk_first(seq__28337_28427__$1);
var G__28429 = cljs.core.chunk_rest(seq__28337_28427__$1);
var G__28430 = c__5525__auto___28428;
var G__28431 = cljs.core.count(c__5525__auto___28428);
var G__28432 = (0);
seq__28337_28412 = G__28429;
chunk__28338_28413 = G__28430;
count__28339_28414 = G__28431;
i__28340_28415 = G__28432;
continue;
} else {
var map__28367_28433 = cljs.core.first(seq__28337_28427__$1);
var map__28367_28434__$1 = cljs.core.__destructure_map(map__28367_28433);
var id_28435 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28367_28434__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var x_28436 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28367_28434__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_28437 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28367_28434__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var sprite_28438 = app.frontend.ui.battlefield.create_sprite(texture,id_28435,x_28436,y_28437,tileSize,tile_scale);
map_container.addChild(sprite_28438);


var G__28439 = cljs.core.next(seq__28337_28427__$1);
var G__28440 = null;
var G__28441 = (0);
var G__28442 = (0);
seq__28337_28412 = G__28439;
chunk__28338_28413 = G__28440;
count__28339_28414 = G__28441;
i__28340_28415 = G__28442;
continue;
}
} else {
}
}
break;
}

var G__28443 = cljs.core.next(seq__28336__$1);
var G__28444 = null;
var G__28445 = (0);
var G__28446 = (0);
seq__28336 = G__28443;
chunk__28341 = G__28444;
count__28342 = G__28445;
i__28343 = G__28446;
continue;
}
} else {
return null;
}
}
break;
}
});
app.frontend.ui.battlefield.render_tilemap = (function app$frontend$ui$battlefield$render_tilemap(app__$1){
var map__28368 = cljs.core.deref(app.frontend.ui.battlefield.map_data);
var map__28368__$1 = cljs.core.__destructure_map(map__28368);
var tileSize = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28368__$1,new cljs.core.Keyword(null,"tileSize","tileSize",997837978));
var layers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28368__$1,new cljs.core.Keyword(null,"layers","layers",1944875032));
var tile_scale = 2.5;
var map_dimensions = app.frontend.ui.battlefield.calc_map_dimensions(cljs.core.deref(app.frontend.ui.battlefield.map_data),tile_scale);
var screen_width = app__$1.renderer.width;
var screen_height = app__$1.renderer.height;
var initial_x = (0);
var initial_y = (screen_height - (new cljs.core.Keyword(null,"map-height","map-height",1060022070).cljs$core$IFn$_invoke$arity$1(map_dimensions) - (100)));
var map_container = (new module$node_modules$pixi_DOT_js$lib$index.Container());
return module$node_modules$pixi_DOT_js$lib$index.Assets.load("/assets/spritesheet.png").then((function (_){
var texture = (module$node_modules$pixi_DOT_js$lib$index.Texture.from.cljs$core$IFn$_invoke$arity$1 ? module$node_modules$pixi_DOT_js$lib$index.Texture.from.cljs$core$IFn$_invoke$arity$1("/assets/spritesheet.png") : module$node_modules$pixi_DOT_js$lib$index.Texture.from.call(null, "/assets/spritesheet.png"));
(texture.baseTexture.scaleMode = module$node_modules$pixi_DOT_js$lib$index.SCALE_MODES.NEAREST);

(map_container.x = initial_x);

(map_container.y = initial_y);

app__$1.stage.addChild(map_container);

app.frontend.ui.battlefield.setup_drag_handlers_BANG_(map_container,screen_width,screen_height,new cljs.core.Keyword(null,"map-width","map-width",-1419340239).cljs$core$IFn$_invoke$arity$1(map_dimensions),new cljs.core.Keyword(null,"map-height","map-height",1060022070).cljs$core$IFn$_invoke$arity$1(map_dimensions));

return app.frontend.ui.battlefield.populate_map_container_BANG_(map_container,layers,texture,tileSize,tile_scale);
}));
});
app.frontend.ui.battlefield.display_battlefield = (function app$frontend$ui$battlefield$display_battlefield(){
var container = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var canvas_div = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var on_resize = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
app.frontend.ui.battlefield.load_map_BANG_();

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
var and__5000__auto____$1 = cljs.core.deref(app.frontend.ui.battlefield.map_data);
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

return app.frontend.ui.battlefield.render_tilemap(app__$1);
} else {
return null;
}
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__28369_SHARP_){
return cljs.core.reset_BANG_(canvas_div,p1__28369_SHARP_);
})], null)], null),(cljs.core.truth_(cljs.core.deref(app.frontend.ui.battlefield.map_data))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Loading-map..."], null))], null);
})], null));
});

//# sourceMappingURL=app.frontend.ui.battlefield.js.map
