import { f as s$1 } from './hub-compass-map-68308039.js';
import './index-d436d5f8.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
let t;function s(s,a){let r=a.responseType;r?"array-buffer"!==r&&"blob"!==r&&"json"!==r&&"native"!==r&&"native-request-init"!==r&&"text"!==r&&(r="text"):r="json",a.responseType=r;const n=a.signal;return delete a.signal,globalThis.invokeStaticMessage("request",{url:s,options:a},{signal:n}).then((async o=>{let i,l,u,c,p;if(o.data)if(o.data instanceof ArrayBuffer){if(!("json"!==r&&"text"!==r&&"blob"!==r||(i=new Blob([o.data]),"json"!==r&&"text"!==r||(t||(t=new FileReaderSync),c=t.readAsText(i),"json"!==r)))){try{l=JSON.parse(c||null);}catch(b){const t={...b,url:s,requestOptions:a};throw new s$1("request:server",b.message,t)}if(l.error){const t={...l.error,url:s,requestOptions:a};throw new s$1("request:server",l.error.message,t)}}}else "native"===r&&(o.data.signal=n,u=await fetch(o.data.url,o.data),o.httpStatus=u.status);switch(r){case"blob":p=i;break;case"json":p=l;break;case"native":p=u;break;case"text":p=c;break;default:p=o.data;}return {data:p,httpStatus:o.httpStatus,requestOptions:a,ssl:o.ssl,url:s}}))}

export { s as execute };

//# sourceMappingURL=request-a0b8180d.js.map