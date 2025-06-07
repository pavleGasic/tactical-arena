goog.provide('app.frontend.ui.battlefield.map');
app.frontend.ui.battlefield.map.walkable_ids = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["26",null,"28",null,"19",null,"12",null,"27",null,"11",null,"10",null,"23",null,"29",null], null), null);
app.frontend.ui.battlefield.map.mark_walkable = (function app$frontend$ui$battlefield$map$mark_walkable(tile){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tile,new cljs.core.Keyword(null,"walkable?","walkable?",44668750),cljs.core.contains_QMARK_(app.frontend.ui.battlefield.map.walkable_ids,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(tile)));
});
app.frontend.ui.battlefield.map.mark_walkable_layer = (function app$frontend$ui$battlefield$map$mark_walkable_layer(layer){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(layer,new cljs.core.Keyword(null,"tiles","tiles",178505240),(function (p1__36983_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(app.frontend.ui.battlefield.map.mark_walkable,p1__36983_SHARP_);
}));
});
app.frontend.ui.battlefield.map.load_map_BANG_ = (function app$frontend$ui$battlefield$map$load_map_BANG_(){
return fetch("/assets/map.json").then((function (p1__36984_SHARP_){
return p1__36984_SHARP_.json();
})).then((function (raw_data){
var data = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(raw_data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var layers = new cljs.core.Keyword(null,"layers","layers",1944875032).cljs$core$IFn$_invoke$arity$1(data);
var updated_layers = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(app.frontend.ui.battlefield.map.mark_walkable_layer,layers);
return cljs.core.reset_BANG_(app.frontend.ui.battlefield.state.map_data,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"layers","layers",1944875032),updated_layers));
})).catch((function (p1__36985_SHARP_){
return console.error("Failed to load map:",p1__36985_SHARP_);
}));
});
app.frontend.ui.battlefield.map.calc_map_dimensions = (function app$frontend$ui$battlefield$map$calc_map_dimensions(p__36986){
var map__36987 = p__36986;
var map__36987__$1 = cljs.core.__destructure_map(map__36987);
var tileSize = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36987__$1,new cljs.core.Keyword(null,"tileSize","tileSize",997837978));
var layers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36987__$1,new cljs.core.Keyword(null,"layers","layers",1944875032));
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
var seq__36994 = cljs.core.seq(layers);
var chunk__36999 = null;
var count__37000 = (0);
var i__37001 = (0);
while(true){
if((i__37001 < count__37000)){
var map__37019 = chunk__36999.cljs$core$IIndexed$_nth$arity$2(null, i__37001);
var map__37019__$1 = cljs.core.__destructure_map(map__37019);
var tiles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37019__$1,new cljs.core.Keyword(null,"tiles","tiles",178505240));
var seq__37002_37066 = cljs.core.seq(tiles);
var chunk__37003_37067 = null;
var count__37004_37068 = (0);
var i__37005_37069 = (0);
while(true){
if((i__37005_37069 < count__37004_37068)){
var map__37034_37070 = chunk__37003_37067.cljs$core$IIndexed$_nth$arity$2(null, i__37005_37069);
var map__37034_37071__$1 = cljs.core.__destructure_map(map__37034_37070);
var id_37072 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37034_37071__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var x_37073 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37034_37071__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_37074 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37034_37071__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var sprite_37075 = app.frontend.ui.battlefield.sprites.create_map_tile_sprite(texture,id_37072,x_37073,y_37074);
map_container.addChild(sprite_37075);


var G__37076 = seq__37002_37066;
var G__37077 = chunk__37003_37067;
var G__37078 = count__37004_37068;
var G__37079 = (i__37005_37069 + (1));
seq__37002_37066 = G__37076;
chunk__37003_37067 = G__37077;
count__37004_37068 = G__37078;
i__37005_37069 = G__37079;
continue;
} else {
var temp__5823__auto___37080 = cljs.core.seq(seq__37002_37066);
if(temp__5823__auto___37080){
var seq__37002_37081__$1 = temp__5823__auto___37080;
if(cljs.core.chunked_seq_QMARK_(seq__37002_37081__$1)){
var c__5525__auto___37082 = cljs.core.chunk_first(seq__37002_37081__$1);
var G__37083 = cljs.core.chunk_rest(seq__37002_37081__$1);
var G__37084 = c__5525__auto___37082;
var G__37085 = cljs.core.count(c__5525__auto___37082);
var G__37086 = (0);
seq__37002_37066 = G__37083;
chunk__37003_37067 = G__37084;
count__37004_37068 = G__37085;
i__37005_37069 = G__37086;
continue;
} else {
var map__37039_37087 = cljs.core.first(seq__37002_37081__$1);
var map__37039_37088__$1 = cljs.core.__destructure_map(map__37039_37087);
var id_37089 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37039_37088__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var x_37090 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37039_37088__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_37091 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37039_37088__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var sprite_37092 = app.frontend.ui.battlefield.sprites.create_map_tile_sprite(texture,id_37089,x_37090,y_37091);
map_container.addChild(sprite_37092);


var G__37093 = cljs.core.next(seq__37002_37081__$1);
var G__37094 = null;
var G__37095 = (0);
var G__37096 = (0);
seq__37002_37066 = G__37093;
chunk__37003_37067 = G__37094;
count__37004_37068 = G__37095;
i__37005_37069 = G__37096;
continue;
}
} else {
}
}
break;
}

var G__37097 = seq__36994;
var G__37098 = chunk__36999;
var G__37099 = count__37000;
var G__37100 = (i__37001 + (1));
seq__36994 = G__37097;
chunk__36999 = G__37098;
count__37000 = G__37099;
i__37001 = G__37100;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__36994);
if(temp__5823__auto__){
var seq__36994__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36994__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__36994__$1);
var G__37101 = cljs.core.chunk_rest(seq__36994__$1);
var G__37102 = c__5525__auto__;
var G__37103 = cljs.core.count(c__5525__auto__);
var G__37104 = (0);
seq__36994 = G__37101;
chunk__36999 = G__37102;
count__37000 = G__37103;
i__37001 = G__37104;
continue;
} else {
var map__37040 = cljs.core.first(seq__36994__$1);
var map__37040__$1 = cljs.core.__destructure_map(map__37040);
var tiles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37040__$1,new cljs.core.Keyword(null,"tiles","tiles",178505240));
var seq__36995_37105 = cljs.core.seq(tiles);
var chunk__36996_37106 = null;
var count__36997_37107 = (0);
var i__36998_37108 = (0);
while(true){
if((i__36998_37108 < count__36997_37107)){
var map__37047_37109 = chunk__36996_37106.cljs$core$IIndexed$_nth$arity$2(null, i__36998_37108);
var map__37047_37110__$1 = cljs.core.__destructure_map(map__37047_37109);
var id_37111 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37047_37110__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var x_37112 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37047_37110__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_37113 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37047_37110__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var sprite_37114 = app.frontend.ui.battlefield.sprites.create_map_tile_sprite(texture,id_37111,x_37112,y_37113);
map_container.addChild(sprite_37114);


var G__37115 = seq__36995_37105;
var G__37116 = chunk__36996_37106;
var G__37117 = count__36997_37107;
var G__37118 = (i__36998_37108 + (1));
seq__36995_37105 = G__37115;
chunk__36996_37106 = G__37116;
count__36997_37107 = G__37117;
i__36998_37108 = G__37118;
continue;
} else {
var temp__5823__auto___37119__$1 = cljs.core.seq(seq__36995_37105);
if(temp__5823__auto___37119__$1){
var seq__36995_37120__$1 = temp__5823__auto___37119__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36995_37120__$1)){
var c__5525__auto___37121 = cljs.core.chunk_first(seq__36995_37120__$1);
var G__37122 = cljs.core.chunk_rest(seq__36995_37120__$1);
var G__37123 = c__5525__auto___37121;
var G__37124 = cljs.core.count(c__5525__auto___37121);
var G__37125 = (0);
seq__36995_37105 = G__37122;
chunk__36996_37106 = G__37123;
count__36997_37107 = G__37124;
i__36998_37108 = G__37125;
continue;
} else {
var map__37048_37126 = cljs.core.first(seq__36995_37120__$1);
var map__37048_37127__$1 = cljs.core.__destructure_map(map__37048_37126);
var id_37128 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37048_37127__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var x_37129 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37048_37127__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_37130 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37048_37127__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var sprite_37131 = app.frontend.ui.battlefield.sprites.create_map_tile_sprite(texture,id_37128,x_37129,y_37130);
map_container.addChild(sprite_37131);


var G__37132 = cljs.core.next(seq__36995_37120__$1);
var G__37133 = null;
var G__37134 = (0);
var G__37135 = (0);
seq__36995_37105 = G__37132;
chunk__36996_37106 = G__37133;
count__36997_37107 = G__37134;
i__36998_37108 = G__37135;
continue;
}
} else {
}
}
break;
}

var G__37136 = cljs.core.next(seq__36994__$1);
var G__37137 = null;
var G__37138 = (0);
var G__37139 = (0);
seq__36994 = G__37136;
chunk__36999 = G__37137;
count__37000 = G__37138;
i__37001 = G__37139;
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
