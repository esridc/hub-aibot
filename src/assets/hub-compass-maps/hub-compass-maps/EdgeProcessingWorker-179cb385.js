import { I, G } from './InterleavedLayout-8e8dd790.js';
import { A, f as f$1, u as u$2, p as p$1, a, m } from './edgeProcessing-23e464b6.js';
import './BufferView-6af44820.js';
import './hub-compass-map-68308039.js';
import './index-d436d5f8.js';
import './types-6916d16e.js';
import './deduplicate-9ccb6566.js';
import './Indices-97d6ca60.js';
import './VertexAttribute-0bdc9233.js';
import './enums-f1bebe6f.js';
import './VertexElementDescriptor-33a64685.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function u$1(r,u){return u.push(r.buffer),{buffer:r.buffer,layout:new I(r.layout)}}function t(e){return new G(e.layout).createView(e.buffer)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class o{async extract(e){const t=c(e),n=f$1(t),r=[t.data.buffer];return {result:l(n,r),transferList:r}}async extractComponentsEdgeLocations(t){const s=c(t),i=u$2(s.data,s.skipDeduplicate,s.indices,s.indicesLength),a=p$1(i,p,g),o=[];return {result:u$1(a.regular.instancesData,o),transferList:o}}async extractEdgeLocations(t){const s=c(t),i=u$2(s.data,s.skipDeduplicate,s.indices,s.indicesLength),a=p$1(i,f,g),o=[];return {result:u$1(a.regular.instancesData,o),transferList:o}}}function c(e){return {data:A.createView(e.dataBuffer),indices:"Uint32Array"===e.indicesType?new Uint32Array(e.indices):"Uint16Array"===e.indicesType?new Uint16Array(e.indices):e.indices,indicesLength:e.indicesLength,writerSettings:e.writerSettings,skipDeduplicate:e.skipDeduplicate}}function l(t,n){n.push(t.regular.lodInfo.lengths.buffer),n.push(t.silhouette.lodInfo.lengths.buffer);return {regular:{instancesData:u$1(t.regular.instancesData,n),lodInfo:{lengths:t.regular.lodInfo.lengths.buffer}},silhouette:{instancesData:u$1(t.silhouette.instancesData,n),lodInfo:{lengths:t.silhouette.lodInfo.lengths.buffer}},averageEdgeLength:t.averageEdgeLength}}class u{allocate(e){return a.createBuffer(e)}trim(e,t){return e.slice(0,t)}write(e,t,n){e.position0.setVec(t,n.position0),e.position1.setVec(t,n.position1);}}class d{allocate(e){return m.createBuffer(e)}trim(e,t){return e.slice(0,t)}write(e,t,n){e.position0.setVec(t,n.position0),e.position1.setVec(t,n.position1),e.componentIndex.set(t,n.componentIndex);}}const f=new u,p=new d,g={allocate:()=>null,write:()=>{},trim:()=>null};

export default o;

//# sourceMappingURL=EdgeProcessingWorker-179cb385.js.map