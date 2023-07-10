import { e as has, bi as e$1 } from './hub-compass-map-f4225e12.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
var e;!function(t){t[t.varint=0]="varint",t[t.fixed64=1]="fixed64",t[t.delimited=2]="delimited",t[t.fixed32=5]="fixed32",t[t.unknown=99]="unknown";}(e||(e={}));const i=4294967296,s=new TextDecoder("utf-8"),r=has("safari")||has("ios")?6:has("ff")?12:32;class n{constructor(t,i,s=0,r=(t?t.byteLength:0)){this._tag=0,this._dataType=e.unknown,this._init(t,i,s,r);}_init(t,e,i,s){this._data=t,this._dataView=e,this._pos=i,this._end=s;}asUnsafe(){return this}clone(){return new n(this._data,this._dataView,this._pos,this._end)}pos(){return this._pos}move(t){this._pos=t;}nextTag(t){for(;;){if(this._pos===this._end)return !1;const e=this._decodeVarint();if(this._tag=e>>3,this._dataType=7&e,!t||t===this._tag)break;this.skip();}return !0}next(){if(this._pos===this._end)return !1;const t=this._decodeVarint();return this._tag=t>>3,this._dataType=7&t,!0}empty(){return this._pos>=this._end}tag(){return this._tag}getInt32(){return this._decodeVarint()}getInt64(){return this._decodeVarint()}getUInt32(){let t=4294967295;return t=(127&this._data[this._pos])>>>0,this._data[this._pos++]<128?t:(t=(t|(127&this._data[this._pos])<<7)>>>0,this._data[this._pos++]<128?t:(t=(t|(127&this._data[this._pos])<<14)>>>0,this._data[this._pos++]<128?t:(t=(t|(127&this._data[this._pos])<<21)>>>0,this._data[this._pos++]<128?t:(t=(t|(15&this._data[this._pos])<<28)>>>0,this._data[this._pos++]<128?t:void 0))))}getUInt64(){return this._decodeVarint()}getSInt32(){const t=this.getUInt32();if(void 0!==t)return t>>>1^-(1&t)|0}getSInt64(){return this._decodeSVarint()}getBool(){const t=0!==this._data[this._pos];return this._skip(1),t}getEnum(){return this._decodeVarint()}getFixed64(){const t=this._dataView,e=this._pos,s=t.getUint32(e,!0)+t.getUint32(e+4,!0)*i;return this._skip(8),s}getSFixed64(){const t=this._dataView,e=this._pos,s=t.getUint32(e,!0)+t.getInt32(e+4,!0)*i;return this._skip(8),s}getDouble(){const t=this._dataView.getFloat64(this._pos,!0);return this._skip(8),t}getFixed32(){const t=this._dataView.getUint32(this._pos,!0);return this._skip(4),t}getSFixed32(){const t=this._dataView.getInt32(this._pos,!0);return this._skip(4),t}getFloat(){const t=this._dataView.getFloat32(this._pos,!0);return this._skip(4),t}getString(){const t=this._getLength(),e=this._pos,i=this._toString(this._data,e,e+t);return this._skip(t),i}getBytes(){const t=this._getLength(),e=this._pos,i=this._toBytes(this._data,e,e+t);return this._skip(t),i}getLength(){return this._getLengthUnsafe()}processMessageWithArgs(t,e,i,s){const r=this.getMessage(),n=t(r,e,i,s);return r.release(),n}processMessage(t){const e=this.getMessage(),i=t(e);return e.release(),i}getMessage(){const t=this._getLength(),e=n.pool.acquire();return e._init(this._data,this._dataView,this._pos,this._pos+t),this._skip(t),e}release(){n.pool.release(this);}dataType(){return this._dataType}skip(){switch(this._dataType){case e.varint:this._decodeVarint();break;case e.fixed64:this._skip(8);break;case e.delimited:this._skip(this._getLength());break;case e.fixed32:this._skip(4);break;default:throw new Error("Invalid data type!")}}skipLen(t){this._skip(t);}_skip(t){if(this._pos+t>this._end)throw new Error("Attempt to skip past the end of buffer!");this._pos+=t;}_decodeVarint(){const t=this._data;let e=this._pos,i=0,s=0;if(this._end-e>=10)do{if(s=t[e++],i|=127&s,0==(128&s))break;if(s=t[e++],i|=(127&s)<<7,0==(128&s))break;if(s=t[e++],i|=(127&s)<<14,0==(128&s))break;if(s=t[e++],i|=(127&s)<<21,0==(128&s))break;if(s=t[e++],i+=268435456*(127&s),0==(128&s))break;if(s=t[e++],i+=34359738368*(127&s),0==(128&s))break;if(s=t[e++],i+=4398046511104*(127&s),0==(128&s))break;if(s=t[e++],i+=562949953421312*(127&s),0==(128&s))break;if(s=t[e++],i+=72057594037927940*(127&s),0==(128&s))break;if(s=t[e++],i+=0x8000000000000000*(127&s),0==(128&s))break;throw new Error("Varint too long!")}while(0);else {let r=1;for(;e!==this._end&&(s=t[e],0!=(128&s));)++e,i+=(127&s)*r,r*=128;if(e===this._end)throw new Error("Varint overrun!");++e,i+=s*r;}return this._pos=e,i}_decodeSVarint(){const t=this._data;let e=this._pos,i=0,s=0;const r=1&t[e];if(this._end-e>=10)do{if(s=t[e++],i|=127&s,0==(128&s))break;if(s=t[e++],i|=(127&s)<<7,0==(128&s))break;if(s=t[e++],i|=(127&s)<<14,0==(128&s))break;if(s=t[e++],i|=(127&s)<<21,0==(128&s))break;if(s=t[e++],i+=268435456*(127&s),0==(128&s))break;if(s=t[e++],i+=34359738368*(127&s),0==(128&s))break;if(s=t[e++],i+=4398046511104*(127&s),0==(128&s))break;if(s=t[e++],i+=562949953421312*(127&s),0==(128&s))break;if(s=t[e++],i+=72057594037927940*(127&s),0==(128&s))break;if(s=t[e++],i+=0x8000000000000000*(127&s),0==(128&s))break;throw new Error("Varint too long!")}while(0);else {let r=1;for(;e!==this._end&&(s=t[e],0!=(128&s));)++e,i+=(127&s)*r,r*=128;if(e===this._end)throw new Error("Varint overrun!");++e,i+=s*r;}return this._pos=e,r?-(i+1)/2:i/2}_getLength(){if(this._dataType!==e.delimited)throw new Error("Not a delimited data type!");return this._decodeVarint()}_getLengthUnsafe(){return this.getUInt32()}_toString(t,e,i){if((i=Math.min(this._end,i))-e>r){const r=t.subarray(e,i);return s.decode(r)}let n="",a="";for(let s=e;s<i;++s){const e=t[s];128&e?a+="%"+e.toString(16):(n+=decodeURIComponent(a)+String.fromCharCode(e),a="");}return a.length&&(n+=decodeURIComponent(a)),n}_toBytes(t,e,i){return i=Math.min(this._end,i),new Uint8Array(t.buffer,e,i-e)}}n.pool=new e$1(n,void 0,(t=>{t._data=null,t._dataView=null;}));

export { n };

//# sourceMappingURL=pbf-2ae522ce.js.map