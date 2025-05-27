goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__34201){
var map__34202 = p__34201;
var map__34202__$1 = cljs.core.__destructure_map(map__34202);
var m = map__34202__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34202__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34202__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [(function (){var temp__5823__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34218_34686 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34219_34687 = null;
var count__34220_34688 = (0);
var i__34221_34689 = (0);
while(true){
if((i__34221_34689 < count__34220_34688)){
var f_34690 = chunk__34219_34687.cljs$core$IIndexed$_nth$arity$2(null, i__34221_34689);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_34690], 0));


var G__34696 = seq__34218_34686;
var G__34697 = chunk__34219_34687;
var G__34698 = count__34220_34688;
var G__34699 = (i__34221_34689 + (1));
seq__34218_34686 = G__34696;
chunk__34219_34687 = G__34697;
count__34220_34688 = G__34698;
i__34221_34689 = G__34699;
continue;
} else {
var temp__5823__auto___34700 = cljs.core.seq(seq__34218_34686);
if(temp__5823__auto___34700){
var seq__34218_34701__$1 = temp__5823__auto___34700;
if(cljs.core.chunked_seq_QMARK_(seq__34218_34701__$1)){
var c__5525__auto___34702 = cljs.core.chunk_first(seq__34218_34701__$1);
var G__34703 = cljs.core.chunk_rest(seq__34218_34701__$1);
var G__34704 = c__5525__auto___34702;
var G__34705 = cljs.core.count(c__5525__auto___34702);
var G__34706 = (0);
seq__34218_34686 = G__34703;
chunk__34219_34687 = G__34704;
count__34220_34688 = G__34705;
i__34221_34689 = G__34706;
continue;
} else {
var f_34709 = cljs.core.first(seq__34218_34701__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_34709], 0));


var G__34711 = cljs.core.next(seq__34218_34701__$1);
var G__34712 = null;
var G__34713 = (0);
var G__34714 = (0);
seq__34218_34686 = G__34711;
chunk__34219_34687 = G__34712;
count__34220_34688 = G__34713;
i__34221_34689 = G__34714;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_34717 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_34717], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_34717)))?cljs.core.second(arglists_34717):arglists_34717)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34254_34721 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34255_34722 = null;
var count__34256_34723 = (0);
var i__34257_34724 = (0);
while(true){
if((i__34257_34724 < count__34256_34723)){
var vec__34285_34725 = chunk__34255_34722.cljs$core$IIndexed$_nth$arity$2(null, i__34257_34724);
var name_34726 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34285_34725,(0),null);
var map__34288_34727 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34285_34725,(1),null);
var map__34288_34728__$1 = cljs.core.__destructure_map(map__34288_34727);
var doc_34729 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34288_34728__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34730 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34288_34728__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_34726], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_34730], 0));

if(cljs.core.truth_(doc_34729)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_34729], 0));
} else {
}


var G__34731 = seq__34254_34721;
var G__34732 = chunk__34255_34722;
var G__34733 = count__34256_34723;
var G__34734 = (i__34257_34724 + (1));
seq__34254_34721 = G__34731;
chunk__34255_34722 = G__34732;
count__34256_34723 = G__34733;
i__34257_34724 = G__34734;
continue;
} else {
var temp__5823__auto___34735 = cljs.core.seq(seq__34254_34721);
if(temp__5823__auto___34735){
var seq__34254_34736__$1 = temp__5823__auto___34735;
if(cljs.core.chunked_seq_QMARK_(seq__34254_34736__$1)){
var c__5525__auto___34737 = cljs.core.chunk_first(seq__34254_34736__$1);
var G__34738 = cljs.core.chunk_rest(seq__34254_34736__$1);
var G__34739 = c__5525__auto___34737;
var G__34740 = cljs.core.count(c__5525__auto___34737);
var G__34741 = (0);
seq__34254_34721 = G__34738;
chunk__34255_34722 = G__34739;
count__34256_34723 = G__34740;
i__34257_34724 = G__34741;
continue;
} else {
var vec__34300_34742 = cljs.core.first(seq__34254_34736__$1);
var name_34743 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34300_34742,(0),null);
var map__34303_34744 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34300_34742,(1),null);
var map__34303_34745__$1 = cljs.core.__destructure_map(map__34303_34744);
var doc_34746 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34303_34745__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34747 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34303_34745__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_34743], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_34747], 0));

if(cljs.core.truth_(doc_34746)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_34746], 0));
} else {
}


var G__34753 = cljs.core.next(seq__34254_34736__$1);
var G__34754 = null;
var G__34755 = (0);
var G__34756 = (0);
seq__34254_34721 = G__34753;
chunk__34255_34722 = G__34754;
count__34256_34723 = G__34755;
i__34257_34724 = G__34756;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5823__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5823__auto__)){
var fnspec = temp__5823__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__34328 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__34329 = null;
var count__34330 = (0);
var i__34331 = (0);
while(true){
if((i__34331 < count__34330)){
var role = chunk__34329.cljs$core$IIndexed$_nth$arity$2(null, i__34331);
var temp__5823__auto___34764__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5823__auto___34764__$1)){
var spec_34766 = temp__5823__auto___34764__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_34766)], 0));
} else {
}


