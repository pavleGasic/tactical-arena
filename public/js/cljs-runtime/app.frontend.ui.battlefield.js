goog.provide('app.frontend.ui.battlefield');
var module$node_modules$pixi_DOT_js$lib$index=shadow.js.require("module$node_modules$pixi_DOT_js$lib$index", {});
if((typeof app !== 'undefined') && (typeof app.frontend !== 'undefined') && (typeof app.frontend.ui !== 'undefined') && (typeof app.frontend.ui.battlefield !== 'undefined') && (typeof app.frontend.ui.battlefield.map_data !== 'undefined')){
} else {
app.frontend.ui.battlefield.map_data = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof app !== 'undefined') && (typeof app.frontend !== 'undefined') && (typeof app.frontend.ui !== 'undefined') && (typeof app.frontend.ui.battlefield !== 'undefined') && (typeof app.frontend.ui.battlefield.overlay_placeholders !== 'undefined')){
} else {
app.frontend.ui.battlefield.overlay_placeholders = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof app !== 'undefined') && (typeof app.frontend !== 'undefined') && (typeof app.frontend.ui !== 'undefined') && (typeof app.frontend.ui.battlefield !== 'undefined') && (typeof app.frontend.ui.battlefield.characters !== 'undefined')){
} else {
app.frontend.ui.battlefield.characters = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"wizard","wizard",138100915),new cljs.core.Keyword(null,"x","x",2099068185),(6),new cljs.core.Keyword(null,"y","y",-1757859776),(27),new cljs.core.Keyword(null,"sprite","sprite",172516848),null,new cljs.core.Keyword(null,"selected?","selected?",-742502788),false], null)], null));
}
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
app.frontend.ui.battlefield.create_character_sprite = (function app$frontend$ui$battlefield$create_character_sprite(character,texture,tile_size,tile_scale){
var sprite = (new module$node_modules$pixi_DOT_js$lib$index.Sprite(texture));
(sprite.x = ((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(character) * tile_size) * tile_scale));

(sprite.y = ((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(character) * tile_size) * tile_scale));

(sprite.scale.x = tile_scale);

(sprite.scale.y = tile_scale);

(sprite.eventMode = "dynamic");

(sprite.buttonMode = true);

sprite.on("pointerdown",(function (_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.frontend.ui.battlefield.characters,(function (p1__36705_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (c){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c,new cljs.core.Keyword(null,"selected?","selected?",-742502788),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(c),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(character)));
}),p1__36705_SHARP_);
}));
}));

