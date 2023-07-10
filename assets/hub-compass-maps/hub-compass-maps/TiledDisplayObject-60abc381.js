import { bC as e, bK as s, bL as i$1 } from './hub-compass-map-f4225e12.js';
import { a as i } from './Container-a2c22c83.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class r extends i{constructor(t,s,i,r,h,o,n=h,a=o){super(),this.triangleCountReportedInDebug=0,this.triangleCount=0,this.texture=null,this.key=new e(t),this.resolution=s,this.x=i,this.y=r,this.width=h,this.height=o,this.rangeX=n,this.rangeY=a;}destroy(){this.texture&&(this.texture.dispose(),this.texture=null);}setTransform(i){const e=this.resolution/(i.resolution*i.pixelRatio),r=this.transforms.tileMat3,[h,o]=i.toScreenNoRotation([0,0],[this.x,this.y]),n=this.width/this.rangeX*e,a=this.height/this.rangeY*e;s(r,n,0,0,0,a,0,h,o,1),i$1(this.transforms.dvs,i.displayViewMat3,r);}}

export { r };

//# sourceMappingURL=TiledDisplayObject-60abc381.js.map