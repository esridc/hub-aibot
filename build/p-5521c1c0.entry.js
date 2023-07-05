import{r as t,d as i,h as e,F as a,g as s}from"./p-4d42db0b.js";import{s as n,a as o,c}from"./p-86ba524c.js";import{n as r,c as l,d as h}from"./p-79237d37.js";import{u as p,c as m,s as d,d as u}from"./p-876a8809.js";import"./p-c673c097.js";import"./p-386d1501.js";import"./p-2a7cd91f.js";import"./p-2872e2fa.js";import"./p-6207f8cf.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */const f={page:"page",selected:"is-selected",previous:"previous",next:"next",disabled:"is-disabled",ellipsis:"ellipsis",ellipsisStart:"ellipsis--start",ellipsisEnd:"ellipsis--end"};const g="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host([scale=s]){--calcite-pagination-spacing-internal:0.25rem 0.5rem}:host([scale=s]) .previous,:host([scale=s]) .next,:host([scale=s]) .page{block-size:1.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) .previous,:host([scale=s]) .next{padding-inline:0.25rem}:host([scale=m]){--calcite-pagination-spacing-internal:0.5rem 0.75rem}:host([scale=m]) .previous,:host([scale=m]) .next,:host([scale=m]) .page{block-size:2rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) .previous,:host([scale=m]) .next{padding-inline:0.5rem}:host([scale=l]){--calcite-pagination-spacing-internal:0.75rem 1rem}:host([scale=l]) .previous,:host([scale=l]) .next,:host([scale=l]) .page{block-size:2.75rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) .previous,:host([scale=l]) .next{padding-inline:1rem}:host{display:flex;writing-mode:horizontal-tb}:host button{outline-color:transparent}:host button:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.previous,.next,.page{box-sizing:border-box;display:flex;cursor:pointer;align-items:center;border-style:none;--tw-border-opacity:0;background-color:transparent;font-family:inherit;font-size:var(--calcite-font-size-0);line-height:1.25rem;color:var(--calcite-ui-text-3);border-block:2px solid transparent}.previous:hover,.next:hover,.page:hover{color:var(--calcite-ui-text-1);transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.page:hover{border-block-end-color:var(--calcite-ui-border-2)}.page.is-selected{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1);border-block-end-color:var(--calcite-ui-brand)}.previous:hover,.next:hover{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-brand)}.previous:active,.next:active{background-color:var(--calcite-ui-foreground-3)}.previous.is-disabled,.next.is-disabled{pointer-events:none;background-color:transparent}.previous.is-disabled>calcite-icon,.next.is-disabled>calcite-icon{opacity:var(--calcite-ui-opacity-disabled)}.next{margin-inline-end:0px}.page,.ellipsis{padding:var(--calcite-pagination-spacing-internal)}.ellipsis{display:flex;align-items:flex-end;color:var(--calcite-ui-text-3)}";const v=5;const b=class{constructor(e){t(this,e);this.calcitePaginationChange=i(this,"calcitePaginationChange",6);this.previousClicked=()=>{this.previousPage().then();this.emitUpdate()};this.nextClicked=()=>{this.nextPage();this.emitUpdate()};this.groupSeparator=false;this.messageOverrides=undefined;this.pageSize=20;this.numberingSystem=undefined;this.startItem=1;this.totalItems=0;this.scale="m";this.defaultMessages=undefined;this.effectiveLocale="";this.messages=undefined}onMessagesChange(){}effectiveLocaleChange(){p(this,this.effectiveLocale)}effectiveLocaleWatcher(){r.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,useGrouping:this.groupSeparator}}connectedCallback(){l(this);m(this)}async componentWillLoad(){await d(this);n(this)}componentDidLoad(){o(this)}disconnectedCallback(){h(this);u(this)}async setFocus(){await c(this);this.el.focus()}async nextPage(){this.startItem=Math.min(this.getLastStart(),this.startItem+this.pageSize)}async previousPage(){this.startItem=Math.max(1,this.startItem-this.pageSize)}getLastStart(){const{totalItems:t,pageSize:i}=this;const e=t%i===0?t-i:Math.floor(t/i)*i;return e+1}showLeftEllipsis(){return Math.floor(this.startItem/this.pageSize)>3}showRightEllipsis(){return(this.totalItems-this.startItem)/this.pageSize>3}emitUpdate(){this.calcitePaginationChange.emit()}renderPages(){const t=this.getLastStart();let i;let e;if(this.totalItems/this.pageSize<=v){e=1+this.pageSize;i=t-this.pageSize}else{if(this.startItem/this.pageSize<v-1){e=1+this.pageSize;i=1+4*this.pageSize}else{if(this.startItem+3*this.pageSize>=this.totalItems){e=t-4*this.pageSize;i=t-this.pageSize}else{e=this.startItem-this.pageSize;i=this.startItem+this.pageSize}}}const a=[];while(e<=i){a.push(e);e=e+this.pageSize}return a.map((t=>this.renderPage(t)))}renderPage(t){const i=Math.floor(t/this.pageSize)+(this.pageSize===1?0:1);r.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,useGrouping:this.groupSeparator};const a=r.localize(i.toString());const s=t===this.startItem;return e("button",{"aria-current":s?"page":"false",class:{[f.page]:true,[f.selected]:s},onClick:()=>{this.startItem=t;this.emitUpdate()}},a)}renderLeftEllipsis(){if(this.totalItems/this.pageSize>v&&this.showLeftEllipsis()){return e("span",{class:`${f.ellipsis} ${f.ellipsisStart}`},"…")}}renderRightEllipsis(){if(this.totalItems/this.pageSize>v&&this.showRightEllipsis()){return e("span",{class:`${f.ellipsis} ${f.ellipsisEnd}`},"…")}}render(){const{totalItems:t,pageSize:i,startItem:s}=this;const n=i===1?s<=i:s<i;const o=i===1?s+i>t:s+i>t;return e(a,null,e("button",{"aria-label":this.messages.previous,class:{[f.previous]:true,[f.disabled]:n},disabled:n,onClick:this.previousClicked},e("calcite-icon",{flipRtl:true,icon:"chevronLeft",scale:this.scale==="l"?"m":"s"})),t>i?this.renderPage(1):null,this.renderLeftEllipsis(),this.renderPages(),this.renderRightEllipsis(),this.renderPage(this.getLastStart()),e("button",{"aria-label":this.messages.next,class:{[f.next]:true,[f.disabled]:o},disabled:o,onClick:this.nextClicked},e("calcite-icon",{flipRtl:true,icon:"chevronRight",scale:this.scale==="l"?"m":"s"})))}static get delegatesFocus(){return true}static get assetsDirs(){return["assets"]}get el(){return s(this)}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange","effectiveLocaleWatcher"]}}};b.style=g;export{b as calcite_pagination};
//# sourceMappingURL=p-5521c1c0.entry.js.map