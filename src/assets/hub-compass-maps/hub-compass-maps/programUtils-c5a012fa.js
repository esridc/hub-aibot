import { t } from './NestedMap-98a772ce.js';
import { m } from './ProgramTemplate-49989acd.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class e$1{constructor(r){this._rctx=r,this._store=new t;}dispose(){this._store.forEach((t=>t.forEach((t=>t.dispose())))),this._store.clear();}acquire(t,e,s,o){const c=this._store.get(t,e);if(null!=c)return c.ref(),c;const h=new m(this._rctx,t,e,s,o);return h.ref(),this._store.set(t,e,h),h}get test(){let t=0;return this._store.forEach((r=>r.forEach((r=>t+=r.hasGLName?2:1)))),{cachedWebGLObjects:t}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function e(e){const{options:n,value:o}=e;return "number"==typeof n[o]}function n(n){let o="";for(const t in n){const i=n[t];if("boolean"==typeof i)i&&(o+=`#define ${t}\n`);else if("number"==typeof i)o+=`#define ${t} ${i.toFixed()}\n`;else if("object"==typeof i)if(e(i)){const{value:e,options:n,namespace:f}=i,s=f?`${f}_`:"";for(const t in n)o+=`#define ${s}${t} ${n[t].toFixed()}\n`;o+=`#define ${t} ${s}${e}\n`;}else {const e=i.options;let n=0;for(const t in e)o+=`#define ${e[t]} ${(n++).toFixed()}\n`;o+=`#define ${t} ${e[i.value]}\n`;}}return o}

export { e$1 as e, n };

//# sourceMappingURL=programUtils-c5a012fa.js.map