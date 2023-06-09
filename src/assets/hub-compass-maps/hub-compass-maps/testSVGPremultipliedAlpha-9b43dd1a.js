import { b as n, m } from './WGLContainer-25c01575.js';
import { x, c, u } from './VertexArrayObject-3e0deefe.js';
import { D, L, F, _ as _$1, E as E$1, G, U } from './enums-f1bebe6f.js';
import { b as e, T as T$1 } from './Texture-2136281d.js';
import { t as t$2 } from './hub-compass-map-68308039.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class t$1{constructor(e,t,E,T,r,_,i,u,s){this.createQuery=e,this.deleteQuery=t,this.resultAvailable=E,this.getResult=T,this.disjoint=r,this.beginTimeElapsed=_,this.endTimeElapsed=i,this.createTimestamp=u,this.timestampBits=s;}}let E=!1;function T(T,r){if(r.disjointTimerQuery)return null;let _=T.getExtension("EXT_disjoint_timer_query_webgl2");return _&&n(T)?new t$1((()=>T.createQuery()),(e=>{T.deleteQuery(e),E=!1;}),(e=>T.getQueryParameter(e,T.QUERY_RESULT_AVAILABLE)),(e=>T.getQueryParameter(e,T.QUERY_RESULT)),(()=>T.getParameter(_.GPU_DISJOINT_EXT)),(e=>{E||(E=!0,T.beginQuery(_.TIME_ELAPSED_EXT,e));}),(()=>{T.endQuery(_.TIME_ELAPSED_EXT),E=!1;}),(e=>_.queryCounterEXT(e,_.TIMESTAMP_EXT)),(()=>T.getQuery(_.TIMESTAMP_EXT,_.QUERY_COUNTER_BITS_EXT))):(_=T.getExtension("EXT_disjoint_timer_query"),_?new t$1((()=>_.createQueryEXT()),(e=>{_.deleteQueryEXT(e),E=!1;}),(e=>_.getQueryObjectEXT(e,_.QUERY_RESULT_AVAILABLE_EXT)),(e=>_.getQueryObjectEXT(e,_.QUERY_RESULT_EXT)),(()=>T.getParameter(_.GPU_DISJOINT_EXT)),(e=>{E||(E=!0,_.beginQueryEXT(_.TIME_ELAPSED_EXT,e));}),(()=>{_.endQueryEXT(_.TIME_ELAPSED_EXT),E=!1;}),(e=>_.queryCounterEXT(e,_.TIMESTAMP_EXT)),(()=>_.getQueryEXT(_.TIMESTAMP_EXT,_.QUERY_COUNTER_BITS_EXT))):null)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class t{constructor(){this._result=!1;}dispose(){this._program=t$2(this._program);}get result(){return null!=this._program&&(this._result=this._test(this._program),this.dispose()),this._result}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class f extends t{constructor(e){super(),this._rctx=e;const r="\n    precision highp float;\n\n    attribute vec2 a_pos;\n    varying vec2 v_uv;\n\n    void main() {\n      v_uv = a_pos;\n      gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);\n    }\n    ",t="\n    precision highp float;\n\n    varying vec2 v_uv;\n\n    uniform sampler2D u_texture;\n\n    void main() {\n      gl_FragColor = texture2D(u_texture, v_uv);\n    }\n    ";this._program=e.programCache.acquire(r,t,new Map([["a_pos",0]]));}dispose(){super.dispose();}_test(g){const f=this._rctx;if(!f.gl)return g.dispose(),!0;const l=new e(1);l.wrapMode=D.CLAMP_TO_EDGE,l.samplingMode=L.NEAREST;const w=new x(f,l),v=c.createVertex(f,F.STATIC_DRAW,new Uint16Array([0,0,1,0,0,1,1,1])),x$1=new u(f,new Map([["a_pos",0]]),m,{geometry:v}),h=new e;h.samplingMode=L.LINEAR,h.wrapMode=D.CLAMP_TO_EDGE;const b=new T$1(f,h,_);f.useProgram(g),f.bindTexture(b,0),g.setUniform1i("u_texture",0);const A=f.getBoundFramebufferObject(),{x:E,y:T,width:j,height:C}=f.getViewport();f.bindFramebuffer(w),f.setViewport(0,0,1,1),f.setClearColor(0,0,0,0),f.setBlendingEnabled(!1),f.clearSafe(_$1.COLOR_BUFFER_BIT),f.bindVAO(x$1),f.drawArrays(E$1.TRIANGLE_STRIP,0,4);const y=new Uint8Array(4);return w.readPixels(0,0,1,1,G.RGBA,U.UNSIGNED_BYTE,y),x$1.dispose(),w.dispose(),b.dispose(),f.setViewport(E,T,j,C),f.bindFramebuffer(A),255!==y[0]}}const _=new Image;_.src="data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='5' height='5' version='1.1' viewBox='0 0 5 5' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='5' height='5' fill='%23f00' fill-opacity='.5'/%3E%3C/svg%3E%0A",_.width=5,_.height=5,_.decode();

export { T, f, t };

//# sourceMappingURL=testSVGPremultipliedAlpha-9b43dd1a.js.map