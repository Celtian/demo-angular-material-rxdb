import{a as h,b as v,c as D}from"./chunk-ATKIBMBA.js";import{U as u}from"./chunk-EC4ABEIM.js";import{D as a,Ka as s,O as c,Oa as d,W as l,ja as p,ob as m,zd as f}from"./chunk-EYFDHA4V.js";var y=(()=>{let t=class t{constructor(i,e,n,o){this.apiService=i,this.confirm=e,this.snackBar=n,this.translate=o,this.deleted=new d}onClick(){this.confirm.openCustomConfirmDialog(h.Delete).pipe(c(),a(i=>!!i),l(()=>this.apiService.delete(this.id))).subscribe({next:()=>{this.deleted.emit(this.id),this.snackBar.open(this.translate.instant("response.delete.success"),this.translate.instant("uni.close"))},error:()=>{this.snackBar.open(this.translate.instant("response.delete.failed"),this.translate.instant("uni.close"))}})}};t.\u0275fac=function(e){return new(e||t)(s(D),s(v),s(u),s(f))},t.\u0275dir=p({type:t,selectors:[["","appPostDelete",""]],hostBindings:function(e,n){e&1&&m("click",function(){return n.onClick()})},inputs:{id:["appPostDelete","id"]},outputs:{deleted:"deleted"},standalone:!0});let r=t;return r})();export{y as a};