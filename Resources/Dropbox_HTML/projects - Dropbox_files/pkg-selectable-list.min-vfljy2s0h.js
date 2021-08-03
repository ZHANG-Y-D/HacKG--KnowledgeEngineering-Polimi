define("modules/clean/react/path_filter_button",["require","exports","tslib","react","spectrum/dropdown_button/index","modules/clean/react/title_bubble","modules/clean/em_string","modules/clean/filepath/filepath","dig-components/tooltips","modules/clean/react/sticky_position","dig-components/chips"],(function(e,t,n,i,o,r,l,a,s,c,d){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PathFilterButton=void 0,i=n.__importDefault(i),a=n.__importStar(a),t.PathFilterButton=function(e){var t=e.path,n=e.defaultText,u=e.dropdownClasses,f=e.disabled,p=e.onClick,h=e.useDigComponents,m=t&&!a.paths_are_equal(t,"/")?l.Emstring.em_snippet(a.filename(t),10,.6):null;if(h){var v=i.default.createElement(d.FilterChip,{className:u,disabled:f,onClick:p,withDropdownIcon:!0},m||n);return t&&m?i.default.createElement(s.Tooltip,{title:t,placement:"bottom"},v):v}var g=i.default.createElement(o.DropdownButton,{className:u,disabled:f,onClick:p},m||n);return m?i.default.createElement(r.TitleBubble,{content:t,position:c.StickyPosition.BOTTOM},g):g}})),define("modules/clean/react/selectable_list",["require","exports","tslib","immutable","keymaster","react","lodash","react-dom","modules/core/browser_detection"],(function(e,t,n,i,o,r,l,a,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SelectableList=t.findSelectionRange=t.findNeighboringItem=t.SelectOptions=t.SelectDirection=t.SelectableListActionSource=t.SELECTABLE_TILE_GRID_KEY_SCOPE=t.SELECTABLE_LIST_KEY_SCOPE=void 0,i=n.__importStar(i),o=n.__importDefault(o),r=n.__importDefault(r),l=n.__importStar(l),a=n.__importStar(a),s=n.__importStar(s),t.SELECTABLE_LIST_KEY_SCOPE="SelectableList",t.SELECTABLE_TILE_GRID_KEY_SCOPE="SelectableTileGrid";var c,d,u,f="";function p(e,t,n,i,o,r){switch(e){case d.PREV:return Math.max(0,t-1);case d.NEXT:return Math.min(n-1,t+1);case d.PREV_ROW:case d.NEXT_ROW:return(function(e,t,n,i,o,r){if(void 0===r&&(r=!1),t<0||t>=n)return 0;o&&0!==o.length||(o=[0]);var a=l.sortedIndex(o,t),s=o[a]===t?a:a-1,c=o[s],u=(t-c)%i;switch(e){case d.NEXT_ROW:var f=o.length;if(s===f-1&&t+i>=n){var p=(n-c)%i;if((t-c)%i<p||0===p)return r?n-1:t}var h=s+1,m=h<o.length?o[h]:n;if(t+i-(i-((m-c)%i||i))<m){var v=m-1;return Math.min(t+i,v)}var g=h+1<f?o[h+1]-1:n-1;return Math.min(m+u,g);case d.PREV_ROW:if(0===s&&t-i<0)return r?0:t;if(t-i>=c)return t-i;var y=o[s-1],E=c-1,S=c-y,b=y+S-(S%i||i);return Math.min(b+u,E)}})(e,t,n,i,o,r)}}function h(e,t,n,i,o,r,l,a,s){switch(e){case d.PREV:case d.PREV_ROW:if(0===t)return l;for(var c=p(e,t,a.length,n,s,!0),u=Math.min(t,i)-c,f=t-Math.max(c,i),h=r;h>r-f;h--){var m=l.indexOf(a[h]);l.splice(m,1)}for(h=o-1;h>=o-u;h--)l.push(a[h]);break;case d.NEXT:case d.NEXT_ROW:if(t===a.length)return l;var v=p(e,t,a.length,n,s,!0);for(f=Math.min(v,i)-o,u=v-Math.max(t,i),h=o;h<o+f;h++){m=l.indexOf(a[h]);l.splice(m,1)}for(h=r+1;h<=r+u;h++)l.push(a[h])}return l}(function(e){e.KEYBOARD="keyboard",e.DRAG_TO_SELECT="drag_to_select"})(c=t.SelectableListActionSource||(t.SelectableListActionSource={})),(function(e){e[e.PREV=0]="PREV",e[e.NEXT=1]="NEXT",e[e.PREV_ROW=2]="PREV_ROW",e[e.NEXT_ROW=3]="NEXT_ROW"})(d=t.SelectDirection||(t.SelectDirection={})),(function(e){e.DEFAULT="DEFAULT",e.EXTEND="EXTEND",e.ONLY="ONLY"})(u=t.SelectOptions||(t.SelectOptions={})),t.findNeighboringItem=p,t.findSelectionRange=h;var m=(function(e){function l(t){var n=e.call(this,t)||this;return n.isFocused=!1,n.updateSelection=function(e,t,o){void 0===o&&(o=!1);var r=n.props.selection,l=o?e.length?e[0]:n.props.itemIds[0]:r.anchor,a=r.merge({selected:i.OrderedSet(e),anchor:l});n.props.onSelectionChange(a,t)},n.handleSelectPrevious=function(e){n.isGlobalEvent(e)&&(e.preventDefault(),n.selectNeighboringItem(d.PREV,c.KEYBOARD))},n.handleSelectPreviousRow=function(e){n.isGlobalEvent(e)&&(e.preventDefault(),n.selectNeighboringItem(d.PREV_ROW,c.KEYBOARD))},n.handleExtendSelectionToPrevious=function(e){n.isGlobalEvent(e)&&(e.preventDefault(),n.extendSelectionRange(d.PREV,c.KEYBOARD))},n.handleExtendSelectionToPreviousRow=function(e){n.isGlobalEvent(e)&&(e.preventDefault(),n.extendSelectionRange(d.PREV_ROW,c.KEYBOARD))},n.handleSelectNext=function(e){n.isGlobalEvent(e)&&(e.preventDefault(),n.selectNeighboringItem(d.NEXT,c.KEYBOARD))},n.handleSelectNextRow=function(e){n.isGlobalEvent(e)&&(e.preventDefault(),n.selectNeighboringItem(d.NEXT_ROW,c.KEYBOARD))},n.handleExtendSelectionToNext=function(e){n.isGlobalEvent(e)&&(e.preventDefault(),n.extendSelectionRange(d.NEXT,c.KEYBOARD))},n.handleExtendSelectionToNextRow=function(e){n.isGlobalEvent(e)&&(e.preventDefault(),n.extendSelectionRange(d.NEXT_ROW,c.KEYBOARD))},n.handleKeyboardDeselectAll=function(e){var t=n.props.selection;e&&!n.isGlobalEvent(e)||!t.selected.size||n.handleDeselectAll(c.KEYBOARD)},n.handleDeselectAll=function(e){if(n.updateSelection([],e,!0),a.findDOMNode(n).contains(document.activeElement)){var t=document.activeElement;t.blur&&t.blur()}n.props.onDeselectAll&&n.props.onDeselectAll()},n.handleKeyboardSelectAll=function(e){var t=n.props,i=t.itemIds,o=t.selection;e&&!n.isGlobalEvent(e)||o.selected.size===i.length||n.handleSelectAll(c.KEYBOARD)},n.handleSelectAll=function(e){n.updateSelection(n.props.itemIds,e,!0)},n.handleDeselect=function(e,t,i){if(t)return n.extendOrShrinkSelectionByFile(e,i);n.updateSelectionById(e,"delete",i)},n.handleSelect=function(e,t,i){if(void 0===t&&(t=u.DEFAULT),t===u.EXTEND)return n.extendOrShrinkSelectionByFile(e);t===u.ONLY?n.updateSelection([e],i,!0):n.updateSelectionById(e,"add",i)},n.handleFocusFile=function(e){n.setState({focusedFileId:e})},n.isSelectableListEvent=function(){return n.isFocused},n.handleFocus=function(){n.isFocused=!0},n.handleBlur=function(){n.isFocused=!1},n.state={selection:t.selection,keyScope:t.keyScope},n}return n.__extends(l,e),l.prototype.UNSAFE_componentWillReceiveProps=function(e){this.props.keyScope!==e.keyScope&&(this.setState({keyScope:e.keyScope}),this.isFocused=!1)},l.prototype.componentDidMount=function(){this.setupKeyboardShortcuts(),this.setFocusedIdFromSelection(this.props.selection)},l.prototype.componentDidUpdate=function(e,t){e.selection&&this.props.selection&&e.selection.anchor!==this.props.selection.anchor&&this.setFocusedIdFromSelection(this.props.selection),this.state.keyScope!==t.keyScope&&this.setupKeyboardShortcuts(),e.isActive!==this.props.isActive&&(this.props.isActive?this.setupKeyboardShortcuts():this.cleanupKeyboardShortcuts())},l.prototype.componentWillUnmount=function(){this.cleanupKeyboardShortcuts()},l.prototype.setupKeyboardShortcuts=function(){var e=this,n=this.state.keyScope;(f=o.default.getScope())!==n&&o.default.setScope(n);var i=o.default.filter||function(e){var t=e.target||e.srcElement;if(!(t instanceof Element))return!0;var n=t.tagName;return!("INPUT"===n||"SELECT"===n||"TEXTAREA"===n)};o.default.filter=function(t){var n=t.target||t.srcElement,o=n.tagName;return(!e.isSelectableListEvent()||"BUTTON"!==o)&&(n instanceof HTMLInputElement&&"checkbox"===n.type||i.call(e,t))},n===t.SELECTABLE_LIST_KEY_SCOPE?(o.default("up",n,this.handleSelectPrevious),o.default("shift+up",n,this.handleExtendSelectionToPrevious),o.default("down",n,this.handleSelectNext),o.default("shift+down",n,this.handleExtendSelectionToNext)):n===t.SELECTABLE_TILE_GRID_KEY_SCOPE&&(o.default("left",n,this.handleSelectPrevious),o.default("shift+left",n,this.handleExtendSelectionToPrevious),o.default("right",n,this.handleSelectNext),o.default("shift+right",n,this.handleExtendSelectionToNext),o.default("up",n,this.handleSelectPreviousRow),o.default("shift+up",n,this.handleExtendSelectionToPreviousRow),o.default("down",n,this.handleSelectNextRow),o.default("shift+down",n,this.handleExtendSelectionToNextRow)),o.default("escape",n,this.handleKeyboardDeselectAll),s.mac?o.default("command+a",n,this.handleKeyboardSelectAll):o.default("ctrl+a",n,this.handleKeyboardSelectAll)},l.prototype.cleanupKeyboardShortcuts=function(){o.default.clearScope(this.state.keyScope),f&&o.default.setScope(f),o.default.resetFilter()},l.prototype.setFocusedIdFromSelection=function(e){e.anchor&&0!==e.selected.size&&this.setState({focusedFileId:e.anchor})},l.prototype.selectNeighboringItem=function(e,t){var n=this.props,i=n.itemIds,o=n.selection,r=n.tilesPerRow,l=n.sectionStartIndices,a=i.indexOf(o.selected.last()),s=i[p(e,a,i.length,r,l)];this.setState({focusedFileId:s}),this.updateSelection([s],t,!0)},l.prototype.extendSelectionRange=function(e,t){var n=this.props,i=n.itemIds,o=n.selection,r=n.tilesPerRow,l=n.sectionStartIndices,a=o.anchor||i[0];if(a){var s=i.indexOf(o.selected.last()),c=o.selected.toArray(),d=i.indexOf(a),u=this.getRangeOfSelectedBlock(a);c=h(e,s,r,d,u.startIndex,u.endIndex,c,i,l),this.setState({focusedFileId:c[c.length-1]}),this.updateSelection(c,t)}},l.prototype.getRangeOfSelectedBlock=function(e){for(var t=this.props,n=t.itemIds,i=t.selection,o=n.indexOf(e),r=0,l=0;r=o,!(--o<0)&&i.selected.has(n[o]););for(o=r;;){var a=n[o];if(!a||!i.selected.has(a))break;l=o,o++}return{startIndex:r,endIndex:l}},l.prototype.extendOrShrinkSelectionByFile=function(e,t){var n=this.props,i=n.itemIds,o=n.selection,r=o.anchor||i[0];if(r){var l=i.indexOf(r),a=i.indexOf(e),s=this.getRangeOfSelectedBlock(r),c=s.startIndex,d=s.endIndex,u=[],f=[];i.forEach((function(e,t){c<=t&&t<=d&&u.push(e),(a<=t&&t<=l||l<=t&&t<=a)&&f.push(e)})),a<l&&f.reverse();var p=o.update("selected",(function(e){return e.subtract(u).union(f)}));this.setState({focusedFileId:e}),this.props.onSelectionChange(p,t)}},l.prototype.updateSelectionById=function(e,t,n){var i=this.props.selection,o="add"===t?e:i.anchor,r=i.selected[t](e),l=i.merge({selected:r,anchor:o||null});this.props.onSelectionChange(l,n)},l.prototype.isGlobalEvent=function(e){var t=e.target instanceof HTMLInputElement,n=e.target instanceof HTMLElement,i=t&&"checkbox"===e.target.type,o=n&&(e.target.classList.contains("mc-popover-selectable-item")||e.target.classList.contains("mc-popover-content-item")||e.target.classList.contains("mc-popover-trigger"));return!document.activeElement||document.activeElement===document.body||e.target instanceof Element&&(a.findDOMNode(this).contains(e.target)&&(!t||i)&&!o)},l.prototype.render=function(){var e=this.props.children,t=this.state.focusedFileId;if(!e)return null;var n=e;return"function"==typeof e&&(n=e({focusedFileId:t,updateSelection:this.updateSelection,handleDeselect:this.handleDeselect,handleDeselectAll:this.handleDeselectAll,handleFocusFile:this.handleFocusFile,handleSelect:this.handleSelect,handleSelectAll:this.handleSelectAll,isSelectableListEvent:this.isSelectableListEvent})),r.default.createElement("div",{className:"selectable-list",onBlur:this.handleBlur,onFocus:this.handleFocus},n)},l.defaultProps={isActive:!0},l})(r.default.PureComponent);t.SelectableList=m})),define("modules/clean/react/tree",["require","exports","tslib","immutable"],(function(e,t,n,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Tree=void 0,i=n.__importStar(i);var o=(function(){function e(e){var t=i.Map();this.rootItem=e.rootItem,this.items=e.items,this.childItemsByParentKey=e.childItemsByParentKey||t,this.parentItemByChildKey=e.parentItemByChildKey||i.Map()}return e.createWithRootItem=function(t){return new e({rootItem:t,items:i.Map([[t.key,t]])})},e.prototype.getParentItem=function(e){if(e){var t=this.parentItemByChildKey.get(e.key);return t?this.items.get(t):null}},e.prototype.getChildItems=function(e){return this.childItemsByParentKey.get(e.key)||null},e.prototype.isParent=function(e){return this.childItemsByParentKey.has(e.key)},e.prototype.getClosestExistingChildFromKey=function(e){for(var t,n=e.split("/"),i=this.rootItem,o=function(e){var o=n.slice(0,e).join("/"),l=null===(t=r.getChildItems(i))||void 0===t?void 0:t.find((function(e){return e.key===o}));if(void 0===l)return{value:i};i=l},r=this,l=2;l<n.length+1;l++){var a=o(l);if("object"==typeof a)return a.value}return i},e.prototype.setChildItems=function(t,n){n=i.List(n);var o=i.Map(n.map((function(e){return[e.key,e]}))),r=i.Map(this.items).merge(o),l=i.Map(this.childItemsByParentKey).set(t.key,n),a=i.Map(this.parentItemByChildKey);return n.forEach((function(e){return a=a.set(e.key,t.key)})),new e({rootItem:this.rootItem,items:r,childItemsByParentKey:l,parentItemByChildKey:a})},e})();t.Tree=o})),define("modules/clean/react/tree_item",["require","exports","tslib"],(function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FolderTreeItem=t.TreeItem=t.RootStyle=void 0,(function(e){e[e.None=0]="None",e[e.TreeItem=1]="TreeItem",e[e.HeaderItem=2]="HeaderItem",e[e.StaticHeader=3]="StaticHeader"})(t.RootStyle||(t.RootStyle={}));var i=function(e){this.key=e.key,this.label=e.label?e.label:"",this.icon=e.icon?e.icon:"",this.disabled=!!e.disabled,this.canExpand=!!e.canExpand,this.forceExpanded=!!e.forceExpanded,this.readOnly=!!e.readOnly};t.TreeItem=i;var o=(function(e){function t(t,n){var i=e.call(this,t)||this;return i.folderNsId=n,i}return n.__extends(t,e),t})(i);t.FolderTreeItem=o})),define("modules/clean/react/files_view/overflow_menu_item_section",["require","exports","tslib","react","spectrum/popover/index"],(function(e,t,n,i,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OverflowMenuItemSection=void 0,i=n.__importDefault(i),t.OverflowMenuItemSection=function(e){var t=e.actionSection,r=e.showSeparators,l=void 0===r||r,a=e.renderItem;return 0===t.length?null:i.default.createElement(i.default.Fragment,null,t.map((function(e){return e.map((function(e,t){return i.default.createElement(i.default.Fragment,{key:t+"-"+e.label},a(e))}))})).reduce((function(e,t,r){return n.__spreadArrays(e,l?[i.default.createElement(o.PopoverItemGroupSeparator,{key:r})]:[],t)})))}})),define("modules/clean/react/files_view/util",["require","exports","tslib","retrieval-components/view-mode-toggle/index","modules/clean/filepath/filepath","modules/clean/pnm/utils","modules/clean/react/browse/models","modules/clean/react/files_view/view_type"],(function(e,t,n,i,o,r,l,a){"use strict";function s(e){return e.altKey||e.ctrlKey||e.metaKey||e.shiftKey}Object.defineProperty(t,"__esModule",{value:!0}),t.isMobileMode=t.ScopedEventHandlers=t.isCutToClipboard=t.viewModeFromViewType=t.viewTypeFromViewMode=t.shouldClickDeselect=t.createFakeWindow=t.getFilename=t.isFileModel=t.isFswm=t.isFile=t.hasModifierKey=t.shouldHandleClick=void 0,o=n.__importStar(o),t.shouldHandleClick=function(e){return 0===e.button&&!s(e)},t.hasModifierKey=s,t.isFile=function(e){return e instanceof l.File},t.isFswm=function(e){return e instanceof l.FileSharedWithMe},t.isFileModel=function(e){return"fq_path"in e},t.getFilename=function(e){return t.isFileModel(e)||t.isFile(e)?r.hasValidLinkNode(e.per_node_metadata)||r.shouldHideExtension(e.per_node_metadata)?o.filename_without_extension(o.filename(e.fq_path)):o.filename(e.fq_path):e.filename},t.createFakeWindow=function(e){var t=new Proxy(window.document,{get:function(t,n){switch(n){case"body":case"documentElement":case"scrollingElement":return e}return t[n]}});return new Proxy(window,{get:function(n,i){switch(i){case"document":return t;case"innerHeight":return e.clientHeight;case"pageYOffset":return e.scrollTop;case"addEventListener":case"removeEventListener":case"scrollTo":var o=e[i];return o?o.bind(e):function(){}}var r=n[i];return"function"==typeof r?r.bind(n):r}})},t.shouldClickDeselect=function(e,t){if(e.defaultPrevented)return!1;for(var n=e.target;n instanceof Node&&n!==e.currentTarget;){if(0===n.tabIndex&&!t||n instanceof HTMLAnchorElement||n instanceof HTMLButtonElement||n instanceof HTMLInputElement||n instanceof HTMLLabelElement||"button"===n.getAttribute("role")||n.classList.contains("mc-popover"))return!1;n=n.parentElement}return!0},t.viewTypeFromViewMode=function(e){switch(e){case i.ViewMode.GRID:return a.ViewType.Grid;case i.ViewMode.TILE:return a.ViewType.LargeGrid;case i.ViewMode.CONDENSED_LIST:return a.ViewType.CondensedList;case i.ViewMode.LIST:return a.ViewType.List}},t.viewModeFromViewType=function(e){switch(e){case a.ViewType.Grid:return i.ViewMode.GRID;case a.ViewType.LargeGrid:return i.ViewMode.TILE;case a.ViewType.SmallGrid:return i.ViewMode.GRID;case a.ViewType.List:return i.ViewMode.LIST;case a.ViewType.CondensedList:return i.ViewMode.CONDENSED_LIST}},t.isCutToClipboard=function(e,t){if(!(e instanceof l.File))return!1;var n=t.get(e.fq_path);return Boolean(n&&n.file_id===e.file_id)};var c=(function(){function e(e){this.handlers={},this.element=e}return e.prototype.add=function(e,t,n){this.handlers[e]=this.handlers[e]||{},this.handlers[e][t]=n,this.element.addEventListener(t,n)},e.prototype.remove=function(e,t,n){this.handlers[e]&&this.handlers[e][t]&&(this.element.removeEventListener(t,n||this.handlers[e][t]),this.handlers[e][t]===n&&delete this.handlers[e][t])},e.prototype.removeAll=function(e){if(this.handlers[e])for(var t in this.handlers[e])this.handlers[e].hasOwnProperty(t)&&(this.element.removeEventListener(t,this.handlers[e][t]),delete this.handlers[e][t])},e})();t.ScopedEventHandlers=c,t.isMobileMode=function(e){return!e.isMatchedLarge&&!e.isMatchedMedium}}));var __createBinding=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&__createBinding(t,e,n);return __setModuleDefault(t,e),t};define("modules/clean/react/file_viewer/async_controller",["require","exports"],(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.asyncOpenPreview=t.showElementsBehindFileViewer=t.hideElementsBehindFileViewer=void 0;var n=[".maestro-chrome","#maestro-nav","#page-footer","#page-content","#page-header","#page-sidebar","#flash-upload-container","#maestro-header","#maestro-header-portal","#maestro-prompt",".snackbar-container","#onboarding-sidebar-pagelet",".maestro-portal"].join();t.hideElementsBehindFileViewer=function(){Array.from(document.querySelectorAll(n)).forEach((function(e){e.style.display&&e.setAttribute("data-preview-old-display",e.style.display),e.style.display="none"}))},t.showElementsBehindFileViewer=function(){Array.from(document.querySelectorAll(n)).forEach((function(e){e.style.display=e.hasAttribute("data-preview-old-display")?e.getAttribute("data-preview-old-display"):""}))},t.asyncOpenPreview=function(t){var n=t.containerId,i=t.files,o=t.fileViewAction,r=t.fileViewOrigin,l=t.fileViewTarget,a=t.indexOfPreviewFile,s=t.onFileViewerDidMount,c=t.onFileViewerUnmount,d=(t.shouldFocusComment,t.shouldPresentInZoom),u=void 0!==d&&d,f=t.updateBrowserLocation,p=void 0===f||f,h=t.user,m=t.expGrowthActSmbWorkflowsBaton,v=t.hidePageChrome,g=void 0!==v&&v,y=t.headerHeight,E=void 0===y?"0":y,S=t.forceDisplayToolbar,b=void 0!==S&&S,_=t.doNotUpdateDocumentTitle,w=void 0!==_&&_,T=t.onFullscreenChange,I=void 0===T?function(){}:T,M=t.onFlipNext,O=void 0===M?function(){}:M,L=t.onFlipPrevious,x=void 0===L?function(){}:L,P=t.onPreviewSessionInitialized,D=void 0===P?function(){}:P;return new Promise((function(t,n){e(["modules/clean/react/file_viewer/controller"],t,n)})).then(__importStar).then((function(e){return e.open(i,a,h,n,{fileViewTarget:l,fileViewOrigin:r,fileViewAction:o,disableRouting:!p,onComponentDidMount:s,onComponentWillUnmount:c,shouldPresentInZoom:u,expGrowthActSmbWorkflowsBaton:m,hidePageChrome:g,headerHeight:E,forceDisplayToolbar:b,doNotUpdateDocumentTitle:w,onFullscreenChange:I,onFlipNext:O,onFlipPrevious:x,onPreviewSessionInitialized:D}),e}))}})),define("modules/clean/undo",["require","exports","tslib","dompurify","react","modules/constants/undo_strings","modules/core/notify"],(function(e,t,n,i,o,r,l){"use strict";var a,s;function c(){s&&(s(a),s=void 0,a=null)}Object.defineProperty(t,"__esModule",{value:!0}),t.notifyWithUndo=t.setHandleUndo=t.performUndo=void 0,i=n.__importStar(i),o=n.__importStar(o),t.performUndo=c,t.setHandleUndo=function(e,t){s=e,a=t||null},t.notifyWithUndo=function(e,t,n,i,u){if(void 0===u&&(u=r.UNDO),t&&Object.keys(t).length){a=t,s=n,i=null==i?30:i;var f=function(e){e.preventDefault(),c(),l.Notify.clear()};l.Notify.customSuccess(o.createElement(d,{message:e,undoButtonText:u,onUndo:f}),e,i)}else l.Notify.success(e)};var d=function(e){return"string"==typeof e.message?o.createElement("span",{"aria-live":"polite"},e.message," ",o.createElement("button",{className:"button-as-link",onClick:e.onUndo},e.undoButtonText)):o.createElement(o.Fragment,null,o.createElement("span",{"aria-live":"polite",dangerouslySetInnerHTML:{__html:i.sanitize(e.message.toHTML())}})," ",o.createElement("button",{className:"button-as-link",onClick:e.onUndo},e.undoButtonText))}})),define("retrieval-components/view-mode-toggle/index",["require","exports","tslib","retrieval-components/view-mode-toggle/view_mode_toggle"],(function(e,t,n,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.__exportStar(i,t)})),define("retrieval-components/view-mode-toggle/view_mode_toggle",["require","exports","tslib","react","react-intl","dig-components/icons/src","dig-components/menu","dig-components/buttons","dig-components/icons"],(function(e,t,n,i,o,r,l,a,s){"use strict";var c;function d(e,n,i){var l=o.defineMessage({id:"izeluw",defaultMessage:"Grid"}),a=o.defineMessage({id:"BOj5uG",defaultMessage:"Large grid"}),s=o.defineMessage({id:"kn0aTF",defaultMessage:"List"}),c=o.defineMessage({id:"+ElFUY",defaultMessage:"Large list"}),d=!n&&!i,u=[{mode:t.ViewMode.GRID,icon:r.GridViewDenseLine,label:e.formatMessage(l)},{mode:t.ViewMode.TILE,icon:r.GridViewLine,label:e.formatMessage(a)}];return d&&u.push({mode:t.ViewMode.CONDENSED_LIST,icon:r.ListViewDenseLine,label:e.formatMessage(s)}),u.push({mode:t.ViewMode.LIST,icon:r.ListViewLine,label:n?e.formatMessage(s):e.formatMessage(c)}),u}Object.defineProperty(t,"__esModule",{value:!0}),t.ViewModeMenu=t.ViewModeToggle=t.ViewMode=void 0,i=n.__importStar(i),(c=t.ViewMode||(t.ViewMode={})).GRID="grid",c.TILE="tile",c.CONDENSED_LIST="condensed_list",c.LIST="list",t.ViewModeToggle=function(e){var n=e.className,r=e.currentMode,c=e.disabled,u=e.onSelection,f=e.treatLargeListAsList,p=e.withoutCondensedListMode,h=o.defineMessage({id:"slo33I",defaultMessage:"Select view type"}),m=o.useIntl(),v=m.formatMessage(h),g=d(m,f,p),y=g.find((function(e){return e.mode===r}))||g.find((function(e){return e.mode===t.ViewMode.LIST}));return i.createElement(l.Menu.Wrapper,{onSelection:u},(function(e){var o=e.getTriggerProps,d=e.getContentProps;return i.createElement(i.Fragment,null,i.createElement(a.IconButton,Object.assign({className:n,variant:"transparent","aria-label":v,disabled:c,withDropdownIcon:!0},o()),i.createElement(s.UIIcon,{src:y.icon})),i.createElement(l.Menu.Content,Object.assign({},d(),{placement:"bottom-end"}),i.createElement(t.ViewModeMenu,{currentMode:r,treatLargeListAsList:f,withoutCondensedListMode:p})))}))},t.ViewModeMenu=function(e){var t=e.currentMode,n=e.treatLargeListAsList,r=e.withoutCondensedListMode,a=d(o.useIntl(),n,r);return i.createElement(l.Menu.Segment,null,a.map((function(e){return i.createElement(l.Menu.SelectItem,{key:e.mode,value:e.mode,selected:e.mode===t,"aria-checked":e.mode===t,withRightAccessory:i.createElement(s.UIIcon,{src:e.icon})},e.label)})))}})),(function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define("prod_assets_web_modules/keymaster",[],t);else{var n=t();for(var i in n)("object"==typeof exports?exports:e)[i]=n[i]}})(window,(function(){return(function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)})({"./keymaster.js":function(e,t){var n,i={},o={16:!1,18:!1,17:!1,91:!1},r="all",l={"⇧":16,shift:16,"⌥":18,alt:18,option:18,"⌃":17,ctrl:17,control:17,"⌘":91,command:91},a={backspace:8,tab:9,clear:12,enter:13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,home:36,end:35,pageup:33,pagedown:34,",":188,".":190,"/":191,"`":192,"-":189,"=":187,";":186,"'":222,"[":219,"]":221,"\\":220};for(n=1;n<20;n++)a["f"+n]=111+n;function s(e,t){for(var n=e.length;n--;)if(e[n]===t)return n;return-1}function c(){for(n in o)o.hasOwnProperty(n)&&(o[n]=!1)}function d(e,t,n){var o,r,s,c;for(void 0===n&&(n=t,t="all"),""==(o=(e=e.replace(/\s/g,"")).split(","))[o.length-1]&&(o[o.length-2]+=","),s=0;s<o.length;s++){if(r=[],(e=o[s].split("+")).length>1){for(r=e.slice(0,e.length-1),c=0;c<r.length;c++)r[c]=l[r[c]];e=[e[e.length-1]]}e=e[0],(e=a[e]||e.toUpperCase().charCodeAt(0))in i||(i[e]=[]),i[e].push({shortcut:o[s],scope:t,method:n,key:o[s],mods:r})}}for(n in l)d[n]=!1;function u(e){r=e||"all"}function f(){return r}function p(e){for(var t=e.slice(0,e.length-1),n=0;n<t.length;n++)t[n]=l[t[n]];return t}function h(e,t){if(e.length!=t.length)return!1;for(var n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function m(e){var t=e.target||e.srcElement,n=t.tagName,i=e.keyCode,o=t.hasAttribute&&t.hasAttribute("contenteditable")&&"false"!=t.getAttribute("contenteditable").toLowerCase()||"undefined"!=typeof jest&&"true"==t.contentEditable;return!(("INPUT"==n||"SELECT"==n||"TEXTAREA"==n||o)&&-1==["submit","button"].indexOf(t.type)&&i!=a.escape&&i!=a.tab)}function v(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent&&e.attachEvent("on"+t,(function(){n(window.event)}))}const g=d;g.setScope=u,g.getScope=f,g.clear=function(){i={},u(),c()},g.clearScope=function(e){for(var t in i)if(i.hasOwnProperty(t))for(var n=0;n<i[t].length;n++)i[t][n].scope===e&&(i[t].splice(n,1),n-=1)},g.filter=m,g.resetFilter=function(){d.filter=m},g.unbind=function(e,t,n){var o,r,l,s,c,d,u,m=[];for(r=(function(e){var t=e.replace(/\s/g,"").split(",");return""==t[t.length-1]&&(t[t.length-2]+=","),t})(e),c=0;c<r.length;c++){if((l=r[c].split("+")).length>1&&(m=p(l)),o=l[l.length-1],o=a[u=o]||u.toUpperCase().charCodeAt(0),void 0===t&&(t=f()),!i[o])return;for(s=0;s<i[o].length;s++)(d=i[o][s]).scope===t&&h(d.mods,m)&&(n&&d.method!==n||(i[o][s]={}))}},window.key||(v(document,"keydown",(function(e){var t,n,a,c,u;if((e.target||e.srcElement).tagName,93!=(t=e.keyCode)&&224!=t||(t=91),t in o)for(a in o[t]=!0,l)l[a]==t&&(d[a]=!0);else if(d.filter.call(this,e)&&t in i)for(originalScope=r,c=0;c<i[t].length;c++)if((n=i[t][c]).scope==originalScope||"all"==n.scope){for(a in u=n.mods.length>0,o)(!o[a]&&s(n.mods,+a)>-1||o[a]&&-1==s(n.mods,+a))&&(u=!1);(0!=n.mods.length||o[16]||o[18]||o[17]||o[91])&&!u||!1===n.method(e,n)&&(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation&&e.stopPropagation(),e.cancelBubble&&(e.cancelBubble=!0))}})),v(document,"keyup",(function(e){var t,n=e.keyCode;if(93!=n&&224!=n||(n=91),n in o)for(t in o[n]=!1,l)l[t]==n&&(d[t]=!1)})),v(window,"focus",c),v(document,"contextmenu",c),window.key=g),e.exports=window.key},0:function(e,t,n){e.exports=n("./keymaster.js")}})}));
//# sourceMappingURL=pkg-selectable-list.min.js-vflQRhBwu.map