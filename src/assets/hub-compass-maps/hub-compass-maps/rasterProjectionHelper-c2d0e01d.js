import { fq as Cn, fr as Y$1, f as s, fs as $$1, ft as rn, cs as M$1, cx as nn, ca as H$1, a9 as x, fu as E$1, fv as s$1, fw as P$1, fx as a, fy as O$1, aB as R$1, bN as j$1, aE as f } from './hub-compass-map-68308039.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
var y;function d(e,t,n){return !Cn(e,t,n)}function M(e,n,i){const o=d(e,n,i);if(o&&!Y$1())throw new s("rasterprojectionhelper-project","projection engine is not loaded");return o}!function(e){e[e.None=0]="None",e[e.North=1]="North",e[e.South=2]="South",e[e.Both=3]="Both";}(y||(y={}));const w=(e,t,n,i=0)=>{if(1===n[0])return [0,0];let o=1,r=-1,s=1,a=-1;for(let g=0;g<e.length;g+=2)isNaN(e[g])||(o=o>e[g]?e[g]:o,r=r>e[g]?r:e[g],s=s>e[g+1]?e[g+1]:s,a=a>e[g+1]?a:e[g+1]);const{cols:l,rows:c}=t,f=(r-o)/l/n[0],u=(a-s)/c/n[1],m=2*i;let x=0,h=!1,p=[0,0];for(let g=0;g<l-3;g++){for(let t=0;t<c-3;t++){const n=g*c*2+2*t,i=(e[n]+e[n+4]+e[n+4*c]+e[n+4*c+4])/4,o=(e[n+1]+e[n+5]+e[n+4*c+1]+e[n+4*c+5])/4,r=Math.abs((i-e[n+2*c+2])/f),s=Math.abs((o-e[n+2*c+3])/u);if(r+s>x&&(x=r+s,p=[r,s]),m&&x>m){h=!0;break}}if(h)break}return p},R={3395:20037508.342789244,3410:17334193.943686873,3857:20037508.342788905,3975:17367530.445161372,4087:20037508.342789244,4088:20015108.787169147,6933:17367530.445161372,32662:20037508.342789244,53001:20015086.79602057,53002:10007543.39801029,53003:20015086.79602057,53004:20015086.79602057,53016:14152803.599503474,53017:17333573.624304302,53034:20015086.79602057,53079:20015114.352186374,53080:20015114.352186374,54001:20037508.342789244,54002:10018754.171394624,54003:20037508.342789244,54004:20037508.342789244,54016:14168658.027268292,54017:17367530.44516137,54034:20037508.342789244,54079:20037508.342789244,54080:20037508.342789244,54100:20037508.342789244,54101:20037508.342789244},S=32,P=4,b=P,G=new Map,N=new Map,E=500;async function k(){Y$1()||await $$1();}function T(e,t,n){M(e.spatialReference,t);return n?rn(t,e.spatialReference,e):rn(e.spatialReference,t,e)}function C(e,t,i,o=null){const r=e.spatialReference;if(r.equals(t))return e;M(r,t,o);const s=i.center,a=new M$1({xmin:s.x-e.x/2,xmax:s.x+e.x/2,ymin:s.y-e.y/2,ymax:s.y+e.y/2,spatialReference:r}),l=nn(a,t,o),c=K(t);let f;if(null==l||null!=c&&l.width>=c){const i=H$1(r)/H$1(t);f={x:e.x*i,y:e.y*i};}else f={x:l.width,y:l.height};return f}function v(e,t=.01){return H$1(e)?t/H$1(e):0}function _(e,t,n=null,i=!0){const o=e.spatialReference;if(o.equals(t))return e;M(o,t,n);const r=nn(e,t,n);return i&&r?(j([e],[r],o,t),r):r}function j(e,t,n,i){const o=D(n,!0),r=D(i,!0),s=v(n,E),a=v(i,E);if(s&&null!=o&&null!=r)for(let l=0;l<e.length;l++){const n=t[l];if(!n)continue;const{x:i}=e[l],{x:c}=n;c>=r[1]-a&&Math.abs(i-o[0])<s?n.x-=r[1]-r[0]:c<=r[0]+a&&Math.abs(i-o[1])<s&&(n.x+=r[1]-r[0]);}}function z(e){const{inSR:t,outSR:n,datumTransformation:i,preferPE:o}=e;if(t.equals(n)){const{points:t}=B(e,null);return t}if(t.isWebMercator&&n.isWGS84||t.isWGS84&&n.isWebMercator)return O(e);if(M(t,n,i)&&o){if(t.isGeographic)return W(e);if(null!=I(t))return W(e)}return L(e)}function L(e){const{points:t}=B(e,null),{inSR:n,outSR:i,datumTransformation:o}=e,r=t.map((e=>new x(e[0],e[1],n))),s=nn(r,i,o);return o&&j(r,s,n,i),s.map((e=>e?[e.x,e.y]:[NaN,NaN]))}function W(e){const{inSR:t,outSR:n,datumTransformation:a$1}=e,l=I(t),{points:c,mask:f}=B(e,l);if(!t.isGeographic){const e=t.wkid?E$1.coordsys(t.wkid):E$1.fromString(t.isGeographic?s$1.PE_TYPE_GEOGCS:s$1.PE_TYPE_PROJCS,t.wkt);P$1.projToGeog(e,c.length,c);}if(null!=a$1&&a$1.steps.length){let e;const t=179.9955;if(n.isGeographic&&(e=c.map((([e])=>e>t?1:e<-t?-1:0))),a$1.steps.forEach((e=>{const t=e.wkid?E$1.geogtran(e.wkid):E$1.fromString(s$1.PE_TYPE_GEOGTRAN,e.wkt);a.geogToGeog(t,c.length,c,null,e.isInverse?s$1.PE_TRANSFORM_2_TO_1:s$1.PE_TRANSFORM_1_TO_2);})),e)for(let n=0;n<c.length;n++){const i=e[n],o=c[n][0],r=o>t?1:o<-t?-1:0;i&&r&&i!==r&&(c[n][0]=i>0?o+360:o-360);}}if(!n.isGeographic){const e=I(n,!0),t=null!=e&&e.isEnvelope?[e.bbox[1],e.bbox[3]]:[-90,90];F(c,t);const s=n.wkid?E$1.coordsys(n.wkid):E$1.fromString(n.isGeographic?s$1.PE_TYPE_GEOGCS:s$1.PE_TYPE_PROJCS,n.wkt);P$1.geogToProj(s,c.length,c);}let u=c;if(f&&c.length!==f.length){u=[];for(let e=0,t=0;e<f.length;e++)f[e]?u.push(c[t++]):u.push([NaN,NaN]);}return u}function O(e){const{cols:t,rows:n,xres:i,yres:o,usePixelCenter:r,inSR:s,outSR:a}=e;let{xmin:l,ymax:c}=e;r&&(l+=i/2,c-=o/2);const f=[],u=[],x$1=Math.max(t,n);for(let g=0;g<x$1;g++){const e=l+i*Math.min(t,g),r=c-o*Math.min(n,g),x$1=nn(new x({x:e,y:r,spatialReference:s}),a);g<=t&&f.push(x$1.x),g<=n&&u.push(x$1.y);}const p=[];for(let m=0;m<t;m++)for(let e=0;e<n;e++)p.push([f[m],u[e]]);return p}function I(e,t=!1){let n=e.wkid||e.wkt;if(!n||e.isGeographic)return null;if(n=String(n),G.has(n)){const e=G.get(n);return t?e?.gcs:e?.pcs}const r=e.wkid?E$1.coordsys(e.wkid):E$1.fromString(e.isGeographic?s$1.PE_TYPE_GEOGCS:s$1.PE_TYPE_PROJCS,e.wkt),s=A(r,v(e,1e-4)),a=A(r,0,!0);return G.set(n,{pcs:s,gcs:a}),t?a:s}function A(e,t=0,n=!1){const i=O$1.generate(e),o=n?e.horizonGcsGenerate():e.horizonPcsGenerate();if(!i||!o?.length)return null;let r=!1,s=o.find((e=>1===e.getInclusive()&&1===e.getKind()));if(!s){if(s=o.find((e=>1===e.getInclusive()&&0===e.getKind())),!s)return null;r=!0;}const l=n?0:(2===i.getNorthPoleLocation()?1:0)|(2===i.getSouthPoleLocation()?2:0),c=i.isPannableRectangle(),f=s.getCoord();if(r)return {isEnvelope:r,isPannable:c,vertices:f,coef:null,bbox:[f[0][0]-t,f[0][1]-t,f[1][0]+t,f[1][1]+t],poleLocation:l};let u=0;const m=[];let[x,h]=f[0],[p,g]=f[0];for(let a=0,y=f.length;a<y;a++){u++,u===y&&(u=0);const[e,t]=f[a],[n,i]=f[u];if(i===t)m.push([e,n,t,i,2]);else {const o=(n-e)/(i-t||1e-4),r=e-o*t;t<i?m.push([o,r,t,i,0]):m.push([o,r,i,t,1]);}x=x<e?x:e,h=h<t?h:t,p=p>e?p:e,g=g>t?g:t;}return {isEnvelope:!1,isPannable:c,vertices:f,coef:m,bbox:[x,h,p,g],poleLocation:l}}function B(e,t){const n=[],{cols:i,rows:o,xres:r,yres:s,usePixelCenter:a}=e;let{xmin:l,ymax:c}=e;if(a&&(l+=r/2,c-=s/2),null==t){for(let e=0;e<i;e++)for(let t=0;t<o;t++)n.push([l+r*e,c-s*t]);return {points:n}}const f=new Uint8Array(i*o);if(t.isEnvelope){const{bbox:[e,a,u,m]}=t;for(let x=0,h=0;x<i;x++){const i=l+r*x,p=t.isPannable||i>=e&&i<=u;for(let e=0;e<o;e++,h++){const t=c-s*e;p&&t>=a&&t<=m&&(n.push([i,t]),f[h]=1);}}return {points:n,mask:f}}const u=t.coef,m=[];for(let x=0;x<o;x++){const e=c-s*x,t=[],n=[];for(let o=0;o<u.length;o++){const[i,r,s,a,l]=u[o];if(e===s&&s===a)t.push(i),t.push(r),n.push(2),n.push(2);else if(e>=s&&e<=a){const o=i*e+r;t.push(o),n.push(l);}}let i=t;if(t.length>2){let e=2===n[0]?0:n[0],o=t[0];i=[];for(let r=1;r<n.length;r++)2===n[r]&&r!==n.length-1||(n[r]!==e&&(i.push(0===e?Math.min(o,t[r-1]):Math.max(o,t[r-1])),e=n[r],o=t[r]),r===n.length-1&&i.push(0===n[r]?Math.min(o,t[r]):Math.max(o,t[r])));i.sort(((e,t)=>e-t));}else t[0]>t[1]&&(i=[t[1],t[0]]);m.push(i);}for(let x=0,h=0;x<i;x++){const e=l+r*x;for(let t=0;t<o;t++,h++){const i=c-s*t,o=m[t];if(2===o.length)e>=o[0]&&e<=o[1]&&(n.push([e,i]),f[h]=1);else if(o.length>2){let t=!1;for(let n=0;n<o.length;n+=2)if(e>=o[n]&&e<=o[n+1]){t=!0;break}t&&(n.push([e,i]),f[h]=1);}}}return {points:n,mask:f}}function F(e,t){const[n,i]=t;for(let o=0;o<e.length;o++){const t=e[o][1];(t<n||t>i)&&(e[o]=[NaN,NaN]);}}function Y(e){const t=K(e[0].spatialReference);if(e.length<2||null==t)return e[0];const n=v(e[0].spatialReference);if(1===(e=e.filter((e=>e.width>n))).length)return e[0];let{xmin:i,xmax:o,ymin:r,ymax:s}=e[0];for(let a=1;a<e.length;a++){const n=e[a];o=n.xmax+t*a,r=Math.min(r,n.ymin),s=Math.max(s,n.ymax);}return new M$1({xmin:i,xmax:o,ymin:r,ymax:s,spatialReference:e[0].spatialReference})}function q(t,n,i=null,o=!0){const r=t.spatialReference;if(r.equals(n))return t;const s=Q(t),a=K(r,!0),l=K(n);if(0===s||null==a||null==l){const e=X(t,n,i,o);if(null==a&&null!=l&&Math.abs(e.width-l)<v(n)&&Y$1()){const i=I(r);if(null!=i&&i.poleLocation===y.None&&t.width<(i.bbox[2]-i.bbox[0])/2)return U(t,n)||e}return e}const f=t.clone().normalize();if(1===f.length&&t.xmax<a&&t.xmax-a/2>v(r)){const{xmin:e,xmax:n}=t;for(let i=0;i<=s;i++){const o=0===i?e:-a/2,l=i===s?n-a*i:a/2;f[i]=new M$1({xmin:o,xmax:l,ymin:t.ymin,ymax:t.ymax,spatialReference:r});}}return Y(f.map((e=>X(e,n,i,o))).filter(R$1))}function J(e,t,n){if("extent"===e.type){const{xmin:t,ymin:n,xmax:i,ymax:o,spatialReference:r}=e;e=new j$1({rings:[[[t,o],[i,o],[i,n],[t,n],[t,o]]],spatialReference:r});}return e.spatialReference.equals(t)?e:(M(e.spatialReference,t,n),nn(e,t,n))}function U(e,t){const n=K(t);if(null==n)return null;let{xmin:i,ymin:o,xmax:r,ymax:s}=e;const a=e.spatialReference,l=new j$1({spatialReference:a,rings:[[[i,o],[r,o],[r,s],[i,s],[i,o]]]}),c=nn(l,t);if(2!==c.rings.length||!c.rings[0].length||!c.rings[1].length)return null;const{rings:f}=c,u=v(a),h=new M$1({spatialReference:t});for(let m=0;m<2;m++){i=r=f[m][0][0],o=s=f[m][0][1];for(let e=0;e<f[m].length;e++)i=i>f[m][e][0]?f[m][e][0]:i,r=r<f[m][e][0]?f[m][e][0]:r,o=o>f[m][e][1]?f[m][e][1]:o,s=s<f[m][e][1]?f[m][e][1]:s;if(0===m)h.ymin=o,h.ymax=s,h.xmin=i,h.xmax=r;else if(h.ymin=Math.min(h.ymin,o),h.ymax=Math.max(h.ymax,s),Math.abs(r-n/2)<u)h.xmin=i,h.xmax=h.xmax+n;else {if(!(Math.abs(i+n/2)<u))return null;h.xmax=r+n;}}return h}function X(e,t,n=null,i=!0,o=!0){const r=e.spatialReference;if(r.equals(t)||!t)return e;M(r,t,n);const s=nn(e,t,n);if(o&&t.isWebMercator&&s&&(s.ymax=Math.min(20037508.342787,s.ymax),s.ymin=Math.max(-20037508.342787,s.ymin),s.ymin>=s.ymax))return null;if(!i||!s)return s;const a=D(r,!0),l=D(t,!0);if(null==a||null==l)return s;const c=v(r,.001),f=v(r,E),u=v(t,.001);if(Math.abs(s.xmin-l[0])<u&&Math.abs(s.xmax-l[1])<u){const i=Math.abs(e.xmin-a[0]),o=Math.abs(a[1]-e.xmax);if(i<c&&o>f){s.xmin=l[0];const i=[];i.push(new x(e.xmax,e.ymin,r)),i.push(new x(e.xmax,(e.ymin+e.ymax)/2,r)),i.push(new x(e.xmax,e.ymax,r));const o=i.map((e=>_(e,t,n))).filter((e=>!isNaN(e?.x))).map((e=>e.x));s.xmax=Math.max.apply(null,o);}if(o<c&&i>f){s.xmax=l[1];const i=[];i.push(new x(e.xmin,e.ymin,r)),i.push(new x(e.xmin,(e.ymin+e.ymax)/2,r)),i.push(new x(e.xmin,e.ymax,r));const o=i.map((e=>_(e,t,n))).filter((e=>!isNaN(e?.x))).map((e=>e.x));s.xmin=Math.min.apply(null,o);}}else {const e=v(t,.001);Math.abs(s.xmin-l[0])<e&&(s.xmin=l[0]),Math.abs(s.xmax-l[1])<e&&(s.xmax=l[1]);}return s}function K(e,t=!1){if(!e)return null;const n=t?20037508.342787:20037508.342788905;return e.isWebMercator?2*n:e.wkid&&e.isGeographic?360:2*R[e.wkid]||null}function D(e,t=!1){if(e.isGeographic)return [-180,180];const n=K(e,t);return null!=n?[-n/2,n/2]:null}function H(e,t,n,i){let o=(e-t)/n;return o-Math.floor(o)!=0?o=Math.floor(o):i&&(o-=1),o}function Q(e,t=!1){const n=K(e.spatialReference);if(null==n)return 0;const i=t?0:-(n/2),o=v(e.spatialReference),r=!t&&Math.abs(e.xmax-n/2)<o?n/2:e.xmax,s=!t&&Math.abs(e.xmin+n/2)<o?-n/2:e.xmin;return H(r,i,n,!0)-H(s,i,n,!1)}function V(e){const t=e.storageInfo.origin.x,n=K(e.spatialReference,!0);if(null==n)return {originX:t,halfWorldWidth:null,pyramidsInfo:null};const i=n/2,{nativePixelSize:o,storageInfo:r,extent:s}=e,{maximumPyramidLevel:a,blockWidth:l,pyramidScalingFactor:c}=r;let f=o.x;const u=[],m=null!=e.transform&&"gcs-shift"===e.transform.type,x=t+(m?0:i),h=m?n-t:i-t;for(let p=0;p<=a;p++){const e=(s.xmax-t)/f/l,n=e-Math.floor(e)==0?e:Math.ceil(e),i=h/f/l,o=i-Math.floor(i)==0?i:Math.ceil(i),r=Math.floor(x/f/l),a=Math.round(x/f)%l,m=(l-Math.round(h/f)%l)%l;u.push({resolutionX:f,blockWidth:l,datsetColumnCount:n,worldColumnCountFromOrigin:o,leftMargin:a,rightPadding:m,originColumnOffset:r}),f*=c;}return {originX:t,halfWorldWidth:i,pyramidsInfo:u,hasGCSSShiftTransform:m}}function Z(e){if(!e||e.isGeographic)return e;const t=String(e.wkid||e.wkt);let n;if(N.has(t))n=N.get(t);else {n=(e.wkid?E$1.coordsys(e.wkid):E$1.fromString(s$1.PE_TYPE_PROJCS,e.wkt)).getGeogcs().getCode(),N.set(t,n);}return new f({wkid:n})}function $(e){const t=e.isAdaptive&&null==e.spacing;let n=e.spacing||[S,S],i=ee(e),o={cols:i.size[0]+1,rows:i.size[1]+1};const r=i.outofBoundPointCount>0&&i.outofBoundPointCount<i.offsets.length/2;let s=i.outofBoundPointCount===i.offsets.length/2||t&&r?[0,0]:w(i.offsets,o,n,b);const a=(s[0]+s[1])/2,l=e.projectedExtent.spatialReference,c=e.srcBufferExtent.spatialReference;if(t&&(r||a>b)){d(l,c,e.datumTransformation)&&(l.isGeographic||I(l)),n=[P,P],i=ee({...e,spacing:n}),o={cols:i.size[0]+1,rows:i.size[1]+1},s=w(i.offsets,o,n,b);}if(i.error=s,n[0]>1&&(i.coefficients=te(i.offsets,o,r)),e.includeGCSGrid&&!l.isGeographic&&!l.isWebMercator)if(c.isGeographic)i.gcsGrid={offsets:i.offsets,coefficients:i.coefficients,spacing:n};else {const t=I(l);if(null!=t&&!t.isEnvelope){const t=Z(l),s=q(e.projectedExtent,t),{offsets:a}=ee({...e,srcBufferExtent:s,spacing:n}),c=te(a,o,r);i.gcsGrid={offsets:a,coefficients:c,spacing:n};}}return i}function ee(e){const{projectedExtent:t,srcBufferExtent:n,pixelSize:i,datumTransformation:o,rasterTransform:r}=e,s=t.spatialReference,a=n.spatialReference,l=M(s,a),{xmin:c,ymin:f,xmax:u,ymax:m}=t,x$1=K(a),p=null!=x$1&&(e.hasWrapAround||"gcs-shift"===r?.type),g=e.spacing||[S,S],y=g[0]*i.x,d=g[1]*i.y,w=1===g[0],R=Math.ceil((u-c)/y-.1/g[0])+(w?0:1),b=Math.ceil((m-f)/d-.1/g[1])+(w?0:1),G=z({cols:R,rows:b,xmin:c,ymax:m,xres:y,yres:d,inSR:s,outSR:a,datumTransformation:o,preferPE:g[0]<=P,usePixelCenter:w}),N=[];let k,T=0;const C=w?-1:NaN,{xmin:_,xmax:j,ymax:L,width:W,height:O}=n,A=v(a,E),B=null!=x$1&&_>0&&j>x$1/2;let F=!1;if(l){const e=I(s);F=null!=e&&e.poleLocation>0;}for(let M=0;M<R;M++){const e=[];for(let t=0;t<b;t++){let n=G[M*b+t];if(p&&n[0]>j&&n[0]>x$1/2-A?n[0]-=x$1:p&&0===M&&n[0]<0&&B&&!r&&(n[0]+=x$1),!n||isNaN(n[0])||isNaN(n[1]))N.push(C),N.push(C),e.push(null),T++;else {if(r){const e=r.inverseTransform(new x({x:n[0],y:n[1],spatialReference:a}));n=[e.x,e.y];}e.push(n),M>0&&p&&k[t]&&n[0]<k[t][0]&&(n[0]+=x$1,F&&n[0]>j&&n[0]>x$1&&(n[0]-=x$1)),N.push((n[0]-_)/W),N.push((L-n[1])/O);}}k=e;}return {offsets:N,error:null,coefficients:null,outofBoundPointCount:T,spacing:g,size:w?[R,b]:[R-1,b-1]}}function te(e,t,n){const{cols:i,rows:o}=t,r=new Float32Array((i-1)*(o-1)*2*6),s=new Float32Array([-0,-1,1,-1,1,-0,1,-0,-0]),a=new Float32Array([-1,1,0,0,-1,1,1,0,0]);for(let l=0;l<i-1;l++){for(let t=0;t<o-1;t++){let n=l*o*2+2*t;const c=e[n],f=e[n+1],u=e[n+2],m=e[n+3];n+=2*o;const x=e[n],h=e[n+1],p=e[n+2],g=e[n+3];let y=0,d=12*(t*(i-1)+l);for(let e=0;e<3;e++)r[d++]=s[y++]*c+s[y++]*u+s[y++]*p;y=0;for(let e=0;e<3;e++)r[d++]=s[y++]*f+s[y++]*m+s[y++]*g;y=0;for(let e=0;e<3;e++)r[d++]=a[y++]*c+a[y++]*x+a[y++]*p;y=0;for(let e=0;e<3;e++)r[d++]=a[y++]*f+a[y++]*h+a[y++]*g;}if(n)for(let e=0;e<r.length;e++)isNaN(r[e])&&(r[e]=-1);}return r}function ne(e){const t=e.clone().normalize();return 1===t.length?t[0]:Y(t)}function ie(e,t,i){const{storageInfo:o,pixelSize:r}=t;let s=0,a=!1;const{pyramidResolutions:l}=o,c="mixed"===o.tileInfo.format?.toLowerCase()?Math.max(1,Math.min(3,o.tileInfo.dpi/96)):1,f=(e.x+e.y)/2/c;if(null!=l&&l.length){const e=l[l.length-1],o=(e.x+e.y)/2,c=(r.x+r.y)/2;if(f<=c)s=0;else if(f>=o)s=l.length,a=f/o>8;else {let e,t=c;for(let n=1;n<=l.length;n++){if(e=(l[n-1].x+l[n-1].y)/2,f<=e){f===e?s=n:"down"===i?(s=n-1,a=f/t>8):s="up"===i||f-t>e-f||f/t>2?n:n-1;break}t=e;}}const u=0===s?r:l[s-1];if(a){Math.min(u.x,u.y)*H$1(t.spatialReference)>19567&&(a=!1);}return {pyramidLevel:s,pyramidResolution:new x({x:u.x,y:u.y,spatialReference:t.spatialReference}),excessiveReading:a}}const u=Math.log(e.x/r.x)/Math.LN2,m=Math.log(e.y/r.y)/Math.LN2,x$1=t.storageInfo.maximumPyramidLevel||0;s="down"===i?Math.floor(Math.min(u,m)):"up"===i?Math.ceil(Math.max(u,m)):Math.round((u+m)/2),s<0?s=0:s>x$1&&(a=s>x$1+3,s=x$1);const p=2**s;return {pyramidLevel:s,pyramidResolution:new x({x:p*t.nativePixelSize.x,y:p*t.nativePixelSize.y,spatialReference:t.spatialReference}),excessiveReading:a}}function oe(e,t,i){const o=i?.tileSize??512,r=i?.alignGlobalDatasetWithAGOL??!0,s=!!i?.limitToSrcResolution,{extent:a,spatialReference:l,pixelSize:c}=e,f=C(new x({x:c.x,y:c.y,spatialReference:l}),t,a);if(null==f)return {projectedPixelSize:null,scales:null,srcResolutions:null,isCustomTilingScheme:!1};const u=(f.x+f.y)/2,m=H$1(t),x$1=u*m*96*39.37,p=t.isGeographic?256/o*295828763.7958547:256/o*591657527.591555;let g="vector-magdir"===e.dataType||"vector-uv"===e.dataType;const y=q(a,t),d=Math.min(Math.ceil(Math.log(Math.min(e.width,e.height)/32)/Math.LN2),Math.ceil(Math.log(p/2/x$1)/Math.LN2));if(!g&&r&&(t.isGeographic||t.isWebMercator)&&(g=y.xmin*y.xmax<0,!g&&d<3)){const e=K(t);if(null!=e){const t=2**d*u*o,n=Math.ceil(e/t);g=1===n||2===n&&e/2-y.xmax<t;}}let M,w=x$1;const R=1.001,S=Math.min(2,Math.max(1.414,e.storageInfo?.pyramidScalingFactor||2));if(g){w=p;const e=t.isGeographic?1341104507446289e-21:.29858214164761665,n=e*(96*m*39.37),i=t.isGeographic?4326:3857;M=C(new x({x:e,y:e,spatialReference:{wkid:i}}),l,y),M.x*=w/n,M.y*=w/n;}else {M={x:c.x,y:c.y};let e=0;for(;w<p*(R/2)&&e<d;)e++,w*=S,M.x*=S,M.y*=S;Math.max(w,p)/Math.min(w,p)<=R&&(w=p);}const P=[w],b=[{x:M.x,y:M.y}],G=70.5310735,N=Math.min(G,x$1)/R;for(;w>=N;)w/=S,M.x/=S,M.y/=S,P.push(w),b.push({x:M.x,y:M.y});if(s){const e=.001*c.x;let t=b.findIndex((t=>t.x>=c.x-e&&t.x<=c.x+e));t>-1?(b.length=t+1,P.length=t+1):(t=b.findIndex((t=>t.x<=c.x+e)),t>0&&(b.length=t,P.length=t));}return {projectedPixelSize:f,scales:P,srcResolutions:b,isCustomTilingScheme:!g}}

export { $, C, J, K, Q, T, V, _, d, ie as i, k, ne as n, oe as o, q };

//# sourceMappingURL=rasterProjectionHelper-c2d0e01d.js.map