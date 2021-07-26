define(["require","exports","tslib","react","modules/clean/react/title_bar/title_bar_title","classnames"],(function(e,l,t,a,i,o){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.TitleBarBase=void 0,a=t.__importDefault(a),o=t.__importDefault(o),l.TitleBarBase=function(e){var l=e.canClose,t=e.className,s=e.closeTitle,r=e.closeUrl,n=e.controls,c=e.file,d=e.isSigningMode,u=e.isSendForSignatureMode,f=e.areAllFieldsCompleted,m=e.onClose,_=e.overrideIcon,S=e.shouldShowIcon,p=e.sizeClass,v=e.title;return a.default.createElement("div",{className:o.default("react-title-bar",t)},f?null:a.default.createElement(i.TitleBarTitle,{canClose:!!l,closeTitle:s,closeUrl:r,file:c,isSigningMode:d,isSendForSignatureMode:u,onClose:m,overrideIcon:_,shouldShowIcon:S,sizeClass:p},v),a.default.createElement("div",{className:"react-title-bar__action-wrap"},n))},l.TitleBarBase.defaultProps={shouldShowIcon:!0}}));
//# sourceMappingURL=base.min.js-vflXZ09k9.map