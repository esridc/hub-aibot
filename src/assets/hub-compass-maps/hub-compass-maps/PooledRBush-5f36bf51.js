import { h4 as p$1, gY as b$1, h5 as f$1, gB as l$1, gX as v } from './hub-compass-map-68308039.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class h{constructor(t=9,i){this._compareMinX=l,this._compareMinY=c,this._toBBox=t=>t,this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),i&&("function"==typeof i?this._toBBox=i:this._initFormat(i)),this.clear();}destroy(){this.clear(),g.prune(),M.prune(),X.prune(),Y.prune();}all(t){this._all(this._data,t);}search(t,i){let n=this._data;const e=this._toBBox;if(f(t,n))for(g.clear();n;){for(let s=0,h=n.children.length;s<h;s++){const h=n.children[s],a=n.leaf?e(h):h;f(t,a)&&(n.leaf?i(h):x(t,a)?this._all(h,i):g.push(h));}n=g.pop();}}collides(t){let i=this._data;const n=this._toBBox;if(!f(t,i))return !1;for(g.clear();i;){for(let e=0,s=i.children.length;e<s;e++){const s=i.children[e],h=i.leaf?n(s):s;if(f(t,h)){if(i.leaf||x(t,h))return !0;g.push(s);}}i=g.pop();}return !1}load(t){if(!t.length)return this;if(t.length<this._minEntries){for(let i=0,n=t.length;i<n;i++)this.insert(t[i]);return this}let i=this._build(t.slice(0,t.length),0,t.length-1,0);if(this._data.children.length)if(this._data.height===i.height)this._splitRoot(this._data,i);else {if(this._data.height<i.height){const t=this._data;this._data=i,i=t;}this._insert(i,this._data.height-i.height-1,!0);}else this._data=i;return this}insert(t){return t&&this._insert(t,this._data.height-1),this}clear(){return this._data=new b([]),this}remove(i){if(!i)return this;let e,s=this._data,h=null,a=0,r=!1;const o=this._toBBox(i);for(X.clear(),Y.clear();s||X.length>0;){if(s||(s=p$1(X.pop()),h=X.data[X.length-1],a=Y.pop()??0,r=!0),s.leaf&&(e=b$1(s.children,i,s.children.length,s.indexHint),-1!==e))return s.children.splice(e,1),X.push(s),this._condense(X),this;r||s.leaf||!x(s,o)?h?(a++,s=h.children[a],r=!1):s=null:(X.push(s),Y.push(a),a=0,h=s,s=s.children[0]);}return this}toJSON(){return this._data}fromJSON(t){return this._data=t,this}_all(t,i){let n=t;for(M.clear();n;){if(!0===n.leaf)for(const t of n.children)i(t);else M.pushArray(n.children);n=M.pop()??null;}}_build(t,i,n,e){const s=n-i+1;let h=this._maxEntries;if(s<=h){const e=new b(t.slice(i,n+1));return a(e,this._toBBox),e}e||(e=Math.ceil(Math.log(s)/Math.log(h)),h=Math.ceil(s/h**(e-1)));const r=new j([]);r.height=e;const o=Math.ceil(s/h),l=o*Math.ceil(Math.sqrt(h));p(t,i,n,l,this._compareMinX);for(let a=i;a<=n;a+=l){const i=Math.min(a+l-1,n);p(t,a,i,o,this._compareMinY);for(let n=a;n<=i;n+=o){const s=Math.min(n+o-1,i);r.children.push(this._build(t,n,s,e-1));}}return a(r,this._toBBox),r}_chooseSubtree(t,i,n,e){for(;e.push(i),!0!==i.leaf&&e.length-1!==n;){let n,e=1/0,s=1/0;for(let h=0,a=i.children.length;h<a;h++){const a=i.children[h],r=m(a),o=u(t,a)-r;o<s?(s=o,e=r<e?r:e,n=a):o===s&&r<e&&(e=r,n=a);}i=n||i.children[0];}return i}_insert(t,i,n){const e=this._toBBox,s=n?t:e(t);X.clear();const h=this._chooseSubtree(s,this._data,i,X);for(h.children.push(t),o(h,s);i>=0&&X.data[i].children.length>this._maxEntries;)this._split(X,i),i--;this._adjustParentBBoxes(s,X,i);}_split(t,i){const n=t.data[i],e=n.children.length,s=this._minEntries;this._chooseSplitAxis(n,s,e);const h=this._chooseSplitIndex(n,s,e);if(!h)return void console.log("  Error: assertion failed at PooledRBush._split: no valid split index");const r=n.children.splice(h,n.children.length-h),o=n.leaf?new b(r):new j(r);o.height=n.height,a(n,this._toBBox),a(o,this._toBBox),i?t.data[i-1].children.push(o):this._splitRoot(n,o);}_splitRoot(t,i){this._data=new j([t,i]),this._data.height=t.height+1,a(this._data,this._toBBox);}_chooseSplitIndex(t,i,n){let e,s,h;e=s=1/0;for(let a=i;a<=n-i;a++){const i=r(t,0,a,this._toBBox),o=r(t,a,n,this._toBBox),l=_(i,o),c=m(i)+m(o);l<e?(e=l,h=a,s=c<s?c:s):l===e&&c<s&&(s=c,h=a);}return h}_chooseSplitAxis(t,i,n){const e=t.leaf?this._compareMinX:l,s=t.leaf?this._compareMinY:c;this._allDistMargin(t,i,n,e)<this._allDistMargin(t,i,n,s)&&t.children.sort(e);}_allDistMargin(t,i,n,e){t.children.sort(e);const s=this._toBBox,h=r(t,0,i,s),a=r(t,n-i,n,s);let l=d(h)+d(a);for(let r=i;r<n-i;r++){const i=t.children[r];o(h,t.leaf?s(i):i),l+=d(h);}for(let r=n-i-1;r>=i;r--){const i=t.children[r];o(a,t.leaf?s(i):i),l+=d(a);}return l}_adjustParentBBoxes(t,i,n){for(let e=n;e>=0;e--)o(i.data[e],t);}_condense(i){for(let n=i.length-1;n>=0;n--){const e=i.data[n];if(0===e.children.length)if(n>0){const s=i.data[n-1],h=s.children;h.splice(b$1(h,e,h.length,s.indexHint),1);}else this.clear();else a(e,this._toBBox);}}_initFormat(t){const i=["return a"," - b",";"];this._compareMinX=new Function("a","b",i.join(t[0])),this._compareMinY=new Function("a","b",i.join(t[1])),this._toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};");}}function a(t,i){r(t,0,t.children.length,i,t);}function r(t,i,n,e,s){s||(s=new b([])),s.minX=1/0,s.minY=1/0,s.maxX=-1/0,s.maxY=-1/0;for(let h,a=i;a<n;a++)h=t.children[a],o(s,t.leaf?e(h):h);return s}function o(t,i){t.minX=Math.min(t.minX,i.minX),t.minY=Math.min(t.minY,i.minY),t.maxX=Math.max(t.maxX,i.maxX),t.maxY=Math.max(t.maxY,i.maxY);}function l(t,i){return t.minX-i.minX}function c(t,i){return t.minY-i.minY}function m(t){return (t.maxX-t.minX)*(t.maxY-t.minY)}function d(t){return t.maxX-t.minX+(t.maxY-t.minY)}function u(t,i){return (Math.max(i.maxX,t.maxX)-Math.min(i.minX,t.minX))*(Math.max(i.maxY,t.maxY)-Math.min(i.minY,t.minY))}function _(t,i){const n=Math.max(t.minX,i.minX),e=Math.max(t.minY,i.minY),s=Math.min(t.maxX,i.maxX),h=Math.min(t.maxY,i.maxY);return Math.max(0,s-n)*Math.max(0,h-e)}function x(t,i){return t.minX<=i.minX&&t.minY<=i.minY&&i.maxX<=t.maxX&&i.maxY<=t.maxY}function f(t,i){return i.minX<=t.maxX&&i.minY<=t.maxY&&i.maxX>=t.minX&&i.maxY>=t.minY}function p(t,i,e,h,a){const r=[i,e];for(;r.length;){const i=p$1(r.pop()),e=p$1(r.pop());if(i-e<=h)continue;const o=e+Math.ceil((i-e)/h/2)*h;f$1(t,o,e,i,a),r.push(e,o,o,i);}}const g=new l$1,M=new l$1,X=new l$1,Y=new l$1({deallocator:void 0});class B{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0;}}class w extends B{constructor(){super(...arguments),this.height=1,this.indexHint=new v;}}class b extends w{constructor(t){super(),this.children=t,this.leaf=!0;}}class j extends w{constructor(t){super(),this.children=t,this.leaf=!1;}}

export { h };

//# sourceMappingURL=PooledRBush-5f36bf51.js.map