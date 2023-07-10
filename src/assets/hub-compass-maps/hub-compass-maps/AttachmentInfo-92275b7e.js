import { cV as l$1, a1 as e, a2 as y, eE as T, a3 as a$1 } from './hub-compass-map-4d751555.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function n(n){const{exifInfo:e,exifName:a,tagName:u}=n;if(!e||!a||!u)return null;const f=e.find((n=>n.name===a));return f?t({tagName:u,tags:f.tags}):null}function t(n){const{tagName:t,tags:e}=n;if(!e||!t)return null;const a=e.find((n=>n.name===t));return a&&a.value||null}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
var s;const p={1:{id:1,rotation:0,mirrored:!1},2:{id:2,rotation:0,mirrored:!0},3:{id:3,rotation:180,mirrored:!1},4:{id:4,rotation:180,mirrored:!0},5:{id:5,rotation:-90,mirrored:!0},6:{id:6,rotation:90,mirrored:!1},7:{id:7,rotation:90,mirrored:!0},8:{id:8,rotation:-90,mirrored:!1}};let a=s=class extends l$1{constructor(t){super(t),this.contentType=null,this.exifInfo=null,this.id=null,this.globalId=null,this.keywords=null,this.name=null,this.parentGlobalId=null,this.parentObjectId=null,this.size=null,this.url=null;}get orientationInfo(){const{exifInfo:t}=this,o=n({exifName:"Exif IFD0",tagName:"Orientation",exifInfo:t});return p[o]||null}clone(){return new s({contentType:this.contentType,exifInfo:this.exifInfo,id:this.id,globalId:this.globalId,keywords:this.keywords,name:this.name,parentGlobalId:this.parentGlobalId,parentObjectId:this.parentObjectId,size:this.size,url:this.url})}};e([y({type:String})],a.prototype,"contentType",void 0),e([y()],a.prototype,"exifInfo",void 0),e([y({readOnly:!0})],a.prototype,"orientationInfo",null),e([y({type:T})],a.prototype,"id",void 0),e([y({type:String})],a.prototype,"globalId",void 0),e([y({type:String})],a.prototype,"keywords",void 0),e([y({type:String})],a.prototype,"name",void 0),e([y({json:{read:!1}})],a.prototype,"parentGlobalId",void 0),e([y({json:{read:!1}})],a.prototype,"parentObjectId",void 0),e([y({type:T})],a.prototype,"size",void 0),e([y({json:{read:!1}})],a.prototype,"url",void 0),a=s=e([a$1("esri.layers.support.AttachmentInfo")],a);const l=a;

export { l };

//# sourceMappingURL=AttachmentInfo-92275b7e.js.map