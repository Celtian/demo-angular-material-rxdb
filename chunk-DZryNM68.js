import {g,w as wX,T as Te,a as gr,Y as YT,o as oZ,D as De,n as nr,f as fp,b as w,e as ev,W as Wd,c as Dt,d as ef,h as wo,U,m,X as Xe,F,S as Sa,N as No,Z as Z$1,K as KT,i as Dg,j as ne$1,k as hr,v as vs,O,R as Re,l as fr,B as Bd,p as vv,L as Ln$1,$ as $n,G as GE,z,q as gm,y as yr,r as n_,s as q,H,t as Dv,u as ge,V as Vi,x as bn,A as ym,C as de,E as lv,I as Ur,J as Yl,M as lw,P as Co,Q as ml,_ as ba,a0 as ya,a1 as Ee,a2 as fe,a3 as kg,a4 as qi$1,a5 as wy,a6 as lm,a7 as lr,a8 as Pm,a9 as hr$1,aa as $t,ab as qo,ac as QX,ad as xr,ae as Js,af as Dw,ag as dt$1,ah as EX,ai as ps,aj as wt,ak as dv,al as dm,am as Rr,an as Bt,ao as _k,ap as cv,aq as av,ar as tI,as as Pl,at as jl,au as xs,av as xl,aw as Xg,ax as fC,ay as gI,az as Jg,aA as pC,aB as im,aC as _o,aD as qs,aE as qg,aF as Em,aG as cm,aH as MC,aI as NC,aJ as am,aK as zg,aL as Uu,aM as nm,aN as Rl,aO as Ol,aP as Dv$1,aQ as lS,aR as kn$1,aS as Xt,aT as qU,aU as WU,aV as Mg,aW as Tg,aX as s0,aY as Kr,aZ as Do,a_ as Fr,a$ as di,b0 as et$1,b1 as xn$1,b2 as _r,b3 as bi,b4 as fr$1,b5 as ao$1,b6 as o$,b7 as un$1,b8 as $D,b9 as HT,ba as r$,bb as XC,bc as cb,bd as nw,be as kl,bf as Wg,bg as Fl,bh as ym$1,bi as lb,bj as ow,bk as sb,bl as op,bm as wC,bn as Vl,bo as xC,bp as TC,bq as ab,br as Gf,bs as Wf,bt as sm,bu as Bl,bv as rm,bw as em}from'./main-BCV4DESR.js';import {V as Ve$1,B as Be}from'./chunk-CZSi7KtG.js';import {w as w$1}from'./chunk-DLNETfid.js';import {r as rt$1}from'./chunk-W2feE19t.js';var vn=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],Cn=["mat-icon, [matMenuItemIcon]","*"];function Dn(n,a){n&1&&(op(),xs(0,"svg",2),Xg(1,"polygon",3),xl());}var Rn=["*"];function Mn(n,a){if(n&1){let e=wC();Rl(0,"div",0),sm("click",function(){Gf(e);let i=TC();return Wf(i.closed.emit("click"))})("animationstart",function(i){Gf(e);let o=TC();return Wf(o._onAnimationStart(i.animationName))})("animationend",function(i){Gf(e);let o=TC();return Wf(o._onAnimationDone(i.animationName))})("animationcancel",function(i){Gf(e);let o=TC();return Wf(o._onAnimationDone(i.animationName))}),Rl(1,"div",1),jl(2),Ol()();}if(n&2){let e=TC();Bl(e._classList),qs("mat-menu-panel-animations-disabled",e._animationsDisabled)("mat-menu-panel-exit-animation",e._panelAnimationState==="void")("mat-menu-panel-animating",e._isAnimating()),rm("id",e.panelId),_o("aria-label",e.ariaLabel||null)("aria-labelledby",e.ariaLabelledby||null)("aria-describedby",e.ariaDescribedby||null);}}var Je=new m("MAT_MENU_PANEL"),Se=(()=>{class n{_elementRef=g(Xe);_document=g(F);_focusMonitor=g(Sa);_parentMenu=g(Je,{optional:true});_changeDetectorRef=g(No);role="menuitem";disabled=false;disableRipple=false;_hovered=new Z$1;_focused=new Z$1;_highlighted=false;_triggersSubmenu=false;constructor(){g(KT).load(Dg),this._parentMenu?.addItem?.(this);}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this);}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,false);}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete();}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation());}_handleMouseEnter(){this._hovered.next(this);}getLabel(){let e=this._elementRef.nativeElement.cloneNode(true),t=e.querySelectorAll("mat-icon, .material-icons");for(let i=0;i<t.length;i++)t[i].remove();return e.textContent?.trim()||""}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck();}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck();}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=wo({type:n,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-focus-indicator"],hostVars:8,hostBindings:function(t,i){t&1&&im("click",function(r){return i._checkDisabled(r)})("mouseenter",function(){return i._handleMouseEnter()}),t&2&&(_o("role",i.role)("tabindex",i._getTabIndex())("aria-disabled",i.disabled)("disabled",i.disabled||null),qs("mat-mdc-menu-item-highlighted",i._highlighted)("mat-mdc-menu-item-submenu-trigger",i._triggersSubmenu));},inputs:{role:"role",disabled:[2,"disabled","disabled",Yl],disableRipple:[2,"disableRipple","disableRipple",Yl]},exportAs:["matMenuItem"],ngContentSelectors:Cn,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(t,i){t&1&&(Pl(vn),jl(0),xs(1,"span",0),jl(2,1),xl(),Xg(3,"div",1),fC(4,Dn,2,0,":svg:svg",2)),t&2&&(gI(3),Jg("matRippleDisabled",i.disableRipple||i.disabled)("matRippleTrigger",i._getHostElement()),gI(),pC(i._triggersSubmenu?4:-1));},dependencies:[tI],encapsulation:2})}return n})();var Sn=new m("MatMenuContent");var kn=new m("mat-menu-default-options",{providedIn:"root",factory:()=>({overlapTrigger:false,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"})}),Ze="_mat-menu-enter",ze="_mat-menu-exit",we=(()=>{class n{_elementRef=g(Xe);_changeDetectorRef=g(No);_injector=g(ne$1);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=hr();_allItems;_directDescendantItems=new vs;_classList={};_panelAnimationState="void";_animationDone=new Z$1;_isAnimating=nr(false);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses();}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses();}templateRef;items;lazyContent;overlapTrigger=false;hasBackdrop;get panelClass(){return this._previousPanelClass}set panelClass(e){let t=this._previousPanelClass,i=O({},this._classList);t&&t.length&&t.split(" ").forEach(o=>{i[o]=false;}),this._previousPanelClass=e,e&&e.length&&(e.split(" ").forEach(o=>{i[o]=true;}),this._elementRef.nativeElement.className=""),this._classList=i;}_previousPanelClass="";get classList(){return this.panelClass}set classList(e){this.panelClass=e;}closed=new Re;close=this.closed;panelId=g(fr).getId("mat-menu-panel-");constructor(){let e=g(kn);this.overlayPanelClass=e.overlayPanelClass||"",this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop;}ngOnInit(){this.setPositionClasses();}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new Bd(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe(vv(this._directDescendantItems),Ln$1(e=>lv(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let t=this._keyManager;if(this._panelAnimationState==="enter"&&t.activeItem?._hasFocus()){let i=e.toArray(),o=Math.max(0,Math.min(i.length-1,t.activeItemIndex||0));i[o]&&!i[o].disabled?t.setActiveItem(o):t.setNextItemActive();}});}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout);}_hovered(){return this._directDescendantItems.changes.pipe(vv(this._directDescendantItems),Ln$1(t=>lv(...t.map(i=>i._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,i=this._keyManager;switch(t){case 27:$n(e)||(e.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(t===38||t===40)&&i.setFocusOrigin("keyboard"),i.onKeydown(e);return}}focusFirstItem(e="program"){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=GE(()=>{let t=this._resolvePanel();if(!t||!t.contains(document.activeElement)){let i=this._keyManager;i.setFocusOrigin(e).setFirstItemActive(),!i.activeItem&&t&&t.focus();}},{injector:this._injector});}resetActiveItem(){this._keyManager.setActiveItem(-1);}setElevation(e){}setPositionClasses(e=this.xPosition,t=this.yPosition){this._classList=z(O({},this._classList),{"mat-menu-before":e==="before","mat-menu-after":e==="after","mat-menu-above":t==="above","mat-menu-below":t==="below"}),this._changeDetectorRef.markForCheck();}_onAnimationDone(e){let t=e===ze;(t||e===Ze)&&(t&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(t?"void":"enter"),this._isAnimating.set(false));}_onAnimationStart(e){(e===Ze||e===ze)&&this._isAnimating.set(true);}_setIsOpen(e){if(this._panelAnimationState=e?"enter":"void",e){if(this._keyManager.activeItemIndex===0){let t=this._resolvePanel();t&&(t.scrollTop=0);}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(ze),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?Ze:ze);}),this._changeDetectorRef.markForCheck();}_updateDirectDescendants(){this._allItems.changes.pipe(vv(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges();});}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),e}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=wo({type:n,selectors:[["mat-menu"]],contentQueries:function(t,i,o){if(t&1&&am(o,Sn,5)(o,Se,5)(o,Se,4),t&2){let r;MC(r=NC())&&(i.lazyContent=r.first),MC(r=NC())&&(i._allItems=r),MC(r=NC())&&(i.items=r);}},viewQuery:function(t,i){if(t&1&&cm(lr,5),t&2){let o;MC(o=NC())&&(i.templateRef=o.first);}},hostVars:3,hostBindings:function(t,i){t&2&&_o("aria-label",null)("aria-labelledby",null)("aria-describedby",null);},inputs:{backdropClass:"backdropClass",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[2,"overlapTrigger","overlapTrigger",Yl],hasBackdrop:[2,"hasBackdrop","hasBackdrop",e=>e==null?null:Yl(e)],panelClass:[0,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],features:[Em([{provide:Je,useExisting:n}])],ngContentSelectors:Rn,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel",3,"click","animationstart","animationend","animationcancel","id"],[1,"mat-mdc-menu-content"]],template:function(t,i){t&1&&(Pl(),qg(0,Mn,3,12,"ng-template"));},styles:[`mat-menu {
  display: none;
}

.mat-mdc-menu-content {
  margin: 0;
  padding: 8px 0;
  outline: 0;
}
.mat-mdc-menu-content,
.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  flex: 1;
  white-space: normal;
  font-family: var(--mat-menu-item-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-menu-item-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-menu-item-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-menu-item-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-menu-item-label-text-weight, var(--mat-sys-label-large-weight));
}

@keyframes _mat-menu-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-menu-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-menu-panel {
  min-width: 112px;
  max-width: 280px;
  overflow: auto;
  box-sizing: border-box;
  outline: 0;
  animation: _mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);
  border-radius: var(--mat-menu-container-shape, var(--mat-sys-corner-extra-small));
  background-color: var(--mat-menu-container-color, var(--mat-sys-surface-container));
  box-shadow: var(--mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  will-change: transform, opacity;
}
.mat-mdc-menu-panel.mat-menu-panel-exit-animation {
  animation: _mat-menu-exit 100ms 25ms linear forwards;
}
.mat-mdc-menu-panel.mat-menu-panel-animations-disabled {
  animation: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating {
  pointer-events: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty) {
  display: none;
}
@media (forced-colors: active) {
  .mat-mdc-menu-panel {
    outline: solid 1px;
  }
}
.mat-mdc-menu-panel .mat-divider {
  border-top-color: var(--mat-menu-divider-color, var(--mat-sys-surface-variant));
  margin-bottom: var(--mat-menu-divider-bottom-spacing, 8px);
  margin-top: var(--mat-menu-divider-top-spacing, 8px);
}

.mat-mdc-menu-item {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  cursor: pointer;
  width: 100%;
  text-align: left;
  box-sizing: border-box;
  color: inherit;
  font-size: inherit;
  background: none;
  text-decoration: none;
  margin: 0;
  min-height: 48px;
  padding-left: var(--mat-menu-item-leading-spacing, 12px);
  padding-right: var(--mat-menu-item-trailing-spacing, 12px);
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-menu-item::-moz-focus-inner {
  border: 0;
}
[dir=rtl] .mat-mdc-menu-item {
  padding-left: var(--mat-menu-item-trailing-spacing, 12px);
  padding-right: var(--mat-menu-item-leading-spacing, 12px);
}
.mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--mat-menu-item-with-icon-leading-spacing, 12px);
  padding-right: var(--mat-menu-item-with-icon-trailing-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--mat-menu-item-with-icon-trailing-spacing, 12px);
  padding-right: var(--mat-menu-item-with-icon-leading-spacing, 12px);
}
.mat-mdc-menu-item, .mat-mdc-menu-item:visited, .mat-mdc-menu-item:link {
  color: var(--mat-menu-item-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-menu-item .mat-icon-no-color,
.mat-mdc-menu-item .mat-mdc-menu-submenu-icon {
  color: var(--mat-menu-item-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-menu-item[disabled] {
  cursor: default;
  opacity: 0.38;
}
.mat-mdc-menu-item[disabled]::after {
  display: block;
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.mat-mdc-menu-item:focus {
  outline: 0;
}
.mat-mdc-menu-item .mat-icon {
  flex-shrink: 0;
  margin-right: var(--mat-menu-item-spacing, 12px);
  height: var(--mat-menu-item-icon-size, 24px);
  width: var(--mat-menu-item-icon-size, 24px);
}
[dir=rtl] .mat-mdc-menu-item {
  text-align: right;
}
[dir=rtl] .mat-mdc-menu-item .mat-icon {
  margin-right: 0;
  margin-left: var(--mat-menu-item-spacing, 12px);
}
.mat-mdc-menu-item:not([disabled]):hover {
  background-color: var(--mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-menu-item:not([disabled]).cdk-program-focused, .mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused, .mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted {
  background-color: var(--mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
@media (forced-colors: active) {
  .mat-mdc-menu-item {
    margin-top: 1px;
  }
}

.mat-mdc-menu-submenu-icon {
  width: var(--mat-menu-item-icon-size, 24px);
  height: 10px;
  fill: currentColor;
  padding-left: var(--mat-menu-item-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-submenu-icon {
  padding-right: var(--mat-menu-item-spacing, 12px);
  padding-left: 0;
}
[dir=rtl] .mat-mdc-menu-submenu-icon polygon {
  transform: scaleX(-1);
  transform-origin: center;
}
@media (forced-colors: active) {
  .mat-mdc-menu-submenu-icon {
    fill: CanvasText;
  }
}

.mat-mdc-menu-item .mat-mdc-menu-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
`],encapsulation:2})}return n})(),xn=new m("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let n=g(ne$1);return ()=>gm(n)}});var ye=new WeakMap,Tn=(()=>{class n{_canHaveBackdrop;_element=g(Xe);_viewContainerRef=g(yr);_menuItemInstance=g(Se,{optional:true,self:true});_dir=g(n_,{optional:true});_focusMonitor=g(Sa);_ngZone=g(q);_injector=g(ne$1);_scrollStrategy=g(xn);_changeDetectorRef=g(No);_animationsDisabled=hr();_portal;_overlayRef=null;_menuOpen=false;_closingActionsSubscription=H.EMPTY;_menuCloseSubscription=H.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e?(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(t=>{this._destroyMenu(t),(t==="click"||t==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t);})):this._destroyMenu(),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()));}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let t=g(Je,{optional:true});this._parentMaterialMenu=t instanceof we?t:void 0;}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&ye.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null);}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_triggersSubmenu(){return !!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit();}_openMenu(e){if(this._triggerIsAriaDisabled())return;let t=this._menu;if(this._menuOpen||!t)return;this._pendingRemoval?.unsubscribe();let i=ye.get(t);ye.set(t,this),i&&i!==this&&i._closeMenu();let o=this._createOverlay(t),r=o.getConfig(),l=r.positionStrategy;this._setPosition(t,l),this._canHaveBackdrop?r.hasBackdrop=t.hasBackdrop==null?!this._triggersSubmenu():t.hasBackdrop:r.hasBackdrop=t.hasBackdrop??false,o.hasAttached()||(o.attach(this._getPortal(t)),t.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),t.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,t.direction=this.dir,e&&t.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(true),t instanceof we&&(t._setIsOpen(true),t._directDescendantItems.changes.pipe(Dv(t.close)).subscribe(()=>{l.withLockedPosition(false).reapplyLastPosition(),l.withLockedPosition(true);}));}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t);}_destroyMenu(e){let t=this._overlayRef,i=this._menu;!t||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),i instanceof we&&this._ownsMenu(i)?(this._pendingRemoval=i._animationDone.pipe(ge(1)).subscribe(()=>{t.detach(),ye.has(i)||i.lazyContent?.detach();}),i._setIsOpen(false)):(t.detach(),i?.lazyContent?.detach()),i&&this._ownsMenu(i)&&ye.delete(i),this.restoreFocus&&(e==="keydown"||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(false));}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck());}_createOverlay(e){if(!this._overlayRef){let t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=Vi(this._injector,t),this._overlayRef.keydownEvents().subscribe(i=>{this._menu instanceof we&&this._menu._handleKeydown(i);});}return this._overlayRef}_getOverlayConfig(e){return new bn({positionStrategy:ym(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:e.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||"ltr",disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(i=>{this._ngZone.run(()=>{let o=i.connectionPair.overlayX==="start"?"after":"before",r=i.connectionPair.overlayY==="top"?"below":"above";e.setPositionClasses(o,r);});});}_setPosition(e,t){let[i,o]=e.xPosition==="before"?["end","start"]:["start","end"],[r,l]=e.yPosition==="above"?["bottom","top"]:["top","bottom"],[d,f]=[r,l],[p,D]=[i,o],_=0;if(this._triggersSubmenu()){if(D=i=e.xPosition==="before"?"start":"end",o=p=i==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let y=this._parentMaterialMenu.items.first;this._parentInnerPadding=y?y._getHostElement().offsetTop:0;}_=r==="bottom"?this._parentInnerPadding:-this._parentInnerPadding;}}else e.overlapTrigger||(d=r==="top"?"bottom":"top",f=l==="top"?"bottom":"top");t.withPositions([{originX:i,originY:d,overlayX:p,overlayY:r,offsetY:_},{originX:o,originY:d,overlayX:D,overlayY:r,offsetY:_},{originX:i,originY:f,overlayX:p,overlayY:l,offsetY:-_},{originX:o,originY:f,overlayX:D,overlayY:l,offsetY:-_}]);}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),t=this._overlayRef.detachments(),i=this._parentMaterialMenu?this._parentMaterialMenu.closed:de(),o=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(Dt(r=>this._menuOpen&&r!==this._menuItemInstance)):de();return lv(e,i,o,t)}_getPortal(e){return (!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new Ur(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return ye.get(e)===this}_triggerIsAriaDisabled(){return Yl(this._element.nativeElement.getAttribute("aria-disabled"))}static \u0275fac=function(t){lw();};static \u0275dir=Co({type:n})}return n})(),qi=(()=>{class n extends Tn{_cleanupTouchstart;_hoverSubscription=H.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e;}get menu(){return this._menu}set menu(e){this._menu=e;}menuData;restoreFocus=true;menuOpened=new Re;onMenuOpen=this.menuOpened;menuClosed=new Re;onMenuClose=this.menuClosed;constructor(){super(true);let e=g(ml);this._cleanupTouchstart=e.listen(this._element.nativeElement,"touchstart",t=>{ba(t)||(this._openedBy="touch");},{passive:true});}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(true);}closeMenu(){this._closeMenu();}updatePosition(){this._overlayRef?.updatePosition();}ngAfterContentInit(){this._handleHover();}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe();}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){ya(e)||(this._openedBy=e.button===0?"mouse":void 0,this.triggersSubmenu()&&e.preventDefault());}_handleKeydown(e){let t=e.keyCode;(t===13||t===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(t===39&&this.dir==="ltr"||t===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu());}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu();}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!=="void"&&(this._openedBy="mouse",this._openMenu(false));}));}static \u0275fac=function(t){return new(t||n)};static \u0275dir=Co({type:n,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(t,i){t&1&&im("click",function(r){return i._handleClick(r)})("mousedown",function(r){return i._handleMousedown(r)})("keydown",function(r){return i._handleKeydown(r)}),t&2&&_o("aria-haspopup",i.menu?"menu":null)("aria-expanded",i.menuOpen)("aria-controls",i.menuOpen?i.menu?.panelId:null);},inputs:{_deprecatedMatMenuTriggerFor:[0,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[0,"matMenuTriggerFor","menu"],menuData:[0,"matMenuTriggerData","menuData"],restoreFocus:[0,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],features:[zg]})}return n})();var Yi=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=Ee({type:n});static \u0275inj=fe({imports:[kg,qi$1,wy,lm]})}return n})();var Fn=[[["caption"]],[["colgroup"],["col"]],"*"],On=["caption","colgroup, col","*"];function Pn(n,a){n&1&&jl(0,2);}function An(n,a){n&1&&(xs(0,"thead",0),nm(1,1),xl(),xs(2,"tbody",0),nm(3,2)(4,3),xl(),xs(5,"tfoot",0),nm(6,4),xl());}function Nn(n,a){n&1&&nm(0,1)(1,2)(2,3)(3,4);}var V=new m("CDK_TABLE");var Qe=(()=>{class n{template=g(lr);static \u0275fac=function(t){return new(t||n)};static \u0275dir=Co({type:n,selectors:[["","cdkCellDef",""]]})}return n})(),qe=(()=>{class n{template=g(lr);static \u0275fac=function(t){return new(t||n)};static \u0275dir=Co({type:n,selectors:[["","cdkHeaderCellDef",""]]})}return n})(),$i=(()=>{class n{template=g(lr);static \u0275fac=function(t){return new(t||n)};static \u0275dir=Co({type:n,selectors:[["","cdkFooterCellDef",""]]})}return n})(),ne=(()=>{class n{_table=g(V,{optional:true});_hasStickyChanged=false;get name(){return this._name}set name(e){this._setNameInput(e);}_name;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=true);}_sticky=false;get stickyEnd(){return this._stickyEnd}set stickyEnd(e){e!==this._stickyEnd&&(this._stickyEnd=e,this._hasStickyChanged=true);}_stickyEnd=false;cell;headerCell;footerCell;cssClassFriendlyName;_columnCssClassName;hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=false;}_updateColumnCssClassName(){this._columnCssClassName=[`cdk-column-${this.cssClassFriendlyName}`];}_setNameInput(e){e&&(this._name=e,this.cssClassFriendlyName=e.replace(/[^a-z0-9_-]/gi,"-"),this._updateColumnCssClassName());}static \u0275fac=function(t){return new(t||n)};static \u0275dir=Co({type:n,selectors:[["","cdkColumnDef",""]],contentQueries:function(t,i,o){if(t&1&&am(o,Qe,5)(o,qe,5)(o,$i,5),t&2){let r;MC(r=NC())&&(i.cell=r.first),MC(r=NC())&&(i.headerCell=r.first),MC(r=NC())&&(i.footerCell=r.first);}},inputs:{name:[0,"cdkColumnDef","name"],sticky:[2,"sticky","sticky",Yl],stickyEnd:[2,"stickyEnd","stickyEnd",Yl]}})}return n})(),Ue=class{constructor(a,e){e.nativeElement.classList.add(...a._columnCssClassName);}},Ki=(()=>{class n extends Ue{constructor(){super(g(ne),g(Xe));}static \u0275fac=function(t){return new(t||n)};static \u0275dir=Co({type:n,selectors:[["cdk-header-cell"],["th","cdk-header-cell",""]],hostAttrs:["role","columnheader",1,"cdk-header-cell"],features:[zg]})}return n})();var Gi=(()=>{class n extends Ue{constructor(){let e=g(ne),t=g(Xe);super(e,t);let i=e._table?._getCellRole();i&&t.nativeElement.setAttribute("role",i);}static \u0275fac=function(t){return new(t||n)};static \u0275dir=Co({type:n,selectors:[["cdk-cell"],["td","cdk-cell",""]],hostAttrs:[1,"cdk-cell"],features:[zg]})}return n})();var tt=(()=>{class n{template=g(lr);_differs=g(Pm);columns;_columnsDiffer;ngOnChanges(e){if(!this._columnsDiffer){let t=e.columns&&e.columns.currentValue||[];this._columnsDiffer=this._differs.find(t).create(),this._columnsDiffer.diff(t);}}getColumnsDiff(){return this._columnsDiffer.diff(this.columns)}extractCellTemplate(e){return this instanceof xe?e.headerCell.template:this instanceof it?e.footerCell.template:e.cell.template}static \u0275fac=function(t){return new(t||n)};static \u0275dir=Co({type:n,features:[Uu]})}return n})(),xe=(()=>{class n extends tt{_table=g(V,{optional:true});_hasStickyChanged=false;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=true);}_sticky=false;ngOnChanges(e){super.ngOnChanges(e);}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=false;}static \u0275fac=(()=>{let e;return function(i){return (e||(e=hr$1(n)))(i||n)}})();static \u0275dir=Co({type:n,selectors:[["","cdkHeaderRowDef",""]],inputs:{columns:[0,"cdkHeaderRowDef","columns"],sticky:[2,"cdkHeaderRowDefSticky","sticky",Yl]},features:[zg,Uu]})}return n})(),it=(()=>{class n extends tt{_table=g(V,{optional:true});_hasStickyChanged=false;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=true);}_sticky=false;ngOnChanges(e){super.ngOnChanges(e);}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=false;}static \u0275fac=(()=>{let e;return function(i){return (e||(e=hr$1(n)))(i||n)}})();static \u0275dir=Co({type:n,selectors:[["","cdkFooterRowDef",""]],inputs:{columns:[0,"cdkFooterRowDef","columns"],sticky:[2,"cdkFooterRowDefSticky","sticky",Yl]},features:[zg,Uu]})}return n})(),Ye=(()=>{class n extends tt{_table=g(V,{optional:true});when;static \u0275fac=(()=>{let e;return function(i){return (e||(e=hr$1(n)))(i||n)}})();static \u0275dir=Co({type:n,selectors:[["","cdkRowDef",""]],inputs:{columns:[0,"cdkRowDefColumns","columns"],when:[0,"cdkRowDefWhen","when"]},features:[zg]})}return n})(),le=(()=>{class n{_viewContainer=g(yr);cells;context;static mostRecentCellOutlet=null;constructor(){n.mostRecentCellOutlet=this;}ngOnDestroy(){n.mostRecentCellOutlet===this&&(n.mostRecentCellOutlet=null);}static \u0275fac=function(t){return new(t||n)};static \u0275dir=Co({type:n,selectors:[["","cdkCellOutlet",""]]})}return n})(),nt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=wo({type:n,selectors:[["cdk-header-row"],["tr","cdk-header-row",""]],hostAttrs:["role","row",1,"cdk-header-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,i){t&1&&nm(0,0);},dependencies:[le],encapsulation:2,changeDetection:1})}return n})();var ot=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=wo({type:n,selectors:[["cdk-row"],["tr","cdk-row",""]],hostAttrs:["role","row",1,"cdk-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,i){t&1&&nm(0,0);},dependencies:[le],encapsulation:2,changeDetection:1})}return n})(),Zi=(()=>{class n{templateRef=g(lr);_contentClassNames=["cdk-no-data-row","cdk-row"];_cellClassNames=["cdk-cell","cdk-no-data-cell"];_cellSelector="td, cdk-cell, [cdk-cell], .cdk-cell";static \u0275fac=function(t){return new(t||n)};static \u0275dir=Co({type:n,selectors:[["ng-template","cdkNoDataRow",""]]})}return n})(),Wi=["top","bottom","left","right"],et=class{_isNativeHtmlTable;_stickCellCss;_isBrowser;_needsPositionStickyOnElement;direction;_positionListener;_tableInjector;_elemSizeCache=new WeakMap;_resizeObserver=globalThis?.ResizeObserver?new globalThis.ResizeObserver(a=>this._updateCachedSizes(a)):null;_updatedStickyColumnsParamsToReplay=[];_stickyColumnsReplayTimeout=null;_cachedCellWidths=[];_borderCellCss;_destroyed=false;constructor(a,e,t=true,i=true,o,r,l){this._isNativeHtmlTable=a,this._stickCellCss=e,this._isBrowser=t,this._needsPositionStickyOnElement=i,this.direction=o,this._positionListener=r,this._tableInjector=l,this._borderCellCss={top:`${e}-border-elem-top`,bottom:`${e}-border-elem-bottom`,left:`${e}-border-elem-left`,right:`${e}-border-elem-right`};}clearStickyPositioning(a,e){(e.includes("left")||e.includes("right"))&&this._removeFromStickyColumnReplayQueue(a);let t=[];for(let i of a)i.nodeType===i.ELEMENT_NODE&&t.push(i,...Array.from(i.children));GE({write:()=>{for(let i of t)this._removeStickyStyle(i,e);}},{injector:this._tableInjector});}updateStickyColumns(a,e,t,i=true,o=true){if(!a.length||!this._isBrowser||!(e.some(j=>j)||t.some(j=>j))){this._positionListener?.stickyColumnsUpdated({sizes:[]}),this._positionListener?.stickyEndColumnsUpdated({sizes:[]});return}let r=a[0],l=r.children.length,d=this.direction==="rtl",f=d?"right":"left",p=d?"left":"right",D=e.lastIndexOf(true),_=t.indexOf(true),y,mt,ht;o&&this._updateStickyColumnReplayQueue({rows:[...a],stickyStartStates:[...e],stickyEndStates:[...t]}),GE({earlyRead:()=>{y=this._getCellWidths(r,i),mt=this._getStickyStartColumnPositions(y,e),ht=this._getStickyEndColumnPositions(y,t);},write:()=>{for(let j of a)for(let F=0;F<l;F++){let ft=j.children[F];e[F]&&this._addStickyStyle(ft,f,mt[F],F===D),t[F]&&this._addStickyStyle(ft,p,ht[F],F===_);}this._positionListener&&y.some(j=>!!j)&&(this._positionListener.stickyColumnsUpdated({sizes:D===-1?[]:y.slice(0,D+1).map((j,F)=>e[F]?j:null)}),this._positionListener.stickyEndColumnsUpdated({sizes:_===-1?[]:y.slice(_).map((j,F)=>t[F+_]?j:null).reverse()}));}},{injector:this._tableInjector});}stickRows(a,e,t){if(!this._isBrowser)return;let i=t==="bottom"?a.slice().reverse():a,o=t==="bottom"?e.slice().reverse():e,r=[],l=[],d=[];GE({earlyRead:()=>{for(let f=0,p=0;f<i.length;f++){if(!o[f])continue;r[f]=p;let D=i[f];d[f]=this._isNativeHtmlTable?Array.from(D.children):[D];let _=this._retrieveElementSize(D).height;p+=_,l[f]=_;}},write:()=>{let f=o.lastIndexOf(true);for(let p=0;p<i.length;p++){if(!o[p])continue;let D=r[p],_=p===f;for(let y of d[p])this._addStickyStyle(y,t,D,_);}t==="top"?this._positionListener?.stickyHeaderRowsUpdated({sizes:l,offsets:r,elements:d}):this._positionListener?.stickyFooterRowsUpdated({sizes:l,offsets:r,elements:d});}},{injector:this._tableInjector});}updateStickyFooterContainer(a,e){this._isNativeHtmlTable&&GE({write:()=>{let t=a.querySelector("tfoot");t&&(e.some(i=>!i)?this._removeStickyStyle(t,["bottom"]):this._addStickyStyle(t,"bottom",0,false));}},{injector:this._tableInjector});}destroy(){this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._resizeObserver?.disconnect(),this._destroyed=true;}_removeStickyStyle(a,e){if(!a.classList.contains(this._stickCellCss))return;for(let i of e)a.style[i]="",a.classList.remove(this._borderCellCss[i]);Wi.some(i=>e.indexOf(i)===-1&&a.style[i])?a.style.zIndex=this._getCalculatedZIndex(a):(a.style.zIndex="",this._needsPositionStickyOnElement&&(a.style.position=""),a.classList.remove(this._stickCellCss));}_addStickyStyle(a,e,t,i){a.classList.add(this._stickCellCss),i&&a.classList.add(this._borderCellCss[e]),a.style[e]=`${t}px`,a.style.zIndex=this._getCalculatedZIndex(a),this._needsPositionStickyOnElement&&(a.style.cssText+="position: -webkit-sticky; position: sticky; ");}_getCalculatedZIndex(a){let e={top:100,bottom:10,left:1,right:1},t=0;for(let i of Wi)a.style[i]&&(t+=e[i]);return t?`${t}`:""}_getCellWidths(a,e=true){if(!e&&this._cachedCellWidths.length)return this._cachedCellWidths;let t=[],i=a.children;for(let o=0;o<i.length;o++){let r=i[o];t.push(this._retrieveElementSize(r).width);}return this._cachedCellWidths=t,t}_getStickyStartColumnPositions(a,e){let t=[],i=0;for(let o=0;o<a.length;o++)e[o]&&(t[o]=i,i+=a[o]);return t}_getStickyEndColumnPositions(a,e){let t=[],i=0;for(let o=a.length;o>0;o--)e[o]&&(t[o]=i,i+=a[o]);return t}_retrieveElementSize(a){let e=this._elemSizeCache.get(a);if(e)return e;let t=a.getBoundingClientRect(),i={width:t.width,height:t.height};return this._resizeObserver&&(this._elemSizeCache.set(a,i),this._resizeObserver.observe(a,{box:"border-box"})),i}_updateStickyColumnReplayQueue(a){this._removeFromStickyColumnReplayQueue(a.rows),this._stickyColumnsReplayTimeout||this._updatedStickyColumnsParamsToReplay.push(a);}_removeFromStickyColumnReplayQueue(a){let e=new Set(a);for(let t of this._updatedStickyColumnsParamsToReplay)t.rows=t.rows.filter(i=>!e.has(i));this._updatedStickyColumnsParamsToReplay=this._updatedStickyColumnsParamsToReplay.filter(t=>!!t.rows.length);}_updateCachedSizes(a){let e=false;for(let t of a){let i=t.borderBoxSize?.length?{width:t.borderBoxSize[0].inlineSize,height:t.borderBoxSize[0].blockSize}:{width:t.contentRect.width,height:t.contentRect.height};i.width!==this._elemSizeCache.get(t.target)?.width&&Bn(t.target)&&(e=true),this._elemSizeCache.set(t.target,i);}e&&this._updatedStickyColumnsParamsToReplay.length&&(this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._stickyColumnsReplayTimeout=setTimeout(()=>{if(!this._destroyed){for(let t of this._updatedStickyColumnsParamsToReplay)this.updateStickyColumns(t.rows,t.stickyStartStates,t.stickyEndStates,true,false);this._updatedStickyColumnsParamsToReplay=[],this._stickyColumnsReplayTimeout=null;}},0));}};function Bn(n){return ["cdk-cell","cdk-header-cell","cdk-footer-cell"].some(a=>n.classList.contains(a))}var ke=new m("STICKY_POSITIONING_LISTENER");var rt=(()=>{class n{viewContainer=g(yr);elementRef=g(Xe);constructor(){let e=g(V);e._rowOutlet=this,e._outletAssigned();}static \u0275fac=function(t){return new(t||n)};static \u0275dir=Co({type:n,selectors:[["","rowOutlet",""]]})}return n})(),at=(()=>{class n{viewContainer=g(yr);elementRef=g(Xe);constructor(){let e=g(V);e._headerRowOutlet=this,e._outletAssigned();}static \u0275fac=function(t){return new(t||n)};static \u0275dir=Co({type:n,selectors:[["","headerRowOutlet",""]]})}return n})(),st=(()=>{class n{viewContainer=g(yr);elementRef=g(Xe);constructor(){let e=g(V);e._footerRowOutlet=this,e._outletAssigned();}static \u0275fac=function(t){return new(t||n)};static \u0275dir=Co({type:n,selectors:[["","footerRowOutlet",""]]})}return n})(),lt=(()=>{class n{viewContainer=g(yr);elementRef=g(Xe);constructor(){let e=g(V);e._noDataRowOutlet=this,e._outletAssigned();}static \u0275fac=function(t){return new(t||n)};static \u0275dir=Co({type:n,selectors:[["","noDataRowOutlet",""]]})}return n})(),ct=(()=>{class n{_differs=g(Pm);_changeDetectorRef=g(No);_elementRef=g(Xe);_dir=g(n_,{optional:true});_platform=g($t);_viewRepeater;_viewportRuler=g(qo);_injector=g(ne$1);_virtualScrollViewport=g(QX,{optional:true,host:true});_positionListener=g(ke,{optional:true})||g(ke,{optional:true,skipSelf:true});_document=g(F);_data;_renderedRange;_onDestroy=new Z$1;_renderRows;_renderChangeSubscription=null;_columnDefsByName=new Map;_rowDefs;_headerRowDefs;_footerRowDefs;_dataDiffer;_defaultRowDef=null;_customColumnDefs=new Set;_customRowDefs=new Set;_customHeaderRowDefs=new Set;_customFooterRowDefs=new Set;_customNoDataRow=null;_headerRowDefChanged=true;_footerRowDefChanged=true;_stickyColumnStylesNeedReset=true;_forceRecalculateCellWidths=true;_cachedRenderRowsMap=new Map;_isNativeHtmlTable;_stickyStyler;stickyCssClass="cdk-table-sticky";needsPositionStickyOnElement=true;_isServer;_isShowingNoDataRow=false;_hasAllOutlets=false;_hasInitialized=false;_headerRowStickyUpdates=new Z$1;_footerRowStickyUpdates=new Z$1;_disableVirtualScrolling=false;_getCellRole(){if(this._cellRoleInternal===void 0){let e=this._elementRef.nativeElement.getAttribute("role");return e==="grid"||e==="treegrid"?"gridcell":"cell"}return this._cellRoleInternal}_cellRoleInternal=void 0;get trackBy(){return this._trackByFn}set trackBy(e){this._trackByFn=e;}_trackByFn;get dataSource(){return this._dataSource}set dataSource(e){this._dataSource!==e&&(this._switchDataSource(e),this._changeDetectorRef.markForCheck());}_dataSource;_dataSourceChanges=new Z$1;_dataStream=new Z$1;get multiTemplateDataRows(){return this._multiTemplateDataRows}set multiTemplateDataRows(e){this._multiTemplateDataRows=e,this._rowOutlet&&this._rowOutlet.viewContainer.length&&(this._forceRenderDataRows(),this.updateStickyColumnStyles());}_multiTemplateDataRows=false;get fixedLayout(){return this._virtualScrollEnabled()?true:this._fixedLayout}set fixedLayout(e){this._fixedLayout=e,this._forceRecalculateCellWidths=true,this._stickyColumnStylesNeedReset=true;}_fixedLayout=false;recycleRows=false;contentChanged=new Re;viewChange=new xr({start:0,end:Number.MAX_VALUE});_rowOutlet;_headerRowOutlet;_footerRowOutlet;_noDataRowOutlet;_contentColumnDefs;_contentRowDefs;_contentHeaderRowDefs;_contentFooterRowDefs;_noDataRow;get renderedRows(){return this._renderRows}constructor(){g(new Js("role"),{optional:true})||this._elementRef.nativeElement.setAttribute("role","table"),this._isServer=!this._platform.isBrowser,this._isNativeHtmlTable=this._elementRef.nativeElement.nodeName==="TABLE",this._dataDiffer=this._differs.find([]).create((t,i)=>this.trackBy?this.trackBy(i.dataIndex,i.data):i);}ngOnInit(){this._setupStickyStyler(),this._viewportRuler.change().pipe(Dv(this._onDestroy)).subscribe(()=>{this._forceRecalculateCellWidths=true;});}ngAfterContentInit(){this._viewRepeater=this.recycleRows||this._virtualScrollEnabled()?new Dw:new dt$1,this._virtualScrollEnabled()&&this._setupVirtualScrolling(this._virtualScrollViewport),this._hasInitialized=true;}ngAfterContentChecked(){this._canRender()&&this._render();}ngOnDestroy(){this._stickyStyler?.destroy(),[this._rowOutlet?.viewContainer,this._headerRowOutlet?.viewContainer,this._footerRowOutlet?.viewContainer,this._cachedRenderRowsMap,this._customColumnDefs,this._customRowDefs,this._customHeaderRowDefs,this._customFooterRowDefs,this._columnDefsByName].forEach(e=>{e?.clear();}),this._headerRowDefs=[],this._footerRowDefs=[],this._defaultRowDef=null,this._headerRowStickyUpdates.complete(),this._footerRowStickyUpdates.complete(),this._onDestroy.next(),this._onDestroy.complete(),EX(this.dataSource)&&this.dataSource.disconnect(this);}renderRows(){this._renderRows=this._getAllRenderRows();let e=this._dataDiffer.diff(this._renderRows);if(!e){this._updateNoDataRow(),this.contentChanged.next();return}let t=this._rowOutlet.viewContainer;this._viewRepeater.applyChanges(e,t,(i,o,r)=>this._getEmbeddedViewArgs(i.item,r),i=>i.item.data,i=>{i.operation===ps.INSERTED&&i.context&&this._renderCellTemplateForItem(i.record.item.rowDef,i.context);}),this._updateRowIndexContext(),e.forEachIdentityChange(i=>{let o=t.get(i.currentIndex);o.context.$implicit=i.item.data;}),this._updateNoDataRow(),this.contentChanged.next(),this.updateStickyColumnStyles();}addColumnDef(e){this._customColumnDefs.add(e);}removeColumnDef(e){this._customColumnDefs.delete(e);}addRowDef(e){this._customRowDefs.add(e);}removeRowDef(e){this._customRowDefs.delete(e);}addHeaderRowDef(e){this._customHeaderRowDefs.add(e),this._headerRowDefChanged=true;}removeHeaderRowDef(e){this._customHeaderRowDefs.delete(e),this._headerRowDefChanged=true;}addFooterRowDef(e){this._customFooterRowDefs.add(e),this._footerRowDefChanged=true;}removeFooterRowDef(e){this._customFooterRowDefs.delete(e),this._footerRowDefChanged=true;}setNoDataRow(e){this._customNoDataRow=e;}updateStickyHeaderRowStyles(){let e=this._getRenderedRows(this._headerRowOutlet);if(this._isNativeHtmlTable){let i=Xi(this._headerRowOutlet,"thead");i&&(i.style.display=e.length?"":"none");}let t=this._headerRowDefs.map(i=>i.sticky);this._stickyStyler.clearStickyPositioning(e,["top"]),this._stickyStyler.stickRows(e,t,"top"),this._headerRowDefs.forEach(i=>i.resetStickyChanged());}updateStickyFooterRowStyles(){let e=this._getRenderedRows(this._footerRowOutlet);if(this._isNativeHtmlTable){let i=Xi(this._footerRowOutlet,"tfoot");i&&(i.style.display=e.length?"":"none");}let t=this._footerRowDefs.map(i=>i.sticky);this._stickyStyler.clearStickyPositioning(e,["bottom"]),this._stickyStyler.stickRows(e,t,"bottom"),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,t),this._footerRowDefs.forEach(i=>i.resetStickyChanged());}updateStickyColumnStyles(){let e=this._getRenderedRows(this._headerRowOutlet),t=this._getRenderedRows(this._rowOutlet),i=this._getRenderedRows(this._footerRowOutlet);(this._isNativeHtmlTable&&!this.fixedLayout||this._stickyColumnStylesNeedReset)&&(this._stickyStyler.clearStickyPositioning([...e,...t,...i],["left","right"]),this._stickyColumnStylesNeedReset=false),e.forEach((o,r)=>{this._addStickyColumnStyles([o],this._headerRowDefs[r]);}),this._rowDefs.forEach(o=>{let r=[];for(let l=0;l<t.length;l++)this._renderRows[l].rowDef===o&&r.push(t[l]);this._addStickyColumnStyles(r,o);}),i.forEach((o,r)=>{this._addStickyColumnStyles([o],this._footerRowDefs[r]);}),Array.from(this._columnDefsByName.values()).forEach(o=>o.resetStickyChanged());}stickyColumnsUpdated(e){this._positionListener?.stickyColumnsUpdated(e);}stickyEndColumnsUpdated(e){this._positionListener?.stickyEndColumnsUpdated(e);}stickyHeaderRowsUpdated(e){this._headerRowStickyUpdates.next(e),this._positionListener?.stickyHeaderRowsUpdated(e);}stickyFooterRowsUpdated(e){this._footerRowStickyUpdates.next(e),this._positionListener?.stickyFooterRowsUpdated(e);}_outletAssigned(){!this._hasAllOutlets&&this._rowOutlet&&this._headerRowOutlet&&this._footerRowOutlet&&this._noDataRowOutlet&&(this._hasAllOutlets=true,this._canRender()&&this._render());}_canRender(){return this._hasAllOutlets&&this._hasInitialized}_render(){this._cacheRowDefs(),this._cacheColumnDefs(),!this._headerRowDefs.length&&!this._footerRowDefs.length&&this._rowDefs.length;let t=this._renderUpdatedColumns()||this._headerRowDefChanged||this._footerRowDefChanged;this._stickyColumnStylesNeedReset=this._stickyColumnStylesNeedReset||t,this._forceRecalculateCellWidths=t,this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=false),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=false),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription?this._observeRenderChanges():this._stickyColumnStylesNeedReset&&this.updateStickyColumnStyles(),this._checkStickyStates();}_getAllRenderRows(){if(!Array.isArray(this._data)||!this._renderedRange)return [];let e=[],t=Math.min(this._data.length,this._renderedRange.end),i=this._cachedRenderRowsMap;this._cachedRenderRowsMap=new Map;for(let o=this._renderedRange.start;o<t;o++){let r=this._data[o],l=this._getRenderRowsForData(r,o,i.get(r));this._cachedRenderRowsMap.has(r)||this._cachedRenderRowsMap.set(r,new WeakMap);for(let d=0;d<l.length;d++){let f=l[d],p=this._cachedRenderRowsMap.get(f.data);p.has(f.rowDef)?p.get(f.rowDef).push(f):p.set(f.rowDef,[f]),e.push(f);}}return e}_getRenderRowsForData(e,t,i){return this._getRowDefs(e,t).map(r=>{let l=i&&i.has(r)?i.get(r):[];if(l.length){let d=l.shift();return d.dataIndex=t,d}else return {data:e,rowDef:r,dataIndex:t}})}_cacheColumnDefs(){this._columnDefsByName.clear(),Ve(this._getOwnDefs(this._contentColumnDefs),this._customColumnDefs).forEach(t=>{this._columnDefsByName.has(t.name),this._columnDefsByName.set(t.name,t);});}_cacheRowDefs(){this._headerRowDefs=Ve(this._getOwnDefs(this._contentHeaderRowDefs),this._customHeaderRowDefs),this._footerRowDefs=Ve(this._getOwnDefs(this._contentFooterRowDefs),this._customFooterRowDefs),this._rowDefs=Ve(this._getOwnDefs(this._contentRowDefs),this._customRowDefs);let e=this._rowDefs.filter(t=>!t.when);this._defaultRowDef=e[0];}_renderUpdatedColumns(){let e=(r,l)=>{let d=!!l.getColumnsDiff();return r||d},t=this._rowDefs.reduce(e,false);t&&this._forceRenderDataRows();let i=this._headerRowDefs.reduce(e,false);i&&this._forceRenderHeaderRows();let o=this._footerRowDefs.reduce(e,false);return o&&this._forceRenderFooterRows(),t||i||o}_switchDataSource(e){this._data=[],EX(this.dataSource)&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),e||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet&&this._rowOutlet.viewContainer.clear()),this._dataSource=e;}_observeRenderChanges(){if(!this.dataSource)return;let e;EX(this.dataSource)?e=this.dataSource.connect(this):wt(this.dataSource)?e=this.dataSource:Array.isArray(this.dataSource)&&(e=de(this.dataSource)),this._renderChangeSubscription=ev([e,this.viewChange]).pipe(Dv(this._onDestroy)).subscribe(([t,i])=>{this._data=t||[],this._renderedRange=i,this._dataStream.next(t),this.renderRows();});}_forceRenderHeaderRows(){this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach((e,t)=>this._renderRow(this._headerRowOutlet,e,t)),this.updateStickyHeaderRowStyles();}_forceRenderFooterRows(){this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach((e,t)=>this._renderRow(this._footerRowOutlet,e,t)),this.updateStickyFooterRowStyles();}_addStickyColumnStyles(e,t){let i=Array.from(t?.columns||[]).map(l=>{let d=this._columnDefsByName.get(l);return d}),o=i.map(l=>l.sticky),r=i.map(l=>l.stickyEnd);this._stickyStyler.updateStickyColumns(e,o,r,!this.fixedLayout||this._forceRecalculateCellWidths);}_getRenderedRows(e){let t=[];for(let i=0;i<e.viewContainer.length;i++){let o=e.viewContainer.get(i);t.push(o.rootNodes[0]);}return t}_getRowDefs(e,t){if(this._rowDefs.length===1)return [this._rowDefs[0]];let i=[];if(this.multiTemplateDataRows)i=this._rowDefs.filter(o=>!o.when||o.when(t,e));else {let o=this._rowDefs.find(r=>r.when&&r.when(t,e))||this._defaultRowDef;o&&i.push(o);}return i.length,i}_getEmbeddedViewArgs(e,t){let i=e.rowDef,o={$implicit:e.data};return {templateRef:i.template,context:o,index:t}}_renderRow(e,t,i,o={}){let r=e.viewContainer.createEmbeddedView(t.template,o,i);return this._renderCellTemplateForItem(t,o),r}_renderCellTemplateForItem(e,t){for(let i of this._getCellTemplates(e))le.mostRecentCellOutlet&&le.mostRecentCellOutlet._viewContainer.createEmbeddedView(i,t);this._changeDetectorRef.markForCheck();}_updateRowIndexContext(){let e=this._rowOutlet.viewContainer;for(let t=0,i=e.length;t<i;t++){let r=e.get(t).context;r.count=i,r.first=t===0,r.last=t===i-1,r.even=t%2===0,r.odd=!r.even,this.multiTemplateDataRows?(r.dataIndex=this._renderRows[t].dataIndex,r.renderIndex=t):r.index=this._renderRows[t].dataIndex;}}_getCellTemplates(e){return !e||!e.columns?[]:Array.from(e.columns,t=>{let i=this._columnDefsByName.get(t);return e.extractCellTemplate(i)})}_forceRenderDataRows(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows();}_checkStickyStates(){let e=(t,i)=>t||i.hasStickyChanged();this._headerRowDefs.reduce(e,false)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(e,false)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(e,false)&&(this._stickyColumnStylesNeedReset=true,this.updateStickyColumnStyles());}_setupStickyStyler(){let e=this._dir?this._dir.value:"ltr",t=this._injector;this._stickyStyler=new et(this._isNativeHtmlTable,this.stickyCssClass,this._platform.isBrowser,this.needsPositionStickyOnElement,e,this,t),(this._dir?this._dir.change:de()).pipe(Dv(this._onDestroy)).subscribe(i=>{this._stickyStyler.direction=i,this.updateStickyColumnStyles();});}_setupVirtualScrolling(e){let t=typeof requestAnimationFrame<"u"?cv:av;this.viewChange.next({start:0,end:0}),e.renderedRangeStream.pipe(dv(0,t),Dv(this._onDestroy)).subscribe(this.viewChange),e.attach({dataStream:this._dataStream,measureRangeSize:(i,o)=>this._measureRangeSize(i,o)}),ev([e.renderedContentOffset,this._headerRowStickyUpdates]).pipe(Dv(this._onDestroy)).subscribe(([i,o])=>{if(!(!o.sizes||!o.offsets||!o.elements))for(let r=0;r<o.elements.length;r++){let l=o.elements[r];if(l){let d=o.offsets[r],f=i!==0?Math.max(i-d,d):-d;for(let p of l)p.style.top=`${-f}px`;}}}),ev([e.renderedContentOffset,this._footerRowStickyUpdates]).pipe(Dv(this._onDestroy)).subscribe(([i,o])=>{if(!(!o.sizes||!o.offsets||!o.elements))for(let r=0;r<o.elements.length;r++){let l=o.elements[r];if(l)for(let d of l)d.style.bottom=`${i+o.offsets[r]}px`;}});}_getOwnDefs(e){return e.filter(t=>!t._table||t._table===this)}_updateNoDataRow(){let e=this._customNoDataRow||this._noDataRow;if(!e)return;let t=this._rowOutlet.viewContainer.length===0;if(t===this._isShowingNoDataRow)return;let i=this._noDataRowOutlet.viewContainer;if(t){let o=i.createEmbeddedView(e.templateRef),r=o.rootNodes[0];if(o.rootNodes.length===1&&r?.nodeType===this._document.ELEMENT_NODE){r.setAttribute("role","row"),r.classList.add(...e._contentClassNames);let l=r.querySelectorAll(e._cellSelector);for(let d=0;d<l.length;d++)l[d].classList.add(...e._cellClassNames);}}else i.clear();this._isShowingNoDataRow=t,this._changeDetectorRef.markForCheck();}_measureRangeSize(e,t){if(e.start>=e.end||t!=="vertical")return 0;let i=this.viewChange.value,o=this._rowOutlet.viewContainer;e.start<i.start||e.end>i.end;let r=e.start-i.start,l=e.end-e.start,d,f;for(let _=0;_<l;_++){let y=o.get(_+r);if(y&&y.rootNodes.length){d=f=y.rootNodes[0];break}}for(let _=l-1;_>-1;_--){let y=o.get(_+r);if(y&&y.rootNodes.length){f=y.rootNodes[y.rootNodes.length-1];break}}let p=d?.getBoundingClientRect?.(),D=f?.getBoundingClientRect?.();return p&&D?D.bottom-p.top:0}_virtualScrollEnabled(){return !this._disableVirtualScrolling&&this._virtualScrollViewport!=null}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=wo({type:n,selectors:[["cdk-table"],["table","cdk-table",""]],contentQueries:function(t,i,o){if(t&1&&am(o,Zi,5)(o,ne,5)(o,Ye,5)(o,xe,5)(o,it,5),t&2){let r;MC(r=NC())&&(i._noDataRow=r.first),MC(r=NC())&&(i._contentColumnDefs=r),MC(r=NC())&&(i._contentRowDefs=r),MC(r=NC())&&(i._contentHeaderRowDefs=r),MC(r=NC())&&(i._contentFooterRowDefs=r);}},hostAttrs:[1,"cdk-table"],hostVars:2,hostBindings:function(t,i){t&2&&qs("cdk-table-fixed-layout",i.fixedLayout);},inputs:{trackBy:"trackBy",dataSource:"dataSource",multiTemplateDataRows:[2,"multiTemplateDataRows","multiTemplateDataRows",Yl],fixedLayout:[2,"fixedLayout","fixedLayout",Yl],recycleRows:[2,"recycleRows","recycleRows",Yl]},outputs:{contentChanged:"contentChanged"},exportAs:["cdkTable"],features:[Em([{provide:V,useExisting:n},{provide:ke,useValue:null}])],ngContentSelectors:On,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(t,i){t&1&&(Pl(Fn),jl(0),jl(1,1),fC(2,Pn,1,0),fC(3,An,7,0)(4,Nn,4,0)),t&2&&(gI(2),pC(i._isServer?2:-1),gI(),pC(i._isNativeHtmlTable?3:4));},dependencies:[at,rt,lt,st],styles:[`.cdk-table-fixed-layout {
  table-layout: fixed;
}
`],encapsulation:2,changeDetection:1})}return n})();function Ve(n,a){return n.concat(Array.from(a))}function Xi(n,a){let e=a.toUpperCase(),t=n.viewContainer.element.nativeElement;for(;t;){let i=t.nodeType===1?t.nodeName:null;if(i===e)return t;if(i==="TABLE")break;t=t.parentNode;}return null}var Ji=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=Ee({type:n});static \u0275inj=fe({imports:[dm]})}return n})();var Ln=["*",[["","matSortHeaderIcon",""]]],Hn=["*","[matSortHeaderIcon]"];function zn(n,a){n&1&&(op(),Rl(0,"svg",3),em(1,"path",4),Ol());}function jn(n,a){n&1&&(Rl(0,"div",2),jl(1,1,null,zn,2,0),Ol());}var en=new m("MAT_SORT_DEFAULT_OPTIONS"),dt=(()=>{class n{_defaultOptions;_initializedStream=new Rr(1);sortables=new Map;_stateChanges=new Z$1;active;start="asc";get direction(){return this._direction}set direction(e){this._direction=e;}_direction="";disableClear;disabled=false;sortChange=new Re;initialized=this._initializedStream;constructor(e){this._defaultOptions=e;}register(e){this.sortables.set(e.id,e);}deregister(e){this.sortables.delete(e.id);}sort(e){this.active!=e.id?(this.active=e.id,this.direction=e.start?e.start:this.start):this.direction=this.getNextSortDirection(e),this.sortChange.emit({active:this.active,direction:this.direction});}getNextSortDirection(e){if(!e)return "";let t=e?.disableClear??this.disableClear??!!this._defaultOptions?.disableClear,i=Vn(e.start||this.start,t),o=i.indexOf(this.direction)+1;return o>=i.length&&(o=0),i[o]}ngOnInit(){this._initializedStream.next();}ngOnChanges(){this._stateChanges.next();}ngOnDestroy(){this._stateChanges.complete(),this._initializedStream.complete();}static \u0275fac=function(t){return new(t||n)(Bt(en,8))};static \u0275dir=Co({type:n,selectors:[["","matSort",""]],hostAttrs:[1,"mat-sort"],inputs:{active:[0,"matSortActive","active"],start:[0,"matSortStart","start"],direction:[0,"matSortDirection","direction"],disableClear:[2,"matSortDisableClear","disableClear",Yl],disabled:[2,"matSortDisabled","disabled",Yl]},outputs:{sortChange:"matSortChange"},exportAs:["matSort"],features:[Uu]})}return n})();function Vn(n,a){let e=["asc","desc"];return n=="desc"&&e.reverse(),a||e.push(""),e}var tn=(()=>{class n{_sort=g(dt,{optional:true});_columnDef=g(ne,{optional:true});_changeDetectorRef=g(No);_focusMonitor=g(Sa);_elementRef=g(Xe);_ariaDescriber=g(_k,{optional:true});_renderChanges;_animationsDisabled=hr();_recentlyCleared=nr(null);_sortButton;id;arrowPosition="after";start;disabled=false;get sortActionDescription(){return this._sortActionDescription}set sortActionDescription(e){this._updateSortActionDescription(e);}_sortActionDescription="Sort";disableClear;constructor(){g(KT).load(Dg);let e=g(en,{optional:true});this._sort,e?.arrowPosition&&(this.arrowPosition=e?.arrowPosition);}ngOnInit(){!this.id&&this._columnDef&&(this.id=this._columnDef.name),this._sort.register(this),this._renderChanges=lv(this._sort._stateChanges,this._sort.sortChange).subscribe(()=>this._changeDetectorRef.markForCheck()),this._sortButton=this._elementRef.nativeElement.querySelector(".mat-sort-header-container"),this._updateSortActionDescription(this._sortActionDescription);}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,true).subscribe(()=>{Promise.resolve().then(()=>this._recentlyCleared.set(null));});}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._sort.deregister(this),this._renderChanges?.unsubscribe(),this._sortButton&&this._ariaDescriber?.removeDescription(this._sortButton,this._sortActionDescription);}_toggleOnInteraction(){if(!this._isDisabled()){let e=this._isSorted(),t=this._sort.direction;this._sort.sort(this),this._recentlyCleared.set(e&&!this._isSorted()?t:null);}}_handleKeydown(e){(e.keyCode===32||e.keyCode===13)&&(e.preventDefault(),this._toggleOnInteraction());}_isSorted(){return this._sort.active==this.id&&(this._sort.direction==="asc"||this._sort.direction==="desc")}_isDisabled(){return this._sort.disabled||this.disabled}_getAriaSortAttribute(){return this._isSorted()?this._sort.direction=="asc"?"ascending":"descending":"none"}_renderArrow(){return !this._isDisabled()||this._isSorted()}_updateSortActionDescription(e){this._sortButton&&(this._ariaDescriber?.removeDescription(this._sortButton,this._sortActionDescription),this._ariaDescriber?.describe(this._sortButton,e)),this._sortActionDescription=e;}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=wo({type:n,selectors:[["","mat-sort-header",""]],hostAttrs:[1,"mat-sort-header"],hostVars:3,hostBindings:function(t,i){t&1&&im("click",function(){return i._toggleOnInteraction()})("keydown",function(r){return i._handleKeydown(r)})("mouseleave",function(){return i._recentlyCleared.set(null)}),t&2&&(_o("aria-sort",i._getAriaSortAttribute()),qs("mat-sort-header-disabled",i._isDisabled()));},inputs:{id:[0,"mat-sort-header","id"],arrowPosition:"arrowPosition",start:"start",disabled:[2,"disabled","disabled",Yl],sortActionDescription:"sortActionDescription",disableClear:[2,"disableClear","disableClear",Yl]},exportAs:["matSortHeader"],ngContentSelectors:Hn,decls:4,vars:17,consts:[[1,"mat-sort-header-container","mat-focus-indicator"],[1,"mat-sort-header-content"],[1,"mat-sort-header-arrow"],["viewBox","0 -960 960 960","focusable","false","aria-hidden","true"],["d","M440-240v-368L296-464l-56-56 240-240 240 240-56 56-144-144v368h-80Z"]],template:function(t,i){t&1&&(Pl(Ln),Rl(0,"div",0)(1,"div",1),jl(2),Ol(),fC(3,jn,3,0,"div",2),Ol()),t&2&&(qs("mat-sort-header-sorted",i._isSorted())("mat-sort-header-position-before",i.arrowPosition==="before")("mat-sort-header-descending",i._sort.direction==="desc")("mat-sort-header-ascending",i._sort.direction==="asc")("mat-sort-header-recently-cleared-ascending",i._recentlyCleared()==="asc")("mat-sort-header-recently-cleared-descending",i._recentlyCleared()==="desc")("mat-sort-header-animations-disabled",i._animationsDisabled),_o("tabindex",i._isDisabled()?null:0)("role",i._isDisabled()?null:"button"),gI(3),pC(i._renderArrow()?3:-1));},styles:[`.mat-sort-header {
  cursor: pointer;
}

.mat-sort-header-disabled {
  cursor: default;
}

.mat-sort-header-container {
  display: flex;
  align-items: center;
  letter-spacing: normal;
  outline: 0;
}
[mat-sort-header].cdk-keyboard-focused .mat-sort-header-container, [mat-sort-header].cdk-program-focused .mat-sort-header-container {
  border-bottom: solid 1px currentColor;
}
.mat-sort-header-container::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-sort-header-content {
  display: flex;
  align-items: center;
}

.mat-sort-header-position-before {
  flex-direction: row-reverse;
}

@keyframes _mat-sort-header-recently-cleared-ascending {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-25%);
    opacity: 0;
  }
}
@keyframes _mat-sort-header-recently-cleared-descending {
  from {
    transform: translateY(0) rotate(180deg);
    opacity: 1;
  }
  to {
    transform: translateY(25%) rotate(180deg);
    opacity: 0;
  }
}
.mat-sort-header-arrow {
  height: 12px;
  width: 12px;
  position: relative;
  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1), opacity 225ms cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  overflow: visible;
  color: var(--mat-sort-arrow-color, var(--mat-sys-on-surface));
}
.mat-sort-header.cdk-keyboard-focused .mat-sort-header-arrow, .mat-sort-header.cdk-program-focused .mat-sort-header-arrow, .mat-sort-header:hover .mat-sort-header-arrow {
  opacity: 0.54;
}
.mat-sort-header .mat-sort-header-sorted .mat-sort-header-arrow {
  opacity: 1;
}
.mat-sort-header-descending .mat-sort-header-arrow {
  transform: rotate(180deg);
}
.mat-sort-header-recently-cleared-ascending .mat-sort-header-arrow {
  transform: translateY(-25%);
}
.mat-sort-header-recently-cleared-ascending .mat-sort-header-arrow {
  transition: none;
  animation: _mat-sort-header-recently-cleared-ascending 225ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
.mat-sort-header-recently-cleared-descending .mat-sort-header-arrow {
  transition: none;
  animation: _mat-sort-header-recently-cleared-descending 225ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
.mat-sort-header-animations-disabled .mat-sort-header-arrow {
  transition-duration: 0ms;
  animation-duration: 0ms;
}
.mat-sort-header-arrow > svg, .mat-sort-header-arrow [matSortHeaderIcon] {
  width: 24px;
  height: 24px;
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -12px 0 0 -12px;
  transform: translateZ(0);
}
.mat-sort-header-arrow, [dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow {
  margin: 0 0 0 6px;
}
.mat-sort-header-position-before .mat-sort-header-arrow, [dir=rtl] .mat-sort-header-arrow {
  margin: 0 6px 0 0;
}
`],encapsulation:2})}return n})(),nn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=Ee({type:n});static \u0275inj=fe({imports:[wy]})}return n})();var Qn=[[["caption"]],[["colgroup"],["col"]],"*"],qn=["caption","colgroup, col","*"];function Yn(n,a){n&1&&jl(0,2);}function Wn(n,a){n&1&&(xs(0,"thead",0),nm(1,1),xl(),xs(2,"tbody",2),nm(3,3)(4,4),xl(),xs(5,"tfoot",0),nm(6,5),xl());}function Xn(n,a){n&1&&nm(0,1)(1,3)(2,4)(3,5);}var on=(()=>{class n extends ct{stickyCssClass="mat-mdc-table-sticky";needsPositionStickyOnElement=false;static \u0275fac=(()=>{let e;return function(i){return (e||(e=hr$1(n)))(i||n)}})();static \u0275cmp=wo({type:n,selectors:[["mat-table"],["table","mat-table",""]],hostAttrs:[1,"mat-mdc-table","mdc-data-table__table"],hostVars:2,hostBindings:function(t,i){t&2&&qs("mat-table-fixed-layout",i.fixedLayout);},exportAs:["matTable"],features:[Em([{provide:ct,useExisting:n},{provide:V,useExisting:n},{provide:ke,useValue:null}]),zg],ngContentSelectors:qn,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["role","rowgroup",1,"mdc-data-table__content"],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(t,i){t&1&&(Pl(Qn),jl(0),jl(1,1),fC(2,Yn,1,0),fC(3,Wn,7,0)(4,Xn,4,0)),t&2&&(gI(2),pC(i._isServer?2:-1),gI(),pC(i._isNativeHtmlTable?3:4));},dependencies:[at,rt,lt,st],styles:[`.mat-mdc-table-sticky {
  position: sticky !important;
}

mat-table {
  display: block;
}

mat-header-row {
  min-height: var(--mat-table-header-container-height, 56px);
}

mat-row {
  min-height: var(--mat-table-row-item-container-height, 52px);
}

mat-footer-row {
  min-height: var(--mat-table-footer-container-height, 52px);
}

mat-row, mat-header-row, mat-footer-row {
  display: flex;
  border-width: 0;
  border-bottom-width: 1px;
  border-style: solid;
  align-items: center;
  box-sizing: border-box;
}

mat-cell:first-of-type, mat-header-cell:first-of-type, mat-footer-cell:first-of-type {
  padding-left: 24px;
}
[dir=rtl] mat-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type) {
  padding-left: 0;
  padding-right: 24px;
}
mat-cell:last-of-type, mat-header-cell:last-of-type, mat-footer-cell:last-of-type {
  padding-right: 24px;
}
[dir=rtl] mat-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type) {
  padding-right: 0;
  padding-left: 24px;
}

mat-cell, mat-header-cell, mat-footer-cell {
  flex: 1;
  display: flex;
  align-items: center;
  overflow: hidden;
  word-wrap: break-word;
  min-height: inherit;
}

.mat-mdc-table {
  min-width: 100%;
  border: 0;
  border-spacing: 0;
  table-layout: auto;
  white-space: normal;
  background-color: var(--mat-table-background-color, var(--mat-sys-surface));
}

.mat-table-fixed-layout {
  table-layout: fixed;
}

.mdc-data-table__cell {
  box-sizing: border-box;
  overflow: hidden;
  text-align: start;
  text-overflow: ellipsis;
}

.mdc-data-table__cell,
.mdc-data-table__header-cell {
  padding: 0 16px;
}

.mat-mdc-header-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--mat-table-header-container-height, 56px);
  color: var(--mat-table-header-headline-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-table-header-headline-font, var(--mat-sys-title-small-font, Roboto, sans-serif));
  line-height: var(--mat-table-header-headline-line-height, var(--mat-sys-title-small-line-height));
  font-size: var(--mat-table-header-headline-size, var(--mat-sys-title-small-size, 14px));
  font-weight: var(--mat-table-header-headline-weight, var(--mat-sys-title-small-weight, 500));
}

.mat-mdc-row {
  height: var(--mat-table-row-item-container-height, 52px);
  color: var(--mat-table-row-item-label-text-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
}

.mat-mdc-row,
.mdc-data-table__content {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-table-row-item-label-text-font, var(--mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--mat-table-row-item-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-table-row-item-label-text-size, var(--mat-sys-body-medium-size, 14px));
  font-weight: var(--mat-table-row-item-label-text-weight, var(--mat-sys-body-medium-weight));
}

.mat-mdc-footer-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--mat-table-footer-container-height, 52px);
  color: var(--mat-table-row-item-label-text-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-table-footer-supporting-text-font, var(--mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--mat-table-footer-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-table-footer-supporting-text-size, var(--mat-sys-body-medium-size, 14px));
  font-weight: var(--mat-table-footer-supporting-text-weight, var(--mat-sys-body-medium-weight));
  letter-spacing: var(--mat-table-footer-supporting-text-tracking, var(--mat-sys-body-medium-tracking));
}

.mat-mdc-header-cell {
  border-bottom-color: var(--mat-table-row-item-outline-color, var(--mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--mat-table-header-headline-tracking, var(--mat-sys-title-small-tracking));
  font-weight: inherit;
  line-height: inherit;
  box-sizing: border-box;
  text-overflow: ellipsis;
  overflow: hidden;
  outline: none;
  text-align: start;
}
.mdc-data-table__row:last-child > .mat-mdc-header-cell {
  border-bottom: none;
}

.mat-mdc-cell {
  border-bottom-color: var(--mat-table-row-item-outline-color, var(--mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--mat-table-row-item-label-text-tracking, var(--mat-sys-body-medium-tracking));
  line-height: inherit;
}
.mdc-data-table__row:last-child > .mat-mdc-cell {
  border-bottom: none;
}

.mat-mdc-footer-cell {
  letter-spacing: var(--mat-table-row-item-label-text-tracking, var(--mat-sys-body-medium-tracking));
}

mat-row.mat-mdc-row,
mat-header-row.mat-mdc-header-row,
mat-footer-row.mat-mdc-footer-row {
  border-bottom: none;
}

.mat-mdc-table tbody,
.mat-mdc-table tfoot,
.mat-mdc-table thead,
.mat-mdc-cell,
.mat-mdc-footer-cell,
.mat-mdc-header-row,
.mat-mdc-row,
.mat-mdc-footer-row,
.mat-mdc-table .mat-mdc-header-cell {
  background: inherit;
}

.mat-mdc-table mat-header-row.mat-mdc-header-row,
.mat-mdc-table mat-row.mat-mdc-row,
.mat-mdc-table mat-footer-row.mat-mdc-footer-cell {
  height: unset;
}

mat-header-cell.mat-mdc-header-cell,
mat-cell.mat-mdc-cell,
mat-footer-cell.mat-mdc-footer-cell {
  align-self: stretch;
}
`],encapsulation:2,changeDetection:1})}return n})(),rn=(()=>{class n extends Qe{static \u0275fac=(()=>{let e;return function(i){return (e||(e=hr$1(n)))(i||n)}})();static \u0275dir=Co({type:n,selectors:[["","matCellDef",""]],features:[Em([{provide:Qe,useExisting:n}]),zg]})}return n})(),an=(()=>{class n extends qe{static \u0275fac=(()=>{let e;return function(i){return (e||(e=hr$1(n)))(i||n)}})();static \u0275dir=Co({type:n,selectors:[["","matHeaderCellDef",""]],features:[Em([{provide:qe,useExisting:n}]),zg]})}return n})();var sn=(()=>{class n extends ne{get name(){return this._name}set name(e){this._setNameInput(e);}_updateColumnCssClassName(){super._updateColumnCssClassName(),this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`);}static \u0275fac=(()=>{let e;return function(i){return (e||(e=hr$1(n)))(i||n)}})();static \u0275dir=Co({type:n,selectors:[["","matColumnDef",""]],inputs:{name:[0,"matColumnDef","name"]},features:[Em([{provide:ne,useExisting:n}]),zg]})}return n})(),ln=(()=>{class n extends Ki{static \u0275fac=(()=>{let e;return function(i){return (e||(e=hr$1(n)))(i||n)}})();static \u0275dir=Co({type:n,selectors:[["mat-header-cell"],["th","mat-header-cell",""]],hostAttrs:["role","columnheader",1,"mat-mdc-header-cell","mdc-data-table__header-cell"],features:[zg]})}return n})();var cn=(()=>{class n extends Gi{static \u0275fac=(()=>{let e;return function(i){return (e||(e=hr$1(n)))(i||n)}})();static \u0275dir=Co({type:n,selectors:[["mat-cell"],["td","mat-cell",""]],hostAttrs:[1,"mat-mdc-cell","mdc-data-table__cell"],features:[zg]})}return n})();var dn=(()=>{class n extends xe{static \u0275fac=(()=>{let e;return function(i){return (e||(e=hr$1(n)))(i||n)}})();static \u0275dir=Co({type:n,selectors:[["","matHeaderRowDef",""]],inputs:{columns:[0,"matHeaderRowDef","columns"],sticky:[2,"matHeaderRowDefSticky","sticky",Yl]},features:[Em([{provide:xe,useExisting:n}]),zg]})}return n})();var un=(()=>{class n extends Ye{static \u0275fac=(()=>{let e;return function(i){return (e||(e=hr$1(n)))(i||n)}})();static \u0275dir=Co({type:n,selectors:[["","matRowDef",""]],inputs:{columns:[0,"matRowDefColumns","columns"],when:[0,"matRowDefWhen","when"]},features:[Em([{provide:Ye,useExisting:n}]),zg]})}return n})(),mn=(()=>{class n extends nt{static \u0275fac=(()=>{let e;return function(i){return (e||(e=hr$1(n)))(i||n)}})();static \u0275cmp=wo({type:n,selectors:[["mat-header-row"],["tr","mat-header-row",""]],hostAttrs:["role","row",1,"mat-mdc-header-row","mdc-data-table__header-row"],exportAs:["matHeaderRow"],features:[Em([{provide:nt,useExisting:n}]),zg],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,i){t&1&&nm(0,0);},dependencies:[le],encapsulation:2,changeDetection:1})}return n})();var hn=(()=>{class n extends ot{static \u0275fac=(()=>{let e;return function(i){return (e||(e=hr$1(n)))(i||n)}})();static \u0275cmp=wo({type:n,selectors:[["mat-row"],["tr","mat-row",""]],hostAttrs:["role","row",1,"mat-mdc-row","mdc-data-table__row"],exportAs:["matRow"],features:[Em([{provide:ot,useExisting:n}]),zg],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,i){t&1&&nm(0,0);},dependencies:[le],encapsulation:2,changeDetection:1})}return n})();var fn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=Ee({type:n});static \u0275inj=fe({imports:[Ji,wy]})}return n})();var pn=()=>n=>n.pipe(U(a=>{let e=a.get("pageIndex"),t=a.get("pageSize");return {pageIndex:e?+e:1,pageSize:t?+t:5}}));var _n=()=>n=>n.pipe(U(a=>a.get("query")||""));var gn=()=>n=>n.pipe(U(a=>({sortBy:a.get("sortBy")||"id",sortDirection:a.get("sortDirection")||"asc"})));var ut=n=>[n],Kn=(n,a)=>[n,a];function Gn(n,a){if(n&1){let e=wC();xs(0,"button",21),cb(1,"translate"),cb(2,"translate"),im("click",function(){Gf(e);let i=TC();return Wf(i.onQueryRemove())}),xs(3,"mat-icon"),XC(4,"close"),xl()();}n&2&&(Jg("matTooltip",lb(1,2,"uni.clear")),_o("aria-label",lb(2,4,"uni.clear")));}function Zn(n,a){n&1&&(xs(0,"th",22),XC(1),cb(2,"translate"),xl()),n&2&&(gI(),ym$1(lb(2,1,"table.posts.id.title")));}function Jn(n,a){if(n&1&&(xs(0,"td",23),XC(1),xl()),n&2){let e=a.$implicit;gI(),Vl(" ",e.id," ");}}function eo(n,a){n&1&&(xs(0,"th",22),XC(1),cb(2,"translate"),xl()),n&2&&(gI(),ym$1(lb(2,1,"table.posts.title.title")));}function to(n,a){if(n&1&&(xs(0,"td",23),XC(1),xl()),n&2){let e=a.$implicit;gI(),Vl(" ",e.title," ");}}function io(n,a){n&1&&(xs(0,"th",24),XC(1,"\xA0"),xl());}function no(n,a){if(n&1){let e=wC();xs(0,"td",23)(1,"button",25),cb(2,"translate"),xs(3,"mat-icon"),XC(4,"more_vert"),xl()(),xs(5,"mat-menu",null,0)(7,"a",26),cb(8,"localize"),xs(9,"mat-icon"),XC(10,"info"),xl(),xs(11,"span"),XC(12),cb(13,"translate"),xl()(),xs(14,"a",26),cb(15,"localize"),xs(16,"mat-icon"),XC(17,"edit"),xl(),xs(18,"span"),XC(19),cb(20,"translate"),xl()(),xs(21,"button",27),im("deleted",function(){let i=Gf(e).$implicit,o=TC();return Wf(o.onDeleted(i.id))}),xs(22,"mat-icon"),XC(23,"delete"),xl(),xs(24,"span"),XC(25),cb(26,"translate"),xl()()()();}if(n&2){let e=a.$implicit,t=xC(6),i=TC();gI(),Jg("matMenuTriggerFor",t),_o("aria-label",lb(2,8,"uni.aria-label.show-actions")),gI(6),Jg("routerLink",ab(20,Kn,lb(8,10,"/"),e.id)),gI(5),ym$1(lb(13,12,"uni.detail")),gI(2),Jg("routerLink",sb(23,ut,lb(15,14,"/"+e.id+"/"+i.ROUTE_DEFINITION.POSTS.EDIT))),gI(5),ym$1(lb(20,16,"uni.edit")),gI(2),Jg("appPostDelete",e.id),gI(4),ym$1(lb(26,18,"uni.delete"));}}function oo(n,a){n&1&&Xg(0,"tr",28);}function ro(n,a){n&1&&Xg(0,"tr",29);}function ao(n,a){n&1&&(xs(0,"div",30)(1,"a",31),cb(2,"localize"),XC(3),cb(4,"translate"),xl()()),n&2&&(gI(),Jg("routerLink",sb(6,ut,lb(2,2,"/"))),gI(2),ym$1(lb(4,4,"breadcrumbs.app.posts")));}var Ca=(()=>{class n{constructor(){this.apiService=g(rt$1),this.rxdbProvider=g(wX),this.router=g(Te),this.route=g(gr),this.breadcrumbsPortalService=g(YT),this.ROUTE_DEFINITION=oZ,this.displayedColumns=["id","title","actions"],this.pageSizeOptions=[5,10,25,100],this.destroyRef=g(De),this.data=nr([]),this.totalCount=nr(0),this.query=nr(""),this.pageSize=nr(5),this.pageIndex=nr(1),this.sortBy=nr("id"),this.sortDirection=nr("asc"),this.dbReady=nr(false),fp(()=>{this.dbReady()&&this.apiService.listAndCount({page:this.pageIndex(),limit:this.pageSize(),sort:this.sortBy(),order:this.sortDirection(),query:this.query()}).pipe(w(this.destroyRef)).subscribe(e=>{this.data.set(e.items),this.totalCount.set(e.totalCount);});});}ngOnDestroy(){this.portalContent?.detach();}ngOnInit(){this.breadcrumbsPortalService.setPortal(this.portalContent),ev([this.route.queryParamMap.pipe(pn()),this.route.queryParamMap.pipe(_n()),this.route.queryParamMap.pipe(gn())]).pipe(Wd(1e3),w(this.destroyRef)).subscribe(([e,t,i])=>{this.query.set(t),this.pageIndex.set(e.pageIndex||1),this.pageSize.set(e.pageSize||5),this.sortBy.set(i.sortBy||"id"),this.sortDirection.set(i.sortDirection||"asc");}),this.rxdbProvider.dataBaseReady$.pipe(Dt(e=>!!e),ef()).subscribe(()=>this.dbReady.set(true));}onPageChange(e){let t=null;e.pageSize===this.pageSize()&&(t=e.pageIndex+1>1?e.pageIndex+1:null),this.setFiltersToRoute({pageIndex:t,pageSize:e.pageSize});}trackByPostId(e,t){return t.id}onDeleted(e){this.data.update(t=>t.filter(i=>i.id!==e));}onSortChange(e){this.setFiltersToRoute({sortBy:e.active,sortDirection:e.direction,pageIndex:null});}onQueryChange(e){let t=e.target.value;this.setFiltersToRoute({query:t?encodeURIComponent(t):null,pageIndex:null});}onQueryRemove(){this.setFiltersToRoute({query:null,pageIndex:null});}onClear(){this.setFiltersToRoute({query:null,pageIndex:null,pageSize:null,sortBy:null,sortDirection:null});}setFiltersToRoute(e){this.router.navigate([],{queryParams:e,queryParamsHandling:"merge",replaceUrl:true});}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=wo({type:n,selectors:[["app-post-list"]],viewQuery:function(t,i){if(t&1&&cm($D,7),t&2){let o;MC(o=NC())&&(i.portalContent=o.first);}},decls:34,vars:33,consts:[["menu","matMenu"],[1,"w-full"],["matInput","",3,"input","ngModelChange","placeholder","ngModel"],["matSuffix","","mat-icon-button","",3,"matTooltip"],[1,"flex","items-end","justify-end","gap-2"],["mat-button","",3,"click"],["mat-button","",3,"routerLink"],["mat-table","","matSort","","matSortDisableClear","",3,"matSortChange","fixedLayout","dataSource","matSortActive","matSortDirection","trackBy"],["width","200"],["width","auto"],["width","50"],["matColumnDef","id"],["mat-header-cell","","mat-sort-header","","disableClear","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","title"],["matColumnDef","actions"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[3,"page","pageSizeOptions","pageSize","pageIndex","length"],["class","container py-4",4,"cdkPortal"],["matSuffix","","mat-icon-button","",3,"click","matTooltip"],["mat-header-cell","","mat-sort-header","","disableClear",""],["mat-cell",""],["mat-header-cell",""],["mat-icon-button","",3,"matMenuTriggerFor"],["mat-menu-item","",3,"routerLink"],["mat-menu-item","",3,"deleted","appPostDelete"],["mat-header-row",""],["mat-row",""],[1,"container","py-4"],["mat-button","","color","primary",3,"routerLink"]],template:function(t,i){t&1&&(xs(0,"mat-form-field",1)(1,"mat-label"),XC(2),cb(3,"translate"),xl(),xs(4,"input",2),cb(5,"translate"),im("input",function(r){return i.onQueryChange(r)})("ngModelChange",function(r){return i.query.set(r)}),xl(),nw(),fC(6,Gn,5,6,"button",3),xl(),xs(7,"div",4)(8,"button",5),im("click",function(){return i.onClear()}),XC(9),cb(10,"translate"),xl(),xs(11,"a",6),cb(12,"localize"),XC(13),cb(14,"translate"),xl()(),xs(15,"table",7),im("matSortChange",function(r){return i.onSortChange(r)}),xs(16,"colgroup"),Xg(17,"col",8)(18,"col",9)(19,"col",10),xl(),kl(20,11),Wg(21,Zn,3,3,"th",12)(22,Jn,2,1,"td",13),Fl(),kl(23,14),Wg(24,eo,3,3,"th",12)(25,to,2,1,"td",13),Fl(),kl(26,15),Wg(27,io,2,0,"th",16)(28,no,27,25,"td",13),Fl(),Wg(29,oo,1,0,"tr",17)(30,ro,1,0,"tr",18),xl(),xs(31,"mat-paginator",19),cb(32,"translate"),im("page",function(r){return i.onPageChange(r)}),xl(),Wg(33,ao,5,8,"div",20)),t&2&&(gI(2),ym$1(lb(3,19,"input.search.label")),gI(2),Jg("placeholder",lb(5,21,"input.search.placeholder"))("ngModel",i.query()),ow(),gI(2),pC(i.query()?6:-1),gI(3),ym$1(lb(10,23,"uni.clear-filters")),gI(2),Jg("routerLink",sb(31,ut,lb(12,25,"/"+i.ROUTE_DEFINITION.POSTS.CREATE))),gI(2),ym$1(lb(14,27,"uni.create")),gI(2),Jg("fixedLayout",true)("dataSource",i.data())("matSortActive",i.sortBy())("matSortDirection",i.sortDirection())("trackBy",i.trackByPostId),gI(14),Jg("matHeaderRowDef",i.displayedColumns),gI(),Jg("matRowDefColumns",i.displayedColumns),gI(),Jg("pageSizeOptions",i.pageSizeOptions)("pageSize",i.pageSize())("pageIndex",i.pageIndex()-1)("length",i.totalCount()),_o("aria-label",lb(32,29,"uni.aria-label.select-page-of-posts")));},dependencies:[Dv$1,lS,fn,on,an,dn,sn,rn,un,ln,cn,mn,hn,kn$1,Xt,nn,dt,tn,Yi,we,Se,qi,qU,WU,Mg,Tg,s0,Kr,Do,Fr,di,et$1,xn$1,Ve$1,Be,_r,bi,fr$1,ao$1,o$,un$1,$D,w$1,HT,r$],styles:["[_nghost-%COMP%]{width:100%;margin-right:auto;margin-left:auto;padding-right:1rem;padding-left:1rem}@media(min-width:640px){[_nghost-%COMP%]{max-width:640px}}@media(min-width:768px){[_nghost-%COMP%]{max-width:768px}}@media(min-width:1024px){[_nghost-%COMP%]{max-width:1024px}}@media(min-width:1280px){[_nghost-%COMP%]{max-width:1280px}}@media(min-width:1536px){[_nghost-%COMP%]{max-width:1536px}}[_nghost-%COMP%]{display:block}[_nghost-%COMP%] > [_ngcontent-%COMP%]:not([hidden]) ~ [_ngcontent-%COMP%]:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.5rem * var(--tw-space-y-reverse))}[_nghost-%COMP%]{padding-top:1rem;padding-bottom:1rem}"]});}}return n})();export{Ca as PostListComponent};