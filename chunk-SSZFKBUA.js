import{a as Pt,b as Tt}from"./chunk-LYHMEK5Y.js";import{a as ut,b as ft,e as ht,g as _t,h as I,j as xt,k as Ct,o as St,p as vt,q as bt,r as gt,t as It,u as yt,v as Et}from"./chunk-AQX3E55F.js";import{a as Ft,b as U}from"./chunk-5A3PH7KJ.js";import{a as V,b as wt,c as Dt}from"./chunk-7KRFO5HT.js";import{H as Mt,c as w,e as J,f as K,g as X,h as Y,i as Z,k as pt}from"./chunk-SYCKZKLN.js";import{a as Bt,b as kt,c as Nt,d as Ot,e as Vt,f as Ut}from"./chunk-SUPFOQJQ.js";import{a as Rt}from"./chunk-JPJ5IDA3.js";import{$a as G,$c as dt,B as j,Ca as v,D,Da as _,Gb as O,H as P,Ha as o,Ia as r,Ja as x,K as R,Lc as tt,Mc as et,Na as b,Nc as it,Qc as at,R as L,Ra as g,Rc as nt,S as A,Ta as f,Uc as ot,Vc as rt,W as C,Wc as st,X as S,Xa as d,Ya as h,Za as T,Zc as lt,_c as ct,ab as N,bb as Q,cb as s,cd as mt,db as l,dd as y,gb as q,hb as W,jb as H,la as a,ma as m,oa as z,pa as $,q as F,va as B,wa as u,x as M,ya as k}from"./chunk-DD7V534J.js";function Ht(e,c){if(e&1){let i=b();o(0,"div",11)(1,"button",12),g("click",function(){C(i);let t=f(2);return S(t.onDelete())}),d(2),s(3,"translate"),r()()}e&2&&(a(2),h(l(3,1,"UNI.delete")))}function Jt(e,c){if(e&1){let i=b();o(0,"button",13),g("click",function(){C(i);let t=f(2);return t.form.controls.title.setValue(""),S(t.form.controls.body.markAsDirty())}),s(1,"translate"),s(2,"translate"),o(3,"mat-icon"),d(4,"close"),r()()}e&2&&(u("matTooltip",l(2,4,"UNI.clear")),B("aria-label",l(1,2,"UNI.clear")))}function Kt(e,c){if(e&1){let i=b();o(0,"button",13),g("click",function(){C(i);let t=f(2);return t.form.controls.body.setValue(""),S(t.form.controls.body.markAsDirty())}),s(1,"translate"),s(2,"translate"),o(3,"mat-icon"),d(4,"close"),r()()}e&2&&(u("matTooltip",l(2,4,"UNI.clear")),B("aria-label",l(1,2,"UNI.clear")))}function Xt(e,c){if(e&1){let i=b();v(0,Ht,4,3,"div",1),o(1,"mat-card")(2,"mat-card-header")(3,"mat-card-subtitle"),d(4),r(),o(5,"mat-card-title"),d(6),r()(),o(7,"mat-card-content",2)(8,"form",3),g("ngSubmit",function(){C(i);let t=f();return S(t.onSubmit())})("reset",function(t){C(i);let p=f();return S(p.onReset(t))}),o(9,"mat-form-field",4)(10,"mat-label"),d(11),s(12,"translate"),r(),x(13,"input",5),v(14,Jt,5,6,"button",6),r(),o(15,"mat-form-field",4)(16,"mat-label"),d(17),s(18,"translate"),r(),x(19,"textarea",7),s(20,"translate"),v(21,Kt,5,6,"button",6),r(),o(22,"div",8)(23,"button",9),d(24),s(25,"translate"),r(),o(26,"button",10),d(27),s(28,"translate"),r()()()()()}if(e&2){let i=f();_(0,i.dataSource.state()==="data"?0:-1),a(3),k("blur-sm",i.dataSource.state()!=="data"),a(1),h("#"+i.dataSource.data().id),a(1),k("blur-sm",i.dataSource.state()!=="data"),a(1),h(i.dataSource.data().title),a(2),u("formGroup",i.form),a(3),h(l(12,17,"form.post.title.label")),a(3),_(14,i.form.controls.title.value?14:-1),a(3),h(l(18,19,"form.post.body.label")),a(2),u("placeholder",l(20,21,"form.post.body.placeholder")),a(2),_(21,i.form.controls.body.value?21:-1),a(2),u("disabled",i.form.pristine),a(1),T(" ",l(25,23,"UNI.reset")," "),a(2),u("disabled",i.form.pristine||i.form.invalid),a(1),T(" ",l(28,25,"UNI.submit")," ")}}function Yt(e,c){if(e&1&&(o(0,"mat-card")(1,"mat-card-content",14),x(2,"mat-icon",15),o(3,"div"),d(4),r()()()),e&2){let i=f();a(4),h(i.dataSource.error())}}function Zt(e,c){e&1&&(o(0,"mat-card")(1,"mat-card-content",14),x(2,"mat-icon",16),o(3,"div"),d(4),s(5,"translate"),r()()()),e&2&&(a(4),h(l(5,1,"ERROR.post-was-not-found")))}var te=(e,c)=>[e,c],jt=e=>[e];function ee(e,c){if(e&1&&(x(0,"mat-icon",19),o(1,"a",18),s(2,"localize"),d(3),r(),x(4,"mat-icon",19),o(5,"a",18),s(6,"localize"),d(7),s(8,"translate"),r()),e&2){let i=f(2);a(1),u("routerLink",Q(10,te,l(2,4,"/"),i.dataSource.data().id)),a(2),h(i.dataSource.data().id),a(2),u("routerLink",N(13,jt,l(6,6,"/"+i.dataSource.data().id+"/"+i.ROUTE_DEFINITION.POSTS.EDIT))),a(2),T(" ",l(8,8,"BREADCRUMBS.posts.edit"),"")}}function ie(e,c){if(e&1&&(o(0,"div",17)(1,"a",18),s(2,"localize"),d(3),s(4,"translate"),r(),v(5,ee,9,15),r()),e&2){let i=f();a(1),u("routerLink",N(7,jt,l(2,3,"/"))),a(2),h(l(4,5,"BREADCRUMBS.app.posts")),a(2),_(5,i.dataSource.state()==="data"?5:-1)}}var $e=(()=>{let c=class c{constructor(n,t,p,E,Lt,At,zt,$t,Gt,Qt,qt,Wt){this.breadcrumbsPortalService=n,this.route=t,this.language=p,this.seoService=E,this.translate=Lt,this.lr=At,this.cdr=zt,this.fb=$t,this.apiService=Gt,this.confirm=Qt,this.router=qt,this.snackBar=Wt,this.destroyRef=L($),this.dataSource=new Ft(U),this.ROUTE_DEFINITION=y,this.form=this.fb.nonNullable.group({title:["",[I.required,I.min(3)]],body:["",[I.required,I.min(3)]]})}canDeactivate(){return this.form.pristine||this.confirm.openCustomConfirmDialog(V.UnsavedWork)}ngOnInit(){this.breadcrumbsPortalService.setPortal(this.portalContent),setTimeout(()=>this.cdr.markForCheck());let n=this.route.paramMap.pipe(F(t=>t.get("id")));n.pipe(M(t=>!Number.isNaN(Number(t))),P(t=>this.language.language$.pipe(R({next:()=>{let p=this.lr.translateRoute(`/${t}/${y.POSTS.EDIT}`);this.seoService.setSeo({title:this.translate.instant(`SEO.${y.POSTS.EDIT}.title`),description:this.translate.instant(`SEO.${y.POSTS.EDIT}.description`)},p)}}))),O(this.destroyRef)).subscribe(),n.pipe(j(500),R(t=>{(typeof t!="string"||!t)&&this.dataSource.setData(U)}),M(t=>typeof t=="string"&&!!t),P(t=>this.apiService.detail(String(t))),O(this.destroyRef)).subscribe({next:t=>{this.dataSource.setData(t),this.form.patchValue(t)},error:()=>{let t=this.translate.instant("ERROR.unexpected-exception");this.dataSource.setError(t)}})}onSubmit(){this.apiService.patch(this.dataSource.data().id,this.form.value).pipe(D()).subscribe({next:n=>{this.dataSource.setData(n),this.form.reset(n),this.snackBar.open(this.translate.instant("response.update.success"),this.translate.instant("UNI.close"))},error:()=>{this.snackBar.open(this.translate.instant("response.update.failed"),this.translate.instant("UNI.close"))}})}onReset(n){n.preventDefault(),this.form.reset(this.dataSource.data())}onDelete(){this.confirm.openCustomConfirmDialog(V.Delete).pipe(D(),M(n=>!!n),P(()=>this.apiService.delete(this.dataSource.data().id))).subscribe({next:()=>{this.snackBar.open(this.translate.instant("response.delete.success"),this.translate.instant("UNI.close"));let n=this.lr.translateRoute("/");this.router.navigate([n])},error:()=>{this.snackBar.open(this.translate.instant("response.delete.failed"),this.translate.instant("UNI.close"))}})}ngOnDestroy(){this.portalContent?.detach()}};c.\u0275fac=function(t){return new(t||c)(m(pt),m(it),m(mt),m(Rt),m(ot),m(lt),m(z),m(gt),m(Dt),m(wt),m(at),m(Mt))},c.\u0275cmp=A({type:c,selectors:[["app-post-edit"]],viewQuery:function(t,p){if(t&1&&W(w,7),t&2){let E;q(E=H())&&(p.portalContent=E.first)}},standalone:!0,features:[G],decls:4,vars:3,consts:[["class","container flex items-center gap-1 py-4",4,"cdkPortal"],["class","flex items-end justify-end gap-2"],[1,"flex","flex-col","gap-2","mt-2","text-center"],[3,"formGroup","ngSubmit","reset"],[1,"w-full"],["matInput","","type","text","formControlName","title"],["matSuffix","","mat-icon-button","",3,"matTooltip"],["matInput","","formControlName","body",3,"placeholder"],[1,"flex","justify-center","gap-2"],["mat-button","","color","primary","type","reset",3,"disabled"],["mat-flat-button","","color","primary","type","submit",3,"disabled"],[1,"flex","items-end","justify-end","gap-2"],["mat-button","","color","accent",3,"click"],["matSuffix","","mat-icon-button","",3,"matTooltip","click"],[1,"flex","flex-col","gap-2","text-center"],["aria-hidden","false","aria-label","Error icon","fontIcon","error"],["aria-hidden","false","aria-label","Warning icon","fontIcon","warning"],[1,"container","flex","items-center","gap-1","py-4"],["mat-button","","color","primary",3,"routerLink"],["aria-hidden","false","aria-label","Arrow icon","fontIcon","chevron_right"]],template:function(t,p){t&1&&v(0,Xt,29,27,"mat-card")(1,Yt,5,1,"mat-card")(2,Zt,6,3,"mat-card")(3,ie,6,9,"div",0),t&2&&(_(0,p.dataSource.state()==="loading"||p.dataSource.state()==="data"?0:-1),a(1),_(1,p.dataSource.state()==="error"?1:-1),a(1),_(2,p.dataSource.state()==="empty"?2:-1))},dependencies:[nt,dt,ct,It,St,_t,xt,Ct,vt,bt,et,tt,Z,X,K,Y,Ut,Bt,Nt,Vt,Ot,kt,Et,yt,Tt,Pt,ht,ut,ft,st,rt,J,w],styles:["[_nghost-%COMP%]{width:100%;margin-right:auto;margin-left:auto;padding-right:1rem;padding-left:1rem}@media (min-width: 640px){[_nghost-%COMP%]{max-width:640px}}@media (min-width: 768px){[_nghost-%COMP%]{max-width:768px}}@media (min-width: 1024px){[_nghost-%COMP%]{max-width:1024px}}@media (min-width: 1280px){[_nghost-%COMP%]{max-width:1280px}}@media (min-width: 1536px){[_nghost-%COMP%]{max-width:1536px}}[_nghost-%COMP%]{display:block}[_nghost-%COMP%] > [_ngcontent-%COMP%]:not([hidden]) ~ [_ngcontent-%COMP%]:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.5rem * var(--tw-space-y-reverse))}[_nghost-%COMP%]{padding-top:1rem;padding-bottom:1rem}"],changeDetection:0});let e=c;return e})();export{$e as PostEditComponent};