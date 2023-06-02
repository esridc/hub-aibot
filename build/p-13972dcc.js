import{a as n}from"./p-5b036533.js";import{g as t}from"./p-d56d6a03.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.8-next.4
 */const s={};async function o(t,o){const a=`${o}_${t}`;if(s[a]){return s[a]}s[a]=fetch(n(`./assets/${o}/t9n/messages_${t}.json`)).then((n=>{if(!n.ok){c()}return n.json()})).catch((()=>c()));return s[a]}function c(){throw new Error("could not fetch component message bundle")}function a(n){n.messages={...n.defaultMessages,...n.messageOverrides}}async function e(n){n.defaultMessages=await i(n,n.effectiveLocale);a(n)}async function i(n,s){const{el:c}=n;const a=c.tagName.toLowerCase();const e=a.replace("calcite-","");return o(t(s,"t9n"),e)}async function r(n,t){n.defaultMessages=await i(n,t);a(n)}function u(n){n.onMessagesChange=d}function f(n){n.onMessagesChange=undefined}function d(){a(this)}export{u as c,f as d,e as s,r as u};
//# sourceMappingURL=p-13972dcc.js.map