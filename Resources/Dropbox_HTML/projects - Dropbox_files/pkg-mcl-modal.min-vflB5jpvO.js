define("modules/clean/ux_analytics_modal_tracking",["require","exports","tslib","react"],(function(e,t,o,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.UXAnalyticsModalTracking=void 0,n=o.__importDefault(n),t.UXAnalyticsModalTracking=function(e){return n.default.createElement("span",{className:"uxa-modal uxa-modal-tracking-span",id:e.id,style:{display:"none"}})}})),define("modules/clean/web_modal_activity_logger",["require","exports","tslib","modules/clean/logging/telemetry","modules/clean/logging/hive/schemas/web-modal-activity","modules/clean/search/store_helpers"],(function(e,t,o,n,r,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WebModalActivityLogger=void 0,n=o.__importStar(n);var a=(function(){function e(e){this.modalName=e,this.modalSessionId=l.generateRandomId(),this.logger=new n.HiveLogger}return e.prototype.log=function(e,t){this.logger.log(new r.WebModalActivityRow(o.__assign({modal_name:this.modalName,modal_session_id:this.modalSessionId,event_name:e},t)))},e})();t.WebModalActivityLogger=a})),define("modules/clean/logging/hive/schemas/web-modal-activity",["require","exports"],(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WebModalActivityRow=t.FolderType=t.ModalEventName=t.ModalName=void 0,(function(e){e.MOVE="move",e.COPY="copy",e.NEW_FOLDER="new_folder",e.UPLOAD="upload",e.SEARCH_FILTER="search_filter",e.KEYBOARD_SHORTCUTS="keyboard_shortcuts",e.EXPORT_LEGAL_HOLD="export_legal_hold",e.FOLDER_OVERVIEW_PIN_TO="folder_overview_pin_to",e.CLOUD_DOCS_CREATE="cloud_docs_create",e.FOLDER_OVERVIEW_EXAMPLES="folder_overview_examples",e.DELETED_FILES_FILTER="deleted_files_filter",e.HOME_NEW_FOLDER="home_new_folder"})(t.ModalName||(t.ModalName={})),(function(e){e.SHOW="show",e.ERROR="error",e.SUCCESS="success",e.DATA_LOADED="data-loaded",e.BREADCRUMB_CLICKED="breadcrumb-clicked",e.ROW_CLICKED="row-clicked",e.READY="ready",e.CLOSE="close",e.PRIMARY_CLICK="primary-click",e.SECONDARY_CLICK="secondary-click",e.CHANGE_FOLDER_AUDIENCE="change-folder-audience",e.FOLDER_SUGGESTION_API_RESPONSE="folder-suggestion-api-response",e.FOLDER_SUGGESTION_CLICKED="folder-suggestion-clicked",e.FOLDER_SUGGESTION_LOCATION_CLICKED="folder-suggestion-location-clicked"})(t.ModalEventName||(t.ModalEventName={})),(function(e){e.CONFIDENTIAL="confidential",e.NON_CONFIDENTIAL="non-confidential"})(t.FolderType||(t.FolderType={}));var o=function(e){this.category="web-modal-activity",this.user_id=null,this.team_id=null,this.modal_name=e.modal_name,this.modal_session_id=e.modal_session_id,this.event_name=e.event_name.toString(),e.hasOwnProperty("timestamp")&&void 0!==e.timestamp?this.timestamp=e.timestamp:this.timestamp=Date.now(),e.hasOwnProperty("user_id")&&void 0!==e.user_id&&(this.user_id=e.user_id),e.hasOwnProperty("team_id")&&void 0!==e.team_id&&(this.team_id=e.team_id),e.hasOwnProperty("session_id")&&void 0!==e.session_id&&(this.session_id=e.session_id),e.hasOwnProperty("path")&&void 0!==e.path&&(this.path=e.path),e.hasOwnProperty("index")&&void 0!==e.index&&(this.index=e.index),e.hasOwnProperty("is_keyboard")&&void 0!==e.is_keyboard&&(this.is_keyboard=e.is_keyboard),e.hasOwnProperty("error")&&void 0!==e.error&&(this.error=e.error),e.hasOwnProperty("folder_type")&&void 0!==e.folder_type&&(this.folder_type=e.folder_type),e.hasOwnProperty("folder_suggestion_path")&&void 0!==e.folder_suggestion_path&&(this.folder_suggestion_path=e.folder_suggestion_path),e.hasOwnProperty("ml_extra")&&void 0!==e.ml_extra&&(this.ml_extra=e.ml_extra),Object.seal(this)};t.WebModalActivityRow=o})),define("spectrum/label/index",["require","exports","tslib","spectrum/label/label"],(function(e,t,o,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),o.__exportStar(n,t)})),define("spectrum/label/label",["require","exports","tslib","classnames","react"],(function(e,t,o,n,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Label=void 0,n=o.__importDefault(n),r=o.__importStar(r),t.Label=function(e){var t=e.children,l=e.className,a=e.disabled,s=o.__rest(e,["children","className","disabled"]),i=n.default(l,{"mc-label":!0,"mc-label-disabled":a});return r.createElement("label",Object.assign({className:i},s),t)},t.Label.displayName="Label"})),define("spectrum/modal/index",["require","exports","tslib","spectrum/modal/modal","spectrum/modal/utility_modal"],(function(e,t,o,n,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),o.__exportStar(n,t),o.__exportStar(r,t)})),define("spectrum/modal/modal",["require","exports","tslib","classnames","react","react-modal","spectrum/button/index","spectrum/icon_form/index","spectrum/scroll_locker/index"],(function(e,t,o,n,r,l,a,s,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Modal=void 0,n=o.__importDefault(n),r=o.__importStar(r),l=o.__importDefault(l);var u=(function(e){function t(){var t=e.apply(this,arguments)||this;return t.initBodyPaddingRight="0",t.closeButtonRef=r.createRef(),t.performModalOpenOperation=function(){t.initBodyPaddingRight=i.getBodyPadding(),i.lockScroll()},t.performModalCloseOperation=function(){i.unlockScroll(t.initBodyPaddingRight)},t.findElementToFocus=function(){var e=t.props.focusedElementOnOpen;return e&&e.current?e.current:t.closeButtonRef.current},t.onAfterOpen=function(){var e=t.findElementToFocus();e&&e.focus(),t.props.onReady&&t.props.onReady()},t}return o.__extends(t,e),t.prototype.componentDidMount=function(){this.props.open&&this.performModalOpenOperation()},t.prototype.componentDidUpdate=function(e){this.props.open&&!e.open?this.performModalOpenOperation():!this.props.open&&e.open&&this.performModalCloseOperation()},t.prototype.componentWillUnmount=function(){this.performModalCloseOperation()},t.prototype.render=function(){var e=this.props,t=e.className,o=e.overlayClassName,i=e.width,u=e.height,c=e.bodyClassName,d=e.bodyId,p=e.displayCloseButton,f=e.children,m=n.default("mc-modal",t),h=n.default("mc-modal-overlay",o),y=this.props.contentTagName||"div",v={overflowX:"hidden",overflowY:"auto",width:i,height:u},_={contentLabel:this.props.ariaLabel,isOpen:this.props.open,onAfterOpen:this.onAfterOpen,onRequestClose:this.props.onRequestClose,className:m,overlayClassName:h,shouldCloseOnOverlayClick:this.props.overlayClickClose,shouldFocusAfterRender:!1,parentSelector:this.props.parentElement,style:{content:v},appElement:this.props.appElement};return r.createElement(l.default,Object.assign({},_),r.createElement(y,{className:n.default("mc-modal-body",c),id:d,style:v},p&&r.createElement(a.Button,{variant:"styleless",className:"mc-modal-close",onClick:this.props.onRequestClose,ref:this.closeButtonRef},r.createElement(s.IconForm,{className:"mc-modal-close-icon",name:"cancel"})),f))},t})(r.Component);t.Modal=u})),define("spectrum/modal/utility_modal",["require","exports","tslib","spectrum/button/index","spectrum/tertiary_link/index","classnames","react","spectrum/modal/modal"],(function(e,t,o,n,r,l,a,s){"use strict";var i;Object.defineProperty(t,"__esModule",{value:!0}),t.UtilityModal=t.ModalFocus=void 0,l=o.__importDefault(l),a=o.__importStar(a),(i=t.ModalFocus||(t.ModalFocus={})).PRIMARY="Primary",i.SECONDARY="Secondary",i.TERTIARY="Tertiary",i.CLOSE="Close";var u=a.forwardRef((function(e,t){var o=e.element,n=e.defaultElement,r=e.onAction;return"function"==typeof o?o(r,t):n(o,r,t)}));t.UtilityModal=function(e){var i=e.primaryAction,c=e.secondaryAction,d=e.link,p=e.title,f=e.variant,m=void 0===f?"regular":f,h=e.onPrimaryAction,y=e.onSecondaryAction,v=e.onLink,_=e.overlayClickClose,b=void 0===_||_,O=e.displayCloseButton,C=void 0!==O&&O,g=e.children,E=(e.ref,e.bodyClassName),M=e.utilBodyClassName,w=e.utilBodyStyle,R=e.utilBodyTabIndex,S=e.shouldRequestCloseOnActions,N=void 0===S||S,P=e.focusedElementOnOpen,A=void 0===P?t.ModalFocus.PRIMARY:P,D=o.__rest(e,["primaryAction","secondaryAction","link","title","variant","onPrimaryAction","onSecondaryAction","onLink","overlayClickClose","displayCloseButton","children","ref","bodyClassName","utilBodyClassName","utilBodyStyle","utilBodyTabIndex","shouldRequestCloseOnActions","focusedElementOnOpen"]),k=l.default({"mc-util-modal":!0,"mc-util-modal-regular":"regular"===m,"mc-util-modal-small":"small"===m},E),T=a.createRef(),j=function(e){return function(){var t=D.onRequestClose;e&&e(),t&&N&&t()}};return a.createElement(s.Modal,Object.assign({displayCloseButton:C,bodyClassName:k,overlayClickClose:b,focusedElementOnOpen:"object"==typeof A?A:T},D),a.createElement("div",{className:"mc-util-modal-header"},p),a.createElement("div",{className:l.default("mc-util-modal-body",M),style:w,tabIndex:R},g),a.createElement("div",{className:"mc-util-modal-actions"},a.createElement("div",null,"regular"===m&&d?a.createElement(u,{element:d,ref:T,defaultElement:function(e,o,n){return a.createElement(r.TertiaryLink,{onClick:o,ref:A===t.ModalFocus.TERTIARY?n:null},e)},onAction:v}):null),a.createElement("div",{className:"mc-util-modal-actions-buttons"},c&&a.createElement(u,{element:c,ref:T,defaultElement:function(e,o,r){return a.createElement(n.Button,{variant:"secondary",onClick:o,ref:A===t.ModalFocus.SECONDARY?r:null},e)},onAction:j(y)}),a.createElement(u,{element:i,ref:T,defaultElement:function(e,o,r){return a.createElement(n.Button,{variant:"primary",onClick:o,ref:A===t.ModalFocus.PRIMARY?r:null},e)},onAction:j(h)}))))},t.UtilityModal.displayName="UtilityModal"})),define("spectrum/radio_button/index",["require","exports","tslib","spectrum/radio_button/radio_button"],(function(e,t,o,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),o.__exportStar(n,t)})),define("spectrum/radio_button/radio_button",["require","exports","tslib","classnames","react","spectrum/label/index"],(function(e,t,o,n,r,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RadioButton=void 0,n=o.__importDefault(n),r=o.__importStar(r),t.RadioButton=function(e){var t=e.className,a=e.children,s=e.labelClass,i=o.__rest(e,["className","children","labelClass"]),u=n.default(t,{"mc-radio":!0,"mc-radio-disabled":i.disabled}),c=n.default("mc-radio-label",s),d=r.createElement("input",Object.assign({type:"radio",className:u},i));return a?r.createElement(l.Label,{className:c,disabled:i.disabled},d," ",a):d},t.RadioButton.displayName="RadioButton"})),define("spectrum/scroll_locker/index",["require","exports","tslib","spectrum/scroll_locker/scroll_locker"],(function(e,t,o,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),o.__exportStar(n,t)})),define("spectrum/scroll_locker/scroll_locker",["require","exports","exenv"],(function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.unlockScroll=t.lockScroll=t.getBodyPadding=void 0;function n(){if(o.canUseDOM){document.body.clientWidth<window.innerWidth&&(document.body.style.paddingRight=(function(){if(!o.canUseDOM)return 0;var e=document.createElement("div");e.className="scrollbar-measure",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t})()+"px")}}t.getBodyPadding=function(){return o.canUseDOM&&document.body.style.paddingRight||"0"},t.lockScroll=function(){n(),o.canUseDOM&&document.documentElement.classList.add("mc-no-scroll")},t.unlockScroll=function(e){var t;t=e,o.canUseDOM&&(document.body.style.paddingRight=t),o.canUseDOM&&document.documentElement.classList.remove("mc-no-scroll")}})),define("prod_assets_web_modules/react-modal",["./common/_commonjsHelpers","react","react-dom"],(function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var r=n(t),l=n(o);function a(){}function s(){}s.resetWarningCache=a;var i,u=e.createCommonjsModule((function(e){e.exports=(function(){function e(e,t,o,n,r,l){if("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"!==l){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var o={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:s,resetWarningCache:a};return o.PropTypes=o,o})()})),c=e.createCommonjsModule((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return[].slice.call(e.querySelectorAll("*"),0).filter(l)};var o=/input|select|textarea|button|object/;function n(e){var t=e.offsetWidth<=0&&e.offsetHeight<=0;if(t&&!e.innerHTML)return!0;var o=window.getComputedStyle(e);return t?"visible"!==o.getPropertyValue("overflow"):"none"==o.getPropertyValue("display")}function r(e,t){var r=e.nodeName.toLowerCase();return(o.test(r)&&!e.disabled||"a"===r&&e.href||t)&&(function(e){for(var t=e;t&&t!==document.body;){if(n(t))return!1;t=t.parentNode}return!0})(e)}function l(e){var t=e.getAttribute("tabindex");null===t&&(t=void 0);var o=isNaN(t);return(o||t>=0)&&r(e,!o)}e.exports=t.default})),d=v,p=_,f=(i=c)&&i.__esModule?i:{default:i},m=[],h=null,y=!1;function v(){y=!0}function _(){if(y){if(y=!1,!h)return;setTimeout((function(){h.contains(document.activeElement)||((0,f.default)(h)[0]||h).focus()}),0)}}var b=Object.defineProperty({handleBlur:d,handleFocus:p,markForFocusLater:function(){m.push(document.activeElement)},returnFocus:function(){var e=null;try{return void(0!==m.length&&(e=m.pop()).focus())}catch(t){console.warn(["You tried to return focus to",e,"but it is not in the DOM anymore"].join(" "))}},popWithoutFocus:function(){m.length>0&&m.pop()},setupScopedFocus:function(e){h=e,window.addEventListener?(window.addEventListener("blur",v,!1),document.addEventListener("focus",_,!0)):(window.attachEvent("onBlur",v),document.attachEvent("onFocus",_))},teardownScopedFocus:function(){h=null,window.addEventListener?(window.removeEventListener("blur",v),document.removeEventListener("focus",_)):(window.detachEvent("onBlur",v),document.detachEvent("onFocus",_))}},"__esModule",{value:!0}),O=e.createCommonjsModule((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=(0,o.default)(e);if(n.length){var r,l=t.shiftKey,a=n[0],s=n[n.length-1];if(e===document.activeElement){if(!l)return;r=s}if(s!==document.activeElement||l||(r=a),a===document.activeElement&&l&&(r=s),r)return t.preventDefault(),void r.focus();var i=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);if(null!=i&&"Chrome"!=i[1]&&null==/\biPod\b|\biPad\b/g.exec(navigator.userAgent)){var u=n.indexOf(document.activeElement);if(u>-1&&(u+=l?-1:1),void 0===n[u])return t.preventDefault(),void(r=l?s:a).focus();t.preventDefault(),n[u].focus()}}else t.preventDefault()};var o=(function(e){return e&&e.__esModule?e:{default:e}})(c);e.exports=t.default})),C=e.createCommonjsModule((function(e){var t,o;o={canUseDOM:t=!("undefined"==typeof window||!window.document||!window.document.createElement),canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:t&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:t&&!!window.screen},e.exports?e.exports=o:window.ExecutionEnvironment=o})),g=e.createCommonjsModule((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.canUseDOM=void 0;var o=(function(e){return e&&e.__esModule?e:{default:e}})(C).default,n=o.canUseDOM?window.HTMLElement:{};t.canUseDOM=o.canUseDOM,t.default=n})),E=S,M=N,w=(function(e){return e&&e.__esModule?e:{default:e}})((function(){})),R=null;function S(e,t){if(!e||!e.length)throw new Error("react-modal: No elements were found for selector "+t+".")}function N(e){return!(!e&&!R&&((0,w.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),1))}var P=Object.defineProperty({assertNodeList:E,setElement:function(e){var t=e;if("string"==typeof t&&g.canUseDOM){var o=document.querySelectorAll(t);S(o,t),t="length"in o?o[0]:o}return R=t||R},validateElement:M,hide:function(e){N(e)&&(e||R).setAttribute("aria-hidden","true")},show:function(e){N(e)&&(e||R).removeAttribute("aria-hidden")},documentNotReadyOrSSRTesting:function(){R=null},resetForTesting:function(){R=null}},"__esModule",{value:!0}),A=e.createCommonjsModule((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.dumpClassLists=function(){};var o={},n={};t.add=function(e,t){return r=e.classList,l="html"==e.nodeName.toLowerCase()?o:n,void t.split(" ").forEach((function(e){!(function(e,t){e[t]||(e[t]=0),e[t]+=1})(l,e),r.add(e)}));var r,l},t.remove=function(e,t){return r=e.classList,l="html"==e.nodeName.toLowerCase()?o:n,void t.split(" ").forEach((function(e){!(function(e,t){e[t]&&(e[t]-=1)})(l,e),0===l[e]&&r.remove(e)}));var r,l}})),D=e.createCommonjsModule((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l=(function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}})(),a=h(r.default),s=h(u),i=m(b),c=h(O),d=m(P),p=m(A),f=h(g);function m(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t}function h(e){return e&&e.__esModule?e:{default:e}}var y={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},v=0,_=(function(e){function t(e){!(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,t);var o=(function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t})(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.setOverlayRef=function(e){o.overlay=e,o.props.overlayRef&&o.props.overlayRef(e)},o.setContentRef=function(e){o.content=e,o.props.contentRef&&o.props.contentRef(e)},o.afterClose=function(){var e=o.props,t=e.appElement,n=e.ariaHideApp,r=e.htmlOpenClassName,l=e.bodyOpenClassName;l&&p.remove(document.body,l),r&&p.remove(document.getElementsByTagName("html")[0],r),n&&v>0&&0==(v-=1)&&d.show(t),o.props.shouldFocusAfterRender&&(o.props.shouldReturnFocusAfterClose?(i.returnFocus(),i.teardownScopedFocus()):i.popWithoutFocus()),o.props.onAfterClose&&o.props.onAfterClose()},o.open=function(){o.beforeOpen(),o.state.afterOpen&&o.state.beforeClose?(clearTimeout(o.closeTimer),o.setState({beforeClose:!1})):(o.props.shouldFocusAfterRender&&(i.setupScopedFocus(o.node),i.markForFocusLater()),o.setState({isOpen:!0},(function(){o.setState({afterOpen:!0}),o.props.isOpen&&o.props.onAfterOpen&&o.props.onAfterOpen()})))},o.close=function(){o.props.closeTimeoutMS>0?o.closeWithTimeout():o.closeWithoutTimeout()},o.focusContent=function(){return o.content&&!o.contentHasFocus()&&o.content.focus()},o.closeWithTimeout=function(){var e=Date.now()+o.props.closeTimeoutMS;o.setState({beforeClose:!0,closesAt:e},(function(){o.closeTimer=setTimeout(o.closeWithoutTimeout,o.state.closesAt-Date.now())}))},o.closeWithoutTimeout=function(){o.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},o.afterClose)},o.handleKeyDown=function(e){9===e.keyCode&&(0,c.default)(o.content,e),o.props.shouldCloseOnEsc&&27===e.keyCode&&(e.stopPropagation(),o.requestClose(e))},o.handleOverlayOnClick=function(e){null===o.shouldClose&&(o.shouldClose=!0),o.shouldClose&&o.props.shouldCloseOnOverlayClick&&(o.ownerHandlesClose()?o.requestClose(e):o.focusContent()),o.shouldClose=null},o.handleContentOnMouseUp=function(){o.shouldClose=!1},o.handleOverlayOnMouseDown=function(e){o.props.shouldCloseOnOverlayClick||e.target!=o.overlay||e.preventDefault()},o.handleContentOnClick=function(){o.shouldClose=!1},o.handleContentOnMouseDown=function(){o.shouldClose=!1},o.requestClose=function(e){return o.ownerHandlesClose()&&o.props.onRequestClose(e)},o.ownerHandlesClose=function(){return o.props.onRequestClose},o.shouldBeClosed=function(){return!o.state.isOpen&&!o.state.beforeClose},o.contentHasFocus=function(){return document.activeElement===o.content||o.content.contains(document.activeElement)},o.buildClassName=function(e,t){var r="object"===(void 0===t?"undefined":n(t))?t:{base:y[e],afterOpen:y[e]+"--after-open",beforeClose:y[e]+"--before-close"},l=r.base;return o.state.afterOpen&&(l=l+" "+r.afterOpen),o.state.beforeClose&&(l=l+" "+r.beforeClose),"string"==typeof t&&t?l+" "+t:l},o.attributesFromObject=function(e,t){return Object.keys(t).reduce((function(o,n){return o[e+"-"+n]=t[n],o}),{})},o.state={afterOpen:!1,beforeClose:!1},o.shouldClose=null,o.moveFromContentToOverlay=null,o}return(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)})(t,e),l(t,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(e,t){this.props.isOpen&&!e.isOpen?this.open():!this.props.isOpen&&e.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!t.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer)}},{key:"beforeOpen",value:function(){var e=this.props,t=e.appElement,o=e.ariaHideApp,n=e.htmlOpenClassName,r=e.bodyOpenClassName;r&&p.add(document.body,r),n&&p.add(document.getElementsByTagName("html")[0],n),o&&(v+=1,d.hide(t))}},{key:"render",value:function(){var e=this.props,t=e.id,n=e.className,r=e.overlayClassName,l=e.defaultStyles,s=n?{}:l.content,i=r?{}:l.overlay;return this.shouldBeClosed()?null:a.default.createElement("div",{ref:this.setOverlayRef,className:this.buildClassName("overlay",r),style:o({},i,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},a.default.createElement("div",o({id:t,ref:this.setContentRef,style:o({},s,this.props.style.content),className:this.buildClassName("content",n),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",this.props.aria||{}),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),this.props.children))}}]),t})(r.default.Component);_.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},_.propTypes={isOpen:s.default.bool.isRequired,defaultStyles:s.default.shape({content:s.default.object,overlay:s.default.object}),style:s.default.shape({content:s.default.object,overlay:s.default.object}),className:s.default.oneOfType([s.default.string,s.default.object]),overlayClassName:s.default.oneOfType([s.default.string,s.default.object]),bodyOpenClassName:s.default.string,htmlOpenClassName:s.default.string,ariaHideApp:s.default.bool,appElement:s.default.instanceOf(f.default),onAfterOpen:s.default.func,onAfterClose:s.default.func,onRequestClose:s.default.func,closeTimeoutMS:s.default.number,shouldFocusAfterRender:s.default.bool,shouldCloseOnOverlayClick:s.default.bool,shouldReturnFocusAfterClose:s.default.bool,role:s.default.string,contentLabel:s.default.string,aria:s.default.object,data:s.default.object,children:s.default.node,shouldCloseOnEsc:s.default.bool,overlayRef:s.default.func,contentRef:s.default.func,id:s.default.string,testId:s.default.string},t.default=_,e.exports=t.default}));function k(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!=e&&this.setState(e)}function T(e){this.setState(function(t){var o=this.constructor.getDerivedStateFromProps(e,t);return null!=o?o:null}.bind(this))}function j(e,t){try{var o=this.props,n=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(o,n)}finally{this.props=o,this.state=n}}k.__suppressDeprecationWarning=!0,T.__suppressDeprecationWarning=!0,j.__suppressDeprecationWarning=!0;var F=Object.freeze({__proto__:null,polyfill:function(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!=typeof e.getDerivedStateFromProps&&"function"!=typeof t.getSnapshotBeforeUpdate)return e;var o=null,n=null,r=null;if("function"==typeof t.componentWillMount?o="componentWillMount":"function"==typeof t.UNSAFE_componentWillMount&&(o="UNSAFE_componentWillMount"),"function"==typeof t.componentWillReceiveProps?n="componentWillReceiveProps":"function"==typeof t.UNSAFE_componentWillReceiveProps&&(n="UNSAFE_componentWillReceiveProps"),"function"==typeof t.componentWillUpdate?r="componentWillUpdate":"function"==typeof t.UNSAFE_componentWillUpdate&&(r="UNSAFE_componentWillUpdate"),null!==o||null!==n||null!==r){var l=e.displayName||e.name,a="function"==typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+l+" uses "+a+" but also contains the following legacy lifecycles:"+(null!==o?"\n  "+o:"")+(null!==n?"\n  "+n:"")+(null!==r?"\n  "+r:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"==typeof e.getDerivedStateFromProps&&(t.componentWillMount=k,t.componentWillReceiveProps=T),"function"==typeof t.getSnapshotBeforeUpdate){if("function"!=typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=j;var s=t.componentDidUpdate;t.componentDidUpdate=function(e,t,o){var n=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:o;s.call(this,e,t,n)}}return e}}),x=e.getAugmentedNamespace(F),L=e.createCommonjsModule((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.bodyOpenClassName=t.portalClassName=void 0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},n=(function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}})(),a=f(r.default),s=f(l.default),i=f(u),c=f(D),d=(function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t})(P),p=f(g);function f(e){return e&&e.__esModule?e:{default:e}}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var y=t.portalClassName="ReactModalPortal",v=t.bodyOpenClassName="ReactModal__Body--open",_=void 0!==s.default.createPortal,b=function(){return _?s.default.createPortal:s.default.unstable_renderSubtreeIntoContainer};function O(e){return e()}var C=(function(e){function t(){var e,n,r;m(this,t);for(var l=arguments.length,i=Array(l),u=0;u<l;u++)i[u]=arguments[u];return n=r=h(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),r.removePortal=function(){!_&&s.default.unmountComponentAtNode(r.node),O(r.props.parentSelector).removeChild(r.node)},r.portalRef=function(e){r.portal=e},r.renderPortal=function(e){var n=b()(r,a.default.createElement(c.default,o({defaultStyles:t.defaultStyles},e)),r.node);r.portalRef(n)},h(r,n)}return(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)})(t,e),n(t,[{key:"componentDidMount",value:function(){g.canUseDOM&&(_||(this.node=document.createElement("div")),this.node.className=this.props.portalClassName,O(this.props.parentSelector).appendChild(this.node),!_&&this.renderPortal(this.props))}},{key:"getSnapshotBeforeUpdate",value:function(e){return{prevParent:O(e.parentSelector),nextParent:O(this.props.parentSelector)}}},{key:"componentDidUpdate",value:function(e,t,o){if(g.canUseDOM){var n=this.props,r=n.isOpen,l=n.portalClassName;e.portalClassName!==l&&(this.node.className=l);var a=o.prevParent,s=o.nextParent;s!==a&&(a.removeChild(this.node),s.appendChild(this.node)),(e.isOpen||r)&&!_&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(g.canUseDOM&&this.node&&this.portal){var e=this.portal.state,t=Date.now(),o=e.isOpen&&this.props.closeTimeoutMS&&(e.closesAt||t+this.props.closeTimeoutMS);o?(e.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,o-t)):this.removePortal()}}},{key:"render",value:function(){return g.canUseDOM&&_?(!this.node&&_&&(this.node=document.createElement("div")),b()(a.default.createElement(c.default,o({ref:this.portalRef,defaultStyles:t.defaultStyles},this.props)),this.node)):null}}],[{key:"setAppElement",value:function(e){d.setElement(e)}}]),t})(r.default.Component);C.propTypes={isOpen:i.default.bool.isRequired,style:i.default.shape({content:i.default.object,overlay:i.default.object}),portalClassName:i.default.string,bodyOpenClassName:i.default.string,htmlOpenClassName:i.default.string,className:i.default.oneOfType([i.default.string,i.default.shape({base:i.default.string.isRequired,afterOpen:i.default.string.isRequired,beforeClose:i.default.string.isRequired})]),overlayClassName:i.default.oneOfType([i.default.string,i.default.shape({base:i.default.string.isRequired,afterOpen:i.default.string.isRequired,beforeClose:i.default.string.isRequired})]),appElement:i.default.instanceOf(p.default),onAfterOpen:i.default.func,onRequestClose:i.default.func,closeTimeoutMS:i.default.number,ariaHideApp:i.default.bool,shouldFocusAfterRender:i.default.bool,shouldCloseOnOverlayClick:i.default.bool,shouldReturnFocusAfterClose:i.default.bool,parentSelector:i.default.func,aria:i.default.object,data:i.default.object,role:i.default.string,contentLabel:i.default.string,shouldCloseOnEsc:i.default.bool,overlayRef:i.default.func,contentRef:i.default.func},C.defaultProps={isOpen:!1,portalClassName:y,bodyOpenClassName:v,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,parentSelector:function(){return document.body}},C.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}},(0,x.polyfill)(C),t.default=C})),U=e.createCommonjsModule((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var o=(function(e){return e&&e.__esModule?e:{default:e}})(L);t.default=o.default,e.exports=t.default}));return e.getDefaultExportFromCjs(U)}));
//# sourceMappingURL=pkg-mcl-modal.min.js-vflw8Remk.map