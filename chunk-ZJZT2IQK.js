import{a as Ct,b as vt,c as bt}from"./chunk-JTF3ZCVO.js";import{a as et,b as it,e as rt,g as ot,h as C,j as at,k as nt,m as B,o as lt,p as mt,q as st,r as pt,t as ct,u as dt,v as ut}from"./chunk-LXMWCOHN.js";import{a as _t,b as gt,c as xt}from"./chunk-SKUHIGNW.js";import{c as M,e as z,f as L,g as A,h as G,ha as ft,i as Q,ja as ht,n as H,o as W,t as Y,u as Z,v as $,x as tt}from"./chunk-P62QLZZE.js";import{a as Mt,b as yt,c as wt,e as St,f as It}from"./chunk-HWUY6KIU.js";import{Aa as D,Bb as g,Dd as q,Eb as x,Ed as U,Gb as I,Gd as J,Hd as K,Id as X,Kb as E,Lb as N,Ma as e,Mb as F,Na as s,Qb as p,R as O,Rb as u,Sb as P,Ub as T,Wb as r,Xb as o,Za as R,ac as j,eb as v,ja as V,mb as b,nb as c,rb as S,sa as f,ta as h,vb as n,wb as m,xb as _}from"./chunk-XDKMSWU4.js";var Pt=i=>[i];function Ot(i,k){if(i&1){let l=g();n(0,"button",11),r(1,"translate"),r(2,"translate"),x("click",function(){f(l);let t=I();return h(t.form.controls.title.setValue(""))}),n(3,"mat-icon"),p(4,"close"),m()()}i&2&&(c("matTooltip",o(1,2,"uni.clear")),b("aria-label",o(2,4,"uni.clear")))}function Vt(i,k){if(i&1){let l=g();n(0,"button",11),r(1,"translate"),r(2,"translate"),x("click",function(){f(l);let t=I();return h(t.form.controls.body.setValue(""))}),n(3,"mat-icon"),p(4,"close"),m()()}i&2&&(c("matTooltip",o(1,2,"uni.clear")),b("aria-label",o(2,4,"uni.clear")))}function Dt(i,k){i&1&&(n(0,"div",12)(1,"a",13),r(2,"localize"),p(3),r(4,"translate"),m(),_(5,"mat-icon",14),r(6,"translate"),n(7,"a",13),r(8,"localize"),p(9),r(10,"translate"),m()()),i&2&&(e(),c("routerLink",T(15,Pt,o(2,5,"/"))),e(2),u(o(4,7,"breadcrumbs.app.posts")),e(2),b("aria-label",o(6,9,"uni.aria-label.arrow-icon")),e(2),c("routerLink",T(17,Pt,o(8,11,"/create"))),e(2),u(o(10,13,"breadcrumbs.posts.create")))}var fe=(()=>{class i{constructor(l,a,t,d,y,w,Tt,Bt,kt){this.fb=l,this.apiService=a,this.breadcrumbsPortalService=t,this.cdr=d,this.translate=y,this.lr=w,this.snackBar=Tt,this.router=Bt,this.confirm=kt,this.destroyRef=V(D),this.ROUTE_DEFINITION=ht,this.form=this.fb.group({title:new B("",{nonNullable:!0,validators:[C.required,C.min(3)]}),body:new B("",{nonNullable:!0,validators:[C.required,C.min(3)]})})}canDeactivate(){return this.form.pristine||this.confirm.openCustomConfirmDialog(_t.UnsavedWork)}ngOnInit(){this.breadcrumbsPortalService.setPortal(this.portalContent),setTimeout(()=>this.cdr.detectChanges())}ngOnDestroy(){this.portalContent?.detach()}onSubmit(){this.apiService.create(this.form.value).pipe(O()).subscribe({next:l=>{this.form.reset(l),this.snackBar.open(this.translate.instant("response.create.success"),this.translate.instant("uni.close"));let a=this.lr.translateRoute("/");this.router.navigate([a])},error:()=>{this.snackBar.open(this.translate.instant("response.create.failed"),this.translate.instant("uni.close"))}})}onReset(l){l.preventDefault(),this.form.reset()}static{this.\u0275fac=function(a){return new(a||i)(s(pt),s(xt),s(tt),s(j),s(J),s(Y),s(ft),s(H),s(gt))}}static{this.\u0275cmp=R({type:i,selectors:[["app-post-create"]],viewQuery:function(a,t){if(a&1&&E(M,7),a&2){let d;N(d=F())&&(t.portalContent=d.first)}},decls:28,vars:21,consts:[["autosize","cdkTextareaAutosize"],[1,"flex","flex-col","gap-2","mt-2","text-center"],[3,"ngSubmit","reset","formGroup"],[1,"w-full"],["matInput","","type","text","formControlName","title"],["matSuffix","","mat-icon-button","",3,"matTooltip"],["matInput","","cdkTextareaAutosize","","formControlName","body",3,"placeholder"],[1,"flex","justify-center","gap-2"],["mat-button","","color","primary","type","reset",3,"disabled"],["mat-flat-button","","color","primary","type","submit",3,"disabled"],["class","container flex items-center gap-1 py-4",4,"cdkPortal"],["matSuffix","","mat-icon-button","",3,"click","matTooltip"],[1,"container","flex","items-center","gap-1","py-4"],["mat-button","","color","primary",3,"routerLink"],["aria-hidden","false","fontIcon","chevron_right"]],template:function(a,t){if(a&1){let d=g();n(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title"),p(3),m()(),n(4,"mat-card-content",1)(5,"form",2),x("ngSubmit",function(){return f(d),h(t.onSubmit())})("reset",function(w){return f(d),h(t.onReset(w))}),n(6,"mat-form-field",3)(7,"mat-label"),p(8),r(9,"translate"),m(),_(10,"input",4),v(11,Ot,5,6,"button",5),m(),n(12,"mat-form-field",3)(13,"mat-label"),p(14),r(15,"translate"),m(),_(16,"textarea",6,0),r(18,"translate"),v(19,Vt,5,6,"button",5),m(),n(20,"div",7)(21,"button",8),p(22),r(23,"translate"),m(),n(24,"button",9),p(25),r(26,"translate"),m()()()()(),v(27,Dt,11,19,"div",10)}a&2&&(e(3),u(t.form.controls.title.value),e(2),c("formGroup",t.form),e(3),u(o(9,11,"form.post.title.label")),e(3),S(t.form.controls.title.value?11:-1),e(3),u(o(15,13,"form.post.body.label")),e(2),c("placeholder",o(18,15,"form.post.body.placeholder")),e(3),S(t.form.controls.body.value?19:-1),e(2),c("disabled",t.form.pristine),e(),P(" ",o(23,17,"uni.reset")," "),e(2),c("disabled",t.form.pristine||t.form.invalid),e(),P(" ",o(26,19,"uni.submit")," "))},dependencies:[ct,lt,ot,at,nt,mt,st,It,Mt,wt,St,yt,U,q,bt,vt,rt,et,it,Ct,Q,A,L,G,ut,dt,z,M,X,K,W,$,Z],styles:["[_nghost-%COMP%]{width:100%;margin-right:auto;margin-left:auto;padding-right:1rem;padding-left:1rem}@media (min-width: 640px){[_nghost-%COMP%]{max-width:640px}}@media (min-width: 768px){[_nghost-%COMP%]{max-width:768px}}@media (min-width: 1024px){[_nghost-%COMP%]{max-width:1024px}}@media (min-width: 1280px){[_nghost-%COMP%]{max-width:1280px}}@media (min-width: 1536px){[_nghost-%COMP%]{max-width:1536px}}[_nghost-%COMP%]{display:block}[_nghost-%COMP%] > [_ngcontent-%COMP%]:not([hidden]) ~ [_ngcontent-%COMP%]:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.5rem * var(--tw-space-y-reverse))}[_nghost-%COMP%]{padding-top:1rem;padding-bottom:1rem}"],changeDetection:0})}}return i})();export{fe as PostCreateComponent};