return sprite;
});
app.frontend.ui.battlefield.clear_overlay_BANG_ = (function app$frontend$ui$battlefield$clear_overlay_BANG_(map_container){
var seq__36706_36758 = cljs.core.seq(cljs.core.deref(app.frontend.ui.battlefield.overlay_placeholders));
var chunk__36707_36759 = null;
var count__36708_36760 = (0);
var i__36709_36761 = (0);
while(true){
if((i__36709_36761 < count__36708_36760)){
var s_36762 = chunk__36707_36759.cljs$core$IIndexed$_nth$arity$2(null, i__36709_36761);
map_container.removeChild(s_36762);


var G__36763 = seq__36706_36758;
var G__36764 = chunk__36707_36759;
var G__36765 = count__36708_36760;
var G__36766 = (i__36709_36761 + (1));
seq__36706_36758 = G__36763;
chunk__36707_36759 = G__36764;
count__36708_36760 = G__36765;
i__36709_36761 = G__36766;
continue;
} else {
var temp__5823__auto___36767 = cljs.core.seq(seq__36706_36758);
if(temp__5823__auto___36767){
var seq__36706_36768__$1 = temp__5823__auto___36767;
if(cljs.core.chunked_seq_QMARK_(seq__36706_36768__$1)){
var c__5525__auto___36769 = cljs.core.chunk_first(seq__36706_36768__$1);
var G__36770 = cljs.core.chunk_rest(seq__36706_36768__$1);
var G__36771 = c__5525__auto___36769;
var G__36772 = cljs.core.count(c__5525__auto___36769);
var G__36773 = (0);
seq__36706_36758 = G__36770;
chunk__36707_36759 = G__36771;
count__36708_36760 = G__36772;
i__36709_36761 = G__36773;
continue;
} else {
var s_36774 = cljs.core.first(seq__36706_36768__$1);
map_container.removeChild(s_36774);


var G__36775 = cljs.core.next(seq__36706_36768__$1);
var G__36776 = null;
var G__36777 = (0);
var G__36778 = (0);
seq__36706_36758 = G__36775;
chunk__36707_36759 = G__36776;
count__36708_36760 = G__36777;
i__36709_36761 = G__36778;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(app.frontend.ui.battlefield.overlay_placeholders,cljs.core.PersistentVector.EMPTY);
});
app.frontend.ui.battlefield.animate_move_BANG_ = (function app$frontend$ui$battlefield$animate_move_BANG_(sprite,from_x,from_y,to_x,to_y,tile_size,tile_scale){
var start_time = performance.now();
var pixel_from_x = ((from_x * tile_size) * tile_scale);
var pixel_from_y = ((from_y * tile_size) * tile_scale);
var pixel_to_x = ((to_x * tile_size) * tile_scale);
var pixel_to_y = ((to_y * tile_size) * tile_scale);
var step = (function app$frontend$ui$battlefield$animate_move_BANG__$_step(){
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
return requestAnimationFrame(app$frontend$ui$battlefield$animate_move_BANG__$_step);
} else {
return null;
}
});
return requestAnimationFrame(step);
});
app.frontend.ui.battlefield.render_characters_BANG_ = (function app$frontend$ui$battlefield$render_characters_BANG_(map_container,tile_size,tile_scale){
return module$node_modules$pixi_DOT_js$lib$index.Assets.load("/assets/images/warrior.png").then((function (_){
var texture = (module$node_modules$pixi_DOT_js$lib$index.Texture.from.cljs$core$IFn$_invoke$arity$1 ? module$node_modules$pixi_DOT_js$lib$index.Texture.from.cljs$core$IFn$_invoke$arity$1("/assets/images/warrior.png") : module$node_modules$pixi_DOT_js$lib$index.Texture.from.call(null, "/assets/images/warrior.png"));
(texture.baseTexture.scaleMode = module$node_modules$pixi_DOT_js$lib$index.SCALE_MODES.NEAREST);

var seq__36711 = cljs.core.seq(cljs.core.deref(app.frontend.ui.battlefield.characters));
var chunk__36712 = null;
var count__36713 = (0);
var i__36714 = (0);
while(true){
if((i__36714 < count__36713)){
var character = chunk__36712.cljs$core$IIndexed$_nth$arity$2(null, i__36714);
var sprite_36779 = app.frontend.ui.battlefield.create_character_sprite(character,texture,tile_size,tile_scale);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.frontend.ui.battlefield.characters,((function (seq__36711,chunk__36712,count__36713,i__36714,sprite_36779,character,texture){
return (function (p1__36710_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (seq__36711,chunk__36712,count__36713,i__36714,sprite_36779,character,texture){
return (function (c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(c),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(character))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c,new cljs.core.Keyword(null,"sprite","sprite",172516848),sprite_36779);
} else {
return c;
}
});})(seq__36711,chunk__36712,count__36713,i__36714,sprite_36779,character,texture))
,p1__36710_SHARP_);
});})(seq__36711,chunk__36712,count__36713,i__36714,sprite_36779,character,texture))
);

map_container.addChild(sprite_36779);


var G__36780 = seq__36711;
var G__36781 = chunk__36712;
var G__36782 = count__36713;
var G__36783 = (i__36714 + (1));
seq__36711 = G__36780;
chunk__36712 = G__36781;
count__36713 = G__36782;
i__36714 = G__36783;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__36711);
if(temp__5823__auto__){
var seq__36711__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36711__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__36711__$1);
var G__36784 = cljs.core.chunk_rest(seq__36711__$1);
var G__36785 = c__5525__auto__;
var G__36786 = cljs.core.count(c__5525__auto__);
var G__36787 = (0);
seq__36711 = G__36784;
chunk__36712 = G__36785;
count__36713 = G__36786;
i__36714 = G__36787;
continue;
} else {
var character = cljs.core.first(seq__36711__$1);
var sprite_36788 = app.frontend.ui.battlefield.create_character_sprite(character,texture,tile_size,tile_scale);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.frontend.ui.battlefield.characters,((function (seq__36711,chunk__36712,count__36713,i__36714,sprite_36788,character,seq__36711__$1,temp__5823__auto__,texture){
return (function (p1__36710_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (seq__36711,chunk__36712,count__36713,i__36714,sprite_36788,character,seq__36711__$1,temp__5823__auto__,texture){
return (function (c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(c),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(character))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c,new cljs.core.Keyword(null,"sprite","sprite",172516848),sprite_36788);
} else {
return c;
}
});})(seq__36711,chunk__36712,count__36713,i__36714,sprite_36788,character,seq__36711__$1,temp__5823__auto__,texture))
,p1__36710_SHARP_);
});})(seq__36711,chunk__36712,count__36713,i__36714,sprite_36788,character,seq__36711__$1,temp__5823__auto__,texture))
);

