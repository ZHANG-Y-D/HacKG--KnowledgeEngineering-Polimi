define("file-viewer/public/support",["require","exports","file-viewer/core/utils/index","file-viewer/core/data/models"],(function(e,r,i,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.PreviewType=r.isPreviewTypeSupported=void 0,Object.defineProperty(r,"isPreviewTypeSupported",{enumerable:!0,get:function(){return i.isPreviewTypeSupported}}),Object.defineProperty(r,"PreviewType",{enumerable:!0,get:function(){return t.PreviewType}})})),define("modules/clean/integrations/zoom_share_dialog/async_modal",["require","exports","tslib"],(function(e,r,i){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.asyncShowModal=void 0,r.asyncShowModal=function(r,t,n,o){return i.__awaiter(this,void 0,void 0,(function(){return i.__generator(this,(function(u){switch(u.label){case 0:return[4,new Promise((function(r,i){e(["modules/clean/integrations/zoom_share_dialog/modal"],r,i)})).then(i.__importStar)];case 1:return(0,u.sent().showModal)(r,t,n,o||"web"),[2]}}))}))}})),define("modules/clean/react/file_viewer/sdk_file_viewer/async_file_viewer",["require","exports","tslib","react"],(function(e,r,i,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.AsyncFileViewer=void 0;var n=(t=i.__importDefault(t)).default.lazy((function(){return i.__awaiter(void 0,void 0,void 0,(function(){return i.__generator(this,(function(r){switch(r.label){case 0:return[4,new Promise((function(r,i){e(["modules/clean/react/file_viewer/sdk_file_viewer/file_viewer"],r,i)})).then(i.__importStar)];case 1:return[2,{default:r.sent().FileViewer}]}}))}))}));r.AsyncFileViewer=function(e){return t.default.createElement(t.default.Suspense,{fallback:t.default.createElement("div",null)},t.default.createElement(n,i.__assign({},e)))}})),define("modules/clean/react/file_viewer/sdk_file_viewer/utils",["require","exports","file-viewer/public/support"],(function(e,r,i){"use strict";var t;Object.defineProperty(r,"__esModule",{value:!0}),r.isBrowsePreviewSurface=r.isInbandSharePreviewSurface=r.SDKPreviewSurface=r.INBAND_SUPPORTED_TYPES=void 0,r.INBAND_SUPPORTED_TYPES=[i.PreviewType.HTML],(function(e){e.BROWSE="browse",e.INBAND_SHARE="inband-share"})(t=r.SDKPreviewSurface||(r.SDKPreviewSurface={})),r.isInbandSharePreviewSurface=function(e){return e===t.INBAND_SHARE},r.isBrowsePreviewSurface=function(e){return e===t.BROWSE}}));
//# sourceMappingURL=pkg-fvsdk-support.min.js-vflrO47mc.map