import { G } from './cimAnalyzer-51b7fc99.js';
import { E, S } from './color-07edd940.js';
import { f as f$1 } from './GeometryUtils-e7f92760.js';
import { c as c$1, a } from './devEnvironmentUtils-fbf66ba6.js';
import { f as s$1, bZ as c, aF as f$2, b_ as w, b$ as b$1, c0 as p$1, c1 as j, c2 as L, c3 as i$2, c4 as d } from './hub-compass-map-f4225e12.js';
import { getStyleItemFromStyle as h } from './webStyleSymbolUtils-e2984068.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const s={marker:E.MARKER,fill:E.FILL,line:E.LINE,text:E.TEXT};class l{constructor(e,l,n,r){const c={minScale:l?.minScale,maxScale:l?.maxScale},m=i$1(c);this.layers=e,this.data=l,this.hash=this._createHash()+m,this.rendererKey=n;const o={isOutline:!1,placement:null,symbologyType:S.DEFAULT,vvFlags:n};for(const t of e){const e=s[t.type];o.isOutline="line"===t.type&&t.isOutline,t.materialKey=f$1(e,o),t.maxVVSize=r,t.scaleInfo=c,t.templateHash+=m;}}get type(){return "expanded-cim"}_createHash(){let e="";for(const t of this.layers)e+=t.templateHash;return e}}function i$1(e){return e.minScale||e.maxScale?e.minScale+"-"+e.maxScale:""}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
async function f(t,r,s){if(!t.name)throw new s$1("style-symbol-reference-name-missing","Missing name in style symbol reference");if(t.styleName&&"Esri2DPointSymbolsStyle"===t.styleName)return p(t,s);try{return b(await c(t,r,s),t.name,r,s)}catch(l){return f$2(l),null}}async function p(t,r){const o=w.replaceAll(/\{SymbolName\}/gi,t.name);try{const t=await b$1(o,r);return p$1(t.data)}catch(s){return f$2(s),null}}async function b(m,a$1,f,p){const b={portal:f&&null!=f.portal?f.portal:j.getDefault(),url:L(m.baseUrl),origin:"portal-item"},j$1=h(a$1,m.data);if(!j$1){throw new s$1("symbolstyleutils:symbol-name-not-found",`The symbol name '${a$1}' could not be found`,{symbolName:a$1})}let w=i$2(d(j$1,"cimRef"),b);c$1()&&(w=a(w));try{const t=await b$1(w,p);return p$1(t.data)}catch(U){return f$2(U),null}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const i=async(a,i,r)=>{const n=new G(r,i);return new l(await n.analyzeSymbolReference(a.data,!1),a.data,a.rendererKey,a.maxVVSize)};async function r(e,t,r,n){if(!e)return null;if("cim"===e.type)return i(e,t,r);if("web-style"===e.type){const l={type:"cim",data:await f(e,null,n)??void 0,rendererKey:e.rendererKey,maxVVSize:e.maxVVSize};return i(l,t,r)}return e}function n(e){if(!e)return null;const{avoidSDFRasterization:t,type:a,cim:i,url:r,materialHash:n,maxVVSize:l}=e,m={cim:i,type:a,mosaicHash:n,url:r,size:null,dashTemplate:null,path:null,text:null,fontName:null,animatedSymbolProperties:null,avoidSDFRasterization:t};switch(a){case"marker":l&&"size"in i&&(i.size=Math.max(l,i.size)),m.size=e.size,m.path=e.path,m.animatedSymbolProperties=e.animatedSymbolProperties;break;case"line":m.dashTemplate=e.dashTemplate;break;case"text":m.text=e.text,m.fontName=e.fontName;}return m}

export { n, r };

//# sourceMappingURL=cimSymbolUtils-5a00cf74.js.map