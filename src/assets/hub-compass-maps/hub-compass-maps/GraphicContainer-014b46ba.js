import { T } from './color-07edd940.js';
import { n } from './BaseGraphicContainer-4508a9b0.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class i extends n{renderChildren(r){this.attributeView.update(),this.children.some((e=>e.hasData))&&(this.attributeView.bindTextures(r.context,!1),super.renderChildren(r),r.drawPhase===T.MAP&&this._renderChildren(r),this.hasHighlight()&&r.drawPhase===T.HIGHLIGHT&&this._renderHighlight(r),this._boundsRenderer&&this._boundsRenderer.doRender(r));}_renderHighlight(e){const{painter:r}=e,i=r.effects.highlight;i.bind(e),this._renderChildren(e,i.defines),i.draw(e),i.unbind();}}

export { i };

//# sourceMappingURL=GraphicContainer-014b46ba.js.map