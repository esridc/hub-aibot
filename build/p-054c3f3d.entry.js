import{r as t,c as i,h as a,a as e}from"./p-48186cc4.js";import{c as s,d as n,u as o}from"./p-27680149.js";import{s as r,a as c,c as l}from"./p-86ba524c.js";import{c as d}from"./p-6207f8cf.js";import{I as h}from"./p-788cabb2.js";import{m,d as p,a as f,s as u,h as b,b as y,g,k as x,i as w,c as k,e as v,f as j,r as _,j as D,l as I,n as L,o as z,p as C,L as H}from"./p-d88d67fd.js";import"./p-779078e6.js";import"./p-78defa3e.js";import"./p-9b04d7dd.js";import"./p-386d1501.js";import"./p-2a7cd91f.js";import"./p-4c6e2982.js";import"./p-58421494.js";const F="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;box-sizing:border-box;display:flex;flex-shrink:0;flex-grow:1;flex-direction:column;align-items:stretch;background-color:transparent;font-size:var(--calcite-font-size--1);line-height:1rem;color:var(--calcite-ui-text-2)}:host *{box-sizing:border-box}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([filter-enabled]) header{margin-block-end:0.25rem;display:flex;align-items:stretch;justify-content:flex-end;background-color:var(--calcite-ui-foreground-1);--tw-shadow:0 1px 0 var(--calcite-ui-border-3);--tw-shadow-colored:0 1px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([filter-enabled]) header.sticky-pos{position:sticky;inset-block-start:0px;z-index:var(--calcite-app-z-index)}calcite-filter{margin-block-end:0px}:host([loading][disabled]){min-block-size:2rem}";const R=class{constructor(a){t(this,a);this.calciteListChange=i(this,"calciteListChange",6);this.calciteListFilter=i(this,"calciteListFilter",6);this.lastSelectedItem=null;this.mutationObserver=d("mutation",m.bind(this));this.setFilterEl=t=>{this.filterEl=t};this.setFilteredItems=t=>{this.filteredItems=t};this.deselectRemovedItems=p.bind(this);this.deselectSiblingItems=f.bind(this);this.selectSiblings=u.bind(this);this.handleFilter=b.bind(this);this.handleFilterEvent=y.bind(this);this.getItemData=g.bind(this);this.keyDownHandler=x.bind(this);this.disabled=false;this.filteredItems=[];this.filteredData=[];this.filterEnabled=false;this.filterPlaceholder=undefined;this.filterText=undefined;this.headingLevel=undefined;this.loading=false;this.multiple=false;this.selectionFollowsFocus=false;this.selectedValues=new Map;this.dataForFilter=[]}connectedCallback(){w.call(this);k.call(this);s(this)}disconnectedCallback(){v.call(this);n(this)}componentWillLoad(){r(this)}componentDidLoad(){c(this);j.call(this)}componentDidRender(){o(this)}calciteListItemRemoveHandler(t){_.call(this,t)}calciteListItemChangeHandler(t){D.call(this,t)}calciteInternalListItemPropsChangeHandler(t){t.stopPropagation();this.setUpFilter()}calciteInternalListItemValueChangeHandler(t){I.call(this,t);t.stopPropagation()}calciteListFocusOutHandler(t){L.call(this,t)}setUpItems(){z.call(this,"calcite-pick-list-item")}setUpFilter(){if(this.filterEnabled){this.dataForFilter=this.getItemData()}}async getSelectedItems(){return this.selectedValues}async setFocus(t){await l(this);return C.call(this,t)}getIconType(){return this.multiple?h.square:h.circle}render(){return a(H,{onKeyDown:this.keyDownHandler,props:this})}get el(){return e(this)}};R.style=F;export{R as calcite_pick_list};
//# sourceMappingURL=p-054c3f3d.entry.js.map