"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9514,4608],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=s(n),p=r,f=m["".concat(c,".").concat(p)]||m[p]||u[p]||o;return n?a.createElement(f,l(l({ref:t},d),{},{components:n})):a.createElement(f,l({ref:t},d))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5247:function(e,t,n){n.r(t),n.d(t,{default:function(){return oe}});var a=n(7294),r=n(3905),o=n(6291),l=n(3516),i=n(6010),c=n(941),s=n(3783),d=n(7898),u=n(5537),m=n(7462),p=function(e){return a.createElement("svg",(0,m.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},f=n(4973),h=n(3366),b=n(6742),v=n(3919),E=n(8617),g="menuLinkText_1J2g",y=["items"],Z=["item"],k=["item","onItemClick","activePath"],C=["item","onItemClick","activePath"],_=function e(t,n){return"link"===t.type?(0,c.Mg)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))},N=(0,a.memo)((function(e){var t=e.items,n=(0,h.Z)(e,y);return a.createElement(a.Fragment,null,t.map((function(e,t){return a.createElement(T,(0,m.Z)({key:t,item:e},n))})))}));function T(e){var t=e.item,n=(0,h.Z)(e,Z);return"category"===t.type?0===t.items.length?null:a.createElement(S,(0,m.Z)({item:t},n)):a.createElement(O,(0,m.Z)({item:t},n))}function S(e){var t,n=e.item,r=e.onItemClick,o=e.activePath,l=(0,h.Z)(e,k),s=n.items,d=n.label,u=n.collapsible,p=_(n,o),f=(0,c.uR)({initialState:function(){return!!u&&(!p&&n.collapsed)}}),b=f.collapsed,v=f.setCollapsed,E=f.toggleCollapsed;return function(e){var t=e.isActive,n=e.collapsed,r=e.setCollapsed,o=(0,c.D9)(t);(0,a.useEffect)((function(){t&&!o&&n&&r(!1)}),[t,o,n])}({isActive:p,collapsed:b,setCollapsed:v}),a.createElement("li",{className:(0,i.Z)(c.kM.docs.docSidebarItemCategory,"menu__list-item",{"menu__list-item--collapsed":b})},a.createElement("a",(0,m.Z)({className:(0,i.Z)("menu__link",(t={"menu__link--sublist":u,"menu__link--active":u&&p},t[g]=!u,t)),onClick:u?function(e){e.preventDefault(),E()}:void 0,href:u?"#":void 0},l),d),a.createElement(c.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:b},a.createElement(N,{items:s,tabIndex:b?-1:0,onItemClick:r,activePath:o})))}function O(e){var t=e.item,n=e.onItemClick,r=e.activePath,o=(0,h.Z)(e,C),l=t.href,s=t.label,d=_(t,r);return a.createElement("li",{className:(0,i.Z)(c.kM.docs.docSidebarItemLink,"menu__list-item"),key:s},a.createElement(b.Z,(0,m.Z)({className:(0,i.Z)("menu__link",{"menu__link--active":d}),"aria-current":d?"page":void 0,to:l},(0,v.Z)(l)&&{onClick:n},o),(0,v.Z)(l)?s:a.createElement("span",null,s,a.createElement(E.Z,null))))}var w="sidebar_15mo",I="sidebarWithHideableNavbar_267A",P="sidebarHidden_2kNb",x="sidebarLogo_3h0W",M="menu_Bmed",j="menuWithAnnouncementBar_2WvA",A="collapseSidebarButton_1CGd",D="collapseSidebarButtonIcon_3E-R";function F(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,f.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,f.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,i.Z)("button button--secondary button--outline",A),onClick:t},a.createElement(p,{className:D}))}function L(e){var t,n,r=e.path,o=e.sidebar,l=e.onCollapse,s=e.isHidden,m=function(){var e=(0,c.nT)().isClosed,t=(0,a.useState)(!e),n=t[0],r=t[1];return(0,d.Z)((function(t){var n=t.scrollY;e||r(0===n)})),n}(),p=(0,c.LU)(),f=p.navbar.hideOnScroll,h=p.hideableSidebar,b=(0,c.nT)().isClosed;return a.createElement("div",{className:(0,i.Z)(w,(t={},t[I]=f,t[P]=s,t))},f&&a.createElement(u.Z,{tabIndex:-1,className:x}),a.createElement("nav",{className:(0,i.Z)("menu thin-scrollbar",M,(n={},n[j]=!b&&m,n))},a.createElement("ul",{className:(0,i.Z)(c.kM.docs.docSidebarMenu,"menu__list")},a.createElement(N,{items:o,activePath:r}))),h&&a.createElement(F,{onClick:l}))}var B=function(e){var t=e.toggleSidebar,n=e.sidebar,r=e.path;return a.createElement("ul",{className:(0,i.Z)(c.kM.docs.docSidebarMenu,"menu__list")},a.createElement(N,{items:n,activePath:r,onItemClick:function(){return t()}}))};function H(e){return a.createElement(c.Cv,{component:B,props:e})}var R=a.memo(L),W=a.memo(H);function z(e){var t=(0,s.Z)(),n="desktop"===t||"ssr"===t,r="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(R,e),r&&a.createElement(W,e))}var V=n(9105),Y=n(6213),J=n(6159),U="details_1VDD";function K(e){var t=Object.assign({},e);return a.createElement(c.PO,(0,m.Z)({},t,{className:(0,i.Z)("alert alert--info",U,t.className)}))}var X=["mdxType","originalType"];var q={head:function(e){var t=a.Children.map(e.children,(function(e){return function(e){var t,n;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(n=e.props)&&n.originalType){var r=e.props,o=(r.mdxType,r.originalType,(0,h.Z)(r,X));return a.createElement(e.props.originalType,o)}return e}(e)}));return a.createElement(V.Z,e,t)},code:function(e){var t=e.children;return(0,a.isValidElement)(t)?t:t.includes("\n")?a.createElement(Y.Z,e):a.createElement("code",e)},a:function(e){return a.createElement(b.Z,e)},pre:function(e){var t,n=e.children;return(0,a.isValidElement)(n)&&(0,a.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?n.props.children:a.createElement(Y.Z,(0,a.isValidElement)(n)?null==n?void 0:n.props:Object.assign({},e))},details:function(e){var t=a.Children.toArray(e.children),n=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),r=a.createElement(a.Fragment,null,t.filter((function(e){return e!==n})));return a.createElement(K,(0,m.Z)({},e,{summary:n}),r)},h1:(0,J.Z)("h1"),h2:(0,J.Z)("h2"),h3:(0,J.Z)("h3"),h4:(0,J.Z)("h4"),h5:(0,J.Z)("h5"),h6:(0,J.Z)("h6")},G=n(4608),Q=n(5977),$="backToTopButton_35hR",ee="backToTopButtonShow_18ls";function te(){var e=(0,a.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var n=document.documentElement.scrollTop;n>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*n)))}(),function(){return t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}var ne=function(){var e,t=(0,Q.TH)(),n=te(),r=n.smoothScrollTop,o=n.cancelScrollToTop,l=(0,a.useState)(!1),c=l[0],s=l[1];return(0,d.Z)((function(e,t){var n=e.scrollY;if(t){var a=n<t.scrollY;if(a||o(),n<300)s(!1);else if(a){var r=document.documentElement.scrollHeight;n+window.innerHeight<r&&s(!0)}else s(!1)}}),[t]),a.createElement("button",{className:(0,i.Z)("clean-btn",$,(e={},e[ee]=c,e)),type:"button",onClick:function(){return r()}},a.createElement("svg",{viewBox:"0 0 24 24",width:"28"},a.createElement("path",{d:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",fill:"currentColor"})))},ae={docPage:"docPage_31aa",docMainContainer:"docMainContainer_3ufF",docSidebarContainer:"docSidebarContainer_3Kbt",docMainContainerEnhanced:"docMainContainerEnhanced_3NYZ",docSidebarContainerHidden:"docSidebarContainerHidden_3pA8",collapsedDocSidebar:"collapsedDocSidebar_2JMH",expandSidebarButtonIcon:"expandSidebarButtonIcon_1naQ",docItemWrapperEnhanced:"docItemWrapperEnhanced_2vyJ"};function re(e){var t,n,o,s=e.currentDocRoute,d=e.versionMetadata,u=e.children,m=d.pluginId,h=d.version,b=s.sidebar,v=b?d.docsSidebars[b]:void 0,E=(0,a.useState)(!1),g=E[0],y=E[1],Z=(0,a.useState)(!1),k=Z[0],C=Z[1],_=(0,a.useCallback)((function(){k&&C(!1),y(!g)}),[k]);return a.createElement(l.Z,{wrapperClassName:c.kM.wrapper.docsPages,pageClassName:c.kM.page.docsDocPage,searchMetadatas:{version:h,tag:(0,c.os)(m,h)}},a.createElement("div",{className:ae.docPage},a.createElement(ne,null),v&&a.createElement("aside",{className:(0,i.Z)(ae.docSidebarContainer,(t={},t[ae.docSidebarContainerHidden]=g,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(ae.docSidebarContainer)&&g&&C(!0)}},a.createElement(z,{key:b,sidebar:v,path:s.path,onCollapse:_,isHidden:k}),k&&a.createElement("div",{className:ae.collapsedDocSidebar,title:(0,f.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,f.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:_,onClick:_},a.createElement(p,{className:ae.expandSidebarButtonIcon}))),a.createElement("main",{className:(0,i.Z)(ae.docMainContainer,(n={},n[ae.docMainContainerEnhanced]=g||!v,n))},a.createElement("div",{className:(0,i.Z)("container padding-top--md padding-bottom--lg",ae.docItemWrapper,(o={},o[ae.docItemWrapperEnhanced]=g,o))},a.createElement(r.Zo,{components:q},u)))))}var oe=function(e){var t=e.route.routes,n=e.versionMetadata,r=e.location,l=t.find((function(e){return(0,Q.LX)(r.pathname,e)}));return l?a.createElement(a.Fragment,null,a.createElement(V.Z,null,a.createElement("html",{className:n.className})),a.createElement(re,{currentDocRoute:l,versionMetadata:n},(0,o.Z)(t,{versionMetadata:n}))):a.createElement(G.default,e)}},6159:function(e,t,n){n.d(t,{N:function(){return m},Z:function(){return p}});var a=n(3366),r=n(7462),o=n(7294),l=n(6010),i=n(4973),c=n(941),s="anchorWithStickyNavbar_31ik",d="anchorWithHideOnScrollNavbar_3R7-",u=["id"],m=function(e){var t=Object.assign({},e);return o.createElement("header",null,o.createElement("h1",(0,r.Z)({},t,{id:void 0}),t.children))},p=function(e){return"h1"===e?m:(t=e,function(e){var n,r=e.id,m=(0,a.Z)(e,u),p=(0,c.LU)().navbar.hideOnScroll;return r?o.createElement(t,m,o.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,l.Z)("anchor","anchor__"+t,(n={},n[d]=p,n[s]=!p,n)),id:r}),m.children,o.createElement("a",{className:"hash-link",href:"#"+r,title:(0,i.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):o.createElement(t,m)});var t}},4608:function(e,t,n){n.r(t);var a=n(7294),r=n(3516),o=n(4973);t.default=function(){return a.createElement(r.Z,{title:(0,o.I)({id:"theme.NotFound.title",message:"Page Not Found"})},a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);