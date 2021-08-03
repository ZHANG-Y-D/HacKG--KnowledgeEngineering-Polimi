define("spectrum/icon_templates/css_utils",["require","exports"],(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getClassNamesForName=void 0,t.getClassNamesForName=function(e,t){return["mc-icon","mc-icon-template-"+e,"mc-icon-template-"+e+"--"+t]}})),define("spectrum/media_table_skeleton/index",["require","exports","tslib","spectrum/media_table_skeleton/media_icon","spectrum/media_table_skeleton/media_table_skeleton","spectrum/media_table_skeleton/media_table_skeleton_row"],(function(e,t,a,l,n,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),a.__exportStar(l,t),a.__exportStar(n,t),a.__exportStar(i,t)})),define("spectrum/media_table_skeleton/media_icon",["require","exports","tslib","react"],(function(e,t,a,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MediaIcon=void 0,l=a.__importStar(l),t.MediaIcon=function(){return l.createElement("svg",{width:"24",height:"29",viewBox:"0 0 24 29"},l.createElement("g",{fill:"none"},l.createElement("polyline",{points:"0 0 16 0 16 8 24 8 24 29 0 29",fill:"#F7F8F9"}),l.createElement("polygon",{points:"16 0 24 8 16 8",fill:"#EFF1F3"})))},t.MediaIcon.displayName="MediaIcon"})),define("spectrum/media_table_skeleton/media_table_skeleton",["require","exports","tslib","classnames","react","spectrum/media_table_skeleton/media_table_skeleton_row"],(function(e,t,a,l,n,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MediaTableSkeleton=void 0,l=a.__importDefault(l),n=a.__importStar(n),t.MediaTableSkeleton=function(e){for(var t=e.numRows,a=e.className,o=[],s=0;s<t;s++)o.push(n.createElement(i.MediaTableSkeletonRow,{key:s}));var r=l.default("media-table-skeleton",a);return n.createElement("table",{className:r},n.createElement("thead",{className:"media-table-skeleton-head"},n.createElement("tr",{className:"media-table-skeleton-head-row"},n.createElement("th",{className:"media-table-skeleton-head-cell"},n.createElement("div",{className:"media-table-skeleton-placeholder-head"})))),n.createElement("tbody",{className:"media-table-skeleton-body"},o))},t.MediaTableSkeleton.displayName="MediaTableSkeleton"})),define("spectrum/media_table_skeleton/media_table_skeleton_row",["require","exports","tslib","react","spectrum/media_table_skeleton/media_icon"],(function(e,t,a,l,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MediaTableSkeletonRow=void 0,l=a.__importStar(l),t.MediaTableSkeletonRow=function(){return l.createElement("tr",{className:"media-table-skeleton-row"},l.createElement("td",{className:"media-table-skeleton-cell-content"},l.createElement("div",{className:"media-table-skeleton-icon"},l.createElement(n.MediaIcon,null)),l.createElement("div",{className:"media-table-skeleton-placeholder-content"})),l.createElement("td",{className:"media-table-skeleton-cell-detail"},l.createElement("div",{className:"media-table-skeleton-placeholder-detail"})))},t.MediaTableSkeletonRow.displayName="MediaTableSkeletonRow"})),define("spectrum/svg_icon_bundle/index",["require","exports","tslib","spectrum/svg_icon_bundle/svg_icon_bundle"],(function(e,t,a,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),a.__exportStar(l,t)})),define("spectrum/svg_icon_bundle/svg_icon_bundle",["require","exports","tslib","react"],(function(e,t,a,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SvgIconBundle=void 0,l=a.__importStar(l),t.SvgIconBundle=function(e){var t=e.icon,n=a.__rest(e,["icon"]),i=t.attrs,o=t.dangerouslySetInnerIconHtml;return l.createElement("svg",Object.assign({dangerouslySetInnerHTML:{__html:o}},i,n))}}));
//# sourceMappingURL=pkg-mcl-home.min.js-vfl3ubIHB.map