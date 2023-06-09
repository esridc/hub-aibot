import { e as has, aU as u } from './hub-compass-map-68308039.js';
import { a as a$1 } from './AttributeStoreView-356296ba.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const s=has("esri-2d-log-allocations");class r{constructor(t,e){this._array=t,this._pool=e;}get array(){return this._array}get length(){return this._array.length}static create(t,e){const s=e.acquire(t);return new r(s,e)}expand(t){const e=this._pool.acquire(t);e.set(this._array),this._pool.release(this._array),this._array=e;}destroy(){this._pool.release(this._array);}set(t,e){this._array.set(t._array,e);}slice(){const t=this._pool.acquire(this._array.byteLength);return t.set(this._array),new r(t,this._pool)}}class a{constructor(){this._data=new ArrayBuffer(a.BYTE_LENGTH),this._freeList=new a$1({start:0,end:this._data.byteLength});}static get BYTE_LENGTH(){return 64e6}get buffer(){return this._data}allocate(t){const e=this._freeList.firstFit(t);return null==e?null:new Uint32Array(this._data,e,t/Uint32Array.BYTES_PER_ELEMENT)}free(t){this._freeList.free(t.byteOffset,t.byteLength);}}class i{constructor(){this._bytesAllocated=0,this._pages=[],this._pagesByBuffer=new Map,this._addPage();}destroy(){this._pages=[],this._pagesByBuffer=null;}get _bytesTotal(){return this._pages.length*a.BYTE_LENGTH}acquire(e){if(this._bytesAllocated+=e,s&&console.log(`Allocating ${e}, (${this._bytesAllocated} / ${this._bytesTotal})`),e>a.BYTE_LENGTH)return new Uint32Array(e/Uint32Array.BYTES_PER_ELEMENT);for(const t of this._pages){const s=t.allocate(e);if(null!=s)return s}return u(this._addPage().allocate(e),"Expected to allocate page")}release(t){this._bytesAllocated-=t.byteLength,s&&console.log(`Freeing ${t.byteLength}, (${this._bytesAllocated} / ${this._bytesTotal})`);const e=this._pagesByBuffer.get(t.buffer);e&&e.free(t);}_addPage(){const t=new a;return this._pages.push(t),this._pagesByBuffer.set(t.buffer,t),t}}

export { i, r };

//# sourceMappingURL=BufferPool-285de1d6.js.map