import{r as t,d as i,h as a,g as e}from"./p-4d42db0b.js";import{d as s}from"./p-c673c097.js";import{c as n,d as r,u as o}from"./p-27680149.js";import{c,d as l,g as h}from"./p-9daba94c.js";import{s as d,a as p,c as m}from"./p-86ba524c.js";import{c as f,d as u}from"./p-79237d37.js";import{c as b}from"./p-6207f8cf.js";import{c as g,s as v,d as y,u as w}from"./p-876a8809.js";import"./p-386d1501.js";import"./p-2a7cd91f.js";import"./p-779078e6.js";import"./p-2872e2fa.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */const k={wrapper:"wrapper",confirmChangesButton:"confirm-changes-button",cancelEditingButton:"cancel-editing-button",inputWrapper:"input-wrapper",cancelEditingButtonWrapper:"cancel-editing-button-wrapper",enableEditingButton:"enable-editing-button",controlsWrapper:"controls-wrapper"};const C="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block}:host([scale=s]) .controls-wrapper{block-size:1.5rem}:host([scale=m]) .controls-wrapper{block-size:2rem}:host([scale=l]) .controls-wrapper{block-size:2.75rem}:host(:not([editing-enabled]):not([disabled])) .wrapper:hover{background-color:var(--calcite-ui-foreground-2)}.wrapper{box-sizing:border-box;display:flex;justify-content:space-between;background-color:var(--calcite-ui-foreground-1);transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.wrapper .input-wrapper{flex:1 1 0%}.controls-wrapper{display:flex}:host([disabled]) .cancel-editing-button-wrapper{border-color:var(--calcite-ui-border-2)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}";const D=class{constructor(a){t(this,a);this.calciteInlineEditableEditCancel=i(this,"calciteInlineEditableEditCancel",6);this.calciteInlineEditableEditConfirm=i(this,"calciteInlineEditableEditConfirm",6);this.calciteInternalInlineEditableEnableEditingChange=i(this,"calciteInternalInlineEditableEnableEditingChange",6);this.mutationObserver=b("mutation",(()=>this.mutationObserverCallback()));this.enableEditing=()=>{var t,i;this.valuePriorToEditing=(t=this.inputElement)===null||t===void 0?void 0:t.value;this.editingEnabled=true;(i=this.inputElement)===null||i===void 0?void 0:i.setFocus();this.calciteInternalInlineEditableEnableEditingChange.emit()};this.disableEditing=()=>{this.editingEnabled=false};this.cancelEditing=()=>{if(this.inputElement){this.inputElement.value=this.valuePriorToEditing}this.disableEditing();this.enableEditingButton.setFocus();if(!this.editingEnabled&&!!this.shouldEmitCancel){this.calciteInlineEditableEditCancel.emit()}};this.escapeKeyHandler=async t=>{var i;if(t.defaultPrevented){return}if(t.key==="Escape"){t.preventDefault();this.cancelEditing()}if(t.key==="Tab"&&this.shouldShowControls){if(!t.shiftKey&&t.target===this.inputElement){t.preventDefault();this.cancelEditingButton.setFocus()}if(!!t.shiftKey&&t.target===this.cancelEditingButton){t.preventDefault();(i=this.inputElement)===null||i===void 0?void 0:i.setFocus()}}};this.cancelEditingHandler=async t=>{t.preventDefault();this.cancelEditing()};this.enableEditingHandler=async t=>{if(this.disabled||t.target===this.cancelEditingButton||t.target===this.confirmEditingButton){return}t.preventDefault();if(!this.editingEnabled){this.enableEditing()}};this.confirmChangesHandler=async t=>{t.preventDefault();this.calciteInlineEditableEditConfirm.emit();try{if(this.afterConfirm){this.loading=true;await this.afterConfirm();this.disableEditing();this.enableEditingButton.setFocus()}}catch(t){}finally{this.loading=false}};this.disabled=false;this.editingEnabled=false;this.loading=false;this.controls=false;this.scale=undefined;this.afterConfirm=undefined;this.messages=undefined;this.messageOverrides=undefined;this.defaultMessages=undefined;this.effectiveLocale=undefined}disabledWatcher(t){if(this.inputElement){this.inputElement.disabled=t}}editingEnabledWatcher(t,i){if(this.inputElement){this.inputElement.editingEnabled=t}if(!t&&!!i){this.shouldEmitCancel=true}}onMessagesChange(){}connectedCallback(){var t;n(this);c(this);f(this);g(this);(t=this.mutationObserver)===null||t===void 0?void 0:t.observe(this.el,{childList:true});this.mutationObserverCallback()}async componentWillLoad(){d(this);await v(this)}componentDidLoad(){p(this)}disconnectedCallback(){var t;r(this);l(this);u(this);y(this);(t=this.mutationObserver)===null||t===void 0?void 0:t.disconnect()}componentDidRender(){o(this)}render(){return a("div",{class:k.wrapper,onClick:this.enableEditingHandler,onKeyDown:this.escapeKeyHandler},a("div",{class:k.inputWrapper},a("slot",null)),a("div",{class:k.controlsWrapper},a("calcite-button",{appearance:"transparent",class:k.enableEditingButton,disabled:this.disabled,iconStart:"pencil",kind:"neutral",label:this.messages.enableEditing,onClick:this.enableEditingHandler,scale:this.scale,style:{opacity:this.editingEnabled?"0":"1",width:this.editingEnabled?"0":"inherit"},type:"button",ref:t=>this.enableEditingButton=t}),this.shouldShowControls&&[a("div",{class:k.cancelEditingButtonWrapper},a("calcite-button",{appearance:"transparent",class:k.cancelEditingButton,disabled:this.disabled,iconStart:"x",kind:"neutral",label:this.messages.cancelEditing,onClick:this.cancelEditingHandler,scale:this.scale,type:"button",ref:t=>this.cancelEditingButton=t})),a("calcite-button",{appearance:"solid",class:k.confirmChangesButton,disabled:this.disabled,iconStart:"check",kind:"brand",label:this.messages.confirmChanges,loading:this.loading,onClick:this.confirmChangesHandler,scale:this.scale,type:"button",ref:t=>this.confirmEditingButton=t})]))}blurHandler(){if(!this.controls){this.disableEditing()}}effectiveLocaleChange(){w(this,this.effectiveLocale)}async setFocus(){var t;await m(this);(t=this.el)===null||t===void 0?void 0:t.focus()}mutationObserverCallback(){var t;this.updateSlottedInput();this.scale=this.scale||((t=this.inputElement)===null||t===void 0?void 0:t.scale)}onLabelClick(){this.setFocus()}updateSlottedInput(){const t=s(this.el,{matches:"calcite-input"});this.inputElement=t;if(!t){return}this.inputElement.disabled=this.disabled;this.inputElement.label=this.inputElement.label||h(this)}get shouldShowControls(){return this.editingEnabled&&this.controls}static get delegatesFocus(){return true}static get assetsDirs(){return["assets"]}get el(){return e(this)}static get watchers(){return{disabled:["disabledWatcher"],editingEnabled:["editingEnabledWatcher"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};D.style=C;export{D as calcite_inline_editable};
//# sourceMappingURL=p-410886c8.entry.js.map