map_container.addChild(sprite_36788);


var G__36789 = cljs.core.next(seq__36711__$1);
var G__36790 = null;
var G__36791 = (0);
var G__36792 = (0);
seq__36711 = G__36789;
chunk__36712 = G__36790;
count__36713 = G__36791;
i__36714 = G__36792;
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
app.frontend.ui.battlefield.load_map_BANG_ = (function app$frontend$ui$battlefield$load_map_BANG_(){
return fetch("/assets/map.json").then((function (p1__36715_SHARP_){
return p1__36715_SHARP_.json();
})).then((function (p1__36716_SHARP_){
return cljs.core.reset_BANG_(app.frontend.ui.battlefield.map_data,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(p1__36716_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)));
})).catch((function (p1__36717_SHARP_){
return console.error("Failed to load map:",p1__36717_SHARP_);
}));
});
app.frontend.ui.battlefield.calc_map_dimensions = (function app$frontend$ui$battlefield$calc_map_dimensions(p__36718,tile_scale){
var map__36719 = p__36718;
var map__36719__$1 = cljs.core.__destructure_map(map__36719);
var tileSize = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36719__$1,new cljs.core.Keyword(null,"tileSize","tileSize",997837978));
var layers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36719__$1,new cljs.core.Keyword(null,"layers","layers",1944875032));
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
app.frontend.ui.battlefield.populate_map_container_BANG_ = (function app$frontend$ui$battlefield$populate_map_container_BANG_(map_container,layers,texture,tileSize,tile_scale){
var seq__36720 = cljs.core.seq(layers);
var chunk__36725 = null;
var count__36726 = (0);
var i__36727 = (0);
while(true){
if((i__36727 < count__36726)){
var map__36742 = chunk__36725.cljs$core$IIndexed$_nth$arity$2(null, i__36727);
var map__36742__$1 = cljs.core.__destructure_map(map__36742);
var tiles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36742__$1,new cljs.core.Keyword(null,"tiles","tiles",178505240));
var seq__36728_36794 = cljs.core.seq(tiles);
var chunk__36729_36795 = null;
var count__36730_36796 = (0);
var i__36731_36797 = (0);
while(true){
if((i__36731_36797 < count__36730_36796)){
var map__36745_36799 = chunk__36729_36795.cljs$core$IIndexed$_nth$arity$2(null, i__36731_36797);
var map__36745_36800__$1 = cljs.core.__destructure_map(map__36745_36799);
var id_36801 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36745_36800__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var x_36802 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36745_36800__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_36803 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36745_36800__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var sprite_36804 = app.frontend.ui.battlefield.create_sprite(texture,id_36801,x_36802,y_36803,tileSize,tile_scale);
map_container.addChild(sprite_36804);


var G__36805 = seq__36728_36794;
var G__36806 = chunk__36729_36795;
var G__36807 = count__36730_36796;
var G__36808 = (i__36731_36797 + (1));
seq__36728_36794 = G__36805;
chunk__36729_36795 = G__36806;
count__36730_36796 = G__36807;
i__36731_36797 = G__36808;
continue;
} else {
var temp__5823__auto___36809 = cljs.core.seq(seq__36728_36794);
if(temp__5823__auto___36809){
var seq__36728_36810__$1 = temp__5823__auto___36809;
if(cljs.core.chunked_seq_QMARK_(seq__36728_36810__$1)){
var c__5525__auto___36811 = cljs.core.chunk_first(seq__36728_36810__$1);
var G__36812 = cljs.core.chunk_rest(seq__36728_36810__$1);
var G__36813 = c__5525__auto___36811;
var G__36814 = cljs.core.count(c__5525__auto___36811);
var G__36815 = (0);
seq__36728_36794 = G__36812;
chunk__36729_36795 = G__36813;
count__36730_36796 = G__36814;
i__36731_36797 = G__36815;
continue;
} else {
var map__36746_36816 = cljs.core.first(seq__36728_36810__$1);
var map__36746_36817__$1 = cljs.core.__destructure_map(map__36746_36816);
var id_36818 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36746_36817__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var x_36819 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36746_36817__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_36820 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36746_36817__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var sprite_36821 = app.frontend.ui.battlefield.create_sprite(texture,id_36818,x_36819,y_36820,tileSize,tile_scale);
map_container.addChild(sprite_36821);


var G__36822 = cljs.core.next(seq__36728_36810__$1);
var G__36823 = null;
var G__36824 = (0);
var G__36825 = (0);
seq__36728_36794 = G__36822;
chunk__36729_36795 = G__36823;
count__36730_36796 = G__36824;
i__36731_36797 = G__36825;
continue;
}
} else {
}
}
break;
}

var G__36826 = seq__36720;
var G__36827 = chunk__36725;
var G__36828 = count__36726;
var G__36829 = (i__36727 + (1));
seq__36720 = G__36826;
chunk__36725 = G__36827;
count__36726 = G__36828;
i__36727 = G__36829;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__36720);
if(temp__5823__auto__){
var seq__36720__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36720__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__36720__$1);
var G__36830 = cljs.core.chunk_rest(seq__36720__$1);
var G__36831 = c__5525__auto__;
var G__36832 = cljs.core.count(c__5525__auto__);
var G__36833 = (0);
seq__36720 = G__36830;
chunk__36725 = G__36831;
count__36726 = G__36832;
i__36727 = G__36833;
continue;
} else {
var map__36747 = cljs.core.first(seq__36720__$1);
var map__36747__$1 = cljs.core.__destructure_map(map__36747);
var tiles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36747__$1,new cljs.core.Keyword(null,"tiles","tiles",178505240));
var seq__36721_36834 = cljs.core.seq(tiles);
var chunk__36722_36835 = null;
var count__36723_36836 = (0);
var i__36724_36837 = (0);
while(true){
if((i__36724_36837 < count__36723_36836)){
var map__36750_36838 = chunk__36722_36835.cljs$core$IIndexed$_nth$arity$2(null, i__36724_36837);
var map__36750_36839__$1 = cljs.core.__destructure_map(map__36750_36838);
var id_36840 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36750_36839__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var x_36841 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36750_36839__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_36842 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36750_36839__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var sprite_36843 = app.frontend.ui.battlefield.create_sprite(texture,id_36840,x_36841,y_36842,tileSize,tile_scale);
map_container.addChild(sprite_36843);


var G__36844 = seq__36721_36834;
var G__36845 = chunk__36722_36835;
var G__36846 = count__36723_36836;
var G__36847 = (i__36724_36837 + (1));
seq__36721_36834 = G__36844;
chunk__36722_36835 = G__36845;
count__36723_36836 = G__36846;
i__36724_36837 = G__36847;
continue;
} else {
var temp__5823__auto___36848__$1 = cljs.core.seq(seq__36721_36834);
if(temp__5823__auto___36848__$1){
var seq__36721_36849__$1 = temp__5823__auto___36848__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36721_36849__$1)){
var c__5525__auto___36850 = cljs.core.chunk_first(seq__36721_36849__$1);
var G__36851 = cljs.core.chunk_rest(seq__36721_36849__$1);
var G__36852 = c__5525__auto___36850;
var G__36853 = cljs.core.count(c__5525__auto___36850);
var G__36854 = (0);
seq__36721_36834 = G__36851;
chunk__36722_36835 = G__36852;
count__36723_36836 = G__36853;
i__36724_36837 = G__36854;
continue;
} else {
var map__36751_36855 = cljs.core.first(seq__36721_36849__$1);
var map__36751_36856__$1 = cljs.core.__destructure_map(map__36751_36855);
var id_36857 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36751_36856__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var x_36858 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36751_36856__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_36859 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36751_36856__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var sprite_36861 = app.frontend.ui.battlefield.create_sprite(texture,id_36857,x_36858,y_36859,tileSize,tile_scale);
map_container.addChild(sprite_36861);


var G__36862 = cljs.core.next(seq__36721_36849__$1);
var G__36863 = null;
var G__36864 = (0);
var G__36865 = (0);
seq__36721_36834 = G__36862;
chunk__36722_36835 = G__36863;
count__36723_36836 = G__36864;
i__36724_36837 = G__36865;
continue;
}
} else {
}
}
break;
}

