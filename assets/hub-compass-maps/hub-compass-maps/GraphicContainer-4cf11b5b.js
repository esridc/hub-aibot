import { T } from './color-c09f883e.js';
import { n } from './BaseGraphicContainer-4cd884da.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class i extends n{renderChildren(r){this.attributeView.update(),this.children.some((e=>e.hasData))&&(this.attributeView.bindTextures(r.context,!1),super.renderChildren(r),r.drawPhase===T.MAP&&this._renderChildren(r),this.hasHighlight()&&r.drawPhase===T.HIGHLIGHT&&this._renderHighlight(r),this._boundsRenderer&&this._boundsRenderer.doRender(r));}_renderHighlight(e){const{painter:r}=e,i=r.effects.highlight;i.bind(e),this._renderChildren(e,i.defines),i.draw(e),i.unbind();}}

export { i };

//# sourceMappingURL=GraphicContainer-4cf11b5b.js.map