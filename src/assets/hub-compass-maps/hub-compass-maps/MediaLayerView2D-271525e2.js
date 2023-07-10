import { ae as n, J as l, K as h, aa as f, B as r, s, f as s$1, t, n as n$1, g as o, Y as r$1, a5 as c$1, m as e$2, av as v$1, c5 as r$2, bL as i$2, M, aZ as t$1, v as f$1, w as h$1, as as d, fA as ut, cL as V, dM as a, eH as y, eI as r$4, fL as s$2, W as d$2, cs as M$1, dY as r$5, fM as x, a1 as e$3, a2 as y$1, a3 as a$1, ap as i$4 } from './hub-compass-map-4d751555.js';
import { j as j$1, i as i$3 } from './perspectiveUtils-7efcab57.js';
import './Rasterizer-069015d0.js';
import { a as i } from './Container-d1c5f8b6.js';
import './BufferPool-76e4a53a.js';
import { T as T$2 } from './color-c09f883e.js';
import { i as i$1, w as w$1 } from './WGLContainer-0eba88c0.js';
import { D, F } from './enums-f1bebe6f.js';
import { b as e$1, T as T$1 } from './Texture-f70323fa.js';
import './ProgramTemplate-f0091ff6.js';
import './definitions-780d8bac.js';
import './GeometryUtils-ae7c7d19.js';
import { c, u as u$1 } from './VertexArrayObject-e8140cf7.js';
import './number-4aaa92a3.js';
import './StyleDefinition-4cf61a7b.js';
import './enums-64077e1c.js';
import './MagnifierPrograms-59a31b2b.js';
import './OrderIndependentTransparency-2a855020.js';
import './floatRGBA-d6f7ec9e.js';
import './testSVGPremultipliedAlpha-26dceadc.js';
import './GraphicsView2D-10f20421.js';
import './AttributeStoreView-8a55c708.js';
import './earcut-275e4de1.js';
import './featureConversionUtils-80dbaef5.js';
import { r as r$3 } from './vec3f32-77e8c64f.js';
import { e } from './mat3f64-9c2c37f3.js';
import { f as f$2, d as d$1 } from './LayerView-686abf7a.js';
import './index-d436d5f8.js';
import './normalizeUtilsSync-4a9da8f8.js';
import './cimAnalyzer-6b3d716f.js';
import './fontUtils-0fd04675.js';
import './BidiEngine-20165a23.js';
import './OptimizedGeometry-d99be84d.js';
import './GeometryUtils-edfc28ec.js';
import './enums-63fd0640.js';
import './utils-daa8d2fa.js';
import './alignmentUtils-63467b02.js';
import './Rect-b4ddc2bf.js';
import './quantizationUtils-9ada3d42.js';
import './rasterizingUtils-1001bafb.js';
import './VertexElementDescriptor-33a64685.js';
import './config-78edfbcd.js';
import './pbf-62769da7.js';
import './imageutils-f86cf60d.js';
import './Matcher-44fb61c3.js';
import './visualVariablesUtils-20c7d45d.js';
import './tileUtils-c39d05c6.js';
import './TurboLine-ab805735.js';
import './cimSymbolUtils-f842f57c.js';
import './devEnvironmentUtils-fbf66ba6.js';
import './webStyleSymbolUtils-32c225fc.js';
import './CircularArray-00e66d79.js';
import './throttle-4b0bde7a.js';
import './ComputedAttributeStorage-01366597.js';
import './arcadeTimeUtils-530d2f45.js';
import './executionError-5ec41157.js';
import './projectionSupport-89b75a6e.js';
import './json-4697dff9.js';
import './basicInterfaces-ce8a6401.js';
import './createSymbolSchema-63ed74a0.js';
import './TiledDisplayObject-8c01461f.js';
import './util-1e83203f.js';
import './OptimizedFeatureSet-c30cfe93.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const j=e();class _$1 extends i{constructor(s$2){super(),this.elementView=s$2,this.isWrapAround=!1,this.perspectiveTransform=n(),this._vertices=new Float32Array(20),this._handles=[],this._handles.push(l((()=>this.elementView.element.opacity),(e=>this.opacity=e),h),l((()=>[this.elementView.coords]),(()=>{this.requestRender();}),h),f((()=>this.elementView.element.loaded),(()=>{const e=this.elementView.element;this.ready(),"video"===e.type&&null!=e.content&&this._handles.push(r(e.content,"play",(()=>this.requestRender())));}),h)),s$2.element.load().catch((t=>{s.getLogger("esri.views.2d.layers.MediaLayerView2D").error(new s$1("element-load-error","Element cannot be displayed",{element:s$2,error:t}));}));}destroy(){this._handles.forEach((e=>e.remove())),this.texture=t(this.texture);}get dvsMat3(){return this.parent.dvsMat3}beforeRender(e){const{context:t}=e,r=this.elementView.element.content;if(null!=r){const e=r instanceof HTMLImageElement,i=r instanceof HTMLVideoElement,o$1=e?r.naturalWidth:i?r.videoWidth:r.width,n=e?r.naturalHeight:i?r.videoHeight:r.height;if(this._updatePerspectiveTransform(o$1,n),this.texture)i&&!r.paused&&(this.texture.setData(r),this.requestRender(),(t.type===n$1.WEBGL2||o(o$1)&&o(n))&&this.texture.generateMipmap());else {const e=new e$1;e.wrapMode=D.CLAMP_TO_EDGE,e.preMultiplyAlpha=!0,e.width=o$1,e.height=n,this.texture=new T$1(t,e,r),(t.type===n$1.WEBGL2||o(o$1)&&o(n))&&this.texture.generateMipmap(),i&&!r.paused&&this.requestRender();}}super.beforeRender(e);}_createTransforms(){return null}updateDrawCoords(e,t){const r=this.elementView.coords;if(null==r)return;const[s,i,o,n]=r.rings[0],a=this._vertices,{x:m,y:h}=e,l=0!==t;l?a.set([i[0]-m,i[1]-h,s[0]-m,s[1]-h,o[0]-m,o[1]-h,n[0]-m,n[1]-h,n[0]-m,n[1]-h,i[0]+t-m,i[1]-h,i[0]+t-m,i[1]-h,s[0]+t-m,s[1]-h,o[0]+t-m,o[1]-h,n[0]+t-m,n[1]-h]):a.set([i[0]-m,i[1]-h,s[0]-m,s[1]-h,o[0]-m,o[1]-h,n[0]-m,n[1]-h]),this.isWrapAround=l;}getVAO(e,t,r){if(null==this.elementView.coords)return null;const s=this._vertices;if(this._vao)this._geometryVbo.setData(s);else {this._geometryVbo=c.createVertex(e,F.DYNAMIC_DRAW,s);const i=c.createVertex(e,F.STATIC_DRAW,new Uint16Array([0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1]));this._vao=new u$1(e,r,t,{geometry:this._geometryVbo,tex:i});}return this._vao}_updatePerspectiveTransform(e,t){const r=this._vertices;j$1(j,[0,0,e,0,0,t,e,t],[r[0],r[1],r[4],r[5],r[2],r[3],r[6],r[7]]),r$1(this.perspectiveTransform,j[6]/j[8]*e,j[7]/j[8]*t);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class u extends i$1{constructor(){super(...arguments),this._localOrigin=c$1(0,0),this._viewStateId=-1,this._dvsMat3=e$2(),this.requiresDedicatedFBO=!1;}get dvsMat3(){return this._dvsMat3}beforeRender(t){this._updateMatrices(t),this._updateOverlays(t,this.children);for(const e of this.children)e.beforeRender(t);}prepareRenderPasses(t){const e=t.registerRenderPass({name:"overlay",brushes:[w$1.overlay],target:()=>this.children,drawPhase:T$2.MAP});return [...super.prepareRenderPasses(t),e]}_updateMatrices(t){const{state:i}=t,{id:d,size:l,pixelRatio:h,resolution:m,rotation:f,viewpoint:u,displayMat3:M$1}=i;if(this._viewStateId===d)return;const v=Math.PI/180*f,_=h*l[0],w=h*l[1],{x:g,y}=u.targetGeometry,j=v$1(g,i.spatialReference);this._localOrigin.x=j,this._localOrigin.y=y;const R=m*_,b=m*w,O=r$2(this._dvsMat3);i$2(O,O,M$1),M(O,O,t$1(_/2,w/2)),f$1(O,O,r$3(_/R,-w/b,1)),h$1(O,O,-v),this._viewStateId=d;}_updateOverlays(t,e){const{state:s}=t,{rotation:r,spatialReference:o,worldScreenWidth:a,size:i,viewpoint:n}=s,c=this._localOrigin;let p=0;const h=d(o);if(h&&o.isWrappable){const t=i[0],d=i[1],m=180/Math.PI*r,f=Math.abs(Math.cos(m)),u=Math.abs(Math.sin(m)),M=Math.round(t*f+d*u),[v,_]=h.valid,w=ut(o),{x:g,y}=n.targetGeometry,j=[g,y],R=[0,0];s.toScreen(R,j);const b=[0,0];let O;O=M>a?.5*a:.5*M;const P=Math.floor((g+.5*w)/w),x=v+P*w,C=_+P*w,D=[R[0]+O,0];s.toMap(b,D),b[0]>C&&(p=w),D[0]=R[0]-O,s.toMap(b,D),b[0]<x&&(p=-w);for(const s of e){const t=s.elementView.bounds;if(null==t)continue;const[e,,r]=t;e<v&&r>v?s.updateDrawCoords(c,w):r>_&&e<_?s.updateDrawCoords(c,-w):s.updateDrawCoords(c,p);}}else for(const d of e)d.updateDrawCoords(c,p);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
let w=class extends(f$2(d$1)){constructor(){super(...arguments),this._overlayContainer=null,this._fetchQueue=null,this._tileStrategy=null,this._elementReferences=new Map,this._debugGraphicsView=null,this.layer=null,this.elements=new V;}attach(){this.addAttachHandles([a((()=>this.layer.effectiveSource),"refresh",(()=>{this._tileStrategy.refresh((e=>this._updateTile(e))),this.requestUpdate();})),a((()=>this.layer.effectiveSource),"change",(({element:e})=>this._elementUpdateHandler(e)))]),this._overlayContainer=new u,this.container.addChild(this._overlayContainer),this._fetchQueue=new y({tileInfoView:this.view.featuresTilingScheme,concurrency:10,process:(e,t)=>this._queryElements(e,t)}),this._tileStrategy=new r$4({cachePolicy:"purge",resampling:!0,acquireTile:e=>this._acquireTile(e),releaseTile:e=>this._releaseTile(e),tileInfoView:this.view.featuresTilingScheme}),this.requestUpdate();}detach(){this.elements.removeAll(),this._tileStrategy.destroy(),this._fetchQueue.destroy(),this._overlayContainer.removeAllChildren(),this.container.removeAllChildren(),this._elementReferences.clear(),this._debugGraphicsView?.destroy();}supportsSpatialReference(e){return !0}moveStart(){this.requestUpdate();}viewChange(){this.requestUpdate();}moveEnd(){this.requestUpdate();}update(e){this._tileStrategy.update(e),this._debugGraphicsView?.update(e);}async hitTest(e,t){const r=[],i=e.normalize(),s=[i.x,i.y];for(const{projectedElement:{normalizedCoords:n,element:o}}of this._elementReferences.values())null!=n&&s$2(n.rings,s)&&r.push({type:"media",element:o,layer:this.layer,mapPoint:e});return r.reverse()}canResume(){return null!=this.layer.source&&super.canResume()}async doRefresh(){this._fetchQueue.reset(),this._tileStrategy.refresh((e=>this._updateTile(e)));}_acquireTile(e){const t=new T(e.clone());return this._updateTile(t),t}_updateTile(e){this.updatingHandles.addPromise(this._fetchQueue.push(e.key).then((t=>{const[r,i]=e.setElements(t);this._referenceElements(e,r),this._dereferenceElements(e,i),this.requestUpdate();}),(e=>{d$2(e)||s.getLogger(this).error(e);})));}_releaseTile(e){this._fetchQueue.abort(e.key.id),e.elements&&this._dereferenceElements(e,e.elements),this.requestUpdate();}async _queryElements(e,t){const r=this.layer.effectiveSource;if(null==r)return [];this.view.featuresTilingScheme.getTileBounds(b,e,!0);const i=new M$1({xmin:b[0],ymin:b[1],xmax:b[2],ymax:b[3],spatialReference:this.view.spatialReference});return r.queryElements(i,t)}_referenceElements(e,t){if(null!=this.layer.source)for(const r of t)this._referenceElement(e,r);}_referenceElement(e,t){r$5(this._elementReferences,t.uid,(()=>{const e=new i$3({element:t,spatialReference:this.view.spatialReference}),r=new _$1(e);this._overlayContainer.addChild(r),this.elements.add(t);let i=null;return {tiles:new Set,projectedElement:e,overlay:r,debugGraphic:i}})).tiles.add(e);}_dereferenceElements(e,t){for(const r of t)this._dereferenceElement(e,r);}_dereferenceElement(e,t){const r=this._elementReferences.get(t.uid);r.tiles.delete(e),r.tiles.size||(this._overlayContainer.removeChild(r.overlay),r.overlay.destroy(),r.projectedElement.destroy(),this._elementReferences.delete(t.uid),this.elements.remove(t),this._debugGraphicsView?.graphics.remove(r.debugGraphic));}_elementUpdateHandler(e){let t=this._elementReferences.get(e.uid);if(t){const r=t.projectedElement.normalizedCoords;if(null==r)return this._overlayContainer.removeChild(t.overlay),t.overlay.destroy(),t.projectedElement.destroy(),this._elementReferences.delete(e.uid),this.elements.remove(e),void this._debugGraphicsView?.graphics.remove(t.debugGraphic);const i=[],s=[];for(const e of this._tileStrategy.tiles){const n=v(this.view.featuresTilingScheme,e,r);t.tiles.has(e)?n||s.push(e):n&&i.push(e);}for(const t of i)this._referenceElement(t,e);for(const t of s)this._dereferenceElement(t,e);return t=this._elementReferences.get(e.uid),void(t?.debugGraphic&&(t.debugGraphic.geometry=t.projectedElement.normalizedCoords,this._debugGraphicsView.graphicUpdateHandler({graphic:t.debugGraphic,property:"geometry"})))}const r=new i$3({element:e,spatialReference:this.view.spatialReference}).normalizedCoords;if(null!=r)for(const i of this._tileStrategy.tiles){v(this.view.featuresTilingScheme,i,r)&&this._referenceElement(i,e);}}};e$3([y$1()],w.prototype,"_fetchQueue",void 0),e$3([y$1()],w.prototype,"layer",void 0),e$3([y$1({readOnly:!0})],w.prototype,"elements",void 0),w=e$3([a$1("esri.views.2d.layers.MediaLayerView2D")],w);const b=i$4(),_={xmin:0,ymin:0,xmax:0,ymax:0};function v(e,t,r){return e.getTileBounds(b,t.key,!0),_.xmin=b[0],_.ymin=b[1],_.xmax=b[2],_.ymax=b[3],x(_,r)}class T{constructor(e){this.key=e,this.elements=null,this.isReady=!1,this.visible=!0;}setElements(e){const t=[],r=new Set(this.elements);this.elements=e;for(const i of e)r.has(i)?r.delete(i):t.push(i);return this.isReady=!0,[t,Array.from(r)]}destroy(){}}const R=w;

export default R;

//# sourceMappingURL=MediaLayerView2D-271525e2.js.map