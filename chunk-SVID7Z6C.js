import{a as vt,b as bt,c as St}from"./chunk-JTF3ZCVO.js";import{a as ot,b as nt,e as rt,g as lt,h as P,j as dt,k as pt,o as st,p as ct,q as mt,r as ut,t as ft,u as _t,v as xt}from"./chunk-LXMWCOHN.js";import{a as kt,b as Ot,c as Vt,d as Rt,e as Ft}from"./chunk-RYE672PG.js";import{a as Pt}from"./chunk-ZHW2WRXA.js";import{a as L}from"./chunk-FHFTOPOA.js";import{a as gt,b as yt,c as It}from"./chunk-SKUHIGNW.js";import{c as M,e as A,f as U,g as G,h as Q,ha as ht,i as q,ja as Ct,k as J,n as K,o as X,t as tt,u as et,v as it,x as at}from"./chunk-P62QLZZE.js";import{a as Mt,b as Et,c as wt,d as Tt,e as Dt,f as Bt}from"./chunk-HWUY6KIU.js";import{Aa as O,Bb as g,Dd as H,Eb as y,Ed as W,Gb as m,Gd as Y,Hd as Z,Id as $,Kb as R,Lb as F,Ma as i,Mb as N,Na as s,O as T,Qb as d,R as D,Rb as f,Sb as I,Ub as w,Vb as j,Wb as a,Xb as o,Z as B,Za as V,ac as z,eb as S,ja as k,mb as x,nb as c,ob as E,rb as _,sa as v,ta as b,vb as r,wb as l,xb as h}from"./chunk-XDKMSWU4.js";var Nt=e=>[e],Qt=(e,u)=>[e,u];function qt(e,u){if(e&1){let t=g();r(0,"div",2)(1,"button",12),y("deleted",function(){v(t);let n=m(2);return b(n.onDeleted())}),d(2),a(3,"translate"),l()()}if(e&2){let t=m(2);i(),c("appPostDelete",t.dataSource.data().id),i(),I(" ",o(3,2,"uni.delete")," ")}}function Ht(e,u){if(e&1){let t=g();r(0,"button",13),a(1,"translate"),a(2,"translate"),y("click",function(){v(t);let n=m(2);return n.form.controls.title.setValue(""),b(n.form.controls.body.markAsDirty())}),r(3,"mat-icon"),d(4,"close"),l()()}e&2&&(c("matTooltip",o(1,2,"uni.clear")),x("aria-label",o(2,4,"uni.clear")))}function Wt(e,u){if(e&1){let t=g();r(0,"button",13),a(1,"translate"),a(2,"translate"),y("click",function(){v(t);let n=m(2);return n.form.controls.body.setValue(""),b(n.form.controls.body.markAsDirty())}),r(3,"mat-icon"),d(4,"close"),l()()}e&2&&(c("matTooltip",o(1,2,"uni.clear")),x("aria-label",o(2,4,"uni.clear")))}function Jt(e,u){if(e&1){let t=g();S(0,qt,4,4,"div",2),r(1,"mat-card")(2,"mat-card-header")(3,"mat-card-subtitle"),d(4),l(),r(5,"mat-card-title"),d(6),l()(),r(7,"mat-card-content",3)(8,"form",4),y("ngSubmit",function(){v(t);let n=m();return b(n.onSubmit())})("reset",function(n){v(t);let C=m();return b(C.onReset(n))}),r(9,"mat-form-field",5)(10,"mat-label"),d(11),a(12,"translate"),l(),h(13,"input",6),S(14,Ht,5,6,"button",7),l(),r(15,"mat-form-field",5)(16,"mat-label"),d(17),a(18,"translate"),l(),h(19,"textarea",8,0),a(21,"translate"),S(22,Wt,5,6,"button",7),l(),r(23,"div",9)(24,"button",10),d(25),a(26,"translate"),l(),r(27,"button",11),d(28),a(29,"translate"),l()()()()()}if(e&2){let t=m();_(t.dataSource.state()==="data"?0:-1),i(3),E("blur-sm",t.dataSource.state()!=="data"),i(),f("#"+t.dataSource.data().id),i(),E("blur-sm",t.dataSource.state()!=="data"),i(),f(t.dataSource.data().title),i(2),c("formGroup",t.form),i(3),f(o(12,17,"form.post.title.label")),i(3),_(t.form.controls.title.value?14:-1),i(3),f(o(18,19,"form.post.body.label")),i(2),c("placeholder",o(21,21,"form.post.body.placeholder")),i(3),_(t.form.controls.body.value?22:-1),i(2),c("disabled",t.form.pristine),i(),I(" ",o(26,23,"uni.reset")," "),i(2),c("disabled",t.form.pristine||t.form.invalid),i(),I(" ",o(29,25,"uni.submit")," ")}}function Kt(e,u){if(e&1&&(r(0,"mat-card")(1,"mat-card-content",14),h(2,"mat-icon",15),a(3,"translate"),r(4,"div"),d(5),l()()()),e&2){let t=m();i(2),x("aria-label",o(3,2,"uni.aria-label.error-icon")),i(3),f(t.dataSource.error())}}function Xt(e,u){e&1&&(r(0,"mat-card")(1,"mat-card-content",14),h(2,"mat-icon",16),a(3,"translate"),r(4,"div"),d(5),a(6,"translate"),l()()()),e&2&&(i(2),x("aria-label",o(3,2,"uni.aria-label.warning-icon")),i(3),f(o(6,4,"error.post-was-not-found")))}function Yt(e,u){if(e&1&&(h(0,"mat-icon",19),a(1,"translate"),r(2,"a",18),a(3,"localize"),d(4),l(),h(5,"mat-icon",19),a(6,"translate"),r(7,"a",18),a(8,"localize"),d(9),a(10,"translate"),l()),e&2){let t=m(2);x("aria-label",o(1,6,"uni.aria-label.arrow-icon")),i(2),c("routerLink",j(16,Qt,o(3,8,"/"),t.dataSource.data().id)),i(2),f(t.dataSource.data().id),i(),x("aria-label",o(6,10,"uni.aria-label.arrow-icon")),i(2),c("routerLink",w(19,Nt,o(8,12,"/"+t.dataSource.data().id+"/"+t.ROUTE_DEFINITION.POSTS.EDIT))),i(2),I(" ",o(10,14,"breadcrumbs.posts.edit"),"")}}function Zt(e,u){if(e&1&&(r(0,"div",17)(1,"a",18),a(2,"localize"),d(3),a(4,"translate"),l(),S(5,Yt,11,21),l()),e&2){let t=m();i(),c("routerLink",w(7,Nt,o(2,3,"/"))),i(2),f(o(4,5,"breadcrumbs.app.posts")),i(2),_(t.dataSource.state()==="data"?5:-1)}}var Ae=(()=>{class e{constructor(t,p,n,C,jt,zt,At,Lt,Ut,Gt){this.breadcrumbsPortalService=t,this.route=p,this.translate=n,this.lr=C,this.cdr=jt,this.fb=zt,this.apiService=At,this.confirm=Lt,this.router=Ut,this.snackBar=Gt,this.destroyRef=k(O),this.dataSource=new kt(Ot),this.ROUTE_DEFINITION=Ct,this.form=this.fb.nonNullable.group({title:["",[P.required,P.min(3)]],body:["",[P.required,P.min(3)]]})}canDeactivate(){return this.form.pristine||this.confirm.openCustomConfirmDialog(gt.UnsavedWork)}ngOnInit(){this.breadcrumbsPortalService.setPortal(this.portalContent),setTimeout(()=>this.cdr.markForCheck()),this.route.paramMap.pipe(T(500),Rt(),Ft(this.dataSource),Vt(),B(t=>this.apiService.detail(t)),L(this.destroyRef)).subscribe({next:t=>{this.dataSource.setData(t),this.form.patchValue(t)},error:()=>{let t=this.translate.instant("error.unexpected-exception");this.dataSource.setError(t)}})}ngOnDestroy(){this.portalContent?.detach()}onSubmit(){this.apiService.patch(this.dataSource.data().id,this.form.value).pipe(D()).subscribe({next:t=>{this.dataSource.setData(t),this.form.reset(t),this.snackBar.open(this.translate.instant("response.update.success"),this.translate.instant("uni.close"))},error:t=>{console.log(t),this.snackBar.open(this.translate.instant("response.update.failed"),this.translate.instant("uni.close"))}})}onReset(t){t.preventDefault(),this.form.reset(this.dataSource.data())}onDeleted(){let t=this.lr.translateRoute("/");this.router.navigate([t])}static{this.\u0275fac=function(p){return new(p||e)(s(at),s(J),s(Y),s(tt),s(z),s(ut),s(It),s(yt),s(K),s(ht))}}static{this.\u0275cmp=V({type:e,selectors:[["app-post-edit"]],viewQuery:function(p,n){if(p&1&&R(M,7),p&2){let C;F(C=N())&&(n.portalContent=C.first)}},decls:4,vars:3,consts:[["autosize","cdkTextareaAutosize"],["class","container flex items-center gap-1 py-4",4,"cdkPortal"],[1,"flex","items-end","justify-end","gap-2"],[1,"flex","flex-col","gap-2","mt-2","text-center"],[3,"ngSubmit","reset","formGroup"],[1,"w-full"],["matInput","","type","text","formControlName","title"],["matSuffix","","mat-icon-button","",3,"matTooltip"],["matInput","","cdkTextareaAutosize","","formControlName","body",3,"placeholder"],[1,"flex","justify-center","gap-2"],["mat-button","","color","primary","type","reset",3,"disabled"],["mat-flat-button","","color","primary","type","submit",3,"disabled"],["mat-button","","color","accent",3,"deleted","appPostDelete"],["matSuffix","","mat-icon-button","",3,"click","matTooltip"],[1,"flex","flex-col","gap-2","text-center"],["aria-hidden","false","fontIcon","error"],["aria-hidden","false","fontIcon","warning"],[1,"container","flex","items-center","gap-1","py-4"],["mat-button","","color","primary",3,"routerLink"],["aria-hidden","false","fontIcon","chevron_right"]],template:function(p,n){p&1&&S(0,Jt,30,27,"mat-card")(1,Kt,6,4,"mat-card")(2,Xt,7,6,"mat-card")(3,Zt,6,9,"div",1),p&2&&(_(n.dataSource.state()==="loading"||n.dataSource.state()==="data"?0:-1),i(),_(n.dataSource.state()==="error"?1:-1),i(),_(n.dataSource.state()==="empty"?2:-1))},dependencies:[X,it,et,ft,st,lt,dt,pt,ct,mt,W,H,q,G,U,Q,Bt,Mt,wt,Dt,Tt,Et,xt,_t,St,bt,rt,ot,nt,vt,$,Z,A,M,Pt],styles:["[_nghost-%COMP%]{width:100%;margin-right:auto;margin-left:auto;padding-right:1rem;padding-left:1rem}@media (min-width: 640px){[_nghost-%COMP%]{max-width:640px}}@media (min-width: 768px){[_nghost-%COMP%]{max-width:768px}}@media (min-width: 1024px){[_nghost-%COMP%]{max-width:1024px}}@media (min-width: 1280px){[_nghost-%COMP%]{max-width:1280px}}@media (min-width: 1536px){[_nghost-%COMP%]{max-width:1536px}}[_nghost-%COMP%]{display:block}[_nghost-%COMP%] > [_ngcontent-%COMP%]:not([hidden]) ~ [_ngcontent-%COMP%]:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.5rem * var(--tw-space-y-reverse))}[_nghost-%COMP%]{padding-top:1rem;padding-bottom:1rem}"],changeDetection:0})}}return e})();export{Ae as PostEditComponent};
