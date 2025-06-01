goog.provide('app.frontend.ui.battlefield.map');
app.frontend.ui.battlefield.map.load_map_BANG_ = (function app$frontend$ui$battlefield$map$load_map_BANG_(){
return fetch("/assets/map.json").then((function (p1__40435_SHARP_){
return p1__40435_SHARP_.json();
})).then((function (p1__40436_SHARP_){
return cljs.core.reset_BANG_(app.frontend.ui.battlefield.state.map_data,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(p1__40436_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)));
})).catch((function (p1__40437_SHARP_){
return console.error("Failed to load map:",p1__40437_SHARP_);
}));
});
app.frontend.ui.battlefield.map.calc_map_dimensions = (function app$frontend$ui$battlefield$map$calc_map_dimensions(p__40438){
var map__40439 = p__40438;
var map__40439__$1 = cljs.core.__destructure_map(map__40439);
var tileSize = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40439__$1,new cljs.core.Keyword(null,"tileSize","tileSize",997837978));
var layers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40439__$1,new cljs.core.Keyword(null,"layers","layers",1944875032));
var height_in_tiles = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (layer){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"tiles","tiles",178505240).cljs$core$IFn$_invoke$arity$1(layer));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([layers], 0)));
var width_in_tiles = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (layer){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"tiles","tiles",178505240).cljs$core$IFn$_invoke$arity$1(layer));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([layers], 0)));
var map_height = (((height_in_tiles + (1)) * tileSize) * app.frontend.ui.battlefield.config.tile_scale);
var map_width = (((width_in_tiles + (1)) * tileSize) * app.frontend.ui.battlefield.config.tile_scale);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"map-height","map-height",1060022070),map_height,new cljs.core.Keyword(null,"map-width","map-width",-1419340239),map_width], null);
});
app.frontend.ui.battlefield.map.populate_map_container_BANG_ = (function app$frontend$ui$battlefield$map$populate_map_container_BANG_(map_container,layers,texture){
var seq__40441 = cljs.core.seq(layers);
var chunk__40446 = null;
var count__40447 = (0);
var i__40448 = (0);
while(true){
if((i__40448 < count__40447)){
var map__40481 = chunk__40446.cljs$core$IIndexed$_nth$arity$2(null, i__40448);
var map__40481__$1 = cljs.core.__destructure_map(map__40481);
var tiles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40481__$1,new cljs.core.Keyword(null,"tiles","tiles",178505240));
var seq__40449_40512 = cljs.core.seq(tiles);
var chunk__40450_40513 = null;
var count__40451_40514 = (0);
var i__40452_40515 = (0);
while(true){
if((i__40452_40515 < count__40451_40514)){
var map__40484_40516 = chunk__40450_40513.cljs$core$IIndexed$_nth$arity$2(null, i__40452_40515);
var map__40484_40517__$1 = cljs.core.__destructure_map(map__40484_40516);
var id_40518 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40484_40517__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var x_40519 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40484_40517__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_40520 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40484_40517__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var sprite_40521 = app.frontend.ui.battlefield.sprites.create_map_tile_sprite(texture,id_40518,x_40519,y_40520);
console.log(cljs.core.clj__GT_js(sprite_40521));

map_container.addChild(sprite_40521);


var G__40522 = seq__40449_40512;
var G__40523 = chunk__40450_40513;
var G__40524 = count__40451_40514;
var G__40525 = (i__40452_40515 + (1));
seq__40449_40512 = G__40522;
chunk__40450_40513 = G__40523;
count__40451_40514 = G__40524;
i__40452_40515 = G__40525;
continue;
} else {
var temp__5823__auto___40526 = cljs.core.seq(seq__40449_40512);
if(temp__5823__auto___40526){
var seq__40449_40527__$1 = temp__5823__auto___40526;
if(cljs.core.chunked_seq_QMARK_(seq__40449_40527__$1)){
var c__5525__auto___40528 = cljs.core.chunk_first(seq__40449_40527__$1);
var G__40529 = cljs.core.chunk_rest(seq__40449_40527__$1);
var G__40530 = c__5525__auto___40528;
var G__40531 = cljs.core.count(c__5525__auto___40528);
var G__40532 = (0);
seq__40449_40512 = G__40529;
chunk__40450_40513 = G__40530;
count__40451_40514 = G__40531;
i__40452_40515 = G__40532;
continue;
} else {
var map__40489_40533 = cljs.core.first(seq__40449_40527__$1);
var map__40489_40534__$1 = cljs.core.__destructure_map(map__40489_40533);
var id_40535 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40489_40534__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var x_40536 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40489_40534__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_40537 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40489_40534__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var sprite_40538 = app.frontend.ui.battlefield.sprites.create_map_tile_sprite(texture,id_40535,x_40536,y_40537);
console.log(cljs.core.clj__GT_js(sprite_40538));

map_container.addChild(sprite_40538);


var G__40539 = cljs.core.next(seq__40449_40527__$1);
var G__40540 = null;
var G__40541 = (0);
var G__40542 = (0);
seq__40449_40512 = G__40539;
chunk__40450_40513 = G__40540;
count__40451_40514 = G__40541;
i__40452_40515 = G__40542;
continue;
}
} else {
}
}
break;
}

var G__40543 = seq__40441;
var G__40544 = chunk__40446;
var G__40545 = count__40447;
var G__40546 = (i__40448 + (1));
seq__40441 = G__40543;
chunk__40446 = G__40544;
count__40447 = G__40545;
i__40448 = G__40546;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__40441);
if(temp__5823__auto__){
var seq__40441__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40441__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__40441__$1);
var G__40547 = cljs.core.chunk_rest(seq__40441__$1);
var G__40548 = c__5525__auto__;
var G__40549 = cljs.core.count(c__5525__auto__);
var G__40550 = (0);
seq__40441 = G__40547;
chunk__40446 = G__40548;
count__40447 = G__40549;
i__40448 = G__40550;
continue;
} else {
var map__40490 = cljs.core.first(seq__40441__$1);
var map__40490__$1 = cljs.core.__destructure_map(map__40490);
var tiles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40490__$1,new cljs.core.Keyword(null,"tiles","tiles",178505240));
var seq__40442_40551 = cljs.core.seq(tiles);
var chunk__40443_40552 = null;
var count__40444_40553 = (0);
var i__40445_40554 = (0);
while(true){
if((i__40445_40554 < count__40444_40553)){
var map__40510_40555 = chunk__40443_40552.cljs$core$IIndexed$_nth$arity$2(null, i__40445_40554);
var map__40510_40556__$1 = cljs.core.__destructure_map(map__40510_40555);
var id_40557 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40510_40556__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var x_40558 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40510_40556__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_40559 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40510_40556__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var sprite_40560 = app.frontend.ui.battlefield.sprites.create_map_tile_sprite(texture,id_40557,x_40558,y_40559);
console.log(cljs.core.clj__GT_js(sprite_40560));

map_container.addChild(sprite_40560);


var G__40561 = seq__40442_40551;
var G__40562 = chunk__40443_40552;
var G__40563 = count__40444_40553;
var G__40564 = (i__40445_40554 + (1));
seq__40442_40551 = G__40561;
chunk__40443_40552 = G__40562;
count__40444_40553 = G__40563;
i__40445_40554 = G__40564;
continue;
} else {
var temp__5823__auto___40565__$1 = cljs.core.seq(seq__40442_40551);
if(temp__5823__auto___40565__$1){
var seq__40442_40566__$1 = temp__5823__auto___40565__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40442_40566__$1)){
var c__5525__auto___40567 = cljs.core.chunk_first(seq__40442_40566__$1);
var G__40568 = cljs.core.chunk_rest(seq__40442_40566__$1);
var G__40569 = c__5525__auto___40567;
var G__40570 = cljs.core.count(c__5525__auto___40567);
var G__40571 = (0);
seq__40442_40551 = G__40568;
chunk__40443_40552 = G__40569;
count__40444_40553 = G__40570;
i__40445_40554 = G__40571;
continue;
} else {
var map__40511_40572 = cljs.core.first(seq__40442_40566__$1);
var map__40511_40573__$1 = cljs.core.__destructure_map(map__40511_40572);
var id_40574 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40511_40573__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var x_40575 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40511_40573__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_40576 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40511_40573__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var sprite_40577 = app.frontend.ui.battlefield.sprites.create_map_tile_sprite(texture,id_40574,x_40575,y_40576);
console.log(cljs.core.clj__GT_js(sprite_40577));

map_container.addChild(sprite_40577);


var G__40578 = cljs.core.next(seq__40442_40566__$1);
var G__40579 = null;
var G__40580 = (0);
var G__40581 = (0);
seq__40442_40551 = G__40578;
chunk__40443_40552 = G__40579;
count__40444_40553 = G__40580;
i__40445_40554 = G__40581;
continue;
}
} else {
}
}
break;
}

var G__40582 = cljs.core.next(seq__40441__$1);
var G__40583 = null;
var G__40584 = (0);
var G__40585 = (0);
seq__40441 = G__40582;
chunk__40446 = G__40583;
count__40447 = G__40584;
i__40448 = G__40585;
continue;
}
} else {
return null;
}
}
break;
}
});
app.frontend.ui.battlefield.map.setup_drag_handlers_BANG_ = (function app$frontend$ui$battlefield$map$setup_drag_handlers_BANG_(container,screen_width,screen_height,map_width,map_height){
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

//# sourceMappingURL=app.frontend.ui.battlefield.map.js.map
