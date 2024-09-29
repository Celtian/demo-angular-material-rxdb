import{c as $,d as K,f as k,h as Y,i as G,l as X,p as J}from"./chunk-JIZFICXS.js";import{$a as D,E as H,Ga as u,Gc as c,H as S,Hc as x,Ic as W,Ka as p,Mb as V,Qa as r,Qc as v,Rc as M,Uc as I,_ as L,bc as z,da as F,ea as m,fb as j,ga as N,hb as P,ia as b,ic as q,m as d,md as w,na as f,nd as Z,oa as _,od as U,q as T,va as B,vb as O,xb as g}from"./chunk-OKNWWQ6Y.js";var Q=W({passive:!0}),ee=(()=>{class s{constructor(e,t){this._platform=e,this._ngZone=t,this._monitoredElements=new Map}monitor(e){if(!this._platform.isBrowser)return T;let t=I(e),i=this._monitoredElements.get(t);if(i)return i.subject;let n=new d,o="cdk-text-field-autofilled",a=l=>{l.animationName==="cdk-text-field-autofill-start"&&!t.classList.contains(o)?(t.classList.add(o),this._ngZone.run(()=>n.next({target:l.target,isAutofilled:!0}))):l.animationName==="cdk-text-field-autofill-end"&&t.classList.contains(o)&&(t.classList.remove(o),this._ngZone.run(()=>n.next({target:l.target,isAutofilled:!1})))};return this._ngZone.runOutsideAngular(()=>{t.addEventListener("animationstart",a,Q),t.classList.add("cdk-text-field-autofill-monitored")}),this._monitoredElements.set(t,{subject:n,unlisten:()=>{t.removeEventListener("animationstart",a,Q)}}),n}stopMonitoring(e){let t=I(e),i=this._monitoredElements.get(t);i&&(i.unlisten(),i.subject.complete(),t.classList.remove("cdk-text-field-autofill-monitored"),t.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(t))}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t))}static{this.\u0275fac=function(t){return new(t||s)(b(c),b(u))}}static{this.\u0275prov=F({token:s,factory:s.\u0275fac,providedIn:"root"})}}return s})();var Me=(()=>{class s{get minRows(){return this._minRows}set minRows(e){this._minRows=M(e),this._setMinHeight()}get maxRows(){return this._maxRows}set maxRows(e){this._maxRows=M(e),this._setMaxHeight()}get enabled(){return this._enabled}set enabled(e){this._enabled!==e&&((this._enabled=e)?this.resizeToFitContent(!0):this.reset())}get placeholder(){return this._textareaElement.placeholder}set placeholder(e){this._cachedPlaceholderHeight=void 0,e?this._textareaElement.setAttribute("placeholder",e):this._textareaElement.removeAttribute("placeholder"),this._cacheTextareaPlaceholderHeight()}constructor(e,t,i,n){this._elementRef=e,this._platform=t,this._ngZone=i,this._destroyed=new d,this._enabled=!0,this._previousMinRows=-1,this._isViewInited=!1,this._handleFocusEvent=o=>{this._hasFocus=o.type==="focus"},this._document=n,this._textareaElement=this._elementRef.nativeElement}_setMinHeight(){let e=this.minRows&&this._cachedLineHeight?`${this.minRows*this._cachedLineHeight}px`:null;e&&(this._textareaElement.style.minHeight=e)}_setMaxHeight(){let e=this.maxRows&&this._cachedLineHeight?`${this.maxRows*this._cachedLineHeight}px`:null;e&&(this._textareaElement.style.maxHeight=e)}ngAfterViewInit(){this._platform.isBrowser&&(this._initialHeight=this._textareaElement.style.height,this.resizeToFitContent(),this._ngZone.runOutsideAngular(()=>{let e=this._getWindow();H(e,"resize").pipe(S(16),L(this._destroyed)).subscribe(()=>this.resizeToFitContent(!0)),this._textareaElement.addEventListener("focus",this._handleFocusEvent),this._textareaElement.addEventListener("blur",this._handleFocusEvent)}),this._isViewInited=!0,this.resizeToFitContent(!0))}ngOnDestroy(){this._textareaElement.removeEventListener("focus",this._handleFocusEvent),this._textareaElement.removeEventListener("blur",this._handleFocusEvent),this._destroyed.next(),this._destroyed.complete()}_cacheTextareaLineHeight(){if(this._cachedLineHeight)return;let e=this._textareaElement.cloneNode(!1);e.rows=1,e.style.position="absolute",e.style.visibility="hidden",e.style.border="none",e.style.padding="0",e.style.height="",e.style.minHeight="",e.style.maxHeight="",e.style.overflow="hidden",this._textareaElement.parentNode.appendChild(e),this._cachedLineHeight=e.clientHeight,e.remove(),this._setMinHeight(),this._setMaxHeight()}_measureScrollHeight(){let e=this._textareaElement,t=e.style.marginBottom||"",i=this._platform.FIREFOX,n=i&&this._hasFocus,o=i?"cdk-textarea-autosize-measuring-firefox":"cdk-textarea-autosize-measuring";n&&(e.style.marginBottom=`${e.clientHeight}px`),e.classList.add(o);let a=e.scrollHeight-4;return e.classList.remove(o),n&&(e.style.marginBottom=t),a}_cacheTextareaPlaceholderHeight(){if(!this._isViewInited||this._cachedPlaceholderHeight!=null)return;if(!this.placeholder){this._cachedPlaceholderHeight=0;return}let e=this._textareaElement.value;this._textareaElement.value=this._textareaElement.placeholder,this._cachedPlaceholderHeight=this._measureScrollHeight(),this._textareaElement.value=e}ngDoCheck(){this._platform.isBrowser&&this.resizeToFitContent()}resizeToFitContent(e=!1){if(!this._enabled||(this._cacheTextareaLineHeight(),this._cacheTextareaPlaceholderHeight(),!this._cachedLineHeight))return;let t=this._elementRef.nativeElement,i=t.value;if(!e&&this._minRows===this._previousMinRows&&i===this._previousValue)return;let n=this._measureScrollHeight(),o=Math.max(n,this._cachedPlaceholderHeight||0);t.style.height=`${o}px`,this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame<"u"?requestAnimationFrame(()=>this._scrollToCaretPosition(t)):setTimeout(()=>this._scrollToCaretPosition(t))}),this._previousValue=i,this._previousMinRows=this._minRows}reset(){this._initialHeight!==void 0&&(this._textareaElement.style.height=this._initialHeight)}_noopInputHandler(){}_getDocument(){return this._document||document}_getWindow(){return this._getDocument().defaultView||window}_scrollToCaretPosition(e){let{selectionStart:t,selectionEnd:i}=e;!this._destroyed.isStopped&&this._hasFocus&&e.setSelectionRange(t,i)}static{this.\u0275fac=function(t){return new(t||s)(r(p),r(c),r(u),r(q,8))}}static{this.\u0275dir=_({type:s,selectors:[["textarea","cdkTextareaAutosize",""]],hostAttrs:["rows","1",1,"cdk-textarea-autosize"],hostBindings:function(t,i){t&1&&g("input",function(){return i._noopInputHandler()})},inputs:{minRows:[0,"cdkAutosizeMinRows","minRows"],maxRows:[0,"cdkAutosizeMaxRows","maxRows"],enabled:[2,"cdkTextareaAutosize","enabled",z],placeholder:"placeholder"},exportAs:["cdkTextareaAutosize"],standalone:!0,features:[D]})}}return s})(),te=(()=>{class s{static{this.\u0275fac=function(t){return new(t||s)}}static{this.\u0275mod=f({type:s})}static{this.\u0275inj=m({})}}return s})();var oe=new N("MAT_INPUT_VALUE_ACCESSOR"),ae=["button","checkbox","file","hidden","image","radio","range","reset","submit"],le=0,Oe=(()=>{class s{get disabled(){return this._disabled}set disabled(e){this._disabled=v(e),this.focused&&(this.focused=!1,this.stateChanges.next())}get id(){return this._id}set id(e){this._id=e||this._uid}get required(){return this._required??this.ngControl?.control?.hasValidator(Y.required)??!1}set required(e){this._required=v(e)}get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&x().has(this._type)&&(this._elementRef.nativeElement.type=this._type),this._ensureWheelDefaultBehavior()}get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}get value(){return this._inputValueAccessor.value}set value(e){e!==this.value&&(this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=v(e)}get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}constructor(e,t,i,n,o,a,l,ie,A,C){this._elementRef=e,this._platform=t,this.ngControl=i,this._autofillMonitor=ie,this._ngZone=A,this._formField=C,this._uid=`mat-input-${le++}`,this._webkitBlinkWheelListenerAttached=!1,this.focused=!1,this.stateChanges=new d,this.controlType="mat-input",this.autofilled=!1,this._disabled=!1,this._type="text",this._readonly=!1,this._neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(E=>x().has(E)),this._iOSKeyupListener=E=>{let h=E.target;!h.value&&h.selectionStart===0&&h.selectionEnd===0&&(h.setSelectionRange(1,1),h.setSelectionRange(0,0))},this._webkitBlinkWheelListener=()=>{};let y=this._elementRef.nativeElement,R=y.nodeName.toLowerCase();this._inputValueAccessor=l||y,this._previousNativeValue=this.value,this.id=this.id,t.IOS&&A.runOutsideAngular(()=>{e.nativeElement.addEventListener("keyup",this._iOSKeyupListener)}),this._errorStateTracker=new Z(a,i,o,n,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=R==="select",this._isTextarea=R==="textarea",this._isInFormField=!!C,this._isNativeSelect&&(this.controlType=y.multiple?"mat-native-select-multiple":"mat-native-select")}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._platform.IOS&&this._elementRef.nativeElement.removeEventListener("keyup",this._iOSKeyupListener),this._webkitBlinkWheelListenerAttached&&this._elementRef.nativeElement.removeEventListener("wheel",this._webkitBlinkWheelListener)}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){e!==this.focused&&(this.focused=e,this.stateChanges.next())}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let t=this._elementRef.nativeElement;this._previousPlaceholder=e,e?t.setAttribute("placeholder",e):t.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){ae.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}else return this.focused||!this.empty}setDescribedByIds(e){e.length?this._elementRef.nativeElement.setAttribute("aria-describedby",e.join(" ")):this._elementRef.nativeElement.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_ensureWheelDefaultBehavior(){!this._webkitBlinkWheelListenerAttached&&this._type==="number"&&(this._platform.BLINK||this._platform.WEBKIT)&&(this._ngZone.runOutsideAngular(()=>{this._elementRef.nativeElement.addEventListener("wheel",this._webkitBlinkWheelListener)}),this._webkitBlinkWheelListenerAttached=!0),this._webkitBlinkWheelListenerAttached&&this._type!=="number"&&(this._elementRef.nativeElement.removeEventListener("wheel",this._webkitBlinkWheelListener),this._webkitBlinkWheelListenerAttached=!0)}static{this.\u0275fac=function(t){return new(t||s)(r(p),r(c),r(G,10),r(X,8),r(J,8),r(U),r(oe,10),r(ee),r(u),r(K,8))}}static{this.\u0275dir=_({type:s,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:18,hostBindings:function(t,i){t&1&&g("focus",function(){return i._focusChanged(!0)})("blur",function(){return i._focusChanged(!1)})("input",function(){return i._onInput()}),t&2&&(O("id",i.id)("disabled",i.disabled)("required",i.required),j("name",i.name||null)("readonly",i.readonly&&!i._isNativeSelect||null)("aria-invalid",i.empty&&i.required?null:i.errorState)("aria-required",i.required)("id",i.id),P("mat-input-server",i._isServer)("mat-mdc-form-field-textarea-control",i._isInFormField&&i._isTextarea)("mat-mdc-form-field-input-control",i._isInFormField)("mdc-text-field__input",i._isInFormField)("mat-mdc-native-select-inline",i._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly"},exportAs:["matInput"],standalone:!0,features:[V([{provide:$,useExisting:s}]),B]})}}return s})(),Ve=(()=>{class s{static{this.\u0275fac=function(t){return new(t||s)}}static{this.\u0275mod=f({type:s})}static{this.\u0275inj=m({imports:[w,k,k,te,w]})}}return s})();export{Me as a,Oe as b,Ve as c};
