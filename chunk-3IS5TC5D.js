import{$ as B,Z as F,_ as $,aa as L,ba as O,ca as P,da as W,ea as q,f as S,i as k,w as V}from"./chunk-CMEF5W2Y.js";import{Ed as R,Fd as A,Gd as E,Na as d,Nb as f,O as C,Ob as g,Ra as v,Tb as y,Ub as D,Ya as T,a as l,aa as p,fa as c,kb as x,q as s,sb as m,tb as u,w as a,x as j}from"./chunk-RXPMPZCQ.js";var _=(()=>{class t{constructor(e,i){this.data=e,this.dialogRef=i}static{this.\u0275fac=function(i){return new(i||t)(v($),v(F))}}static{this.\u0275cmp=T({type:t,selectors:[["app-confirm-dialog"]],decls:11,vars:10,consts:[["mat-dialog-title",""],["mat-dialog-content",""],["mat-dialog-actions","","align","center"],["mat-button","",3,"mat-dialog-close"],["mat-button","","cdkFocusInitial","",3,"mat-dialog-close"]],template:function(i,n){i&1&&(m(0,"h1",0),f(1),u(),m(2,"div",1),f(3),u(),m(4,"div",2)(5,"button",3),f(6),y(7,"translate"),u(),m(8,"button",4),f(9),y(10,"translate"),u()()),i&2&&(d(),g(n.data.title),d(2),g(n.data.content),d(2),x("mat-dialog-close",!1),d(),g(D(7,6,"uni.no")),d(2),x("mat-dialog-close",!0),d(),g(D(10,8,"uni.yes")))},dependencies:[q,L,O,W,P,k,S,E,A],encapsulation:2,changeDetection:0})}}return t})();var G=(()=>{class t{constructor(e){this.dialog=e}open(e,i){return this.dialog.open(_,{width:"sm",data:{title:e,content:i}}).afterClosed()}static{this.\u0275fac=function(i){return new(i||t)(c(B))}}static{this.\u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var h=function(t){return t[t.Delete=0]="Delete",t[t.UnsavedWork=1]="UnsavedWork",t}(h||{}),at=(()=>{class t{constructor(e,i){this.confirm=e,this.translate=i}openCustomConfirmDialog(e){let i=this.getTitle(e),n=this.getContent(e);return this.open(i,n)}getTitle(e){switch(e){case h.Delete:return this.translate.instant("custom-confirm-dialog.delete-post.title");case h.UnsavedWork:return this.translate.instant("custom-confirm-dialog.unsaved-work.title");default:return this.translate.instant("custom-confirm-dialog.default.title")}}getContent(e){switch(e){case h.Delete:return this.translate.instant("custom-confirm-dialog.delete-post.content");case h.UnsavedWork:return this.translate.instant("custom-confirm-dialog.unsaved-work.content");default:return this.translate.instant("custom-confirm-dialog.default.content")}}open(e,i){return this.confirm.open(e,i).pipe(C(),a(n=>!!n))}static{this.\u0275fac=function(i){return new(i||t)(c(G),c(R))}}static{this.\u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var r=[];for(let t=0;t<256;++t)r.push((t+256).toString(16).slice(1));function H(t,o=0){return(r[t[o+0]]+r[t[o+1]]+r[t[o+2]]+r[t[o+3]]+"-"+r[t[o+4]]+r[t[o+5]]+"-"+r[t[o+6]]+r[t[o+7]]+"-"+r[t[o+8]]+r[t[o+9]]+"-"+r[t[o+10]]+r[t[o+11]]+r[t[o+12]]+r[t[o+13]]+r[t[o+14]]+r[t[o+15]]).toLowerCase()}var U,K=new Uint8Array(16);function b(){if(!U){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");U=crypto.getRandomValues.bind(crypto)}return U(K)}var Q=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),w={randomUUID:Q};function Y(t,o,e){if(w.randomUUID&&!o&&!t)return w.randomUUID();t=t||{};let i=t.random??t.rng?.()??b();if(i.length<16)throw new Error("Random bytes length must be >= 16");if(i[6]=i[6]&15|64,i[8]=i[8]&63|128,o){if(e=e||0,e<0||e+16>o.length)throw new RangeError(`UUID byte range ${e}:${e+15} is out of buffer bounds`);for(let n=0;n<16;++n)o[e+n]=i[n];return o}return H(i)}var M=Y;var Dt=(()=>{class t{constructor(e){this.rxdbProvider=e}get collection(){return this.rxdbProvider.getDatabaseCollection("posts")}create(e){return s(this.collection.insert(l({id:M()},e))).pipe(a(i=>i._data))}patch(e,i){return s(this.collection.findOne({selector:{id:e}}).update({$set:l({id:e},i)})).pipe(a(n=>l(l({},n._data),i)))}put(e,i){return s(this.collection.upsert(l({id:e},i))).pipe(a(n=>l(l({},n._data),i)))}detail(e){return s(this.collection.findOne({selector:{id:e}}).exec()).pipe(a(i=>i._data))}delete(e){return s(this.collection.findOne({selector:{id:e}}).remove()).pipe(a(i=>i._data))}list(e){let i=e.query?{title:{$regex:e.query,$options:"i"}}:void 0;return s(this.collection.find({skip:e.page-1,limit:e.limit,selector:i,sort:[{[e.sort]:e.order}]}).exec()).pipe(a(n=>n.map(N=>N._data)))}count(){return s(this.collection.count().exec())}listAndCount(e){return j([this.list(e),this.count()]).pipe(a(([i,n])=>({items:i,totalCount:n})))}static{this.\u0275fac=function(i){return new(i||t)(c(V))}}static{this.\u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();export{h as a,at as b,Dt as c};
