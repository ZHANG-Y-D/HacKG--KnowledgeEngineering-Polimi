define("spectrum/culled_list/culled_item",["require","exports","tslib","react"],(function(e,t,r,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CulledItem=void 0,o=r.__importStar(o),t.CulledItem=function(e){var t=e.children,n=e.className,a=e.style,i=e.tagName,l=e.topOffset,s=e.height,c=r.__rest(e,["children","className","style","tagName","topOffset","height"]);return o.createElement(i,Object.assign({className:n,style:r.__assign(r.__assign({},a),{position:"absolute",top:l,width:"100%",height:s})},c),t)},t.CulledItem.displayName="CulledItem"})),define("spectrum/culled_list/culled_list",["require","exports","tslib","react","spectrum/scroll_monitor/index","spectrum/culled_list/util","spectrum/scroll_monitor/utils"],(function(e,t,r,o,n,a,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CulledList=void 0,o=r.__importStar(o);var l=(function(e){function t(t){var r=e.call(this,t)||this;r.handleScroll=function(e){r.scrollPosition=e.fromTop,r.viewportHeight=e.innerHeight;var t=r.state,o=t.startIndex,n=t.endIndex,a=r.props.scrollThreshold,i=r.getIndexRangeInView(),l=i[0],s=i[1],c=Math.abs(l-o),d=Math.abs(s-n);(c>=a||d>=a)&&r.setState({startIndex:l,endIndex:s})};var o=t.items,n=t.listItemHeight;r.updateOffsetCache(o,n);var a=r.getIndexRangeInView(t);return r.state={startIndex:a[0],endIndex:a[1]},r}return r.__extends(t,e),t.prototype.UNSAFE_componentWillMount=function(){var e=this.props,t=e.viewportHeight,r=e.scrollPosition,o=e.shouldUseWindowAsScrollContainer,n=void 0!==t,a=void 0!==r;if(n&&(this.viewportHeight=t),a&&(this.scrollPosition=r),o){var l=i.getWindowScrollMeasurements(window),s=l.fromTop,c=l.innerHeight;n||(this.viewportHeight=c),a||(this.scrollPosition=s)}},t.prototype.UNSAFE_componentWillReceiveProps=function(e){var t=e.viewportHeight,r=e.scrollPosition,o=e.items,n=e.listItemHeight;void 0!==t&&(this.viewportHeight=t),void 0!==r&&(this.scrollPosition=r),this.updateOffsetCache(o,n);var a=this.getIndexRangeInView(e);this.setState({startIndex:a[0],endIndex:a[1]})},t.prototype.componentDidUpdate=function(){var e=this.state,t=e.startIndex,r=e.endIndex,o=this.props.onRangeInView;o&&o(t,r)},t.prototype.renderItemContainer=function(e){var t=this.props,r=t.role,n=t.id,a=t["aria-labelledby"],i=t.className,l=e.tagName||"div";return o.createElement(l,{role:r,id:n,"aria-labelledby":a,children:e.children,className:i,key:"Container "+e.containerIndex,style:{height:e.height}})},t.prototype.wrapWithElementScrollMonitor=function(e){var t=this.props,r=t.viewportHeight,a=t.scrollContainerTagName,i=t.window;return o.createElement(n.ElementScrollMonitor,{height:r,tagName:a,onScroll:this.handleScroll,window:i},e)},t.prototype.renderWithMaxHeightGrouping=function(){var e=this.props,t=e.id,r=e["aria-labelledby"],a=e.className,i=e.items,l=e.listItemHeight,s=e.role,c=e.shouldUseWindowAsScrollContainer,d=e.tagName,u=e.window,m=i.length,p=this.state,f=p.startIndex,_=p.endIndex,h=[],b=[];if(c&&b.push(o.createElement(n.WindowScrollMonitor,{window:u,onScroll:this.handleScroll})),Array.isArray(l)){for(var v=l,g=0,x=0;x<m;x++)g+v[x]>15e5&&(h.push(this.renderItemContainer({tagName:d,className:a,children:b,containerIndex:h.length,height:g,role:s,id:t,ariaLabelledby:r})),b=[],g=0),x>=f&&x<=_&&b.push(this.renderItem(x,v[x],g)),g+=v[x];g>0&&(h.push(this.renderItemContainer({tagName:d,className:a,children:b,containerIndex:h.length,height:g,role:s,id:t,ariaLabelledby:r})),b=[])}else{var w=l,y=Math.floor(15e5/w),N=(g=y*w,m%y*w);N||(N=g);var M=Math.ceil(m/y),S=Math.floor(f/y);for(x=0;x<S;x++)h.push(this.renderItemContainer({tagName:d,className:a,children:[],containerIndex:h.length,height:g,role:s,id:t,ariaLabelledby:r}));var T=y*(S+1),C=f%y*w;for(x=f;x<=_;x++)x===T&&(h.push(this.renderItemContainer({tagName:d,className:a,children:b,containerIndex:h.length,height:g,role:s,id:t,ariaLabelledby:r})),b=[],T+=y,C=0),b.push(this.renderItem(x,w,C)),C+=w;for(x=h.length;x<M;x++)x===M-1&&(g=N),h.push(this.renderItemContainer({tagName:d,className:a,children:b,containerIndex:h.length,height:g,role:s,id:t,ariaLabelledby:r})),b=[]}return 1===h.length?h[0]:o.createElement("div",{className:"mc-culled-list-container-wrapper"},h)},t.prototype.renderWithoutMaxHeightGrouping=function(){var e=this.props,t=e.className,r=e.items,a=e.listItemHeight,i=e.shouldUseWindowAsScrollContainer,l=e.role,s=e.tagName,c=e.window,d=e.id,u=e["aria-labelledby"],m=r.length,p=this.state,f=p.startIndex,_=p.endIndex,h=[];i&&h.push(o.createElement(n.WindowScrollMonitor,{window:c,onScroll:this.handleScroll}));var b=0;if(Array.isArray(a))for(var v=a,g=0;g<m;g++)g>=f&&g<=_&&h.push(this.renderItem(g,v[g],b)),b+=v[g];else{var x=a;for(g=f;g<=_;g++)h.push(this.renderItem(g,x,g*x));b=x*m}return this.renderItemContainer({tagName:s,className:t,children:h,containerIndex:0,height:b,role:l,id:d,ariaLabelledby:u})},t.prototype.render=function(){var e=this.props,t=e.enableMaxHeightGrouping,r=e.shouldUseWindowAsScrollContainer,o=t?this.renderWithMaxHeightGrouping():this.renderWithoutMaxHeightGrouping();return r||(o=this.wrapWithElementScrollMonitor(o)),o},t.prototype.renderItem=function(e,t,r){var o=this.props,n=o.items,a=o.getItemKey,i=o.renderRow,l=n[e];return a&&a(l,e),i(l,e,r)},t.prototype.getIndexRangeInView=function(e){void 0===e&&(e=this.props);var t=e.itemBuffer,r=e.items,o=e.listItemHeight,n=e.scrollPositionOffset,i=e.scrollThreshold,l=e.window,s=e.viewportHeight,c=void 0===s?this.viewportHeight:s,d=e.scrollPosition,u=void 0===d?this.scrollPosition:d,m=e.shouldUseWindowAsScrollContainer,p=l.document.documentElement,f=u;void 0===f&&(f=m?Math.max(p.scrollTop,0):0),n&&(f-=n);var _=r.length,h=t+Math.max(i-1,0);return Array.isArray(o)?a.rangeInSlicedBoundary(this.cachedItemOffsets,c,f,h):a.rangeInEvenSlicedBoundary(_,o,f,c,h)},t.prototype.updateOffsetCache=function(e,t){if(Array.isArray(t)){if(e.length!==t.length)throw new Error("Must supply a height for every item.");this.cachedItemOffsets=a.computeSliceOffsets(t)}},t})(o.PureComponent);t.CulledList=l,l.displayName="CulledList",l.defaultProps={itemBuffer:10,itemTagName:"li",enableMaxHeightGrouping:!1,scrollThreshold:1,shouldUseWindowAsScrollContainer:!0,tagName:"ul",window:"undefined"!=typeof window?window:void 0}})),define("spectrum/culled_list/util",["require","exports"],(function(e,t){"use strict";function r(e,t,o,n,a){if(void 0===o&&(o=!1),void 0===n&&(n=0),!e.length)return-1;var i=e.length-1;if(void 0===a&&(a=i),n===a||t<e[n]||o&&t===e[n])return n;if(t>=e[i])return a;var l=n+Math.floor((a-n)/2),s=e[l];return t===s?l+1:t<s?r(e,t,o,n,l):r(e,t,o,l+1,a)}Object.defineProperty(t,"__esModule",{value:!0}),t.rangeInSlicedBoundary=t.computeSliceOffsets=t.binaryBucket=t.rangeInEvenSlicedBoundary=void 0,t.rangeInEvenSlicedBoundary=function(e,t,r,o,n){var a=t*e,i=Math.floor(r/a*e),l=Math.max(i-n,0),s=Math.ceil((r+o||1)/a*e)-1;return[l,Math.min(s+n,e-1)]},t.binaryBucket=r,t.computeSliceOffsets=function(e){return e.reduce((function(e,t){return e.push(t+(e[e.length-1]||0)),e}),[])},t.rangeInSlicedBoundary=function(e,t,o,n){if(!e.length)return[];var a=r(e,o,!1),i=r(e,o+t,!0,a);return[Math.max(a-n,0),Math.min(i+n,e.length-1)]}})),define("spectrum/culled_list/index",["require","exports","tslib","spectrum/culled_list/culled_item","spectrum/culled_list/culled_list"],(function(e,t,r,o,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.__exportStar(o,t),r.__exportStar(n,t)})),define("spectrum/dimensions/index",["require","exports","tslib","spectrum/dimensions/dimensions"],(function(e,t,r,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.__exportStar(o,t)})),define("spectrum/dimensions/dimensions",["require","exports","tslib","react","resize-observer-polyfill"],(function(e,t,r,o,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Dimensions=void 0,o=r.__importStar(o),n=r.__importDefault(n);var a=(function(e){function t(){var t=e.apply(this,arguments)||this;return t.state={},t.animationFrameId=null,t.handleResize=function(e){var r=e[0].contentRect,o=r.width,n=r.height;t.animationFrameId=window.requestAnimationFrame((function(){t.setState({width:o,height:n})}))},t}return r.__extends(t,e),t.prototype.componentDidMount=function(){this.rootElement&&(this.resizeObserver=new n.default(this.handleResize),this.resizeObserver.observe(this.rootElement))},t.prototype.componentDidUpdate=function(e){e.tagName!==this.props.tagName&&this.rootElement&&(this.animationFrameId&&window.cancelAnimationFrame(this.animationFrameId),this.resizeObserver.disconnect(),this.resizeObserver.observe(this.rootElement))},t.prototype.componentWillUnmount=function(){this.animationFrameId&&window.cancelAnimationFrame(this.animationFrameId),this.resizeObserver.disconnect()},t.prototype.render=function(){var e=this,t=this.props,n=t.children,a=t.tagName,i=void 0===a?"div":a,l=r.__rest(t,["children","tagName"]),s=this.state,c=s.width,d=s.height,u=null;return"function"==typeof n&&(u=n({width:c,height:d})),o.createElement(i,Object.assign({ref:function(t){return e.rootElement=t}},l),u)},t})(o.PureComponent);t.Dimensions=a,a.displayName="Dimensions"})),define("spectrum/dropdown_button/index",["require","exports","tslib","spectrum/dropdown_button/dropdown_button"],(function(e,t,r,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.__exportStar(o,t)})),define("spectrum/dropdown_button/dropdown_button",["require","exports","tslib","classnames","react","spectrum/button/index"],(function(e,t,r,o,n,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DropdownButton=void 0,o=r.__importDefault(o),n=r.__importStar(n),t.DropdownButton=function(e){var t=e.children,i=e.className,l=e.tagName,s=e.type,c=void 0===s?"button":s,d=r.__rest(e,["children","className","tagName","type"]),u=o.default(i,"mc-dropdown-button"),m={};return"button"===l&&(m.type=c),n.createElement(a.Button,Object.assign({variant:"secondary",className:u,tagName:l},m,d),n.createElement("span",{className:"mc-dropdown-button-content"},t))},t.DropdownButton.displayName="DropdownButton"})),define("spectrum/dropdown_menu/index",["require","exports","tslib","spectrum/dropdown_menu/dropdown_menu","spectrum/dropdown_menu/dropdown_menu_button","spectrum/dropdown_menu/menu","spectrum/dropdown_menu/menu_item"],(function(e,t,r,o,n,a,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.__exportStar(o,t),r.__exportStar(n,t),r.__exportStar(a,t),r.__exportStar(i,t)})),define("spectrum/dropdown_menu/dropdown_menu",["require","exports","tslib","classnames","react","react-aria-menubutton","spectrum/dropdown_menu/dropdown_menu_button"],(function(e,t,r,o,n,a,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DropdownMenu=void 0,o=r.__importDefault(o),n=r.__importStar(n),t.DropdownMenu=function(e){var t=e.children,l=e.className,s=e.disabled,c=e.fullWidth,d=e.onSelection,u=e.ref,m=r.__rest(e,["children","className","disabled","fullWidth","onSelection","ref"]),p=o.default("mc-dropdown-menu",l,{"mc-dropdown-menu-full-width":c}),f=t;return t&&(f=n.Children.map(t,(function(e){if(n.isValidElement(e)&&e.type===i.DropdownMenuButton){var t={disabled:s};return n.cloneElement(e,t)}return e}))),n.createElement(a.Wrapper,Object.assign({className:p,onSelection:function(e){d&&d(e)},ref:u},m),f)},t.DropdownMenu.displayName="DropdownMenu"})),define("spectrum/dropdown_menu/dropdown_menu_button",["require","exports","tslib","classnames","react","spectrum/fixed_aria_menu_button/index","spectrum/dropdown_button/index"],(function(e,t,r,o,n,a,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DropdownMenuButton=void 0,o=r.__importDefault(o),n=r.__importStar(n),t.DropdownMenuButton=function(e){var t=e.children,l=e.className,s=(e.ref,e.disabled),c=e.fullWidth,d=e.variant,u=void 0===d?"secondary":d,m=r.__rest(e,["children","className","ref","disabled","fullWidth","variant"]),p=o.default("mc-dropdown-menu-button","mc-button-styleless","mc-button-aria-wrapper",{"mc-button-full-width":c},l),f=m;return s&&(f.tabIndex=-1),n.createElement(a.FixedAriaMenuButton,Object.assign({tag:"button",type:"button",className:p,disabled:s},f),n.createElement(i.DropdownButton,{tagName:"span",disabled:s,fullWidth:c,variant:u},t))},t.DropdownMenuButton.displayName="DropdownMenuButton"})),define("spectrum/dropdown_menu/menu",["require","exports","tslib","classnames","react","react-aria-menubutton"],(function(e,t,r,o,n,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Menu=void 0,o=r.__importDefault(o),n=r.__importStar(n),t.Menu=function(e){var t=e.className,i=e.ref,l=r.__rest(e,["className","ref"]),s=o.default("mc-menu",t);return n.createElement(a.Menu,Object.assign({tag:"ul",className:s,ref:i},l))},t.Menu.displayName="Menu"})),define("spectrum/dropdown_menu/menu_item",["require","exports","tslib","classnames","react","react-aria-menubutton","spectrum/button/index"],(function(e,t,r,o,n,a,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MenuItem=void 0,o=r.__importDefault(o),n=r.__importStar(n),t.MenuItem=function(e){var t=e.children,l=e.className,s=e.disabled,c=(e.ref,e.selected),d=e.value,u=r.__rest(e,["children","className","disabled","ref","selected","value"]),m=o.default("mc-menu-item",l,{"mc-menu-item-disabled":s,"mc-menu-item-selected":c});return s?n.createElement("li",Object.assign({className:m},u),n.createElement(i.Button,{tagName:"span",variant:"styleless",className:"mc-menu-item-button",disabled:s},t)):n.createElement(a.MenuItem,Object.assign({tag:"li",className:m,value:d},u),n.createElement(i.Button,{variant:"styleless",className:"mc-menu-item-button"},t))},t.MenuItem.displayName="MenuItem"})),define("spectrum/fixed_aria_menu_button/index",["require","exports","tslib","react","react-dom","react-aria-menubutton"],(function(e,t,r,o,n,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FixedAriaMenuButton=void 0,o=r.__importStar(o),n=r.__importStar(n),t.FixedAriaMenuButton=function(e,t){var i,l=t.ambManager,s=(e.ref,r.__rest(e,["ref"])),c=s.onMouseDown;return o.createElement(a.Button,Object.assign({ref:function(e){return i=e},onClick:function(){s.disabled||(i&&n.findDOMNode(i).focus(),l.toggleMenu({},{focusMenu:!1}),c&&c.apply(this,arguments))}},s))},t.FixedAriaMenuButton.contextTypes={ambManager:function(){return null}},t.FixedAriaMenuButton.displayName="FixedAriaMenuButton"})),define("spectrum/input/index",["require","exports","tslib","spectrum/input/input","spectrum/input/text_area"],(function(e,t,r,o,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.__exportStar(o,t),r.__exportStar(n,t)})),define("spectrum/input/input",["require","exports","tslib","classnames","react"],(function(e,t,r,o,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Input=void 0,o=r.__importDefault(o),n=r.__importStar(n),t.Input=function(e){var t=e.variant,a=e.className,i=e.forwardedRef,l=e.fullWidth,s=r.__rest(e,["variant","className","forwardedRef","fullWidth"]),c=o.default(a,{"mc-input":!0,"mc-input-full-width":l,disabled:!!s.disabled,focus:!s.disabled&&"focus"===t,invalid:!s.disabled&&"invalid"===t});return n.createElement("input",Object.assign({className:c,ref:i,type:"text"},s))},t.Input.displayName="Input"})),define("spectrum/input/text_area",["require","exports","tslib","classnames","react"],(function(e,t,r,o,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TextArea=void 0,o=r.__importDefault(o),n=r.__importStar(n),t.TextArea=function(e){var t=e.className,a=e.fullWidth,i=e.forwardedRef,l=e.variant,s=void 0===l?"default":l,c=r.__rest(e,["className","fullWidth","forwardedRef","variant"]),d=o.default("mc-text-area",{"mc-text-area-full-width":a,"mc-text-area-invalid":!c.disabled&&"invalid"===s},t);return n.createElement("textarea",Object.assign({className:d,ref:i},c))},t.TextArea.displayName="TextArea"})),define("spectrum/media_table/index",["require","exports","tslib","spectrum/media_table/culled_media_row","spectrum/media_table/media_actions","spectrum/media_table/media_cell","spectrum/media_table/media_cell_text","spectrum/media_table/media_row"],(function(e,t,r,o,n,a,i,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.__exportStar(o,t),r.__exportStar(n,t),r.__exportStar(a,t),r.__exportStar(i,t),r.__exportStar(l,t)})),define("spectrum/media_table/culled_media_row",["require","exports","tslib","classnames","react","spectrum/media_table/media_row"],(function(e,t,r,o,n,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CulledMediaRow=void 0,o=r.__importDefault(o),n=r.__importStar(n),t.CulledMediaRow=function(e){var t=e.className,i=e.topOffset,l=e.ref,s=e.style,c=r.__rest(e,["className","topOffset","ref","style"]),d=o.default("mc-media-row-culled",t),u=r.__assign({top:i},s);return n.createElement(a.MediaRow,Object.assign({className:d,style:u,ref:l},c))},t.CulledMediaRow.displayName="CulledMediaRow"})),define("spectrum/media_table/media_actions",["require","exports","tslib","classnames","react","spectrum/button/index","spectrum/overflow_button/index"],(function(e,t,r,o,n,a,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MediaActionsOverflowButton=t.MediaActionsButton=t.MediaActions=void 0,o=r.__importDefault(o),n=r.__importStar(n),t.MediaActions=function(e){var t=e.className,a=r.__rest(e,["className"]),i=o.default("mc-media-actions",t);return n.createElement("div",Object.assign({className:i},a))},t.MediaActions.displayName="MediaActions",t.MediaActionsButton=function(e){var t=e.isHovered,o=r.__rest(e,["isHovered"]);return n.createElement(a.Button,Object.assign({variant:t?"secondary":"invisible"},o))},t.MediaActionsButton.displayName="MediaActionsButton",t.MediaActionsOverflowButton=function(e){var t=e.isHovered,o=r.__rest(e,["isHovered"]);return n.createElement(i.OverflowButton,Object.assign({variant:t?void 0:"borderless"},o))},t.MediaActionsOverflowButton.displayName="MediaActionsOverflowButton"})),define("spectrum/media_table/media_cell",["require","exports","tslib","react","spectrum/table/index","spectrum/media_table/media_cell_text"],(function(e,t,r,o,n,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MediaCell=void 0,o=r.__importStar(o),t.MediaCell=function(e){var t=e.accessory,i=e.children,l=e.className,s=e.icon,c=e.title,d=e.quote,u=e.subtitle,m=e.highlight,p=e.variant,f=void 0===p?"default":p,_=r.__rest(e,["accessory","children","className","icon","title","quote","subtitle","highlight","variant"]),h=!(!c||!u)?"mc-media-cell mc-media-cell-double-line":"mc-media-cell",b=l?h+" "+l:h;return o.createElement(n.TableCell,Object.assign({className:b},_),t&&o.createElement("div",{className:"mc-media-cell-accessory"},t),s&&o.createElement("div",{className:"mc-media-cell-icon"},s),(c||u)&&o.createElement("div",{className:"mc-media-cell-content"},c&&o.createElement(a.MediaCellText,{variant:"default"===f?"title":"detail",highlight:m},c),u&&o.createElement(a.MediaCellText,{variant:"subtitle"},u),d&&o.createElement(a.MediaCellText,{variant:"quote"},d)),i)},t.MediaCell.displayName="MediaCell"})),define("spectrum/media_table/media_cell_text",["require","exports","tslib","react"],(function(e,t,r,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MediaCellText=void 0,o=r.__importStar(o),t.MediaCellText=function(e){var t=e.variant,n=void 0===t?"title":t,a=e.highlight,i=e.className,l=r.__rest(e,["variant","highlight","className"]),s=a?"mc-media-cell-text mc-media-cell-text-"+n+" mc-media-cell-text-highlight":"mc-media-cell-text mc-media-cell-text-"+n,c=i?s+" "+i:s;return o.createElement("div",Object.assign({className:c},l))},t.MediaCellText.displayName="MediaCellText"})),define("spectrum/media_table/media_row",["require","exports","tslib","classnames","react","spectrum/table/index"],(function(e,t,r,o,n,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MediaRow=void 0,o=r.__importDefault(o);var i=(function(e){function t(t){var r=e.call(this,t)||this;return r.handleHover=function(){r.setState({isHovered:!0})},r.handleBlur=function(){r.setState({isHovered:!1})},r.state={isHovered:!1},r}return r.__extends(t,e),t.prototype.render=function(){var e=this.props,t=e.borderless,i=void 0!==t&&t,l=e.children,s=e.className,c=e.doubleLine,d=void 0!==c&&c,u=e.onClick,m=e.ref,p=e.variant,f=e.deprecatedDoNotUseColumnFlex,_=r.__rest(e,["borderless","children","className","doubleLine","onClick","ref","variant","deprecatedDoNotUseColumnFlex"]),h=this.state.isHovered,b=o.default("mc-media-row",{"mc-media-row-border":!i,"mc-media-row-clickable":!!u,"mc-media-row-double-line":d,"mc-media-row-dragover":"dragover"===p,"mc-media-row-droppable":"droppable"===p,"mc-media-row-inactive":"inactive"===p,"mc-media-row-selected":"selected"===p},s),v=(function(e){return"function"==typeof e})(l),g=l;v&&(g=l({isHovered:h}));var x=r.__assign({className:b,onMouseEnter:v?this.handleHover:void 0,onMouseLeave:v?this.handleBlur:void 0,onClick:u,ref:m},_);return f?n.createElement(a.TableRowWithoutContext,Object.assign({columnFlex:f},x),g):n.createElement(a.TableRow,Object.assign({},x),g)},t})((n=r.__importStar(n)).PureComponent);t.MediaRow=i,i.displayName="MediaRow",i.defaultProps={doubleLine:!1}})),define("spectrum/scroll_monitor/index",["require","exports","tslib","spectrum/scroll_monitor/element_scroll_monitor","spectrum/scroll_monitor/window_scroll_monitor"],(function(e,t,r,o,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.__exportStar(o,t),r.__exportStar(n,t)})),define("spectrum/scroll_monitor/element_scroll_monitor",["require","exports","tslib","react","spectrum/util/raf_throttle","spectrum/scroll_monitor/utils"],(function(e,t,r,o,n,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ElementScrollMonitor=void 0;var i=(function(e){function t(t){var r=e.call(this,t)||this;r.lastFromTop=null,r.lastTotalTop=null,r.lastFromBottom=null,r.lastTotalBottom=null,r.reportScroll=function(){var e=r.props.onScroll,t=a.getElementScrollMeasurements(r.scrollElement),o=t.fromBottom,n=t.fromTop,i=t.innerHeight,l=t.totalBottom,s=t.totalTop,c=n!==r.lastFromTop||s!==r.lastTotalTop,d=o!==r.lastFromBottom||l!==r.lastTotalBottom;r.lastFromTop=n,r.lastTotalTop=s,r.lastFromBottom=o,r.lastTotalBottom=l,(c||d)&&e({fromBottom:o,fromTop:n,innerHeight:i,totalBottom:l,totalTop:s})};var o=t.window;return r.throttle=new n.RafThrottle(r.reportScroll,o),r}return r.__extends(t,e),t.prototype.componentWillUnmount=function(){this.throttle.cancelPending()},t.prototype.render=function(){var e=this,t=this.props,n=t.children,a=t.className,i=t.height,l=this.props,s=l.tagName,c=void 0===s?"div":s;r.__rest(l,["tagName"]);if(!n)return null;var d={height:i,overflow:"auto",position:"relative"};return o.createElement(c,{children:n,className:a,onScroll:this.throttle.request,ref:function(t){return e.scrollElement=t},style:d})},t})((o=r.__importStar(o)).Component);t.ElementScrollMonitor=i,i.displayName="ElementScrollMonitor",i.defaultProps={tagName:"div"}})),define("spectrum/scroll_monitor/utils",["require","exports"],(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getElementScrollMeasurements=t.getWindowScrollMeasurements=void 0,t.getWindowScrollMeasurements=function(e){var t=e||window,r=t.document,o=t.innerHeight,n=t.pageYOffset,a=r.documentElement,i=r.body,l=a.scrollHeight,s=a.scrollTop;return{fromBottom:l-(o+n),fromTop:Math.max(s,i.scrollTop),innerHeight:o,totalBottom:l-o,totalTop:l}},t.getElementScrollMeasurements=function(e){var t=e.scrollHeight,r=e.clientHeight,o=e.scrollTop;return{fromBottom:t-(r+o),fromTop:o,innerHeight:r,totalBottom:t-r,totalTop:t}}})),define("spectrum/scroll_monitor/window_scroll_monitor",["require","exports","tslib","react","spectrum/util/raf_throttle","spectrum/scroll_monitor/utils"],(function(e,t,r,o,n,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WindowScrollMonitor=void 0;var i=(function(e){function t(t){var r=e.call(this,t)||this;r.lastFromTop=null,r.lastTotalTop=null,r.lastFromBottom=null,r.lastTotalBottom=null,r.reportScroll=function(){var e=r.props,t=e.onScroll,o=e.window,n=a.getWindowScrollMeasurements(o),i=n.fromBottom,l=n.fromTop,s=n.innerHeight,c=n.totalBottom,d=n.totalTop,u=l!==r.lastFromTop||d!==r.lastTotalTop,m=i!==r.lastFromBottom||c!==r.lastTotalBottom;r.lastFromTop=l,r.lastTotalTop=d,r.lastFromBottom=i,r.lastTotalBottom=c,(u||m)&&t({fromBottom:i,fromTop:l,totalBottom:c,totalTop:d,innerHeight:s})};var o=t.window;return r.throttle=new n.RafThrottle(r.reportScroll,o),r}return r.__extends(t,e),t.prototype.componentDidMount=function(){this.setupScrollListeners()},t.prototype.componentWillUnmount=function(){this.destroyScrollListeners(),this.throttle.cancelPending()},t.prototype.render=function(){var e=this.props.children,t=this.props,n=t.tagName,a=void 0===n?"div":n,i=(t.window,t.onScroll,r.__rest(t,["tagName","window","onScroll"]));return e?o.createElement(a,Object.assign({},i)):null},t.prototype.setupScrollListeners=function(){this.props.window.addEventListener("scroll",this.throttle.request,{passive:!0})},t.prototype.destroyScrollListeners=function(){this.props.window.removeEventListener("scroll",this.throttle.request)},t})((o=r.__importStar(o)).Component);t.WindowScrollMonitor=i,i.displayName="WindowScrollMonitor",i.defaultProps={tagName:"div",window:"undefined"!=typeof window?window:void 0}})),define("spectrum/table/index",["require","exports","tslib","spectrum/table/culled_table","spectrum/table/fixed_table_head","spectrum/table/table","spectrum/table/table_body","spectrum/table/table_row","spectrum/table/table_cell","spectrum/table/table_head","spectrum/table/table_head_cell"],(function(e,t,r,o,n,a,i,l,s,c,d){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.__exportStar(o,t),r.__exportStar(n,t),r.__exportStar(a,t),r.__exportStar(i,t),r.__exportStar(l,t),r.__exportStar(s,t),r.__exportStar(c,t),r.__exportStar(d,t)})),define("spectrum/table/culled_table",["require","exports","tslib","react","spectrum/culled_list/index","spectrum/table/table_row"],(function(e,t,r,o,n,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CulledTableRow=t.CulledTableBody=void 0,o=r.__importStar(o),t.CulledTableBody=function(e){return o.createElement(n.CulledList,Object.assign({tagName:"tbody",className:"mc-table-body mc-table-body-culled"},e))},t.CulledTableBody.displayName="CulledTableBody",t.CulledTableRow=function(e){var t=e.topOffset,n=e.ref,i=r.__rest(e,["topOffset","ref"]);return o.createElement(a.TableRow,Object.assign({className:"mc-table-row-culled",style:{top:t},ref:n},i))},t.CulledTableRow.displayName="CulledTableRow"})),define("spectrum/table/fixed_table_head",["require","exports","tslib","classnames","react","spectrum/dimensions/index","spectrum/vertically_fixed/index","spectrum/table/table_row"],(function(e,t,r,o,n,a,i,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FixedTableHead=void 0,o=r.__importDefault(o),n=r.__importStar(n),t.FixedTableHead=function(e){var t=e.children,s=e.className,c=e.ref,d=e.window,u=e.tableRowRole,m=e.tableRowTagName,p=e.tagName,f=void 0===p?"thead":p,_=r.__rest(e,["children","className","ref","window","tableRowRole","tableRowTagName","tagName"]),h=o.default("mc-table-head","mc-table-head-fixed",s);return n.createElement(a.Dimensions,Object.assign({tagName:f,className:h,ref:c},_),(function(e){var o=e.width,a=e.height;return n.createElement(i.VerticallyFixed,{window:d,tag:function(e){var i=e.style;return n.createElement(l.TableRow,{style:r.__assign({width:o,height:a},i),className:"mc-table-head-row mc-table-head-row-fixed",role:u,tagName:m},t)}})}))},t.FixedTableHead.displayName="FixedTableHead"})),define("spectrum/table/table",["require","exports","tslib","classnames","react","prop-types"],(function(e,t,r,o,n,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Table=void 0,o=r.__importDefault(o),n=r.__importStar(n),a=r.__importDefault(a);var i=(function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),t.prototype.getChildContext=function(){var e=this;return{getColumnFlex:function(){return e.props.columnFlex}}},t.prototype.render=function(){var e=this.props,t=e.className,a=(e.columnFlex,e.tagName),i=void 0===a?"table":a,l=r.__rest(e,["className","columnFlex","tagName"]),s=o.default("mc-table",t);return n.createElement(i,Object.assign({role:"table",className:s},l))},t})(n.PureComponent);t.Table=i,i.displayName="Table",i.childContextTypes={getColumnFlex:a.default.func}})),define("spectrum/table/table_body",["require","exports","tslib","classnames","react"],(function(e,t,r,o,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TableBody=void 0,o=r.__importDefault(o),n=r.__importStar(n),t.TableBody=function(e){var t=e.className,a=e.tagName,i=void 0===a?"tbody":a,l=r.__rest(e,["className","tagName"]),s=o.default("mc-table-body",t);return n.createElement(i,Object.assign({className:s},l))},t.TableBody.displayName="TableBody"})),define("spectrum/table/table_cell",["require","exports","tslib","react","prop-types"],(function(e,t,r,o,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TableCell=void 0,o=r.__importStar(o),n=r.__importDefault(n);var a=(function(e){function t(){var t=e.apply(this,arguments)||this;return t.flex=1,t}return r.__extends(t,e),t.prototype.UNSAFE_componentWillMount=function(){this.flex=this.context.getCellFlex()},t.prototype.UNSAFE_componentWillUpdate=function(){this.flex=this.context.getCellFlex()},t.prototype.render=function(){var e=this.props,t=e.align,n=void 0===t?"left":t,a=e.className,i=(e.ref,e.style),l=e.tagName,s=void 0===l?"td":l,c=e.useThTag,d=r.__rest(e,["align","className","ref","style","tagName","useThTag"]),u=this.flex,m="right"===n?"mc-table-cell mc-table-cell-align-right":"mc-table-cell",p=a?m+" "+a:m,f=r.__assign({flex:u},i);return c?o.createElement("th",Object.assign({className:p,style:f},d)):o.createElement(s,Object.assign({className:p,style:f},d))},t})(o.Component);t.TableCell=a,a.displayName="TableCell",a.contextTypes={getCellFlex:n.default.func}})),define("spectrum/table/table_head",["require","exports","tslib","classnames","react","spectrum/table/table_row"],(function(e,t,r,o,n,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TableHead=void 0,o=r.__importDefault(o),n=r.__importStar(n),t.TableHead=function(e){var t=e.children,i=e.className,l=e.tableRowRole,s=e.tableRowTagName,c=e.tagName,d=void 0===c?"thead":c,u=r.__rest(e,["children","className","tableRowRole","tableRowTagName","tagName"]),m=o.default("mc-table-head",i);return n.createElement(d,Object.assign({className:m},u),n.createElement(a.TableRow,{className:"mc-table-head-row",role:l,tagName:s},t))},t.TableHead.displayName="TableHead"})),define("spectrum/table/table_head_cell",["require","exports","tslib","classnames","react","spectrum/table/table_cell"],(function(e,t,r,o,n,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TableHeadCell=void 0,o=r.__importDefault(o),n=r.__importStar(n),t.TableHeadCell=function(e){var t=e.className,i=e.ref,l=e.tagName,s=void 0===l?"th":l,c=r.__rest(e,["className","ref","tagName"]),d=o.default("mc-table-head-cell",t);return n.createElement(a.TableCell,Object.assign({className:d,ref:i,tagName:s},c))},t.TableHeadCell.displayName="TableHeadCell"})),define("spectrum/table/table_row",["require","exports","tslib","react","prop-types"],(function(e,t,r,o,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TableRow=t.TableRowWithoutContext=void 0,o=r.__importStar(o),n=r.__importDefault(n);var a=(function(e){function t(){var t=e.apply(this,arguments)||this;return t.currentCellIndex=0,t}return r.__extends(t,e),t.prototype.getColumnFlex=function(){},t.prototype.getChildContext=function(){var e=this;return{getCellFlex:function(){var t=e.getColumnFlex(),r=t&&t[e.currentCellIndex]||1;return e.currentCellIndex++,r}}},t.prototype.UNSAFE_componentWillUpdate=function(){this.currentCellIndex=0},t})(o.Component);a.displayName="TableRow",a.contextTypes={getColumnFlex:n.default.func},a.childContextTypes={getCellFlex:n.default.func};var i=(function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),t.prototype.getColumnFlex=function(){return this.props.columnFlex},t.prototype.render=function(){var e=this.props,t=e.className,o=(e.columnFlex,e.tagName),n=void 0===o?"tr":o,a=r.__rest(e,["className","columnFlex","tagName"]);return s(t,n,a)},t})(a);t.TableRowWithoutContext=i;var l=(function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),t.prototype.getColumnFlex=function(){return this.context.getColumnFlex()},t.prototype.render=function(){var e=this.props,t=e.className,o=e.tagName,n=void 0===o?"tr":o,a=r.__rest(e,["className","tagName"]);return s(t,n,a)},t})(a);t.TableRow=l,l.contextTypes={getColumnFlex:n.default.func};var s=function(e,t,r){var n=e?"mc-table-row "+e:"mc-table-row";return o.createElement(t,Object.assign({className:n},r))}}));
//# sourceMappingURL=pkg-mcl-additional.min.js-vfl_0bpLP.map