var G__34768 = seq__34328;
var G__34769 = chunk__34329;
var G__34770 = count__34330;
var G__34771 = (i__34331 + (1));
seq__34328 = G__34768;
chunk__34329 = G__34769;
count__34330 = G__34770;
i__34331 = G__34771;
continue;
} else {
var temp__5823__auto____$1 = cljs.core.seq(seq__34328);
if(temp__5823__auto____$1){
var seq__34328__$1 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__34328__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__34328__$1);
var G__34778 = cljs.core.chunk_rest(seq__34328__$1);
var G__34779 = c__5525__auto__;
var G__34780 = cljs.core.count(c__5525__auto__);
var G__34781 = (0);
seq__34328 = G__34778;
chunk__34329 = G__34779;
count__34330 = G__34780;
i__34331 = G__34781;
continue;
} else {
var role = cljs.core.first(seq__34328__$1);
var temp__5823__auto___34784__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5823__auto___34784__$2)){
var spec_34785 = temp__5823__auto___34784__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_34785)], 0));
} else {
}


var G__34787 = cljs.core.next(seq__34328__$1);
var G__34788 = null;
var G__34789 = (0);
var G__34790 = (0);
seq__34328 = G__34787;
chunk__34329 = G__34788;
count__34330 = G__34789;
i__34331 = G__34790;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__34480 = datafied_throwable;
var map__34480__$1 = cljs.core.__destructure_map(map__34480);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34480__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34480__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34480__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__34481 = cljs.core.last(via);
var map__34481__$1 = cljs.core.__destructure_map(map__34481);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34481__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34481__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34481__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__34483 = data;
var map__34483__$1 = cljs.core.__destructure_map(map__34483);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34483__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34483__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34483__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__34484 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__34484__$1 = cljs.core.__destructure_map(map__34484);
var top_data = map__34484__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34484__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__34492 = phase;
var G__34492__$1 = (((G__34492 instanceof cljs.core.Keyword))?G__34492.fqn:null);
switch (G__34492__$1) {
case "read-source":
var map__34495 = data;
var map__34495__$1 = cljs.core.__destructure_map(map__34495);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34495__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34495__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__34499 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__34499__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34499,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34499);
var G__34499__$2 = (cljs.core.truth_((function (){var fexpr__34505 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34505.cljs$core$IFn$_invoke$arity$1 ? fexpr__34505.cljs$core$IFn$_invoke$arity$1(source) : fexpr__34505.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__34499__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34499__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34499__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34499__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__34510 = top_data;
var G__34510__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34510,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34510);
var G__34510__$2 = (cljs.core.truth_((function (){var fexpr__34514 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34514.cljs$core$IFn$_invoke$arity$1 ? fexpr__34514.cljs$core$IFn$_invoke$arity$1(source) : fexpr__34514.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__34510__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34510__$1);
var G__34510__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34510__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34510__$2);
var G__34510__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34510__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34510__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34510__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34510__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__34524 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34524,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34524,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34524,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34524,(3),null);
var G__34537 = top_data;
var G__34537__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34537,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__34537);
var G__34537__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34537__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__34537__$1);
var G__34537__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34537__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__34537__$2);
var G__34537__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34537__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34537__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34537__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34537__$4;
}

break;
case "execution":
var vec__34548 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34548,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34548,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34548,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34548,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__34474_SHARP_){
var or__5002__auto__ = (p1__34474_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__34558 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34558.cljs$core$IFn$_invoke$arity$1 ? fexpr__34558.cljs$core$IFn$_invoke$arity$1(p1__34474_SHARP_) : fexpr__34558.call(null, p1__34474_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__34571 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__34571__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34571,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__34571);
var G__34571__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34571__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34571__$1);
var G__34571__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34571__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__34571__$2);
var G__34571__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34571__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__34571__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34571__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34571__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34492__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__34594){
var map__34595 = p__34594;
var map__34595__$1 = cljs.core.__destructure_map(map__34595);
var triage_data = map__34595__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34595__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34595__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34595__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34595__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34595__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34595__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34595__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34595__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = source;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = line;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5002__auto__ = class$;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__34608 = phase;
var G__34608__$1 = (((G__34608 instanceof cljs.core.Keyword))?G__34608.fqn:null);
switch (G__34608__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null, "Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__34610 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__34611 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34612 = loc;
var G__34613 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34616_34890 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34617_34891 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34618_34892 = true;
var _STAR_print_fn_STAR__temp_val__34619_34893 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34618_34892);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34619_34893);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34588_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__34588_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34617_34891);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34616_34890);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null, "%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__34610,G__34611,G__34612,G__34613) : format.call(null, G__34610,G__34611,G__34612,G__34613));

break;
case "macroexpansion":
var G__34629 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__34630 = cause_type;
var G__34631 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34632 = loc;
var G__34633 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34629,G__34630,G__34631,G__34632,G__34633) : format.call(null, G__34629,G__34630,G__34631,G__34632,G__34633));

break;
case "compile-syntax-check":
var G__34634 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__34635 = cause_type;
var G__34636 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34637 = loc;
var G__34638 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34634,G__34635,G__34636,G__34637,G__34638) : format.call(null, G__34634,G__34635,G__34636,G__34637,G__34638));

break;
case "compilation":
var G__34641 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__34642 = cause_type;
var G__34643 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34644 = loc;
var G__34645 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34641,G__34642,G__34643,G__34644,G__34645) : format.call(null, G__34641,G__34642,G__34643,G__34644,G__34645));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__34649 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__34650 = symbol;
var G__34651 = loc;
var G__34652 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34657_34915 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34658_34916 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34659_34917 = true;
var _STAR_print_fn_STAR__temp_val__34660_34918 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34659_34917);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34660_34918);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34591_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__34591_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34658_34916);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34657_34915);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__34649,G__34650,G__34651,G__34652) : format.call(null, G__34649,G__34650,G__34651,G__34652));
} else {
var G__34672 = "Execution error%s at %s(%s).\n%s\n";
var G__34674 = cause_type;
var G__34675 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34676 = loc;
var G__34677 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34672,G__34674,G__34675,G__34676,G__34677) : format.call(null, G__34672,G__34674,G__34675,G__34676,G__34677));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34608__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
