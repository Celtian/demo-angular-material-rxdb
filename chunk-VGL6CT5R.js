import{a as D,b as g,c as k}from"./chunk-MV3MJDH2.js";import{ha as v}from"./chunk-45EMDERJ.js";import{G as a,Ga as m,Ha as u,Pa as s,R as c,Z as l,ma as p,pa as d,wd as h,yb as f}from"./chunk-U2MS5ZFZ.js";var y=(()=>{let i=class i{constructor(t,e,n,o){this.apiService=t,this.confirm=e,this.snackBar=n,this.translate=o,this.id=u.required({alias:"appPostDelete"}),this.deleted=m()}onClick(){this.confirm.openCustomConfirmDialog(D.Delete).pipe(c(),a(t=>!!t),l(()=>this.apiService.delete(this.id()))).subscribe({next:()=>{this.deleted.emit(this.id()),this.snackBar.open(this.translate.instant("response.delete.success"),this.translate.instant("uni.close"))},error:()=>{this.snackBar.open(this.translate.instant("response.delete.failed"),this.translate.instant("uni.close"))}})}};i.\u0275fac=function(e){return new(e||i)(s(k),s(g),s(v),s(h))},i.\u0275dir=d({type:i,selectors:[["","appPostDelete",""]],hostBindings:function(e,n){e&1&&f("click",function(){return n.onClick()})},inputs:{id:[p.SignalBased,"appPostDelete","id"]},outputs:{deleted:"deleted"},standalone:!0});let r=i;return r})();export{y as a};
