/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function n(n){return ["u8","s8"].includes(n.pixelType)&&null!=n.statistics?.[0]?.min&&null!=n.statistics[0]?.max&&1===n.bandCount}function t(t,e){const{attributeTable:u,bandCount:r}=t;if(null==u&&n(t))return !0;if(null==u||r>1)return !1;if(e){if(null==u.fields.find((n=>n.name.toLowerCase()===e.toLowerCase())))return !1}return !0}function e(n){const{bandCount:t,dataType:e,pixelType:u}=n;return "elevation"===e||"generic"===e&&1===t&&("s16"===u||"s32"===u||"f32"===u||"f64"===u)}function u(n,t=!1){const{bandCount:e,colormap:u,pixelType:r}=n;return 1===e&&(!!u?.length||!t&&"u8"===r)}function r(n,t=!1){const{attributeTable:e,bandCount:u}=n;return 1===u&&(!t||null!=e||null!=n.histograms)}function o(n){const{dataType:t}=n;return "vector-uv"===t||"vector-magdir"===t}function i(n){const{dataType:t}=n;return "vector-uv"===t||"vector-magdir"===t}

export { e, i, o, r, t, u };

//# sourceMappingURL=rasterRendererChecks-13692458.js.map