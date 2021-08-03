define("modules/clean/abuse/captcha_helper",["require","exports","tslib","modules/constants/login_and_register","modules/constants/page_load","modules/clean/web_timing_logger","modules/core/exception","modules/core/uri"],(function(e,t,a,r,c,n,o,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DUMMY_RESPONSE=t.BuildRecaptchaURI=t.isTest=t.LoadRecaptcha=t.ClearCaptchaPromise=t.HasCaptchaLoaded=t.captchaPromise=void 0,r=a.__importStar(r),o=a.__importStar(o);var s=!1;function u(){var e={onload:"recaptchaOnloadCallback",render:"explicit",hl:c.USER_LOCALE.replace("_","-")};return new i.URI({scheme:"https",authority:"www.google.com",path:"/recaptcha/api.js",query:e}).toString()}function l(){return new Promise((function(c,n){if(window.recaptchaOnloadCallback=function(){c(window.grecaptcha)},r.SHOULD_LOAD_FUNCAPTCHA&&s&&new Promise((function(t,a){e(["modules/clean/abuse/funcaptcha_modal"],t,a)})).then(a.__importStar).then((function(e){var t,a=e.loadFuncaptchaModal,r=e.recordFunCaptchaLoadingStats,c=performance.now(),n="",o=!1;try{a(),o=!0}catch(e){n=e.message}finally{t=performance.now()}r("funcaptcha_modal_loading",t-c,o,n)})),t.isTest())c(f);else{var i=document.createElement("script"),l=u();i.setAttribute("src",l);var p=window.CSP_SCRIPT_NONCE;if(!p)return o.reportException({err:new Error("CSP nonce not set"),severity:o.SEVERITY.CRITICAL,tags:["product-safety-infra","recaptcha"]}),void n();i.setAttribute("nonce",p),document.body.appendChild(i)}}))}t.HasCaptchaLoaded=function(){return null!=t.captchaPromise},t.ClearCaptchaPromise=function(){t.captchaPromise=null},t.LoadRecaptcha=function(e,a){return void 0!==a&&(s=a),t.captchaPromise||(t.captchaPromise=e?new Promise((function(e,t){n.waitForTTI().then(e),setTimeout(e,2500)})).then(l):l()),t.captchaPromise},t.isTest=function(){return r.IS_SELENIUM_TEST},t.BuildRecaptchaURI=u;var p={},d={},h=0;t.DUMMY_RESPONSE="DUMMY-RESPONSE";var m=function(e){e.setAttribute("class","g-recaptcha-response"),e.setAttribute("name","g-recaptcha-response"),e.value=""},f={reset:function(e){var t=d[e].querySelector(".g-recaptcha-response");return m(t),!0},render:function(e,a,r){var c=h;h+=1,o.assert(null==e.querySelector(".g-recaptcha-response"),"can't render multiple recaptcha elements in same div");var n=document.createElement("textarea");return n.id="g-recaptcha-response-"+c,m(n),e.appendChild(n),d[c]=e,p[c]=function(){var e=t.DUMMY_RESPONSE;return n.value=e,a.callback&&a.callback(e),e},c},execute:function(e){return Promise.resolve(p[e]())}}}));
//# sourceMappingURL=pkg-captcha.min.js-vfllujzEy.map