import{a as _t,b as O}from"./chunk-JB4ZTAPT.js";import{a as pt,b as mt,c as ut}from"./chunk-5DB5DEL6.js";import{H as lt,c as P,e as W,f as G,g as J,i as K,k as dt}from"./chunk-QLA4I7NS.js";import{a as ht,b as xt,c as vt,d as St,e as Ct,f as gt}from"./chunk-ASUSKUGY.js";import{a as ft}from"./chunk-JR3BFILP.js";import{$a as z,$c as ct,B as T,Ca as _,D as w,Da as h,Gb as E,H as C,Ha as o,Ia as s,Ja as I,K as M,Lc as X,Mc as Y,Na as U,Nc as Z,Qc as tt,R as k,Ra as A,Rc as et,S as B,Ta as f,Uc as it,Vc as at,W as j,Wc as nt,X as N,Xa as d,Ya as u,Za as b,Zc as ot,_c as rt,ab as y,bb as Q,cb as p,cd as st,db as m,dd as D,gb as V,hb as $,jb as q,la as i,ma as c,oa as L,pa as F,q as R,wa as g,x as S,ya as x,yb as H}from"./chunk-OAQHWWN5.js";var It=e=>[e];function Rt(e,n){if(e&1){let a=U();o(0,"div",3)(1,"button",4),A("click",function(){j(a);let t=f(2);return N(t.onDelete())}),d(2),p(3,"translate"),s(),o(4,"a",5),p(5,"localize"),d(6),p(7,"translate"),s()()}if(e&2){let a=f(2);i(2),u(m(3,3,"UNI.delete")),i(2),g("routerLink",y(9,It,m(5,5,"/"+a.dataSource.data().id+"/"+a.ROUTE_DEFINITION.POSTS.EDIT))),i(2),u(m(7,7,"UNI.edit"))}}function Tt(e,n){if(e&1&&(_(0,Rt,8,11,"div",1),o(1,"mat-card")(2,"mat-card-header")(3,"mat-card-subtitle"),d(4),s(),o(5,"mat-card-title"),d(6),p(7,"uppercase"),s()(),o(8,"mat-card-content")(9,"p",2),d(10),p(11,"translate"),s(),o(12,"p"),d(13),s()()()),e&2){let a=f();h(0,a.dataSource.state()==="data"?0:-1),i(3),x("blur-sm",a.dataSource.state()==="loading"),i(1),u("#"+a.dataSource.data().id),i(1),x("blur-sm",a.dataSource.state()==="loading"),i(1),u(m(7,13,a.dataSource.data().title)),i(3),x("blur-sm",a.dataSource.state()==="loading"),i(1),b(" ",m(11,15,"post-detail.about-post")," "),i(2),x("blur-sm",a.dataSource.state()==="loading"),i(1),b(" ",a.dataSource.data().body," ")}}function wt(e,n){if(e&1&&(o(0,"mat-card")(1,"mat-card-content",6),I(2,"mat-icon",7),o(3,"div"),d(4),s()()()),e&2){let a=f();i(4),u(a.dataSource.error())}}function kt(e,n){e&1&&(o(0,"mat-card")(1,"mat-card-content",6),I(2,"mat-icon",8),o(3,"div"),d(4),p(5,"translate"),s()()()),e&2&&(i(4),u(m(5,1,"ERROR.post-was-not-found")))}var Bt=(e,n)=>[e,n];function jt(e,n){if(e&1&&(I(0,"mat-icon",10),o(1,"a",5),p(2,"localize"),d(3),s()),e&2){let a=f(2);i(1),g("routerLink",Q(4,Bt,m(2,2,"/"),a.dataSource.data().id)),i(2),u(a.dataSource.data().id)}}function Nt(e,n){if(e&1&&(o(0,"div",9)(1,"a",5),p(2,"localize"),d(3),p(4,"translate"),s(),_(5,jt,4,7),s()),e&2){let a=f();i(1),g("routerLink",y(7,It,m(2,3,"/"))),i(2),u(m(4,5,"BREADCRUMBS.app.posts")),i(2),h(5,a.dataSource.state()==="data"?5:-1)}}var ve=(()=>{let n=class n{constructor(r,t,l,v,Pt,Dt,Mt,bt,yt,Et,Ot){this.breadcrumbsPortalService=r,this.route=t,this.cdr=l,this.language=v,this.seoService=Pt,this.translate=Dt,this.lr=Mt,this.apiService=bt,this.snackBar=yt,this.router=Et,this.confirm=Ot,this.destroyRef=k(F),this.dataSource=new _t(O),this.ROUTE_DEFINITION=D}ngOnInit(){this.breadcrumbsPortalService.setPortal(this.portalContent),setTimeout(()=>this.cdr.markForCheck());let r=this.route.paramMap.pipe(R(t=>t.get("id")));r.pipe(S(t=>!Number.isNaN(Number(t))),C(t=>this.language.language$.pipe(M({next:()=>{let l=this.lr.translateRoute(`/${t}`);this.seoService.setSeo({title:this.translate.instant(`SEO.${D.POSTS.DETAIL}.title`),description:this.translate.instant(`SEO.${D.POSTS.DETAIL}.description`)},l)}}))),E(this.destroyRef)).subscribe(),r.pipe(T(500),M(t=>{(typeof t!="string"||!t)&&this.dataSource.setData(O)}),S(t=>typeof t=="string"&&!!t),C(t=>this.apiService.detail(String(t))),E(this.destroyRef)).subscribe({next:t=>this.dataSource.setData(t),error:()=>{let t=this.translate.instant("ERROR.unexpected-exception");this.dataSource.setError(t)}})}onDelete(){this.confirm.openCustomConfirmDialog(pt.Delete).pipe(w(),S(r=>!!r),C(()=>this.apiService.delete(this.dataSource.data().id))).subscribe({next:()=>{this.snackBar.open(this.translate.instant("response.delete.success"),this.translate.instant("UNI.close"));let r=this.lr.translateRoute("/");this.router.navigate([r])},error:()=>{this.snackBar.open(this.translate.instant("response.delete.failed"),this.translate.instant("UNI.close"))}})}ngOnDestroy(){this.portalContent?.detach()}};n.\u0275fac=function(t){return new(t||n)(c(dt),c(Z),c(L),c(st),c(ft),c(it),c(ot),c(ut),c(lt),c(tt),c(mt))},n.\u0275cmp=B({type:n,selectors:[["app-post-detail"]],viewQuery:function(t,l){if(t&1&&$(P,7),t&2){let v;V(v=q())&&(l.portalContent=v.first)}},standalone:!0,features:[z],decls:4,vars:3,consts:[["class","container flex items-center gap-1 py-4",4,"cdkPortal"],["class","flex items-end justify-end gap-2"],[1,"mb-2","font-semibold","text-md"],[1,"flex","items-end","justify-end","gap-2"],["mat-button","","color","accent",3,"click"],["mat-button","","color","primary",3,"routerLink"],[1,"flex","flex-col","gap-2","text-center"],["aria-hidden","false","aria-label","Error icon","fontIcon","error"],["aria-hidden","false","aria-label","Warning icon","fontIcon","warning"],[1,"container","flex","items-center","gap-1","py-4"],["aria-hidden","false","aria-label","Arrow icon","fontIcon","chevron_right"]],template:function(t,l){t&1&&_(0,Tt,14,17,"mat-card")(1,wt,5,1,"mat-card")(2,kt,6,3,"mat-card")(3,Nt,6,9,"div",0),t&2&&(h(0,l.dataSource.state()==="data"||l.dataSource.state()==="loading"?0:-1),i(1),h(1,l.dataSource.state()==="error"?1:-1),i(1),h(2,l.dataSource.state()==="empty"?2:-1))},dependencies:[H,et,ct,rt,W,P,K,J,G,Y,X,gt,ht,vt,Ct,St,xt,nt,at],styles:["[_nghost-%COMP%]{width:100%;margin-right:auto;margin-left:auto;padding-right:1rem;padding-left:1rem}@media (min-width: 640px){[_nghost-%COMP%]{max-width:640px}}@media (min-width: 768px){[_nghost-%COMP%]{max-width:768px}}@media (min-width: 1024px){[_nghost-%COMP%]{max-width:1024px}}@media (min-width: 1280px){[_nghost-%COMP%]{max-width:1280px}}@media (min-width: 1536px){[_nghost-%COMP%]{max-width:1536px}}[_nghost-%COMP%]{display:block}[_nghost-%COMP%] > [_ngcontent-%COMP%]:not([hidden]) ~ [_ngcontent-%COMP%]:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.5rem * var(--tw-space-y-reverse))}[_nghost-%COMP%]{padding-top:1rem;padding-bottom:1rem}"],changeDetection:0});let e=n;return e})();export{ve as PostDetailComponent};
