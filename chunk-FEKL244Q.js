import{a as mt,b as st,c as ut,d as ft,e as xt}from"./chunk-RYE672PG.js";import{a as nt}from"./chunk-ZHW2WRXA.js";import{a as U}from"./chunk-FHFTOPOA.js";import{c as at}from"./chunk-SKUHIGNW.js";import{c as P,e as z,f as A,g as Q,i as V,ja as it,k as G,n as J,o as K,t as Z,u as $,v as tt,x as et}from"./chunk-P62QLZZE.js";import{a as ot,b as rt,c as dt,d as ct,e as pt,f as lt}from"./chunk-HWUY6KIU.js";import{Aa as T,Bb as E,Dd as q,Eb as R,Ed as H,Gb as u,Gd as W,Hd as X,Id as Y,Kb as B,Lb as k,Ma as i,Mb as j,Na as l,O as b,Qb as d,Rb as m,Sb as g,Ub as I,Vb as F,Wb as n,Xb as o,Z as M,Za as O,ac as L,eb as _,ja as D,mb as C,nb as x,ob as h,rb as f,sa as y,ta as w,vb as a,wb as r,wc as N,xb as S}from"./chunk-XDKMSWU4.js";var ht=e=>[e],St=(e,s)=>[e,s];function gt(e,s){if(e&1){let t=E();a(0,"div",1)(1,"button",3),R("deleted",function(){y(t);let p=u(2);return w(p.onDeleted())}),d(2),n(3,"translate"),r(),a(4,"a",4),n(5,"localize"),d(6),n(7,"translate"),r()()}if(e&2){let t=u(2);i(),x("appPostDelete",t.dataSource.data().id),i(),g(" ",o(3,4,"uni.delete")," "),i(2),x("routerLink",I(10,ht,o(5,6,"/"+t.dataSource.data().id+"/"+t.ROUTE_DEFINITION.POSTS.EDIT))),i(2),m(o(7,8,"uni.edit"))}}function Pt(e,s){if(e&1&&(_(0,gt,8,12,"div",1),a(1,"mat-card")(2,"mat-card-header")(3,"mat-card-subtitle"),d(4),r(),a(5,"mat-card-title"),d(6),n(7,"uppercase"),r()(),a(8,"mat-card-content")(9,"p",2),d(10),n(11,"translate"),r(),a(12,"p"),d(13),r()()()),e&2){let t=u();f(t.dataSource.state()==="data"?0:-1),i(3),h("blur-sm",t.dataSource.state()==="loading"),i(),m("#"+t.dataSource.data().id),i(),h("blur-sm",t.dataSource.state()==="loading"),i(),m(o(7,13,t.dataSource.data().title)),i(3),h("blur-sm",t.dataSource.state()==="loading"),i(),g(" ",o(11,15,"post-detail.about-post")," "),i(2),h("blur-sm",t.dataSource.state()==="loading"),i(),g(" ",t.dataSource.data().body," ")}}function It(e,s){if(e&1&&(a(0,"mat-card")(1,"mat-card-content",5),S(2,"mat-icon",6),n(3,"translate"),a(4,"div"),d(5),r()()()),e&2){let t=u();i(2),C("aria-label",o(3,2,"uni.aria-label.error-icon")),i(3),m(t.dataSource.error())}}function bt(e,s){e&1&&(a(0,"mat-card")(1,"mat-card-content",5),S(2,"mat-icon",7),n(3,"translate"),a(4,"div"),d(5),n(6,"translate"),r()()()),e&2&&(i(2),C("aria-label",o(3,2,"uni.aria-label.warning-icon")),i(3),m(o(6,4,"error.post-was-not-found")))}function Mt(e,s){if(e&1&&(S(0,"mat-icon",9),n(1,"translate"),a(2,"a",4),n(3,"localize"),d(4),r()),e&2){let t=u(2);C("aria-label",o(1,3,"uni.aria-label.arrow-icon")),i(2),x("routerLink",F(7,St,o(3,5,"/"),t.dataSource.data().id)),i(2),m(t.dataSource.data().id)}}function Dt(e,s){if(e&1&&(a(0,"div",8)(1,"a",4),n(2,"localize"),d(3),n(4,"translate"),r(),_(5,Mt,5,10),r()),e&2){let t=u();i(),x("routerLink",I(7,ht,o(2,3,"/"))),i(2),m(o(4,5,"breadcrumbs.app.posts")),i(2),f(t.dataSource.state()==="data"?5:-1)}}var ne=(()=>{class e{constructor(t,c,p,v,vt,_t,Ct){this.breadcrumbsPortalService=t,this.route=c,this.cdr=p,this.translate=v,this.lr=vt,this.apiService=_t,this.router=Ct,this.destroyRef=D(T),this.dataSource=new mt(st),this.ROUTE_DEFINITION=it}ngOnDestroy(){this.portalContent?.detach()}ngOnInit(){this.breadcrumbsPortalService.setPortal(this.portalContent),setTimeout(()=>this.cdr.markForCheck()),this.route.paramMap.pipe(b(500),ft(),xt(this.dataSource),ut(),M(t=>this.apiService.detail(t)),U(this.destroyRef)).subscribe({next:t=>this.dataSource.setData(t),error:()=>{let t=this.translate.instant("error.unexpected-exception");this.dataSource.setError(t)}})}onDeleted(){let t=this.lr.translateRoute("/");this.router.navigate([t])}static{this.\u0275fac=function(c){return new(c||e)(l(et),l(G),l(L),l(W),l(Z),l(at),l(J))}}static{this.\u0275cmp=O({type:e,selectors:[["app-post-detail"]],viewQuery:function(c,p){if(c&1&&B(P,7),c&2){let v;k(v=j())&&(p.portalContent=v.first)}},decls:4,vars:3,consts:[["class","container flex items-center gap-1 py-4",4,"cdkPortal"],[1,"flex","items-end","justify-end","gap-2"],[1,"mb-2","font-semibold","text-md"],["mat-button","","color","accent",3,"deleted","appPostDelete"],["mat-button","","color","primary",3,"routerLink"],[1,"flex","flex-col","gap-2","text-center"],["aria-hidden","false","fontIcon","error"],["aria-hidden","false","fontIcon","warning"],[1,"container","flex","items-center","gap-1","py-4"],["aria-hidden","false","fontIcon","chevron_right"]],template:function(c,p){c&1&&_(0,Pt,14,17,"mat-card")(1,It,6,4,"mat-card")(2,bt,7,6,"mat-card")(3,Dt,6,9,"div",0),c&2&&(f(p.dataSource.state()==="data"||p.dataSource.state()==="loading"?0:-1),i(),f(p.dataSource.state()==="error"?1:-1),i(),f(p.dataSource.state()==="empty"?2:-1))},dependencies:[N,K,tt,$,z,P,V,Q,A,H,q,lt,ot,dt,pt,ct,rt,Y,X,nt],styles:["[_nghost-%COMP%]{width:100%;margin-right:auto;margin-left:auto;padding-right:1rem;padding-left:1rem}@media (min-width: 640px){[_nghost-%COMP%]{max-width:640px}}@media (min-width: 768px){[_nghost-%COMP%]{max-width:768px}}@media (min-width: 1024px){[_nghost-%COMP%]{max-width:1024px}}@media (min-width: 1280px){[_nghost-%COMP%]{max-width:1280px}}@media (min-width: 1536px){[_nghost-%COMP%]{max-width:1536px}}[_nghost-%COMP%]{display:block}[_nghost-%COMP%] > [_ngcontent-%COMP%]:not([hidden]) ~ [_ngcontent-%COMP%]:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.5rem * var(--tw-space-y-reverse))}[_nghost-%COMP%]{padding-top:1rem;padding-bottom:1rem}"],changeDetection:0})}}return e})();export{ne as PostDetailComponent};
