goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30596 = (function (f,blockable,meta30597){
this.f = f;
this.blockable = blockable;
this.meta30597 = meta30597;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30596.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30598,meta30597__$1){
var self__ = this;
var _30598__$1 = this;
return (new cljs.core.async.t_cljs$core$async30596(self__.f,self__.blockable,meta30597__$1));
}));

(cljs.core.async.t_cljs$core$async30596.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30598){
var self__ = this;
var _30598__$1 = this;
return self__.meta30597;
}));

(cljs.core.async.t_cljs$core$async30596.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30596.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30596.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async30596.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async30596.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30597","meta30597",-524898692,null)], null);
}));

(cljs.core.async.t_cljs$core$async30596.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30596.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30596");

(cljs.core.async.t_cljs$core$async30596.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async30596");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30596.
 */
cljs.core.async.__GT_t_cljs$core$async30596 = (function cljs$core$async$__GT_t_cljs$core$async30596(f,blockable,meta30597){
return (new cljs.core.async.t_cljs$core$async30596(f,blockable,meta30597));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__30594 = arguments.length;
switch (G__30594) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async30596(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__30624 = arguments.length;
switch (G__30624) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__30631 = arguments.length;
switch (G__30631) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__30644 = arguments.length;
switch (G__30644) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_34154 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34154) : fn1.call(null, val_34154));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34154) : fn1.call(null, val_34154));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__30662 = arguments.length;
switch (G__30662) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5821__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5821__auto__)){
var ret = temp__5821__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5821__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5821__auto__)){
var retb = temp__5821__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5593__auto___34159 = n;
var x_34160 = (0);
while(true){
if((x_34160 < n__5593__auto___34159)){
(a[x_34160] = x_34160);

var G__34161 = (x_34160 + (1));
x_34160 = G__34161;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30684 = (function (flag,meta30685){
this.flag = flag;
this.meta30685 = meta30685;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30684.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30686,meta30685__$1){
var self__ = this;
var _30686__$1 = this;
return (new cljs.core.async.t_cljs$core$async30684(self__.flag,meta30685__$1));
}));

(cljs.core.async.t_cljs$core$async30684.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30686){
var self__ = this;
var _30686__$1 = this;
return self__.meta30685;
}));

(cljs.core.async.t_cljs$core$async30684.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30684.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30684.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30684.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async30684.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30685","meta30685",1254464942,null)], null);
}));

(cljs.core.async.t_cljs$core$async30684.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30684.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30684");

(cljs.core.async.t_cljs$core$async30684.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async30684");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30684.
 */
cljs.core.async.__GT_t_cljs$core$async30684 = (function cljs$core$async$__GT_t_cljs$core$async30684(flag,meta30685){
return (new cljs.core.async.t_cljs$core$async30684(flag,meta30685));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async30684(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30711 = (function (flag,cb,meta30712){
this.flag = flag;
this.cb = cb;
this.meta30712 = meta30712;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30711.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30713,meta30712__$1){
var self__ = this;
var _30713__$1 = this;
return (new cljs.core.async.t_cljs$core$async30711(self__.flag,self__.cb,meta30712__$1));
}));

(cljs.core.async.t_cljs$core$async30711.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30713){
var self__ = this;
var _30713__$1 = this;
return self__.meta30712;
}));

(cljs.core.async.t_cljs$core$async30711.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30711.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30711.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30711.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async30711.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30712","meta30712",2020837769,null)], null);
}));

