import { iR as S, iS as i, O as j } from './hub-compass-map-68308039.js';
import { t } from './query-d5b899b4.js';
import { l } from './AttachmentInfo-15bdd9fc.js';
import './index-d436d5f8.js';
import './pbfQueryUtils-c8cadfda.js';
import './pbf-bcfa39bd.js';
import './OptimizedGeometry-d99be84d.js';
import './OptimizedFeatureSet-c30cfe93.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function s(t){const o=t.toJSON();return o.attachmentTypes&&(o.attachmentTypes=o.attachmentTypes.join(",")),o.keywords&&(o.keywords=o.keywords.join(",")),o.globalIds&&(o.globalIds=o.globalIds.join(",")),o.objectIds&&(o.objectIds=o.objectIds.join(",")),o.size&&(o.size=o.size.join(",")),o}function a(o,n){const s={};for(const a of n){const{parentObjectId:n,parentGlobalId:c,attachmentInfos:m}=a;for(const a of m){const{id:m}=a,p=S(i(`${o.path}/${n}/attachments/${m}`)),i$1=l.fromJSON(a);i$1.set({url:p,parentObjectId:n,parentGlobalId:c}),s[n]?s[n].push(i$1):s[n]=[i$1];}}return s}function c(t$1,e,r){let a={query:t({...t$1.query,f:"json",...s(e)})};return r&&(a={...r,...a,query:{...r.query,...a.query}}),j(t$1.path+"/queryAttachments",a).then((t=>t.data.attachmentGroups))}async function m(t,e,n){const{objectIds:r}=e,s=[];for(const a of r)s.push(j(t.path+"/"+a+"/attachments",n));return Promise.all(s).then((t=>r.map(((o,e)=>({parentObjectId:o,attachmentInfos:t[e].data.attachmentInfos})))))}

export { c as executeAttachmentQuery, m as fetchAttachments, a as processAttachmentQueryResult };

//# sourceMappingURL=queryAttachments-a0bae924.js.map