var G__36866 = cljs.core.next(seq__36720__$1);
var G__36867 = null;
var G__36868 = (0);
var G__36869 = (0);
seq__36720 = G__36866;
chunk__36725 = G__36867;
count__36726 = G__36868;
i__36727 = G__36869;
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
var map__36752 = cljs.core.deref(app.frontend.ui.battlefield.map_data);
var map__36752__$1 = cljs.core.__destructure_map(map__36752);
var tileSize = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36752__$1,new cljs.core.Keyword(null,"tileSize","tileSize",997837978));
var layers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36752__$1,new cljs.core.Keyword(null,"layers","layers",1944875032));
var tile_scale = 2.5;
var map_dimensions = app.frontend.ui.battlefield.calc_map_dimensions(cljs.core.deref(app.frontend.ui.battlefield.map_data),tile_scale);
var screen_width = app__$1.renderer.width;
var screen_height = app__$1.renderer.height;
var initial_x = (0);
var initial_y = (screen_height - (new cljs.core.Keyword(null,"map-height","map-height",1060022070).cljs$core$IFn$_invoke$arity$1(map_dimensions) - (100)));
var map_container = (new module$node_modules$pixi_DOT_js$lib$index.Container());
return module$node_modules$pixi_DOT_js$lib$index.Assets.load("/assets/spritesheet.png").then((function (_){
return module$node_modules$pixi_DOT_js$lib$index.Assets.load("/assets/images/placeholder.png").then((function (___$1){
var texture = (module$node_modules$pixi_DOT_js$lib$index.Texture.from.cljs$core$IFn$_invoke$arity$1 ? module$node_modules$pixi_DOT_js$lib$index.Texture.from.cljs$core$IFn$_invoke$arity$1("/assets/spritesheet.png") : module$node_modules$pixi_DOT_js$lib$index.Texture.from.call(null, "/assets/spritesheet.png"));
var placeholder_texture = (module$node_modules$pixi_DOT_js$lib$index.Texture.from.cljs$core$IFn$_invoke$arity$1 ? module$node_modules$pixi_DOT_js$lib$index.Texture.from.cljs$core$IFn$_invoke$arity$1("/assets/images/placeholder.png") : module$node_modules$pixi_DOT_js$lib$index.Texture.from.call(null, "/assets/images/placeholder.png"));
(texture.baseTexture.scaleMode = module$node_modules$pixi_DOT_js$lib$index.SCALE_MODES.NEAREST);

(placeholder_texture.baseTexture.scaleMode = module$node_modules$pixi_DOT_js$lib$index.SCALE_MODES.NEAREST);

(map_container.x = initial_x);

(map_container.y = initial_y);

app__$1.stage.addChild(map_container);

app.frontend.ui.battlefield.setup_drag_handlers_BANG_(map_container,screen_width,screen_height,new cljs.core.Keyword(null,"map-width","map-width",-1419340239).cljs$core$IFn$_invoke$arity$1(map_dimensions),new cljs.core.Keyword(null,"map-height","map-height",1060022070).cljs$core$IFn$_invoke$arity$1(map_dimensions));

app.frontend.ui.battlefield.populate_map_container_BANG_(map_container,layers,texture,tileSize,tile_scale);

app.frontend.ui.battlefield.render_characters_BANG_(map_container,tileSize,tile_scale);

return cljs.core.add_watch(app.frontend.ui.battlefield.characters,new cljs.core.Keyword(null,"movement-overlay","movement-overlay",512888461),(function (___$2,___$3,___$4,new_state){
var seq__36753 = cljs.core.seq(new_state);
var chunk__36754 = null;
var count__36755 = (0);
var i__36756 = (0);
while(true){
if((i__36756 < count__36755)){
var c = chunk__36754.cljs$core$IIndexed$_nth$arity$2(null, i__36756);
if(cljs.core.truth_(new cljs.core.Keyword(null,"selected?","selected?",-742502788).cljs$core$IFn$_invoke$arity$1(c))){
(app.frontend.ui.battlefield.draw_move_overlay.cljs$core$IFn$_invoke$arity$5 ? app.frontend.ui.battlefield.draw_move_overlay.cljs$core$IFn$_invoke$arity$5(map_container,c,tileSize,tile_scale,placeholder_texture) : app.frontend.ui.battlefield.draw_move_overlay.call(null, map_container,c,tileSize,tile_scale,placeholder_texture));
} else {
}


var G__36870 = seq__36753;
var G__36871 = chunk__36754;
var G__36872 = count__36755;
var G__36873 = (i__36756 + (1));
seq__36753 = G__36870;
chunk__36754 = G__36871;
count__36755 = G__36872;
i__36756 = G__36873;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__36753);
if(temp__5823__auto__){
var seq__36753__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36753__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__36753__$1);
var G__36874 = cljs.core.chunk_rest(seq__36753__$1);
var G__36875 = c__5525__auto__;
var G__36876 = cljs.core.count(c__5525__auto__);
var G__36877 = (0);
seq__36753 = G__36874;
chunk__36754 = G__36875;
count__36755 = G__36876;
i__36756 = G__36877;
continue;
} else {
var c = cljs.core.first(seq__36753__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"selected?","selected?",-742502788).cljs$core$IFn$_invoke$arity$1(c))){
(app.frontend.ui.battlefield.draw_move_overlay.cljs$core$IFn$_invoke$arity$5 ? app.frontend.ui.battlefield.draw_move_overlay.cljs$core$IFn$_invoke$arity$5(map_container,c,tileSize,tile_scale,placeholder_texture) : app.frontend.ui.battlefield.draw_move_overlay.call(null, map_container,c,tileSize,tile_scale,placeholder_texture));
} else {
}


var G__36878 = cljs.core.next(seq__36753__$1);
var G__36879 = null;
var G__36880 = (0);
var G__36881 = (0);
seq__36753 = G__36878;
chunk__36754 = G__36879;
count__36755 = G__36880;
i__36756 = G__36881;
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__36757_SHARP_){
return cljs.core.reset_BANG_(canvas_div,p1__36757_SHARP_);
})], null)], null),(cljs.core.truth_(cljs.core.deref(app.frontend.ui.battlefield.map_data))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Loading-map..."], null))], null);
})], null));
});

//# sourceMappingURL=app.frontend.ui.battlefield.js.map
