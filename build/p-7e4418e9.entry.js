import{r as t,h as a,F as i,g as n}from"./p-4d42db0b.js";import{c as e,d as o}from"./p-7cbf006d.js";import{d as c}from"./p-c673c097.js";import{c as s,s as r,a as l}from"./p-86ba524c.js";import{c as m,d}from"./p-79237d37.js";import{u as p,c as u,d as f,s as h}from"./p-876a8809.js";import{S as g}from"./p-6f8a1773.js";import{S as y,I as x}from"./p-0f8ae578.js";import"./p-6207f8cf.js";import"./p-386d1501.js";import"./p-2a7cd91f.js";import"./p-2872e2fa.js";const b='@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host{display:flex;flex-direction:column;padding:0px;--calcite-action-group-columns:3}:host([columns="1"]){--calcite-action-group-columns:1}:host([columns="2"]){--calcite-action-group-columns:2}:host([columns="3"]){--calcite-action-group-columns:3}:host([columns="4"]){--calcite-action-group-columns:4}:host([columns="5"]){--calcite-action-group-columns:5}:host([columns="6"]){--calcite-action-group-columns:6}:host(:first-child){padding-block-start:0px}:host([layout=horizontal]){flex-direction:row}:host([layout=grid]){display:grid;place-content:stretch;gap:1px;background-color:var(--calcite-ui-background);padding:1px;grid-template-columns:repeat(var(--calcite-action-group-columns), auto)}';const v=class{constructor(a){t(this,a);this.setMenuOpen=t=>{this.menuOpen=!!t.target.open};this.expanded=false;this.layout="vertical";this.columns=undefined;this.menuOpen=false;this.scale=undefined;this.messages=undefined;this.messageOverrides=undefined;this.effectiveLocale="";this.defaultMessages=undefined}expandedHandler(){this.menuOpen=false}onMessagesChange(){}effectiveLocaleChange(){p(this,this.effectiveLocale)}async setFocus(){await s(this);this.el.focus()}connectedCallback(){m(this);u(this);e(this)}disconnectedCallback(){d(this);f(this);o(this)}async componentWillLoad(){r(this);await h(this)}componentDidLoad(){l(this)}renderTooltip(){const{el:t}=this;const i=c(t,y.menuTooltip);return i?a("slot",{name:y.menuTooltip,slot:g.tooltip}):null}renderMenu(){const{el:t,expanded:i,menuOpen:n,scale:e,layout:o,messages:s}=this;const r=c(t,y.menuActions);return r?a("calcite-action-menu",{expanded:i,flipPlacements:["left","right"],label:s.more,onCalciteActionMenuOpen:this.setMenuOpen,open:n,placement:o==="horizontal"?"bottom-start":"leading-start",scale:e},a("calcite-action",{icon:x.menu,scale:e,slot:g.trigger,text:s.more,textEnabled:i}),a("slot",{name:y.menuActions}),this.renderTooltip()):null}render(){return a(i,null,a("slot",null),this.renderMenu())}static get delegatesFocus(){return true}static get assetsDirs(){return["assets"]}get el(){return n(this)}static get watchers(){return{expanded:["expandedHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};v.style=b;export{v as calcite_action_group};
//# sourceMappingURL=p-7e4418e9.entry.js.map