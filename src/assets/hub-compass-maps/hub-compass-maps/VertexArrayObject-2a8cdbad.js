import { s, n as n$1, i as i$1, c as c$1, a, d, t as t$1, y } from './hub-compass-map-f4225e12.js';
import { u as u$1, E as E$2, e, T, a as a$1, R as R$1, o } from './Texture-52798ec4.js';
import { A as A$1, F, V, C, X, B, G, U, t, n as n$2, M } from './enums-f1bebe6f.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const h$1=s.getLogger("esri.views.webgl.BufferObject");class c{static createIndex(e,t,r){return new c(e,A$1.ELEMENT_ARRAY_BUFFER,t,r)}static createVertex(e,t,r){return new c(e,A$1.ARRAY_BUFFER,t,r)}static createUniform(e,t,r){if(e.type!==n$1.WEBGL2)throw new Error("Uniform buffers are supported in WebGL2 only!");return new c(e,A$1.UNIFORM_BUFFER,t,r)}static createPixelPack(e,t=F.STREAM_READ,r){if(e.type!==n$1.WEBGL2)throw new Error("Pixel pack buffers are supported in WebGL2 only!");const i=new c(e,A$1.PIXEL_PACK_BUFFER,t);return r&&i.setSize(r),i}static createPixelUnpack(e,t=F.STREAM_DRAW,r){if(e.type!==n$1.WEBGL2)throw new Error("Pixel unpack buffers are supported in WebGL2 only!");return new c(e,A$1.PIXEL_UNPACK_BUFFER,t,r)}constructor(e,t,r,i){this._context=e,this.bufferType=t,this.usage=r,this._glName=null,this._size=-1,this._indexType=void 0,e.instanceCounter.increment(V.BufferObject,this),this._glName=this._context.gl.createBuffer(),u$1(this._context.gl),i&&this.setData(i);}get glName(){return this._glName}get size(){return this._size}get indexType(){return this._indexType}get byteLength(){return this.bufferType===A$1.ELEMENT_ARRAY_BUFFER?this._indexType===C.UNSIGNED_INT?4*this._size:2*this._size:this._size}get _isVAOAware(){return this.bufferType===A$1.ELEMENT_ARRAY_BUFFER||this.bufferType===A$1.ARRAY_BUFFER}dispose(){if(this._context?.gl){if(this._glName){this._context.gl.deleteBuffer(this._glName),this._glName=null;}this._context.instanceCounter.decrement(V.BufferObject,this),this._context=i$1(this._context);}else this._glName&&h$1.warn("Leaked WebGL buffer object");}setSize(e,t=null){if(e<=0&&h$1.error("Buffer size needs to be positive!"),this.bufferType===A$1.ELEMENT_ARRAY_BUFFER&&null!=t)switch(this._indexType=t,t){case C.UNSIGNED_SHORT:e*=2;break;case C.UNSIGNED_INT:e*=4;}this._setBufferData(e);}setData(e){if(!e)return;let t=e.byteLength;this.bufferType===A$1.ELEMENT_ARRAY_BUFFER&&(c$1(e)&&(t/=2,this._indexType=C.UNSIGNED_SHORT),a(e)&&(t/=4,this._indexType=C.UNSIGNED_INT)),this._setBufferData(t,e);}_setBufferData(e,t=null){this._size=e;const r=this._context.getBoundVAO();this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this);const i=this._context.gl;null!=t?i.bufferData(this.bufferType,t,this.usage):i.bufferData(this.bufferType,e,this.usage),u$1(i),this._isVAOAware&&this._context.bindVAO(r);}setSubData(e,t,r,i){if(!e)return;(t<0||t*e.BYTES_PER_ELEMENT>=this.byteLength)&&h$1.error("offset is out of range!"),r>=i&&h$1.error("end must be bigger than start!"),(t+(i-r))*e.BYTES_PER_ELEMENT>this.byteLength&&h$1.error("An attempt to write beyond the end of the buffer!");const s=this._context.getBoundVAO();this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this);const a=this._context.gl;if(this._context.type===n$1.WEBGL2)a.bufferSubData(this.bufferType,t*e.BYTES_PER_ELEMENT,e,r,i-r);else {const s=0===r&&i===e.length?e:e.subarray(r,i);a.bufferSubData(this.bufferType,t*e.BYTES_PER_ELEMENT,s);}u$1(a),this._isVAOAware&&this._context.bindVAO(s);}getSubData(e,t=0,r,i){if(this._context.type!==n$1.WEBGL2)return void h$1.error("Get buffer subdata is supported in WebGL2 only!");if(r<0||i<0)return void h$1.error("Problem getting subdata: offset and length were less than zero!");const s=E$1(e)?e.BYTES_PER_ELEMENT:1;if(s*((r??0)+(i??0))>e.byteLength)return void h$1.error("Problem getting subdata: offset and length exceeded destination size!");t+s*(i??0)>this.byteLength&&h$1.warn("Potential problem getting subdata: requested data exceeds buffer size!");const n=this._context.gl;this._context.bindBuffer(this,A$1.COPY_READ_BUFFER),n.getBufferSubData(A$1.COPY_READ_BUFFER,t,e,r,i),this._context.unbindBuffer(A$1.COPY_READ_BUFFER);}async getSubDataAsync(e,t=0,r,i){this._context.type===n$1.WEBGL2?(await this._context.clientWaitAsync(),this.getSubData(e,t,r,i)):h$1.error("Get buffer subdata is supported in WebGL2 only!");}}function E$1(t){return d(t)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class i{constructor(t,i,h=i){this.internalFormat=t,this.width=i,this.height=h,this.multisampled=!1,this.samples=1;}}function h(i){return i.width<=0||i.height<=0||null==i.internalFormat?0:i.width*i.height*E$2(i.internalFormat)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class n{constructor(e$1,i){this._context=e$1,this._descriptor=i,this.type=e.RenderBuffer,this._context.instanceCounter.increment(V.Renderbuffer,this);const n=this._context.gl;this.glName=n.createRenderbuffer(),this._context.bindRenderbuffer(this);const{width:o,height:h,internalFormat:c,multisampled:f}=i;if(f){if(this._context.type!==n$1.WEBGL2)throw new Error("Multisampled renderbuffers are not supported in WebGL1!");n.renderbufferStorageMultisample(n.RENDERBUFFER,this.samples,c,o,h);}else n.renderbufferStorage(n.RENDERBUFFER,c,o,h);}get descriptor(){return this._descriptor}get samples(){const e=this._descriptor.samples,t=this._context.parameters.maxSamples;return e?Math.min(e,t):t}get gpuMemoryUsage(){return h(this._descriptor)}resize(e,t){const r=this._descriptor;if(r.width===e&&r.height===t)return;r.width=e,r.height=t;const s=this._context.gl;if(this._context.bindRenderbuffer(this),r.multisampled){s.renderbufferStorageMultisample(s.RENDERBUFFER,this.samples,r.internalFormat,r.width,r.height);}else s.renderbufferStorage(s.RENDERBUFFER,r.internalFormat,r.width,r.height);}dispose(){this._context&&(this._context.gl.deleteRenderbuffer(this.glName),this._context.instanceCounter.decrement(V.Renderbuffer,this),this._context=i$1(this._context));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const E=s.getLogger("esri.views.webgl.FramebufferObject");class x{constructor(t,e,i=null){this._context=t,this._glName=null,this._colorAttachments=new Map,this._depthBuffer=null,this._stencilBuffer=null,this._depthStencilTexture=null,this._initialized=!1,t.instanceCounter.increment(V.FramebufferObject,this);const r=g(e)?e:new T(this._context,e);if(this._colorAttachments.set(X.COLOR_ATTACHMENT0,r),this._validateTextureDescriptor(r.descriptor),this._validateColorAttachmentPoint(X.COLOR_ATTACHMENT0),null!=i)if(b(i))this._context.capabilities.depthTexture||console.error("Setting the depth/stencil texture as an attachment requires WEBGL_depth_texture or WebGL2"),this._depthStencilTexture=g(i)?i:new T(this._context,i),this._validateTextureDescriptor(this._depthStencilTexture.descriptor);else {const t=A(i)?i:new n(this._context,i),e=t.descriptor;e.internalFormat===B.STENCIL_INDEX8?this._stencilBuffer=t:this._depthBuffer=t,this._validateRenderBufferDescriptor(e);}}dispose(){if(0===this._colorAttachments.size&&!this._glName)return;const t=this._context.getBoundFramebufferObject();if(this._colorAttachments.forEach(((t,e)=>this.detachColorTexture(e)?.dispose())),this.detachDepthStencilBuffer()?.dispose(),this.detachDepthStencilTexture()?.dispose(),this._glName){this._context.gl.deleteFramebuffer(this._glName),this._glName=null;}this._context.bindFramebuffer(t),this._context.instanceCounter.decrement(V.FramebufferObject,this);}get glName(){return this._glName}get colorTexture(){return this._colorAttachments.get(X.COLOR_ATTACHMENT0)}get depthStencilAttachment(){return this._depthStencilTexture||this._depthBuffer||this._stencilBuffer}get depthStencilTexture(){return this._depthStencilTexture}get width(){const t=this._colorAttachments.get(X.COLOR_ATTACHMENT0);return t?.descriptor?.width??0}get height(){const t=this._colorAttachments.get(X.COLOR_ATTACHMENT0);return t?.descriptor?.height??0}get gpuMemoryUsage(){return [...this._colorAttachments].reduce(((t,[e,i])=>t+i.gpuMemoryUsage),this.depthStencilAttachment?.gpuMemoryUsage??0)}getColorTexture(t){const e=this._colorAttachments.get(t);return e&&g(e)?e:null}attachColorTexture(t,e=X.COLOR_ATTACHMENT0){if(!t)return;this._validateColorAttachmentPoint(e);const i=t.descriptor;this._validateTextureDescriptor(i),this.detachColorTexture(e)?.dispose(),this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(t.glName,e)),this._colorAttachments.set(e,t);}detachColorTexture(t=X.COLOR_ATTACHMENT0){const e=this._colorAttachments.get(t);if(e)return this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,t)),this._colorAttachments.delete(t),e}setColorTextureTarget(t,e=X.COLOR_ATTACHMENT0){const i=this._colorAttachments.get(e);i&&this._framebufferTexture2D(i.glName,e,t);}attachDepthStencil(t){if(t)switch(t.type){case e.Texture:return this._attachDepthStencilTexture(t);case e.RenderBuffer:return this._attachDepthStencilBuffer(t)}}_attachDepthStencilTexture(t$1){if(null==t$1)return;const e=t$1.descriptor;e.pixelFormat!==G.DEPTH_STENCIL&&e.pixelFormat!==G.DEPTH24_STENCIL8&&console.error("Depth/Stencil texture must have a pixel type of DEPTH_STENCIL!"),e.dataType!==U.UNSIGNED_INT_24_8&&console.error("Depth/Stencil texture must have data type of UNSIGNED_INT_24_8!"),this._context.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture!"),this._validateTextureDescriptor(e),this._disposeDepthStencilAttachments(),this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(t$1.glName,t)),this._depthStencilTexture?.dispose(),this._depthStencilTexture=t$1;}detachDepthStencilTexture(){const t$1=this._depthStencilTexture;return t$1&&this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,t)),this._depthStencilTexture=null,t$1}_attachDepthStencilBuffer(t){if(null==t)return;const e=t.descriptor;if(e.internalFormat!==B.DEPTH_STENCIL&&e.internalFormat!==B.DEPTH_COMPONENT16&&console.error("Depth/Stencil buffer must have correct internalFormat"),this._validateRenderBufferDescriptor(e),this._disposeDepthStencilAttachments(),this._initialized){this._context.bindFramebuffer(this);const i=this._context.gl,r=this._getGLAttachmentPoint(e);i.framebufferRenderbuffer(n$2.FRAMEBUFFER,r,i.RENDERBUFFER,t.glName);}this._depthBuffer?.dispose(),this._depthBuffer=t;}detachDepthStencilBuffer(){const t=this._depthBuffer;if(t&&this._initialized){this._context.bindFramebuffer(this);const e=this._context.gl,i=this._getGLAttachmentPoint(t.descriptor);e.framebufferRenderbuffer(n$2.FRAMEBUFFER,i,e.RENDERBUFFER,null),t.dispose();}return this._depthBuffer=null,t}copyToTexture(t,e,i,r,s,h,n){(t<0||e<0||s<0||h<0)&&console.error("Offsets cannot be negative!"),(i<=0||r<=0)&&console.error("Copy width and height must be greater than zero!");const o=n.descriptor;n.descriptor.target!==M.TEXTURE_2D&&console.error("Texture target must be TEXTURE_2D!"),(null==o?.width||null==o?.height||t+i>this.width||e+r>this.height||s+i>o.width||h+r>o.height)&&console.error("Bad dimensions, the current input values will attempt to read or copy out of bounds!");const c=this._context,a=c.bindTexture(n,T.TEXTURE_UNIT_FOR_UPDATES);c.setActiveTexture(T.TEXTURE_UNIT_FOR_UPDATES),c.bindFramebuffer(this),c.gl.copyTexSubImage2D(M.TEXTURE_2D,0,s,h,t,e,i,r),c.bindTexture(a,T.TEXTURE_UNIT_FOR_UPDATES);}readPixels(t,e,i,r,s,h,n){(i<=0||r<=0)&&console.error("Copy width and height must be greater than zero!"),n||console.error("Target memory is not initialized!"),this._context.bindFramebuffer(this);this._context.gl.readPixels(t,e,i,r,s,h,n);}async readPixelsAsync(t,e,h,n,o,c$1,a){if(this._context.type!==n$1.WEBGL2)return a$1()&&console.warn("Attempting to read pixels using pixel buffer object without WebGL2"),void this.readPixels(t,e,h,n,o,c$1,a);const u=this._context.gl,_=c.createPixelPack(this._context,F.STREAM_READ,a.byteLength);this._context.bindBuffer(_),this._context.bindFramebuffer(this),u.readPixels(t,e,h,n,o,c$1,0),this._context.unbindBuffer(A$1.PIXEL_PACK_BUFFER),await _.getSubDataAsync(a),_.dispose();}resize(t,e){if(this.width===t&&this.height===e)return;const i={width:t,height:e};R(i,this._context.parameters.maxTextureSize),this._colorAttachments.forEach((t=>t.resize(i.width,i.height))),this._depthStencilTexture?.resize(i.width,i.height),this._initialized&&(R(i,this._context.parameters.maxRenderbufferSize),this._depthBuffer?.resize(i.width,i.height),this._stencilBuffer?.resize(i.width,i.height),this._context.getBoundFramebufferObject()===this&&this._context.bindFramebuffer(null),this._initialized=!1);}initializeAndBind(t=n$2.FRAMEBUFFER){const e=this._context.gl;if(this._initialized)return void e.bindFramebuffer(t,this.glName);this._glName&&e.deleteFramebuffer(this._glName);const i=e.createFramebuffer();e.bindFramebuffer(t,i),this._colorAttachments.forEach(((e,i)=>this._framebufferTexture2D(e.glName,i,N(e),t)));const s=this._depthBuffer||this._stencilBuffer;if(s){const i=this._getGLAttachmentPoint(s.descriptor);e.framebufferRenderbuffer(t,i,e.RENDERBUFFER,s.glName);}else this._depthStencilTexture&&this._framebufferTexture2D(this._depthStencilTexture.glName,e.DEPTH_STENCIL_ATTACHMENT,N(this._depthStencilTexture),t);if(a$1()){e.checkFramebufferStatus(t)!==e.FRAMEBUFFER_COMPLETE&&console.error("Framebuffer is incomplete!");}this._glName=i,this._initialized=!0;}_framebufferTexture2D(t,e=X.COLOR_ATTACHMENT0,i=M.TEXTURE_2D,r=n$2.FRAMEBUFFER,s=0){this._context.gl.framebufferTexture2D(r,e,i,t,s);}_disposeDepthStencilAttachments(){const t=this._context.gl;if(this._depthBuffer){if(this._initialized){this._context.bindFramebuffer(this);const e=this._getGLAttachmentPoint(this._depthBuffer.descriptor);t.framebufferRenderbuffer(n$2.FRAMEBUFFER,e,t.RENDERBUFFER,null);}this._depthBuffer=t$1(this._depthBuffer);}this._stencilBuffer&&(this._initialized&&(this._context.bindFramebuffer(this),t.framebufferRenderbuffer(n$2.FRAMEBUFFER,t.STENCIL_ATTACHMENT,t.RENDERBUFFER,null)),this._stencilBuffer=t$1(this._stencilBuffer)),this._depthStencilTexture&&(this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,t.DEPTH_STENCIL_ATTACHMENT)),this._depthStencilTexture=t$1(this._depthStencilTexture));}_validateTextureDescriptor(t){t.target!==M.TEXTURE_2D&&t.target!==M.TEXTURE_CUBE_MAP&&console.error("Texture type must be TEXTURE_2D or TEXTURE_CUBE_MAP!"),R(t,this._context.parameters.maxTextureSize),this._validateBufferDimensions(t);}_validateRenderBufferDescriptor(t){R(t,this._context.parameters.maxRenderbufferSize),this._validateBufferDimensions(t);}_validateBufferDimensions(t){t.width<=0&&(t.width=this.width),t.height<=0&&(t.height=this.height),this.width>0&&this.height>0&&(this.width===t.width&&this.height===t.height||console.error("Attachment size must match framebuffer size!"));}_getGLAttachmentPoint(t){switch(t.internalFormat){case B.DEPTH_COMPONENT16:case B.DEPTH_COMPONENT24:case B.DEPTH_COMPONENT32F:return this._context.gl.DEPTH_ATTACHMENT;case B.DEPTH24_STENCIL8:case B.DEPTH32F_STENCIL8:case B.DEPTH_STENCIL:return this._context.gl.DEPTH_STENCIL_ATTACHMENT;case B.STENCIL_INDEX8:return this._context.gl.STENCIL_ATTACHMENT}}_validateColorAttachmentPoint(e){if(-1===x._MAX_COLOR_ATTACHMENTS){const t=this._context.capabilities.drawBuffers;if(t){const e=this._context.gl;x._MAX_COLOR_ATTACHMENTS=e.getParameter(t.MAX_COLOR_ATTACHMENTS);}else x._MAX_COLOR_ATTACHMENTS=1;}const i=e-X.COLOR_ATTACHMENT0;i+1>x._MAX_COLOR_ATTACHMENTS&&s.getLogger("esri.views.webgl.FrameBufferObject").error("esri.FrameBufferObject",`illegal attachment point for color attachment: ${i+1}. Implementation supports up to ${x._MAX_COLOR_ATTACHMENTS} color attachments`);}}function g(t){return null!=t&&"type"in t&&t.type===e.Texture}function A(t){return null!=t&&"type"in t&&t.type===e.RenderBuffer}function b(t){return g(t)||null!=t&&"pixelFormat"in t}function R(t,e){const i=Math.max(t.width,t.height);if(i>e){E.warn(`Resizing FBO attachment size ${t.width}x${t.height} to device limit ${e}`);const r=e/i;return t.width=Math.round(t.width*r),t.height=Math.round(t.height*r),!1}return !0}function N(t){return t.descriptor.target===M.TEXTURE_CUBE_MAP?M.TEXTURE_CUBE_MAP_POSITIVE_X:M.TEXTURE_2D}x._MAX_COLOR_ATTACHMENTS=-1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const f=s.getLogger("esri.views.webgl.VertexArrayObject");let u=class{constructor(t,e,i,r,n=null){this._context=t,this._locations=e,this._layout=i,this._buffers=r,this._indexBuffer=n,this._glName=null,this._initialized=!1,t.instanceCounter.increment(V.VertexArrayObject,this);}get glName(){return this._glName}get context(){return this._context}get vertexBuffers(){return this._buffers}get indexBuffer(){return this._indexBuffer}get byteSize(){return Object.keys(this._buffers).reduce(((t,e)=>t+this._buffers[e].byteLength),null!=this._indexBuffer?this._indexBuffer.byteLength:0)}get layout(){return this._layout}get locations(){return this._locations}get memoryEstimate(){return this.byteSize+(Object.keys(this._buffers).length+(this._indexBuffer?1:0))*y}dispose(){if(this._context){this._context.getBoundVAO()===this&&this._context.bindVAO(null);for(const t in this._buffers)this._buffers[t]?.dispose(),delete this._buffers[t];this._indexBuffer=t$1(this._indexBuffer),this.disposeVAOOnly();}else (this._glName||Object.getOwnPropertyNames(this._buffers).length>0)&&f.warn("Leaked WebGL VAO");}disposeVAOOnly(){if(this._glName){const t=this._context?.capabilities?.vao;t.deleteVertexArray(this._glName),this._glName=null;}this._context.instanceCounter.decrement(V.VertexArrayObject,this),this._context=i$1(this._context);}initialize(){if(this._initialized)return;const t=this._context.capabilities.vao;if(t){const e=t.createVertexArray();t.bindVertexArray(e),this._bindLayout(),t.bindVertexArray(null),this._glName=e;}this._initialized=!0;}bind(){this.initialize();const t=this._context.capabilities.vao;t?t.bindVertexArray(this.glName):(this._context.bindVAO(null),this._bindLayout());}_bindLayout(){const{_buffers:t,_layout:e,_indexBuffer:i}=this;t||f.error("Vertex buffer dictionary is empty!");const r=this._context.gl;for(const s in t){const i=t[s];i||f.error("Vertex buffer is uninitialized!");const r=e[s];r||f.error("Vertex element descriptor is empty!"),R$1(this._context,this._locations,i,r);}if(null!=i){!!this._context.capabilities.vao?r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,i.glName):this._context.bindBuffer(i);}}unbind(){this.initialize();const t=this._context.capabilities.vao;t?t.bindVertexArray(null):this._unbindLayout();}_unbindLayout(){const{_buffers:t,_layout:e}=this;t||f.error("Vertex buffer dictionary is empty!");for(const i in t){const r=t[i];r||f.error("Vertex buffer is uninitialized!");const s=e[i];o(this._context,this._locations,r,s);}null!=this._indexBuffer&&this._context.unbindBuffer(this._indexBuffer.bufferType);}};

export { c, i, n, u, x };

//# sourceMappingURL=VertexArrayObject-2a8cdbad.js.map