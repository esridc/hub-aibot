import{r as a,h as t,g as i}from"./p-4d42db0b.js";import{c as e,d as n}from"./p-79237d37.js";import{u as c,c as s,s as r,d as o}from"./p-876a8809.js";import{c as l}from"./p-6207f8cf.js";import"./p-c673c097.js";import"./p-386d1501.js";import"./p-2a7cd91f.js";import"./p-2872e2fa.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */const m={scrim:"scrim",content:"content"};const d={s:72,l:480};const f="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host{position:absolute;inset:0px;z-index:var(--calcite-app-z-index-overlay);display:flex;block-size:100%;inline-size:100%;flex-direction:column;align-items:stretch}@keyframes calcite-scrim-fade-in{0%{--tw-bg-opacity:0}100%{--tw-text-opacity:1}}.scrim{position:absolute;inset:0px;display:flex;flex-direction:column;align-content:center;align-items:center;justify-content:center;overflow:hidden;animation:calcite-scrim-fade-in var(--calcite-internal-animation-timing-medium) ease-in-out;background-color:var(--calcite-scrim-background, var(--calcite-scrim-background-internal))}.content{padding:1rem}";const p=class{constructor(t){a(this,t);this.resizeObserver=l("resize",(()=>this.handleResize()));this.storeLoaderEl=a=>{this.loaderEl=a;this.handleResize()};this.loading=false;this.messages=undefined;this.messageOverrides=undefined;this.loaderScale=undefined;this.defaultMessages=undefined;this.effectiveLocale=""}onMessagesChange(){}effectiveLocaleChange(){c(this,this.effectiveLocale)}connectedCallback(){e(this);s(this)}async componentWillLoad(){await r(this)}disconnectedCallback(){n(this);o(this)}render(){const{el:a,loading:i,messages:e}=this;const n=a.innerHTML.trim().length>0;const c=i?t("calcite-loader",{label:e.loading,ref:this.storeLoaderEl,scale:this.loaderScale}):null;const s=n?t("div",{class:m.content},t("slot",null)):null;return t("div",{class:m.scrim},c,s)}getScale(a){if(a<d.s){return"s"}else if(a>=d.l){return"l"}else{return"m"}}handleResize(){var a;const{loaderEl:t,el:i}=this;if(!t){return}this.loaderScale=this.getScale((a=Math.min(i.clientHeight,i.clientWidth))!==null&&a!==void 0?a:0)}static get assetsDirs(){return["assets"]}get el(){return i(this)}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};p.style=f;export{p as calcite_scrim};
//# sourceMappingURL=p-d184ac7a.entry.js.map