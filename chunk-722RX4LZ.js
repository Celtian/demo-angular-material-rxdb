import{a as v,b as D,c as k}from"./chunk-K3NWRN2I.js";import{ha as h}from"./chunk-FOP7KEGR.js";import{Cd as u,G as a,Ia as d,Ja as m,Qa as s,R as c,Z as l,oa as p,yb as f}from"./chunk-J44DNVTL.js";var x=(()=>{let i=class i{constructor(t,e,n,o){this.apiService=t,this.confirm=e,this.snackBar=n,this.translate=o,this.id=m.required({alias:"appPostDelete"}),this.deleted=d()}onClick(){this.confirm.openCustomConfirmDialog(v.Delete).pipe(c(),a(t=>!!t),l(()=>this.apiService.delete(this.id()))).subscribe({next:()=>{this.deleted.emit(this.id()),this.snackBar.open(this.translate.instant("response.delete.success"),this.translate.instant("uni.close"))},error:()=>{this.snackBar.open(this.translate.instant("response.delete.failed"),this.translate.instant("uni.close"))}})}};i.\u0275fac=function(e){return new(e||i)(s(k),s(D),s(h),s(u))},i.\u0275dir=p({type:i,selectors:[["","appPostDelete",""]],hostBindings:function(e,n){e&1&&f("click",function(){return n.onClick()})},inputs:{id:[1,"appPostDelete","id"]},outputs:{deleted:"deleted"},standalone:!0});let r=i;return r})();export{x as a};
