import { o } from './floatRGBA-da020d60.js';
import { Z as c } from './hub-compass-map-68308039.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const a=o=>"vertical"===o||"horizontal"===o||"cross"===o||"esriSFSCross"===o||"esriSFSVertical"===o||"esriSFSHorizontal"===o;function r(o,r,e){const i=c(Math.ceil(e)),n=a(r)?8*i:16*i,s=2*i;o.width=n,o.height=n;const l=o.getContext("2d");l.strokeStyle="#FFFFFF",l.lineWidth=i,l.beginPath(),"vertical"!==r&&"cross"!==r&&"esriSFSCross"!==r&&"esriSFSVertical"!==r||(l.moveTo(n/2,-s),l.lineTo(n/2,n+s)),"horizontal"!==r&&"cross"!==r&&"esriSFSCross"!==r&&"esriSFSHorizontal"!==r||(l.moveTo(-s,n/2),l.lineTo(n+s,n/2)),"forward-diagonal"!==r&&"diagonal-cross"!==r&&"esriSFSDiagonalCross"!==r&&"esriSFSForwardDiagonal"!==r||(l.moveTo(-s,-s),l.lineTo(n+s,n+s),l.moveTo(n-s,-s),l.lineTo(n+s,s),l.moveTo(-s,n-s),l.lineTo(s,n+s)),"backward-diagonal"!==r&&"diagonal-cross"!==r&&"esriSFSBackwardDiagonal"!==r&&"esriSFSDiagonalCross"!==r||(l.moveTo(n+s,-s),l.lineTo(-s,n+s),l.moveTo(s,-s),l.lineTo(-s,s),l.moveTo(n+s,n-s),l.lineTo(n-s,n+s)),l.stroke();const h=l.getImageData(0,0,o.width,o.height),c$1=new Uint8Array(h.data);let m;for(let t=0;t<c$1.length;t+=4)m=c$1[t+3]/255,c$1[t]=c$1[t]*m,c$1[t+1]=c$1[t+1]*m,c$1[t+2]=c$1[t+2]*m;return [c$1,o.width,o.height]}function e(t,a){const r="Butt"===a,e="Square"===a,i=!r&&!e;t.length%2==1&&(t=[...t,...t]);const n=15.5,s=2*n;let l=0;for(const o of t)l+=o;const h=Math.round(l*n),c=new Float32Array(h*s),m=.5*n;let S=0,F=0,g=.5,T=!0;for(const o of t){for(S=F,F+=o*n;g<=F;){let o=.5;for(;o<s;){const t=(o-.5)*h+g-.5,a=i?(o-n)*(o-n):Math.abs(o-n);c[t]=T?r?Math.max(Math.max(S+m-g,a),Math.max(g-F+m,a)):a:i?Math.min((g-S)*(g-S)+a,(g-F)*(g-F)+a):e?Math.min(Math.max(g-S,a),Math.max(F-g,a)):Math.min(Math.max(g-S+m,a),Math.max(F+m-g,a)),o++;}g++;}T=!T;}const d=c.length,f=new Uint8Array(4*d);for(let M=0;M<d;++M){const t=(i?Math.sqrt(c[M]):c[M])/n;o(t,f,4*M);}return [f,h,s]}

export { e, r };

//# sourceMappingURL=rasterizingUtils-215c5c77.js.map