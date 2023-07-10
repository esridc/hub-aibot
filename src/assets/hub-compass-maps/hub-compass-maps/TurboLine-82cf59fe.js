import { e as has, c6 as a$1 } from './hub-compass-map-68308039.js';
import { e as e$1, n as n$2 } from './enums-63fd0640.js';
import { $ } from './definitions-6e5909d3.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const s$1=128e3;let n$1=null,e=null;async function i(){return n$1||(n$1=o$1()),n$1}async function o$1(){const s=has("esri-csp-restrictions")?await import('./libtess-asm-c2bf039a.js').then((t=>t.l)):await import('./libtess-a780874e.js').then((t=>t.l));e=await s.load({locateFile:s=>a$1(`esri/core/libs/libtess/${s}`)});}function r$1(t,n){const i=Math.max(t.length,s$1);return e.triangulate(t,n,i)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function x(t,e){return t.x===e.x&&t.y===e.y}function r(t){if(!t)return;const e=t.length;if(e<=1)return;let i=0;for(let r=1;r<e;r++)x(t[r],t[i])||++i===r||(t[i]=t[r]);t.length=i+1;}function n(t,e){return t.x=e.y,t.y=-e.x,t}function s(t,e){return t.x=-e.y,t.y=e.x,t}function y(t,e){return t.x=e.x,t.y=e.y,t}function o(t,e){return t.x=-e.x,t.y=-e.y,t}function h(t){return Math.sqrt(t.x*t.x+t.y*t.y)}function l(t,e){return t.x*e.y-t.y*e.x}function _(t,e){return t.x*e.x+t.y*e.y}function a(t,e,i,x){return t.x=e.x*i+e.y*x,t.y=e.x*x-e.y*i,t}class c{constructor(t,e,i){this._writeVertex=t,this._writeTriangle=e,this._canUseThinTessellation=i,this._prevNormal={x:void 0,y:void 0},this._nextNormal={x:void 0,y:void 0},this._textureNormalLeft={x:0,y:1},this._textureNormalRight={x:0,y:-1},this._textureNormal={x:void 0,y:void 0},this._joinNormal={x:void 0,y:void 0},this._inner={x:void 0,y:void 0},this._outer={x:void 0,y:void 0},this._roundStart={x:void 0,y:void 0},this._roundEnd={x:void 0,y:void 0},this._startBreak={x:void 0,y:void 0},this._endBreak={x:void 0,y:void 0},this._innerPrev={x:void 0,y:void 0},this._innerNext={x:void 0,y:void 0},this._bevelStart={x:void 0,y:void 0},this._bevelEnd={x:void 0,y:void 0},this._bevelMiddle={x:void 0,y:void 0};}tessellate(t,e){r(t),this._canUseThinTessellation&&e.halfWidth<$&&!e.offset?this._tessellateThin(t,e):this._tessellate(t,e);}_tessellateThin(t,e){if(t.length<2)return;const i=e.wrapDistance||65535;let x=e.initialDistance||0,r=!1,n=t[0].x,s=t[0].y;const y=t.length;for(let o=1;o<y;++o){r&&(r=!1,x=0);let e=t[o].x,y=t[o].y,h=e-n,l=y-s,_=Math.sqrt(h*h+l*l);if(h/=_,l/=_,x+_>i){r=!0;const t=(i-x)/_;_=i-x,e=(1-t)*n+t*e,y=(1-t)*s+t*y,--o;}const a=this._writeVertex(n,s,0,0,h,l,l,-h,0,-1,x),c=this._writeVertex(n,s,0,0,h,l,-l,h,0,1,x);x+=_;const d=this._writeVertex(e,y,0,0,h,l,l,-h,0,-1,x),u=this._writeVertex(e,y,0,0,h,l,-l,h,0,1,x);this._writeTriangle(a,c,d),this._writeTriangle(c,d,u),n=e,s=y;}}_tessellate(i,r){const c=i[0],d=i[i.length-1],u=x(c,d),v=u?3:2;if(i.length<v)return;const f=r.pixelCoordRatio,w=null!=r.capType?r.capType:e$1.BUTT,T=null!=r.joinType?r.joinType:n$2.MITER,g=null!=r.miterLimit?Math.min(r.miterLimit,4):2,m=null!=r.roundLimit?Math.min(r.roundLimit,1.05):1.05,V=null!=r.halfWidth?r.halfWidth:2,N=!!r.textured;let E,b,R,U=null;const k=this._prevNormal,p=this._nextNormal;let M=-1,B=-1;const L=this._joinNormal;let D,S;const j=this._textureNormalLeft,A=this._textureNormalRight,O=this._textureNormal;let I=-1,P=-1;const W=r.wrapDistance||65535;let q=r.initialDistance||0;const Q=this._writeVertex,X=this._writeTriangle,C=(t,e,i,x,r,n)=>{const s=Q(b,R,D,S,i,x,t,e,r,n,q);return I>=0&&P>=0&&s>=0&&X(I,P,s),I=P,P=s,s};u&&(E=i[i.length-2],p.x=d.x-E.x,p.y=d.y-E.y,B=h(p),p.x/=B,p.y/=B);let z=!1;for(let x=0;x<i.length;++x){if(z&&(z=!1,q=0),E&&(k.x=-p.x,k.y=-p.y,M=B,q+M>W&&(z=!0)),z){const t=(W-q)/M;M=W-q,E={x:(1-t)*E.x+t*i[x].x,y:(1-t)*E.y+t*i[x].y},--x;}else E=i[x];b=E.x,R=E.y;const r=x<=0&&!z,c=x===i.length-1;if(r||(q+=M),U=c?u?i[1]:null:i[x+1],U?(p.x=U.x-b,p.y=U.y-R,B=h(p),p.x/=B,p.y/=B):(p.x=void 0,p.y=void 0),!u){if(r){s(L,p),D=L.x,S=L.y,w===e$1.SQUARE&&(C(-p.y-p.x,p.x-p.y,p.x,p.y,0,-1),C(p.y-p.x,-p.x-p.y,p.x,p.y,0,1)),w===e$1.ROUND&&(C(-p.y-p.x,p.x-p.y,p.x,p.y,-1,-1),C(p.y-p.x,-p.x-p.y,p.x,p.y,-1,1)),w!==e$1.ROUND&&w!==e$1.BUTT||(C(-p.y,p.x,p.x,p.y,0,-1),C(p.y,-p.x,p.x,p.y,0,1));continue}if(c){n(L,k),D=L.x,S=L.y,w!==e$1.ROUND&&w!==e$1.BUTT||(C(k.y,-k.x,-k.x,-k.y,0,-1),C(-k.y,k.x,-k.x,-k.y,0,1)),w===e$1.SQUARE&&(C(k.y-k.x,-k.x-k.y,-k.x,-k.y,0,-1),C(-k.y-k.x,k.x-k.y,-k.x,-k.y,0,1)),w===e$1.ROUND&&(C(k.y-k.x,-k.x-k.y,-k.x,-k.y,1,-1),C(-k.y-k.x,k.x-k.y,-k.x,-k.y,1,1));continue}}let d,v,Q=-l(k,p);if(Math.abs(Q)<.01)_(k,p)>0?(L.x=k.x,L.y=k.y,Q=1,d=Number.MAX_VALUE,v=!0):(s(L,p),Q=1,d=1,v=!1);else {L.x=(k.x+p.x)/Q,L.y=(k.y+p.y)/Q,d=h(L);const t=(d-1)*V*f;v=d>4||t>M&&t>B;}D=L.x,S=L.y;let X=T;switch(T){case n$2.BEVEL:d<1.05&&(X=n$2.MITER);break;case n$2.ROUND:d<m&&(X=n$2.MITER);break;case n$2.MITER:d>g&&(X=n$2.BEVEL);}switch(X){case n$2.MITER:if(C(L.x,L.y,-k.x,-k.y,0,-1),C(-L.x,-L.y,-k.x,-k.y,0,1),c)break;if(N){const t=z?0:q;I=this._writeVertex(b,R,D,S,p.x,p.y,L.x,L.y,0,-1,t),P=this._writeVertex(b,R,D,S,p.x,p.y,-L.x,-L.y,0,1,t);}break;case n$2.BEVEL:{const t=Q<0;let e,i,x,r;if(t){const t=I;I=P,P=t,e=j,i=A;}else e=A,i=j;if(v)x=t?s(this._innerPrev,k):n(this._innerPrev,k),r=t?n(this._innerNext,p):s(this._innerNext,p);else {const e=t?o(this._inner,L):y(this._inner,L);x=e,r=e;}const h=t?n(this._bevelStart,k):s(this._bevelStart,k);C(x.x,x.y,-k.x,-k.y,e.x,e.y);const l=C(h.x,h.y,-k.x,-k.y,i.x,i.y);if(c)break;const _=t?s(this._bevelEnd,p):n(this._bevelEnd,p);if(v){const t=this._writeVertex(b,R,D,S,-k.x,-k.y,0,0,0,0,q);I=this._writeVertex(b,R,D,S,p.x,p.y,r.x,r.y,e.x,e.y,q),P=this._writeVertex(b,R,D,S,p.x,p.y,_.x,_.y,i.x,i.y,q),this._writeTriangle(l,t,P);}else {if(N){const t=this._bevelMiddle;t.x=(h.x+_.x)/2,t.y=(h.y+_.y)/2,a(O,t,-k.x,-k.y),C(t.x,t.y,-k.x,-k.y,O.x,O.y),a(O,t,p.x,p.y),I=this._writeVertex(b,R,D,S,p.x,p.y,t.x,t.y,O.x,O.y,q),P=this._writeVertex(b,R,D,S,p.x,p.y,r.x,r.y,e.x,e.y,q);}else {const t=I;I=P,P=t;}C(_.x,_.y,p.x,p.y,i.x,i.y);}if(t){const t=I;I=P,P=t;}break}case n$2.ROUND:{const t=Q<0;let e,i;if(t){const t=I;I=P,P=t,e=j,i=A;}else e=A,i=j;const x=t?o(this._inner,L):y(this._inner,L);let r,h;v?(r=t?s(this._innerPrev,k):n(this._innerPrev,k),h=t?n(this._innerNext,p):s(this._innerNext,p)):(r=x,h=x);const l=t?n(this._roundStart,k):s(this._roundStart,k),u=t?s(this._roundEnd,p):n(this._roundEnd,p),f=C(r.x,r.y,-k.x,-k.y,e.x,e.y),w=C(l.x,l.y,-k.x,-k.y,i.x,i.y);if(c)break;const T=this._writeVertex(b,R,D,S,-k.x,-k.y,0,0,0,0,q);v||this._writeTriangle(I,P,T);const g=o(this._outer,x),m=this._writeVertex(b,R,D,S,p.x,p.y,u.x,u.y,i.x,i.y,q);let V,E;const U=d>2;if(U){let e;d!==Number.MAX_VALUE?(g.x/=d,g.y/=d,e=_(k,g),e=(d*(e*e-1)+1)/e):e=-1,V=t?n(this._startBreak,k):s(this._startBreak,k),V.x+=k.x*e,V.y+=k.y*e,E=t?s(this._endBreak,p):n(this._endBreak,p),E.x+=p.x*e,E.y+=p.y*e;}a(O,g,-k.x,-k.y);const M=this._writeVertex(b,R,D,S,-k.x,-k.y,g.x,g.y,O.x,O.y,q);a(O,g,p.x,p.y);const B=N?this._writeVertex(b,R,D,S,p.x,p.y,g.x,g.y,O.x,O.y,q):M,W=T,X=N?this._writeVertex(b,R,D,S,p.x,p.y,0,0,0,0,q):T;let z=-1,F=-1;if(U&&(a(O,V,-k.x,-k.y),z=this._writeVertex(b,R,D,S,-k.x,-k.y,V.x,V.y,O.x,O.y,q),a(O,E,p.x,p.y),F=this._writeVertex(b,R,D,S,p.x,p.y,E.x,E.y,O.x,O.y,q)),N?U?(this._writeTriangle(W,w,z),this._writeTriangle(W,z,M),this._writeTriangle(X,B,F),this._writeTriangle(X,F,m)):(this._writeTriangle(W,w,M),this._writeTriangle(X,B,m)):U?(this._writeTriangle(T,w,z),this._writeTriangle(T,z,F),this._writeTriangle(T,F,m)):(this._writeTriangle(T,w,M),this._writeTriangle(T,B,m)),v?(I=this._writeVertex(b,R,D,S,p.x,p.y,h.x,h.y,e.x,e.y,q),P=m):(I=N?this._writeVertex(b,R,D,S,p.x,p.y,h.x,h.y,e.x,e.y,q):f,this._writeTriangle(I,X,m),P=m),t){const t=I;I=P,P=t;}break}}}}}

export { c, i, r$1 as r };

//# sourceMappingURL=TurboLine-82cf59fe.js.map