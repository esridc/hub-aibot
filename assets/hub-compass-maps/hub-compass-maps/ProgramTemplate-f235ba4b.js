import { b as t$1, n as n$1, h as h$2 } from './hub-compass-map-68308039.js';
import { c as c$2 } from './Texture-2136281d.js';
import { H as H$1, V } from './enums-f1bebe6f.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const e$3=["layout","centroid","smooth","case","mat2x2","mat2x3","mat2x4","mat3x2","mat3x3","mat3x4","mat4x2","mat4x3","mat4x4","uint","uvec2","uvec3","uvec4","samplerCubeShadow","sampler2DArray","sampler2DArrayShadow","isampler2D","isampler3D","isamplerCube","isampler2DArray","usampler2D","usampler3D","usamplerCube","usampler2DArray","coherent","restrict","readonly","writeonly","resource","atomic_uint","noperspective","patch","sample","subroutine","common","partition","active","filter","image1D","image2D","image3D","imageCube","iimage1D","iimage2D","iimage3D","iimageCube","uimage1D","uimage2D","uimage3D","uimageCube","image1DArray","image2DArray","iimage1DArray","iimage2DArray","uimage1DArray","uimage2DArray","image1DShadow","image2DShadow","image1DArrayShadow","image2DArrayShadow","imageBuffer","iimageBuffer","uimageBuffer","sampler1DArray","sampler1DArrayShadow","isampler1D","isampler1DArray","usampler1D","usampler1DArray","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","trunc","round","roundEven","isnan","isinf","floatBitsToInt","floatBitsToUint","intBitsToFloat","uintBitsToFloat","packSnorm2x16","unpackSnorm2x16","packUnorm2x16","unpackUnorm2x16","packHalf2x16","unpackHalf2x16","outerProduct","transpose","determinant","inverse","texture","textureSize","textureProj","textureLod","textureOffset","texelFetch","texelFetchOffset","textureProjOffset","textureLodOffset","textureProjLod","textureProjLodOffset","textureGrad","textureGradOffset","textureProjGrad","textureProjGradOffset"];

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const e$2={enableCache:!1};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
var r,t={exports:{}};t.exports,void 0!==(r=["precision","highp","mediump","lowp","attribute","const","uniform","varying","break","continue","do","for","while","if","else","in","out","inout","float","int","void","bool","true","false","discard","return","mat2","mat3","mat4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","struct","asm","class","union","enum","typedef","template","this","packed","goto","switch","default","inline","noinline","volatile","public","static","extern","external","interface","long","short","double","half","fixed","unsigned","input","output","hvec2","hvec3","hvec4","dvec2","dvec3","dvec4","fvec2","fvec3","fvec4","sampler2DRect","sampler3DRect","sampler2DRectShadow","sizeof","cast","namespace","using"])&&(t.exports=r);const o=t$1(t.exports);var l$1,a$1={exports:{}};a$1.exports,l$1=a$1,function(e){var r=["<<=",">>=","++","--","<<",">>","<=",">=","==","!=","&&","||","+=","-=","*=","/=","%=","&=","^^","^=","|=","(",")","[","]",".","!","~","*","/","%","+","-","<",">","&","^","|","?",":","=",",",";","{","}"];void 0!==r&&(l$1.exports=r);}();const g$1=t$1(a$1.exports);var i$1={exports:{}};i$1.exports,function(e){!function(r){var t=function(){return ["abs","acos","all","any","asin","atan","ceil","clamp","cos","cross","dFdx","dFdy","degrees","distance","dot","equal","exp","exp2","faceforward","floor","fract","gl_BackColor","gl_BackLightModelProduct","gl_BackLightProduct","gl_BackMaterial","gl_BackSecondaryColor","gl_ClipPlane","gl_ClipVertex","gl_Color","gl_DepthRange","gl_DepthRangeParameters","gl_EyePlaneQ","gl_EyePlaneR","gl_EyePlaneS","gl_EyePlaneT","gl_Fog","gl_FogCoord","gl_FogFragCoord","gl_FogParameters","gl_FragColor","gl_FragCoord","gl_FragData","gl_FragDepth","gl_FragDepthEXT","gl_FrontColor","gl_FrontFacing","gl_FrontLightModelProduct","gl_FrontLightProduct","gl_FrontMaterial","gl_FrontSecondaryColor","gl_LightModel","gl_LightModelParameters","gl_LightModelProducts","gl_LightProducts","gl_LightSource","gl_LightSourceParameters","gl_MaterialParameters","gl_MaxClipPlanes","gl_MaxCombinedTextureImageUnits","gl_MaxDrawBuffers","gl_MaxFragmentUniformComponents","gl_MaxLights","gl_MaxTextureCoords","gl_MaxTextureImageUnits","gl_MaxTextureUnits","gl_MaxVaryingFloats","gl_MaxVertexAttribs","gl_MaxVertexTextureImageUnits","gl_MaxVertexUniformComponents","gl_ModelViewMatrix","gl_ModelViewMatrixInverse","gl_ModelViewMatrixInverseTranspose","gl_ModelViewMatrixTranspose","gl_ModelViewProjectionMatrix","gl_ModelViewProjectionMatrixInverse","gl_ModelViewProjectionMatrixInverseTranspose","gl_ModelViewProjectionMatrixTranspose","gl_MultiTexCoord0","gl_MultiTexCoord1","gl_MultiTexCoord2","gl_MultiTexCoord3","gl_MultiTexCoord4","gl_MultiTexCoord5","gl_MultiTexCoord6","gl_MultiTexCoord7","gl_Normal","gl_NormalMatrix","gl_NormalScale","gl_ObjectPlaneQ","gl_ObjectPlaneR","gl_ObjectPlaneS","gl_ObjectPlaneT","gl_Point","gl_PointCoord","gl_PointParameters","gl_PointSize","gl_Position","gl_ProjectionMatrix","gl_ProjectionMatrixInverse","gl_ProjectionMatrixInverseTranspose","gl_ProjectionMatrixTranspose","gl_SecondaryColor","gl_TexCoord","gl_TextureEnvColor","gl_TextureMatrix","gl_TextureMatrixInverse","gl_TextureMatrixInverseTranspose","gl_TextureMatrixTranspose","gl_Vertex","greaterThan","greaterThanEqual","inversesqrt","length","lessThan","lessThanEqual","log","log2","matrixCompMult","max","min","mix","mod","normalize","not","notEqual","pow","radians","reflect","refract","sign","sin","smoothstep","sqrt","step","tan","texture2D","texture2DLod","texture2DProj","texture2DProjLod","textureCube","textureCubeLod","texture2DLodEXT","texture2DProjLodEXT","textureCubeLodEXT","texture2DGradEXT","texture2DProjGradEXT","textureCubeGradEXT","textureSize","texelFetch"]}();void 0!==t&&(e.exports=t);}();}(i$1);const n=t$1(i$1.exports);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
var i=999,s$1=9999,c$1=0,u=1,p=2,d=3,f$1=4,l=5,h$1=6,y=7,w=8,g=9,m$1=10,k=11,b=["block-comment","line-comment","preprocessor","operator","integer","float","ident","builtin","keyword","whitespace","eof","integer"];function E(){var t,e,a,E=0,_=0,v=i,j=[],A=[],x=1,D=0,R=0,T=!1,G=!1,S="";return function(t){return A=[],null!==t?F(t.replace?t.replace(/\r\n/g,"\n"):t):L()};function X(t){t.length&&A.push({type:b[v],data:t,position:R,line:x,column:D});}function F(e){var r;for(E=0,a=(S+=e).length;t=S[E],E<a;){switch(r=E,v){case c$1:E=V();break;case u:E=P();break;case p:E=M();break;case d:E=O();break;case f$1:E=$();break;case k:E=W();break;case l:E=z();break;case s$1:E=I();break;case g:E=H();break;case i:E=C();}if(r!==E)if("\n"===S[r])D=0,++x;else ++D;}return _+=E,S=S.slice(E),A}function L(t){return j.length&&X(j.join("")),v=m$1,X("(eof)"),A}function C(){return j=j.length?[]:j,"/"===e&&"*"===t?(R=_+E-1,v=c$1,e=t,E+1):"/"===e&&"/"===t?(R=_+E-1,v=u,e=t,E+1):"#"===t?(v=p,R=_+E,E):/\s/.test(t)?(v=g,R=_+E,E):(T=/\d/.test(t),G=/[^\w_]/.test(t),R=_+E,v=T?f$1:G?d:s$1,E)}function H(){return /[^\s]/g.test(t)?(X(j.join("")),v=i,E):(j.push(t),e=t,E+1)}function M(){return "\r"!==t&&"\n"!==t||"\\"===e?(j.push(t),e=t,E+1):(X(j.join("")),v=i,E)}function P(){return M()}function V(){return "/"===t&&"*"===e?(j.push(t),X(j.join("")),v=i,E+1):(j.push(t),e=t,E+1)}function O(){if("."===e&&/\d/.test(t))return v=l,E;if("/"===e&&"*"===t)return v=c$1,E;if("/"===e&&"/"===t)return v=u,E;if("."===t&&j.length){for(;N(j););return v=l,E}if(";"===t||")"===t||"("===t){if(j.length)for(;N(j););return X(t),v=i,E+1}var a=2===j.length&&"="!==t;if(/[\w_\d\s]/.test(t)||a){for(;N(j););return v=i,E}return j.push(t),e=t,E+1}function N(t){for(var e,a,n=0;;){if(e=g$1.indexOf(t.slice(0,t.length+n).join("")),a=g$1[e],-1===e){if(n--+t.length>0)continue;a=t.slice(0,1).join("");}return X(a),R+=a.length,(j=j.slice(a.length)).length}}function W(){return /[^a-fA-F0-9]/.test(t)?(X(j.join("")),v=i,E):(j.push(t),e=t,E+1)}function $(){return "."===t||/[eE]/.test(t)?(j.push(t),v=l,e=t,E+1):"x"===t&&1===j.length&&"0"===j[0]?(v=k,j.push(t),e=t,E+1):/[^\d]/.test(t)?(X(j.join("")),v=i,E):(j.push(t),e=t,E+1)}function z(){return "f"===t&&(j.push(t),e=t,E+=1),/[eE]/.test(t)||"-"===t&&/[eE]/.test(e)?(j.push(t),e=t,E+1):/[^\d]/.test(t)?(X(j.join("")),v=i,E):(j.push(t),e=t,E+1)}function I(){if(/[^\d\w_]/.test(t)){var a=j.join("");return v=o.indexOf(a)>-1?w:n.indexOf(a)>-1?y:h$1,X(j.join("")),v=i,E}return j.push(t),e=t,E+1}}function _$1(t){var e=E(),a=[];return a=(a=a.concat(e(t))).concat(e(null))}function v(t){return _$1(t)}function j(t){return t.map((t=>"eof"!==t.type?t.data:"")).join("")}const A=["GL_OES_standard_derivatives","GL_EXT_frag_depth","GL_EXT_draw_buffers","GL_EXT_shader_texture_lod"];function x(t,e="100",a="300 es"){const r=/^\s*\#version\s+([0-9]+(\s+[a-zA-Z]+)?)\s*/;for(const n of t)if("preprocessor"===n.type){const t=r.exec(n.data);if(t){const r=t[1].replaceAll(/\s\s+/g," ");if(r===a)return r;if(r===e)return n.data="#version "+a,e;throw new Error("unknown glsl version: "+r)}}return t.splice(0,0,{type:"preprocessor",data:"#version "+a},{type:"whitespace",data:"\n"}),null}function D(t,e){for(let a=e-1;a>=0;a--){const e=t[a];if("whitespace"!==e.type&&"block-comment"!==e.type){if("keyword"!==e.type)break;if("attribute"===e.data||"in"===e.data)return !0}}return !1}function R(t,e,a,r){r=r||a;for(const n of t)if("ident"===n.type&&n.data===a){r in e?e[r]++:e[r]=0;return R(t,e,r+"_"+e[r],r)}return a}function T(t,e,a="afterVersion"){function r(t,e){for(let a=e;a<t.length;a++){const e=t[a];if("operator"===e.type&&";"===e.data)return a}return null}function n(t){let e=-1,n=0,o=-1;for(let i=0;i<t.length;i++){const s=t[i];if("preprocessor"===s.type&&(/\#(if|ifdef|ifndef)\s+.+/.test(s.data)?++n:/\#endif\s*.*/.test(s.data)&&--n),"afterVersion"!==a&&"afterPrecision"!==a||"preprocessor"===s.type&&/^#version/.test(s.data)&&(o=Math.max(o,i)),"afterPrecision"===a&&"keyword"===s.type&&"precision"===s.data){const e=r(t,i);if(null===e)throw new Error("precision statement not followed by any semicolons!");o=Math.max(o,e);}e<o&&0===n&&(e=i);}return e+1}const o={data:"\n",type:"whitespace"},i=e=>e<t.length&&/[^\r\n]$/.test(t[e].data);let s=n(t);i(s-1)&&t.splice(s++,0,o);for(const c of e)t.splice(s++,0,c);i(s-1)&&i(s)&&t.splice(s,0,o);}function G(t,e,a,r="lowp"){T(t,[{type:"keyword",data:"out"},{type:"whitespace",data:" "},{type:"keyword",data:r},{type:"whitespace",data:" "},{type:"keyword",data:a},{type:"whitespace",data:" "},{type:"ident",data:e},{type:"operator",data:";"}],"afterPrecision");}function S(t,e,a,r,n="lowp"){T(t,[{type:"keyword",data:"layout"},{type:"operator",data:"("},{type:"keyword",data:"location"},{type:"whitespace",data:" "},{type:"operator",data:"="},{type:"whitespace",data:" "},{type:"integer",data:r.toString()},{type:"operator",data:")"},{type:"whitespace",data:" "},{type:"keyword",data:"out"},{type:"whitespace",data:" "},{type:"keyword",data:n},{type:"whitespace",data:" "},{type:"keyword",data:a},{type:"whitespace",data:" "},{type:"ident",data:e},{type:"operator",data:";"}],"afterPrecision");}function X(t,e){let a,r,n=-1;for(let o=e;o<t.length;o++){const e=t[o];if("operator"===e.type&&("["===e.data&&(a=o),"]"===e.data)){r=o;break}"integer"===e.type&&(n=parseInt(e.data,10));}return a&&r&&t.splice(a,r-a+1),n}function F(a,r){if(a.startsWith("#version 300"))return a;const n=C(a);if(null!=n)return n;const o=v(a);if("300 es"===x(o,"100","300 es"))return a;let i=null,s=null;const c={},u={};for(let p=0;p<o.length;++p){const a=o[p];switch(a.type){case"keyword":r===H$1.VERTEX_SHADER&&"attribute"===a.data?a.data="in":"varying"===a.data&&(a.data=r===H$1.VERTEX_SHADER?"out":"in");break;case"builtin":if(/^texture(2D|Cube)(Proj)?(Lod|Grad)?(EXT)?$/.test(a.data.trim())&&(a.data=a.data.replaceAll(/(2D|Cube|EXT)/g,"")),r===H$1.FRAGMENT_SHADER&&"gl_FragColor"===a.data&&(i||(i=R(o,c,"fragColor"),G(o,i,"vec4")),a.data=i),r===H$1.FRAGMENT_SHADER&&"gl_FragData"===a.data){const t=X(o,p+1),e=R(o,c,"fragData");S(o,e,"vec4",t,"mediump"),a.data=e;}else r===H$1.FRAGMENT_SHADER&&"gl_FragDepthEXT"===a.data&&(s||(s=R(o,c,"gl_FragDepth")),a.data=s);break;case"ident":if(e$3.includes(a.data)){if(r===H$1.VERTEX_SHADER&&D(o,p))throw new Error("attribute in vertex shader uses a name that is a reserved word in glsl 300 es");a.data in u||(u[a.data]=R(o,c,a.data)),a.data=u[a.data];}}}for(let t=o.length-1;t>=0;--t){const e=o[t];if("preprocessor"===e.type){const a=e.data.match(/\#extension\s+(.*)\:/);if(a&&a[1]&&A.includes(a[1].trim())){const e=o[t+1];o.splice(t,e&&"whitespace"===e.type?2:1);}const r=e.data.match(/\#ifdef\s+(.*)/);r&&r[1]&&A.includes(r[1].trim())&&(e.data="#if 1");const n=e.data.match(/\#ifndef\s+(.*)/);n&&n[1]&&A.includes(n[1].trim())&&(e.data="#if 0");}}return H(a,j(o))}const L=new Map;function C(t){return e$2.enableCache?L.get(t):null}function H(t,e){return e$2.enableCache&&L.set(t,e),e}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const s=4294967295;class m{constructor(t,m,h,f,c=new Map){this._context=t,this._locations=f,this._uniformBlockBindings=c,this._refCount=1,this._compiled=!1,this._nameToUniformLocation={},this._nameToUniform1={},this._nameToUniform1v=new Map,this._nameToUniform2=new Map,this._nameToUniform3=new Map,this._nameToUniform4=new Map,this._nameToUniformMatrix3=new Map,this._nameToUniformMatrix4=new Map,t||console.error("RenderingContext isn't initialized!"),0===m.length&&console.error("Shaders source should not be empty!"),this._context.type===n$1.WEBGL2&&(m=F(m,H$1.VERTEX_SHADER),h=F(h,H$1.FRAGMENT_SHADER)),this._vShader=a(this._context,H$1.VERTEX_SHADER,m),this._fShader=a(this._context,H$1.FRAGMENT_SHADER,h),this._vShader&&this._fShader||console.error("Error loading shaders!"),this._context.instanceCounter.increment(V.Shader,this),c$2()&&(this.vertexShader=m,this.fragmentShader=h);const _=this._context.gl,l=_.createProgram();if(_.attachShader(l,this._vShader),_.attachShader(l,this._fShader),this._locations.forEach(((t,o)=>_.bindAttribLocation(l,t,o))),_.linkProgram(l),c$2()&&!_.getProgramParameter(l,_.LINK_STATUS)&&console.error(`Could not link shader\nvalidated: ${_.getProgramParameter(l,_.VALIDATE_STATUS)}, gl error ${_.getError()}, vertex: ${_.getShaderParameter(this._vShader,_.COMPILE_STATUS)}, fragment: ${_.getShaderParameter(this._fShader,_.COMPILE_STATUS)}, info log: ${_.getProgramInfoLog(l)}, vertex source: ${this.vertexShader}, fragment source: ${this.fragmentShader}`),this._context.type===n$1.WEBGL2){const t=_;for(const[o,i]of this._uniformBlockBindings){const e=t.getUniformBlockIndex(l,o);e<s&&t.uniformBlockBinding(l,e,i);}}this._glName=l,this._context.instanceCounter.increment(V.Program,this);}get glName(){return this._glName}get hasGLName(){return null!=this._glName}get compiled(){if(this._compiled)return !0;const t=this._context.gl.getExtension("KHR_parallel_shader_compile");return null==t||null==this.glName?(this._compiled=!0,!0):(this._compiled=!!this._context.gl.getProgramParameter(this.glName,t.COMPLETION_STATUS_KHR),this._compiled)}dispose(){if(--this._refCount>0)return;const t=this._context.gl;this._vShader&&(t.deleteShader(this._vShader),this._vShader=null,this._context.instanceCounter.decrement(V.Shader,this)),this._fShader&&(t.deleteShader(this._fShader),this._fShader=null),this._glName&&(t.deleteProgram(this._glName),this._glName=null,this._context.instanceCounter.decrement(V.Program,this));}ref(){++this._refCount;}_getUniformLocation(t){return void 0===this._nameToUniformLocation[t]&&null!=this.glName&&(++_.numUniforms,this._nameToUniformLocation[t]=this._context.gl.getUniformLocation(this.glName,t)),this._nameToUniformLocation[t]}hasUniform(t){return null!==this._getUniformLocation(t)}setUniform1i(t,o){const i=this._nameToUniform1[t];void 0!==i&&o===i||(this._context.gl.uniform1i(this._getUniformLocation(t),o),this._nameToUniform1[t]=o);}setUniform1iv(t,o){c(this._nameToUniform1v,t,o)&&this._context.gl.uniform1iv(this._getUniformLocation(t),o);}setUniform2iv(t,o){c(this._nameToUniform2,t,o)&&this._context.gl.uniform2iv(this._getUniformLocation(t),o);}setUniform3iv(t,o){c(this._nameToUniform3,t,o)&&this._context.gl.uniform3iv(this._getUniformLocation(t),o);}setUniform4iv(t,o){c(this._nameToUniform4,t,o)&&this._context.gl.uniform4iv(this._getUniformLocation(t),o);}setUniform1f(t,o){const i=this._nameToUniform1[t];void 0!==i&&o===i||(this._context.gl.uniform1f(this._getUniformLocation(t),o),this._nameToUniform1[t]=o);}setUniform1fv(t,o){c(this._nameToUniform1v,t,o)&&this._context.gl.uniform1fv(this._getUniformLocation(t),o);}setUniform2f(t,o,i){const e=this._nameToUniform2.get(t);void 0===e?(this._context.gl.uniform2f(this._getUniformLocation(t),o,i),this._nameToUniform2.set(t,[o,i])):o===e[0]&&i===e[1]||(this._context.gl.uniform2f(this._getUniformLocation(t),o,i),e[0]=o,e[1]=i);}setUniform2fv(t,o){c(this._nameToUniform2,t,o)&&this._context.gl.uniform2fv(this._getUniformLocation(t),o);}setUniform3f(t,o,i,e){const n=this._nameToUniform3.get(t);void 0===n?(this._context.gl.uniform3f(this._getUniformLocation(t),o,i,e),this._nameToUniform3.set(t,[o,i,e])):o===n[0]&&i===n[1]&&e===n[2]||(this._context.gl.uniform3f(this._getUniformLocation(t),o,i,e),n[0]=o,n[1]=i,n[2]=e);}setUniform3fv(t,o){c(this._nameToUniform3,t,o)&&this._context.gl.uniform3fv(this._getUniformLocation(t),o);}setUniform4f(t,o,i,e,n){const r=this._nameToUniform4.get(t);void 0===r?(this._context.gl.uniform4f(this._getUniformLocation(t),o,i,e,n),this._nameToUniform4.set(t,[o,i,e,n])):void 0!==r&&o===r[0]&&i===r[1]&&e===r[2]&&n===r[3]||(this._context.gl.uniform4f(this._getUniformLocation(t),o,i,e,n),r[0]=o,r[1]=i,r[2]=e,r[3]=n);}setUniform4fv(t,o){c(this._nameToUniform4,t,o)&&this._context.gl.uniform4fv(this._getUniformLocation(t),o);}setUniformMatrix3fv(t,o,i=!1){c(this._nameToUniformMatrix3,t,o)&&this._context.gl.uniformMatrix3fv(this._getUniformLocation(t),i,o);}setUniformMatrix4fv(t,o,i=!1){c(this._nameToUniformMatrix4,t,o)&&this._context.gl.uniformMatrix4fv(this._getUniformLocation(t),i,o);}stop(){}}function a(t,i,n){const r=t.gl,s=r.createShader(i);return r.shaderSource(s,n),r.compileShader(s),c$2()&&!r.getShaderParameter(s,r.COMPILE_STATUS)&&(console.error("Compile error in ".concat(i===H$1.VERTEX_SHADER?"vertex":"fragment"," shader")),console.error(r.getShaderInfoLog(s)),console.error(h(n))),_.enabled&&(_.compiledLOC+=n.match(/\n/g).length+1),s}function h(t){let o=2;return t.replaceAll("\n",(()=>"\n"+f(o++)+":"))}function f(t){return t>=1e3?t.toString():("  "+t).slice(-3)}function c(o,i,e){const n=o.get(i);return n?h$2(n,e):(o.set(i,Array.from(e)),!0)}const _={compiledLOC:0,numUniforms:0,enabled:!1};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class e$1{constructor(e){this._readFile=e;}resolveIncludes(e){return this._resolve(e)}_resolve(e,t=new Map){if(t.has(e))return t.get(e);const r=this._read(e);if(!r)throw new Error(`cannot find shader file ${e}`);const s=/^[^\S\n]*#include\s+<(\S+)>[^\S\n]?/gm;let n=s.exec(r);const l=[];for(;null!=n;)l.push({path:n[1],start:n.index,length:n[0].length}),n=s.exec(r);let a=0,h="";return l.forEach((e=>{h+=r.slice(a,e.start),h+=t.has(e.path)?"":this._resolve(e.path,t),a=e.start+e.length;})),h+=r.slice(a),t.set(e,h),h}_read(e){return this._readFile(e)}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function e(e,t,a=""){return new m(e,a+t.shaders.vertexShader,a+t.shaders.fragmentShader,t.attributes)}

export { e as a, e$1 as e, m };

//# sourceMappingURL=ProgramTemplate-f235ba4b.js.map