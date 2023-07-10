/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class t$1{constructor(t=null,s={},e,h){this.geometry=t,this.attributes=s,this.centroid=e,this.objectId=h,this.displayId=0,this.geohashX=0,this.geohashY=0;}weakClone(){const s=new t$1(this.geometry,this.attributes,this.centroid,this.objectId);return s.displayId=this.displayId,s.geohashX=this.geohashX,s.geohashY=this.geohashY,s}}function s(t){return !(null==t.geometry||!t.geometry.coords||!t.geometry.coords.length)}class e extends t$1{}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class t{constructor(t=[],e=[],s=!1){this.lengths=t??[],this.coords=e??[],this.hasIndeterminateRingOrder=s;}static fromRect(e){const[s,h,n,r]=e,i=n-s,o=r-h;return new t([5],[s,h,i,0,0,o,-i,0,0,-o])}get isPoint(){return 0===this.lengths.length}get maxLength(){return Math.max(...this.lengths)}get size(){return this.lengths.reduce(((t,e)=>t+e))}forEachVertex(t){let e=0;this.lengths.length||t(this.coords[0],this.coords[1]);for(let s=0;s<this.lengths.length;s++){const h=this.lengths[s];for(let s=0;s<h;s++){t(this.coords[2*(s+e)],this.coords[2*(s+e)+1]);}e+=h;}}clone(e){return e?(e.set(this.coords),new t(this.lengths.slice(),e,this.hasIndeterminateRingOrder)):new t(this.lengths.slice(),this.coords.slice(),this.hasIndeterminateRingOrder)}}

export { t$1 as a, e, s, t };

//# sourceMappingURL=OptimizedGeometry-d99be84d.js.map