import{r as t,d as i,h as a,F as e,g as n}from"./p-4d42db0b.js";import{c as s,d as o}from"./p-7cbf006d.js";import{d as c,t as r}from"./p-c673c097.js";import{c as l,d,u as h}from"./p-27680149.js";import{s as m,a as f,c as p}from"./p-86ba524c.js";import{c as u,d as g}from"./p-79237d37.js";import{u as v,c as b,s as y,d as x}from"./p-876a8809.js";import{I as w}from"./p-788cabb2.js";import{I as k,C as j,S as _}from"./p-203a1151.js";import"./p-6207f8cf.js";import"./p-386d1501.js";import"./p-2a7cd91f.js";import"./p-779078e6.js";import"./p-2872e2fa.js";const C='@charset "UTF-8";@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{margin:0px;margin-block-end:1px;box-sizing:border-box;display:flex;align-items:stretch;background-color:var(--calcite-ui-foreground-1);font-size:var(--calcite-font-size--1);line-height:1rem;color:var(--calcite-ui-text-1);--tw-shadow:0 1px 0 var(--calcite-ui-border-3);--tw-shadow-colored:0 1px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);transition:background-color var(--calcite-animation-timing);animation:calcite-fade-in var(--calcite-animation-timing)}:host *{box-sizing:border-box}.label{display:flex;flex:1 1 auto;cursor:pointer;align-items:center;background-color:transparent;outline-color:transparent}.label:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.label:hover{background-color:var(--calcite-ui-foreground-2)}:host([non-interactive]:hover){background-color:var(--calcite-ui-foreground-1)}:host([non-interactive]) .label,:host([non-interactive]) .icon{pointer-events:none}.icon{margin-block:0px;display:flex;cursor:pointer;align-items:center;padding:0.25rem;color:var(--calcite-ui-brand);flex:0 0 auto;line-height:0}.icon:hover{background-color:var(--calcite-ui-foreground-2)}.icon-dot{display:flex;inline-size:1.5rem;align-items:center;padding:0.5rem}.icon-dot:before{opacity:0;content:"•"}.icon calcite-icon{opacity:0}:host([selected]) .icon-dot:before,:host([selected]) .icon calcite-icon{transition:opacity var(--calcite-animation-timing);opacity:1}.text-container{pointer-events:none;display:flex;flex-direction:column;flex-wrap:nowrap;overflow:hidden;padding-block:0.5rem;padding-inline:0.75rem;font-size:var(--calcite-font-size--2);line-height:1.375;word-wrap:break-word;word-break:break-word}.title{font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-1)}.description{margin-block-start:0.125rem;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-3)}.actions{margin:0px;display:flex;flex:0 1 auto;align-items:stretch;justify-content:flex-end}.actions--start~.label{padding-inline-start:0.25rem}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}';const D=class{constructor(a){t(this,a);this.calciteListItemChange=i(this,"calciteListItemChange",6);this.calciteListItemRemove=i(this,"calciteListItemRemove",7);this.calciteInternalListItemPropsChange=i(this,"calciteInternalListItemPropsChange",6);this.calciteInternalListItemValueChange=i(this,"calciteInternalListItemValueChange",6);this.pickListClickHandler=t=>{if(this.disabled||this.deselectDisabled&&this.selected||this.nonInteractive){return}this.shiftPressed=t.shiftKey;this.selected=!this.selected};this.pickListKeyDownHandler=t=>{if(t.key===" "){t.preventDefault();if(this.deselectDisabled&&this.selected||this.nonInteractive){return}this.selected=!this.selected}};this.removeClickHandler=()=>{this.calciteListItemRemove.emit()};this.description=undefined;this.disabled=false;this.deselectDisabled=false;this.nonInteractive=false;this.icon=null;this.iconFlipRtl=false;this.label=undefined;this.messageOverrides=undefined;this.messages=undefined;this.metadata=undefined;this.removable=false;this.selected=false;this.value=undefined;this.defaultMessages=undefined;this.effectiveLocale=""}descriptionWatchHandler(){this.calciteInternalListItemPropsChange.emit()}labelWatchHandler(){this.calciteInternalListItemPropsChange.emit()}onMessagesChange(){}metadataWatchHandler(){this.calciteInternalListItemPropsChange.emit()}selectedWatchHandler(){this.calciteListItemChange.emit({item:this.el,value:this.value,selected:this.selected,shiftPressed:this.shiftPressed});this.shiftPressed=false}valueWatchHandler(t,i){this.calciteInternalListItemValueChange.emit({oldValue:i,newValue:t})}effectiveLocaleChange(){v(this,this.effectiveLocale)}connectedCallback(){l(this);u(this);b(this);s(this)}async componentWillLoad(){await y(this);m(this)}componentDidLoad(){f(this)}disconnectedCallback(){d(this);g(this);x(this);o(this)}componentDidRender(){h(this,this.el.closest("calcite-pick-list")?"managed":false)}async toggleSelected(t){this.selected=typeof t==="boolean"?t:!this.selected}async setFocus(){var t;await p(this);(t=this.focusEl)===null||t===void 0?void 0:t.focus()}renderIcon(){const{icon:t,iconFlipRtl:i}=this;if(!t){return null}return a("span",{class:{[j.icon]:true,[j.iconDot]:t===w.circle},onClick:this.pickListClickHandler},t===w.square?a("calcite-icon",{flipRtl:i,icon:k.checked,scale:"s"}):null)}renderRemoveAction(){return this.removable?a("calcite-action",{class:j.remove,icon:k.remove,onClick:this.removeClickHandler,slot:_.actionsEnd,text:this.messages.remove}):null}renderActionsStart(){const{el:t}=this;const i=c(t,_.actionsStart);return i?a("div",{class:{[j.actions]:true,[j.actionsStart]:true}},a("slot",{name:_.actionsStart})):null}renderActionsEnd(){const{el:t,removable:i}=this;const e=c(t,_.actionsEnd);return e||i?a("div",{class:{[j.actions]:true,[j.actionsEnd]:true}},a("slot",{name:_.actionsEnd}),this.renderRemoveAction()):null}render(){const{description:t,label:i}=this;return a(e,null,this.renderIcon(),this.renderActionsStart(),a("label",{"aria-label":i,class:j.label,onClick:this.pickListClickHandler,onKeyDown:this.pickListKeyDownHandler,tabIndex:0,ref:t=>this.focusEl=t},a("div",{"aria-checked":r(this.selected),class:j.textContainer,role:"menuitemcheckbox"},a("span",{class:j.title},i),t?a("span",{class:j.description},t):null)),this.renderActionsEnd())}static get assetsDirs(){return["assets"]}get el(){return n(this)}static get watchers(){return{description:["descriptionWatchHandler"],label:["labelWatchHandler"],defaultMessages:["onMessagesChange"],messageOverrides:["onMessagesChange"],metadata:["metadataWatchHandler"],selected:["selectedWatchHandler"],value:["valueWatchHandler"],effectiveLocale:["effectiveLocaleChange"]}}};D.style=C;export{D as calcite_pick_list_item};
//# sourceMappingURL=p-eaf0ca0d.entry.js.map