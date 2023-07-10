import { O as j } from './hub-compass-map-68308039.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
async function t$1(t,o){const{data:r}=await j(t,{responseType:"json",query:{f:"json",...o?.customParameters,token:o?.apiKey}});return r}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
async function r(r,s){const a=await t$1(r,s);a.layers=a.layers.filter(t);const n={serviceJSON:a};if((a.currentVersion??0)<10.5)return n;const i=await t$1(r+"/layers",s);return n.layersJSON={layers:i.layers.filter(t),tables:i.tables},n}function t(e){return !e.type||"Feature Layer"===e.type}

export { r, t$1 as t };

//# sourceMappingURL=fetchService-28ae9e5d.js.map