"use strict";(self.webpackChunkdemo_angular_material_rxdb=self.webpackChunkdemo_angular_material_rxdb||[]).push([[757],{7757:(Q,g,a)=>{a.r(g),a.d(g,{PostCreateComponent:()=>K});var m=a(8484),E=a(6814),t=a(5879),A=a(1993),o=a(6223),_=a(2296),l=a(5195),P=a(617),C=a(2032),O=a(2596),u=a(2787),p=a(3694),d=a(9515),D=a(1374),c=a(7919),v=a(4852),I=a(8807),U=a(5991),x=a(4310),R=a(6241),b=a(2939),h=a(4170);function L(n,T){if(1&n){const r=t.EpF();t.TgZ(0,"button",10),t.NdJ("click",function(){t.CHM(r);const e=t.oxw();return t.KtG(e.form.controls.title.setValue(""))}),t.ALo(1,"translate"),t.ALo(2,"translate"),t.TgZ(3,"mat-icon"),t._uU(4,"close"),t.qZA()()}2&n&&(t.Q6J("matTooltip",t.lcZ(2,4,"UNI.clear")),t.uIk("aria-label",t.lcZ(1,2,"UNI.clear")))}function Z(n,T){if(1&n){const r=t.EpF();t.TgZ(0,"button",10),t.NdJ("click",function(){t.CHM(r);const e=t.oxw();return t.KtG(e.form.controls.body.setValue(""))}),t.ALo(1,"translate"),t.ALo(2,"translate"),t.TgZ(3,"mat-icon"),t._uU(4,"close"),t.qZA()()}2&n&&(t.Q6J("matTooltip",t.lcZ(2,4,"UNI.clear")),t.uIk("aria-label",t.lcZ(1,2,"UNI.clear")))}const M=function(n){return[n]};function B(n,T){1&n&&(t.TgZ(0,"div",11)(1,"a",12),t.ALo(2,"localize"),t._uU(3),t.ALo(4,"translate"),t.qZA(),t._UZ(5,"mat-icon",13),t.TgZ(6,"a",12),t.ALo(7,"localize"),t._uU(8),t.ALo(9,"translate"),t.qZA()()),2&n&&(t.xp6(1),t.Q6J("routerLink",t.VKq(12,M,t.lcZ(2,4,"/"))),t.xp6(2),t.Oqu(t.lcZ(4,6,"BREADCRUMBS.app.posts")),t.xp6(3),t.Q6J("routerLink",t.VKq(14,M,t.lcZ(7,8,"/create"))),t.xp6(2),t.Oqu(t.lcZ(9,10,"BREADCRUMBS.posts.create")))}let K=(()=>{class n{constructor(r,s,e,i,f,y,W,S,N,J,Y){this.fb=r,this.apiService=s,this.breadcrumbsPortalService=e,this.cdr=i,this.language=f,this.seoService=y,this.translate=W,this.lr=S,this.snackBar=N,this.router=J,this.confirm=Y,this.destroyRef=(0,t.f3M)(t.ktI),this.ROUTE_DEFINITION=c.R,this.form=this.fb.group({title:new o.NI("",{nonNullable:!0,validators:[o.kI.required,o.kI.min(3)]}),body:new o.NI("",{nonNullable:!0,validators:[o.kI.required,o.kI.min(3)]})})}canDeactivate(){return this.form.pristine||this.confirm.openCustomConfirmDialog(v.C.UnsavedWork)}ngOnInit(){this.breadcrumbsPortalService.setPortal(this.portalContent),setTimeout(()=>this.cdr.detectChanges()),this.language.language$.pipe((0,A.sL)(this.destroyRef)).subscribe(()=>{const r=this.lr.translateRoute(`/${c.R.POSTS.CREATE}`);this.seoService.setSeo({title:this.translate.instant(`SEO.${c.R.POSTS.CREATE}.title`),description:this.translate.instant(`SEO.${c.R.POSTS.CREATE}.description`)},r)})}ngOnDestroy(){this.portalContent?.detach()}onSubmit(){this.apiService.create(this.form.value).pipe((0,D.P)()).subscribe({next:r=>{this.form.reset(r),this.snackBar.open(this.translate.instant("response.create.success"),this.translate.instant("UNI.close"));const s=this.lr.translateRoute("/");this.router.navigate([s])},error:()=>{this.snackBar.open(this.translate.instant("response.create.failed"),this.translate.instant("UNI.close"))}})}onReset(r){r.preventDefault(),this.form.reset()}static#t=this.\u0275fac=function(s){return new(s||n)(t.Y36(o.qu),t.Y36(I.s),t.Y36(U.H),t.Y36(t.sBO),t.Y36(x.T),t.Y36(R.v),t.Y36(d.sK),t.Y36(p.An),t.Y36(b.ux),t.Y36(u.F0),t.Y36(v.w))};static#a=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-post-create"]],viewQuery:function(s,e){if(1&s&&t.Gf(m.ig,7),2&s){let i;t.iGM(i=t.CRH())&&(e.portalContent=i.first)}},standalone:!0,features:[t.jDz],decls:27,vars:21,consts:[[1,"flex","flex-col","gap-2","mt-2","text-center"],[3,"formGroup","ngSubmit","reset"],[1,"w-full"],["matInput","","type","text","formControlName","title"],["matSuffix","","mat-icon-button","",3,"matTooltip","click",4,"ngIf"],["matInput","","formControlName","body",3,"placeholder"],[1,"flex","justify-center","gap-2"],["mat-button","","color","primary","type","reset",3,"disabled"],["mat-flat-button","","color","primary","type","submit",3,"disabled"],["class","container flex items-center gap-1 py-4",4,"cdkPortal"],["matSuffix","","mat-icon-button","",3,"matTooltip","click"],[1,"container","flex","items-center","gap-1","py-4"],["mat-button","","color","primary",3,"routerLink"],["aria-hidden","false","aria-label","Arrow icon","fontIcon","chevron_right"]],template:function(s,e){1&s&&(t.TgZ(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title"),t._uU(3),t.qZA()(),t.TgZ(4,"mat-card-content",0)(5,"form",1),t.NdJ("ngSubmit",function(){return e.onSubmit()})("reset",function(f){return e.onReset(f)}),t.TgZ(6,"mat-form-field",2)(7,"mat-label"),t._uU(8),t.ALo(9,"translate"),t.qZA(),t._UZ(10,"input",3),t.YNc(11,L,5,6,"button",4),t.qZA(),t.TgZ(12,"mat-form-field",2)(13,"mat-label"),t._uU(14),t.ALo(15,"translate"),t.qZA(),t._UZ(16,"textarea",5),t.ALo(17,"translate"),t.YNc(18,Z,5,6,"button",4),t.qZA(),t.TgZ(19,"div",6)(20,"button",7),t._uU(21),t.ALo(22,"translate"),t.qZA(),t.TgZ(23,"button",8),t._uU(24),t.ALo(25,"translate"),t.qZA()()()()(),t.YNc(26,B,10,16,"div",9)),2&s&&(t.xp6(3),t.Oqu(e.form.controls.title.value),t.xp6(2),t.Q6J("formGroup",e.form),t.xp6(3),t.Oqu(t.lcZ(9,11,"form.post.title.label")),t.xp6(3),t.Q6J("ngIf",e.form.controls.title.value),t.xp6(3),t.Oqu(t.lcZ(15,13,"form.post.body.label")),t.xp6(2),t.Q6J("placeholder",t.lcZ(17,15,"form.post.body.placeholder")),t.xp6(2),t.Q6J("ngIf",e.form.controls.body.value),t.xp6(2),t.Q6J("disabled",e.form.pristine),t.xp6(1),t.hij(" ",t.lcZ(22,17,"UNI.reset")," "),t.xp6(2),t.Q6J("disabled",e.form.pristine||e.form.invalid),t.xp6(1),t.hij(" ",t.lcZ(25,19,"UNI.submit")," "))},dependencies:[E.ez,E.O5,o.UX,o._Y,o.Fj,o.JJ,o.JL,o.sg,o.u,l.QW,l.a8,l.dn,l.dk,l.n5,P.Ps,P.Hw,C.c,C.Nt,h.KE,h.hX,h.R9,_.ot,_.zs,_.lW,_.RK,O.AV,O.gM,m.eL,m.ig,d.aw,d.X$,u.Bz,u.rH,p.fQ,p.lO],styles:["[_nghost-%COMP%]{width:100%;margin-right:auto;margin-left:auto;padding-right:1rem;padding-left:1rem}@media (min-width: 640px){[_nghost-%COMP%]{max-width:640px}}@media (min-width: 768px){[_nghost-%COMP%]{max-width:768px}}@media (min-width: 1024px){[_nghost-%COMP%]{max-width:1024px}}@media (min-width: 1280px){[_nghost-%COMP%]{max-width:1280px}}@media (min-width: 1536px){[_nghost-%COMP%]{max-width:1536px}}[_nghost-%COMP%]{display:block}[_nghost-%COMP%] > [_ngcontent-%COMP%]:not([hidden]) ~ [_ngcontent-%COMP%]:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.5rem * var(--tw-space-y-reverse))}[_nghost-%COMP%]{padding-top:1rem;padding-bottom:1rem}"],changeDetection:0})}return n})()}}]);