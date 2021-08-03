define("dropbox/proto/js_init_data/login_form/login_form",["require","exports","tslib","protobufjs/minimal"],(function(e,t,r,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.login_form=void 0;var o,i=(n=r.__importStar(n)).Reader,s=n.Writer,a=(n.util,n.roots.default||(n.roots.default={}));t.default=a,t.login_form=a.login_form=((o=a.login_form||{}).EncryptionOptions=(function(e){function e(e){if(e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}return e.prototype.key="",e.prototype.version=0,e.prototype.type="",e.prototype.plaintextFallback=!1,e.prototype.timestamp=0,e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=s.create()),null!=e.key&&Object.hasOwnProperty.call(e,"key")&&t.uint32(10).string(e.key),null!=e.version&&Object.hasOwnProperty.call(e,"version")&&t.uint32(16).int64(e.version),null!=e.type&&Object.hasOwnProperty.call(e,"type")&&t.uint32(26).string(e.type),null!=e.plaintextFallback&&Object.hasOwnProperty.call(e,"plaintextFallback")&&t.uint32(32).bool(e.plaintextFallback),null!=e.timestamp&&Object.hasOwnProperty.call(e,"timestamp")&&t.uint32(45).float(e.timestamp),t},e.decode=function(e,t){e instanceof i||(e=i.create(e));for(var r=void 0===t?e.len:e.pos+t,n=new a.login_form.EncryptionOptions;e.pos<r;){var o=e.uint32();switch(o>>>3){case 1:n.key=e.string();break;case 2:n.version=e.int64();break;case 3:n.type=e.string();break;case 4:n.plaintextFallback=e.bool();break;case 5:n.timestamp=e.float();break;default:e.skipType(7&o)}}return n},e.getTypeUrl=function(){return"type.googleapis.com/login_form.EncryptionOptions"},e})(o.EncryptionOptions||{}),o)})),define("modules/clean/security/crypto",["require","exports","tslib","modules/core/browser_detection","modules/clean/security/util"],(function(e,t,r,n,o){"use strict";function i(){return r.__awaiter(this,void 0,Promise,(function(){var t,o,i,s;return r.__generator(this,(function(a){switch(a.label){case 0:return t=n.edge&&!n.edgeChromium(),void 0===window.crypto.subtle||t||n.checkBrowserVersion(n.chrome,40,!1)?void 0===window.crypto.webkitSubtle?[3,2]:[4,new Promise((function(t,r){e(["modules/clean/security/webkitcrypto_shim"],t,r)})).then(r.__importStar)]:[2,window.crypto];case 1:if(o=a.sent().webkitCryptoWrapper,void 0!==(s=o()))return[2,s];a.label=2;case 2:return t?[4,new Promise((function(t,r){e(["modules/clean/security/legacy_edge_shim"],t,r)})).then(r.__importStar)]:[3,4];case 3:if(i=a.sent().legacyEdgeWrapper,void 0!==(s=i()))return[2,s];a.label=4;case 4:throw(c=new Error("WebCrypto not supported")).isBrowserNotSupported=!0,c}var c}))}))}Object.defineProperty(t,"__esModule",{value:!0}),t.verifyMessageHmac=t.hmacMessage=t.encryptWithPublicKey=void 0,n=r.__importStar(n),t.encryptWithPublicKey=function(e,t,n){return r.__awaiter(this,void 0,Promise,(function(){var s=this;return r.__generator(this,(function(a){return[2,i().then((function(i){return r.__awaiter(s,void 0,void 0,(function(){var s,a,c,u,l,p,y;return r.__generator(this,(function(r){switch(r.label){case 0:return s=i.getRandomValues(new Uint8Array(12)),[4,i.subtle.generateKey({name:"AES-GCM",length:128},!0,["encrypt","decrypt"])];case 1:return a=r.sent(),[4,i.subtle.encrypt({name:"AES-GCM",iv:s},a,t)];case 2:return c=r.sent(),[4,i.subtle.exportKey("raw",a)];case 3:return u=r.sent(),[4,i.subtle.importKey("spki",e,{name:"RSA-OAEP",hash:"SHA-256"},!0,["encrypt"])];case 4:return l=r.sent(),[4,i.subtle.encrypt({name:"RSA-OAEP"},l,u)];case 5:return p=r.sent(),y=new ArrayBuffer(2),new DataView(y).setInt16(0,n),[2,o.concatenateArrayBuffers(y,p,s,c)]}}))}))}))]}))}))},t.hmacMessage=function(e,t){return r.__awaiter(this,void 0,Promise,(function(){var n,o,s;return r.__generator(this,(function(r){switch(r.label){case 0:return[4,i()];case 1:return[4,(n=r.sent()).subtle.importKey("raw",e,{name:"HMAC",hash:"SHA-256"},!0,["sign"])];case 2:return o=r.sent(),[4,n.subtle.sign({name:"HMAC"},o,t)];case 3:return s=r.sent(),[2,new Uint8Array(s)]}}))}))},t.verifyMessageHmac=function(e,t,n){return r.__awaiter(this,void 0,Promise,(function(){var o,s;return r.__generator(this,(function(r){switch(r.label){case 0:return[4,i()];case 1:return[4,(o=r.sent()).subtle.importKey("raw",e,{name:"HMAC",hash:"SHA-256"},!0,["verify"])];case 2:return s=r.sent(),[4,o.subtle.verify({name:"HMAC"},s,n,t)];case 3:return[2,r.sent()]}}))}))}})),define("modules/clean/security/encryption_options",["require","exports"],(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.convertProtoEncryptionOptionsToProp=void 0,t.convertProtoEncryptionOptionsToProp=function(e){if(e)return{key:e.key,version:Number(e.version),type:e.type,timestamp:e.timestamp,plaintextFallback:e.plaintextFallback}}})),define("modules/clean/security/encryption_options_context",["require","exports","react","modules/clean/security/encryption_options","modules/clean/security/passwords"],(function(e,t,r,n,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useEncryptPassword=t.EncryptionOptionsContext=void 0,t.EncryptionOptionsContext=r.createContext(void 0),t.useEncryptPassword=function(){var e=r.useContext(t.EncryptionOptionsContext),i=n.convertProtoEncryptionOptionsToProp(e);if(null==i)throw new Error("EncryptionOptions missing: check to ensure that the current context includes EncryptionOptions.Provider");return function(e){return o.wrapPassword(e,i)}}})),define("modules/clean/security/passwords",["require","exports","tslib","modules/clean/security/util","modules/clean/security/crypto","modules/core/exception"],(function(e,t,r,n,o,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.wrapPassword=void 0,n=r.__importStar(n),t.wrapPassword=function(e,t){return r.__awaiter(this,void 0,Promise,(function(){var s,a,c,u,l,p,y,d;return r.__generator(this,(function(r){switch(r.label){case 0:if(""===e)return[2,""];s=encodeURIComponent(e),r.label=1;case 1:return r.trys.push([1,5,,6]),a="wrapped_password_"+t.type+"_","RSA-OAEP"!==t.type?[3,3]:(c=void 0!==window.performance?window.performance.now()/1e3:0,u=t.timestamp+c,l=n.b64urldecode(t.key),[4,o.encryptWithPublicKey(l,n.stringToBytes(JSON.stringify({timestamp:u,password:s})),t.version)]);case 2:return p=r.sent(),[2,a+n.b64urlencode(p)];case 3:throw new Error("Unsupported algorithm");case 4:return[3,6];case 5:if(y=r.sent(),!0===t.plaintextFallback)return i.reportException({err:y,severity:"non-critical",tags:["password-crypto-fallback-error"]}),[2,"wrapped_password_PLAINTEXT_"+s];throw d=void 0,d=y.isBrowserNotSupported?"user-error":"critical",i.reportException({err:y,severity:d,tags:["password-crypto-error"]}),y;case 6:return[2]}}))}))}})),define("modules/clean/security/util",["require","exports"],(function(e,t){"use strict";function r(e){return btoa(e).replace(/\//g,"_").replace(/\+/g,"-")}function n(e){return String.fromCharCode.apply(null,new Uint8Array(e))}function o(e){return new Uint8Array(Array.prototype.map.call(e,(function(e){return e.charCodeAt(0)})))}Object.defineProperty(t,"__esModule",{value:!0}),t.asNumber=t.concatenateArrayBuffers=t.stringToBytes=t.bytesToString=t.b64urldecode=t.b64urlencodeString=t.b64urlencode=void 0,t.b64urlencode=function(e){return r(n(e))},t.b64urlencodeString=r,t.b64urldecode=function(e){return o(atob(e.replace(/_/g,"/").replace(/-/g,"+")))},t.bytesToString=n,t.stringToBytes=o,t.concatenateArrayBuffers=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var r=0,n=0,o=e;n<o.length;n++){r+=(u=o[n]).byteLength}for(var i=new Uint8Array(r),s=0,a=0,c=e;a<c.length;a++){var u=c[a],l=new Uint8Array(u);i.set(l,s),s+=u.byteLength}return i},t.asNumber=function(e){return"number"==typeof e?e:e.toNumber()}})),define("prod_assets_web_modules/common/__node-resolve__empty",["exports","./_commonjsHelpers"],(function(e,t){"use strict";var r=Object.freeze({__proto__:null,default:{}}),n=t.getAugmentedNamespace(r);e.minDoc=n}));
//# sourceMappingURL=pkg-core-security.min.js-vfln8BpAT.map