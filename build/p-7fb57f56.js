import{d as n}from"./p-48186cc4.js";import{g as t}from"./p-78ad5571.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */const s={};async function c(t,c){const a=`${c}_${t}`;if(s[a]){return s[a]}s[a]=fetch(n(`./assets/${c}/t9n/messages_${t}.json`)).then((n=>{if(!n.ok){o()}return n.json()})).catch((()=>o()));return s[a]}function o(){throw new Error("could not fetch component message bundle")}function a(n){n.messages={...n.defaultMessages,...n.messageOverrides}}async function e(n){n.defaultMessages=await i(n,n.effectiveLocale);a(n)}async function i(n,s){const{el:o}=n;const a=o.tagName.toLowerCase();const e=a.replace("calcite-","");return c(t(s,"t9n"),e)}async function r(n,t){n.defaultMessages=await i(n,t);a(n)}function u(n){n.onMessagesChange=d}function f(n){n.onMessagesChange=undefined}function d(){a(this)}export{u as c,f as d,e as s,r as u};
//# sourceMappingURL=p-7fb57f56.js.map