(cljs.core.async.t_cljs$core$async30711.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30711.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30711");

(cljs.core.async.t_cljs$core$async30711.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async30711");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30711.
 */
cljs.core.async.__GT_t_cljs$core$async30711 = (function cljs$core$async$__GT_t_cljs$core$async30711(flag,cb,meta30712){
return (new cljs.core.async.t_cljs$core$async30711(flag,cb,meta30712));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async30711(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null, (0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null, (1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30731_SHARP_){
var G__30740 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30731_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30740) : fret.call(null, G__30740));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30732_SHARP_){
var G__30743 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30732_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30743) : fret.call(null, G__30743));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5002__auto__ = wport;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return port;
}
})()], null));
} else {
var G__34187 = (i + (1));
i = G__34187;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5002__auto__ = ret;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5823__auto__ = (function (){var and__5000__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null, );
if(cljs.core.truth_(and__5000__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null, );
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var got = temp__5823__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___34190 = arguments.length;
var i__5727__auto___34191 = (0);
while(true){
if((i__5727__auto___34191 < len__5726__auto___34190)){
args__5732__auto__.push((arguments[i__5727__auto___34191]));

var G__34192 = (i__5727__auto___34191 + (1));
i__5727__auto___34191 = G__34192;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30758){
var map__30760 = p__30758;
var map__30760__$1 = cljs.core.__destructure_map(map__30760);
var opts = map__30760__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30749){
var G__30750 = cljs.core.first(seq30749);
var seq30749__$1 = cljs.core.next(seq30749);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30750,seq30749__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__30767 = arguments.length;
switch (G__30767) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__30503__auto___34194 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30504__auto__ = (function (){var switch__29560__auto__ = (function (state_30828){
var state_val_30830 = (state_30828[(1)]);
if((state_val_30830 === (7))){
var inst_30820 = (state_30828[(2)]);
var state_30828__$1 = state_30828;
var statearr_30832_34195 = state_30828__$1;
(statearr_30832_34195[(2)] = inst_30820);

(statearr_30832_34195[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30830 === (1))){
var state_30828__$1 = state_30828;
var statearr_30833_34196 = state_30828__$1;
(statearr_30833_34196[(2)] = null);

(statearr_30833_34196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30830 === (4))){
var inst_30795 = (state_30828[(7)]);
var inst_30795__$1 = (state_30828[(2)]);
var inst_30800 = (inst_30795__$1 == null);
var state_30828__$1 = (function (){var statearr_30834 = state_30828;
(statearr_30834[(7)] = inst_30795__$1);

return statearr_30834;
})();
if(cljs.core.truth_(inst_30800)){
var statearr_30835_34197 = state_30828__$1;
(statearr_30835_34197[(1)] = (5));

} else {
var statearr_30836_34198 = state_30828__$1;
(statearr_30836_34198[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30830 === (13))){
var state_30828__$1 = state_30828;
var statearr_30839_34199 = state_30828__$1;
(statearr_30839_34199[(2)] = null);

(statearr_30839_34199[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30830 === (6))){
var inst_30795 = (state_30828[(7)]);
var state_30828__$1 = state_30828;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30828__$1,(11),to,inst_30795);
} else {
if((state_val_30830 === (3))){
var inst_30823 = (state_30828[(2)]);
var state_30828__$1 = state_30828;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30828__$1,inst_30823);
} else {
if((state_val_30830 === (12))){
var state_30828__$1 = state_30828;
var statearr_30844_34200 = state_30828__$1;
(statearr_30844_34200[(2)] = null);

(statearr_30844_34200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30830 === (2))){
var state_30828__$1 = state_30828;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30828__$1,(4),from);
} else {
if((state_val_30830 === (11))){
var inst_30813 = (state_30828[(2)]);
var state_30828__$1 = state_30828;
if(cljs.core.truth_(inst_30813)){
var statearr_30850_34203 = state_30828__$1;
(statearr_30850_34203[(1)] = (12));

} else {
var statearr_30851_34204 = state_30828__$1;
(statearr_30851_34204[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30830 === (9))){
var state_30828__$1 = state_30828;
var statearr_30852_34205 = state_30828__$1;
(statearr_30852_34205[(2)] = null);

(statearr_30852_34205[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30830 === (5))){
var state_30828__$1 = state_30828;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30856_34209 = state_30828__$1;
(statearr_30856_34209[(1)] = (8));

} else {
var statearr_30858_34210 = state_30828__$1;
(statearr_30858_34210[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30830 === (14))){
var inst_30818 = (state_30828[(2)]);
var state_30828__$1 = state_30828;
var statearr_30860_34211 = state_30828__$1;
(statearr_30860_34211[(2)] = inst_30818);

(statearr_30860_34211[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30830 === (10))){
var inst_30810 = (state_30828[(2)]);
var state_30828__$1 = state_30828;
var statearr_30861_34215 = state_30828__$1;
(statearr_30861_34215[(2)] = inst_30810);

(statearr_30861_34215[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30830 === (8))){
var inst_30804 = cljs.core.async.close_BANG_(to);
var state_30828__$1 = state_30828;
var statearr_30862_34216 = state_30828__$1;
(statearr_30862_34216[(2)] = inst_30804);

(statearr_30862_34216[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29561__auto__ = null;
var cljs$core$async$state_machine__29561__auto____0 = (function (){
var statearr_30866 = [null,null,null,null,null,null,null,null];
(statearr_30866[(0)] = cljs$core$async$state_machine__29561__auto__);

(statearr_30866[(1)] = (1));

return statearr_30866;
});
var cljs$core$async$state_machine__29561__auto____1 = (function (state_30828){
while(true){
var ret_value__29562__auto__ = (function (){try{while(true){
var result__29563__auto__ = switch__29560__auto__(state_30828);
if(cljs.core.keyword_identical_QMARK_(result__29563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29563__auto__;
}
break;
}
}catch (e30869){var ex__29565__auto__ = e30869;
var statearr_30870_34222 = state_30828;
(statearr_30870_34222[(2)] = ex__29565__auto__);


if(cljs.core.seq((state_30828[(4)]))){
var statearr_30872_34224 = state_30828;
(statearr_30872_34224[(1)] = cljs.core.first((state_30828[(4)])));

} else {
throw ex__29565__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34225 = state_30828;
state_30828 = G__34225;
continue;
} else {
return ret_value__29562__auto__;
}
break;
}
});
cljs$core$async$state_machine__29561__auto__ = function(state_30828){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29561__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29561__auto____1.call(this,state_30828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29561__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29561__auto____0;
cljs$core$async$state_machine__29561__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29561__auto____1;
return cljs$core$async$state_machine__29561__auto__;
})()
})();
var state__30505__auto__ = (function (){var statearr_30874 = f__30504__auto__();
(statearr_30874[(6)] = c__30503__auto___34194);

return statearr_30874;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30505__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__30885){
var vec__30887 = p__30885;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30887,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30887,(1),null);
var job = vec__30887;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__30503__auto___34228 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30504__auto__ = (function (){var switch__29560__auto__ = (function (state_30894){
var state_val_30895 = (state_30894[(1)]);
if((state_val_30895 === (1))){
var state_30894__$1 = state_30894;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30894__$1,(2),res,v);
} else {
if((state_val_30895 === (2))){
var inst_30891 = (state_30894[(2)]);
var inst_30892 = cljs.core.async.close_BANG_(res);
var state_30894__$1 = (function (){var statearr_30902 = state_30894;
(statearr_30902[(7)] = inst_30891);

return statearr_30902;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30894__$1,inst_30892);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29561__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29561__auto____0 = (function (){
var statearr_30905 = [null,null,null,null,null,null,null,null];
(statearr_30905[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29561__auto__);

(statearr_30905[(1)] = (1));

return statearr_30905;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29561__auto____1 = (function (state_30894){
while(true){
var ret_value__29562__auto__ = (function (){try{while(true){
var result__29563__auto__ = switch__29560__auto__(state_30894);
if(cljs.core.keyword_identical_QMARK_(result__29563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29563__auto__;
}
break;
}
}catch (e30910){var ex__29565__auto__ = e30910;
var statearr_30911_34235 = state_30894;
(statearr_30911_34235[(2)] = ex__29565__auto__);


if(cljs.core.seq((state_30894[(4)]))){
var statearr_30912_34236 = state_30894;
(statearr_30912_34236[(1)] = cljs.core.first((state_30894[(4)])));

} else {
throw ex__29565__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34239 = state_30894;
state_30894 = G__34239;
continue;
} else {
return ret_value__29562__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29561__auto__ = function(state_30894){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29561__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29561__auto____1.call(this,state_30894);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29561__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29561__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29561__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29561__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29561__auto__;
})()
})();
var state__30505__auto__ = (function (){var statearr_30916 = f__30504__auto__();
(statearr_30916[(6)] = c__30503__auto___34228);

return statearr_30916;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30505__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__30919){
var vec__30921 = p__30919;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30921,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30921,(1),null);
var job = vec__30921;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null, v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5593__auto___34241 = n;
var __34242 = (0);
while(true){
if((__34242 < n__5593__auto___34241)){
var G__30929_34243 = type;
var G__30929_34244__$1 = (((G__30929_34243 instanceof cljs.core.Keyword))?G__30929_34243.fqn:null);
switch (G__30929_34244__$1) {
case "compute":
var c__30503__auto___34250 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34242,c__30503__auto___34250,G__30929_34243,G__30929_34244__$1,n__5593__auto___34241,jobs,results,process__$1,async){
return (function (){
var f__30504__auto__ = (function (){var switch__29560__auto__ = ((function (__34242,c__30503__auto___34250,G__30929_34243,G__30929_34244__$1,n__5593__auto___34241,jobs,results,process__$1,async){
return (function (state_30943){
var state_val_30944 = (state_30943[(1)]);
if((state_val_30944 === (1))){
var state_30943__$1 = state_30943;
var statearr_30949_34251 = state_30943__$1;
(statearr_30949_34251[(2)] = null);

(statearr_30949_34251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30944 === (2))){
var state_30943__$1 = state_30943;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30943__$1,(4),jobs);
} else {
if((state_val_30944 === (3))){
var inst_30941 = (state_30943[(2)]);
var state_30943__$1 = state_30943;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30943__$1,inst_30941);
} else {
if((state_val_30944 === (4))){
var inst_30932 = (state_30943[(2)]);
var inst_30934 = process__$1(inst_30932);
var state_30943__$1 = state_30943;
if(cljs.core.truth_(inst_30934)){
var statearr_30950_34252 = state_30943__$1;
(statearr_30950_34252[(1)] = (5));

} else {
var statearr_30952_34253 = state_30943__$1;
(statearr_30952_34253[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30944 === (5))){
var state_30943__$1 = state_30943;
var statearr_30953_34258 = state_30943__$1;
(statearr_30953_34258[(2)] = null);

(statearr_30953_34258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30944 === (6))){
var state_30943__$1 = state_30943;
var statearr_30956_34260 = state_30943__$1;
(statearr_30956_34260[(2)] = null);

(statearr_30956_34260[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30944 === (7))){
var inst_30939 = (state_30943[(2)]);
var state_30943__$1 = state_30943;
var statearr_30959_34266 = state_30943__$1;
(statearr_30959_34266[(2)] = inst_30939);

(statearr_30959_34266[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__34242,c__30503__auto___34250,G__30929_34243,G__30929_34244__$1,n__5593__auto___34241,jobs,results,process__$1,async))
;
return ((function (__34242,switch__29560__auto__,c__30503__auto___34250,G__30929_34243,G__30929_34244__$1,n__5593__auto___34241,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29561__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29561__auto____0 = (function (){
var statearr_30961 = [null,null,null,null,null,null,null];
(statearr_30961[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29561__auto__);

(statearr_30961[(1)] = (1));

return statearr_30961;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29561__auto____1 = (function (state_30943){
while(true){
var ret_value__29562__auto__ = (function (){try{while(true){
var result__29563__auto__ = switch__29560__auto__(state_30943);
if(cljs.core.keyword_identical_QMARK_(result__29563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29563__auto__;
}
break;
}
}catch (e30962){var ex__29565__auto__ = e30962;
var statearr_30963_34272 = state_30943;
(statearr_30963_34272[(2)] = ex__29565__auto__);


if(cljs.core.seq((state_30943[(4)]))){
var statearr_30964_34273 = state_30943;
(statearr_30964_34273[(1)] = cljs.core.first((state_30943[(4)])));

} else {
throw ex__29565__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34274 = state_30943;
state_30943 = G__34274;
continue;
} else {
return ret_value__29562__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29561__auto__ = function(state_30943){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29561__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29561__auto____1.call(this,state_30943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29561__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29561__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29561__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29561__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29561__auto__;
})()
;})(__34242,switch__29560__auto__,c__30503__auto___34250,G__30929_34243,G__30929_34244__$1,n__5593__auto___34241,jobs,results,process__$1,async))
})();
var state__30505__auto__ = (function (){var statearr_30970 = f__30504__auto__();
(statearr_30970[(6)] = c__30503__auto___34250);

return statearr_30970;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30505__auto__);
});})(__34242,c__30503__auto___34250,G__30929_34243,G__30929_34244__$1,n__5593__auto___34241,jobs,results,process__$1,async))
);


break;
case "async":
var c__30503__auto___34278 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34242,c__30503__auto___34278,G__30929_34243,G__30929_34244__$1,n__5593__auto___34241,jobs,results,process__$1,async){
return (function (){
var f__30504__auto__ = (function (){var switch__29560__auto__ = ((function (__34242,c__30503__auto___34278,G__30929_34243,G__30929_34244__$1,n__5593__auto___34241,jobs,results,process__$1,async){
return (function (state_30988){
var state_val_30989 = (state_30988[(1)]);
if((state_val_30989 === (1))){
var state_30988__$1 = state_30988;
var statearr_30991_34280 = state_30988__$1;
(statearr_30991_34280[(2)] = null);

(statearr_30991_34280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30989 === (2))){
var state_30988__$1 = state_30988;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30988__$1,(4),jobs);
} else {
if((state_val_30989 === (3))){
var inst_30986 = (state_30988[(2)]);
var state_30988__$1 = state_30988;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30988__$1,inst_30986);
} else {
if((state_val_30989 === (4))){
var inst_30975 = (state_30988[(2)]);
var inst_30977 = async(inst_30975);
var state_30988__$1 = state_30988;
if(cljs.core.truth_(inst_30977)){
var statearr_30996_34282 = state_30988__$1;
(statearr_30996_34282[(1)] = (5));

} else {
var statearr_30998_34283 = state_30988__$1;
(statearr_30998_34283[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30989 === (5))){
var state_30988__$1 = state_30988;
var statearr_31001_34289 = state_30988__$1;
(statearr_31001_34289[(2)] = null);

(statearr_31001_34289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30989 === (6))){
var state_30988__$1 = state_30988;
var statearr_31004_34290 = state_30988__$1;
(statearr_31004_34290[(2)] = null);

(statearr_31004_34290[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30989 === (7))){
var inst_30984 = (state_30988[(2)]);
var state_30988__$1 = state_30988;
var statearr_31006_34291 = state_30988__$1;
(statearr_31006_34291[(2)] = inst_30984);

(statearr_31006_34291[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__34242,c__30503__auto___34278,G__30929_34243,G__30929_34244__$1,n__5593__auto___34241,jobs,results,process__$1,async))
;
return ((function (__34242,switch__29560__auto__,c__30503__auto___34278,G__30929_34243,G__30929_34244__$1,n__5593__auto___34241,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29561__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29561__auto____0 = (function (){
var statearr_31013 = [null,null,null,null,null,null,null];
(statearr_31013[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29561__auto__);

(statearr_31013[(1)] = (1));

return statearr_31013;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29561__auto____1 = (function (state_30988){
while(true){
var ret_value__29562__auto__ = (function (){try{while(true){
var result__29563__auto__ = switch__29560__auto__(state_30988);
if(cljs.core.keyword_identical_QMARK_(result__29563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29563__auto__;
}
break;
}
}catch (e31016){var ex__29565__auto__ = e31016;
var statearr_31017_34292 = state_30988;
(statearr_31017_34292[(2)] = ex__29565__auto__);


if(cljs.core.seq((state_30988[(4)]))){
var statearr_31020_34294 = state_30988;
(statearr_31020_34294[(1)] = cljs.core.first((state_30988[(4)])));

} else {
throw ex__29565__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34299 = state_30988;
state_30988 = G__34299;
continue;
} else {
return ret_value__29562__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29561__auto__ = function(state_30988){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29561__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29561__auto____1.call(this,state_30988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29561__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29561__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29561__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29561__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29561__auto__;
})()
;})(__34242,switch__29560__auto__,c__30503__auto___34278,G__30929_34243,G__30929_34244__$1,n__5593__auto___34241,jobs,results,process__$1,async))
})();
var state__30505__auto__ = (function (){var statearr_31029 = f__30504__auto__();
(statearr_31029[(6)] = c__30503__auto___34278);

return statearr_31029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30505__auto__);
});})(__34242,c__30503__auto___34278,G__30929_34243,G__30929_34244__$1,n__5593__auto___34241,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30929_34244__$1)].join('')));

}

var G__34305 = (__34242 + (1));
__34242 = G__34305;
continue;
} else {
}
break;
}

var c__30503__auto___34306 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30504__auto__ = (function (){var switch__29560__auto__ = (function (state_31061){
var state_val_31063 = (state_31061[(1)]);
if((state_val_31063 === (7))){
var inst_31056 = (state_31061[(2)]);
var state_31061__$1 = state_31061;
var statearr_31074_34307 = state_31061__$1;
(statearr_31074_34307[(2)] = inst_31056);

(statearr_31074_34307[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (1))){
var state_31061__$1 = state_31061;
var statearr_31078_34308 = state_31061__$1;
(statearr_31078_34308[(2)] = null);

(statearr_31078_34308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (4))){
var inst_31036 = (state_31061[(7)]);
var inst_31036__$1 = (state_31061[(2)]);
var inst_31037 = (inst_31036__$1 == null);
var state_31061__$1 = (function (){var statearr_31081 = state_31061;
(statearr_31081[(7)] = inst_31036__$1);

return statearr_31081;
})();
if(cljs.core.truth_(inst_31037)){
var statearr_31082_34317 = state_31061__$1;
(statearr_31082_34317[(1)] = (5));

} else {
var statearr_31083_34318 = state_31061__$1;
(statearr_31083_34318[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (6))){
var inst_31036 = (state_31061[(7)]);
var inst_31041 = (state_31061[(8)]);
var inst_31041__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_31044 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31045 = [inst_31036,inst_31041__$1];
var inst_31046 = (new cljs.core.PersistentVector(null,2,(5),inst_31044,inst_31045,null));
var state_31061__$1 = (function (){var statearr_31091 = state_31061;
(statearr_31091[(8)] = inst_31041__$1);

return statearr_31091;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31061__$1,(8),jobs,inst_31046);
} else {
if((state_val_31063 === (3))){
var inst_31058 = (state_31061[(2)]);
var state_31061__$1 = state_31061;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31061__$1,inst_31058);
} else {
if((state_val_31063 === (2))){
var state_31061__$1 = state_31061;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31061__$1,(4),from);
} else {
if((state_val_31063 === (9))){
var inst_31052 = (state_31061[(2)]);
var state_31061__$1 = (function (){var statearr_31103 = state_31061;
(statearr_31103[(9)] = inst_31052);

return statearr_31103;
})();
var statearr_31105_34346 = state_31061__$1;
(statearr_31105_34346[(2)] = null);

(statearr_31105_34346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (5))){
var inst_31039 = cljs.core.async.close_BANG_(jobs);
var state_31061__$1 = state_31061;
var statearr_31108_34347 = state_31061__$1;
(statearr_31108_34347[(2)] = inst_31039);

(statearr_31108_34347[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (8))){
var inst_31041 = (state_31061[(8)]);
var inst_31048 = (state_31061[(2)]);
var state_31061__$1 = (function (){var statearr_31112 = state_31061;
(statearr_31112[(10)] = inst_31048);

return statearr_31112;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31061__$1,(9),results,inst_31041);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29561__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29561__auto____0 = (function (){
var statearr_31114 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31114[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29561__auto__);

(statearr_31114[(1)] = (1));

return statearr_31114;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29561__auto____1 = (function (state_31061){
while(true){
var ret_value__29562__auto__ = (function (){try{while(true){
var result__29563__auto__ = switch__29560__auto__(state_31061);
if(cljs.core.keyword_identical_QMARK_(result__29563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29563__auto__;
}
break;
}
}catch (e31120){var ex__29565__auto__ = e31120;
var statearr_31121_34368 = state_31061;
(statearr_31121_34368[(2)] = ex__29565__auto__);


if(cljs.core.seq((state_31061[(4)]))){
var statearr_31123_34369 = state_31061;
(statearr_31123_34369[(1)] = cljs.core.first((state_31061[(4)])));

} else {
throw ex__29565__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34384 = state_31061;
state_31061 = G__34384;
continue;
} else {
return ret_value__29562__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29561__auto__ = function(state_31061){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29561__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29561__auto____1.call(this,state_31061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29561__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29561__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29561__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29561__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29561__auto__;
})()
})();
var state__30505__auto__ = (function (){var statearr_31130 = f__30504__auto__();
(statearr_31130[(6)] = c__30503__auto___34306);

return statearr_31130;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30505__auto__);
}));


var c__30503__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30504__auto__ = (function (){var switch__29560__auto__ = (function (state_31191){
var state_val_31192 = (state_31191[(1)]);
if((state_val_31192 === (7))){
var inst_31185 = (state_31191[(2)]);
var state_31191__$1 = state_31191;
var statearr_31198_34404 = state_31191__$1;
(statearr_31198_34404[(2)] = inst_31185);

(statearr_31198_34404[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31192 === (20))){
var state_31191__$1 = state_31191;
var statearr_31205_34405 = state_31191__$1;
(statearr_31205_34405[(2)] = null);

(statearr_31205_34405[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31192 === (1))){
var state_31191__$1 = state_31191;
var statearr_31208_34410 = state_31191__$1;
(statearr_31208_34410[(2)] = null);

(statearr_31208_34410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31192 === (4))){
var inst_31142 = (state_31191[(7)]);
var inst_31142__$1 = (state_31191[(2)]);
var inst_31144 = (inst_31142__$1 == null);
var state_31191__$1 = (function (){var statearr_31215 = state_31191;
(statearr_31215[(7)] = inst_31142__$1);

return statearr_31215;
})();
if(cljs.core.truth_(inst_31144)){
var statearr_31216_34415 = state_31191__$1;
(statearr_31216_34415[(1)] = (5));

} else {
var statearr_31219_34416 = state_31191__$1;
(statearr_31219_34416[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31192 === (15))){
var inst_31163 = (state_31191[(8)]);
var state_31191__$1 = state_31191;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31191__$1,(18),to,inst_31163);
} else {
if((state_val_31192 === (21))){
var inst_31178 = (state_31191[(2)]);
var state_31191__$1 = state_31191;
var statearr_31227_34428 = state_31191__$1;
(statearr_31227_34428[(2)] = inst_31178);

(statearr_31227_34428[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31192 === (13))){
var inst_31180 = (state_31191[(2)]);
var state_31191__$1 = (function (){var statearr_31230 = state_31191;
(statearr_31230[(9)] = inst_31180);

return statearr_31230;
})();
var statearr_31233_34433 = state_31191__$1;
(statearr_31233_34433[(2)] = null);

(statearr_31233_34433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31192 === (6))){
var inst_31142 = (state_31191[(7)]);
var state_31191__$1 = state_31191;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31191__$1,(11),inst_31142);
} else {
if((state_val_31192 === (17))){
var inst_31173 = (state_31191[(2)]);
var state_31191__$1 = state_31191;
if(cljs.core.truth_(inst_31173)){
var statearr_31241_34454 = state_31191__$1;
(statearr_31241_34454[(1)] = (19));

} else {
var statearr_31242_34456 = state_31191__$1;
(statearr_31242_34456[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31192 === (3))){
var inst_31188 = (state_31191[(2)]);
var state_31191__$1 = state_31191;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31191__$1,inst_31188);
} else {
if((state_val_31192 === (12))){
var inst_31157 = (state_31191[(10)]);
var state_31191__$1 = state_31191;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31191__$1,(14),inst_31157);
} else {
if((state_val_31192 === (2))){
var state_31191__$1 = state_31191;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31191__$1,(4),results);
} else {
if((state_val_31192 === (19))){
var state_31191__$1 = state_31191;
var statearr_31255_34465 = state_31191__$1;
(statearr_31255_34465[(2)] = null);

(statearr_31255_34465[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31192 === (11))){
var inst_31157 = (state_31191[(2)]);
var state_31191__$1 = (function (){var statearr_31260 = state_31191;
(statearr_31260[(10)] = inst_31157);

return statearr_31260;
})();
var statearr_31264_34466 = state_31191__$1;
(statearr_31264_34466[(2)] = null);

(statearr_31264_34466[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31192 === (9))){
var state_31191__$1 = state_31191;
var statearr_31268_34467 = state_31191__$1;
(statearr_31268_34467[(2)] = null);

(statearr_31268_34467[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31192 === (5))){
var state_31191__$1 = state_31191;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31270_34470 = state_31191__$1;
(statearr_31270_34470[(1)] = (8));

} else {
var statearr_31274_34471 = state_31191__$1;
(statearr_31274_34471[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31192 === (14))){
var inst_31166 = (state_31191[(11)]);
var inst_31163 = (state_31191[(8)]);
var inst_31163__$1 = (state_31191[(2)]);
var inst_31165 = (inst_31163__$1 == null);
var inst_31166__$1 = cljs.core.not(inst_31165);
var state_31191__$1 = (function (){var statearr_31279 = state_31191;
(statearr_31279[(11)] = inst_31166__$1);

(statearr_31279[(8)] = inst_31163__$1);

return statearr_31279;
})();
if(inst_31166__$1){
var statearr_31284_34475 = state_31191__$1;
(statearr_31284_34475[(1)] = (15));

} else {
var statearr_31286_34476 = state_31191__$1;
(statearr_31286_34476[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31192 === (16))){
var inst_31166 = (state_31191[(11)]);
var state_31191__$1 = state_31191;
var statearr_31290_34477 = state_31191__$1;
(statearr_31290_34477[(2)] = inst_31166);

(statearr_31290_34477[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31192 === (10))){
var inst_31151 = (state_31191[(2)]);
var state_31191__$1 = state_31191;
var statearr_31292_34478 = state_31191__$1;
(statearr_31292_34478[(2)] = inst_31151);

(statearr_31292_34478[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31192 === (18))){
var inst_31170 = (state_31191[(2)]);
var state_31191__$1 = state_31191;
var statearr_31298_34482 = state_31191__$1;
(statearr_31298_34482[(2)] = inst_31170);

(statearr_31298_34482[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31192 === (8))){
var inst_31148 = cljs.core.async.close_BANG_(to);
var state_31191__$1 = state_31191;
var statearr_31302_34485 = state_31191__$1;
(statearr_31302_34485[(2)] = inst_31148);

(statearr_31302_34485[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29561__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29561__auto____0 = (function (){
var statearr_31311 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31311[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29561__auto__);

(statearr_31311[(1)] = (1));

return statearr_31311;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29561__auto____1 = (function (state_31191){
while(true){
var ret_value__29562__auto__ = (function (){try{while(true){
var result__29563__auto__ = switch__29560__auto__(state_31191);
if(cljs.core.keyword_identical_QMARK_(result__29563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29563__auto__;
}
break;
}
}catch (e31313){var ex__29565__auto__ = e31313;
var statearr_31315_34488 = state_31191;
(statearr_31315_34488[(2)] = ex__29565__auto__);


if(cljs.core.seq((state_31191[(4)]))){
var statearr_31320_34490 = state_31191;
(statearr_31320_34490[(1)] = cljs.core.first((state_31191[(4)])));

} else {
throw ex__29565__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34491 = state_31191;
state_31191 = G__34491;
continue;
} else {
return ret_value__29562__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29561__auto__ = function(state_31191){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29561__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29561__auto____1.call(this,state_31191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29561__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29561__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29561__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29561__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29561__auto__;
})()
})();
var state__30505__auto__ = (function (){var statearr_31329 = f__30504__auto__();
(statearr_31329[(6)] = c__30503__auto__);

return statearr_31329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30505__auto__);
}));

return c__30503__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__31341 = arguments.length;
switch (G__31341) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__31363 = arguments.length;
switch (G__31363) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__31394 = arguments.length;
switch (G__31394) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__30503__auto___34516 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30504__auto__ = (function (){var switch__29560__auto__ = (function (state_31436){
var state_val_31437 = (state_31436[(1)]);
if((state_val_31437 === (7))){
var inst_31432 = (state_31436[(2)]);
var state_31436__$1 = state_31436;
var statearr_31441_34517 = state_31436__$1;
(statearr_31441_34517[(2)] = inst_31432);

(statearr_31441_34517[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31437 === (1))){
var state_31436__$1 = state_31436;
var statearr_31442_34519 = state_31436__$1;
(statearr_31442_34519[(2)] = null);

(statearr_31442_34519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31437 === (4))){
var inst_31411 = (state_31436[(7)]);
var inst_31411__$1 = (state_31436[(2)]);
var inst_31412 = (inst_31411__$1 == null);
var state_31436__$1 = (function (){var statearr_31444 = state_31436;
(statearr_31444[(7)] = inst_31411__$1);

return statearr_31444;
})();
if(cljs.core.truth_(inst_31412)){
var statearr_31445_34520 = state_31436__$1;
(statearr_31445_34520[(1)] = (5));

} else {
var statearr_31446_34521 = state_31436__$1;
(statearr_31446_34521[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31437 === (13))){
var state_31436__$1 = state_31436;
var statearr_31448_34523 = state_31436__$1;
(statearr_31448_34523[(2)] = null);

(statearr_31448_34523[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31437 === (6))){
var inst_31411 = (state_31436[(7)]);
var inst_31419 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31411) : p.call(null, inst_31411));
var state_31436__$1 = state_31436;
if(cljs.core.truth_(inst_31419)){
var statearr_31452_34531 = state_31436__$1;
(statearr_31452_34531[(1)] = (9));

} else {
var statearr_31453_34536 = state_31436__$1;
(statearr_31453_34536[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31437 === (3))){
var inst_31434 = (state_31436[(2)]);
var state_31436__$1 = state_31436;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31436__$1,inst_31434);
} else {
if((state_val_31437 === (12))){
var state_31436__$1 = state_31436;
var statearr_31454_34544 = state_31436__$1;
(statearr_31454_34544[(2)] = null);

(statearr_31454_34544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31437 === (2))){
var state_31436__$1 = state_31436;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31436__$1,(4),ch);
} else {
if((state_val_31437 === (11))){
var inst_31411 = (state_31436[(7)]);
var inst_31423 = (state_31436[(2)]);
var state_31436__$1 = state_31436;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31436__$1,(8),inst_31423,inst_31411);
} else {
if((state_val_31437 === (9))){
var state_31436__$1 = state_31436;
var statearr_31457_34545 = state_31436__$1;
(statearr_31457_34545[(2)] = tc);

(statearr_31457_34545[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31437 === (5))){
var inst_31415 = cljs.core.async.close_BANG_(tc);
var inst_31416 = cljs.core.async.close_BANG_(fc);
var state_31436__$1 = (function (){var statearr_31458 = state_31436;
(statearr_31458[(8)] = inst_31415);

return statearr_31458;
})();
var statearr_31459_34546 = state_31436__$1;
(statearr_31459_34546[(2)] = inst_31416);

(statearr_31459_34546[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31437 === (14))){
var inst_31430 = (state_31436[(2)]);
var state_31436__$1 = state_31436;
var statearr_31466_34547 = state_31436__$1;
(statearr_31466_34547[(2)] = inst_31430);

(statearr_31466_34547[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31437 === (10))){
var state_31436__$1 = state_31436;
var statearr_31468_34551 = state_31436__$1;
(statearr_31468_34551[(2)] = fc);

(statearr_31468_34551[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31437 === (8))){
var inst_31425 = (state_31436[(2)]);
var state_31436__$1 = state_31436;
if(cljs.core.truth_(inst_31425)){
var statearr_31471_34556 = state_31436__$1;
(statearr_31471_34556[(1)] = (12));

} else {
var statearr_31472_34557 = state_31436__$1;
(statearr_31472_34557[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29561__auto__ = null;
var cljs$core$async$state_machine__29561__auto____0 = (function (){
var statearr_31473 = [null,null,null,null,null,null,null,null,null];
(statearr_31473[(0)] = cljs$core$async$state_machine__29561__auto__);

(statearr_31473[(1)] = (1));

return statearr_31473;
});
var cljs$core$async$state_machine__29561__auto____1 = (function (state_31436){
while(true){
var ret_value__29562__auto__ = (function (){try{while(true){
var result__29563__auto__ = switch__29560__auto__(state_31436);
if(cljs.core.keyword_identical_QMARK_(result__29563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29563__auto__;
}
break;
}
}catch (e31478){var ex__29565__auto__ = e31478;
var statearr_31479_34565 = state_31436;
(statearr_31479_34565[(2)] = ex__29565__auto__);


if(cljs.core.seq((state_31436[(4)]))){
var statearr_31485_34568 = state_31436;
(statearr_31485_34568[(1)] = cljs.core.first((state_31436[(4)])));

} else {
throw ex__29565__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34572 = state_31436;
state_31436 = G__34572;
continue;
} else {
return ret_value__29562__auto__;
}
break;
}
});
cljs$core$async$state_machine__29561__auto__ = function(state_31436){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29561__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29561__auto____1.call(this,state_31436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29561__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29561__auto____0;
cljs$core$async$state_machine__29561__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29561__auto____1;
return cljs$core$async$state_machine__29561__auto__;
})()
})();
var state__30505__auto__ = (function (){var statearr_31490 = f__30504__auto__();
(statearr_31490[(6)] = c__30503__auto___34516);

return statearr_31490;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30505__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__30503__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30504__auto__ = (function (){var switch__29560__auto__ = (function (state_31533){
var state_val_31537 = (state_31533[(1)]);
if((state_val_31537 === (7))){
var inst_31529 = (state_31533[(2)]);
var state_31533__$1 = state_31533;
var statearr_31543_34579 = state_31533__$1;
(statearr_31543_34579[(2)] = inst_31529);

(statearr_31543_34579[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31537 === (1))){
var inst_31504 = init;
var inst_31505 = inst_31504;
var state_31533__$1 = (function (){var statearr_31544 = state_31533;
(statearr_31544[(7)] = inst_31505);

return statearr_31544;
})();
var statearr_31545_34583 = state_31533__$1;
(statearr_31545_34583[(2)] = null);

(statearr_31545_34583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31537 === (4))){
var inst_31508 = (state_31533[(8)]);
var inst_31508__$1 = (state_31533[(2)]);
var inst_31511 = (inst_31508__$1 == null);
var state_31533__$1 = (function (){var statearr_31547 = state_31533;
(statearr_31547[(8)] = inst_31508__$1);

return statearr_31547;
})();
if(cljs.core.truth_(inst_31511)){
var statearr_31550_34584 = state_31533__$1;
(statearr_31550_34584[(1)] = (5));

} else {
var statearr_31553_34585 = state_31533__$1;
(statearr_31553_34585[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31537 === (6))){
var inst_31508 = (state_31533[(8)]);
var inst_31505 = (state_31533[(7)]);
var inst_31519 = (state_31533[(9)]);
var inst_31519__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_31505,inst_31508) : f.call(null, inst_31505,inst_31508));
var inst_31521 = cljs.core.reduced_QMARK_(inst_31519__$1);
var state_31533__$1 = (function (){var statearr_31558 = state_31533;
(statearr_31558[(9)] = inst_31519__$1);

return statearr_31558;
})();
if(inst_31521){
var statearr_31563_34586 = state_31533__$1;
(statearr_31563_34586[(1)] = (8));

} else {
var statearr_31569_34587 = state_31533__$1;
(statearr_31569_34587[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31537 === (3))){
var inst_31531 = (state_31533[(2)]);
var state_31533__$1 = state_31533;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31533__$1,inst_31531);
} else {
if((state_val_31537 === (2))){
var state_31533__$1 = state_31533;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31533__$1,(4),ch);
} else {
if((state_val_31537 === (9))){
var inst_31519 = (state_31533[(9)]);
var inst_31505 = inst_31519;
var state_31533__$1 = (function (){var statearr_31576 = state_31533;
(statearr_31576[(7)] = inst_31505);

return statearr_31576;
})();
var statearr_31578_34590 = state_31533__$1;
(statearr_31578_34590[(2)] = null);

(statearr_31578_34590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31537 === (5))){
var inst_31505 = (state_31533[(7)]);
var state_31533__$1 = state_31533;
var statearr_31579_34592 = state_31533__$1;
(statearr_31579_34592[(2)] = inst_31505);

(statearr_31579_34592[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31537 === (10))){
var inst_31527 = (state_31533[(2)]);
var state_31533__$1 = state_31533;
var statearr_31584_34593 = state_31533__$1;
(statearr_31584_34593[(2)] = inst_31527);

(statearr_31584_34593[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31537 === (8))){
var inst_31519 = (state_31533[(9)]);
var inst_31523 = cljs.core.deref(inst_31519);
var state_31533__$1 = state_31533;
var statearr_31587_34596 = state_31533__$1;
(statearr_31587_34596[(2)] = inst_31523);

(statearr_31587_34596[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__29561__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29561__auto____0 = (function (){
var statearr_31595 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31595[(0)] = cljs$core$async$reduce_$_state_machine__29561__auto__);

(statearr_31595[(1)] = (1));

return statearr_31595;
});
var cljs$core$async$reduce_$_state_machine__29561__auto____1 = (function (state_31533){
while(true){
var ret_value__29562__auto__ = (function (){try{while(true){
var result__29563__auto__ = switch__29560__auto__(state_31533);
if(cljs.core.keyword_identical_QMARK_(result__29563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29563__auto__;
}
break;
}
}catch (e31597){var ex__29565__auto__ = e31597;
var statearr_31598_34603 = state_31533;
(statearr_31598_34603[(2)] = ex__29565__auto__);


if(cljs.core.seq((state_31533[(4)]))){
var statearr_31600_34605 = state_31533;
(statearr_31600_34605[(1)] = cljs.core.first((state_31533[(4)])));

} else {
throw ex__29565__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34606 = state_31533;
state_31533 = G__34606;
continue;
} else {
return ret_value__29562__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29561__auto__ = function(state_31533){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29561__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29561__auto____1.call(this,state_31533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29561__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29561__auto____0;
cljs$core$async$reduce_$_state_machine__29561__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29561__auto____1;
return cljs$core$async$reduce_$_state_machine__29561__auto__;
})()
})();
var state__30505__auto__ = (function (){var statearr_31602 = f__30504__auto__();
(statearr_31602[(6)] = c__30503__auto__);

return statearr_31602;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30505__auto__);
}));

return c__30503__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null, f));
var c__30503__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30504__auto__ = (function (){var switch__29560__auto__ = (function (state_31620){
var state_val_31621 = (state_31620[(1)]);
if((state_val_31621 === (1))){
var inst_31615 = cljs.core.async.reduce(f__$1,init,ch);
var state_31620__$1 = state_31620;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31620__$1,(2),inst_31615);
} else {
if((state_val_31621 === (2))){
var inst_31617 = (state_31620[(2)]);
var inst_31618 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_31617) : f__$1.call(null, inst_31617));
var state_31620__$1 = state_31620;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31620__$1,inst_31618);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__29561__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29561__auto____0 = (function (){
var statearr_31631 = [null,null,null,null,null,null,null];
(statearr_31631[(0)] = cljs$core$async$transduce_$_state_machine__29561__auto__);

(statearr_31631[(1)] = (1));

return statearr_31631;
});
var cljs$core$async$transduce_$_state_machine__29561__auto____1 = (function (state_31620){
while(true){
var ret_value__29562__auto__ = (function (){try{while(true){
var result__29563__auto__ = switch__29560__auto__(state_31620);
if(cljs.core.keyword_identical_QMARK_(result__29563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29563__auto__;
}
break;
}
}catch (e31632){var ex__29565__auto__ = e31632;
var statearr_31633_34609 = state_31620;
(statearr_31633_34609[(2)] = ex__29565__auto__);


if(cljs.core.seq((state_31620[(4)]))){
var statearr_31635_34614 = state_31620;
(statearr_31635_34614[(1)] = cljs.core.first((state_31620[(4)])));

} else {
throw ex__29565__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34615 = state_31620;
state_31620 = G__34615;
continue;
} else {
return ret_value__29562__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29561__auto__ = function(state_31620){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29561__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29561__auto____1.call(this,state_31620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29561__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29561__auto____0;
cljs$core$async$transduce_$_state_machine__29561__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29561__auto____1;
return cljs$core$async$transduce_$_state_machine__29561__auto__;
})()
})();
var state__30505__auto__ = (function (){var statearr_31637 = f__30504__auto__();
(statearr_31637[(6)] = c__30503__auto__);

return statearr_31637;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30505__auto__);
}));

return c__30503__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__31648 = arguments.length;
switch (G__31648) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__30503__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30504__auto__ = (function (){var switch__29560__auto__ = (function (state_31688){
var state_val_31689 = (state_31688[(1)]);
if((state_val_31689 === (7))){
var inst_31666 = (state_31688[(2)]);
var state_31688__$1 = state_31688;
var statearr_31691_34622 = state_31688__$1;
(statearr_31691_34622[(2)] = inst_31666);

(statearr_31691_34622[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31689 === (1))){
var inst_31660 = cljs.core.seq(coll);
var inst_31661 = inst_31660;
var state_31688__$1 = (function (){var statearr_31693 = state_31688;
(statearr_31693[(7)] = inst_31661);

return statearr_31693;
})();
var statearr_31698_34628 = state_31688__$1;
(statearr_31698_34628[(2)] = null);

(statearr_31698_34628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31689 === (4))){
var inst_31661 = (state_31688[(7)]);
var inst_31664 = cljs.core.first(inst_31661);
var state_31688__$1 = state_31688;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31688__$1,(7),ch,inst_31664);
} else {
if((state_val_31689 === (13))){
var inst_31682 = (state_31688[(2)]);
var state_31688__$1 = state_31688;
var statearr_31700_34639 = state_31688__$1;
(statearr_31700_34639[(2)] = inst_31682);

(statearr_31700_34639[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31689 === (6))){
var inst_31669 = (state_31688[(2)]);
var state_31688__$1 = state_31688;
if(cljs.core.truth_(inst_31669)){
var statearr_31707_34646 = state_31688__$1;
(statearr_31707_34646[(1)] = (8));

} else {
var statearr_31708_34647 = state_31688__$1;
(statearr_31708_34647[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31689 === (3))){
var inst_31686 = (state_31688[(2)]);
var state_31688__$1 = state_31688;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31688__$1,inst_31686);
} else {
if((state_val_31689 === (12))){
var state_31688__$1 = state_31688;
var statearr_31709_34648 = state_31688__$1;
(statearr_31709_34648[(2)] = null);

(statearr_31709_34648[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31689 === (2))){
var inst_31661 = (state_31688[(7)]);
var state_31688__$1 = state_31688;
if(cljs.core.truth_(inst_31661)){
var statearr_31710_34655 = state_31688__$1;
(statearr_31710_34655[(1)] = (4));

} else {
var statearr_31711_34656 = state_31688__$1;
(statearr_31711_34656[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31689 === (11))){
var inst_31679 = cljs.core.async.close_BANG_(ch);
var state_31688__$1 = state_31688;
var statearr_31714_34661 = state_31688__$1;
(statearr_31714_34661[(2)] = inst_31679);

(statearr_31714_34661[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31689 === (9))){
var state_31688__$1 = state_31688;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31716_34662 = state_31688__$1;
(statearr_31716_34662[(1)] = (11));

} else {
var statearr_31719_34663 = state_31688__$1;
(statearr_31719_34663[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31689 === (5))){
var inst_31661 = (state_31688[(7)]);
var state_31688__$1 = state_31688;
var statearr_31720_34664 = state_31688__$1;
(statearr_31720_34664[(2)] = inst_31661);

(statearr_31720_34664[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31689 === (10))){
var inst_31684 = (state_31688[(2)]);
var state_31688__$1 = state_31688;
var statearr_31721_34665 = state_31688__$1;
(statearr_31721_34665[(2)] = inst_31684);

(statearr_31721_34665[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31689 === (8))){
var inst_31661 = (state_31688[(7)]);
var inst_31674 = cljs.core.next(inst_31661);
var inst_31661__$1 = inst_31674;
var state_31688__$1 = (function (){var statearr_31723 = state_31688;
(statearr_31723[(7)] = inst_31661__$1);

return statearr_31723;
})();
var statearr_31724_34673 = state_31688__$1;
(statearr_31724_34673[(2)] = null);

(statearr_31724_34673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29561__auto__ = null;
var cljs$core$async$state_machine__29561__auto____0 = (function (){
var statearr_31725 = [null,null,null,null,null,null,null,null];
(statearr_31725[(0)] = cljs$core$async$state_machine__29561__auto__);

(statearr_31725[(1)] = (1));

return statearr_31725;
});
var cljs$core$async$state_machine__29561__auto____1 = (function (state_31688){
while(true){
var ret_value__29562__auto__ = (function (){try{while(true){
var result__29563__auto__ = switch__29560__auto__(state_31688);
if(cljs.core.keyword_identical_QMARK_(result__29563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29563__auto__;
}
break;
}
}catch (e31726){var ex__29565__auto__ = e31726;
var statearr_31727_34678 = state_31688;
(statearr_31727_34678[(2)] = ex__29565__auto__);


if(cljs.core.seq((state_31688[(4)]))){
var statearr_31728_34679 = state_31688;
(statearr_31728_34679[(1)] = cljs.core.first((state_31688[(4)])));

} else {
throw ex__29565__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34680 = state_31688;
state_31688 = G__34680;
continue;
} else {
return ret_value__29562__auto__;
}
break;
}
});
cljs$core$async$state_machine__29561__auto__ = function(state_31688){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29561__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29561__auto____1.call(this,state_31688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29561__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29561__auto____0;
cljs$core$async$state_machine__29561__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29561__auto____1;
return cljs$core$async$state_machine__29561__auto__;
})()
})();
var state__30505__auto__ = (function (){var statearr_31730 = f__30504__auto__();
(statearr_31730[(6)] = c__30503__auto__);

return statearr_31730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30505__auto__);
}));

return c__30503__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__31732 = arguments.length;
switch (G__31732) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_34684 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null, _));
} else {
var m__5349__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null, _));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_34684(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_34685 = (function (m,ch,close_QMARK_){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5351__auto__.call(null, m,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5349__auto__.call(null, m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_34685(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_34707 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_34707(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_34718 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_34718(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31760 = (function (ch,cs,meta31761){
this.ch = ch;
this.cs = cs;
this.meta31761 = meta31761;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31760.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31762,meta31761__$1){
var self__ = this;
var _31762__$1 = this;
return (new cljs.core.async.t_cljs$core$async31760(self__.ch,self__.cs,meta31761__$1));
}));

(cljs.core.async.t_cljs$core$async31760.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31762){
var self__ = this;
var _31762__$1 = this;
return self__.meta31761;
}));

(cljs.core.async.t_cljs$core$async31760.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31760.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31760.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31760.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async31760.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async31760.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async31760.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31761","meta31761",1819896155,null)], null);
}));

(cljs.core.async.t_cljs$core$async31760.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31760.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31760");

(cljs.core.async.t_cljs$core$async31760.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async31760");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31760.
 */
cljs.core.async.__GT_t_cljs$core$async31760 = (function cljs$core$async$__GT_t_cljs$core$async31760(ch,cs,meta31761){
return (new cljs.core.async.t_cljs$core$async31760(ch,cs,meta31761));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async31760(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__30503__auto___34752 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30504__auto__ = (function (){var switch__29560__auto__ = (function (state_31957){
var state_val_31958 = (state_31957[(1)]);
if((state_val_31958 === (7))){
var inst_31943 = (state_31957[(2)]);
var state_31957__$1 = state_31957;
var statearr_31963_34758 = state_31957__$1;
(statearr_31963_34758[(2)] = inst_31943);

(statearr_31963_34758[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (20))){
var inst_31818 = (state_31957[(7)]);
var inst_31832 = cljs.core.first(inst_31818);
var inst_31833 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31832,(0),null);
var inst_31834 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31832,(1),null);
var state_31957__$1 = (function (){var statearr_31964 = state_31957;
(statearr_31964[(8)] = inst_31833);

return statearr_31964;
})();
if(cljs.core.truth_(inst_31834)){
var statearr_31965_34762 = state_31957__$1;
(statearr_31965_34762[(1)] = (22));

} else {
var statearr_31966_34763 = state_31957__$1;
(statearr_31966_34763[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (27))){
var inst_31885 = (state_31957[(9)]);
var inst_31873 = (state_31957[(10)]);
var inst_31871 = (state_31957[(11)]);
var inst_31780 = (state_31957[(12)]);
var inst_31885__$1 = cljs.core._nth(inst_31871,inst_31873);
var inst_31886 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31885__$1,inst_31780,done);
var state_31957__$1 = (function (){var statearr_31968 = state_31957;
(statearr_31968[(9)] = inst_31885__$1);

return statearr_31968;
})();
if(cljs.core.truth_(inst_31886)){
var statearr_31969_34772 = state_31957__$1;
(statearr_31969_34772[(1)] = (30));

} else {
var statearr_31971_34773 = state_31957__$1;
(statearr_31971_34773[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (1))){
var state_31957__$1 = state_31957;
var statearr_31972_34783 = state_31957__$1;
(statearr_31972_34783[(2)] = null);

(statearr_31972_34783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (24))){
var inst_31818 = (state_31957[(7)]);
var inst_31839 = (state_31957[(2)]);
var inst_31841 = cljs.core.next(inst_31818);
var inst_31793 = inst_31841;
var inst_31794 = null;
var inst_31795 = (0);
var inst_31796 = (0);
var state_31957__$1 = (function (){var statearr_31977 = state_31957;
(statearr_31977[(13)] = inst_31794);

(statearr_31977[(14)] = inst_31839);

(statearr_31977[(15)] = inst_31795);

(statearr_31977[(16)] = inst_31796);

(statearr_31977[(17)] = inst_31793);

return statearr_31977;
})();
var statearr_31978_34794 = state_31957__$1;
(statearr_31978_34794[(2)] = null);

(statearr_31978_34794[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (39))){
var state_31957__$1 = state_31957;
var statearr_31982_34795 = state_31957__$1;
(statearr_31982_34795[(2)] = null);

(statearr_31982_34795[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (4))){
var inst_31780 = (state_31957[(12)]);
var inst_31780__$1 = (state_31957[(2)]);
var inst_31781 = (inst_31780__$1 == null);
var state_31957__$1 = (function (){var statearr_31983 = state_31957;
(statearr_31983[(12)] = inst_31780__$1);

return statearr_31983;
})();
if(cljs.core.truth_(inst_31781)){
var statearr_31984_34796 = state_31957__$1;
(statearr_31984_34796[(1)] = (5));

} else {
var statearr_31985_34797 = state_31957__$1;
(statearr_31985_34797[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (15))){
var inst_31794 = (state_31957[(13)]);
var inst_31795 = (state_31957[(15)]);
var inst_31796 = (state_31957[(16)]);
var inst_31793 = (state_31957[(17)]);
var inst_31813 = (state_31957[(2)]);
var inst_31815 = (inst_31796 + (1));
var tmp31979 = inst_31794;
var tmp31980 = inst_31795;
var tmp31981 = inst_31793;
var inst_31793__$1 = tmp31981;
var inst_31794__$1 = tmp31979;
var inst_31795__$1 = tmp31980;
var inst_31796__$1 = inst_31815;
var state_31957__$1 = (function (){var statearr_31986 = state_31957;
(statearr_31986[(18)] = inst_31813);

(statearr_31986[(13)] = inst_31794__$1);

(statearr_31986[(15)] = inst_31795__$1);

(statearr_31986[(16)] = inst_31796__$1);

(statearr_31986[(17)] = inst_31793__$1);

return statearr_31986;
})();
var statearr_31987_34804 = state_31957__$1;
(statearr_31987_34804[(2)] = null);

(statearr_31987_34804[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (21))){
var inst_31844 = (state_31957[(2)]);
var state_31957__$1 = state_31957;
var statearr_31991_34806 = state_31957__$1;
(statearr_31991_34806[(2)] = inst_31844);

(statearr_31991_34806[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (31))){
var inst_31885 = (state_31957[(9)]);
var inst_31895 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_31885);
var state_31957__$1 = state_31957;
var statearr_31996_34808 = state_31957__$1;
(statearr_31996_34808[(2)] = inst_31895);

(statearr_31996_34808[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (32))){
var inst_31873 = (state_31957[(10)]);
var inst_31871 = (state_31957[(11)]);
var inst_31870 = (state_31957[(19)]);
var inst_31872 = (state_31957[(20)]);
var inst_31897 = (state_31957[(2)]);
var inst_31901 = (inst_31873 + (1));
var tmp31988 = inst_31871;
var tmp31989 = inst_31870;
var tmp31990 = inst_31872;
var inst_31870__$1 = tmp31989;
var inst_31871__$1 = tmp31988;
var inst_31872__$1 = tmp31990;
var inst_31873__$1 = inst_31901;
var state_31957__$1 = (function (){var statearr_31997 = state_31957;
(statearr_31997[(10)] = inst_31873__$1);

(statearr_31997[(11)] = inst_31871__$1);

(statearr_31997[(19)] = inst_31870__$1);

(statearr_31997[(20)] = inst_31872__$1);

(statearr_31997[(21)] = inst_31897);

return statearr_31997;
})();
var statearr_32004_34813 = state_31957__$1;
(statearr_32004_34813[(2)] = null);

(statearr_32004_34813[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (40))){
var inst_31913 = (state_31957[(22)]);
var inst_31917 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_31913);
var state_31957__$1 = state_31957;
var statearr_32013_34820 = state_31957__$1;
(statearr_32013_34820[(2)] = inst_31917);

(statearr_32013_34820[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (33))){
var inst_31904 = (state_31957[(23)]);
var inst_31906 = cljs.core.chunked_seq_QMARK_(inst_31904);
var state_31957__$1 = state_31957;
if(inst_31906){
var statearr_32015_34822 = state_31957__$1;
(statearr_32015_34822[(1)] = (36));

} else {
var statearr_32016_34823 = state_31957__$1;
(statearr_32016_34823[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (13))){
var inst_31807 = (state_31957[(24)]);
var inst_31810 = cljs.core.async.close_BANG_(inst_31807);
var state_31957__$1 = state_31957;
var statearr_32020_34826 = state_31957__$1;
(statearr_32020_34826[(2)] = inst_31810);

(statearr_32020_34826[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (22))){
var inst_31833 = (state_31957[(8)]);
var inst_31836 = cljs.core.async.close_BANG_(inst_31833);
var state_31957__$1 = state_31957;
var statearr_32021_34835 = state_31957__$1;
(statearr_32021_34835[(2)] = inst_31836);

(statearr_32021_34835[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (36))){
var inst_31904 = (state_31957[(23)]);
var inst_31908 = cljs.core.chunk_first(inst_31904);
var inst_31909 = cljs.core.chunk_rest(inst_31904);
var inst_31910 = cljs.core.count(inst_31908);
var inst_31870 = inst_31909;
var inst_31871 = inst_31908;
var inst_31872 = inst_31910;
var inst_31873 = (0);
var state_31957__$1 = (function (){var statearr_32023 = state_31957;
(statearr_32023[(10)] = inst_31873);

(statearr_32023[(11)] = inst_31871);

(statearr_32023[(19)] = inst_31870);

(statearr_32023[(20)] = inst_31872);

return statearr_32023;
})();
var statearr_32024_34838 = state_31957__$1;
(statearr_32024_34838[(2)] = null);

(statearr_32024_34838[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (41))){
var inst_31904 = (state_31957[(23)]);
var inst_31919 = (state_31957[(2)]);
var inst_31920 = cljs.core.next(inst_31904);
var inst_31870 = inst_31920;
var inst_31871 = null;
var inst_31872 = (0);
var inst_31873 = (0);
var state_31957__$1 = (function (){var statearr_32025 = state_31957;
(statearr_32025[(10)] = inst_31873);

(statearr_32025[(11)] = inst_31871);

(statearr_32025[(19)] = inst_31870);

(statearr_32025[(20)] = inst_31872);

(statearr_32025[(25)] = inst_31919);

return statearr_32025;
})();
var statearr_32028_34839 = state_31957__$1;
(statearr_32028_34839[(2)] = null);

(statearr_32028_34839[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (43))){
var state_31957__$1 = state_31957;
var statearr_32031_34843 = state_31957__$1;
(statearr_32031_34843[(2)] = null);

(statearr_32031_34843[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (29))){
var inst_31928 = (state_31957[(2)]);
var state_31957__$1 = state_31957;
var statearr_32032_34844 = state_31957__$1;
(statearr_32032_34844[(2)] = inst_31928);

(statearr_32032_34844[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (44))){
var inst_31937 = (state_31957[(2)]);
var state_31957__$1 = (function (){var statearr_32036 = state_31957;
(statearr_32036[(26)] = inst_31937);

return statearr_32036;
})();
var statearr_32038_34849 = state_31957__$1;
(statearr_32038_34849[(2)] = null);

(statearr_32038_34849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (6))){
var inst_31858 = (state_31957[(27)]);
var inst_31854 = cljs.core.deref(cs);
var inst_31858__$1 = cljs.core.keys(inst_31854);
var inst_31862 = cljs.core.count(inst_31858__$1);
var inst_31864 = cljs.core.reset_BANG_(dctr,inst_31862);
var inst_31869 = cljs.core.seq(inst_31858__$1);
var inst_31870 = inst_31869;
var inst_31871 = null;
var inst_31872 = (0);
var inst_31873 = (0);
var state_31957__$1 = (function (){var statearr_32043 = state_31957;
(statearr_32043[(28)] = inst_31864);

(statearr_32043[(10)] = inst_31873);

(statearr_32043[(11)] = inst_31871);

(statearr_32043[(19)] = inst_31870);

(statearr_32043[(20)] = inst_31872);

(statearr_32043[(27)] = inst_31858__$1);

return statearr_32043;
})();
var statearr_32044_34859 = state_31957__$1;
(statearr_32044_34859[(2)] = null);

(statearr_32044_34859[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (28))){
var inst_31870 = (state_31957[(19)]);
var inst_31904 = (state_31957[(23)]);
var inst_31904__$1 = cljs.core.seq(inst_31870);
var state_31957__$1 = (function (){var statearr_32045 = state_31957;
(statearr_32045[(23)] = inst_31904__$1);

return statearr_32045;
})();
if(inst_31904__$1){
var statearr_32047_34861 = state_31957__$1;
(statearr_32047_34861[(1)] = (33));

} else {
var statearr_32048_34862 = state_31957__$1;
(statearr_32048_34862[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (25))){
var inst_31873 = (state_31957[(10)]);
var inst_31872 = (state_31957[(20)]);
var inst_31882 = (inst_31873 < inst_31872);
var inst_31883 = inst_31882;
var state_31957__$1 = state_31957;
if(cljs.core.truth_(inst_31883)){
var statearr_32051_34863 = state_31957__$1;
(statearr_32051_34863[(1)] = (27));

} else {
var statearr_32058_34864 = state_31957__$1;
(statearr_32058_34864[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (34))){
var state_31957__$1 = state_31957;
var statearr_32060_34865 = state_31957__$1;
(statearr_32060_34865[(2)] = null);

(statearr_32060_34865[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (17))){
var state_31957__$1 = state_31957;
var statearr_32069_34869 = state_31957__$1;
(statearr_32069_34869[(2)] = null);

(statearr_32069_34869[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (3))){
var inst_31946 = (state_31957[(2)]);
var state_31957__$1 = state_31957;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31957__$1,inst_31946);
} else {
if((state_val_31958 === (12))){
var inst_31849 = (state_31957[(2)]);
var state_31957__$1 = state_31957;
var statearr_32071_34870 = state_31957__$1;
(statearr_32071_34870[(2)] = inst_31849);

(statearr_32071_34870[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (2))){
var state_31957__$1 = state_31957;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31957__$1,(4),ch);
} else {
if((state_val_31958 === (23))){
var state_31957__$1 = state_31957;
var statearr_32076_34872 = state_31957__$1;
(statearr_32076_34872[(2)] = null);

(statearr_32076_34872[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (35))){
var inst_31926 = (state_31957[(2)]);
var state_31957__$1 = state_31957;
var statearr_32081_34874 = state_31957__$1;
(statearr_32081_34874[(2)] = inst_31926);

(statearr_32081_34874[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (19))){
var inst_31818 = (state_31957[(7)]);
var inst_31822 = cljs.core.chunk_first(inst_31818);
var inst_31824 = cljs.core.chunk_rest(inst_31818);
var inst_31825 = cljs.core.count(inst_31822);
var inst_31793 = inst_31824;
var inst_31794 = inst_31822;
var inst_31795 = inst_31825;
var inst_31796 = (0);
var state_31957__$1 = (function (){var statearr_32086 = state_31957;
(statearr_32086[(13)] = inst_31794);

(statearr_32086[(15)] = inst_31795);

(statearr_32086[(16)] = inst_31796);

(statearr_32086[(17)] = inst_31793);

return statearr_32086;
})();
var statearr_32087_34882 = state_31957__$1;
(statearr_32087_34882[(2)] = null);

(statearr_32087_34882[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (11))){
var inst_31818 = (state_31957[(7)]);
var inst_31793 = (state_31957[(17)]);
var inst_31818__$1 = cljs.core.seq(inst_31793);
var state_31957__$1 = (function (){var statearr_32091 = state_31957;
(statearr_32091[(7)] = inst_31818__$1);

return statearr_32091;
})();
if(inst_31818__$1){
var statearr_32094_34886 = state_31957__$1;
(statearr_32094_34886[(1)] = (16));

} else {
var statearr_32096_34888 = state_31957__$1;
(statearr_32096_34888[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (9))){
var inst_31851 = (state_31957[(2)]);
var state_31957__$1 = state_31957;
var statearr_32105_34895 = state_31957__$1;
(statearr_32105_34895[(2)] = inst_31851);

(statearr_32105_34895[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (5))){
var inst_31791 = cljs.core.deref(cs);
var inst_31792 = cljs.core.seq(inst_31791);
var inst_31793 = inst_31792;
var inst_31794 = null;
var inst_31795 = (0);
var inst_31796 = (0);
var state_31957__$1 = (function (){var statearr_32106 = state_31957;
(statearr_32106[(13)] = inst_31794);

(statearr_32106[(15)] = inst_31795);

(statearr_32106[(16)] = inst_31796);

(statearr_32106[(17)] = inst_31793);

return statearr_32106;
})();
var statearr_32107_34896 = state_31957__$1;
(statearr_32107_34896[(2)] = null);

(statearr_32107_34896[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (14))){
var state_31957__$1 = state_31957;
var statearr_32108_34901 = state_31957__$1;
(statearr_32108_34901[(2)] = null);

(statearr_32108_34901[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (45))){
var inst_31934 = (state_31957[(2)]);
var state_31957__$1 = state_31957;
var statearr_32110_34903 = state_31957__$1;
(statearr_32110_34903[(2)] = inst_31934);

(statearr_32110_34903[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (26))){
var inst_31858 = (state_31957[(27)]);
var inst_31930 = (state_31957[(2)]);
var inst_31931 = cljs.core.seq(inst_31858);
var state_31957__$1 = (function (){var statearr_32115 = state_31957;
(statearr_32115[(29)] = inst_31930);

return statearr_32115;
})();
if(inst_31931){
var statearr_32120_34904 = state_31957__$1;
(statearr_32120_34904[(1)] = (42));

} else {
var statearr_32122_34905 = state_31957__$1;
(statearr_32122_34905[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (16))){
var inst_31818 = (state_31957[(7)]);
var inst_31820 = cljs.core.chunked_seq_QMARK_(inst_31818);
var state_31957__$1 = state_31957;
if(inst_31820){
var statearr_32127_34906 = state_31957__$1;
(statearr_32127_34906[(1)] = (19));

} else {
var statearr_32128_34907 = state_31957__$1;
(statearr_32128_34907[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (38))){
var inst_31923 = (state_31957[(2)]);
var state_31957__$1 = state_31957;
var statearr_32132_34908 = state_31957__$1;
(statearr_32132_34908[(2)] = inst_31923);

(statearr_32132_34908[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (30))){
var state_31957__$1 = state_31957;
var statearr_32135_34909 = state_31957__$1;
(statearr_32135_34909[(2)] = null);

(statearr_32135_34909[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (10))){
var inst_31794 = (state_31957[(13)]);
var inst_31796 = (state_31957[(16)]);
var inst_31806 = cljs.core._nth(inst_31794,inst_31796);
var inst_31807 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31806,(0),null);
var inst_31808 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31806,(1),null);
var state_31957__$1 = (function (){var statearr_32164 = state_31957;
(statearr_32164[(24)] = inst_31807);

return statearr_32164;
})();
if(cljs.core.truth_(inst_31808)){
var statearr_32165_34910 = state_31957__$1;
(statearr_32165_34910[(1)] = (13));

} else {
var statearr_32167_34912 = state_31957__$1;
(statearr_32167_34912[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (18))){
var inst_31847 = (state_31957[(2)]);
var state_31957__$1 = state_31957;
var statearr_32172_34914 = state_31957__$1;
(statearr_32172_34914[(2)] = inst_31847);

(statearr_32172_34914[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (42))){
var state_31957__$1 = state_31957;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31957__$1,(45),dchan);
} else {
if((state_val_31958 === (37))){
var inst_31780 = (state_31957[(12)]);
var inst_31904 = (state_31957[(23)]);
var inst_31913 = (state_31957[(22)]);
var inst_31913__$1 = cljs.core.first(inst_31904);
var inst_31914 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31913__$1,inst_31780,done);
var state_31957__$1 = (function (){var statearr_32176 = state_31957;
(statearr_32176[(22)] = inst_31913__$1);

return statearr_32176;
})();
if(cljs.core.truth_(inst_31914)){
var statearr_32178_34920 = state_31957__$1;
(statearr_32178_34920[(1)] = (39));

} else {
var statearr_32180_34921 = state_31957__$1;
(statearr_32180_34921[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (8))){
var inst_31795 = (state_31957[(15)]);
var inst_31796 = (state_31957[(16)]);
var inst_31799 = (inst_31796 < inst_31795);
var inst_31800 = inst_31799;
var state_31957__$1 = state_31957;
if(cljs.core.truth_(inst_31800)){
var statearr_32184_34922 = state_31957__$1;
(statearr_32184_34922[(1)] = (10));

} else {
var statearr_32186_34923 = state_31957__$1;
(statearr_32186_34923[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__29561__auto__ = null;
var cljs$core$async$mult_$_state_machine__29561__auto____0 = (function (){
var statearr_32195 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32195[(0)] = cljs$core$async$mult_$_state_machine__29561__auto__);

(statearr_32195[(1)] = (1));

return statearr_32195;
});
var cljs$core$async$mult_$_state_machine__29561__auto____1 = (function (state_31957){
while(true){
var ret_value__29562__auto__ = (function (){try{while(true){
var result__29563__auto__ = switch__29560__auto__(state_31957);
if(cljs.core.keyword_identical_QMARK_(result__29563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29563__auto__;
}
break;
}
}catch (e32198){var ex__29565__auto__ = e32198;
var statearr_32201_34926 = state_31957;
(statearr_32201_34926[(2)] = ex__29565__auto__);


if(cljs.core.seq((state_31957[(4)]))){
var statearr_32206_34928 = state_31957;
(statearr_32206_34928[(1)] = cljs.core.first((state_31957[(4)])));

} else {
throw ex__29565__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34930 = state_31957;
state_31957 = G__34930;
continue;
} else {
return ret_value__29562__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29561__auto__ = function(state_31957){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29561__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29561__auto____1.call(this,state_31957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29561__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29561__auto____0;
cljs$core$async$mult_$_state_machine__29561__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29561__auto____1;
return cljs$core$async$mult_$_state_machine__29561__auto__;
})()
})();
var state__30505__auto__ = (function (){var statearr_32207 = f__30504__auto__();
(statearr_32207[(6)] = c__30503__auto___34752);

return statearr_32207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30505__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__32216 = arguments.length;
switch (G__32216) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_34937 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_34937(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_34938 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_34938(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_34940 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_34940(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_34945 = (function (m,state_map){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5351__auto__.call(null, m,state_map));
} else {
var m__5349__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5349__auto__.call(null, m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_34945(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_34957 = (function (m,mode){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5351__auto__.call(null, m,mode));
} else {
var m__5349__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5349__auto__.call(null, m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_34957(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___34959 = arguments.length;
var i__5727__auto___34961 = (0);
while(true){
if((i__5727__auto___34961 < len__5726__auto___34959)){
args__5732__auto__.push((arguments[i__5727__auto___34961]));

var G__34963 = (i__5727__auto___34961 + (1));
i__5727__auto___34961 = G__34963;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32312){
var map__32313 = p__32312;
var map__32313__$1 = cljs.core.__destructure_map(map__32313);
var opts = map__32313__$1;
var statearr_32314_34966 = state;
(statearr_32314_34966[(1)] = cont_block);


var temp__5823__auto__ = cljs.core.async.do_alts((function (val){
var statearr_32316_34970 = state;
(statearr_32316_34970[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5823__auto__)){
var cb = temp__5823__auto__;
var statearr_32317_34973 = state;
(statearr_32317_34973[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32300){
var G__32301 = cljs.core.first(seq32300);
var seq32300__$1 = cljs.core.next(seq32300);
var G__32302 = cljs.core.first(seq32300__$1);
var seq32300__$2 = cljs.core.next(seq32300__$1);
var G__32303 = cljs.core.first(seq32300__$2);
var seq32300__$3 = cljs.core.next(seq32300__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32301,G__32302,G__32303,seq32300__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32330 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32331){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta32331 = meta32331;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32330.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32332,meta32331__$1){
var self__ = this;
var _32332__$1 = this;
return (new cljs.core.async.t_cljs$core$async32330(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32331__$1));
}));

(cljs.core.async.t_cljs$core$async32330.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32332){
var self__ = this;
var _32332__$1 = this;
return self__.meta32331;
}));

(cljs.core.async.t_cljs$core$async32330.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32330.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async32330.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32330.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async32330.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async32330.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async32330.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async32330.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null, mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async32330.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta32331","meta32331",-11646946,null)], null);
}));

(cljs.core.async.t_cljs$core$async32330.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32330.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32330");

(cljs.core.async.t_cljs$core$async32330.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async32330");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32330.
 */
cljs.core.async.__GT_t_cljs$core$async32330 = (function cljs$core$async$__GT_t_cljs$core$async32330(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32331){
return (new cljs.core.async.t_cljs$core$async32330(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32331));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null, v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async32330(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__30503__auto___35005 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30504__auto__ = (function (){var switch__29560__auto__ = (function (state_32416){
var state_val_32417 = (state_32416[(1)]);
if((state_val_32417 === (7))){
var inst_32375 = (state_32416[(2)]);
var state_32416__$1 = state_32416;
if(cljs.core.truth_(inst_32375)){
var statearr_32422_35006 = state_32416__$1;
(statearr_32422_35006[(1)] = (8));

} else {
var statearr_32424_35007 = state_32416__$1;
(statearr_32424_35007[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32417 === (20))){
var inst_32367 = (state_32416[(7)]);
var state_32416__$1 = state_32416;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32416__$1,(23),out,inst_32367);
} else {
if((state_val_32417 === (1))){
var inst_32345 = calc_state();
var inst_32346 = cljs.core.__destructure_map(inst_32345);
var inst_32347 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32346,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32348 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32346,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32349 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32346,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32350 = inst_32345;
var state_32416__$1 = (function (){var statearr_32426 = state_32416;
(statearr_32426[(8)] = inst_32350);

(statearr_32426[(9)] = inst_32347);

(statearr_32426[(10)] = inst_32349);

(statearr_32426[(11)] = inst_32348);

return statearr_32426;
})();
var statearr_32429_35023 = state_32416__$1;
(statearr_32429_35023[(2)] = null);

(statearr_32429_35023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32417 === (24))){
var inst_32357 = (state_32416[(12)]);
var inst_32350 = inst_32357;
var state_32416__$1 = (function (){var statearr_32430 = state_32416;
(statearr_32430[(8)] = inst_32350);

return statearr_32430;
})();
var statearr_32431_35026 = state_32416__$1;
(statearr_32431_35026[(2)] = null);

(statearr_32431_35026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32417 === (4))){
var inst_32369 = (state_32416[(13)]);
var inst_32367 = (state_32416[(7)]);
var inst_32366 = (state_32416[(2)]);
var inst_32367__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32366,(0),null);
var inst_32368 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32366,(1),null);
var inst_32369__$1 = (inst_32367__$1 == null);
var state_32416__$1 = (function (){var statearr_32432 = state_32416;
(statearr_32432[(13)] = inst_32369__$1);

(statearr_32432[(14)] = inst_32368);

(statearr_32432[(7)] = inst_32367__$1);

return statearr_32432;
})();
if(cljs.core.truth_(inst_32369__$1)){
var statearr_32433_35035 = state_32416__$1;
(statearr_32433_35035[(1)] = (5));

} else {
var statearr_32434_35036 = state_32416__$1;
(statearr_32434_35036[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32417 === (15))){
var inst_32390 = (state_32416[(15)]);
var inst_32359 = (state_32416[(16)]);
var inst_32390__$1 = cljs.core.empty_QMARK_(inst_32359);
var state_32416__$1 = (function (){var statearr_32435 = state_32416;
(statearr_32435[(15)] = inst_32390__$1);

return statearr_32435;
})();
if(inst_32390__$1){
var statearr_32436_35037 = state_32416__$1;
(statearr_32436_35037[(1)] = (17));

} else {
var statearr_32437_35038 = state_32416__$1;
(statearr_32437_35038[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32417 === (21))){
var inst_32357 = (state_32416[(12)]);
var inst_32350 = inst_32357;
var state_32416__$1 = (function (){var statearr_32442 = state_32416;
(statearr_32442[(8)] = inst_32350);

return statearr_32442;
})();
var statearr_32447_35039 = state_32416__$1;
(statearr_32447_35039[(2)] = null);

(statearr_32447_35039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32417 === (13))){
var inst_32383 = (state_32416[(2)]);
var inst_32384 = calc_state();
var inst_32350 = inst_32384;
var state_32416__$1 = (function (){var statearr_32455 = state_32416;
(statearr_32455[(8)] = inst_32350);

(statearr_32455[(17)] = inst_32383);

return statearr_32455;
})();
var statearr_32456_35043 = state_32416__$1;
(statearr_32456_35043[(2)] = null);

(statearr_32456_35043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32417 === (22))){
var inst_32410 = (state_32416[(2)]);
var state_32416__$1 = state_32416;
var statearr_32457_35048 = state_32416__$1;
(statearr_32457_35048[(2)] = inst_32410);

(statearr_32457_35048[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32417 === (6))){
var inst_32368 = (state_32416[(14)]);
var inst_32373 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32368,change);
var state_32416__$1 = state_32416;
var statearr_32460_35049 = state_32416__$1;
(statearr_32460_35049[(2)] = inst_32373);

(statearr_32460_35049[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32417 === (25))){
var state_32416__$1 = state_32416;
var statearr_32461_35050 = state_32416__$1;
(statearr_32461_35050[(2)] = null);

(statearr_32461_35050[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32417 === (17))){
var inst_32368 = (state_32416[(14)]);
var inst_32360 = (state_32416[(18)]);
var inst_32392 = (inst_32360.cljs$core$IFn$_invoke$arity$1 ? inst_32360.cljs$core$IFn$_invoke$arity$1(inst_32368) : inst_32360.call(null, inst_32368));
var inst_32393 = cljs.core.not(inst_32392);
var state_32416__$1 = state_32416;
var statearr_32476_35058 = state_32416__$1;
(statearr_32476_35058[(2)] = inst_32393);

(statearr_32476_35058[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32417 === (3))){
var inst_32414 = (state_32416[(2)]);
var state_32416__$1 = state_32416;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32416__$1,inst_32414);
} else {
if((state_val_32417 === (12))){
var state_32416__$1 = state_32416;
var statearr_32485_35059 = state_32416__$1;
(statearr_32485_35059[(2)] = null);

(statearr_32485_35059[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32417 === (2))){
var inst_32350 = (state_32416[(8)]);
var inst_32357 = (state_32416[(12)]);
var inst_32357__$1 = cljs.core.__destructure_map(inst_32350);
var inst_32359 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32357__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32360 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32357__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32361 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32357__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32416__$1 = (function (){var statearr_32489 = state_32416;
(statearr_32489[(12)] = inst_32357__$1);

(statearr_32489[(18)] = inst_32360);

(statearr_32489[(16)] = inst_32359);

return statearr_32489;
})();
return cljs.core.async.ioc_alts_BANG_(state_32416__$1,(4),inst_32361);
} else {
if((state_val_32417 === (23))){
var inst_32401 = (state_32416[(2)]);
var state_32416__$1 = state_32416;
if(cljs.core.truth_(inst_32401)){
var statearr_32492_35060 = state_32416__$1;
(statearr_32492_35060[(1)] = (24));

} else {
var statearr_32499_35061 = state_32416__$1;
(statearr_32499_35061[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32417 === (19))){
var inst_32396 = (state_32416[(2)]);
var state_32416__$1 = state_32416;
var statearr_32509_35062 = state_32416__$1;
(statearr_32509_35062[(2)] = inst_32396);

(statearr_32509_35062[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32417 === (11))){
var inst_32368 = (state_32416[(14)]);
var inst_32379 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_32368);
var state_32416__$1 = state_32416;
var statearr_32516_35063 = state_32416__$1;
(statearr_32516_35063[(2)] = inst_32379);

(statearr_32516_35063[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32417 === (9))){
var inst_32368 = (state_32416[(14)]);
var inst_32387 = (state_32416[(19)]);
var inst_32359 = (state_32416[(16)]);
var inst_32387__$1 = (inst_32359.cljs$core$IFn$_invoke$arity$1 ? inst_32359.cljs$core$IFn$_invoke$arity$1(inst_32368) : inst_32359.call(null, inst_32368));
var state_32416__$1 = (function (){var statearr_32518 = state_32416;
(statearr_32518[(19)] = inst_32387__$1);

return statearr_32518;
})();
if(cljs.core.truth_(inst_32387__$1)){
var statearr_32521_35064 = state_32416__$1;
(statearr_32521_35064[(1)] = (14));

} else {
var statearr_32522_35065 = state_32416__$1;
(statearr_32522_35065[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32417 === (5))){
var inst_32369 = (state_32416[(13)]);
var state_32416__$1 = state_32416;
var statearr_32530_35066 = state_32416__$1;
(statearr_32530_35066[(2)] = inst_32369);

(statearr_32530_35066[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32417 === (14))){
var inst_32387 = (state_32416[(19)]);
var state_32416__$1 = state_32416;
var statearr_32536_35067 = state_32416__$1;
(statearr_32536_35067[(2)] = inst_32387);

(statearr_32536_35067[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32417 === (26))){
var inst_32406 = (state_32416[(2)]);
var state_32416__$1 = state_32416;
var statearr_32538_35068 = state_32416__$1;
(statearr_32538_35068[(2)] = inst_32406);

(statearr_32538_35068[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32417 === (16))){
var inst_32398 = (state_32416[(2)]);
var state_32416__$1 = state_32416;
if(cljs.core.truth_(inst_32398)){
var statearr_32540_35069 = state_32416__$1;
(statearr_32540_35069[(1)] = (20));

} else {
var statearr_32546_35070 = state_32416__$1;
(statearr_32546_35070[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32417 === (10))){
var inst_32412 = (state_32416[(2)]);
var state_32416__$1 = state_32416;
var statearr_32547_35077 = state_32416__$1;
(statearr_32547_35077[(2)] = inst_32412);

(statearr_32547_35077[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32417 === (18))){
var inst_32390 = (state_32416[(15)]);
var state_32416__$1 = state_32416;
var statearr_32548_35078 = state_32416__$1;
(statearr_32548_35078[(2)] = inst_32390);

(statearr_32548_35078[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32417 === (8))){
var inst_32367 = (state_32416[(7)]);
var inst_32377 = (inst_32367 == null);
var state_32416__$1 = state_32416;
if(cljs.core.truth_(inst_32377)){
var statearr_32549_35079 = state_32416__$1;
(statearr_32549_35079[(1)] = (11));

} else {
var statearr_32550_35080 = state_32416__$1;
(statearr_32550_35080[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__29561__auto__ = null;
var cljs$core$async$mix_$_state_machine__29561__auto____0 = (function (){
var statearr_32551 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32551[(0)] = cljs$core$async$mix_$_state_machine__29561__auto__);

(statearr_32551[(1)] = (1));

return statearr_32551;
});
var cljs$core$async$mix_$_state_machine__29561__auto____1 = (function (state_32416){
while(true){
var ret_value__29562__auto__ = (function (){try{while(true){
var result__29563__auto__ = switch__29560__auto__(state_32416);
if(cljs.core.keyword_identical_QMARK_(result__29563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29563__auto__;
}
break;
}
}catch (e32556){var ex__29565__auto__ = e32556;
var statearr_32557_35083 = state_32416;
(statearr_32557_35083[(2)] = ex__29565__auto__);


if(cljs.core.seq((state_32416[(4)]))){
var statearr_32558_35084 = state_32416;
(statearr_32558_35084[(1)] = cljs.core.first((state_32416[(4)])));

} else {
throw ex__29565__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35085 = state_32416;
state_32416 = G__35085;
continue;
} else {
return ret_value__29562__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29561__auto__ = function(state_32416){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29561__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29561__auto____1.call(this,state_32416);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29561__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29561__auto____0;
cljs$core$async$mix_$_state_machine__29561__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29561__auto____1;
return cljs$core$async$mix_$_state_machine__29561__auto__;
})()
})();
var state__30505__auto__ = (function (){var statearr_32560 = f__30504__auto__();
(statearr_32560[(6)] = c__30503__auto___35005);

return statearr_32560;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30505__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_35086 = (function (p,v,ch,close_QMARK_){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5351__auto__.call(null, p,v,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5349__auto__.call(null, p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_35086(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_35096 = (function (p,v,ch){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5351__auto__.call(null, p,v,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5349__auto__.call(null, p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_35096(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_35109 = (function() {
var G__35110 = null;
var G__35110__1 = (function (p){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5351__auto__.call(null, p));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5349__auto__.call(null, p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__35110__2 = (function (p,v){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5351__auto__.call(null, p,v));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5349__auto__.call(null, p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__35110 = function(p,v){
switch(arguments.length){
case 1:
return G__35110__1.call(this,p);
case 2:
return G__35110__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__35110.cljs$core$IFn$_invoke$arity$1 = G__35110__1;
G__35110.cljs$core$IFn$_invoke$arity$2 = G__35110__2;
return G__35110;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__32576 = arguments.length;
switch (G__32576) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35109(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35109(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32608 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32609){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32609 = meta32609;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32608.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32610,meta32609__$1){
var self__ = this;
var _32610__$1 = this;
return (new cljs.core.async.t_cljs$core$async32608(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32609__$1));
}));

(cljs.core.async.t_cljs$core$async32608.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32610){
var self__ = this;
var _32610__$1 = this;
return self__.meta32609;
}));

(cljs.core.async.t_cljs$core$async32608.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32608.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32608.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32608.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null, topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async32608.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5823__auto__)){
var m = temp__5823__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async32608.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async32608.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async32608.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32609","meta32609",-1062011663,null)], null);
}));

(cljs.core.async.t_cljs$core$async32608.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32608.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32608");

(cljs.core.async.t_cljs$core$async32608.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async32608");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32608.
 */
cljs.core.async.__GT_t_cljs$core$async32608 = (function cljs$core$async$__GT_t_cljs$core$async32608(ch,topic_fn,buf_fn,mults,ensure_mult,meta32609){
return (new cljs.core.async.t_cljs$core$async32608(ch,topic_fn,buf_fn,mults,ensure_mult,meta32609));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__32603 = arguments.length;
switch (G__32603) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__32595_SHARP_){
if(cljs.core.truth_((p1__32595_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__32595_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__32595_SHARP_.call(null, topic)))){
return p1__32595_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__32595_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null, topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async32608(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__30503__auto___35132 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30504__auto__ = (function (){var switch__29560__auto__ = (function (state_32697){
var state_val_32698 = (state_32697[(1)]);
if((state_val_32698 === (7))){
var inst_32692 = (state_32697[(2)]);
var state_32697__$1 = state_32697;
var statearr_32702_35133 = state_32697__$1;
(statearr_32702_35133[(2)] = inst_32692);

(statearr_32702_35133[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32698 === (20))){
var state_32697__$1 = state_32697;
var statearr_32703_35134 = state_32697__$1;
(statearr_32703_35134[(2)] = null);

(statearr_32703_35134[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32698 === (1))){
var state_32697__$1 = state_32697;
var statearr_32708_35135 = state_32697__$1;
(statearr_32708_35135[(2)] = null);

(statearr_32708_35135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32698 === (24))){
var inst_32675 = (state_32697[(7)]);
var inst_32684 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_32675);
var state_32697__$1 = state_32697;
var statearr_32710_35136 = state_32697__$1;
(statearr_32710_35136[(2)] = inst_32684);

(statearr_32710_35136[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32698 === (4))){
var inst_32621 = (state_32697[(8)]);
var inst_32621__$1 = (state_32697[(2)]);
var inst_32623 = (inst_32621__$1 == null);
var state_32697__$1 = (function (){var statearr_32715 = state_32697;
(statearr_32715[(8)] = inst_32621__$1);

return statearr_32715;
})();
if(cljs.core.truth_(inst_32623)){
var statearr_32716_35138 = state_32697__$1;
(statearr_32716_35138[(1)] = (5));

} else {
var statearr_32721_35139 = state_32697__$1;
(statearr_32721_35139[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32698 === (15))){
var inst_32669 = (state_32697[(2)]);
var state_32697__$1 = state_32697;
var statearr_32726_35140 = state_32697__$1;
(statearr_32726_35140[(2)] = inst_32669);

(statearr_32726_35140[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32698 === (21))){
var inst_32689 = (state_32697[(2)]);
var state_32697__$1 = (function (){var statearr_32727 = state_32697;
(statearr_32727[(9)] = inst_32689);

return statearr_32727;
})();
var statearr_32728_35145 = state_32697__$1;
(statearr_32728_35145[(2)] = null);

(statearr_32728_35145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32698 === (13))){
var inst_32649 = (state_32697[(10)]);
var inst_32651 = cljs.core.chunked_seq_QMARK_(inst_32649);
var state_32697__$1 = state_32697;
if(inst_32651){
var statearr_32729_35147 = state_32697__$1;
(statearr_32729_35147[(1)] = (16));

} else {
var statearr_32735_35149 = state_32697__$1;
(statearr_32735_35149[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32698 === (22))){
var inst_32681 = (state_32697[(2)]);
var state_32697__$1 = state_32697;
if(cljs.core.truth_(inst_32681)){
var statearr_32736_35151 = state_32697__$1;
(statearr_32736_35151[(1)] = (23));

} else {
var statearr_32737_35152 = state_32697__$1;
(statearr_32737_35152[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32698 === (6))){
var inst_32621 = (state_32697[(8)]);
var inst_32675 = (state_32697[(7)]);
var inst_32677 = (state_32697[(11)]);
var inst_32675__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_32621) : topic_fn.call(null, inst_32621));
var inst_32676 = cljs.core.deref(mults);
var inst_32677__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32676,inst_32675__$1);
var state_32697__$1 = (function (){var statearr_32738 = state_32697;
(statearr_32738[(7)] = inst_32675__$1);

(statearr_32738[(11)] = inst_32677__$1);

return statearr_32738;
})();
if(cljs.core.truth_(inst_32677__$1)){
var statearr_32739_35153 = state_32697__$1;
(statearr_32739_35153[(1)] = (19));

} else {
var statearr_32740_35154 = state_32697__$1;
(statearr_32740_35154[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32698 === (25))){
var inst_32686 = (state_32697[(2)]);
var state_32697__$1 = state_32697;
var statearr_32741_35155 = state_32697__$1;
(statearr_32741_35155[(2)] = inst_32686);

(statearr_32741_35155[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32698 === (17))){
var inst_32649 = (state_32697[(10)]);
var inst_32658 = cljs.core.first(inst_32649);
var inst_32661 = cljs.core.async.muxch_STAR_(inst_32658);
var inst_32662 = cljs.core.async.close_BANG_(inst_32661);
var inst_32663 = cljs.core.next(inst_32649);
var inst_32633 = inst_32663;
var inst_32634 = null;
var inst_32635 = (0);
var inst_32636 = (0);
var state_32697__$1 = (function (){var statearr_32742 = state_32697;
(statearr_32742[(12)] = inst_32635);

(statearr_32742[(13)] = inst_32634);

(statearr_32742[(14)] = inst_32636);

(statearr_32742[(15)] = inst_32662);

(statearr_32742[(16)] = inst_32633);

return statearr_32742;
})();
var statearr_32743_35158 = state_32697__$1;
(statearr_32743_35158[(2)] = null);

(statearr_32743_35158[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32698 === (3))){
var inst_32695 = (state_32697[(2)]);
var state_32697__$1 = state_32697;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32697__$1,inst_32695);
} else {
if((state_val_32698 === (12))){
var inst_32671 = (state_32697[(2)]);
var state_32697__$1 = state_32697;
var statearr_32756_35159 = state_32697__$1;
(statearr_32756_35159[(2)] = inst_32671);

(statearr_32756_35159[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32698 === (2))){
var state_32697__$1 = state_32697;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32697__$1,(4),ch);
} else {
if((state_val_32698 === (23))){
var state_32697__$1 = state_32697;
var statearr_32761_35160 = state_32697__$1;
(statearr_32761_35160[(2)] = null);

(statearr_32761_35160[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32698 === (19))){
var inst_32621 = (state_32697[(8)]);
var inst_32677 = (state_32697[(11)]);
var inst_32679 = cljs.core.async.muxch_STAR_(inst_32677);
var state_32697__$1 = state_32697;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32697__$1,(22),inst_32679,inst_32621);
} else {
if((state_val_32698 === (11))){
var inst_32649 = (state_32697[(10)]);
var inst_32633 = (state_32697[(16)]);
var inst_32649__$1 = cljs.core.seq(inst_32633);
var state_32697__$1 = (function (){var statearr_32763 = state_32697;
(statearr_32763[(10)] = inst_32649__$1);

return statearr_32763;
})();
if(inst_32649__$1){
var statearr_32771_35161 = state_32697__$1;
(statearr_32771_35161[(1)] = (13));

} else {
var statearr_32774_35166 = state_32697__$1;
(statearr_32774_35166[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32698 === (9))){
var inst_32673 = (state_32697[(2)]);
var state_32697__$1 = state_32697;
var statearr_32782_35167 = state_32697__$1;
(statearr_32782_35167[(2)] = inst_32673);

(statearr_32782_35167[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32698 === (5))){
var inst_32630 = cljs.core.deref(mults);
var inst_32631 = cljs.core.vals(inst_32630);
var inst_32632 = cljs.core.seq(inst_32631);
var inst_32633 = inst_32632;
var inst_32634 = null;
var inst_32635 = (0);
var inst_32636 = (0);
var state_32697__$1 = (function (){var statearr_32789 = state_32697;
(statearr_32789[(12)] = inst_32635);

(statearr_32789[(13)] = inst_32634);

(statearr_32789[(14)] = inst_32636);

(statearr_32789[(16)] = inst_32633);

return statearr_32789;
})();
var statearr_32790_35174 = state_32697__$1;
(statearr_32790_35174[(2)] = null);

(statearr_32790_35174[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32698 === (14))){
var state_32697__$1 = state_32697;
var statearr_32797_35176 = state_32697__$1;
(statearr_32797_35176[(2)] = null);

(statearr_32797_35176[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32698 === (16))){
var inst_32649 = (state_32697[(10)]);
var inst_32653 = cljs.core.chunk_first(inst_32649);
var inst_32654 = cljs.core.chunk_rest(inst_32649);
var inst_32655 = cljs.core.count(inst_32653);
var inst_32633 = inst_32654;
var inst_32634 = inst_32653;
var inst_32635 = inst_32655;
var inst_32636 = (0);
var state_32697__$1 = (function (){var statearr_32800 = state_32697;
(statearr_32800[(12)] = inst_32635);

(statearr_32800[(13)] = inst_32634);

(statearr_32800[(14)] = inst_32636);

(statearr_32800[(16)] = inst_32633);

return statearr_32800;
})();
var statearr_32806_35180 = state_32697__$1;
(statearr_32806_35180[(2)] = null);

(statearr_32806_35180[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32698 === (10))){
var inst_32635 = (state_32697[(12)]);
var inst_32634 = (state_32697[(13)]);
var inst_32636 = (state_32697[(14)]);
var inst_32633 = (state_32697[(16)]);
var inst_32641 = cljs.core._nth(inst_32634,inst_32636);
var inst_32642 = cljs.core.async.muxch_STAR_(inst_32641);
var inst_32643 = cljs.core.async.close_BANG_(inst_32642);
var inst_32645 = (inst_32636 + (1));
var tmp32793 = inst_32635;
var tmp32794 = inst_32634;
var tmp32795 = inst_32633;
var inst_32633__$1 = tmp32795;
var inst_32634__$1 = tmp32794;
var inst_32635__$1 = tmp32793;
var inst_32636__$1 = inst_32645;
var state_32697__$1 = (function (){var statearr_32815 = state_32697;
(statearr_32815[(12)] = inst_32635__$1);

(statearr_32815[(13)] = inst_32634__$1);

(statearr_32815[(14)] = inst_32636__$1);

(statearr_32815[(17)] = inst_32643);

(statearr_32815[(16)] = inst_32633__$1);

return statearr_32815;
})();
var statearr_32820_35181 = state_32697__$1;
(statearr_32820_35181[(2)] = null);

(statearr_32820_35181[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32698 === (18))){
var inst_32666 = (state_32697[(2)]);
var state_32697__$1 = state_32697;
var statearr_32827_35182 = state_32697__$1;
(statearr_32827_35182[(2)] = inst_32666);

(statearr_32827_35182[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32698 === (8))){
var inst_32635 = (state_32697[(12)]);
var inst_32636 = (state_32697[(14)]);
var inst_32638 = (inst_32636 < inst_32635);
var inst_32639 = inst_32638;
var state_32697__$1 = state_32697;
if(cljs.core.truth_(inst_32639)){
var statearr_32829_35183 = state_32697__$1;
(statearr_32829_35183[(1)] = (10));

} else {
var statearr_32830_35184 = state_32697__$1;
(statearr_32830_35184[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29561__auto__ = null;
var cljs$core$async$state_machine__29561__auto____0 = (function (){
var statearr_32838 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32838[(0)] = cljs$core$async$state_machine__29561__auto__);

(statearr_32838[(1)] = (1));

return statearr_32838;
});
var cljs$core$async$state_machine__29561__auto____1 = (function (state_32697){
while(true){
var ret_value__29562__auto__ = (function (){try{while(true){
var result__29563__auto__ = switch__29560__auto__(state_32697);
if(cljs.core.keyword_identical_QMARK_(result__29563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29563__auto__;
}
break;
}
}catch (e32841){var ex__29565__auto__ = e32841;
var statearr_32843_35189 = state_32697;
(statearr_32843_35189[(2)] = ex__29565__auto__);


if(cljs.core.seq((state_32697[(4)]))){
var statearr_32846_35190 = state_32697;
(statearr_32846_35190[(1)] = cljs.core.first((state_32697[(4)])));

} else {
throw ex__29565__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35191 = state_32697;
state_32697 = G__35191;
continue;
} else {
return ret_value__29562__auto__;
}
break;
}
});
cljs$core$async$state_machine__29561__auto__ = function(state_32697){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29561__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29561__auto____1.call(this,state_32697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29561__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29561__auto____0;
cljs$core$async$state_machine__29561__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29561__auto____1;
return cljs$core$async$state_machine__29561__auto__;
})()
})();
var state__30505__auto__ = (function (){var statearr_32849 = f__30504__auto__();
(statearr_32849[(6)] = c__30503__auto___35132);

return statearr_32849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30505__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__32853 = arguments.length;
switch (G__32853) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__32859 = arguments.length;
switch (G__32859) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__32865 = arguments.length;
switch (G__32865) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__30503__auto___35206 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30504__auto__ = (function (){var switch__29560__auto__ = (function (state_32951){
var state_val_32952 = (state_32951[(1)]);
if((state_val_32952 === (7))){
var state_32951__$1 = state_32951;
var statearr_32953_35209 = state_32951__$1;
(statearr_32953_35209[(2)] = null);

(statearr_32953_35209[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32952 === (1))){
var state_32951__$1 = state_32951;
var statearr_32955_35210 = state_32951__$1;
(statearr_32955_35210[(2)] = null);

(statearr_32955_35210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32952 === (4))){
var inst_32885 = (state_32951[(7)]);
var inst_32895 = (state_32951[(8)]);
var inst_32900 = (inst_32895 < inst_32885);
var state_32951__$1 = state_32951;
if(cljs.core.truth_(inst_32900)){
var statearr_32956_35211 = state_32951__$1;
(statearr_32956_35211[(1)] = (6));

} else {
var statearr_32960_35212 = state_32951__$1;
(statearr_32960_35212[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32952 === (15))){
var inst_32937 = (state_32951[(9)]);
var inst_32942 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_32937);
var state_32951__$1 = state_32951;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32951__$1,(17),out,inst_32942);
} else {
if((state_val_32952 === (13))){
var inst_32937 = (state_32951[(9)]);
var inst_32937__$1 = (state_32951[(2)]);
var inst_32938 = cljs.core.some(cljs.core.nil_QMARK_,inst_32937__$1);
var state_32951__$1 = (function (){var statearr_32962 = state_32951;
(statearr_32962[(9)] = inst_32937__$1);

return statearr_32962;
})();
if(cljs.core.truth_(inst_32938)){
var statearr_32963_35213 = state_32951__$1;
(statearr_32963_35213[(1)] = (14));

} else {
var statearr_32964_35214 = state_32951__$1;
(statearr_32964_35214[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32952 === (6))){
var state_32951__$1 = state_32951;
var statearr_32965_35215 = state_32951__$1;
(statearr_32965_35215[(2)] = null);

(statearr_32965_35215[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32952 === (17))){
var inst_32944 = (state_32951[(2)]);
var state_32951__$1 = (function (){var statearr_32977 = state_32951;
(statearr_32977[(10)] = inst_32944);

return statearr_32977;
})();
var statearr_32978_35216 = state_32951__$1;
(statearr_32978_35216[(2)] = null);

(statearr_32978_35216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32952 === (3))){
var inst_32949 = (state_32951[(2)]);
var state_32951__$1 = state_32951;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32951__$1,inst_32949);
} else {
if((state_val_32952 === (12))){
var _ = (function (){var statearr_32980 = state_32951;
(statearr_32980[(4)] = cljs.core.rest((state_32951[(4)])));

return statearr_32980;
})();
var state_32951__$1 = state_32951;
var ex32975 = (state_32951__$1[(2)]);
var statearr_32983_35217 = state_32951__$1;
(statearr_32983_35217[(5)] = ex32975);


if((ex32975 instanceof Object)){
var statearr_32984_35220 = state_32951__$1;
(statearr_32984_35220[(1)] = (11));

(statearr_32984_35220[(5)] = null);

} else {
throw ex32975;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32952 === (2))){
var inst_32884 = cljs.core.reset_BANG_(dctr,cnt);
var inst_32885 = cnt;
var inst_32895 = (0);
var state_32951__$1 = (function (){var statearr_32989 = state_32951;
(statearr_32989[(7)] = inst_32885);

(statearr_32989[(8)] = inst_32895);

(statearr_32989[(11)] = inst_32884);

return statearr_32989;
})();
var statearr_32990_35225 = state_32951__$1;
(statearr_32990_35225[(2)] = null);

(statearr_32990_35225[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32952 === (11))){
var inst_32903 = (state_32951[(2)]);
var inst_32904 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_32951__$1 = (function (){var statearr_32995 = state_32951;
(statearr_32995[(12)] = inst_32903);

return statearr_32995;
})();
var statearr_33000_35227 = state_32951__$1;
(statearr_33000_35227[(2)] = inst_32904);

(statearr_33000_35227[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32952 === (9))){
var inst_32895 = (state_32951[(8)]);
var _ = (function (){var statearr_33005 = state_32951;
(statearr_33005[(4)] = cljs.core.cons((12),(state_32951[(4)])));

return statearr_33005;
})();
var inst_32915 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_32895) : chs__$1.call(null, inst_32895));
var inst_32916 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_32895) : done.call(null, inst_32895));
var inst_32917 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_32915,inst_32916);
var ___$1 = (function (){var statearr_33018 = state_32951;
(statearr_33018[(4)] = cljs.core.rest((state_32951[(4)])));

return statearr_33018;
})();
var state_32951__$1 = state_32951;
var statearr_33022_35228 = state_32951__$1;
(statearr_33022_35228[(2)] = inst_32917);

(statearr_33022_35228[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32952 === (5))){
var inst_32931 = (state_32951[(2)]);
var state_32951__$1 = (function (){var statearr_33025 = state_32951;
(statearr_33025[(13)] = inst_32931);

return statearr_33025;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32951__$1,(13),dchan);
} else {
if((state_val_32952 === (14))){
var inst_32940 = cljs.core.async.close_BANG_(out);
var state_32951__$1 = state_32951;
var statearr_33028_35229 = state_32951__$1;
(statearr_33028_35229[(2)] = inst_32940);

(statearr_33028_35229[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32952 === (16))){
var inst_32947 = (state_32951[(2)]);
var state_32951__$1 = state_32951;
var statearr_33030_35234 = state_32951__$1;
(statearr_33030_35234[(2)] = inst_32947);

(statearr_33030_35234[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32952 === (10))){
var inst_32895 = (state_32951[(8)]);
var inst_32924 = (state_32951[(2)]);
var inst_32925 = (inst_32895 + (1));
var inst_32895__$1 = inst_32925;
var state_32951__$1 = (function (){var statearr_33031 = state_32951;
(statearr_33031[(14)] = inst_32924);

(statearr_33031[(8)] = inst_32895__$1);

return statearr_33031;
})();
var statearr_33032_35235 = state_32951__$1;
(statearr_33032_35235[(2)] = null);

(statearr_33032_35235[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32952 === (8))){
var inst_32929 = (state_32951[(2)]);
var state_32951__$1 = state_32951;
var statearr_33037_35236 = state_32951__$1;
(statearr_33037_35236[(2)] = inst_32929);

(statearr_33037_35236[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29561__auto__ = null;
var cljs$core$async$state_machine__29561__auto____0 = (function (){
var statearr_33038 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33038[(0)] = cljs$core$async$state_machine__29561__auto__);

(statearr_33038[(1)] = (1));

return statearr_33038;
});
var cljs$core$async$state_machine__29561__auto____1 = (function (state_32951){
while(true){
var ret_value__29562__auto__ = (function (){try{while(true){
var result__29563__auto__ = switch__29560__auto__(state_32951);
if(cljs.core.keyword_identical_QMARK_(result__29563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29563__auto__;
}
break;
}
}catch (e33039){var ex__29565__auto__ = e33039;
var statearr_33040_35240 = state_32951;
(statearr_33040_35240[(2)] = ex__29565__auto__);


if(cljs.core.seq((state_32951[(4)]))){
var statearr_33041_35242 = state_32951;
(statearr_33041_35242[(1)] = cljs.core.first((state_32951[(4)])));

} else {
throw ex__29565__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35243 = state_32951;
state_32951 = G__35243;
continue;
} else {
return ret_value__29562__auto__;
}
break;
}
});
cljs$core$async$state_machine__29561__auto__ = function(state_32951){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29561__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29561__auto____1.call(this,state_32951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29561__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29561__auto____0;
cljs$core$async$state_machine__29561__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29561__auto____1;
return cljs$core$async$state_machine__29561__auto__;
})()
})();
var state__30505__auto__ = (function (){var statearr_33045 = f__30504__auto__();
(statearr_33045[(6)] = c__30503__auto___35206);

return statearr_33045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30505__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__33063 = arguments.length;
switch (G__33063) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30503__auto___35247 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30504__auto__ = (function (){var switch__29560__auto__ = (function (state_33111){
var state_val_33112 = (state_33111[(1)]);
if((state_val_33112 === (7))){
var inst_33089 = (state_33111[(7)]);
var inst_33087 = (state_33111[(8)]);
var inst_33087__$1 = (state_33111[(2)]);
var inst_33089__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33087__$1,(0),null);
var inst_33090 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33087__$1,(1),null);
var inst_33091 = (inst_33089__$1 == null);
var state_33111__$1 = (function (){var statearr_33121 = state_33111;
(statearr_33121[(7)] = inst_33089__$1);

(statearr_33121[(9)] = inst_33090);

(statearr_33121[(8)] = inst_33087__$1);

return statearr_33121;
})();
if(cljs.core.truth_(inst_33091)){
var statearr_33124_35251 = state_33111__$1;
(statearr_33124_35251[(1)] = (8));

} else {
var statearr_33125_35252 = state_33111__$1;
(statearr_33125_35252[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33112 === (1))){
var inst_33075 = cljs.core.vec(chs);
var inst_33076 = inst_33075;
var state_33111__$1 = (function (){var statearr_33127 = state_33111;
(statearr_33127[(10)] = inst_33076);

return statearr_33127;
})();
var statearr_33128_35259 = state_33111__$1;
(statearr_33128_35259[(2)] = null);

(statearr_33128_35259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33112 === (4))){
var inst_33076 = (state_33111[(10)]);
var state_33111__$1 = state_33111;
return cljs.core.async.ioc_alts_BANG_(state_33111__$1,(7),inst_33076);
} else {
if((state_val_33112 === (6))){
var inst_33106 = (state_33111[(2)]);
var state_33111__$1 = state_33111;
var statearr_33146_35260 = state_33111__$1;
(statearr_33146_35260[(2)] = inst_33106);

(statearr_33146_35260[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33112 === (3))){
var inst_33108 = (state_33111[(2)]);
var state_33111__$1 = state_33111;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33111__$1,inst_33108);
} else {
if((state_val_33112 === (2))){
var inst_33076 = (state_33111[(10)]);
var inst_33079 = cljs.core.count(inst_33076);
var inst_33080 = (inst_33079 > (0));
var state_33111__$1 = state_33111;
if(cljs.core.truth_(inst_33080)){
var statearr_33149_35261 = state_33111__$1;
(statearr_33149_35261[(1)] = (4));

} else {
var statearr_33150_35262 = state_33111__$1;
(statearr_33150_35262[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33112 === (11))){
var inst_33076 = (state_33111[(10)]);
var inst_33099 = (state_33111[(2)]);
var tmp33148 = inst_33076;
var inst_33076__$1 = tmp33148;
var state_33111__$1 = (function (){var statearr_33162 = state_33111;
(statearr_33162[(10)] = inst_33076__$1);

(statearr_33162[(11)] = inst_33099);

return statearr_33162;
})();
var statearr_33165_35263 = state_33111__$1;
(statearr_33165_35263[(2)] = null);

(statearr_33165_35263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33112 === (9))){
var inst_33089 = (state_33111[(7)]);
var state_33111__$1 = state_33111;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33111__$1,(11),out,inst_33089);
} else {
if((state_val_33112 === (5))){
var inst_33104 = cljs.core.async.close_BANG_(out);
var state_33111__$1 = state_33111;
var statearr_33173_35264 = state_33111__$1;
(statearr_33173_35264[(2)] = inst_33104);

(statearr_33173_35264[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33112 === (10))){
var inst_33102 = (state_33111[(2)]);
var state_33111__$1 = state_33111;
var statearr_33174_35265 = state_33111__$1;
(statearr_33174_35265[(2)] = inst_33102);

(statearr_33174_35265[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33112 === (8))){
var inst_33089 = (state_33111[(7)]);
var inst_33090 = (state_33111[(9)]);
var inst_33087 = (state_33111[(8)]);
var inst_33076 = (state_33111[(10)]);
var inst_33094 = (function (){var cs = inst_33076;
var vec__33083 = inst_33087;
var v = inst_33089;
var c = inst_33090;
return (function (p1__33057_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__33057_SHARP_);
});
})();
var inst_33095 = cljs.core.filterv(inst_33094,inst_33076);
var inst_33076__$1 = inst_33095;
var state_33111__$1 = (function (){var statearr_33183 = state_33111;
(statearr_33183[(10)] = inst_33076__$1);

return statearr_33183;
})();
var statearr_33185_35266 = state_33111__$1;
(statearr_33185_35266[(2)] = null);

(statearr_33185_35266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29561__auto__ = null;
var cljs$core$async$state_machine__29561__auto____0 = (function (){
var statearr_33187 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33187[(0)] = cljs$core$async$state_machine__29561__auto__);

(statearr_33187[(1)] = (1));

return statearr_33187;
});
var cljs$core$async$state_machine__29561__auto____1 = (function (state_33111){
while(true){
var ret_value__29562__auto__ = (function (){try{while(true){
var result__29563__auto__ = switch__29560__auto__(state_33111);
if(cljs.core.keyword_identical_QMARK_(result__29563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29563__auto__;
}
break;
}
}catch (e33188){var ex__29565__auto__ = e33188;
var statearr_33192_35271 = state_33111;
(statearr_33192_35271[(2)] = ex__29565__auto__);


if(cljs.core.seq((state_33111[(4)]))){
var statearr_33193_35276 = state_33111;
(statearr_33193_35276[(1)] = cljs.core.first((state_33111[(4)])));

} else {
throw ex__29565__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35280 = state_33111;
state_33111 = G__35280;
continue;
} else {
return ret_value__29562__auto__;
}
break;
}
});
cljs$core$async$state_machine__29561__auto__ = function(state_33111){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29561__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29561__auto____1.call(this,state_33111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29561__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29561__auto____0;
cljs$core$async$state_machine__29561__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29561__auto____1;
return cljs$core$async$state_machine__29561__auto__;
})()
})();
var state__30505__auto__ = (function (){var statearr_33197 = f__30504__auto__();
(statearr_33197[(6)] = c__30503__auto___35247);

return statearr_33197;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30505__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__33205 = arguments.length;
switch (G__33205) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30503__auto___35285 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30504__auto__ = (function (){var switch__29560__auto__ = (function (state_33237){
var state_val_33238 = (state_33237[(1)]);
if((state_val_33238 === (7))){
var inst_33217 = (state_33237[(7)]);
var inst_33217__$1 = (state_33237[(2)]);
var inst_33219 = (inst_33217__$1 == null);
var inst_33220 = cljs.core.not(inst_33219);
var state_33237__$1 = (function (){var statearr_33240 = state_33237;
(statearr_33240[(7)] = inst_33217__$1);

return statearr_33240;
})();
if(inst_33220){
var statearr_33241_35289 = state_33237__$1;
(statearr_33241_35289[(1)] = (8));

} else {
var statearr_33242_35290 = state_33237__$1;
(statearr_33242_35290[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33238 === (1))){
var inst_33209 = (0);
var state_33237__$1 = (function (){var statearr_33255 = state_33237;
(statearr_33255[(8)] = inst_33209);

return statearr_33255;
})();
var statearr_33256_35291 = state_33237__$1;
(statearr_33256_35291[(2)] = null);

(statearr_33256_35291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33238 === (4))){
var state_33237__$1 = state_33237;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33237__$1,(7),ch);
} else {
if((state_val_33238 === (6))){
var inst_33231 = (state_33237[(2)]);
var state_33237__$1 = state_33237;
var statearr_33257_35298 = state_33237__$1;
(statearr_33257_35298[(2)] = inst_33231);

(statearr_33257_35298[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33238 === (3))){
var inst_33233 = (state_33237[(2)]);
var inst_33234 = cljs.core.async.close_BANG_(out);
var state_33237__$1 = (function (){var statearr_33258 = state_33237;
(statearr_33258[(9)] = inst_33233);

return statearr_33258;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33237__$1,inst_33234);
} else {
if((state_val_33238 === (2))){
var inst_33209 = (state_33237[(8)]);
var inst_33214 = (inst_33209 < n);
var state_33237__$1 = state_33237;
if(cljs.core.truth_(inst_33214)){
var statearr_33260_35302 = state_33237__$1;
(statearr_33260_35302[(1)] = (4));

} else {
var statearr_33261_35306 = state_33237__$1;
(statearr_33261_35306[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33238 === (11))){
var inst_33209 = (state_33237[(8)]);
var inst_33223 = (state_33237[(2)]);
var inst_33224 = (inst_33209 + (1));
var inst_33209__$1 = inst_33224;
var state_33237__$1 = (function (){var statearr_33262 = state_33237;
(statearr_33262[(10)] = inst_33223);

(statearr_33262[(8)] = inst_33209__$1);

return statearr_33262;
})();
var statearr_33263_35307 = state_33237__$1;
(statearr_33263_35307[(2)] = null);

(statearr_33263_35307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33238 === (9))){
var state_33237__$1 = state_33237;
var statearr_33264_35308 = state_33237__$1;
(statearr_33264_35308[(2)] = null);

(statearr_33264_35308[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33238 === (5))){
var state_33237__$1 = state_33237;
var statearr_33272_35309 = state_33237__$1;
(statearr_33272_35309[(2)] = null);

(statearr_33272_35309[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33238 === (10))){
var inst_33228 = (state_33237[(2)]);
var state_33237__$1 = state_33237;
var statearr_33273_35310 = state_33237__$1;
(statearr_33273_35310[(2)] = inst_33228);

(statearr_33273_35310[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33238 === (8))){
var inst_33217 = (state_33237[(7)]);
var state_33237__$1 = state_33237;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33237__$1,(11),out,inst_33217);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29561__auto__ = null;
var cljs$core$async$state_machine__29561__auto____0 = (function (){
var statearr_33276 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33276[(0)] = cljs$core$async$state_machine__29561__auto__);

(statearr_33276[(1)] = (1));

return statearr_33276;
});
var cljs$core$async$state_machine__29561__auto____1 = (function (state_33237){
while(true){
var ret_value__29562__auto__ = (function (){try{while(true){
var result__29563__auto__ = switch__29560__auto__(state_33237);
if(cljs.core.keyword_identical_QMARK_(result__29563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29563__auto__;
}
break;
}
}catch (e33278){var ex__29565__auto__ = e33278;
var statearr_33279_35315 = state_33237;
(statearr_33279_35315[(2)] = ex__29565__auto__);


if(cljs.core.seq((state_33237[(4)]))){
var statearr_33280_35316 = state_33237;
(statearr_33280_35316[(1)] = cljs.core.first((state_33237[(4)])));

} else {
throw ex__29565__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35317 = state_33237;
state_33237 = G__35317;
continue;
} else {
return ret_value__29562__auto__;
}
break;
}
});
cljs$core$async$state_machine__29561__auto__ = function(state_33237){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29561__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29561__auto____1.call(this,state_33237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29561__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29561__auto____0;
cljs$core$async$state_machine__29561__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29561__auto____1;
return cljs$core$async$state_machine__29561__auto__;
})()
})();
var state__30505__auto__ = (function (){var statearr_33281 = f__30504__auto__();
(statearr_33281[(6)] = c__30503__auto___35285);

return statearr_33281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30505__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33308 = (function (f,ch,meta33284,_,fn1,meta33309){
this.f = f;
this.ch = ch;
this.meta33284 = meta33284;
this._ = _;
this.fn1 = fn1;
this.meta33309 = meta33309;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33308.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33310,meta33309__$1){
var self__ = this;
var _33310__$1 = this;
return (new cljs.core.async.t_cljs$core$async33308(self__.f,self__.ch,self__.meta33284,self__._,self__.fn1,meta33309__$1));
}));

(cljs.core.async.t_cljs$core$async33308.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33310){
var self__ = this;
var _33310__$1 = this;
return self__.meta33309;
}));

(cljs.core.async.t_cljs$core$async33308.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33308.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async33308.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33308.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__33282_SHARP_){
var G__33317 = (((p1__33282_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__33282_SHARP_) : self__.f.call(null, p1__33282_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__33317) : f1.call(null, G__33317));
});
}));

(cljs.core.async.t_cljs$core$async33308.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33284","meta33284",7898366,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33283","cljs.core.async/t_cljs$core$async33283",-161456603,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33309","meta33309",-1579371966,null)], null);
}));

(cljs.core.async.t_cljs$core$async33308.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33308.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33308");

(cljs.core.async.t_cljs$core$async33308.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async33308");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33308.
 */
cljs.core.async.__GT_t_cljs$core$async33308 = (function cljs$core$async$__GT_t_cljs$core$async33308(f,ch,meta33284,_,fn1,meta33309){
return (new cljs.core.async.t_cljs$core$async33308(f,ch,meta33284,_,fn1,meta33309));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33283 = (function (f,ch,meta33284){
this.f = f;
this.ch = ch;
this.meta33284 = meta33284;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33283.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33285,meta33284__$1){
var self__ = this;
var _33285__$1 = this;
return (new cljs.core.async.t_cljs$core$async33283(self__.f,self__.ch,meta33284__$1));
}));

(cljs.core.async.t_cljs$core$async33283.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33285){
var self__ = this;
var _33285__$1 = this;
return self__.meta33284;
}));

(cljs.core.async.t_cljs$core$async33283.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33283.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33283.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33283.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33283.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async33308(self__.f,self__.ch,self__.meta33284,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__33320 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__33320) : self__.f.call(null, G__33320));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async33283.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33283.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async33283.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33284","meta33284",7898366,null)], null);
}));

(cljs.core.async.t_cljs$core$async33283.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33283.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33283");

(cljs.core.async.t_cljs$core$async33283.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async33283");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33283.
 */
cljs.core.async.__GT_t_cljs$core$async33283 = (function cljs$core$async$__GT_t_cljs$core$async33283(f,ch,meta33284){
return (new cljs.core.async.t_cljs$core$async33283(f,ch,meta33284));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async33283(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33322 = (function (f,ch,meta33323){
this.f = f;
this.ch = ch;
this.meta33323 = meta33323;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33322.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33324,meta33323__$1){
var self__ = this;
var _33324__$1 = this;
return (new cljs.core.async.t_cljs$core$async33322(self__.f,self__.ch,meta33323__$1));
}));

(cljs.core.async.t_cljs$core$async33322.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33324){
var self__ = this;
var _33324__$1 = this;
return self__.meta33323;
}));

(cljs.core.async.t_cljs$core$async33322.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33322.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33322.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33322.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33322.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33322.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null, val)),fn1);
}));

(cljs.core.async.t_cljs$core$async33322.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33323","meta33323",-2040083733,null)], null);
}));

(cljs.core.async.t_cljs$core$async33322.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33322.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33322");

(cljs.core.async.t_cljs$core$async33322.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async33322");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33322.
 */
cljs.core.async.__GT_t_cljs$core$async33322 = (function cljs$core$async$__GT_t_cljs$core$async33322(f,ch,meta33323){
return (new cljs.core.async.t_cljs$core$async33322(f,ch,meta33323));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async33322(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33355 = (function (p,ch,meta33356){
this.p = p;
this.ch = ch;
this.meta33356 = meta33356;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33355.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33357,meta33356__$1){
var self__ = this;
var _33357__$1 = this;
return (new cljs.core.async.t_cljs$core$async33355(self__.p,self__.ch,meta33356__$1));
}));

(cljs.core.async.t_cljs$core$async33355.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33357){
var self__ = this;
var _33357__$1 = this;
return self__.meta33356;
}));

(cljs.core.async.t_cljs$core$async33355.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33355.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33355.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33355.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33355.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33355.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33355.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null, val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async33355.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33356","meta33356",-1724919612,null)], null);
}));

(cljs.core.async.t_cljs$core$async33355.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33355.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33355");

(cljs.core.async.t_cljs$core$async33355.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async33355");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33355.
 */
cljs.core.async.__GT_t_cljs$core$async33355 = (function cljs$core$async$__GT_t_cljs$core$async33355(p,ch,meta33356){
return (new cljs.core.async.t_cljs$core$async33355(p,ch,meta33356));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async33355(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__33398 = arguments.length;
switch (G__33398) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30503__auto___35354 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30504__auto__ = (function (){var switch__29560__auto__ = (function (state_33432){
var state_val_33433 = (state_33432[(1)]);
if((state_val_33433 === (7))){
var inst_33428 = (state_33432[(2)]);
var state_33432__$1 = state_33432;
var statearr_33446_35357 = state_33432__$1;
(statearr_33446_35357[(2)] = inst_33428);

(statearr_33446_35357[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33433 === (1))){
var state_33432__$1 = state_33432;
var statearr_33447_35361 = state_33432__$1;
(statearr_33447_35361[(2)] = null);

(statearr_33447_35361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33433 === (4))){
var inst_33413 = (state_33432[(7)]);
var inst_33413__$1 = (state_33432[(2)]);
var inst_33414 = (inst_33413__$1 == null);
var state_33432__$1 = (function (){var statearr_33450 = state_33432;
(statearr_33450[(7)] = inst_33413__$1);

return statearr_33450;
})();
if(cljs.core.truth_(inst_33414)){
var statearr_33451_35362 = state_33432__$1;
(statearr_33451_35362[(1)] = (5));

} else {
var statearr_33452_35363 = state_33432__$1;
(statearr_33452_35363[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33433 === (6))){
var inst_33413 = (state_33432[(7)]);
var inst_33419 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33413) : p.call(null, inst_33413));
var state_33432__$1 = state_33432;
if(cljs.core.truth_(inst_33419)){
var statearr_33456_35364 = state_33432__$1;
(statearr_33456_35364[(1)] = (8));

} else {
var statearr_33458_35368 = state_33432__$1;
(statearr_33458_35368[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33433 === (3))){
var inst_33430 = (state_33432[(2)]);
var state_33432__$1 = state_33432;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33432__$1,inst_33430);
} else {
if((state_val_33433 === (2))){
var state_33432__$1 = state_33432;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33432__$1,(4),ch);
} else {
if((state_val_33433 === (11))){
var inst_33422 = (state_33432[(2)]);
var state_33432__$1 = state_33432;
var statearr_33459_35369 = state_33432__$1;
(statearr_33459_35369[(2)] = inst_33422);

(statearr_33459_35369[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33433 === (9))){
var state_33432__$1 = state_33432;
var statearr_33460_35371 = state_33432__$1;
(statearr_33460_35371[(2)] = null);

(statearr_33460_35371[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33433 === (5))){
var inst_33417 = cljs.core.async.close_BANG_(out);
var state_33432__$1 = state_33432;
var statearr_33461_35372 = state_33432__$1;
(statearr_33461_35372[(2)] = inst_33417);

(statearr_33461_35372[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33433 === (10))){
var inst_33425 = (state_33432[(2)]);
var state_33432__$1 = (function (){var statearr_33462 = state_33432;
(statearr_33462[(8)] = inst_33425);

return statearr_33462;
})();
var statearr_33468_35373 = state_33432__$1;
(statearr_33468_35373[(2)] = null);

(statearr_33468_35373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33433 === (8))){
var inst_33413 = (state_33432[(7)]);
var state_33432__$1 = state_33432;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33432__$1,(11),out,inst_33413);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29561__auto__ = null;
var cljs$core$async$state_machine__29561__auto____0 = (function (){
var statearr_33469 = [null,null,null,null,null,null,null,null,null];
(statearr_33469[(0)] = cljs$core$async$state_machine__29561__auto__);

(statearr_33469[(1)] = (1));

return statearr_33469;
});
var cljs$core$async$state_machine__29561__auto____1 = (function (state_33432){
while(true){
var ret_value__29562__auto__ = (function (){try{while(true){
var result__29563__auto__ = switch__29560__auto__(state_33432);
if(cljs.core.keyword_identical_QMARK_(result__29563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29563__auto__;
}
break;
}
}catch (e33475){var ex__29565__auto__ = e33475;
var statearr_33476_35378 = state_33432;
(statearr_33476_35378[(2)] = ex__29565__auto__);


if(cljs.core.seq((state_33432[(4)]))){
var statearr_33480_35379 = state_33432;
(statearr_33480_35379[(1)] = cljs.core.first((state_33432[(4)])));

} else {
throw ex__29565__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35380 = state_33432;
state_33432 = G__35380;
continue;
} else {
return ret_value__29562__auto__;
}
break;
}
});
cljs$core$async$state_machine__29561__auto__ = function(state_33432){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29561__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29561__auto____1.call(this,state_33432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29561__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29561__auto____0;
cljs$core$async$state_machine__29561__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29561__auto____1;
return cljs$core$async$state_machine__29561__auto__;
})()
})();
var state__30505__auto__ = (function (){var statearr_33494 = f__30504__auto__();
(statearr_33494[(6)] = c__30503__auto___35354);

return statearr_33494;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30505__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__33503 = arguments.length;
switch (G__33503) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__30503__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30504__auto__ = (function (){var switch__29560__auto__ = (function (state_33587){
var state_val_33588 = (state_33587[(1)]);
if((state_val_33588 === (7))){
var inst_33583 = (state_33587[(2)]);
var state_33587__$1 = state_33587;
var statearr_33589_35382 = state_33587__$1;
(statearr_33589_35382[(2)] = inst_33583);

(statearr_33589_35382[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33588 === (20))){
var inst_33552 = (state_33587[(7)]);
var inst_33563 = (state_33587[(2)]);
var inst_33564 = cljs.core.next(inst_33552);
var inst_33530 = inst_33564;
var inst_33531 = null;
var inst_33532 = (0);
var inst_33533 = (0);
var state_33587__$1 = (function (){var statearr_33590 = state_33587;
(statearr_33590[(8)] = inst_33531);

(statearr_33590[(9)] = inst_33563);

(statearr_33590[(10)] = inst_33533);

(statearr_33590[(11)] = inst_33532);

(statearr_33590[(12)] = inst_33530);

return statearr_33590;
})();
var statearr_33595_35385 = state_33587__$1;
(statearr_33595_35385[(2)] = null);

(statearr_33595_35385[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33588 === (1))){
var state_33587__$1 = state_33587;
var statearr_33600_35386 = state_33587__$1;
(statearr_33600_35386[(2)] = null);

(statearr_33600_35386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33588 === (4))){
var inst_33519 = (state_33587[(13)]);
var inst_33519__$1 = (state_33587[(2)]);
var inst_33520 = (inst_33519__$1 == null);
var state_33587__$1 = (function (){var statearr_33605 = state_33587;
(statearr_33605[(13)] = inst_33519__$1);

return statearr_33605;
})();
if(cljs.core.truth_(inst_33520)){
var statearr_33606_35387 = state_33587__$1;
(statearr_33606_35387[(1)] = (5));

} else {
var statearr_33607_35388 = state_33587__$1;
(statearr_33607_35388[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33588 === (15))){
var state_33587__$1 = state_33587;
var statearr_33612_35389 = state_33587__$1;
(statearr_33612_35389[(2)] = null);

(statearr_33612_35389[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33588 === (21))){
var state_33587__$1 = state_33587;
var statearr_33617_35390 = state_33587__$1;
(statearr_33617_35390[(2)] = null);

(statearr_33617_35390[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33588 === (13))){
var inst_33531 = (state_33587[(8)]);
var inst_33533 = (state_33587[(10)]);
var inst_33532 = (state_33587[(11)]);
var inst_33530 = (state_33587[(12)]);
var inst_33540 = (state_33587[(2)]);
var inst_33541 = (inst_33533 + (1));
var tmp33608 = inst_33531;
var tmp33609 = inst_33532;
var tmp33610 = inst_33530;
var inst_33530__$1 = tmp33610;
var inst_33531__$1 = tmp33608;
var inst_33532__$1 = tmp33609;
var inst_33533__$1 = inst_33541;
var state_33587__$1 = (function (){var statearr_33624 = state_33587;
(statearr_33624[(8)] = inst_33531__$1);

(statearr_33624[(14)] = inst_33540);

(statearr_33624[(10)] = inst_33533__$1);

(statearr_33624[(11)] = inst_33532__$1);

(statearr_33624[(12)] = inst_33530__$1);

return statearr_33624;
})();
var statearr_33628_35391 = state_33587__$1;
(statearr_33628_35391[(2)] = null);

(statearr_33628_35391[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33588 === (22))){
var state_33587__$1 = state_33587;
var statearr_33629_35392 = state_33587__$1;
(statearr_33629_35392[(2)] = null);

(statearr_33629_35392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33588 === (6))){
var inst_33519 = (state_33587[(13)]);
var inst_33528 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33519) : f.call(null, inst_33519));
var inst_33529 = cljs.core.seq(inst_33528);
var inst_33530 = inst_33529;
var inst_33531 = null;
var inst_33532 = (0);
var inst_33533 = (0);
var state_33587__$1 = (function (){var statearr_33636 = state_33587;
(statearr_33636[(8)] = inst_33531);

(statearr_33636[(10)] = inst_33533);

(statearr_33636[(11)] = inst_33532);

(statearr_33636[(12)] = inst_33530);

return statearr_33636;
})();
var statearr_33637_35397 = state_33587__$1;
(statearr_33637_35397[(2)] = null);

(statearr_33637_35397[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33588 === (17))){
var inst_33552 = (state_33587[(7)]);
var inst_33556 = cljs.core.chunk_first(inst_33552);
var inst_33557 = cljs.core.chunk_rest(inst_33552);
var inst_33558 = cljs.core.count(inst_33556);
var inst_33530 = inst_33557;
var inst_33531 = inst_33556;
var inst_33532 = inst_33558;
var inst_33533 = (0);
var state_33587__$1 = (function (){var statearr_33643 = state_33587;
(statearr_33643[(8)] = inst_33531);

(statearr_33643[(10)] = inst_33533);

(statearr_33643[(11)] = inst_33532);

(statearr_33643[(12)] = inst_33530);

return statearr_33643;
})();
var statearr_33648_35400 = state_33587__$1;
(statearr_33648_35400[(2)] = null);

(statearr_33648_35400[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33588 === (3))){
var inst_33585 = (state_33587[(2)]);
var state_33587__$1 = state_33587;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33587__$1,inst_33585);
} else {
if((state_val_33588 === (12))){
var inst_33572 = (state_33587[(2)]);
var state_33587__$1 = state_33587;
var statearr_33658_35404 = state_33587__$1;
(statearr_33658_35404[(2)] = inst_33572);

(statearr_33658_35404[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33588 === (2))){
var state_33587__$1 = state_33587;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33587__$1,(4),in$);
} else {
if((state_val_33588 === (23))){
var inst_33581 = (state_33587[(2)]);
var state_33587__$1 = state_33587;
var statearr_33665_35406 = state_33587__$1;
(statearr_33665_35406[(2)] = inst_33581);

(statearr_33665_35406[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33588 === (19))){
var inst_33567 = (state_33587[(2)]);
var state_33587__$1 = state_33587;
var statearr_33668_35407 = state_33587__$1;
(statearr_33668_35407[(2)] = inst_33567);

(statearr_33668_35407[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33588 === (11))){
var inst_33552 = (state_33587[(7)]);
var inst_33530 = (state_33587[(12)]);
var inst_33552__$1 = cljs.core.seq(inst_33530);
var state_33587__$1 = (function (){var statearr_33670 = state_33587;
(statearr_33670[(7)] = inst_33552__$1);

return statearr_33670;
})();
if(inst_33552__$1){
var statearr_33671_35408 = state_33587__$1;
(statearr_33671_35408[(1)] = (14));

} else {
var statearr_33672_35410 = state_33587__$1;
(statearr_33672_35410[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33588 === (9))){
var inst_33574 = (state_33587[(2)]);
var inst_33576 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_33587__$1 = (function (){var statearr_33673 = state_33587;
(statearr_33673[(15)] = inst_33574);

return statearr_33673;
})();
if(cljs.core.truth_(inst_33576)){
var statearr_33674_35411 = state_33587__$1;
(statearr_33674_35411[(1)] = (21));

} else {
var statearr_33675_35412 = state_33587__$1;
(statearr_33675_35412[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33588 === (5))){
var inst_33522 = cljs.core.async.close_BANG_(out);
var state_33587__$1 = state_33587;
var statearr_33682_35413 = state_33587__$1;
(statearr_33682_35413[(2)] = inst_33522);

(statearr_33682_35413[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33588 === (14))){
var inst_33552 = (state_33587[(7)]);
var inst_33554 = cljs.core.chunked_seq_QMARK_(inst_33552);
var state_33587__$1 = state_33587;
if(inst_33554){
var statearr_33688_35415 = state_33587__$1;
(statearr_33688_35415[(1)] = (17));

} else {
var statearr_33692_35416 = state_33587__$1;
(statearr_33692_35416[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33588 === (16))){
var inst_33570 = (state_33587[(2)]);
var state_33587__$1 = state_33587;
var statearr_33693_35418 = state_33587__$1;
(statearr_33693_35418[(2)] = inst_33570);

(statearr_33693_35418[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33588 === (10))){
var inst_33531 = (state_33587[(8)]);
var inst_33533 = (state_33587[(10)]);
var inst_33538 = cljs.core._nth(inst_33531,inst_33533);
var state_33587__$1 = state_33587;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33587__$1,(13),out,inst_33538);
} else {
if((state_val_33588 === (18))){
var inst_33552 = (state_33587[(7)]);
var inst_33561 = cljs.core.first(inst_33552);
var state_33587__$1 = state_33587;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33587__$1,(20),out,inst_33561);
} else {
if((state_val_33588 === (8))){
var inst_33533 = (state_33587[(10)]);
var inst_33532 = (state_33587[(11)]);
var inst_33535 = (inst_33533 < inst_33532);
var inst_33536 = inst_33535;
var state_33587__$1 = state_33587;
if(cljs.core.truth_(inst_33536)){
var statearr_33702_35424 = state_33587__$1;
(statearr_33702_35424[(1)] = (10));

} else {
var statearr_33703_35425 = state_33587__$1;
(statearr_33703_35425[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29561__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29561__auto____0 = (function (){
var statearr_33704 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33704[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29561__auto__);

(statearr_33704[(1)] = (1));

return statearr_33704;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29561__auto____1 = (function (state_33587){
while(true){
var ret_value__29562__auto__ = (function (){try{while(true){
var result__29563__auto__ = switch__29560__auto__(state_33587);
if(cljs.core.keyword_identical_QMARK_(result__29563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29563__auto__;
}
break;
}
}catch (e33705){var ex__29565__auto__ = e33705;
var statearr_33706_35430 = state_33587;
(statearr_33706_35430[(2)] = ex__29565__auto__);


if(cljs.core.seq((state_33587[(4)]))){
var statearr_33707_35431 = state_33587;
(statearr_33707_35431[(1)] = cljs.core.first((state_33587[(4)])));

} else {
throw ex__29565__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35433 = state_33587;
state_33587 = G__35433;
continue;
} else {
return ret_value__29562__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29561__auto__ = function(state_33587){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29561__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29561__auto____1.call(this,state_33587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29561__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29561__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29561__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29561__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29561__auto__;
})()
})();
var state__30505__auto__ = (function (){var statearr_33720 = f__30504__auto__();
(statearr_33720[(6)] = c__30503__auto__);

return statearr_33720;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30505__auto__);
}));

return c__30503__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__33722 = arguments.length;
switch (G__33722) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__33724 = arguments.length;
switch (G__33724) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__33726 = arguments.length;
switch (G__33726) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30503__auto___35443 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30504__auto__ = (function (){var switch__29560__auto__ = (function (state_33750){
var state_val_33751 = (state_33750[(1)]);
if((state_val_33751 === (7))){
var inst_33745 = (state_33750[(2)]);
var state_33750__$1 = state_33750;
var statearr_33755_35448 = state_33750__$1;
(statearr_33755_35448[(2)] = inst_33745);

(statearr_33755_35448[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33751 === (1))){
var inst_33727 = null;
var state_33750__$1 = (function (){var statearr_33756 = state_33750;
(statearr_33756[(7)] = inst_33727);

return statearr_33756;
})();
var statearr_33757_35449 = state_33750__$1;
(statearr_33757_35449[(2)] = null);

(statearr_33757_35449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33751 === (4))){
var inst_33730 = (state_33750[(8)]);
var inst_33730__$1 = (state_33750[(2)]);
var inst_33731 = (inst_33730__$1 == null);
var inst_33732 = cljs.core.not(inst_33731);
var state_33750__$1 = (function (){var statearr_33758 = state_33750;
(statearr_33758[(8)] = inst_33730__$1);

return statearr_33758;
})();
if(inst_33732){
var statearr_33759_35451 = state_33750__$1;
(statearr_33759_35451[(1)] = (5));

} else {
var statearr_33760_35452 = state_33750__$1;
(statearr_33760_35452[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33751 === (6))){
var state_33750__$1 = state_33750;
var statearr_33761_35454 = state_33750__$1;
(statearr_33761_35454[(2)] = null);

(statearr_33761_35454[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33751 === (3))){
var inst_33747 = (state_33750[(2)]);
var inst_33748 = cljs.core.async.close_BANG_(out);
var state_33750__$1 = (function (){var statearr_33765 = state_33750;
(statearr_33765[(9)] = inst_33747);

return statearr_33765;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33750__$1,inst_33748);
} else {
if((state_val_33751 === (2))){
var state_33750__$1 = state_33750;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33750__$1,(4),ch);
} else {
if((state_val_33751 === (11))){
var inst_33730 = (state_33750[(8)]);
var inst_33739 = (state_33750[(2)]);
var inst_33727 = inst_33730;
var state_33750__$1 = (function (){var statearr_33767 = state_33750;
(statearr_33767[(7)] = inst_33727);

(statearr_33767[(10)] = inst_33739);

return statearr_33767;
})();
var statearr_33768_35457 = state_33750__$1;
(statearr_33768_35457[(2)] = null);

(statearr_33768_35457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33751 === (9))){
var inst_33730 = (state_33750[(8)]);
var state_33750__$1 = state_33750;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33750__$1,(11),out,inst_33730);
} else {
if((state_val_33751 === (5))){
var inst_33727 = (state_33750[(7)]);
var inst_33730 = (state_33750[(8)]);
var inst_33734 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33730,inst_33727);
var state_33750__$1 = state_33750;
if(inst_33734){
var statearr_33770_35459 = state_33750__$1;
(statearr_33770_35459[(1)] = (8));

} else {
var statearr_33771_35460 = state_33750__$1;
(statearr_33771_35460[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33751 === (10))){
var inst_33742 = (state_33750[(2)]);
var state_33750__$1 = state_33750;
var statearr_33772_35461 = state_33750__$1;
(statearr_33772_35461[(2)] = inst_33742);

(statearr_33772_35461[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33751 === (8))){
var inst_33727 = (state_33750[(7)]);
var tmp33769 = inst_33727;
var inst_33727__$1 = tmp33769;
var state_33750__$1 = (function (){var statearr_33773 = state_33750;
(statearr_33773[(7)] = inst_33727__$1);

return statearr_33773;
})();
var statearr_33777_35465 = state_33750__$1;
(statearr_33777_35465[(2)] = null);

(statearr_33777_35465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29561__auto__ = null;
var cljs$core$async$state_machine__29561__auto____0 = (function (){
var statearr_33781 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33781[(0)] = cljs$core$async$state_machine__29561__auto__);

(statearr_33781[(1)] = (1));

return statearr_33781;
});
var cljs$core$async$state_machine__29561__auto____1 = (function (state_33750){
while(true){
var ret_value__29562__auto__ = (function (){try{while(true){
var result__29563__auto__ = switch__29560__auto__(state_33750);
if(cljs.core.keyword_identical_QMARK_(result__29563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29563__auto__;
}
break;
}
}catch (e33782){var ex__29565__auto__ = e33782;
var statearr_33783_35467 = state_33750;
(statearr_33783_35467[(2)] = ex__29565__auto__);


if(cljs.core.seq((state_33750[(4)]))){
var statearr_33784_35468 = state_33750;
(statearr_33784_35468[(1)] = cljs.core.first((state_33750[(4)])));

} else {
throw ex__29565__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35470 = state_33750;
state_33750 = G__35470;
continue;
} else {
return ret_value__29562__auto__;
}
break;
}
});
cljs$core$async$state_machine__29561__auto__ = function(state_33750){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29561__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29561__auto____1.call(this,state_33750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29561__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29561__auto____0;
cljs$core$async$state_machine__29561__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29561__auto____1;
return cljs$core$async$state_machine__29561__auto__;
})()
})();
var state__30505__auto__ = (function (){var statearr_33788 = f__30504__auto__();
(statearr_33788[(6)] = c__30503__auto___35443);

return statearr_33788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30505__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33793 = arguments.length;
switch (G__33793) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30503__auto___35476 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30504__auto__ = (function (){var switch__29560__auto__ = (function (state_33834){
var state_val_33835 = (state_33834[(1)]);
if((state_val_33835 === (7))){
var inst_33830 = (state_33834[(2)]);
var state_33834__$1 = state_33834;
var statearr_33837_35477 = state_33834__$1;
(statearr_33837_35477[(2)] = inst_33830);

(statearr_33837_35477[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33835 === (1))){
var inst_33794 = (new Array(n));
var inst_33797 = inst_33794;
var inst_33798 = (0);
var state_33834__$1 = (function (){var statearr_33838 = state_33834;
(statearr_33838[(7)] = inst_33798);

(statearr_33838[(8)] = inst_33797);

return statearr_33838;
})();
var statearr_33842_35478 = state_33834__$1;
(statearr_33842_35478[(2)] = null);

(statearr_33842_35478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33835 === (4))){
var inst_33802 = (state_33834[(9)]);
var inst_33802__$1 = (state_33834[(2)]);
var inst_33803 = (inst_33802__$1 == null);
var inst_33804 = cljs.core.not(inst_33803);
var state_33834__$1 = (function (){var statearr_33843 = state_33834;
(statearr_33843[(9)] = inst_33802__$1);

return statearr_33843;
})();
if(inst_33804){
var statearr_33844_35480 = state_33834__$1;
(statearr_33844_35480[(1)] = (5));

} else {
var statearr_33845_35485 = state_33834__$1;
(statearr_33845_35485[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33835 === (15))){
var inst_33824 = (state_33834[(2)]);
var state_33834__$1 = state_33834;
var statearr_33846_35487 = state_33834__$1;
(statearr_33846_35487[(2)] = inst_33824);

(statearr_33846_35487[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33835 === (13))){
var state_33834__$1 = state_33834;
var statearr_33847_35488 = state_33834__$1;
(statearr_33847_35488[(2)] = null);

(statearr_33847_35488[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33835 === (6))){
var inst_33798 = (state_33834[(7)]);
var inst_33820 = (inst_33798 > (0));
var state_33834__$1 = state_33834;
if(cljs.core.truth_(inst_33820)){
var statearr_33853_35489 = state_33834__$1;
(statearr_33853_35489[(1)] = (12));

} else {
var statearr_33854_35490 = state_33834__$1;
(statearr_33854_35490[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33835 === (3))){
var inst_33832 = (state_33834[(2)]);
var state_33834__$1 = state_33834;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33834__$1,inst_33832);
} else {
if((state_val_33835 === (12))){
var inst_33797 = (state_33834[(8)]);
var inst_33822 = cljs.core.vec(inst_33797);
var state_33834__$1 = state_33834;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33834__$1,(15),out,inst_33822);
} else {
if((state_val_33835 === (2))){
var state_33834__$1 = state_33834;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33834__$1,(4),ch);
} else {
if((state_val_33835 === (11))){
var inst_33814 = (state_33834[(2)]);
var inst_33815 = (new Array(n));
var inst_33797 = inst_33815;
var inst_33798 = (0);
var state_33834__$1 = (function (){var statearr_33857 = state_33834;
(statearr_33857[(7)] = inst_33798);

(statearr_33857[(8)] = inst_33797);

(statearr_33857[(10)] = inst_33814);

return statearr_33857;
})();
var statearr_33858_35495 = state_33834__$1;
(statearr_33858_35495[(2)] = null);

(statearr_33858_35495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33835 === (9))){
var inst_33797 = (state_33834[(8)]);
var inst_33812 = cljs.core.vec(inst_33797);
var state_33834__$1 = state_33834;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33834__$1,(11),out,inst_33812);
} else {
if((state_val_33835 === (5))){
var inst_33807 = (state_33834[(11)]);
var inst_33802 = (state_33834[(9)]);
var inst_33798 = (state_33834[(7)]);
var inst_33797 = (state_33834[(8)]);
var inst_33806 = (inst_33797[inst_33798] = inst_33802);
var inst_33807__$1 = (inst_33798 + (1));
var inst_33808 = (inst_33807__$1 < n);
var state_33834__$1 = (function (){var statearr_33861 = state_33834;
(statearr_33861[(12)] = inst_33806);

(statearr_33861[(11)] = inst_33807__$1);

return statearr_33861;
})();
if(cljs.core.truth_(inst_33808)){
var statearr_33862_35496 = state_33834__$1;
(statearr_33862_35496[(1)] = (8));

} else {
var statearr_33863_35497 = state_33834__$1;
(statearr_33863_35497[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33835 === (14))){
var inst_33827 = (state_33834[(2)]);
var inst_33828 = cljs.core.async.close_BANG_(out);
var state_33834__$1 = (function (){var statearr_33866 = state_33834;
(statearr_33866[(13)] = inst_33827);

return statearr_33866;
})();
var statearr_33871_35498 = state_33834__$1;
(statearr_33871_35498[(2)] = inst_33828);

(statearr_33871_35498[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33835 === (10))){
var inst_33818 = (state_33834[(2)]);
var state_33834__$1 = state_33834;
var statearr_33877_35499 = state_33834__$1;
(statearr_33877_35499[(2)] = inst_33818);

(statearr_33877_35499[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33835 === (8))){
var inst_33807 = (state_33834[(11)]);
var inst_33797 = (state_33834[(8)]);
var tmp33865 = inst_33797;
var inst_33797__$1 = tmp33865;
var inst_33798 = inst_33807;
var state_33834__$1 = (function (){var statearr_33878 = state_33834;
(statearr_33878[(7)] = inst_33798);

(statearr_33878[(8)] = inst_33797__$1);

return statearr_33878;
})();
var statearr_33880_35500 = state_33834__$1;
(statearr_33880_35500[(2)] = null);

(statearr_33880_35500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29561__auto__ = null;
var cljs$core$async$state_machine__29561__auto____0 = (function (){
var statearr_33888 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33888[(0)] = cljs$core$async$state_machine__29561__auto__);

(statearr_33888[(1)] = (1));

return statearr_33888;
});
var cljs$core$async$state_machine__29561__auto____1 = (function (state_33834){
while(true){
var ret_value__29562__auto__ = (function (){try{while(true){
var result__29563__auto__ = switch__29560__auto__(state_33834);
if(cljs.core.keyword_identical_QMARK_(result__29563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29563__auto__;
}
break;
}
}catch (e33891){var ex__29565__auto__ = e33891;
var statearr_33893_35501 = state_33834;
(statearr_33893_35501[(2)] = ex__29565__auto__);


if(cljs.core.seq((state_33834[(4)]))){
var statearr_33894_35502 = state_33834;
(statearr_33894_35502[(1)] = cljs.core.first((state_33834[(4)])));

} else {
throw ex__29565__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35506 = state_33834;
state_33834 = G__35506;
continue;
} else {
return ret_value__29562__auto__;
}
break;
}
});
cljs$core$async$state_machine__29561__auto__ = function(state_33834){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29561__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29561__auto____1.call(this,state_33834);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29561__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29561__auto____0;
cljs$core$async$state_machine__29561__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29561__auto____1;
return cljs$core$async$state_machine__29561__auto__;
})()
})();
var state__30505__auto__ = (function (){var statearr_33895 = f__30504__auto__();
(statearr_33895[(6)] = c__30503__auto___35476);

return statearr_33895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30505__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33899 = arguments.length;
switch (G__33899) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30503__auto___35510 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30504__auto__ = (function (){var switch__29560__auto__ = (function (state_33955){
var state_val_33957 = (state_33955[(1)]);
if((state_val_33957 === (7))){
var inst_33951 = (state_33955[(2)]);
var state_33955__$1 = state_33955;
var statearr_33961_35512 = state_33955__$1;
(statearr_33961_35512[(2)] = inst_33951);

(statearr_33961_35512[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33957 === (1))){
var inst_33909 = [];
var inst_33910 = inst_33909;
var inst_33911 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33955__$1 = (function (){var statearr_33962 = state_33955;
(statearr_33962[(7)] = inst_33911);

(statearr_33962[(8)] = inst_33910);

return statearr_33962;
})();
var statearr_33963_35515 = state_33955__$1;
(statearr_33963_35515[(2)] = null);

(statearr_33963_35515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33957 === (4))){
var inst_33914 = (state_33955[(9)]);
var inst_33914__$1 = (state_33955[(2)]);
var inst_33915 = (inst_33914__$1 == null);
var inst_33916 = cljs.core.not(inst_33915);
var state_33955__$1 = (function (){var statearr_33971 = state_33955;
(statearr_33971[(9)] = inst_33914__$1);

return statearr_33971;
})();
if(inst_33916){
var statearr_33976_35516 = state_33955__$1;
(statearr_33976_35516[(1)] = (5));

} else {
var statearr_33978_35517 = state_33955__$1;
(statearr_33978_35517[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33957 === (15))){
var inst_33910 = (state_33955[(8)]);
var inst_33943 = cljs.core.vec(inst_33910);
var state_33955__$1 = state_33955;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33955__$1,(18),out,inst_33943);
} else {
if((state_val_33957 === (13))){
var inst_33937 = (state_33955[(2)]);
var state_33955__$1 = state_33955;
var statearr_33996_35522 = state_33955__$1;
(statearr_33996_35522[(2)] = inst_33937);

(statearr_33996_35522[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33957 === (6))){
var inst_33910 = (state_33955[(8)]);
var inst_33940 = inst_33910.length;
var inst_33941 = (inst_33940 > (0));
var state_33955__$1 = state_33955;
if(cljs.core.truth_(inst_33941)){
var statearr_34009_35523 = state_33955__$1;
(statearr_34009_35523[(1)] = (15));

} else {
var statearr_34011_35524 = state_33955__$1;
(statearr_34011_35524[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33957 === (17))){
var inst_33948 = (state_33955[(2)]);
var inst_33949 = cljs.core.async.close_BANG_(out);
var state_33955__$1 = (function (){var statearr_34016 = state_33955;
(statearr_34016[(10)] = inst_33948);

return statearr_34016;
})();
var statearr_34018_35525 = state_33955__$1;
(statearr_34018_35525[(2)] = inst_33949);

(statearr_34018_35525[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33957 === (3))){
var inst_33953 = (state_33955[(2)]);
var state_33955__$1 = state_33955;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33955__$1,inst_33953);
} else {
if((state_val_33957 === (12))){
var inst_33910 = (state_33955[(8)]);
var inst_33930 = cljs.core.vec(inst_33910);
var state_33955__$1 = state_33955;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33955__$1,(14),out,inst_33930);
} else {
if((state_val_33957 === (2))){
var state_33955__$1 = state_33955;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33955__$1,(4),ch);
} else {
if((state_val_33957 === (11))){
var inst_33919 = (state_33955[(11)]);
var inst_33914 = (state_33955[(9)]);
var inst_33910 = (state_33955[(8)]);
var inst_33927 = inst_33910.push(inst_33914);
var tmp34019 = inst_33910;
var inst_33910__$1 = tmp34019;
var inst_33911 = inst_33919;
var state_33955__$1 = (function (){var statearr_34031 = state_33955;
(statearr_34031[(12)] = inst_33927);

(statearr_34031[(7)] = inst_33911);

(statearr_34031[(8)] = inst_33910__$1);

return statearr_34031;
})();
var statearr_34032_35528 = state_33955__$1;
(statearr_34032_35528[(2)] = null);

(statearr_34032_35528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33957 === (9))){
var inst_33911 = (state_33955[(7)]);
var inst_33923 = cljs.core.keyword_identical_QMARK_(inst_33911,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_33955__$1 = state_33955;
var statearr_34033_35529 = state_33955__$1;
(statearr_34033_35529[(2)] = inst_33923);

(statearr_34033_35529[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33957 === (5))){
var inst_33920 = (state_33955[(13)]);
var inst_33919 = (state_33955[(11)]);
var inst_33914 = (state_33955[(9)]);
var inst_33911 = (state_33955[(7)]);
var inst_33919__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33914) : f.call(null, inst_33914));
var inst_33920__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33919__$1,inst_33911);
var state_33955__$1 = (function (){var statearr_34043 = state_33955;
(statearr_34043[(13)] = inst_33920__$1);

(statearr_34043[(11)] = inst_33919__$1);

return statearr_34043;
})();
if(inst_33920__$1){
var statearr_34044_35530 = state_33955__$1;
(statearr_34044_35530[(1)] = (8));

} else {
var statearr_34046_35531 = state_33955__$1;
(statearr_34046_35531[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33957 === (14))){
var inst_33919 = (state_33955[(11)]);
var inst_33914 = (state_33955[(9)]);
var inst_33932 = (state_33955[(2)]);
var inst_33933 = [];
var inst_33934 = inst_33933.push(inst_33914);
var inst_33910 = inst_33933;
var inst_33911 = inst_33919;
var state_33955__$1 = (function (){var statearr_34049 = state_33955;
(statearr_34049[(14)] = inst_33932);

(statearr_34049[(15)] = inst_33934);

(statearr_34049[(7)] = inst_33911);

(statearr_34049[(8)] = inst_33910);

return statearr_34049;
})();
var statearr_34053_35532 = state_33955__$1;
(statearr_34053_35532[(2)] = null);

(statearr_34053_35532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33957 === (16))){
var state_33955__$1 = state_33955;
var statearr_34057_35533 = state_33955__$1;
(statearr_34057_35533[(2)] = null);

(statearr_34057_35533[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33957 === (10))){
var inst_33925 = (state_33955[(2)]);
var state_33955__$1 = state_33955;
if(cljs.core.truth_(inst_33925)){
var statearr_34059_35535 = state_33955__$1;
(statearr_34059_35535[(1)] = (11));

} else {
var statearr_34060_35536 = state_33955__$1;
(statearr_34060_35536[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33957 === (18))){
var inst_33945 = (state_33955[(2)]);
var state_33955__$1 = state_33955;
var statearr_34062_35537 = state_33955__$1;
(statearr_34062_35537[(2)] = inst_33945);

(statearr_34062_35537[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33957 === (8))){
var inst_33920 = (state_33955[(13)]);
var state_33955__$1 = state_33955;
var statearr_34063_35538 = state_33955__$1;
(statearr_34063_35538[(2)] = inst_33920);

(statearr_34063_35538[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29561__auto__ = null;
var cljs$core$async$state_machine__29561__auto____0 = (function (){
var statearr_34082 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34082[(0)] = cljs$core$async$state_machine__29561__auto__);

(statearr_34082[(1)] = (1));

return statearr_34082;
});
var cljs$core$async$state_machine__29561__auto____1 = (function (state_33955){
while(true){
var ret_value__29562__auto__ = (function (){try{while(true){
var result__29563__auto__ = switch__29560__auto__(state_33955);
if(cljs.core.keyword_identical_QMARK_(result__29563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29563__auto__;
}
break;
}
}catch (e34098){var ex__29565__auto__ = e34098;
var statearr_34099_35540 = state_33955;
(statearr_34099_35540[(2)] = ex__29565__auto__);


if(cljs.core.seq((state_33955[(4)]))){
var statearr_34100_35541 = state_33955;
(statearr_34100_35541[(1)] = cljs.core.first((state_33955[(4)])));

} else {
throw ex__29565__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35542 = state_33955;
state_33955 = G__35542;
continue;
} else {
return ret_value__29562__auto__;
}
break;
}
});
cljs$core$async$state_machine__29561__auto__ = function(state_33955){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29561__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29561__auto____1.call(this,state_33955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29561__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29561__auto____0;
cljs$core$async$state_machine__29561__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29561__auto____1;
return cljs$core$async$state_machine__29561__auto__;
})()
})();
var state__30505__auto__ = (function (){var statearr_34111 = f__30504__auto__();
(statearr_34111[(6)] = c__30503__auto___35510);

return statearr_34111;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30505__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
