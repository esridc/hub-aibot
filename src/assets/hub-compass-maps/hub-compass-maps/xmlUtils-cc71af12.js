/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function o(n,c){if(n&&c)for(const f of n.children)if(f.localName in c){const n=c[f.localName];if("function"==typeof n){const c=n(f);c&&o(f,c);}else o(f,n);}}function*n(o,c){for(const f of o.children)if(f.localName in c){const o=c[f.localName];"function"==typeof o?yield o(f):yield*n(f,o);}}

export { n, o };

//# sourceMappingURL=xmlUtils-cc71af12.js.map