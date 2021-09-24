"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3658],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7294),r=n(9443);var o=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(6010),s="tabItem_1uMI",l="tabItemActive_2DSg";var c=function(e){var t,n=e.lazy,r=e.block,c=e.defaultValue,u=e.values,p=e.groupId,d=e.className,m=a.Children.toArray(e.children),f=null!=u?u:m.map((function(e){return{value:e.props.value,label:e.props.label}})),h=null!=c?c:null==(t=m.find((function(e){return e.props.default})))?void 0:t.props.value,v=o(),g=v.tabGroupChoices,k=v.setTabGroupChoices,x=(0,a.useState)(h),b=x[0],N=x[1],y=[];if(null!=p){var w=g[p];null!=w&&w!==b&&f.some((function(e){return e.value===w}))&&N(w)}var j=function(e){var t=e.currentTarget,n=y.indexOf(t),a=f[n].value;N(a),null!=p&&(k(p,a),setTimeout((function(){var e,n,a,r,o,i,s,c;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,o=e.right,i=window,s=i.innerHeight,c=i.innerWidth,n>=0&&o<=c&&r<=s&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},C=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=y.indexOf(e.target)+1;n=y[a]||y[0];break;case"ArrowLeft":var r=y.indexOf(e.target)-1;n=y[r]||y[y.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},d)},f.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,i.Z)("tabs__item",s,{"tabs__item--active":b===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:C,onFocus:j,onClick:j},null!=n?n:t)}))),n?(0,a.cloneElement)(m.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},9443:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},1717:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return d},default:function(){return f}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=n(5064),s=n(8215),l=["components"],c={id:"axios",title:"Axios",sidebar_label:"Axios",description:"How to use axios in Next.js?"},u=void 0,p={unversionedId:"nextjs/axios",id:"nextjs/axios",isDocsHomePage:!1,title:"Axios",description:"How to use axios in Next.js?",source:"@site/docs/nextjs/axios.md",sourceDirName:"nextjs",slug:"/nextjs/axios",permalink:"/superplate/docs/nextjs/axios",editUrl:"https://github.com/pankod/superplate/tree/master/documentation/docs/nextjs/axios.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1620740656,formattedLastUpdatedAt:"5/11/2021",frontMatter:{id:"axios",title:"Axios",sidebar_label:"Axios",description:"How to use axios in Next.js?"},sidebar:"someSidebar",previous:{title:"Fetch",permalink:"/superplate/docs/nextjs/fetch"},next:{title:"Storybook",permalink:"/superplate/docs/nextjs/storybook"}},d=[{value:"Concurrency",id:"concurrency",children:[]},{value:"Creating an instance",id:"creating-an-instance",children:[]},{value:"Adding axios to your project later",id:"adding-axios-to-your-project-later",children:[]}],m={toc:d};function f(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Promise based HTTP client for the browser and node.js  "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Make XMLHttpRequests from the browser"),(0,o.kt)("li",{parentName:"ul"},"Make http requests from node.js"),(0,o.kt)("li",{parentName:"ul"},"Supports the Promise API"),(0,o.kt)("li",{parentName:"ul"},"Intercept request and response"),(0,o.kt)("li",{parentName:"ul"},"Transform request and response data"),(0,o.kt)("li",{parentName:"ul"},"Cancel requests"),(0,o.kt)("li",{parentName:"ul"},"Automatic transforms for JSON data"),(0,o.kt)("li",{parentName:"ul"},"Client side support for protecting against XSRF")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/axios/axios"},"Refer to official documentation for detailed usage. ","\u2192")),(0,o.kt)("p",null,"Performing a ",(0,o.kt)("inlineCode",{parentName:"p"},"GET")," (or ",(0,o.kt)("inlineCode",{parentName:"p"},"POST"),") request is as simple as calling the method on ",(0,o.kt)("inlineCode",{parentName:"p"},"axios")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import axios from \"axios\";\n\naxios.get('/user?ID=12345')\n  .then(function (response) {\n    // handle success\n    console.log(response);\n  })\n  .catch(function (error) {\n    // handle error\n    console.log(error);\n  })\n  .then(function () {\n    // always executed\n  });\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/axios/axios#note-commonjs-usage"},"More on GET example","\u2192")),(0,o.kt)("p",null,"Requests can be made by passing the relevant config to axios."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"axios({\n  method: 'post',\n  url: '/user/12345',\n  data: {\n    firstName: 'Fred',\n    lastName: 'Flintstone'\n  }\n});\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/axios/axios#axios-api"},"More on POST example","\u2192")),(0,o.kt)("h3",{id:"concurrency"},"Concurrency"),(0,o.kt)("p",null,"Please use ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise.all")," to handle concurrency"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function getUserAccount() {\n  return axios.get('/user/12345');\n}\n\nfunction getUserPermissions() {\n  return axios.get('/user/12345/permissions');\n}\n\nPromise.all([getUserAccount(), getUserPermissions()])\n  .then(function (results) {\n    const acct = results[0];\n    const perm = results[1];\n  });\n")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Helper functions below for dealing with concurrent requests are deprecated"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},"axios.all(iterable)\naxios.spread(callback)\n")))),(0,o.kt)("h3",{id:"creating-an-instance"},"Creating an instance"),(0,o.kt)("p",null,"You can create a new instance of axios with a custom config."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import React, { useState, useEffect } from "react";\nimport axios from "axios";\n\nconst BASE_API_URL = "https://official-joke-api.appspot.com/";\nconst API_URL = "/jokes/programming/random";\n\nconst jokesApi = axios.create({\n    baseURL: BASE_API_URL,\n});\n\nexport const AxiosExample = () => {\n    const [error, setError] = useState(null);\n    const [isLoaded, setIsLoaded] = useState(false);\n    const [data, setData] = useState([]);\n\n    useEffect(() => {\n        jokesApi({\n            method: "get",\n            url: API_URL,\n        })\n            .then(res => res.data)\n            .then(res => {\n                    setData(res);\n                    setIsLoaded(true);\n                },\n                // Note: it\'s important to handle errors here\n                // instead of a catch() block so that we don\'t swallow\n                // exceptions from actual bugs in components.\n                err => {\n                    setIsLoaded(true);\n                    setError(err);\n                },\n            );\n    }, []);\n};\n')),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/axios/axios#creating-an-instance"},"More on instance methods","\u2192")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"All this work will be handled automatically by superplate, so you don\u2019t need to do anything extra as long as you choose axios as feature plugin during the project creation phase."))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Consider using ",(0,o.kt)("inlineCode",{parentName:"p"},"react-query")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"swr")," plugins to handle client-side requests.",(0,o.kt)("br",{parentName:"p"}),"\n","They can be used with promise-based methods (fetch, axios..)"))),(0,o.kt)("h2",{id:"adding-axios-to-your-project-later"},"Adding axios to your project later"),(0,o.kt)("p",null,"If you want to add axios to your existing project first install the dependencies"),(0,o.kt)(i.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm install axios\n"))),(0,o.kt)(s.Z,{value:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"yarn add axios\n")))))}f.isMDXComponent=!0},6010:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);