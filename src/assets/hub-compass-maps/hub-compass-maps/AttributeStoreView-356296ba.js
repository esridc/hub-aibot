import { bb as n$2, m as e$2, bK as s$2, bL as i$2, bM as s$3, bd as o$1, as as d$2, ap as i$3, x as u$3, bN as j$2, s as s$4, bD as o$2, e as has, aA as n$4, f as s$5, bO as a$3, bP as n$5, bQ as f$3, bR as c$4, bS as c$5, aB as R$1, bT as n$7, bU as s$6, C as C$1, bV as a$4 } from './hub-compass-map-68308039.js';
import { b as c$3, g as de, f as b$1, w as w$1, Z as z$1, a0 as S$3, E as E$1, F as F$1, G as G$1, H as H$1, I as I$1, J as J$1, a1 as K$2, a2 as P$1, R as R$2, Q as Q$1, a3 as U$2 } from './definitions-6e5909d3.js';
import { r as r$1 } from './TiledDisplayObject-99ff23bf.js';
import { L as L$1, S as S$2, V as V$1, W, K as K$1 } from './color-e6670fe4.js';
import { d as c$6 } from './WGLContainer-25c01575.js';
import { l as l$2, n as n$6, a as l$3, f as f$4 } from './visualVariablesUtils-99504d10.js';
import { createSymbolSchema as o$3 } from './createSymbolSchema-984d8bca.js';
import { i as i$4, S as S$1, d as t$1, f as ie } from './cimAnalyzer-5794c7c7.js';
import { r as r$2, n as n$3 } from './alignmentUtils-63467b02.js';
import { r as r$3 } from './cimSymbolUtils-d431c102.js';
import { e as e$3 } from './util-40d07144.js';
import { D as D$1, L as L$2, U as U$1 } from './enums-f1bebe6f.js';
import { x as x$3 } from './VertexArrayObject-3e0deefe.js';
import { b as e$4, T as T$1 } from './Texture-2136281d.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class t{constructor(a){if(this.next=null,!Array.isArray(a))return void(this.data=a);this.data=a[0];let e=this;for(let n=1;n<a.length;n++)e.next=new t([a[n]]),e=e.next;}*values(){let t=this;for(;t;)yield t.data,t=t.next;}forEach(t){let a=this;for(;a;)t(a.data),a=a.next;}find(t){return t(this.data)?this:this.next?.find(t)}max(t,a=this){const e=t(this.data)>t(a.data)?this:a;return this.next?this.next.max(t,e):e}remove(t,a=null){return this===t?a?(a.next=this.next,a):this.next:this.next?.remove(t,this)??null}get last(){return this.next?this.next.last:this}}class a$2{constructor(a){this._head=null,null!=a&&(this._head=new t(a));}get head(){return this._head}maxAvailableSpace(){if(null==this._head)return 0;const t=this._head.max((t=>t.end-t.start));return t.data.end-t.data.start}firstFit(t){if(null==this._head)return null;let a=null,e=this._head;for(;e;){const n=e.data.end-e.data.start;if(n===t)return a?a.next=e.next:this._head=e.next,e.data.start;if(n>t){const a=e.data.start;return e.data.start+=t,a}a=e,e=e.next;}return null}free(a,e){const n=a+e;if(null==this._head){const e=new t({start:a,end:n});return void(this._head=e)}if(n<=this._head.data.start){if(n===this._head.data.start)return void(this._head.data.start-=e);const r=new t({start:a,end:n});return r.next=this._head,void(this._head=r)}let r=this._head,s=r.next;for(;s;){if(s.data.start>=n){if(r.data.end===a){if(r.data.end+=e,r.data.end===s.data.start){const t=s.data.end-s.data.start;return r.data.end+=t,void(r.next=s.next)}return}if(s.data.start===n)return void(s.data.start-=e);const d=new t({start:a,end:n});return d.next=r.next,void(r.next=d)}r=s,s=s.next;}if(a===r.data.end)return void(r.data.end+=e);const d=new t({start:a,end:n});r.next=d;}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class h$4{acquire(s){return {refCount:1,version:-1,labelMat2d:n$2(),tileMat3:e$2(),dvs:e$2()}}release(s){}}class m$2 extends r$1{constructor(s,t,r,e){super(s,t,r,e,c$3,c$3);}destroy(){super.destroy(),this._transforms&&m$2.TransformCache.release(this.key.hash);}setTransform(i){const o=this.resolution/i.resolution,n=this.transforms.tileMat3,[h,m]=i.toScreenNoRotation([0,0],[this.x,this.y]),c=this.width/this.rangeX*o,f=this.height/this.rangeY*o;s$2(n,c,0,0,0,f,0,h,m,1),i$2(this.transforms.dvs,i.displayViewMat3,n);const d=this.transforms.labelMat2d,l=window.devicePixelRatio,u=s$3(n$2(),c*l,0,0,f*l,h*l,m*l);o$1(d,i.viewMat2d,u);}_createTransforms(){return m$2.TransformCache.acquire(this.key.hash)}}m$2.TransformCache=new h$4;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class e$1{constructor(t,e,n,i,a){this.target=t,this.geometryType=e,this.materialKey=n,this.indexFrom=i,this.indexCount=a;}get indexEnd(){return this.indexFrom+this.indexCount}extend(t){this.indexCount+=t;}}class n$1{constructor(t,e){this.geometryType=0,this._target=t,this.geometryType=e;}static from(t,e,i,a){const d=new n$1(t,e);if(null!=a)for(const n of a)i.seekIndex(n),d.addRecord(i);else for(;i.next();)d.addRecord(i);return d}addRecord(n){const i=this._target,a=this.geometryType,d=n.materialKey;let s=n.indexFrom,r=n.indexCount;const o=n.vertexFrom,l=n.vertexCount;if(r||(s=o,r=l),null==this._head){const n=new e$1(i,a,d,s,r);return void(this._head=new t(n))}let h=null,x=this._head;for(;x;){if(s<x.data.indexFrom)return this._insert(d,s,r,h,x);h=x,x=x.next;}this._insert(d,s,r,h,null);}forEach(t){null!=this._head&&this._head.forEach(t);}*infos(){if(null!=this._head)for(const t of this._head.values())yield t;}_insert(n,i,a,d,s){if(null==d&&null==s){const d=new e$1(this._target,this.geometryType,n,i,a);this._head=new t(d);}return null==d&&null!=s?this._insertAtHead(n,i,a,s):null!=d&&null==s?this._insertAtEnd(n,i,a,d):null!=d&&null!=s?this._insertAtMiddle(n,i,a,d,s):void 0}_insertAtHead(n,i,a,d){const s=i+a;if(n===d.data.materialKey&&s===d.data.indexFrom)d.data.indexFrom=i,d.data.indexCount+=a;else {const s=new e$1(this._target,this.geometryType,n,i,a);this._head=new t(s),this._head.next=d;}}_insertAtEnd(n,i,a,d){if(d.data.materialKey===n&&d.data.indexEnd===i)d.data.indexCount+=a;else {const s=new e$1(this._target,this.geometryType,n,i,a),r=new t(s);d.next=r;}}_insertAtMiddle(n,i,a,d,s){const r=i+a;if(d.data.materialKey===n&&d.data.indexEnd===i)d.data.indexCount+=a,d.data.materialKey===s.data.materialKey&&d.data.indexEnd===s.data.indexFrom&&(d.data.indexCount+=s.data.indexCount,d.next=s.next);else if(n===s.data.materialKey&&r===s.data.indexFrom)s.data.indexFrom=i,s.data.indexCount+=a;else {const r=new e$1(this._target,this.geometryType,n,i,a),o=new t(r);d.next=o,o.next=s;}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const s$1=2147483647;class r{constructor(t){this._head=t,this._cursor=t;}static from(t,e=0,s=t.byteLength/i$1.BYTES_PER_RECORD-e){const _=new i$1(new Int32Array(t,e*i$1.BYTES_PER_RECORD,s*i$1.ELEMENTS_PER_RECORD));return new r(_)}size(){let t=this._cursor,e=0;for(;t;)e+=t.size(),t=t._link;return e}get id(){return this._cursor.id}set id(t){this._cursor.id=t;}get materialKey(){return this._cursor.materialKey}set materialKey(t){this._cursor.materialKey=t;}get insertAfter(){return this._cursor.insertAfter}get indexFrom(){return this._cursor.indexFrom}set indexFrom(t){this._cursor.indexFrom=t;}get indexCount(){return this._cursor.indexCount}set indexCount(t){this._cursor.indexCount=t;}get vertexFrom(){return this._cursor.vertexFrom}set vertexFrom(t){this._cursor.vertexFrom=t;}get vertexCount(){return this._cursor.vertexCount}set vertexCount(t){this._cursor.vertexCount=t;}get sortKey(){return this._cursor.sortKey}set sortKey(t){this._cursor.sortKey=t;}get index(){return this._cursor._indexStart+this._cursor._index}seekIndex(t){let e=t;for(this._cursor=this._head;this._cursor;){const t=this._cursor.size();if(e<t)return this._cursor._index=e,!0;e-=t,this._cursor=this._cursor._link;}return !1}forEach(t){const e=this.getCursor();for(;e.next();)t(e);}link(t){if(!this._head)return void(this._head=t._head);let e=this._head;for(;e._link;)e=e._link;e._link=t._head,e._link._indexStart=e._indexStart+e.size();}getCursor(){return this.copy()}getDrawInfo(t,s){return new e$1(t,s,this.materialKey,this.indexFrom,this.indexCount)}lookup(t){for(this._cursor=this._head;this._cursor&&!this._cursor.lookup(t);){if(!this._cursor._link)return !1;this._cursor=this._cursor._link;}return !!this._cursor}copy(){const t=new r(this._head?.copy());if(!t._head)return t;let e=t._head,s=t._head._link;for(;s;)e._link=s.copy(),e=s,s=e._link;return t}next(){return !!this._cursor&&(!!this._cursor.next()||!!this._cursor._link&&(this._cursor=this._cursor._link,this.next()))}peekId(){return this._cursor.peekId()??this._cursor._link.peekId()}delete(t){let e=this._head,s=null;for(;e;){if(e.delete(t))return e.isEmpty()&&(null!=s&&(s._link=e._link),e===this._head&&(this._head=e._link),e===this._cursor&&(this._cursor=e._link)),!0;s=e,e=e._link;}return !1}}r.ELEMENTS_PER_RECORD=de,r.BYTES_PER_RECORD=r.ELEMENTS_PER_RECORD*Int32Array.BYTES_PER_ELEMENT;class i$1{constructor(t){this._link=null,this._index=-1,this._indexStart=0,this._packedRecordsF32=null,this._deletedCount=0,this._offsets={instance:null},this._packedRecords=t;}static from(t,e=0,s=t.byteLength/this.BYTES_PER_RECORD-e){return new i$1(new Int32Array(t,e*this.BYTES_PER_RECORD,s*this.ELEMENTS_PER_RECORD))}delete(t){const e=this._index,r=this.lookup(t);if(r)for(this.id=s$1,++this._deletedCount;this.next()&&this.id===t;)this.id=s$1,++this._deletedCount;return this._index=e,r}isEmpty(){return this._deletedCount===this.size()}link(t){this._link?this._link.link(t):this._link=t;}lookup(t){if(null==this._offsets.instance){this._offsets.instance=new Map;const t=this.copy();t._index=-1;let e=0;for(;t.next();)t.id!==e&&(this._offsets.instance.set(t.id,t._index),e=t.id);}if(!this._offsets.instance.has(t))return !1;const e=this._index;return this._index=this._offsets.instance.get(t),this.id!==s$1||(this._index=e,!1)}get id(){return this._packedRecords[this._index*i$1.ELEMENTS_PER_RECORD]}set id(t){this._packedRecords[this._index*i$1.ELEMENTS_PER_RECORD]=t;}get materialKey(){return this._packedRecords[this._index*i$1.ELEMENTS_PER_RECORD+1]}set materialKey(t){this._packedRecords[this._index*i$1.ELEMENTS_PER_RECORD+1]=t;}get insertAfter(){return this._packedRecords[this._index*i$1.ELEMENTS_PER_RECORD+2]}get indexFrom(){return this._packedRecords[this._index*i$1.ELEMENTS_PER_RECORD+3]}set indexFrom(t){this._packedRecords[this._index*i$1.ELEMENTS_PER_RECORD+3]=t;}get indexCount(){return this._packedRecords[this._index*i$1.ELEMENTS_PER_RECORD+4]}set indexCount(t){this._packedRecords[this._index*i$1.ELEMENTS_PER_RECORD+4]=t;}get vertexFrom(){return this._packedRecords[this._index*i$1.ELEMENTS_PER_RECORD+5]}set vertexFrom(t){this._packedRecords[this._index*i$1.ELEMENTS_PER_RECORD+5]=t;}get vertexCount(){return this._packedRecords[this._index*i$1.ELEMENTS_PER_RECORD+6]}set vertexCount(t){this._packedRecords[this._index*i$1.ELEMENTS_PER_RECORD+6]=t;}get sortKey(){return this._packedRecordsF32||(this._packedRecordsF32=new Float32Array(this._packedRecords.buffer)),this._packedRecordsF32[this._index*i$1.ELEMENTS_PER_RECORD+7]}set sortKey(t){this._packedRecordsF32||(this._packedRecordsF32=new Float32Array(this._packedRecords.buffer)),this._packedRecordsF32[this._index*i$1.ELEMENTS_PER_RECORD+7]=t;}get index(){return this._index}size(){return this._packedRecords.length/i$1.ELEMENTS_PER_RECORD}next(){for(;++this._index<this.size()&&this.id===s$1;);return this._index<this.size()}peekId(){const t=(this._index+1)*i$1.ELEMENTS_PER_RECORD;return t>=this._packedRecords.length?0:this._packedRecords[t]}getCursor(){return this.copy()}copy(){const t=new i$1(this._packedRecords);return t._indexStart=this._indexStart,t._link=this._link,t._index=this._index,t._offsets=this._offsets,t._deletedCount=this._deletedCount,t}}i$1.ELEMENTS_PER_RECORD=de,i$1.BYTES_PER_RECORD=i$1.ELEMENTS_PER_RECORD*Int32Array.BYTES_PER_ELEMENT;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function e(e){if(!e)return L$1.NONE;let r=0;for(const i of e)if("size"===i.type){const t=l$2(i);r|=t,"outline"===i.target&&(r|=t<<4);}else "color"===i.type?r|=L$1.COLOR:"opacity"===i.type?r|=L$1.OPACITY:"rotation"===i.type&&(r|=L$1.ROTATION);return r}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const c$2=512,f$2=50;function g$2(e,t){const n=d$2(t);if(!n)return null;const[o,s]=n.valid;return e[2]>s?[i$3([e[0],e[1],s,e[3]]),i$3([o,e[1],o+e[2]-s,e[3]])]:e[0]<o?[i$3([o,e[1],e[2],e[3]]),i$3([s-(o-e[0]),e[1],s,e[3]])]:null}function u$2(e){return "text"===e||"esriTS"===e}function p$2(e){return "simple-marker"===e||"picture-marker"===e||"esriSMS"===e||"esriPMS"===e}function h$3(e){switch(e.geometry.type){case"point":case"multipoint":return 0;case"polyline":return 1;case"polygon":case"extent":return 2}return 0}function d$1(n,i,r){if(!r?.glyphMosaicItems?.length)return n;const c=i$4(i.text)[1],f=r.glyphMosaicItems,g=S$1(f,c,{scale:u$3(i.font.size)/b$1,angle:i.angle??0,xOffset:i.xoffset??0,yOffset:i.yoffset??0,hAlign:r$2(i.horizontalAlignment||"center"),vAlign:n$3(i.verticalAlignment||"baseline"),maxLineWidth:Math.max(32,Math.min(i.lineWidth||512,512)),lineHeight:w$1*Math.max(.25,Math.min(i.lineHeight||1,4)),decoration:i.font.decoration||"none",isCIM:!1,hasBackground:!!i.backgroundColor,borderLineSize:i.borderLineSize}).bounds;return n[0]=u$3(g.x-g.halfWidth),n[1]=u$3(g.y-g.halfHeight),n[2]=u$3(g.width),n[3]=u$3(g.height),n}function x$2(e){if(!e)return null;const{xmin:t,ymin:i,xmax:r,ymax:o,spatialReference:s}=e;return new j$2({rings:[[[t,i],[t,o],[r,o],[r,i],[t,i]]],spatialReference:s})}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const a$1={"simple-marker":1,"picture-marker":1,text:0,"simple-line":0,"simple-fill":0,"picture-fill":0,cim:1,"web-style":1},o=.707;function m$1(t,e){if(!("visualVariables"in t))return 0;if(!t.hasVisualVariables("size"))return 0;const r=t.getVisualVariablesForType("size");if(!r[0])return 0;const i=r[0];if(e&&"cluster_count"===i.field&&"cluster"===e.type)return e.clusterMaxSize;if("outline"===i.target)return 0;if("stops"===i.transformationType)return i.stops.map((t=>t.size)).reduce(g$1,0);if("clamped-linear"===i.transformationType){let t=-1/0,e=-1/0;return t="number"==typeof i.maxSize?i.maxSize:i.maxSize.stops.map((t=>t.size)).reduce(g$1,0),e="number"==typeof i.minSize?i.minSize:i.minSize.stops.map((t=>t.size)).reduce(g$1,0),Math.max(t,e)}return "real-world-size"===i.transformationType?30:void 0}function u$1(t){return t.type in a$1}async function c$1(e,r,i,n,s,a){if(!e||a&&"cluster"===a.type)return 0;if("heatmap"===e.type)return Math.round(u$3(e.radius));if("dot-density"===e.type)return 0;if("dictionary"===e.type)return "esriGeometryPoint"===r||"esriGeometryMultipoint"===r?100:200;const o=e.getSymbols(),u=m$1(e),c=[];for(const t of o)c.push(x$1(t,u,i,r,n,s));const l=await Promise.all(c);return u$3(l.reduce(g$1,0))}const l$1=[0,0,0,0];function p$1(t,e){return t??e}function f$1(t,e){return null==t.outline?e:p$1(t.outline.width,e)}const y={sdf:!0,code:99,metrics:z$1.metrics,rect:new t$1(0,0,24,24),page:0,textureBinding:2};function h$2(t){const e=t.text&&t.text.length;if(!e)return {glyphMosaicItems:[y]};const r=[];for(let i=0;i<e;i++)r.push({...y,code:t.text.charCodeAt(i)});return {glyphMosaicItems:r}}async function d(t,r,i,a,m,u){if("simple-marker"===t.type){const e=Math.max(p$1(t.size,12),r);return M$2(t)+e*o}if("picture-marker"===t.type){const e=Math.max(p$1(t.height,12),r),i=p$1(t.width,12)*(e/p$1(t.height,12))/2,n=e/2;return M$2(t)+Math.sqrt(i*i+n*n)}if("text"===t.type){const e=h$2(t);d$1(l$1,t.toJSON(),e);const r=Math.abs(l$1[0]),i=Math.abs(l$1[1]),s=l$1[2],a=l$1[3];return Math.max(r,i)+Math.max(s,a)}if("simple-line"===t.type){const e=t,i=Math.max(p$1(e.width,.75),r)/2;return e.marker?Math.max(6*e.width,2*r):i}if("simple-fill"===t.type||"picture-fill"===t.type)return Math.max(f$1(t,0),r)/2;if("cim"===t.type){const n={geometryType:a,fields:m,spatialReference:u},o={type:"cim",rendererKey:0,data:t.data,maxVVSize:r};await r$3(o,n,i);const c=ie.getEnvelope(t.data,null,i);return c?Math.sqrt(c.width*c.width+c.height*c.height):0}return "web-style"===t.type?d(await t.fetchCIMSymbol(),r,i,a,m,u):0}async function x$1(t,e,r,i,n,s){return u$1(t)?Math.min(await d(t,e,r,i,n,s),75):0}function M$2(t){const e=p$1(t.xoffset,0),r=p$1(t.yoffset,0);return Math.sqrt(e*e+r*r)}function g$1(t,e){return Math.max(t,e)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const s=8,l=s-2,a=s$4.getLogger("esri.views.2d.layers.features.support.rendererUtils"),n=e=>{if(!("visualVariables"in e)||!e.visualVariables||!e.visualVariables.length)return e;const r=e.clone(),t=r.visualVariables.map((e=>u(e)?p(e):e));return r.visualVariables=t,r};function i(e){return e.map((e=>u(e)?p(e.clone()):e))}function u(e){return ("size"===e.type||"color"===e.type||"opacity"===e.type)&&null!=e.stops}function p(e){return e.stops=m(e.type,e.stops??[]),e}function c(e,r,t){return (1-t)*e+t*r}function f(e,r){const[o,...s]=r,a=s.pop(),n=s[0].value,i=s[s.length-1].value,u=(i-n)/l,p=[];for(let l=n;l<i;l+=u){let o=0;for(;l>=s[o].value;)o++;const a=s[o],n=r[o-1],i=l-n.value,u=a.value===n.value?1:i/(a.value-n.value);if("color"===e){const e=s[o],t=r[o-1],a=e.color.clone();a.r=c(t.color.r,a.r,u),a.g=c(t.color.g,a.g,u),a.b=c(t.color.b,a.b,u),a.a=c(t.color.a,a.a,u),p.push({value:l,color:a,label:e.label});}else if("size"===e){const e=s[o],a=r[o-1],n=o$2(e.size),i=c(o$2(a.size),n,u);p.push({value:l,size:i,label:e.label});}else {const e=s[o],t=c(r[o-1].opacity,e.opacity,u);p.push({value:l,opacity:t,label:e.label});}}return [o,...p,a]}function b(e){const[r,...t]=e,o=t.pop();for(;t.length>l;){let e=0,r=0;for(let o=1;o<t.length;o++){const s=t[o-1],l=t[o],a=Math.abs(l.value-s.value);a>r&&(r=a,e=o);}t.splice(e,1);}return [r,...t,o]}function m(e,r){return r.length<=s?r:(a.warn(`Found ${r.length} Visual Variable stops, but MapView only supports ${s}. Displayed stops will be simplified.`),r.length>2*s?f(e,r):b(r))}function g(){if(has("heatmap-force-raster"))return "raster";const{supportsTextureFloat:e,supportsTextureHalfFloat:r,supportsColorBufferFloat:t,supportsColorBufferFloatBlend:s,supportsColorBufferHalfFloat:l}=n$4("2d");return e&&t&&s||r&&l?"symbol":has("heatmap-allow-raster-fallback")?"raster":"none"}function h$1(r){if(!r)return !0;switch(r.type){case"dot-density":if(!n$4("2d").supportsTextureFloat)return a.error(new s$5("webgl-missing-extension","Missing WebGL extension OES_Texture_Float which is required for DotDensity")),!1;break;case"heatmap":{const r=g();if("none"===r||"raster"===r&&!has("heatmap-force-raster")){const t=n$4("2d"),s=["supportsTextureFloat","supportsTextureHalfFloat","supportsColorBufferFloat","supportsColorBufferFloatBlend","supportsColorBufferHalfFloat"].filter((e=>!t[e])).join(", ");if("none"===r)return a.errorOnce(new s$5("webgl-missing-extension",`Missing WebGL${t.type} requirements for Heatmap: ${s}`)),!1;"raster"===r&&a.warnOnce(`Missing WebGL${t.type} requirements for accelerated Heatmap: ${s}. Feature support may be limited.`);}break}}return !0}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const x=s$4.getLogger("esri.views.2d.layers.features.schemaUtils"),h="ValidationError";function v(e){return e}function T(e$1,t){let r=0,i=0,n=S$2.DEFAULT;if(null!=e$1){if(i=m$1(e$1,t),"visualVariables"in e$1&&(r=e(e$1.visualVariables||[]),"dot-density"===e$1.type&&(n=S$2.DOT_DENSITY)),"heatmap"===e$1.type&&(n=S$2.HEATMAP),"dictionary"===e$1.type)return {maxVVSize:i,vvFlags:r,symbologyType:S$2.DEFAULT};if("pie-chart"===e$1.type)return {maxVVSize:i,vvFlags:r,symbologyType:S$2.PIE_CHART};if(n!==S$2.DOT_DENSITY&&n!==S$2.HEATMAP){const t=e$1.getSymbols();"backgroundFillSymbol"in e$1&&e$1.backgroundFillSymbol&&t.push(e$1.backgroundFillSymbol);let r=!0,i=!0;for(const e of t)if("cim"!==e.type&&"web-style"!==e.type||(i=!1),"simple-fill"===e.type||"picture-fill"===e.type){const t=e.outline,n=t&&"none"!==t.style&&"solid"!==t.style,s="simple-fill"===e.type&&"none"!==e.style&&"solid"!==e.style;n&&(r=!1),("picture-fill"===e.type||s||n)&&(i=!1);}r?n=i?S$2.OUTLINE_FILL_SIMPLE:S$2.OUTLINE_FILL:i&&(n=S$2.SIMPLE);}}return {vvFlags:r,maxVVSize:i,symbologyType:n}}let S=null;function w(e){if(has("esri-2d-update-debug")){const t=E(e,!0);console.debug("Created new schema",t),console.debug("Schema diff",a$3(S,t)),S=t;}return E(e)}function E(e,t=!1){try{const r=R(e,t),i=D(e),s={};r.map((t=>F(s,e,t)));const l=null!=e.subtypeCode?`${e.subtypeField} = ${e.subtypeCode}`:null,o=n$5(e.definitionExpression,l);return {source:{definitionExpression:o,fields:e.fields.map((e=>e.toJSON())),gdbVersion:e.gdbVersion,historicMoment:e.historicMoment?.getTime(),outFields:e.availableFields,pixelBuffer:e.pixelBuffer,spatialReference:e.spatialReference.toJSON(),timeExtent:e.timeExtent?.toJSON(),customParameters:e.customParameters},attributes:{fields:{},indexCount:0},processors:r,tileRenderer:i,targets:s}}catch(r){if(r.fieldName===h)return x.error(r),null;throw r}}function F(e,r,i){switch(i.target){case"feature":return void O$1(e,V(r),i);case"aggregate":{if(!("featureReduction"in r))return;const n=r.featureReduction;switch(n?.type){case"selection":throw new s$5(h,"Mapview does not support `selection` reduction type",n);case"binning":return O$1(e,V(r),i),void N(e,n,r.fields.map((e=>e.toJSON())),i);case"cluster":return O$1(e,V(r),i),void L(e,n,r.fields.map((e=>e.toJSON())),i)}}}}function I(e,t){for(const r in t){const i=t[r];if(i.target!==e.name)continue;const n=e.attributes[r];if(n?.context){const e=n.context;e.mesh=e.mesh||i.context?.mesh,e.storage=e.storage||i.context?.storage;}else e.attributes[r]=i;}return e}function V(e){return [e.filter?.toJSON()??null,e.featureEffect?.filter?.toJSON()??null]}function O$1(e,t,r){return e.feature||(e.feature={name:"feature",input:"source",filters:t,attributes:{}}),I(e.feature,r.attributes.fields),e}function z(e,r){const{onStatisticExpression:i,onStatisticField:n,statisticType:s}=e;switch(s){case"min":case"max":case"avg":case"avg_angle":case"sum":case"count":return "esriFieldTypeDouble";case"mode":{if(i){const{returnType:r}=i;return r?"string"===r?"esriFieldTypeString":"esriFieldTypeDouble":(x.error(new s$5(h,"Unable to infer type of aggregateField with onStatisticExpression. ReturnType is not defined",e)),"esriFieldTypeString")}const s=r.find((e=>e.name===n));return s?s.type:(x.error(new s$5(h,"Unable to infer type of aggregateField with onStatisticExpression. ReturnType is not defined",e)),"esriFieldTypeString")}}}function N(e,t,r,i){return e.aggregate||(e.aggregate={name:"aggregate",type:"bin",filters:null,input:"feature",params:{fixedBinLevel:t.fixedBinLevel,fields:(t.fields??[]).map((e=>({...e.toJSON(),type:z(e,r)})))},attributes:{}}),I(e.aggregate,i.attributes.fields),e}function L(e,t,r,n){const s=n.aggregateFields??[],l=new Set;for(const i of s)l.add(i.name);for(const i of t?.fields??[])l.has(i.name)||s.push(i);return e.aggregate||(e.aggregate={name:"aggregate",type:"cluster",input:"feature",filters:null,attributes:{},params:{clusterRadius:u$3(t.clusterRadius/2),clusterPixelBuffer:64*Math.ceil(u$3(t.clusterMaxSize)/64),fields:s.map((e=>({...e.toJSON(),type:z(e,r)})))}}),I(e.aggregate,n.attributes.fields),e}function M$1(e,t){return t.field?j$1(e,{...t,type:"field",field:t.field}):t.valueExpression?j$1(e,{...t,type:"expression",valueExpression:t.valueExpression}):{field:void 0,fieldIndex:void 0}}function j$1(e,t){switch(t.type){case"expression":{const r=v(t.valueExpression);if(!e.fields[r]){const i=e.indexCount++;e.fields[r]={...t,name:r,fieldIndex:i};}return {fieldIndex:e.fields[r].fieldIndex}}case"label-expression":{const r=v(JSON.stringify(t.label));if(!e.fields[r]){const i=e.indexCount++;e.fields[r]={...t,name:r,fieldIndex:i};}return {fieldIndex:e.fields[r].fieldIndex}}case"field":{const r=t.field;return "aggregate"===t.target&&e.fields[r]||(e.fields[r]={...t,name:r}),{field:r}}case"statistic":return e.fields[t.name]={...t},{field:t.name}}}function R(e,t=!1){const r=new Array;let i=0;return r.push(A(e,i++,t)),r}function U(e,t,r,i,n,s=!1){const l=j$1(e,{type:"label-expression",target:r,context:{mesh:!0},resultType:"string",label:{labelExpression:t.labelExpression,labelExpressionInfo:t.labelExpressionInfo?{expression:t.labelExpressionInfo.expression}:null,symbol:!!t.symbol,where:t.where}}),{fieldIndex:o}=l;return {...o$3(t,n,s),fieldIndex:o,target:r,index:i}}function B(e,r,i){const n="featureReduction"in r&&r.featureReduction;if(!n)return {fields:[],labels:[],matcher:void 0,rendererOverride:void 0};const s="aggregate",o=[];let a=null,u=e$3(r.geometryType),d=[],p=null;if(n)switch(n.type){case"selection":return x.error(new s$5(h,"Mapview does not support `selection` reduction type",n)),{fields:[],labels:[],matcher:void 0,rendererOverride:void 0};case"cluster":case"binning":if(o.push(...n.fields??[]),"cluster"===n.type?u="esriGeometryPoint":"binning"===n.type&&(u="esriGeometryPolygon"),n.renderer&&!n.renderer.authoringInfo?.isAutoGenerated){if("cluster"===n.type){const{renderer:e}=f$3(n.renderer,n,null);p=e;}else p=n.renderer;const t=T(n.renderer,n);a=_(e,s,n.renderer,t,i),d=n&&n.labelsVisible&&n.labelingInfo||[];}else if("cluster"===n.type){if(p=c$4(o,r.renderer,n,null,!0),n.symbol){const e=T(p,n);a={type:"simple",symbol:o$3(n.symbol,e,i),symbologyType:e.symbologyType};}d=n&&n.labelsVisible&&n.labelingInfo||[];}}k$1(e,o);return {labels:c$5(d,"binning"===n.type?"esriGeometryPolygon":u),matcher:a,fields:o,rendererOverride:p}}function A(e$1,r,i=!1){const n={indexCount:0,fields:{}},s="featureReduction"in e$1?e$1.featureReduction??void 0:void 0,a=s?"aggregate":"feature";if("sublayers"in e$1){const r={type:"subtype",subtypeField:e$1.subtypeField,renderers:{},symbologyType:S$2.DEFAULT},s={type:"subtype",mapping:{},target:"feature",subtypeField:e$1.subtypeField},l={type:"subtype",classes:{}},u={type:"symbol",target:"feature",aggregateFields:[],attributes:n,storage:s,mesh:{matcher:r,aggregateMatcher:null,labels:l,sortKey:null}},f=new Set;let p=0;for(const{renderer:c,subtypeCode:y,labelingInfo:m,labelsVisible:g}of e$1.sublayers){let e$1=0;"visualVariables"in c&&c.visualVariables&&(c.visualVariables.some((e=>"rotation"!==e.type))&&x.warnOnce("SubtypeGroupLayer currently only supports rotation visualVariables. All other visualVariable types will be ignored."),e$1=e(c.visualVariables.filter((e=>"size"!==e.type))));const u={symbologyType:S$2.DEFAULT,vvFlags:e$1,maxVVSize:0},b=_(n,a,c,u,i),v=C(n,a,c),T=g&&m;if("dictionary"===b.type)throw new s$5(h,"Dictionary renderer is not supported in subtype layers");if("subtype"===b.type)throw new s$5(h,"Nested subtype renderers is not supported");if(null!=v&&"subtype"===v.type)throw new s$5(h,"Nested subtype storage is not supported");if(null!=v&&null!=v.attributeMapping)throw new s$5(h,"Non-visual-variable attributes are not supported in subtype layers");if("heatmap"===b.type)throw new s$5(h,"Heatmaps are not supported in subtype layers");if("pie-chart"===b.type)throw new s$5(h,"Pie-charts are not supported in subtype layers");if(f.has(y))throw new s$5(h,"Subtype codes for sublayers must be unique");f.add(y),r.renderers[y]=b,s.mapping[y]=v,T&&(l.classes[y]=T.map((e=>U(n,e,"feature",p++,u,i))));}return u}if("heatmap"===e$1.renderer?.type&&"raster"===g()){const{radius:t,fieldOffset:r,field:i}=e$1.renderer;return {type:"heatmap",aggregateFields:[],attributes:n,target:a,storage:null,mesh:{radius:t,fieldOffset:r,field:M$1(n,{target:a,field:i,resultType:"numeric"}).field}}}const u=B(n,e$1,i),f=e$3(e$1.geometryType),p=u.rendererOverride??e$1.renderer,y=T(p,s),m=_(n,a,p,y,i),g$1=C(n,a,p),v=P(n,e$1.orderBy,e$1.renderer,s),S=e$1.labelsVisible&&e$1.labelingInfo||[],w=c$5(S,f);let E=0;const F=[...w.map((e=>U(n,e,"feature",E++,y,i))),...u.labels.map((e=>U(n,e,"aggregate",E++,y,i)))];return {type:"symbol",target:a,attributes:n,aggregateFields:u.fields,storage:g$1,mesh:{matcher:m,labels:{type:"simple",classes:F},aggregateMatcher:u.matcher,sortKey:v}}}function D(e){return "heatmap"===e.renderer?.type&&"raster"===g()?{type:"heatmap"}:{type:"symbol"}}function P(e,r,i,n){if(null!=n)return null;if(null!=r&&r.length){r.length>1&&x.warn(`Layer rendering currently only supports ordering by 1 orderByInfo, but found ${r.length}. All but the first will be discarded`);const i=r[0],n="ascending"===i.order?"asc":"desc";if(i.field)return {field:i.field,order:n};if(i.valueExpression){return {fieldIndex:j$1(e,{type:"expression",target:"feature",valueExpression:i.valueExpression,resultType:"numeric"}).fieldIndex,order:n}}return x.error(new s$5(h,"Expected to find a field or valueExpression for OrderByInfo",i)),null}if(null!=i&&"unique-value"===i.type&&i.orderByClassesEnabled){return {byRenderer:!0,order:"asc"}}return null}function k$1(e,t){const r={mesh:!0,storage:!0};for(const i of t){const{name:t,onStatisticField:n,onStatisticExpression:s,statisticType:l}=i;let o,a;const u="numeric",d="feature";if(s){a=j$1(e,{type:"expression",target:d,valueExpression:s.expression,resultType:u}).fieldIndex;}else {o=j$1(e,{type:"field",target:d,field:n,resultType:u}).field;}j$1(e,{type:"statistic",target:"aggregate",name:t,context:r,inField:o,inFieldIndex:a,statisticType:l});}}function C(e,t,r){let i;switch(r.type){case"simple":case"class-breaks":case"unique-value":case"dictionary":i={visualVariables:!0,attributes:null};break;default:i=c$6(r).getStorageSpec(r);}return J(e,t,i,r)}function J(e,t,r,i){if(null==r)return null;const{visualVariables:n,attributes:s}=r;let l=null;n&&"visualVariables"in i&&(l=q(e,t,i.visualVariables));const o=null!=l?4:0;let a=null;return null!=s&&(a=s.map(((r,i)=>{const{field:n,fieldIndex:s}=M$1(e,{valueExpression:r.valueExpression,field:r.field,resultType:"numeric",target:t});return {binding:i+o,field:n,fieldIndex:s}}))),{type:"simple",target:t,attributeMapping:a,vvMapping:l}}function q(t,r,i$1){if(!i$1||!i$1.length)return [];const n={storage:!0},s="numeric";return i(i$1).map((e=>{const i=V$1(e.type),{field:l,fieldIndex:o}=M$1(t,{target:r,valueExpression:e.valueExpression,field:e.field,context:n,resultType:s});switch(e.type){case"size":return "$view.scale"===e.valueExpression?null:{type:"size",binding:i,field:l,fieldIndex:o,normalizationField:M$1(t,{target:r,field:e.normalizationField,context:n,resultType:s}).field,valueRepresentation:e.valueRepresentation??null};case"color":return {type:"color",binding:i,field:l,fieldIndex:o,normalizationField:M$1(t,{target:r,field:e.normalizationField,context:n,resultType:s}).field};case"opacity":return {type:"opacity",binding:i,field:l,fieldIndex:o,normalizationField:M$1(t,{target:r,field:e.normalizationField,context:n,resultType:s}).field};case"rotation":return {type:"rotation",binding:i,field:l,fieldIndex:o}}})).filter(R$1)}function _(e,t,r,i,n=!1){const s=e??{indexCount:0,fields:{}};switch(r.type){case"simple":case"dot-density":return G(s,r,i,n);case"class-breaks":return $(s,t,r,i,n);case"unique-value":return K(s,t,r,i,n);case"dictionary":return Y(s,r,i,n);case"heatmap":return Q(s,r,i,n);case"pie-chart":return H(s,r,i,n)}}function G(e,t,r,i=!1){const n=t.getSymbols(),s=n.length?n[0]:null;return {type:"simple",symbol:o$3(s,r,i),symbologyType:r.symbologyType}}function H(e,t,r,i=!1){const n=t.getSymbols(),s=n[0],l=n.length>1?n[1]:null;return {type:"pie-chart",markerSymbol:o$3(s,r,i),fillSymbol:o$3(l,r,i),symbologyType:r.symbologyType}}function $(e,t,r,i,n=!1){const s={mesh:!0,use:"renderer.field"},l=r.backgroundFillSymbol,{field:o,fieldIndex:a}=M$1(e,{target:t,field:r.field,valueExpression:r.valueExpression,resultType:"numeric",context:s}),u=r.normalizationType,d="log"===u?"esriNormalizeByLog":"percent-of-total"===u?"esriNormalizeByPercentOfTotal":"field"===u?"esriNormalizeByField":null,p=r.classBreakInfos.map((e=>({symbol:o$3(e.symbol,i,n),min:e.minValue,max:e.maxValue}))).sort(((e,t)=>e.min-t.min));return {type:"interval",attributes:e.fields,field:o,fieldIndex:a,backgroundFillSymbol:o$3(l,i,n),defaultSymbol:o$3(r.defaultSymbol,i,n),intervals:p,normalizationField:r.normalizationField,normalizationTotal:r.normalizationTotal,normalizationType:d,isMaxInclusive:r.isMaxInclusive,symbologyType:i.symbologyType}}function K(e,r,i,n,s=!1){const l=[],o=i.backgroundFillSymbol,a={target:r,context:{mesh:!0},resultType:"string"};if(i.field&&"string"!=typeof i.field)throw new s$5(h,"Expected renderer.field to be a string",i);const{field:u,fieldIndex:d}=M$1(e,{...a,field:i.field,valueExpression:i.valueExpression});for(const t of i.uniqueValueInfos??[])l.push({value:""+t.value,symbol:o$3(t.symbol,n,s)});return {type:"map",attributes:e.fields,field:u,fieldIndex:d,field2:M$1(e,{...a,field:i.field2}).field,field3:M$1(e,{...a,field:i.field3}).field,fieldDelimiter:i.fieldDelimiter??void 0,backgroundFillSymbol:o$3(o,n),defaultSymbol:o$3(i.defaultSymbol,n),map:l,symbologyType:n.symbologyType}}function Y(e,t,r,i=!1){return {type:"dictionary",config:t.config,fieldMap:t.fieldMap,scaleExpression:t.scaleExpression,url:t.url,symbolOptions:r,symbologyType:r.symbologyType}}function Q(e,t,r,i=!1){const n=t.getSymbols(),s=n.length?n[0]:null;return {type:"heatmap",symbol:o$3(s,r,i),symbologyType:r.symbologyType}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const j=s$4.getLogger("esri.views.2d.engine.webgl.AttributeStoreView"),k=n$6(l$3,j);class M{constructor(t,e,i){this._texture=null,this._lastTexture=null,this._fbos={},this.texelSize=4;const{buffer:s,pixelType:r,textureOnly:a}=t,n=W(r);this.shared=i,this.pixelType=r,this.size=e,this.textureOnly=a,a||(this.data=new n(s)),this._resetRange();}destroy(){n$7(this._texture,(t=>t.dispose()));for(const t in this._fbos)n$7(this._fbos[t],(e=>{"0"===t&&e.detachColorTexture(),e.dispose();})),this._fbos[t]=null;this._texture=null;}get _textureDesc(){const t=new e$4;return t.wrapMode=D$1.CLAMP_TO_EDGE,t.samplingMode=L$2.NEAREST,t.dataType=this.pixelType,t.width=this.size,t.height=this.size,t}setData(t,e,i){const s=f$4(t),r=this.data,a=s*this.texelSize+e;!r||a>=r.length||(r[a]=i,this.dirtyStart=Math.min(this.dirtyStart,s),this.dirtyEnd=Math.max(this.dirtyEnd,s));}getData(t,e){if(null==this.data)return null;const i=f$4(t)*this.texelSize+e;return !this.data||i>=this.data.length?null:this.data[i]}getTexture(t){return this._texture??this._initTexture(t)}getFBO(t,e=0){if(!this._fbos[e]){const i=0===e?this.getTexture(t):this._textureDesc;this._fbos[e]=new x$3(t,i);}return this._fbos[e]}get locked(){return !(this.pixelType!==U$1.UNSIGNED_BYTE||!this.shared||this.textureOnly||!has("esri-atomics")||!this.data)&&1===Atomics.load(this.data,0)}get hasDirty(){const t=this.dirtyStart;return this.dirtyEnd>=t}updateTexture(e,i){if(!this.locked){try{const i=this.dirtyStart,s=this.dirtyEnd;if(!this.hasDirty)return;this._resetRange();const r=this.data.buffer,a=this.getTexture(e),n=4,d=(i-i%this.size)/this.size,h=(s-s%this.size)/this.size,u=d,o=this.size,l=h,p=d*this.size*n,x=(o+l*this.size)*n-p,_=W(this.pixelType),g=new _(r,p*_.BYTES_PER_ELEMENT,x),c=this.size,f=l-u+1;if(f>this.size)return void j.error(new s$5("mapview-webgl","Out-of-bounds index when updating AttributeData"));a.updateData(0,0,u,c,f,g);}catch(s){}i();}}update(t){const{data:e,start:i,end:s}=t;if(null!=e&&null!=this.data){const s=this.data,r=i*this.texelSize;for(let i=0;i<e.length;i++){const a=1<<i%this.texelSize;t.layout&a&&(s[r+i]=e[i]);}}this.dirtyStart=Math.min(this.dirtyStart,i),this.dirtyEnd=Math.max(this.dirtyEnd,s);}resize(t,e){const i=this.size;if(this.size=e,this.textureOnly)return void(i!==this.size&&(this._lastTexture=this._texture,this._texture=null));const s=W(this.pixelType);this.destroy(),this.data=new s(t.buffer);}_resetRange(){this.dirtyStart=2147483647,this.dirtyEnd=0;}_initTexture(t){const e=new T$1(t,this._textureDesc,this.data??void 0);if(null!=this._lastTexture&&this._fbos[0]){const i=this._lastTexture.descriptor.width,s=this._lastTexture.descriptor.height,r=this._lastTexture.descriptor.dataType,a=this._lastTexture.descriptor.pixelFormat,n=this.getFBO(t),d=K$1(r),h=new(W(r))(new ArrayBuffer(i*s*d*this.texelSize)),u=t.getBoundFramebufferObject(),{x:o,y:l,width:p,height:x}=t.getViewport();t.bindFramebuffer(n),n.readPixels(0,0,i,s,a,r,h),e.updateData(0,0,0,2*i,s/2,h),t.setViewport(o,l,p,x),t.bindFramebuffer(u);}return this.destroy(),this._texture=e,this._texture}}class O{constructor(t){this._onUpdate=t,this._initialized=!1,this._forceNextUpload=!1,this._locked=!1;}initialize(t){const{blocks:e,shared:s,size:r}=t;if(this.shared=s,this.size=r,k("Initializing AttributeStoreView",t),null==this._data)this._data=s$6(e,(t=>new M(t,r,s)));else for(let i=0;i<this._data.length;i++){const t=this._data[i],a=e[i];null!=a&&(null==t?this._data[i]=new M(a,r,s):t.resize(a,r));}this._initialized=!0;}destroy(){n$7(this._data,(t=>s$6(t,(t=>t.destroy())))),n$7(this._defaultTexture,(t=>t.dispose()));}isEmpty(){return null==this._data}isUpdating(){const t=null!=this._pendingAttributeUpdate,e=t;return has("esri-2d-log-updating")&&console.log(`Updating AttributeStoreView ${e}\n  -> hasPendingUpdate ${t}`),e}getBlock(t){if(null==this._data)return null;return this._data[t]}setLabelMinZoom(t,e){this.setData(t,0,1,e);}getLabelMinZoom(t){return this.getData(t,0,1,255)}getFilterFlags(t){return this.getData(t,0,0,0)}getVVSize(t){return this.getData(t,S$3,0,0)}getData(t,e,i,s){if(!this._data)return 0;const r=this._data[e];if(null==r)return 0;const a=r.getData(t,i);return null!=a?a:s}setData(t,e,i,s){this._data[e].setData(t,i,s);}lockTextureUpload(){this._locked=!0;}unlockTextureUpload(){this._locked=!1;}forceTextureUpload(){this._forceNextUpload=!0;}async requestUpdate(e){if(this._pendingAttributeUpdate)return void j.error(new s$5("mapview-webgl","Tried to update attribute data with a pending update"));const i=C$1();return k("AttributeStoreView Update Requested",e),this._pendingAttributeUpdate={data:e,resolver:i},this._onUpdate(),i.promise}update(){if(this._initialized&&null!=this._pendingAttributeUpdate){has("esri-2d-update-debug")&&console.debug("AttributeStoreView::update");const{data:t,resolver:e}=this._pendingAttributeUpdate,i=this._data;for(let r=0;r<t.blocks.length;r++){const e=t.blocks[r],a=i[r];n$7(a,(t=>n$7(e,(e=>{k(`Updating block ${r}`,e),t.update(e);}))));}this._pendingAttributeUpdate=null,e(),this._onUpdate();}}bindTextures(t,e=!0){const i=this._getDefaultTexture(t);if(!this._initialized)return t.bindTexture(i,E$1),void(e&&(t.bindTexture(i,F$1),t.bindTexture(i,G$1),t.bindTexture(i,H$1),t.bindTexture(i,I$1),t.bindTexture(i,J$1),t.bindTexture(i,K$2)));const s=this._data;this._locked&&!this._forceNextUpload||(a$4(s,(e=>e.updateTexture(t,(()=>this._onUpdate())))),this._forceNextUpload=!1),t.bindTexture(s[P$1]?.getTexture(t)??i,E$1),e&&(t.bindTexture(s[R$2]?.getTexture(t)??i,K$2),t.bindTexture(s[Q$1]?.getTexture(t)??i,F$1),t.bindTexture(s[S$3]?.getTexture(t)??i,G$1),t.bindTexture(s[U$2]?.getTexture(t)??i,H$1),t.bindTexture(s[I$1]?.getTexture(t)??i,I$1),t.bindTexture(s[J$1]?.getTexture(t)??i,J$1));}_getDefaultTexture(t){if(null==this._defaultTexture){const e=new e$4;e.wrapMode=D$1.CLAMP_TO_EDGE,e.samplingMode=L$2.NEAREST,e.width=1,e.height=1,this._defaultTexture=new T$1(t,e,new Uint8Array(4));}return this._defaultTexture}}

export { O, T, _, a$2 as a, n as b, c$2 as c, h$1 as d, f$2 as f, g$2 as g, h$3 as h, m$2 as m, n$1 as n, p$2 as p, r, u$2 as u, w, x$2 as x };

//# sourceMappingURL=AttributeStoreView-356296ba.js.map