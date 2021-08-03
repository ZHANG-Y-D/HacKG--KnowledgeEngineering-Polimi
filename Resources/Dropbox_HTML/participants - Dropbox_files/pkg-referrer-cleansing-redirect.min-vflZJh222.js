define("modules/clean/referrer_cleansing_redirect",["require","exports","tslib","sjcl","modules/core/browser","modules/core/cookies","modules/core/uri"],(function(e,r,t,i,o,c,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.safe_open_tab_and_redirect=r.redirect=r.get_redirect_uri=void 0,i=t.__importStar(i),o=t.__importStar(o);var s=function(e){var r=i.codec.utf8String.toBits(c.Cookies.read("__Host-js_csrf")),t=new i.misc.hmac(r).encrypt(e);return i.codec.base64.fromBits(t)};function d(e){var r=n.URI.parse(e).getScheme();if(r&&!["http","https"].includes(r))return"#";var t=new n.URI({scheme:"https",authority:"www.dropbox.com",path:"/referrer_cleansing_redirect"});return t.setQuery({url:e,hmac:s(e)}),t}function _(e,r,t){void 0===r&&(r=window),void 0===t&&(t=!1),t&&(r.opener=null),o.redirect(d(e),r)}r.get_redirect_uri=d,r.redirect=_,r.safe_open_tab_and_redirect=function(e){_(e,o.unsafe_open_tab(""),!0)}}));
//# sourceMappingURL=pkg-referrer-cleansing-redirect.min.js-vflytO_zw.map