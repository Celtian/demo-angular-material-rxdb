import{G as gt,Wa as U,aa as ht,x as ct}from"./chunk-GOCEVBYL.js";var qe=typeof global=="object"&&global&&global.Object===Object&&global,z=qe;var Ue=typeof self=="object"&&self&&self.Object===Object&&self,ze=z||Ue||Function("return this")(),l=ze;var He=l.Symbol,b=He;var yt=Object.prototype,Ke=yt.hasOwnProperty,$e=yt.toString,N=b?b.toStringTag:void 0;function Je(t){var e=Ke.call(t,N),r=t[N];try{t[N]=void 0;var a=!0}catch{}var f=$e.call(t);return a&&(e?t[N]=r:delete t[N]),f}var bt=Je;var Xe=Object.prototype,Ye=Xe.toString;function Ze(t){return Ye.call(t)}var _t=Ze;var Qe="[object Null]",Ve="[object Undefined]",vt=b?b.toStringTag:void 0;function ke(t){return t==null?t===void 0?Ve:Qe:vt&&vt in Object(t)?bt(t):_t(t)}var _=ke;function tr(t){return t!=null&&typeof t=="object"}var v=tr;var er=Array.isArray,E=er;function rr(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var H=rr;var ar="[object AsyncFunction]",or="[object Function]",fr="[object GeneratorFunction]",sr="[object Proxy]";function pr(t){if(!H(t))return!1;var e=_(t);return e==or||e==fr||e==ar||e==sr}var K=pr;var ir=l["__core-js_shared__"],$=ir;var At=function(){var t=/[^.]+$/.exec($&&$.keys&&$.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function ur(t){return!!At&&At in t}var Tt=ur;var lr=Function.prototype,nr=lr.toString;function mr(t){if(t!=null){try{return nr.call(t)}catch{}try{return t+""}catch{}}return""}var A=mr;var dr=/[\\^$.*+?()[\]{}|]/g,xr=/^\[object .+?Constructor\]$/,cr=Function.prototype,gr=Object.prototype,hr=cr.toString,yr=gr.hasOwnProperty,br=RegExp("^"+hr.call(yr).replace(dr,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function _r(t){if(!H(t)||Tt(t))return!1;var e=K(t)?br:xr;return e.test(A(t))}var Ot=_r;function vr(t,e){return t?.[e]}var St=vr;function Ar(t,e){var r=St(t,e);return Ot(r)?r:void 0}var c=Ar;var Tr=c(l,"WeakMap"),J=Tr;var Or=9007199254740991,Sr=/^(?:0|[1-9]\d*)$/;function wr(t,e){var r=typeof t;return e=e??Or,!!e&&(r=="number"||r!="symbol"&&Sr.test(t))&&t>-1&&t%1==0&&t<e}var wt=wr;function jr(t,e){return t===e||t!==t&&e!==e}var X=jr;var Ir=9007199254740991;function Pr(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=Ir}var Y=Pr;function Cr(t){return t!=null&&Y(t.length)&&!K(t)}var jt=Cr;var Er=Object.prototype;function Dr(t){var e=t&&t.constructor,r=typeof e=="function"&&e.prototype||Er;return t===r}var It=Dr;function Lr(t,e){for(var r=-1,a=Array(t);++r<t;)a[r]=e(r);return a}var Pt=Lr;var Rr="[object Arguments]";function Mr(t){return v(t)&&_(t)==Rr}var ft=Mr;var Ct=Object.prototype,Br=Ct.hasOwnProperty,Nr=Ct.propertyIsEnumerable,Fr=ft(function(){return arguments}())?ft:function(t){return v(t)&&Br.call(t,"callee")&&!Nr.call(t,"callee")},Et=Fr;function Gr(){return!1}var Dt=Gr;var Mt=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Lt=Mt&&typeof module=="object"&&module&&!module.nodeType&&module,Wr=Lt&&Lt.exports===Mt,Rt=Wr?l.Buffer:void 0,qr=Rt?Rt.isBuffer:void 0,Ur=qr||Dt,F=Ur;var zr="[object Arguments]",Hr="[object Array]",Kr="[object Boolean]",$r="[object Date]",Jr="[object Error]",Xr="[object Function]",Yr="[object Map]",Zr="[object Number]",Qr="[object Object]",Vr="[object RegExp]",kr="[object Set]",ta="[object String]",ea="[object WeakMap]",ra="[object ArrayBuffer]",aa="[object DataView]",oa="[object Float32Array]",fa="[object Float64Array]",sa="[object Int8Array]",pa="[object Int16Array]",ia="[object Int32Array]",ua="[object Uint8Array]",la="[object Uint8ClampedArray]",na="[object Uint16Array]",ma="[object Uint32Array]",s={};s[oa]=s[fa]=s[sa]=s[pa]=s[ia]=s[ua]=s[la]=s[na]=s[ma]=!0;s[zr]=s[Hr]=s[ra]=s[Kr]=s[aa]=s[$r]=s[Jr]=s[Xr]=s[Yr]=s[Zr]=s[Qr]=s[Vr]=s[kr]=s[ta]=s[ea]=!1;function da(t){return v(t)&&Y(t.length)&&!!s[_(t)]}var Bt=da;function xa(t){return function(e){return t(e)}}var Nt=xa;var Ft=typeof exports=="object"&&exports&&!exports.nodeType&&exports,G=Ft&&typeof module=="object"&&module&&!module.nodeType&&module,ca=G&&G.exports===Ft,st=ca&&z.process,ga=function(){try{var t=G&&G.require&&G.require("util").types;return t||st&&st.binding&&st.binding("util")}catch{}}(),pt=ga;var Gt=pt&&pt.isTypedArray,ha=Gt?Nt(Gt):Bt,Z=ha;var ya=Object.prototype,ba=ya.hasOwnProperty;function _a(t,e){var r=E(t),a=!r&&Et(t),f=!r&&!a&&F(t),o=!r&&!a&&!f&&Z(t),i=r||a||f||o,u=i?Pt(t.length,String):[],n=u.length;for(var p in t)(e||ba.call(t,p))&&!(i&&(p=="length"||f&&(p=="offset"||p=="parent")||o&&(p=="buffer"||p=="byteLength"||p=="byteOffset")||wt(p,n)))&&u.push(p);return u}var Wt=_a;function va(t,e){return function(r){return t(e(r))}}var qt=va;var Aa=qt(Object.keys,Object),Ut=Aa;var Ta=Object.prototype,Oa=Ta.hasOwnProperty;function Sa(t){if(!It(t))return Ut(t);var e=[];for(var r in Object(t))Oa.call(t,r)&&r!="constructor"&&e.push(r);return e}var zt=Sa;function wa(t){return jt(t)?Wt(t):zt(t)}var Ht=wa;var ja=c(Object,"create"),T=ja;function Ia(){this.__data__=T?T(null):{},this.size=0}var Kt=Ia;function Pa(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var $t=Pa;var Ca="__lodash_hash_undefined__",Ea=Object.prototype,Da=Ea.hasOwnProperty;function La(t){var e=this.__data__;if(T){var r=e[t];return r===Ca?void 0:r}return Da.call(e,t)?e[t]:void 0}var Jt=La;var Ra=Object.prototype,Ma=Ra.hasOwnProperty;function Ba(t){var e=this.__data__;return T?e[t]!==void 0:Ma.call(e,t)}var Xt=Ba;var Na="__lodash_hash_undefined__";function Fa(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=T&&e===void 0?Na:e,this}var Yt=Fa;function L(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var a=t[e];this.set(a[0],a[1])}}L.prototype.clear=Kt;L.prototype.delete=$t;L.prototype.get=Jt;L.prototype.has=Xt;L.prototype.set=Yt;var it=L;function Ga(){this.__data__=[],this.size=0}var Zt=Ga;function Wa(t,e){for(var r=t.length;r--;)if(X(t[r][0],e))return r;return-1}var S=Wa;var qa=Array.prototype,Ua=qa.splice;function za(t){var e=this.__data__,r=S(e,t);if(r<0)return!1;var a=e.length-1;return r==a?e.pop():Ua.call(e,r,1),--this.size,!0}var Qt=za;function Ha(t){var e=this.__data__,r=S(e,t);return r<0?void 0:e[r][1]}var Vt=Ha;function Ka(t){return S(this.__data__,t)>-1}var kt=Ka;function $a(t,e){var r=this.__data__,a=S(r,t);return a<0?(++this.size,r.push([t,e])):r[a][1]=e,this}var te=$a;function R(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var a=t[e];this.set(a[0],a[1])}}R.prototype.clear=Zt;R.prototype.delete=Qt;R.prototype.get=Vt;R.prototype.has=kt;R.prototype.set=te;var w=R;var Ja=c(l,"Map"),j=Ja;function Xa(){this.size=0,this.__data__={hash:new it,map:new(j||w),string:new it}}var ee=Xa;function Ya(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}var re=Ya;function Za(t,e){var r=t.__data__;return re(e)?r[typeof e=="string"?"string":"hash"]:r.map}var I=Za;function Qa(t){var e=I(this,t).delete(t);return this.size-=e?1:0,e}var ae=Qa;function Va(t){return I(this,t).get(t)}var oe=Va;function ka(t){return I(this,t).has(t)}var fe=ka;function to(t,e){var r=I(this,t),a=r.size;return r.set(t,e),this.size+=r.size==a?0:1,this}var se=to;function M(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var a=t[e];this.set(a[0],a[1])}}M.prototype.clear=ee;M.prototype.delete=ae;M.prototype.get=oe;M.prototype.has=fe;M.prototype.set=se;var Q=M;function eo(t,e){for(var r=-1,a=e.length,f=t.length;++r<a;)t[f+r]=e[r];return t}var pe=eo;function ro(){this.__data__=new w,this.size=0}var ie=ro;function ao(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r}var ue=ao;function oo(t){return this.__data__.get(t)}var le=oo;function fo(t){return this.__data__.has(t)}var ne=fo;var so=200;function po(t,e){var r=this.__data__;if(r instanceof w){var a=r.__data__;if(!j||a.length<so-1)return a.push([t,e]),this.size=++r.size,this;r=this.__data__=new Q(a)}return r.set(t,e),this.size=r.size,this}var me=po;function B(t){var e=this.__data__=new w(t);this.size=e.size}B.prototype.clear=ie;B.prototype.delete=ue;B.prototype.get=le;B.prototype.has=ne;B.prototype.set=me;var V=B;function io(t,e){for(var r=-1,a=t==null?0:t.length,f=0,o=[];++r<a;){var i=t[r];e(i,r,t)&&(o[f++]=i)}return o}var de=io;function uo(){return[]}var xe=uo;var lo=Object.prototype,no=lo.propertyIsEnumerable,ce=Object.getOwnPropertySymbols,mo=ce?function(t){return t==null?[]:(t=Object(t),de(ce(t),function(e){return no.call(t,e)}))}:xe,ge=mo;function xo(t,e,r){var a=e(t);return E(t)?a:pe(a,r(t))}var he=xo;function co(t){return he(t,Ht,ge)}var ut=co;var go=c(l,"DataView"),k=go;var ho=c(l,"Promise"),tt=ho;var yo=c(l,"Set"),et=yo;var ye="[object Map]",bo="[object Object]",be="[object Promise]",_e="[object Set]",ve="[object WeakMap]",Ae="[object DataView]",_o=A(k),vo=A(j),Ao=A(tt),To=A(et),Oo=A(J),D=_;(k&&D(new k(new ArrayBuffer(1)))!=Ae||j&&D(new j)!=ye||tt&&D(tt.resolve())!=be||et&&D(new et)!=_e||J&&D(new J)!=ve)&&(D=function(t){var e=_(t),r=e==bo?t.constructor:void 0,a=r?A(r):"";if(a)switch(a){case _o:return Ae;case vo:return ye;case Ao:return be;case To:return _e;case Oo:return ve}return e});var lt=D;var So=l.Uint8Array,nt=So;var wo="__lodash_hash_undefined__";function jo(t){return this.__data__.set(t,wo),this}var Te=jo;function Io(t){return this.__data__.has(t)}var Oe=Io;function rt(t){var e=-1,r=t==null?0:t.length;for(this.__data__=new Q;++e<r;)this.add(t[e])}rt.prototype.add=rt.prototype.push=Te;rt.prototype.has=Oe;var Se=rt;function Po(t,e){for(var r=-1,a=t==null?0:t.length;++r<a;)if(e(t[r],r,t))return!0;return!1}var we=Po;function Co(t,e){return t.has(e)}var je=Co;var Eo=1,Do=2;function Lo(t,e,r,a,f,o){var i=r&Eo,u=t.length,n=e.length;if(u!=n&&!(i&&n>u))return!1;var p=o.get(t),h=o.get(e);if(p&&h)return p==e&&h==t;var d=-1,m=!0,y=r&Do?new Se:void 0;for(o.set(t,e),o.set(e,t);++d<u;){var x=t[d],g=e[d];if(a)var O=i?a(g,x,d,e,t,o):a(x,g,d,t,e,o);if(O!==void 0){if(O)continue;m=!1;break}if(y){if(!we(e,function(P,C){if(!je(y,C)&&(x===P||f(x,P,r,a,o)))return y.push(C)})){m=!1;break}}else if(!(x===g||f(x,g,r,a,o))){m=!1;break}}return o.delete(t),o.delete(e),m}var at=Lo;function Ro(t){var e=-1,r=Array(t.size);return t.forEach(function(a,f){r[++e]=[f,a]}),r}var Ie=Ro;function Mo(t){var e=-1,r=Array(t.size);return t.forEach(function(a){r[++e]=a}),r}var Pe=Mo;var Bo=1,No=2,Fo="[object Boolean]",Go="[object Date]",Wo="[object Error]",qo="[object Map]",Uo="[object Number]",zo="[object RegExp]",Ho="[object Set]",Ko="[object String]",$o="[object Symbol]",Jo="[object ArrayBuffer]",Xo="[object DataView]",Ce=b?b.prototype:void 0,mt=Ce?Ce.valueOf:void 0;function Yo(t,e,r,a,f,o,i){switch(r){case Xo:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case Jo:return!(t.byteLength!=e.byteLength||!o(new nt(t),new nt(e)));case Fo:case Go:case Uo:return X(+t,+e);case Wo:return t.name==e.name&&t.message==e.message;case zo:case Ko:return t==e+"";case qo:var u=Ie;case Ho:var n=a&Bo;if(u||(u=Pe),t.size!=e.size&&!n)return!1;var p=i.get(t);if(p)return p==e;a|=No,i.set(t,e);var h=at(u(t),u(e),a,f,o,i);return i.delete(t),h;case $o:if(mt)return mt.call(t)==mt.call(e)}return!1}var Ee=Yo;var Zo=1,Qo=Object.prototype,Vo=Qo.hasOwnProperty;function ko(t,e,r,a,f,o){var i=r&Zo,u=ut(t),n=u.length,p=ut(e),h=p.length;if(n!=h&&!i)return!1;for(var d=n;d--;){var m=u[d];if(!(i?m in e:Vo.call(e,m)))return!1}var y=o.get(t),x=o.get(e);if(y&&x)return y==e&&x==t;var g=!0;o.set(t,e),o.set(e,t);for(var O=i;++d<n;){m=u[d];var P=t[m],C=e[m];if(a)var xt=i?a(C,P,m,e,t,o):a(P,C,m,t,e,o);if(!(xt===void 0?P===C||f(P,C,r,a,o):xt)){g=!1;break}O||(O=m=="constructor")}if(g&&!O){var W=t.constructor,q=e.constructor;W!=q&&"constructor"in t&&"constructor"in e&&!(typeof W=="function"&&W instanceof W&&typeof q=="function"&&q instanceof q)&&(g=!1)}return o.delete(t),o.delete(e),g}var De=ko;var tf=1,Le="[object Arguments]",Re="[object Array]",ot="[object Object]",ef=Object.prototype,Me=ef.hasOwnProperty;function rf(t,e,r,a,f,o){var i=E(t),u=E(e),n=i?Re:lt(t),p=u?Re:lt(e);n=n==Le?ot:n,p=p==Le?ot:p;var h=n==ot,d=p==ot,m=n==p;if(m&&F(t)){if(!F(e))return!1;i=!0,h=!1}if(m&&!h)return o||(o=new V),i||Z(t)?at(t,e,r,a,f,o):Ee(t,e,n,r,a,f,o);if(!(r&tf)){var y=h&&Me.call(t,"__wrapped__"),x=d&&Me.call(e,"__wrapped__");if(y||x){var g=y?t.value():t,O=x?e.value():e;return o||(o=new V),f(g,O,r,a,o)}}return m?(o||(o=new V),De(t,e,r,a,f,o)):!1}var Be=rf;function Ne(t,e,r,a,f){return t===e?!0:t==null||e==null||!v(t)&&!v(e)?t!==t&&e!==e:Be(t,e,r,a,Ne,f)}var Fe=Ne;function af(t,e){return Fe(t,e)}var dt=af;var Ge="loading";var We=class{constructor(e){this.initialData=e,this.state=U(Ge),this.error=U(""),this.data=U(this.initialData)}updateState(){this.error()?this.state.set("error"):dt(this.data(),this.initialData)?this.state.set("empty"):this.state.set("data")}setError(e){this.error.set(e),this.data.set(this.initialData),this.updateState()}setData(e){this.data.set(e||this.initialData),this.updateState()}};var _u={id:"029d4f5b-c45c-4ace-bd55-c700d1764ceb",body:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente harum debitis eius et eaque beatae qui delectus ullam esse, quis distinctio fugit quod. Doloremque consequatur commodi id, corporis iure cum?",title:"Lorem ipsum dolor sit amet"};var Tu=()=>t=>t.pipe(gt(e=>!!e));var wu=()=>t=>t.pipe(ct(e=>e.get("id")||""));var Pu=t=>e=>e.pipe(ht(r=>{r||t.setData()}));export{We as a,_u as b,Tu as c,wu as d,Pu as e};