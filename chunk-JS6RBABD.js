import{a as vt,b as bt,c as _t}from"./chunk-Y2K6LC4N.js";import{a as it,b as rt,e as ot,g as at,h as C,j as nt,k as lt,m as B,o as mt,p as st,q as pt,r as ct,t as dt,u as ut,v as ft}from"./chunk-JIZFICXS.js";import{a as gt,b as xt,c as Mt}from"./chunk-YOF4SGQR.js";import{c as M,e as L,f as A,g as G,h as Q,ha as ht,i as q,ja as Ct,n as W,o as J,t as Z,u as $,v as tt,x as et}from"./chunk-MD3C45FJ.js";import{a as yt,b as St,c as wt,e as It,f as Pt}from"./chunk-7PYJMYAL.js";import{$b as z,Bd as K,Cd as X,Da as R,Db as E,Dd as Y,Eb as F,Fb as N,Jb as p,Kb as u,Lb as P,Nb as j,Ob as T,Pa as e,Qa as s,Qb as r,R as D,Rb as o,cb as v,fb as b,gb as c,ja as O,kb as w,ma as V,ob as n,pb as m,qb as _,ub as g,wa as f,xa as h,xb as x,yd as U,zb as I,zd as H}from"./chunk-OKNWWQ6Y.js";var Tt=i=>[i];function Ot(i,k){if(i&1){let l=g();n(0,"button",11),r(1,"translate"),r(2,"translate"),x("click",function(){f(l);let t=I();return h(t.form.controls.title.setValue(""))}),n(3,"mat-icon"),p(4,"close"),m()()}i&2&&(c("matTooltip",o(1,2,"uni.clear")),b("aria-label",o(2,4,"uni.clear")))}function Vt(i,k){if(i&1){let l=g();n(0,"button",11),r(1,"translate"),r(2,"translate"),x("click",function(){f(l);let t=I();return h(t.form.controls.body.setValue(""))}),n(3,"mat-icon"),p(4,"close"),m()()}i&2&&(c("matTooltip",o(1,2,"uni.clear")),b("aria-label",o(2,4,"uni.clear")))}function Rt(i,k){i&1&&(n(0,"div",12)(1,"a",13),r(2,"localize"),p(3),r(4,"translate"),m(),_(5,"mat-icon",14),r(6,"translate"),n(7,"a",13),r(8,"localize"),p(9),r(10,"translate"),m()()),i&2&&(e(),c("routerLink",T(15,Tt,o(2,5,"/"))),e(2),u(o(4,7,"breadcrumbs.app.posts")),e(2),b("aria-label",o(6,9,"uni.aria-label.arrow-icon")),e(2),c("routerLink",T(17,Tt,o(8,11,"/create"))),e(2),u(o(10,13,"breadcrumbs.posts.create")))}var ve=(()=>{class i{constructor(l,a,t,d,y,S,Bt,kt,Dt){this.fb=l,this.apiService=a,this.breadcrumbsPortalService=t,this.cdr=d,this.translate=y,this.lr=S,this.snackBar=Bt,this.router=kt,this.confirm=Dt,this.destroyRef=O(R),this.ROUTE_DEFINITION=Ct,this.form=this.fb.group({title:new B("",{nonNullable:!0,validators:[C.required,C.min(3)]}),body:new B("",{nonNullable:!0,validators:[C.required,C.min(3)]})})}canDeactivate(){return this.form.pristine||this.confirm.openCustomConfirmDialog(gt.UnsavedWork)}ngOnInit(){this.breadcrumbsPortalService.setPortal(this.portalContent),setTimeout(()=>this.cdr.detectChanges())}ngOnDestroy(){this.portalContent?.detach()}onSubmit(){this.apiService.create(this.form.value).pipe(D()).subscribe({next:l=>{this.form.reset(l),this.snackBar.open(this.translate.instant("response.create.success"),this.translate.instant("uni.close"));let a=this.lr.translateRoute("/");this.router.navigate([a])},error:()=>{this.snackBar.open(this.translate.instant("response.create.failed"),this.translate.instant("uni.close"))}})}onReset(l){l.preventDefault(),this.form.reset()}static{this.\u0275fac=function(a){return new(a||i)(s(ct),s(Mt),s(et),s(z),s(K),s(Z),s(ht),s(W),s(xt))}}static{this.\u0275cmp=V({type:i,selectors:[["app-post-create"]],viewQuery:function(a,t){if(a&1&&E(M,7),a&2){let d;F(d=N())&&(t.portalContent=d.first)}},standalone:!0,features:[j],decls:28,vars:21,consts:[["autosize","cdkTextareaAutosize"],[1,"flex","flex-col","gap-2","mt-2","text-center"],[3,"ngSubmit","reset","formGroup"],[1,"w-full"],["matInput","","type","text","formControlName","title"],["matSuffix","","mat-icon-button","",3,"matTooltip"],["matInput","","cdkTextareaAutosize","","formControlName","body",3,"placeholder"],[1,"flex","justify-center","gap-2"],["mat-button","","color","primary","type","reset",3,"disabled"],["mat-flat-button","","color","primary","type","submit",3,"disabled"],["class","container flex items-center gap-1 py-4",4,"cdkPortal"],["matSuffix","","mat-icon-button","",3,"click","matTooltip"],[1,"container","flex","items-center","gap-1","py-4"],["mat-button","","color","primary",3,"routerLink"],["aria-hidden","false","fontIcon","chevron_right"]],template:function(a,t){if(a&1){let d=g();n(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title"),p(3),m()(),n(4,"mat-card-content",1)(5,"form",2),x("ngSubmit",function(){return f(d),h(t.onSubmit())})("reset",function(S){return f(d),h(t.onReset(S))}),n(6,"mat-form-field",3)(7,"mat-label"),p(8),r(9,"translate"),m(),_(10,"input",4),v(11,Ot,5,6,"button",5),m(),n(12,"mat-form-field",3)(13,"mat-label"),p(14),r(15,"translate"),m(),_(16,"textarea",6,0),r(18,"translate"),v(19,Vt,5,6,"button",5),m(),n(20,"div",7)(21,"button",8),p(22),r(23,"translate"),m(),n(24,"button",9),p(25),r(26,"translate"),m()()()()(),v(27,Rt,11,19,"div",10)}a&2&&(e(3),u(t.form.controls.title.value),e(2),c("formGroup",t.form),e(3),u(o(9,11,"form.post.title.label")),e(3),w(t.form.controls.title.value?11:-1),e(3),u(o(15,13,"form.post.body.label")),e(2),c("placeholder",o(18,15,"form.post.body.placeholder")),e(3),w(t.form.controls.body.value?19:-1),e(2),c("disabled",t.form.pristine),e(),P(" ",o(23,17,"uni.reset")," "),e(2),c("disabled",t.form.pristine||t.form.invalid),e(),P(" ",o(26,19,"uni.submit")," "))},dependencies:[dt,mt,at,nt,lt,st,pt,Pt,yt,wt,It,St,H,U,_t,bt,ot,it,rt,vt,q,G,A,Q,ft,ut,L,M,Y,X,J,tt,$],styles:["[_nghost-%COMP%]{width:100%;margin-right:auto;margin-left:auto;padding-right:1rem;padding-left:1rem}@media (min-width: 640px){[_nghost-%COMP%]{max-width:640px}}@media (min-width: 768px){[_nghost-%COMP%]{max-width:768px}}@media (min-width: 1024px){[_nghost-%COMP%]{max-width:1024px}}@media (min-width: 1280px){[_nghost-%COMP%]{max-width:1280px}}@media (min-width: 1536px){[_nghost-%COMP%]{max-width:1536px}}[_nghost-%COMP%]{display:block}[_nghost-%COMP%] > [_ngcontent-%COMP%]:not([hidden]) ~ [_ngcontent-%COMP%]:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.5rem * var(--tw-space-y-reverse))}[_nghost-%COMP%]{padding-top:1rem;padding-bottom:1rem}"],changeDetection:0})}}return i})();export{ve as PostCreateComponent};
