import { _ as n, f as s, a1 as e, a2 as y$1, a3 as a, cX as t, fH as kt, s as s$1, aV as g$1, C, O as j, bW as p, cD as b, aE as f } from './hub-compass-map-f4225e12.js';
import { m } from './query-2dbdcab5.js';
import './index-d436d5f8.js';
import './pbfQueryUtils-f0f40243.js';
import './pbf-2ae522ce.js';
import './OptimizedGeometry-d99be84d.js';
import './OptimizedFeatureSet-c30cfe93.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
let c$1=class extends n.EventedAccessor{destroy(){this.emit("destroy");}get connectionError(){return this.errorString?new s("stream-connection",this.errorString):null}onFeature(r){this.emit("data-received",r);}onMessage(r){this.emit("message-received",r);}};e([y$1({readOnly:!0})],c$1.prototype,"connectionError",null),c$1=e([a("esri.layers.support.StreamConnection")],c$1);const i=c$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
var h$1;!function(e){e[e.CONNECTING=0]="CONNECTING",e[e.OPEN=1]="OPEN",e[e.CLOSING=2]="CLOSING",e[e.CLOSED=3]="CLOSED";}(h$1||(h$1={}));let d$1=class extends i{constructor(e){super(),this._outstandingMessages=[],this.errorString=null;const{geometryType:t$1,spatialReference:o,sourceSpatialReference:s}=e;this._config=e,this._featureZScaler=t(t$1,s,o),this._open();}async _open(){await this._tryCreateWebSocket(),this.destroyed||await this._handshake();}destroy(){super.destroy(),null!=this._websocket&&(this._websocket.onopen=null,this._websocket.onclose=null,this._websocket.onerror=null,this._websocket.onmessage=null,this._websocket.close()),this._websocket=null;}get connectionStatus(){if(null==this._websocket)return "disconnected";switch(this._websocket.readyState){case h$1.CONNECTING:case h$1.OPEN:return "connected";case h$1.CLOSING:case h$1.CLOSED:return "disconnected"}}sendMessageToSocket(e){null!=this._websocket?this._websocket.send(JSON.stringify(e)):this._outstandingMessages.push(e);}sendMessageToClient(e){this._onMessage(e);}updateCustomParameters(e){this._config.customParameters=e,null!=this._websocket&&this._websocket.close();}async _tryCreateWebSocket(e=this._config.source.path,r=1e3,i=0){try{if(this.destroyed)return;const t=kt(e,this._config.customParameters??{});this._websocket=await this._createWebSocket(t),this.notifyChange("connectionStatus");}catch(c){const n=r/1e3;return this._config.maxReconnectionAttempts&&i>=this._config.maxReconnectionAttempts?(s$1.getLogger(this).error(new s("websocket-connection","Exceeded maxReconnectionAttempts attempts. No further attempts will be made")),void this.destroy()):(s$1.getLogger(this).error(new s("websocket-connection",`Failed to connect. Attempting to reconnect in ${n}s`,c)),await g$1(r),this._tryCreateWebSocket(e,Math.min(1.5*r,1e3*this._config.maxReconnectionInterval),i+1))}}_setWebSocketJSONParseHandler(e){e.onmessage=e=>{try{const t=JSON.parse(e.data);this._onMessage(t);}catch(s$2){return void s$1.getLogger(this).error(new s("websocket-connection","Failed to parse message, invalid JSON",{error:s$2}))}};}_createWebSocket(e){return new Promise(((t,o)=>{const s=new WebSocket(e);s.onopen=()=>{if(s.onopen=null,this.destroyed)return s.onclose=null,void s.close();s.onclose=e=>this._onClose(e),s.onerror=e=>this._onError(e),this._setWebSocketJSONParseHandler(s),t(s);},s.onclose=e=>{s.onopen=s.onclose=null,o(e);};}))}async _handshake(e=1e4){const s$2=this._websocket;if(null==s$2)return;const n=C(),i=s$2.onmessage,{filter:c,outFields:a,spatialReference:l}=this._config;return n.timeout(e),s$2.onmessage=e=>{let r=null;try{r=JSON.parse(e.data);}catch(h){}r&&"object"==typeof r||(s$1.getLogger(this).error(new s("websocket-connection","Protocol violation. Handshake failed - malformed message",e.data)),n.reject(),this.destroy()),r.spatialReference?.wkid!==l?.wkid&&(s$1.getLogger(this).error(new s("websocket-connection",`Protocol violation. Handshake failed - expected wkid of ${l.wkid}`,e.data)),n.reject(),this.destroy()),"json"!==r.format&&(s$1.getLogger(this).error(new s("websocket-connection","Protocol violation. Handshake failed - format is not set",e.data)),n.reject(),this.destroy()),c&&r.filter!==c&&s$1.getLogger(this).error(new s("websocket-connection","Tried to set filter, but server doesn't support it")),a&&r.outFields!==a&&s$1.getLogger(this).error(new s("websocket-connection","Tried to set outFields, but server doesn't support it")),s$2.onmessage=i;for(const t of this._outstandingMessages)s$2.send(JSON.stringify(t));this._outstandingMessages=[],n.resolve();},s$2.send(JSON.stringify({filter:c,outFields:a,format:"json",spatialReference:{wkid:l.wkid}})),n.promise}_onMessage(e){if(this.onMessage(e),"type"in e)switch(e.type){case"features":case"featureResult":for(const t of e.features)null!=this._featureZScaler&&this._featureZScaler(t.geometry),this.onFeature(t);}}_onError(e){const t="Encountered an error over WebSocket connection";this._set("errorString",t),s$1.getLogger(this).error("websocket-connection",t);}_onClose(e){this._websocket=null,this.notifyChange("connectionStatus"),1e3!==e.code&&s$1.getLogger(this).error("websocket-connection",`WebSocket closed unexpectedly with error code ${e.code}`),this.destroyed||this._open();}};e([y$1()],d$1.prototype,"connectionStatus",null),e([y$1()],d$1.prototype,"errorString",void 0),d$1=e([a("esri.layers.graphics.sources.connections.WebSocketConnection")],d$1);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const h=1e4,d={maxQueryDepth:5,maxRecordCountFactor:3};let g=class extends d$1{constructor(e){super({...d,...e}),this._buddyServicesQuery=null,this._relatedFeatures=null;}async _open(){const e=await this._fetchServiceDefinition(this._config.source);e.timeInfo.trackIdField||s$1.getLogger(this).warn("GeoEvent service was configured without a TrackIdField. This may result in certain functionality being disabled. The purgeOptions.maxObservations property will have no effect.");const t=this._fetchWebSocketUrl(e.streamUrls,this._config.spatialReference);this._buddyServicesQuery||(this._buddyServicesQuery=this._queryBuddyServices()),await this._buddyServicesQuery,await this._tryCreateWebSocket(t);const{filter:r,outFields:o}=this._config;this.destroyed||this._setFilter(r,o);}_onMessage(e){if("attributes"in e){let o;try{o=this._enrich(e),null!=this._featureZScaler&&this._featureZScaler(o.geometry);}catch(t){return void s$1.getLogger(this).error(new s("geoevent-connection","Failed to parse message",t))}this.onFeature(o);}else this.onMessage(e);}async _fetchServiceDefinition(e){const r={f:"json",...this._config.customParameters},s=j(e.path,{query:r,responseType:"json"}),o=(await s).data;return this._serviceDefinition=o,o}_fetchWebSocketUrl(e,t){const r=e[0],{urls:s,token:o}=r,n=this._inferWebSocketBaseUrl(s);return kt(`${n}/subscribe`,{outSR:""+t.wkid,token:o})}_inferWebSocketBaseUrl(e){if(1===e.length)return e[0];for(const t of e)if(t.includes("wss"))return t;return s$1.getLogger(this).error(new s("geoevent-connection","Unable to infer WebSocket url",e)),null}async _setFilter(e,t){const i=this._websocket;if(null==i||null==e&&null==t)return;const n=JSON.stringify({filter:this._serializeFilter(e,t)});let a=!1;const c=C(),u=()=>{a||(this.destroyed||this._websocket!==i||s$1.getLogger(this).error(new s("geoevent-connection","Server timed out when setting filter")),c.reject());},l=e=>{const t=JSON.parse(e.data);t.filter&&(t.error&&(s$1.getLogger(this).error(new s("geoevent-connection","Failed to set service filter",t.error)),this._set("errorString",`Could not set service filter - ${t.error}`),c.reject(t.error)),this._setWebSocketJSONParseHandler(i),a=!0,c.resolve());};return i.onmessage=l,i.send(n),setTimeout(u,h),c.promise}_serializeFilter(e,t){const o={};if(null==e&&null==t)return o;if(null!=e&&e.geometry)try{const t=p(e.geometry);if("extent"!==t.type)throw new s(`Expected extent but found type ${t.type}`);o.geometry=JSON.stringify(t.shiftCentralMeridian());}catch(i){s$1.getLogger(this).error(new s("geoevent-connection","Encountered an error when setting connection geometryDefinition",i));}return null!=e&&e.where&&"1 = 1"!==e.where&&"1=1"!==e.where&&(o.where=e.where),null!=t&&(o.outFields=t.join(",")),o}_enrich(e){if(!this._relatedFeatures)return e;const t=this._serviceDefinition.relatedFeatures.joinField,o=e.attributes[t],i=this._relatedFeatures.get(o);if(!i)return s$1.getLogger(this).warn("geoevent-connection","Feature join failed. Is the join field configured correctly?",e),e;const{attributes:n,geometry:a}=i;for(const r in n)e.attributes[r]=n[r];return a&&(e.geometry=a),e.geometry||e.centroid||s$1.getLogger(this).error(new s("geoevent-connection","Found malformed feature - no geometry found",e)),e}async _queryBuddyServices(){try{const{relatedFeatures:e,keepLatestArchive:t}=this._serviceDefinition,r=this._queryRelatedFeatures(e),s=this._queryArchive(t);await r;const o=await s;if(!o)return;for(const i of o.features)this.onFeature(this._enrich(i));}catch(e){s$1.getLogger(this).error(new s("geoevent-connection","Encountered an error when querying buddy services",{error:e}));}}async _queryRelatedFeatures(e){if(!e)return;const t=await this._queryBuddy(e.featuresUrl);this._addRelatedFeatures(t);}async _queryArchive(e){if(e)return this._queryBuddy(e.featuresUrl)}async _queryBuddy(e){const t=new((await import('./hub-compass-map-f4225e12.js').then(function (n) { return n.mY; })).default)({url:e}),{capabilities:r}=await t.load(),s=r.query.supportsMaxRecordCountFactor,o=r.query.supportsPagination,i=r.query.supportsCentroid,n=this._config.maxRecordCountFactor,a=t.capabilities.query.maxRecordCount,l=s?a*n:a,h=new b;if(h.outFields=this._config.outFields??["*"],h.where=this._config.filter?.where??"1=1",h.returnGeometry=!0,h.returnExceededLimitFeatures=!0,h.outSpatialReference=f.fromJSON(this._config.spatialReference),i&&(h.returnCentroid=!0),s&&(h.maxRecordCountFactor=n),o)return h.num=l,t.destroy(),this._queryPages(e,h);const d=await m(e,h,this._config.sourceSpatialReference);return t.destroy(),d.data}async _queryPages(e,t,r=[],s=0){t.start=null!=t.num?s*t.num:null;const{data:o}=await m(e,t,this._config.sourceSpatialReference);return o.exceededTransferLimit&&s<(this._config.maxQueryDepth??0)?(o.features.forEach((e=>r.push(e))),this._queryPages(e,t,r,s+1)):(r.forEach((e=>o.features.push(e))),o)}_addRelatedFeatures(e){const t=new Map,r=e.features,s=this._serviceDefinition.relatedFeatures.joinField;for(const o of r){const e=o.attributes[s];t.set(e,o);}this._relatedFeatures=t;}};g=e([a("esri.layers.graphics.sources.connections.GeoEventConnection")],g);const y=g;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
let c=class extends i{constructor(e){super(),this.connectionStatus="connected",this.errorString=null;const{geometryType:r,spatialReference:t$1,sourceSpatialReference:s}=e;this._featureZScaler=t(r,s,t$1);}updateCustomParameters(e){}sendMessageToSocket(e){}sendMessageToClient(e){if("type"in e)switch(e.type){case"features":case"featureResult":for(const r of e.features)null!=this._featureZScaler&&this._featureZScaler(r.geometry),this.onFeature(r);}this.onMessage(e);}};e([y$1()],c.prototype,"connectionStatus",void 0),e([y$1()],c.prototype,"errorString",void 0),c=e([a("esri.layers.support.ClientSideConnection")],c);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function o(o,r,s,i,c$1,a,m,p){const f={source:o,sourceSpatialReference:r,spatialReference:s,geometryType:i,filter:c$1,maxReconnectionAttempts:a,maxReconnectionInterval:m,customParameters:p};if(!o)return new c(f);return o.path.startsWith("wss://")||o.path.startsWith("ws://")?new d$1(f):new y(f)}

export { o as createConnection };

//# sourceMappingURL=createConnection-546c144c.js.map