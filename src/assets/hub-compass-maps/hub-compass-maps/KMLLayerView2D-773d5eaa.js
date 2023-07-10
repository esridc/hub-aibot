import { cx as nn, a9 as x, O as j$1, eF as i, cL as V, J as l$1, I as e$1, H as l$2, cs as M, fs as $$1, aE as f$1, fC as a$1, fD as I, cQ as f$2, fE as v, a1 as e$2, a2 as y, a3 as a$2 } from './hub-compass-map-68308039.js';
import { b as b$1, g, d as d$1 } from './kmlUtils-e6f00b33.js';
import { w, b, T as T$1 } from './Bitmap-79eabc67.js';
import { a } from './BitmapContainer-ebaf75e1.js';
import { f, d } from './LayerView-6ca034b7.js';
import { i as i$1 } from './GraphicContainer-34688d98.js';
import { o as oe } from './GraphicsView2D-dba791dc.js';
import { C as C$1, $ } from './rasterProjectionHelper-c2d0e01d.js';
import { n } from './WGLContainer-25c01575.js';
import { P, o } from './RenderingContext-86ba8545.js';
import { D, G, U, X } from './enums-f1bebe6f.js';
import { x as x$1 } from './VertexArrayObject-3e0deefe.js';
import { m } from './rasterUtils-0921c3dd.js';
import { b as e, T } from './Texture-2136281d.js';
import './index-d436d5f8.js';
import './Container-82f058f5.js';
import './definitions-6e5909d3.js';
import './color-e6670fe4.js';
import './enums-63fd0640.js';
import './VertexElementDescriptor-33a64685.js';
import './number-4aaa92a3.js';
import './BaseGraphicContainer-85ac7fbe.js';
import './FeatureContainer-9339bd48.js';
import './AttributeStoreView-356296ba.js';
import './TiledDisplayObject-99ff23bf.js';
import './visualVariablesUtils-99504d10.js';
import './createSymbolSchema-984d8bca.js';
import './GeometryUtils-26db2899.js';
import './alignmentUtils-63467b02.js';
import './cimAnalyzer-5794c7c7.js';
import './fontUtils-56997abd.js';
import './BidiEngine-20165a23.js';
import './OptimizedGeometry-d99be84d.js';
import './GeometryUtils-edfc28ec.js';
import './utils-ae252ef1.js';
import './Rect-b4ddc2bf.js';
import './quantizationUtils-0ef46038.js';
import './floatRGBA-da020d60.js';
import './cimSymbolUtils-d431c102.js';
import './devEnvironmentUtils-fbf66ba6.js';
import './webStyleSymbolUtils-e9589717.js';
import './util-40d07144.js';
import './TileContainer-4d717575.js';
import './vec3f32-77e8c64f.js';
import './normalizeUtilsSync-4f2d25b3.js';
import './projectionSupport-1d172051.js';
import './json-4697dff9.js';
import './Matcher-966c9b57.js';
import './tileUtils-c39d05c6.js';
import './TurboLine-82cf59fe.js';
import './earcut-5b80530c.js';
import './ComputedAttributeStorage-bafdb263.js';
import './featureConversionUtils-e451106b.js';
import './OptimizedFeatureSet-c30cfe93.js';
import './arcadeTimeUtils-f8caff3d.js';
import './executionError-5ec41157.js';
import './ProgramTemplate-f235ba4b.js';
import './StyleDefinition-4cf61a7b.js';
import './config-78edfbcd.js';
import './programUtils-2da0d1c3.js';
import './NestedMap-98a772ce.js';
import './OrderIndependentTransparency-2a855020.js';
import './basicInterfaces-ce8a6401.js';
import './testSVGPremultipliedAlpha-9b43dd1a.js';
import './doublePrecisionUtils-8d2311b1.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class l{constructor(t){if(this._ownsRctx=!1,t)this._ownsRctx=!1,this._rctx=t;else {if(l._instance)return l._instanceRefCount++,l._instance;l._instanceRefCount=1,l._instance=this,this._ownsRctx=!0;const t=document.createElement("canvas").getContext("webgl");t.getExtension("OES_texture_float"),this._rctx=new P(t,{});}const e={applyProjection:!0,bilinear:!1,bicubic:!1},r=o("raster/reproject","raster/reproject",new Map([["a_position",0]]),e);this._program=this._rctx.programCache.acquire(r.shaders.vertexShader,r.shaders.fragmentShader,r.attributes),this._rctx.useProgram(this._program),this._program.setUniform1f("u_opacity",1),this._program.setUniform1i("u_image",0),this._program.setUniform1i("u_flipY",0),this._program.setUniform1i("u_transformGrid",1),this._quad=new n(this._rctx,[0,0,1,0,0,1,1,1]);}reprojectTexture(t,s,n=!1){const o=nn(t.extent,s),m$1=new x({x:(t.extent.xmax-t.extent.xmin)/t.texture.descriptor.width,y:(t.extent.ymax-t.extent.ymin)/t.texture.descriptor.height,spatialReference:t.extent.spatialReference}),{x:_,y:g}=C$1(m$1,s,t.extent);let l=(_+g)/2;const w=Math.round((o.xmax-o.xmin)/l),b=Math.round((o.ymax-o.ymin)/l);l=(o.width/w+o.height/b)/2;const j=new x({x:l,y:l,spatialReference:o.spatialReference}),D$1=$({projectedExtent:o,srcBufferExtent:t.extent,pixelSize:j,hasWrapAround:!0,spacing:[16,16]}),R=m(this._rctx,D$1),C=new e(w,b);C.wrapMode=D.CLAMP_TO_EDGE;const T=new x$1(this._rctx,C);this._rctx.bindFramebuffer(T),this._rctx.setViewport(0,0,w,b),this._rctx.useProgram(this._program),this._rctx.bindTexture(t.texture,0),this._rctx.bindTexture(R,1),this._quad.bind();const{width:y=0,height:E=0}=t.texture.descriptor;if(this._program.setUniform2f("u_srcImageSize",y,E),this._program.setUniform2fv("u_transformSpacing",D$1.spacing),this._program.setUniform2fv("u_transformGridSize",D$1.size),this._program.setUniform2f("u_targetImageSize",w,b),this._quad.draw(),this._quad.unbind(),this._rctx.useProgram(null),this._rctx.bindFramebuffer(null),R.dispose(),n){const{width:t,height:e}=T,r=new ImageData(t??0,e??0);T.readPixels(0,0,t??0,e??0,G.RGBA,U.UNSIGNED_BYTE,r.data);const i=T.detachColorTexture(X.COLOR_ATTACHMENT0);return T.dispose(),{texture:i,extent:o,imageData:r}}const M=T.detachColorTexture(X.COLOR_ATTACHMENT0);return T.dispose(),{texture:M,extent:o}}reprojectBitmapData(t,e$1){const r=w(t.bitmapData)?b(t.bitmapData):t.bitmapData,i=new e;i.wrapMode=D.CLAMP_TO_EDGE,i.width=t.bitmapData.width,i.height=t.bitmapData.height;const a=new T(this._rctx,i,r),o=this.reprojectTexture({texture:a,extent:t.extent},e$1,!0);o.texture.dispose();const m=document.createElement("canvas"),p=o.imageData;m.width=p.width,m.height=p.height;return m.getContext("2d").putImageData(p,0,0),{bitmapData:m,extent:o.extent}}async loadAndReprojectBitmapData(e,r,i){const a=(await j$1(e,{responseType:"image"})).data,s=document.createElement("canvas");s.width=a.width,s.height=a.height;const n=s.getContext("2d");n.drawImage(a,0,0);const o=n.getImageData(0,0,s.width,s.height);if(r.spatialReference.equals(i))return {bitmapData:o,extent:r};const m=this.reprojectBitmapData({bitmapData:o,extent:r},i);return {bitmapData:m.bitmapData,extent:m.extent}}destroy(){this._ownsRctx?(l._instanceRefCount--,0===l._instanceRefCount&&(this._quad.dispose(),this._program.dispose(),this._rctx.dispose(),l._instance=null)):(this._quad.dispose(),this._program.dispose());}}l._instanceRefCount=0;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class C{constructor(){this.allSublayers=new Map,this.allPoints=[],this.allPolylines=[],this.allPolygons=[],this.allMapImages=[];}}let j=class extends(f(d)){constructor(){super(...arguments),this._bitmapIndex=new Map,this._mapImageContainer=new a,this._kmlVisualData=new C,this._fetchController=null,this.allVisiblePoints=new i,this.allVisiblePolylines=new i,this.allVisiblePolygons=new i,this.allVisibleMapImages=new V;}async hitTest(e,i){const t=this.layer;return [this._pointsView?.hitTest(e),this._polylinesView?.hitTest(e),this._polygonsView?.hitTest(e)].flat().filter(Boolean).map((i=>(i.layer=t,i.sourceLayer=t,{type:"graphic",graphic:i,layer:t,mapPoint:e})))}update(e){this._polygonsView&&this._polygonsView.processUpdate(e),this._polylinesView&&this._polylinesView.processUpdate(e),this._pointsView&&this._pointsView.processUpdate(e);}attach(){this._fetchController=new AbortController,this.container.addChild(this._mapImageContainer),this._polygonsView=new oe({view:this.view,graphics:this.allVisiblePolygons,requestUpdateCallback:()=>this.requestUpdate(),container:new i$1(this.view.featuresTilingScheme)}),this.container.addChild(this._polygonsView.container),this._polylinesView=new oe({view:this.view,graphics:this.allVisiblePolylines,requestUpdateCallback:()=>this.requestUpdate(),container:new i$1(this.view.featuresTilingScheme)}),this.container.addChild(this._polylinesView.container),this._pointsView=new oe({view:this.view,graphics:this.allVisiblePoints,requestUpdateCallback:()=>this.requestUpdate(),container:new i$1(this.view.featuresTilingScheme)}),this.container.addChild(this._pointsView.container),this.addAttachHandles([this.allVisibleMapImages.on("change",(e=>{e.added.forEach((e=>this._addMapImage(e))),e.removed.forEach((e=>this._removeMapImage(e)));})),l$1((()=>this.layer.visibleSublayers),(e=>{for(const[i,t]of this._kmlVisualData.allSublayers)t.visibility=0;for(const i of e){const e=this._kmlVisualData.allSublayers.get(i.id);e&&(e.visibility=1);}this._refreshCollections();}))]),this.updatingHandles.addPromise(this._fetchService(this._fetchController.signal)),this._imageReprojector=new l;}detach(){this._fetchController=e$1(this._fetchController),this._mapImageContainer.removeAllChildren(),this.container.removeAllChildren(),this._bitmapIndex.clear(),this._polygonsView=l$2(this._polygonsView),this._polylinesView=l$2(this._polylinesView),this._pointsView=l$2(this._pointsView),this._imageReprojector=l$2(this._imageReprojector);}moveStart(){}viewChange(){this._polygonsView.viewChange(),this._polylinesView.viewChange(),this._pointsView.viewChange();}moveEnd(){}isUpdating(){return this._pointsView.updating||this._polygonsView.updating||this._polylinesView.updating}_addMapImage(e){(this.view.spatialReference?.isWGS84||this.view.spatialReference?.isWebMercator)&&this._imageReprojector.loadAndReprojectBitmapData(e.href,M.fromJSON(e.extent),this.view.spatialReference).then((i=>{const t=new T$1(i.bitmapData);t.x=i.extent.xmin,t.y=i.extent.ymax,t.resolution=i.extent.width/i.bitmapData.width,t.rotation=e.rotation,this._mapImageContainer.addChild(t),this._bitmapIndex.set(e,t);}));}async _getViewDependentUrl(e,t){const{viewFormat:s,viewBoundScale:a,httpQuery:o}=e;if(null!=s){if(null==t)throw new Error("Loading this network link requires a view state.");let n;if(await $$1(),null!=a&&1!==a){const e=new M(t.extent);e.expand(a),n=e;}else n=t.extent;n=nn(n,f$1.WGS84);const h=nn(n,f$1.WebMercator),y=n.xmin,g=n.xmax,w=n.ymin,_=n.ymax,b=t.size[0]*t.pixelRatio,V=t.size[1]*t.pixelRatio,f=Math.max(h.width,h.height),v$1={"[bboxWest]":y.toString(),"[bboxEast]":g.toString(),"[bboxSouth]":w.toString(),"[bboxNorth]":_.toString(),"[lookatLon]":n.center.x.toString(),"[lookatLat]":n.center.y.toString(),"[lookatRange]":f.toString(),"[lookatTilt]":"0","[lookatHeading]":t.rotation.toString(),"[lookatTerrainLon]":n.center.x.toString(),"[lookatTerrainLat]":n.center.y.toString(),"[lookatTerrainAlt]":"0","[cameraLon]":n.center.x.toString(),"[cameraLat]":n.center.y.toString(),"[cameraAlt]":f.toString(),"[horizFov]":"60","[vertFov]":"60","[horizPixels]":b.toString(),"[vertPixels]":V.toString(),"[terrainEnabled]":"0","[clientVersion]":a$1,"[kmlVersion]":"2.2","[clientName]":"ArcGIS API for JavaScript","[language]":"en-US"},S=e=>{for(const i in e){let t;for(t in v$1)e[i]=e[i].replace(t,v$1[t]);}},I$1=I(s);S(I$1);let x={};null!=o&&(x=I(o),S(x));const C=f$2(e.href);C.query={...C.query,...I$1,...x};return `${C.path}?${v(I$1)}`}return e.href}async _fetchService(e){const i=new C;await this._loadVisualData(this.layer.url,i,e),this._kmlVisualData=i,this._refreshCollections();}_refreshCollections(){this.allVisiblePoints.removeAll(),this.allVisiblePolylines.removeAll(),this.allVisiblePolygons.removeAll(),this.allVisibleMapImages.removeAll(),this.allVisiblePoints.addMany(this._kmlVisualData.allPoints.filter((e=>this._isSublayerVisible(e.sublayerId))).map((({item:e})=>e))),this.allVisiblePolylines.addMany(this._kmlVisualData.allPolylines.filter((e=>this._isSublayerVisible(e.sublayerId))).map((({item:e})=>e))),this.allVisiblePolygons.addMany(this._kmlVisualData.allPolygons.filter((e=>this._isSublayerVisible(e.sublayerId))).map((({item:e})=>e))),this.allVisibleMapImages.addMany(this._kmlVisualData.allMapImages.filter((e=>this._isSublayerVisible(e.sublayerId))).map((({item:e})=>e)));}_isSublayerVisible(e){const i=this._kmlVisualData.allSublayers.get(e);return !!i?.visibility&&(-1===i.parentFolderId||this._isSublayerVisible(i.parentFolderId))}_loadVisualData(e,i,t){return this._fetchParsedKML(e,t).then((async e=>{for(const s of e.sublayers){i.allSublayers.set(s.id,s);const e=s.points?await b$1(s.points):[],a=s.polylines?await b$1(s.polylines):[],o=s.polygons?await b$1(s.polygons):[],l=s.mapImages||[];if(i.allPoints.push(...e.map((e=>({item:e,sublayerId:s.id})))),i.allPolylines.push(...a.map((e=>({item:e,sublayerId:s.id})))),i.allPolygons.push(...o.map((e=>({item:e,sublayerId:s.id})))),i.allMapImages.push(...l.map((e=>({item:e,sublayerId:s.id})))),s.networkLink){const e=await this._getViewDependentUrl(s.networkLink,this.view.state);await this._loadVisualData(e,i,t);}}}))}_fetchParsedKML(e,i){return g(e,this.layer.spatialReference,this.layer.refreshInterval,i).then((e=>d$1(e.data)))}_removeMapImage(e){const i=this._bitmapIndex.get(e);i&&(this._mapImageContainer.removeChild(i),this._bitmapIndex.delete(e));}};e$2([y()],j.prototype,"_pointsView",void 0),e$2([y()],j.prototype,"_polylinesView",void 0),e$2([y()],j.prototype,"_polygonsView",void 0),e$2([y()],j.prototype,"updating",void 0),j=e$2([a$2("esri.views.2d.layers.KMLLayerView2D")],j);const k=j;

export default k;

//# sourceMappingURL=KMLLayerView2D-773d5eaa.js.map