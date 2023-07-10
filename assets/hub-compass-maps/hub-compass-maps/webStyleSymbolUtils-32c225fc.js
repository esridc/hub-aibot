import { f as s, b$ as b, ci as b$1, c2 as L, cj as Ut, bZ as c, aU as u, c4 as d$1, c1 as j$1, c3 as i, c0 as p, ck as x, cl as p$1, cm as a$1, b_ as w } from './hub-compass-map-4d751555.js';
import { c as c$1, a } from './devEnvironmentUtils-fbf66ba6.js';
import './index-d436d5f8.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function j(t,e,r,n){const s$1=t.name;return null==s$1?Promise.reject(new s("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference")):t.styleName&&"Esri2DPointSymbolsStyle"===t.styleName?U(s$1,e,n):c(t,e,n).then((t=>d(u(t),s$1,e,r,d$1,n)))}function h(t,e){return e.items.find((e=>e.name===t))}function d(o,p$2,c,b$2,j,d){const U=c&&null!=c.portal?c.portal:j$1.getDefault(),N={portal:U,url:L(o.baseUrl),origin:"portal-item"},w=h(p$2,o.data);if(!w){const t=`The symbol name '${p$2}' could not be found`;return Promise.reject(new s("symbolstyleutils:symbol-name-not-found",t,{symbolName:p$2}))}let S=i(j(w,b$2),N),D=w.thumbnail?.href??null;const O=w.thumbnail&&w.thumbnail.imageData;c$1()&&(S=a(S)??"",D=a(D));const P={portal:U,url:L(Ut(S)),origin:"portal-item"};return b(S,d).then((e=>{const r="cimRef"===b$2?p(e.data):e.data,l=b$1(r,P);if(l&&x(l)){if(D){const t=i(D,N);l.thumbnail=new p$1({url:t});}else O&&(l.thumbnail=new p$1({url:`data:image/png;base64,${O}`}));o.styleUrl?l.styleOrigin=new a$1({portal:c.portal,styleUrl:o.styleUrl,name:p$2}):o.styleName&&(l.styleOrigin=new a$1({portal:c.portal,styleName:o.styleName,name:p$2}));}return l}))}function U(t,e,r){const l=w.replaceAll(/\{SymbolName\}/gi,t),o=null!=e.portal?e.portal:j$1.getDefault();return b(l,r).then((t=>{const e=p(t.data);return b$1(e,{portal:o,url:L(Ut(l)),origin:"portal-item"})}))}

export { d as fetchSymbolFromStyle, h as getStyleItemFromStyle, j as resolveWebStyleSymbol };

//# sourceMappingURL=webStyleSymbolUtils-32c225fc.js.map