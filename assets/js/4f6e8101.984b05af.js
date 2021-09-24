"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1438],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(7294),a=n(9443);var i=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=n(6010),s="tabItem_1uMI",l="tabItemActive_2DSg";var c=function(e){var t,n=e.lazy,a=e.block,c=e.defaultValue,p=e.values,u=e.groupId,d=e.className,m=r.Children.toArray(e.children),f=null!=p?p:m.map((function(e){return{value:e.props.value,label:e.props.label}})),v=null!=c?c:null==(t=m.find((function(e){return e.props.default})))?void 0:t.props.value,g=i(),b=g.tabGroupChoices,k=g.setTabGroupChoices,y=(0,r.useState)(v),h=y[0],N=y[1],w=[];if(null!=u){var O=b[u];null!=O&&O!==h&&f.some((function(e){return e.value===O}))&&N(O)}var C=function(e){var t=e.currentTarget,n=w.indexOf(t),r=f[n].value;N(r),null!=u&&(k(u,r),setTimeout((function(){var e,n,r,a,i,o,s,c;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,i=e.right,o=window,s=o.innerHeight,c=o.innerWidth,n>=0&&i<=c&&a<=s&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},A=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=w.indexOf(e.target)+1;n=w[r]||w[0];break;case"ArrowLeft":var a=w.indexOf(e.target)-1;n=w[a]||w[w.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},d)},f.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,className:(0,o.Z)("tabs__item",s,{"tabs__item--active":h===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:A,onFocus:C,onClick:C},null!=n?n:t)}))),n?(0,r.cloneElement)(m.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},9443:function(e,t,n){var r=(0,n(7294).createContext)(void 0);t.Z=r},7375:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return d},default:function(){return f}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=n(5064),s=n(8215),l=["components"],c={id:"antd",title:"Ant Design",sidebar_label:"Ant Design",description:"Setting up Ant design for Typescript Next.js apps"},p=void 0,u={unversionedId:"react/antd",id:"react/antd",isDocsHomePage:!1,title:"Ant Design",description:"Setting up Ant design for Typescript Next.js apps",source:"@site/docs/react/antd.md",sourceDirName:"react",slug:"/react/antd",permalink:"/superplate/docs/react/antd",editUrl:"https://github.com/pankod/superplate/tree/master/documentation/docs/react/antd.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1620740656,formattedLastUpdatedAt:"5/11/2021",frontMatter:{id:"antd",title:"Ant Design",sidebar_label:"Ant Design",description:"Setting up Ant design for Typescript Next.js apps"},sidebar:"someSidebar",previous:{title:"Chakra UI",permalink:"/superplate/docs/react/chakra-ui"},next:{title:"Built-in CSS",permalink:"/superplate/docs/react/css"}},d=[{value:"Less Support",id:"less-support",children:[]},{value:"Less Support",id:"less-support-1",children:[]}],m={toc:d};function f(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A design system for enterprise-level products. Create an efficient and enjoyable work experience."),(0,i.kt)("p",null,"Ant Design provides a React UI library ",(0,i.kt)("inlineCode",{parentName:"p"},"antd")," that contains a set of high quality components and demos for building rich, interactive user interfaces.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("a",{parentName:"p",href:"https://ant.design/docs/react/introduce"},"Go to docs ","\u2192")),(0,i.kt)("h3",{id:"less-support"},"Less Support"),(0,i.kt)("h3",{id:"less-support-1"},"Less Support"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"antd")," uses ",(0,i.kt)("inlineCode",{parentName:"p"},"less")," as its preprocessor."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Due to its incompatibility with ",(0,i.kt)("inlineCode",{parentName:"p"},"storybook"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"less")," is not included in superplate."))),(0,i.kt)("p",null,"To use ",(0,i.kt)("inlineCode",{parentName:"p"},"less")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"antd")," in your project  "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"First we should modify ",(0,i.kt)("inlineCode",{parentName:"li"},"src/App.css")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"src/App.less"),", then import less file instead.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},"/* src/App.tsx */\n- import './App.css';\n+ import './App.less';\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},"/* src/App.less */\n- @import '~antd/dist/antd.css';\n+ @import '~antd/dist/antd.less';\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Then install ",(0,i.kt)("inlineCode",{parentName:"li"},"craco-less")," and modify ",(0,i.kt)("inlineCode",{parentName:"li"},"craco.config.js")," like below.")),(0,i.kt)(o.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install craco-less\n"))),(0,i.kt)(s.Z,{value:"yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add craco-less\n")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="craco.config.js"',title:'"craco.config.js"'},"const CracoLessPlugin = require('craco-less');\n\nmodule.exports = {\n  plugins: [\n    {\n      plugin: CracoLessPlugin,\n      options: {\n        lessLoaderOptions: {\n          lessOptions: {\n            modifyVars: { '@primary-color': '#1DA57A' },\n            javascriptEnabled: true,\n          },\n        },\n      },\n    },\n  ],\n};\n")))}f.isMDXComponent=!0},6010:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);