import{r as t,c as e,h as i,g as a}from"./p-5b036533.js";import{c as n,d as o}from"./p-fe0cdbc6.js";import{t as r,a as c}from"./p-bc44344d.js";import{c as s,d as l}from"./p-d56d6a03.js";import{c as d,d as m,s as h,u as f}from"./p-13972dcc.js";import"./p-4f3a57d9.js";import"./p-5bbe86c4.js";import"./p-24210133.js";import"./p-10c7b964.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.8-next.4
 */const u={container:"container",header:"header",footer:"footer",title:"title",subtitle:"subtitle",checkboxWrapper:"checkbox-wrapper",thumbnailWrapper:"thumbnail-wrapper"};const p={thumbnail:"thumbnail",title:"title",subtitle:"subtitle",footerStart:"footer-start",footerEnd:"footer-end"};const b="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host{display:block;max-inline-size:100%}:host .calcite-card-container{position:relative;display:flex;block-size:100%;flex-direction:column;justify-content:space-between;overflow:hidden;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-2);background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-3);--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);border-radius:var(--calcite-border-radius-base)}.container{position:relative;display:flex;flex:1 1 auto;flex-direction:column}:host([loading]) .calcite-card-container *:not(calcite-loader):not(.calcite-card-loader-container){pointer-events:none;opacity:0}:host([loading]) .calcite-card-loader-container{position:absolute;inset:0px;display:flex;align-items:center}.header,.footer{display:flex;padding-inline:0.75rem;padding-block:0.75rem 0.25rem}.header{flex-direction:column}.footer{margin-block-start:auto;flex-direction:row;align-content:space-between;justify-content:space-between;padding-inline:0.75rem;padding-block:0.25rem 0.75rem}.card-content{padding:0.75rem;font-size:var(--calcite-font-size--2);line-height:1.375;color:var(--calcite-ui-text-3)}:host([selected]) .calcite-card-container{border-color:var(--calcite-ui-brand)}slot[name=title]::slotted(*),*::slotted([slot=title]){margin:0px;font-size:var(--calcite-font-size--1);line-height:1.375;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}:host([selectable]) .header{padding-inline-end:2rem}slot[name=subtitle]::slotted(*),*::slotted([slot=subtitle]){margin:0px;margin-block-start:0.5rem;font-size:var(--calcite-font-size--2);line-height:1.375;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-2)}slot[name=thumbnail]::slotted(img),img::slotted([slot=thumbnail]){min-inline-size:100%;max-inline-size:100%}slot[name=footer-start]::slotted(*),*::slotted([slot=footer-start]){align-self:center;font-size:var(--calcite-font-size--2);line-height:1.375;margin-inline-end:auto}slot[name=footer-end]::slotted(*),*::slotted([slot=footer-end]){align-self:center;font-size:var(--calcite-font-size--2);line-height:1.375}.checkbox-wrapper{position:absolute;margin:0px;padding:0px;inset-block-start:0.5rem;inset-inline-end:0.5rem}.thumbnail-wrapper{display:flex}.calcite-card-container.inline{flex-direction:row}.calcite-card-container.inline>.container{inline-size:60%}.calcite-card-container.inline>.thumbnail-wrapper{inline-size:40%;align-items:flex-start}.calcite-card-container.inline slot[name=thumbnail]::slotted(img),.calcite-card-container.inline img::slotted([slot=thumbnail]){inline-size:100%}slot[name=footer-start]::slotted(*),slot[name=footer-end]::slotted(*){display:flex;gap:0.25rem}";const g=class{constructor(i){t(this,i);this.calciteCardSelect=e(this,"calciteCardSelect",6);this.cardSelectClick=()=>{this.selectCard()};this.cardSelectKeyDown=t=>{switch(t.key){case" ":case"Enter":this.selectCard();t.preventDefault();break}};this.loading=false;this.selected=false;this.selectable=false;this.thumbnailPosition="block-start";this.messages=undefined;this.messageOverrides=undefined;this.effectiveLocale=undefined;this.defaultMessages=undefined}onMessagesChange(){}connectedCallback(){n(this);s(this);d(this)}disonnectedCallback(){o(this);l(this);m(this)}async componentWillLoad(){await h(this)}render(){const t=this.thumbnailPosition.startsWith("inline");const e=this.thumbnailPosition.endsWith("start");return i("div",{class:{"calcite-card-container":true,inline:t}},this.loading?i("div",{class:"calcite-card-loader-container"},i("calcite-loader",{label:this.messages.loading})):null,e&&this.renderThumbnail(),i("section",{"aria-busy":r(this.loading),class:{[u.container]:true}},this.selectable?this.renderCheckbox():null,this.renderHeader(),i("div",{class:"card-content"},i("slot",null)),this.renderFooter()),!e&&this.renderThumbnail())}effectiveLocaleChange(){f(this,this.effectiveLocale)}selectCard(){this.selected=!this.selected;this.calciteCardSelect.emit()}renderThumbnail(){return c(this.el,p.thumbnail)?i("section",{class:u.thumbnailWrapper},i("slot",{name:p.thumbnail})):null}renderCheckbox(){const t=this.selected?this.messages.deselect:this.messages.select;return i("calcite-label",{class:u.checkboxWrapper,onClick:this.cardSelectClick,onKeyDown:this.cardSelectKeyDown},i("calcite-checkbox",{checked:this.selected,label:t}))}renderHeader(){const{el:t}=this;const e=c(t,p.title);const a=c(t,p.subtitle);const n=e||a;return n?i("header",{class:u.header},i("slot",{name:p.title}),i("slot",{name:p.subtitle})):null}renderFooter(){const{el:t}=this;const e=c(t,p.footerStart);const a=c(t,p.footerEnd);const n=e||a;return n?i("footer",{class:u.footer},i("slot",{name:p.footerStart}),i("slot",{name:p.footerEnd})):null}static get assetsDirs(){return["assets"]}get el(){return a(this)}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};g.style=b;export{g as calcite_card};
//# sourceMappingURL=p-5bd0dd3c.entry.js.map