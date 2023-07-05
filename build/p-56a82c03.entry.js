import{r as t,c as e,h as i,F as a,a as n,f as s,H as o}from"./p-48186cc4.js";import{g as r}from"./p-78defa3e.js";import{t as c,i as l,j as h,w as d,q as f}from"./p-9b04d7dd.js";import{g as m}from"./p-386d1501.js";import{i as p}from"./p-2872e2fa.js";import{s as u,a as g,c as v}from"./p-86ba524c.js";import{C as y,I as b,S as x}from"./p-6f8a1773.js";import{f as w,c as k,b as D,a as E,r as _,F as z}from"./p-ce9ec796.js";import{d as H,a as P,c as j,u as C}from"./p-0153535c.js";import{c as I,d as A}from"./p-c75f2d93.js";import{H as M}from"./p-612c0f18.js";import{c as B,d as L}from"./p-78ad5571.js";import{u as O,c as S,s as $,d as F}from"./p-7fb57f56.js";import{c as R}from"./p-6207f8cf.js";import{F as T}from"./p-4aab7072.js";import"./p-2a7cd91f.js";import"./p-779078e6.js";import"./p-58421494.js";const U="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host{box-sizing:border-box;display:flex;flex-direction:column;background-color:var(--calcite-ui-foreground-1);font-size:var(--calcite-font-size-1);color:var(--calcite-ui-text-2)}.menu ::slotted(calcite-action){margin:0.125rem;display:flex;outline-color:transparent}.menu ::slotted(calcite-action[active]){outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          );outline-offset:0px}.default-trigger{position:relative;block-size:100%;flex:0 1 auto;align-self:stretch}slot[name=trigger]::slotted(calcite-action),calcite-action::slotted([slot=trigger]){position:relative;block-size:100%;flex:0 1 auto;align-self:stretch}.menu{flex-direction:column;flex-wrap:nowrap;outline:2px solid transparent;outline-offset:2px}";const W=["ArrowUp","ArrowDown","End","Home"];const X=class{constructor(i){t(this,i);this.calciteActionMenuOpen=e(this,"calciteActionMenuOpen",6);this.actionElements=[];this.guid=`calcite-action-menu-${m()}`;this.menuId=`${this.guid}-menu`;this.menuButtonId=`${this.guid}-menu-button`;this.connectMenuButtonEl=()=>{const{menuButtonId:t,menuId:e,open:i,label:a}=this;const n=this.slottedMenuButtonEl||this.defaultMenuButtonEl;if(this.menuButtonEl===n){return}this.disconnectMenuButtonEl();this.menuButtonEl=n;this.setTooltipReferenceElement();if(!n){return}n.active=i;n.setAttribute("aria-controls",e);n.setAttribute("aria-expanded",c(i));n.setAttribute("aria-haspopup","true");if(!n.id){n.id=t}if(!n.label){n.label=a}if(!n.text){n.text=a}n.addEventListener("pointerdown",this.menuButtonClick);n.addEventListener("keydown",this.menuButtonKeyDown)};this.disconnectMenuButtonEl=()=>{const{menuButtonEl:t}=this;if(!t){return}t.removeEventListener("pointerdown",this.menuButtonClick);t.removeEventListener("keydown",this.menuButtonKeyDown)};this.setMenuButtonEl=t=>{const e=t.target.assignedElements({flatten:true}).filter((t=>t===null||t===void 0?void 0:t.matches("calcite-action")));this.slottedMenuButtonEl=e[0];this.connectMenuButtonEl()};this.setDefaultMenuButtonEl=t=>{this.defaultMenuButtonEl=t;this.connectMenuButtonEl()};this.handleCalciteActionClick=()=>{this.open=false;this.setFocus()};this.menuButtonClick=t=>{if(!l(t)){return}this.toggleOpen()};this.updateTooltip=t=>{const e=t.target.assignedElements({flatten:true}).filter((t=>t===null||t===void 0?void 0:t.matches("calcite-tooltip")));this.tooltipEl=e[0];this.setTooltipReferenceElement()};this.setTooltipReferenceElement=()=>{const{tooltipEl:t,expanded:e,menuButtonEl:i,open:a}=this;if(t){t.referenceElement=!e&&!a?i:null}};this.updateAction=(t,e)=>{const{guid:i,activeMenuItemIndex:a}=this;const n=`${i}-action-${e}`;t.tabIndex=-1;t.setAttribute("role","menuitem");if(!t.id){t.id=n}t.active=e===a};this.updateActions=t=>{t===null||t===void 0?void 0:t.forEach(this.updateAction)};this.handleDefaultSlotChange=t=>{const e=t.target.assignedElements({flatten:true}).filter((t=>t===null||t===void 0?void 0:t.matches("calcite-action")));this.actionElements=e};this.menuButtonKeyDown=t=>{const{key:e}=t;const{actionElements:i,activeMenuItemIndex:a,open:n}=this;if(!i.length){return}if(p(e)){t.preventDefault();if(!n){this.toggleOpen();return}const e=i[a];e?e.click():this.toggleOpen(false)}if(e==="Tab"){this.open=false;return}if(e==="Escape"){this.toggleOpen(false);t.preventDefault();return}this.handleActionNavigation(t,e,i)};this.handleActionNavigation=(t,e,i)=>{if(!this.isValidKey(e,W)){return}t.preventDefault();if(!this.open){this.toggleOpen();if(e==="Home"||e==="ArrowDown"){this.activeMenuItemIndex=0}if(e==="End"||e==="ArrowUp"){this.activeMenuItemIndex=i.length-1}return}if(e==="Home"){this.activeMenuItemIndex=0}if(e==="End"){this.activeMenuItemIndex=i.length-1}const a=this.activeMenuItemIndex;if(e==="ArrowUp"){this.activeMenuItemIndex=r(Math.max(a-1,-1),i.length)}if(e==="ArrowDown"){this.activeMenuItemIndex=r(a+1,i.length)}};this.toggleOpenEnd=()=>{this.setFocus();this.el.removeEventListener("calcitePopoverOpen",this.toggleOpenEnd)};this.toggleOpen=(t=!this.open)=>{this.el.addEventListener("calcitePopoverOpen",this.toggleOpenEnd);this.open=t};this.expanded=false;this.flipPlacements=undefined;this.label=undefined;this.open=false;this.overlayPositioning="absolute";this.placement="auto";this.scale=undefined;this.menuButtonEl=undefined;this.activeMenuItemIndex=-1}componentWillLoad(){u(this)}componentDidLoad(){g(this)}disconnectedCallback(){this.disconnectMenuButtonEl()}expandedHandler(){this.open=false;this.setTooltipReferenceElement()}openHandler(t){this.activeMenuItemIndex=this.open?0:-1;if(this.menuButtonEl){this.menuButtonEl.active=t}this.calciteActionMenuOpen.emit();this.setTooltipReferenceElement()}closeCalciteActionMenuOnClick(t){if(!l(t)){return}const e=t.composedPath();if(e.includes(this.el)){return}this.open=false}activeMenuItemIndexHandler(){this.updateActions(this.actionElements)}async setFocus(){await v(this);h(this.menuButtonEl)}renderMenuButton(){const{label:t,scale:e,expanded:a}=this;const n=i("slot",{name:x.trigger,onSlotchange:this.setMenuButtonEl},i("calcite-action",{class:y.defaultTrigger,icon:b.menu,scale:e,text:t,textEnabled:a,ref:this.setDefaultMenuButtonEl}));return n}renderMenuItems(){const{actionElements:t,activeMenuItemIndex:e,open:a,menuId:n,menuButtonEl:s,label:o,placement:r,overlayPositioning:c,flipPlacements:l}=this;const h=t[e];const d=(h===null||h===void 0?void 0:h.id)||null;return i("calcite-popover",{flipPlacements:l,focusTrapDisabled:true,label:o,offsetDistance:0,open:a,overlayPositioning:c,placement:r,pointerDisabled:true,referenceElement:s},i("div",{"aria-activedescendant":d,"aria-labelledby":s===null||s===void 0?void 0:s.id,class:y.menu,id:n,onClick:this.handleCalciteActionClick,role:"menu",tabIndex:-1},i("slot",{onSlotchange:this.handleDefaultSlotChange})))}render(){return i(a,null,this.renderMenuButton(),this.renderMenuItems(),i("slot",{name:x.tooltip,onSlotchange:this.updateTooltip}))}isValidKey(t,e){return!!e.find((e=>e===t))}get el(){return n(this)}static get watchers(){return{expanded:["expandedHandler"],open:["openHandler"],activeMenuItemIndex:["activeMenuItemIndexHandler"]}}};X.style=U;
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */const Y={container:"container",imageContainer:"image-container",closeButtonContainer:"close-button-container",closeButton:"close-button",content:"content",hasHeader:"has-header",header:"header",headerContent:"header-content",heading:"heading"};const q="auto";const K="aria-controls";const V="aria-expanded";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */class G{constructor(){this.registeredElements=new Map;this.registeredElementCount=0;this.queryPopover=t=>{const{registeredElements:e}=this;const i=t.find((t=>e.has(t)));return e.get(i)};this.togglePopovers=t=>{const e=t.composedPath();const i=this.queryPopover(e);if(i&&!i.triggerDisabled){i.open=!i.open}Array.from(this.registeredElements.values()).filter((t=>t!==i&&t.autoClose&&t.open&&!e.includes(t))).forEach((t=>t.open=false))};this.keyHandler=t=>{if(t.defaultPrevented){return}if(t.key==="Escape"){this.closeAllPopovers()}else if(p(t.key)){this.togglePopovers(t)}};this.clickHandler=t=>{if(l(t)){this.togglePopovers(t)}}}registerElement(t,e){this.registeredElementCount++;this.registeredElements.set(t,e);if(this.registeredElementCount===1){this.addListeners()}}unregisterElement(t){if(this.registeredElements.delete(t)){this.registeredElementCount--}if(this.registeredElementCount===0){this.removeListeners()}}closeAllPopovers(){Array.from(this.registeredElements.values()).forEach((t=>t.open=false))}addListeners(){document.addEventListener("pointerdown",this.clickHandler,{capture:true});document.addEventListener("keydown",this.keyHandler,{capture:true})}removeListeners(){document.removeEventListener("pointerdown",this.clickHandler,{capture:true});document.removeEventListener("keydown",this.keyHandler,{capture:true})}}const J="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host{--calcite-floating-ui-z-index:var(--calcite-popover-z-index, var(--calcite-app-z-index-popup));display:block;position:absolute;z-index:var(--calcite-floating-ui-z-index)}.calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:transform, visibility, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:var(--calcite-app-z-index);border-radius:0.25rem}:host([data-placement^=bottom]) .calcite-floating-ui-anim{transform:translateY(-5px)}:host([data-placement^=top]) .calcite-floating-ui-anim{transform:translateY(5px)}:host([data-placement^=left]) .calcite-floating-ui-anim{transform:translateX(5px)}:host([data-placement^=right]) .calcite-floating-ui-anim{transform:translateX(-5px)}:host([data-placement]) .calcite-floating-ui-anim--active{opacity:1;transform:translate(0)}:host([calcite-hydrated-hidden]){visibility:hidden !important;pointer-events:none}.calcite-floating-ui-arrow{pointer-events:none;position:absolute;z-index:calc(var(--calcite-app-z-index) * -1);fill:var(--calcite-ui-foreground-1)}.calcite-floating-ui-arrow__stroke{stroke:var(--calcite-ui-border-3)}:host([scale=s]) .heading{padding-inline:0.75rem;padding-block:0.5rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=m]) .heading{padding-inline:1rem;padding-block:0.75rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=l]) .heading{padding-inline:1.25rem;padding-block:1rem;font-size:var(--calcite-font-size-1);line-height:1.375}:host{pointer-events:none}:host([open]){pointer-events:initial}.calcite-floating-ui-anim{border-radius:0.25rem;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);background-color:var(--calcite-ui-foreground-1)}.arrow::before{outline:1px solid var(--calcite-ui-border-3)}.header{display:flex;flex:1 1 auto;align-items:stretch;justify-content:flex-start;border-width:0px;border-block-end-width:1px;border-style:solid;border-block-end-color:var(--calcite-ui-border-3)}.heading{margin:0px;display:block;flex:1 1 auto;align-self:center;white-space:normal;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1);word-wrap:break-word;word-break:break-word}.container{position:relative;display:flex;block-size:100%;flex-direction:row;flex-wrap:nowrap;border-radius:0.25rem;color:var(--calcite-ui-text-1)}.container.has-header{flex-direction:column}.content{display:flex;block-size:100%;inline-size:100%;flex-direction:column;flex-wrap:nowrap;align-self:center;word-wrap:break-word;word-break:break-word}.close-button-container{display:flex;overflow:hidden;flex:0 0 auto;border-start-end-radius:0.25rem;border-end-end-radius:0.25rem}::slotted(calcite-panel),::slotted(calcite-flow){block-size:100%}";const N=new G;const Q=class{constructor(i){t(this,i);this.calcitePopoverBeforeClose=e(this,"calcitePopoverBeforeClose",6);this.calcitePopoverClose=e(this,"calcitePopoverClose",6);this.calcitePopoverBeforeOpen=e(this,"calcitePopoverBeforeOpen",6);this.calcitePopoverOpen=e(this,"calcitePopoverOpen",6);this.mutationObserver=R("mutation",(()=>this.updateFocusTrapElements()));this.guid=`calcite-popover-${m()}`;this.openTransitionProp="opacity";this.hasLoaded=false;this.setTransitionEl=t=>{this.transitionEl=t;I(this)};this.setFilteredPlacements=()=>{const{el:t,flipPlacements:e}=this;this.filteredFlipPlacements=e?w(e,t):null};this.setUpReferenceElement=(t=true)=>{this.removeReferences();this.effectiveReferenceElement=this.getReferenceElement();k(this,this.effectiveReferenceElement,this.el);const{el:e,referenceElement:i,effectiveReferenceElement:a}=this;if(t&&i&&!a){console.warn(`${e.tagName}: reference-element id "${i}" was not found.`,{el:e})}this.addReferences()};this.getId=()=>this.el.id||this.guid;this.setExpandedAttr=()=>{const{effectiveReferenceElement:t,open:e}=this;if(!t){return}if("setAttribute"in t){t.setAttribute(V,c(e))}};this.addReferences=()=>{const{effectiveReferenceElement:t}=this;if(!t){return}const e=this.getId();if("setAttribute"in t){t.setAttribute(K,e)}N.registerElement(t,this.el);this.setExpandedAttr()};this.removeReferences=()=>{const{effectiveReferenceElement:t}=this;if(!t){return}if("removeAttribute"in t){t.removeAttribute(K);t.removeAttribute(V)}N.unregisterElement(t)};this.hide=()=>{this.open=false};this.storeArrowEl=t=>{this.arrowEl=t;this.reposition(true)};this.autoClose=false;this.closable=false;this.flipDisabled=false;this.focusTrapDisabled=false;this.pointerDisabled=false;this.flipPlacements=undefined;this.heading=undefined;this.headingLevel=undefined;this.label=undefined;this.messageOverrides=undefined;this.messages=undefined;this.offsetDistance=D;this.offsetSkidding=0;this.open=false;this.overlayPositioning="absolute";this.placement=q;this.referenceElement=undefined;this.scale="m";this.triggerDisabled=false;this.effectiveLocale="";this.floatingLayout="vertical";this.effectiveReferenceElement=undefined;this.defaultMessages=undefined}handlefocusTrapDisabled(t){if(!this.open){return}t?H(this):P(this)}flipPlacementsHandler(){this.setFilteredPlacements();this.reposition(true)}onMessagesChange(){}offsetDistanceOffsetHandler(){this.reposition(true)}offsetSkiddingHandler(){this.reposition(true)}openHandler(t){if(t){this.reposition(true)}this.setExpandedAttr()}overlayPositioningHandler(){this.reposition(true)}placementHandler(){this.reposition(true)}referenceElementHandler(){this.setUpReferenceElement();this.reposition(true)}effectiveLocaleChange(){O(this,this.effectiveLocale)}connectedCallback(){this.setFilteredPlacements();B(this);S(this);I(this);this.setUpReferenceElement(this.hasLoaded);j(this)}async componentWillLoad(){await $(this);u(this)}componentDidLoad(){g(this);if(this.referenceElement&&!this.effectiveReferenceElement){this.setUpReferenceElement()}this.reposition();this.hasLoaded=true}disconnectedCallback(){this.removeReferences();L(this);F(this);E(this,this.effectiveReferenceElement,this.el);A(this);H(this)}async reposition(t=false){const{el:e,effectiveReferenceElement:i,placement:a,overlayPositioning:n,flipDisabled:s,filteredFlipPlacements:o,offsetDistance:r,offsetSkidding:c,arrowEl:l}=this;return _(this,{floatingEl:e,referenceEl:i,overlayPositioning:n,placement:a,flipDisabled:s,flipPlacements:o,offsetDistance:r,offsetSkidding:c,arrowEl:l,type:"popover"},t)}async setFocus(){await v(this);s(this.el);d(this.el)}async updateFocusTrapElements(){C(this)}getReferenceElement(){const{referenceElement:t,el:e}=this;return(typeof t==="string"?f(e,{id:t}):t)||null}onBeforeOpen(){this.calcitePopoverBeforeOpen.emit()}onOpen(){this.calcitePopoverOpen.emit();P(this)}onBeforeClose(){this.calcitePopoverBeforeClose.emit()}onClose(){this.calcitePopoverClose.emit();H(this)}renderCloseButton(){const{messages:t,closable:e}=this;return e?i("div",{class:Y.closeButtonContainer,key:Y.closeButtonContainer},i("calcite-action",{appearance:"transparent",class:Y.closeButton,onClick:this.hide,scale:this.scale,text:t.close,ref:t=>this.closeButtonEl=t},i("calcite-icon",{icon:"x",scale:this.scale==="l"?"m":this.scale}))):null}renderHeader(){const{heading:t,headingLevel:e}=this;const a=t?i(M,{class:Y.heading,level:e},t):null;return a?i("div",{class:Y.header,key:Y.header},a,this.renderCloseButton()):null}render(){const{effectiveReferenceElement:t,heading:e,label:a,open:n,pointerDisabled:s,floatingLayout:r}=this;const l=t&&n;const h=!l;const d=!s?i(T,{floatingLayout:r,key:"floating-arrow",ref:this.storeArrowEl}):null;return i(o,{"aria-hidden":c(h),"aria-label":a,"aria-live":"polite","calcite-hydrated-hidden":h,id:this.getId(),role:"dialog"},i("div",{class:{[z.animation]:true,[z.animationActive]:l},ref:this.setTransitionEl},d,i("div",{class:{[Y.hasHeader]:!!e,[Y.container]:true}},this.renderHeader(),i("div",{class:Y.content},i("slot",null)),!e?this.renderCloseButton():null)))}static get assetsDirs(){return["assets"]}get el(){return n(this)}static get watchers(){return{focusTrapDisabled:["handlefocusTrapDisabled"],flipPlacements:["flipPlacementsHandler"],messageOverrides:["onMessagesChange"],offsetDistance:["offsetDistanceOffsetHandler"],offsetSkidding:["offsetSkiddingHandler"],open:["openHandler"],overlayPositioning:["overlayPositioningHandler"],placement:["placementHandler"],referenceElement:["referenceElementHandler"],effectiveLocale:["effectiveLocaleChange"]}}};Q.style=J;export{X as calcite_action_menu,Q as calcite_popover};
//# sourceMappingURL=p-56a82c03.entry.js.map