import { e as e$3 } from './vec32-71093771.js';
import { gy as s$2, mp as U, mq as h, mr as l$4, cd as tt, j as s$3, ms as nt, O as j, dj as _, aF as f$4, f as s$4, ic as n$4, ce as ot, s as s$5, dY as r$4, hH as c$3, mt as i$4, mu as b, hI as f$5, gj as _$1, kt as r$6, ig as P, mv as p$1, mw as t$7 } from './hub-compass-map-f4225e12.js';
import { e as e$4, r as r$5 } from './mat4f64-f2ca62fb.js';
import { D, L, C, E as E$2 } from './enums-f1bebe6f.js';
import { x as x$1 } from './quat-d9293bf7.js';
import { e as e$5 } from './quatf64-581a0ed6.js';
import { B, g, d as d$1, i as i$3, c as c$2, u as u$4, x, L as L$1, O, E as E$1, F, w, q as q$1, A as A$1, V } from './BufferView-c6404bd8.js';
import { r as r$3, n as n$5, o as o$6, t as t$6 } from './resourceUtils-2b12439d.js';
import { y, i as i$5 } from './Indices-051f6bec.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function t$5(t,r,f){if(t.count!==r.count)return void e$3.error("source and destination buffers need to have the same number of elements");const n=t.count,o=f[0],u=f[1],s=f[2],d=f[3],a=f[4],i=f[5],c=f[6],p=f[7],l=f[8],m=f[9],y=f[10],B=f[11],h=f[12],S=f[13],b=f[14],g=f[15],M=t.typedBuffer,v=t.typedBufferStride,_=r.typedBuffer,j=r.typedBufferStride;for(let e=0;e<n;e++){const t=e*v,r=e*j,f=_[r],n=_[r+1],w=_[r+2],z=_[r+3];M[t]=o*f+a*n+l*w+h*z,M[t+1]=u*f+i*n+m*w+S*z,M[t+2]=s*f+c*n+y*w+b*z,M[t+3]=d*f+p*n+B*w+g*z;}}function r$2(e,t,r){f$3(e.typedBuffer,t.typedBuffer,r,e.typedBufferStride,t.typedBufferStride);}function f$3(t,r,f,n=4,o=n){if(t.length/n!=r.length/o)return void e$3.error("source and destination buffers need to have the same number of elements");const u=t.length/n,s=f[0],d=f[1],a=f[2],i=f[3],c=f[4],p=f[5],l=f[6],m=f[7],y=f[8];let B=0,h=0;for(let e=0;e<u;e++){const e=r[B],f=r[B+1],u=r[B+2],S=r[B+3];t[h]=s*e+i*f+l*u,t[h+1]=d*e+c*f+m*u,t[h+2]=a*e+p*f+y*u,t[h+3]=S,B+=o,h+=n;}}function n$3(e,t){const r=Math.min(e.count,t.count),f=e.typedBuffer,n=e.typedBufferStride,o=t.typedBuffer,u=t.typedBufferStride;for(let s=0;s<r;s++){const e=s*n,t=s*u,r=o[t],d=o[t+1],a=o[t+2],i=r*r+d*d+a*a;if(i>0){const t=1/Math.sqrt(i);f[e]=t*r,f[e+1]=t*d,f[e+2]=t*a;}}}function o$5(e,t,r){u$3(e.typedBuffer,t,r,e.typedBufferStride);}function u$3(e,t,r,f=4){const n=Math.min(e.length/f,t.count),o=t.typedBuffer,u=t.typedBufferStride;let s=0,d=0;for(let a=0;a<n;a++)e[d]=r*o[s],e[d+1]=r*o[s+1],e[d+2]=r*o[s+2],e[d+3]=r*o[s+3],s+=u,d+=f;}const s$1=Object.freeze(Object.defineProperty({__proto__:null,normalize:n$3,scale:u$3,scaleView:o$5,transformMat3:f$3,transformMat3View:r$2,transformMat4:t$5},Symbol.toStringTag,{value:"Module"}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function o$4(e,t){n$2(e.typedBuffer,t.typedBuffer,e.typedBufferStride,t.typedBufferStride);}function n$2(o,n,l=2,u=l){const i=n.length/2;let a=0,d=0;if(s$2(n)||U(n)){for(let e=0;e<i;++e)o[a]=n[d],o[a+1]=n[d+1],a+=l,d+=u;return}const c=h(n);if(l$4(n))for(let e=0;e<i;++e)o[a]=Math.max(n[d]/c,-1),o[a+1]=Math.max(n[d+1]/c,-1),a+=l,d+=u;else for(let e=0;e<i;++e)o[a]=n[d]/c,o[a+1]=n[d+1]/c,a+=l,d+=u;}function l$3(e,t,r,f){const o=e.typedBuffer,n=e.typedBufferStride,l=f?.count??e.count;let u=(f?.dstIndex??0)*n;for(let i=0;i<l;++i)o[u]=t,o[u+1]=r,u+=n;}const u$2=Object.freeze(Object.defineProperty({__proto__:null,fill:l$3,normalizeIntegerBuffer:n$2,normalizeIntegerBufferView:o$4},Symbol.toStringTag,{value:"Module"}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function e$2(e,f){t$4(e.typedBuffer,f.typedBuffer,e.typedBufferStride,f.typedBufferStride);}function t$4(e,t,f=3,o=f){const r=t.length/o;let n=0,u=0;for(let c=0;c<r;++c)e[n]=t[u],e[n+1]=t[u+1],e[n+2]=t[u+2],n+=f,u+=o;}function f$2(e,t,f,o,r){const n=e.typedBuffer,u=e.typedBufferStride,c=r?.count??e.count;let d=(r?.dstIndex??0)*u;for(let l=0;l<c;++l)n[d]=t,n[d+1]=f,n[d+2]=o,d+=u;}const o$3=Object.freeze(Object.defineProperty({__proto__:null,copy:t$4,copyView:e$2,fill:f$2},Symbol.toStringTag,{value:"Module"}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function e$1(e,f){t$3(e.typedBuffer,f,e.typedBufferStride);}function t$3(e,t,f=4){const o=t.typedBuffer,r=t.typedBufferStride,n=t.count;let u=0,c=0;for(let d=0;d<n;++d)e[u]=o[c],e[u+1]=o[c+1],e[u+2]=o[c+2],e[u+3]=o[c+3],u+=f,c+=r;}function f$1(e,t,f,o,r,n){const u=e.typedBuffer,c=e.typedBufferStride,d=n?.count??e.count;let l=(n?.dstIndex??0)*c;for(let p=0;p<d;++p)u[l]=t,u[l+1]=f,u[l+2]=o,u[l+3]=r,l+=c;}const o$2=Object.freeze(Object.defineProperty({__proto__:null,copy:t$3,copyView:e$1,fill:f$1},Symbol.toStringTag,{value:"Module"}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class n$1{constructor(r){this._streamDataRequester=r;}async loadJSON(r,e){return this._load("json",r,e)}async loadBinary(r,e){return tt(r)?(s$3(e),nt(r)):this._load("binary",r,e)}async loadImage(r,e){return this._load("image",r,e)}async _load(a,o,i){if(null==this._streamDataRequester)return (await j(o,{responseType:m$1[a]})).data;const n=await _(this._streamDataRequester.request(o,a,i));if(!0===n.ok)return n.value;throw f$4(n.error),new s$4("",`Request for resource failed: ${n.error}`)}}const m$1={image:"image",binary:"array-buffer",json:"json","image+type":void 0};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function r$1(e={}){return {color:[1,1,1],opacity:1,alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1,castShadows:!0,receiveShadows:!0,receiveAmbientOcclustion:!0,textureColor:null,textureNormal:null,textureOcclusion:null,textureEmissive:null,textureMetallicRoughness:null,colorTextureTransform:null,normalTextureTransform:null,occlusionTextureTransform:null,emissiveTextureTransform:null,metallicRoughnessTextureTransform:null,emissiveFactor:[0,0,0],metallicFactor:1,roughnessFactor:1,colorMixMode:"multiply",...e}}function l$2(r,l={}){return {data:r,parameters:{wrap:{s:D.REPEAT,t:D.REPEAT,...l.wrap},noUnpackFlip:!0,mipmap:!1,...l}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function e(e,t){const o=e.count;t||(t=new e.TypedArrayConstructor(o));for(let r=0;r<o;r++)t[r]=e.get(r);return t}const t$2=Object.freeze(Object.defineProperty({__proto__:null,makeDense:e},Symbol.toStringTag,{value:"Module"}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class t$1{constructor(t){this._data=t,this._offset4=0,this._dataUint32=new Uint32Array(this._data,0,Math.floor(this._data.byteLength/4));}readUint32(){const t=this._offset4;return this._offset4+=1,this._dataUint32[t]}readUint8Array(t){const s=4*this._offset4;return this._offset4+=t/4,new Uint8Array(this._data,s,t)}remainingBytes(){return this._data.byteLength-4*this._offset4}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
var A,E;!function(A){A.SCALAR="SCALAR",A.VEC2="VEC2",A.VEC3="VEC3",A.VEC4="VEC4",A.MAT2="MAT2",A.MAT3="MAT3",A.MAT4="MAT4";}(A||(A={})),function(A){A[A.ARRAY_BUFFER=34962]="ARRAY_BUFFER",A[A.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER";}(E||(E={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const t={baseColorFactor:[1,1,1,1],metallicFactor:1,roughnessFactor:1},a={pbrMetallicRoughness:t,emissiveFactor:[0,0,0],alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1},l$1={ESRI_externalColorMixMode:"tint"},i$2=(e={})=>{const o={...t,...e.pbrMetallicRoughness},r=s({...l$1,...e.extras});return {...a,...e,pbrMetallicRoughness:o,extras:r}};function s(o){switch(o.ESRI_externalColorMixMode){case"multiply":case"tint":case"ignore":case"replace":break;default:n$4(o.ESRI_externalColorMixMode),o.ESRI_externalColorMixMode="tint";}return o}const n={magFilter:L.LINEAR,minFilter:L.LINEAR_MIPMAP_LINEAR,wrapS:D.REPEAT,wrapT:D.REPEAT},c$1=e=>({...n,...e});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function r(r){let e,t;return r.replace(/^(.*\/)?([^/]*)$/,((r,a,i)=>(e=a||"",t=i||"",""))),{dirPart:e,filePart:t}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const K={MAGIC:1179937895,CHUNK_TYPE_JSON:1313821514,CHUNK_TYPE_BIN:5130562,MIN_HEADER_LENGTH:20};class Y{constructor(t,r$1,o,n){if(this._context=t,this.uri=r$1,this.json=o,this._glbBuffer=n,this._bufferLoaders=new Map,this._textureLoaders=new Map,this._textureCache=new Map,this._materialCache=new Map,this._nodeParentMap=new Map,this._nodeTransformCache=new Map,this._supportedExtensions=["KHR_texture_basisu"],this._baseUri=r(this.uri).dirPart,this._checkVersionSupported(),this._checkRequiredExtensionsSupported(),null==o.scenes)throw new s$4("gltf-loader-unsupported-feature","Scenes must be defined.");if(null==o.meshes)throw new s$4("gltf-loader-unsupported-feature","Meshes must be defined");if(null==o.nodes)throw new s$4("gltf-loader-unsupported-feature","Nodes must be defined.");this._computeNodeParents();}static async load(e,t,r){if(tt(t)){const r=ot(t);if(r&&"model/gltf-binary"!==r.mediaType)try{const o=JSON.parse(r.isBase64?atob(r.data):r.data);return new Y(e,t,o)}catch{}const o=nt(t);if(Y._isGLBData(o))return this._fromGLBData(e,t,o)}if(t.endsWith(".gltf")){const o=await e.loadJSON(t,r);return new Y(e,t,o)}const o=await e.loadBinary(t,r);if(Y._isGLBData(o))return this._fromGLBData(e,t,o);const i=await e.loadJSON(t,r);return new Y(e,t,i)}static _isGLBData(e){if(null==e)return !1;const t=new t$1(e);return t.remainingBytes()>=4&&t.readUint32()===K.MAGIC}static async _fromGLBData(e,t,r){const o=await Y._parseGLBData(r);return new Y(e,t,o.json,o.binaryData)}static async _parseGLBData(r){const o=new t$1(r);if(o.remainingBytes()<12)throw new s$4("gltf-loader-error","GLB binary data is insufficiently large.");const n=o.readUint32(),s=o.readUint32(),a=o.readUint32();if(n!==K.MAGIC)throw new s$4("gltf-loader-error","Magic first 4 bytes do not fit to expected GLB value.");if(r.byteLength<a)throw new s$4("gltf-loader-error","GLB binary data is smaller than header specifies.");if(2!==s)throw new s$4("gltf-loader-unsupported-feature","An unsupported GLB container version was detected. Only version 2 is supported.");let i,u,f=0;for(;o.remainingBytes()>=8;){const r=o.readUint32(),n=o.readUint32();if(0===f){if(n!==K.CHUNK_TYPE_JSON)throw new s$4("gltf-loader-error","First GLB chunk must be JSON.");if(r<0)throw new s$4("gltf-loader-error","No JSON data found.");i=await r$3(o.readUint8Array(r));}else if(1===f){if(n!==K.CHUNK_TYPE_BIN)throw new s$4("gltf-loader-unsupported-feature","Second GLB chunk expected to be BIN.");u=o.readUint8Array(r);}else s$5.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] More than 2 GLB chunks detected. Skipping.");f+=1;}if(!i)throw new s$4("gltf-loader-error","No GLB JSON chunk detected.");return {json:i,binaryData:u}}async getBuffer(t,r){const o=this.json.buffers[t];if(null==o.uri){if(null==this._glbBuffer)throw new s$4("gltf-loader-error","GLB buffer not present");return this._glbBuffer}const n=await this._getBufferLoader(t,r);if(n.byteLength!==o.byteLength)throw new s$4("gltf-loader-error","Buffer byte lengths should match.");return n}async _getBufferLoader(e,t){const r=this._bufferLoaders.get(e);if(r)return r;const o=this.json.buffers[e].uri,n=this._context.loadBinary(this._resolveUri(o),t).then((e=>new Uint8Array(e)));return this._bufferLoaders.set(e,n),n}async getAccessor(t,r){if(!this.json.accessors)throw new s$4("gltf-loader-unsupported-feature","Accessors missing.");const o=this.json.accessors[t];if(null==o?.bufferView)throw new s$4("gltf-loader-unsupported-feature","Some accessor does not specify a bufferView.");if(o.type in[A.MAT2,A.MAT3,A.MAT4])throw new s$4("gltf-loader-unsupported-feature",`AttributeType ${o.type} is not supported`);const n=this.json.bufferViews[o.bufferView],s=await this.getBuffer(n.buffer,r),a=X[o.type],i=W[o.componentType],u=a*i,f=n.byteStride||u;return {raw:s.buffer,byteStride:f,byteOffset:s.byteOffset+(n.byteOffset||0)+(o.byteOffset||0),entryCount:o.count,isDenselyPacked:f===u,componentCount:a,componentByteSize:i,componentType:o.componentType,min:o.min,max:o.max,normalized:!!o.normalized}}async getIndexData(e$1,t){if(null==e$1.indices)return;const r=await this.getAccessor(e$1.indices,t);if(r.isDenselyPacked)switch(r.componentType){case C.UNSIGNED_BYTE:return new Uint8Array(r.raw,r.byteOffset,r.entryCount);case C.UNSIGNED_SHORT:return new Uint16Array(r.raw,r.byteOffset,r.entryCount);case C.UNSIGNED_INT:return new Uint32Array(r.raw,r.byteOffset,r.entryCount)}else switch(r.componentType){case C.UNSIGNED_BYTE:return e(this._wrapAccessor(d$1,r));case C.UNSIGNED_SHORT:return e(this._wrapAccessor(g,r));case C.UNSIGNED_INT:return e(this._wrapAccessor(B,r))}}async getPositionData(t,r){if(null==t.attributes.POSITION)throw new s$4("gltf-loader-unsupported-feature","No POSITION vertex data found.");const o=await this.getAccessor(t.attributes.POSITION,r);if(o.componentType!==C.FLOAT)throw new s$4("gltf-loader-unsupported-feature","Expected type FLOAT for POSITION vertex attribute, but found "+C[o.componentType]);if(3!==o.componentCount)throw new s$4("gltf-loader-unsupported-feature","POSITION vertex attribute must have 3 components, but found "+o.componentCount.toFixed());return this._wrapAccessor(i$3,o)}async getNormalData(t,r){if(null==t.attributes.NORMAL)throw new s$4("gltf-loader-error","No NORMAL vertex data found.");const o=await this.getAccessor(t.attributes.NORMAL,r);if(o.componentType!==C.FLOAT)throw new s$4("gltf-loader-unsupported-feature","Expected type FLOAT for NORMAL vertex attribute, but found "+C[o.componentType]);if(3!==o.componentCount)throw new s$4("gltf-loader-unsupported-feature","NORMAL vertex attribute must have 3 components, but found "+o.componentCount.toFixed());return this._wrapAccessor(i$3,o)}async getTangentData(t,r){if(null==t.attributes.TANGENT)throw new s$4("gltf-loader-error","No TANGENT vertex data found.");const o=await this.getAccessor(t.attributes.TANGENT,r);if(o.componentType!==C.FLOAT)throw new s$4("gltf-loader-unsupported-feature","Expected type FLOAT for TANGENT vertex attribute, but found "+C[o.componentType]);if(4!==o.componentCount)throw new s$4("gltf-loader-unsupported-feature","TANGENT vertex attribute must have 4 components, but found "+o.componentCount.toFixed());return new c$2(o.raw,o.byteOffset,o.byteStride,o.byteOffset+o.byteStride*o.entryCount)}async getTextureCoordinates(t,r){if(null==t.attributes.TEXCOORD_0)throw new s$4("gltf-loader-error","No TEXCOORD_0 vertex data found.");const o=await this.getAccessor(t.attributes.TEXCOORD_0,r);if(2!==o.componentCount)throw new s$4("gltf-loader-unsupported-feature","TEXCOORD_0 vertex attribute must have 2 components, but found "+o.componentCount.toFixed());if(o.componentType===C.FLOAT)return this._wrapAccessor(u$4,o);if(!o.normalized)throw new s$4("gltf-loader-unsupported-feature","Integer component types are only supported for a normalized accessor for TEXCOORD_0.");return $(o)}async getVertexColors(t,r){if(null==t.attributes.COLOR_0)throw new s$4("gltf-loader-error","No COLOR_0 vertex data found.");const o=await this.getAccessor(t.attributes.COLOR_0,r);if(4!==o.componentCount&&3!==o.componentCount)throw new s$4("gltf-loader-unsupported-feature","COLOR_0 attribute must have 3 or 4 components, but found "+o.componentCount.toFixed());if(4===o.componentCount){if(o.componentType===C.FLOAT)return this._wrapAccessor(c$2,o);if(o.componentType===C.UNSIGNED_BYTE)return this._wrapAccessor(x,o);if(o.componentType===C.UNSIGNED_SHORT)return this._wrapAccessor(L$1,o)}else if(3===o.componentCount){if(o.componentType===C.FLOAT)return this._wrapAccessor(i$3,o);if(o.componentType===C.UNSIGNED_BYTE)return this._wrapAccessor(O,o);if(o.componentType===C.UNSIGNED_SHORT)return this._wrapAccessor(E$1,o)}throw new s$4("gltf-loader-unsupported-feature","Unsupported component type for COLOR_0 attribute: "+C[o.componentType])}hasPositions(e){return void 0!==e.attributes.POSITION}hasNormals(e){return void 0!==e.attributes.NORMAL}hasVertexColors(e){return void 0!==e.attributes.COLOR_0}hasTextureCoordinates(e){return void 0!==e.attributes.TEXCOORD_0}hasTangents(e){return void 0!==e.attributes.TANGENT}async getMaterial(e,t,r){let o=e.material?this._materialCache.get(e.material):void 0;if(!o){const n=null!=e.material?i$2(this.json.materials[e.material]):i$2(),s=n.pbrMetallicRoughness,a=this.hasVertexColors(e),i=this.getTexture(s.baseColorTexture,t),u=this.getTexture(n.normalTexture,t),f=r?this.getTexture(n.occlusionTexture,t):void 0,c=r?this.getTexture(n.emissiveTexture,t):void 0,d=r?this.getTexture(s.metallicRoughnessTexture,t):void 0,l=null!=e.material?e.material:-1;o={alphaMode:n.alphaMode,alphaCutoff:n.alphaCutoff,color:s.baseColorFactor,doubleSided:!!n.doubleSided,colorTexture:await i,normalTexture:await u,name:n.name,id:l,occlusionTexture:await f,emissiveTexture:await c,emissiveFactor:n.emissiveFactor,metallicFactor:s.metallicFactor,roughnessFactor:s.roughnessFactor,metallicRoughnessTexture:await d,hasVertexColors:a,ESRI_externalColorMixMode:n.extras.ESRI_externalColorMixMode,colorTextureTransform:s?.baseColorTexture?.extensions?.KHR_texture_transform,normalTextureTransform:n.normalTexture?.extensions?.KHR_texture_transform,occlusionTextureTransform:n.occlusionTexture?.extensions?.KHR_texture_transform,emissiveTextureTransform:n.emissiveTexture?.extensions?.KHR_texture_transform,metallicRoughnessTextureTransform:s?.metallicRoughnessTexture?.extensions?.KHR_texture_transform};}return o}async getTexture(t,o){if(!t)return;if(0!==(t.texCoord||0))throw new s$4("gltf-loader-unsupported-feature","Only TEXCOORD with index 0 is supported.");const n=t.index,s=this.json.textures[n],a=c$1(null!=s.sampler?this.json.samplers[s.sampler]:{}),i=this._getTextureSourceId(s),u=this.json.images[i],f=await this._loadTextureImageData(n,s,o);return r$4(this._textureCache,n,(()=>{const t=e=>33071===e||33648===e||10497===e,r=t=>{throw new s$4("gltf-loader-error",`Unexpected TextureSampler WrapMode: ${t}`)};return {data:f,wrapS:t(a.wrapS)?a.wrapS:r(a.wrapS),wrapT:t(a.wrapT)?a.wrapT:r(a.wrapT),minFilter:a.minFilter,name:u.name,id:n}}))}getNodeTransform(e){if(void 0===e)return q;let t=this._nodeTransformCache.get(e);if(!t){const r=this.getNodeTransform(this._getNodeParent(e)),o=this.json.nodes[e];o.matrix?t=c$3(e$4(),r,o.matrix):o.translation||o.rotation||o.scale?(t=r$5(r),o.translation&&i$4(t,t,o.translation),o.rotation&&(z[3]=x$1(z,o.rotation),b(t,t,z[3],z)),o.scale&&f$5(t,t,o.scale)):t=r$5(r),this._nodeTransformCache.set(e,t);}return t}_wrapAccessor(e,t){return new e(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*(t.entryCount-1)+t.componentByteSize*t.componentCount)}_resolveUri(e){return _$1(e,this._baseUri)}_getNodeParent(e){return this._nodeParentMap.get(e)}_checkVersionSupported(){const e=r$6.parse(this.json.asset.version,"glTF");J.validate(e);}_checkRequiredExtensionsSupported(){const t=this.json;if(t.extensionsRequired){if(!t.extensionsRequired.every((e=>this._supportedExtensions.includes(e))))throw new s$4("gltf-loader-unsupported-feature","gltf loader was not able to load unsupported feature. Required extensions: "+t.extensionsRequired.join(", "))}}_computeNodeParents(){this.json.nodes.forEach(((e,t)=>{e.children&&e.children.forEach((e=>{this._nodeParentMap.set(e,t);}));}));}async _loadTextureImageData(e,t,r){const o=this._textureLoaders.get(e);if(o)return o;const n=this._createTextureLoader(t,r);return this._textureLoaders.set(e,n),n}_getTextureSourceId(t){if(void 0!==t.extensions&&null!==t.extensions.KHR_texture_basisu)return t.extensions.KHR_texture_basisu.source;if(null!==t.source)return t.source;throw new s$4("gltf-loader-unsupported-feature","Source is expected to be defined for a texture. It can also be omitted in favour of an KHR_texture_basisu extension tag.")}async _createTextureLoader(t,r){const o=this._getTextureSourceId(t),n=this.json.images[o];if(n.uri){if(n.uri.endsWith(".ktx2")){const e=await this._context.loadBinary(this._resolveUri(n.uri),r);return new n$5(new Uint8Array(e))}return this._context.loadImage(this._resolveUri(n.uri),r)}if(null==n.bufferView)throw new s$4("gltf-loader-unsupported-feature","Image bufferView must be defined.");if(null==n.mimeType)throw new s$4("gltf-loader-unsupported-feature","Image mimeType must be defined.");const s=this.json.bufferViews[n.bufferView],a=await this.getBuffer(s.buffer,r);if(null!=s.byteStride)throw new s$4("gltf-loader-unsupported-feature","byteStride not supported for image buffer");const i=a.byteOffset+(s.byteOffset||0);return o$6(new Uint8Array(a.buffer,i,s.byteLength),n.mimeType)}async getLoadedBuffersSize(){if(this._glbBuffer)return this._glbBuffer.byteLength;const e=await P(Array.from(this._bufferLoaders.values())),t=await P(Array.from(this._textureLoaders.values()));return e.reduce(((e,t)=>e+(t?.byteLength??0)),0)+t.reduce(((e,t)=>e+(t?t$6(t)?t.data.byteLength:t.width*t.height*4:0)),0)}}const q=p$1(e$4(),Math.PI/2),J=new r$6(2,0,"glTF"),z=e$5(),X={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},W={[C.BYTE]:1,[C.UNSIGNED_BYTE]:1,[C.SHORT]:2,[C.UNSIGNED_SHORT]:2,[C.FLOAT]:4,[C.INT]:4,[C.UNSIGNED_INT]:4};function $(e){switch(e.componentType){case C.BYTE:return new V(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case C.UNSIGNED_BYTE:return new A$1(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case C.SHORT:return new q$1(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case C.UNSIGNED_SHORT:return new w(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case C.UNSIGNED_INT:return new F(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case C.FLOAT:return new u$4(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount)}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
let i$1=0;async function l(t,r,a={},l=!0){const m=await Y.load(t,r,a),p="gltf_"+i$1++,T={lods:[],materials:new Map,textures:new Map,meta:u$1(m)},f=!(!m.json.asset.extras||"symbolResource"!==m.json.asset.extras.ESRI_type),x=new Map;await c(m,(async(t,r,s,i)=>{const u=x.get(s)??0;x.set(s,u+1);const c=void 0!==t.mode?t.mode:E$2.TRIANGLES,f=c===E$2.TRIANGLES||c===E$2.TRIANGLE_STRIP||c===E$2.TRIANGLE_FAN?c:null;if(null==f)return void s$5.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] Unsupported primitive mode ("+E$2[c]+"). Skipping primitive.");if(!m.hasPositions(t))return void s$5.getLogger("esri.views.3d.glTF").warn("Skipping primitive without POSITION vertex attribute.");const g=m.getPositionData(t,a),h=m.getMaterial(t,a,l),v=m.hasNormals(t)?m.getNormalData(t,a):null,w=m.hasTangents(t)?m.getTangentData(t,a):null,R=m.hasTextureCoordinates(t)?m.getTextureCoordinates(t,a):null,S=m.hasVertexColors(t)?m.getVertexColors(t,a):null,_=m.getIndexData(t,a),E={transform:r$5(r),attributes:{position:await g,normal:v?await v:null,texCoord0:R?await R:null,color:S?await S:null,tangent:w?await w:null},indices:await _,primitiveType:f,material:d(T,await h,p)};let I=null;null!=T.meta&&null!=T.meta.ESRI_lod&&"screenSpaceRadius"===T.meta.ESRI_lod.metric&&(I=T.meta.ESRI_lod.thresholds[s]),T.lods[s]=T.lods[s]||{parts:[],name:i,lodThreshold:I},T.lods[s].parts[u]=E;}));for(const e of T.lods)e.parts=e.parts.filter((e=>!!e));const g=await m.getLoadedBuffersSize();return {model:T,meta:{isEsriSymbolResource:f,uri:m.uri},customMeta:{},size:g}}function u$1(e){const o=e.json;let t=null;return o.nodes.forEach((e=>{const o=e.extras;null!=o&&(o.ESRI_proxyEllipsoid||o.ESRI_lod)&&(t=o);})),t}async function c(o,t){const r=o.json,s=r.scenes[r.scene||0].nodes,a=s.length>1,n=[];for(const e of s){const o=r.nodes[e];if(n.push(i(e,0)),m(o)&&!a){o.extensions.MSFT_lod.ids.forEach(((e,o)=>i(e,o+1)));}}async function i(s,a){const l=r.nodes[s],u=o.getNodeTransform(s);if(null!=l.weights&&s$5.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] Morph targets are not supported."),null!=l.mesh){const e=r.meshes[l.mesh];for(const o of e.primitives)n.push(t(o,u,a,e.name));}for(const e of l.children||[])n.push(i(e,a));}await Promise.all(n);}function m(e){return e.extensions&&e.extensions.MSFT_lod&&Array.isArray(e.extensions.MSFT_lod.ids)}function d(e,o,s){const a=o=>{const t=`${s}_tex_${o&&o.id}${o&&o.name?"_"+o.name:""}`;if(o&&!e.textures.has(t)){const s=l$2(o.data,{wrap:{s:o.wrapS,t:o.wrapT},mipmap:p.includes(o.minFilter),noUnpackFlip:!0});e.textures.set(t,s);}return t},n=`${s}_mat_${o.id}_${o.name}`;if(!e.materials.has(n)){const r=r$1({color:[o.color[0],o.color[1],o.color[2]],opacity:o.color[3],alphaMode:o.alphaMode,alphaCutoff:o.alphaCutoff,doubleSided:o.doubleSided,colorMixMode:o.ESRI_externalColorMixMode,textureColor:o.colorTexture?a(o.colorTexture):void 0,textureNormal:o.normalTexture?a(o.normalTexture):void 0,textureOcclusion:o.occlusionTexture?a(o.occlusionTexture):void 0,textureEmissive:o.emissiveTexture?a(o.emissiveTexture):void 0,textureMetallicRoughness:o.metallicRoughnessTexture?a(o.metallicRoughnessTexture):void 0,emissiveFactor:[o.emissiveFactor[0],o.emissiveFactor[1],o.emissiveFactor[2]],colorTextureTransform:o.colorTextureTransform,normalTextureTransform:o.normalTextureTransform,occlusionTextureTransform:o.occlusionTextureTransform,emissiveTextureTransform:o.emissiveTextureTransform,metallicRoughnessTextureTransform:o.metallicRoughnessTextureTransform,metallicFactor:o.metallicFactor,roughnessFactor:o.roughnessFactor});e.materials.set(n,r);}return n}const p=[L.LINEAR_MIPMAP_LINEAR,L.LINEAR_MIPMAP_NEAREST];

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function o$1(r,t){switch(t){case E$2.TRIANGLES:return f(r);case E$2.TRIANGLE_STRIP:return u(r);case E$2.TRIANGLE_FAN:return i(r)}}function f(e){return "number"==typeof e?y(e):t$7(e)?new Uint16Array(e):e}function u(r){const t="number"==typeof r?r:r.length;if(t<3)return [];const n=t-2,o=i$5(3*n);if("number"==typeof r){let r=0;for(let t=0;t<n;t+=1)t%2==0?(o[r++]=t,o[r++]=t+1,o[r++]=t+2):(o[r++]=t+1,o[r++]=t,o[r++]=t+2);}else {let t=0;for(let e=0;e<n;e+=1)e%2==0?(o[t++]=r[e],o[t++]=r[e+1],o[t++]=r[e+2]):(o[t++]=r[e+1],o[t++]=r[e],o[t++]=r[e+2]);}return o}function i(r){const t="number"==typeof r?r:r.length;if(t<3)return new Uint16Array(0);const e=t-2,n=e<=65536?new Uint16Array(3*e):new Uint32Array(3*e);if("number"==typeof r){let r=0;for(let t=0;t<e;++t)n[r++]=0,n[r++]=t+1,n[r++]=t+2;return n}const o=r[0];let f=r[1],u=0;for(let i=0;i<e;++i){const t=r[i+2];n[u++]=o,n[u++]=f,n[u++]=t,f=t;}return n}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const o=2.1;

export { o$1 as a, n$3 as b, f$1 as c, o$4 as d, l$3 as e, f$2 as f, o$5 as g, e$1 as h, e$2 as i, f$3 as j, n$2 as k, l, t$4 as m, n$1 as n, o, r$2 as r, t$3 as t, u$3 as u };

//# sourceMappingURL=DefaultMaterial_COLOR_GAMMA-ef833d99.js.map