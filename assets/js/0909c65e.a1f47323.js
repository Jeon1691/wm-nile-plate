"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[298],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(7294),a=n(9443);var i=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=n(6010),l="tabItem_1uMI",s="tabItemActive_2DSg";var c=function(e){var t,n=e.lazy,a=e.block,c=e.defaultValue,u=e.values,d=e.groupId,p=e.className,m=r.Children.toArray(e.children),f=null!=u?u:m.map((function(e){return{value:e.props.value,label:e.props.label}})),g=null!=c?c:null==(t=m.find((function(e){return e.props.default})))?void 0:t.props.value,h=i(),v=h.tabGroupChoices,k=h.setTabGroupChoices,b=(0,r.useState)(g),w=b[0],N=b[1],y=[];if(null!=d){var O=v[d];null!=O&&O!==w&&f.some((function(e){return e.value===O}))&&N(O)}var j=function(e){var t=e.currentTarget,n=y.indexOf(t),r=f[n].value;N(r),null!=d&&(k(d,r),setTimeout((function(){var e,n,r,a,i,o,l,c;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,i=e.right,o=window,l=o.innerHeight,c=o.innerWidth,n>=0&&i<=c&&a<=l&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},x=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=y.indexOf(e.target)+1;n=y[r]||y[0];break;case"ArrowLeft":var a=y.indexOf(e.target)-1;n=y[a]||y[y.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},p)},f.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,className:(0,o.Z)("tabs__item",l,{"tabs__item--active":w===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:x,onFocus:j,onClick:j},null!=n?n:t)}))),n?(0,r.cloneElement)(m.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}},9443:function(e,t,n){var r=(0,n(7294).createContext)(void 0);t.Z=r},3127:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return p},default:function(){return f}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=n(5064),l=n(8215),s=["components"],c={id:"wdio",title:"WebdriverIO",sidebar_label:"WebdriverIO",description:"Using WebdriverIO with React for End to End testing"},u=void 0,d={unversionedId:"react/e2e-testing/wdio",id:"react/e2e-testing/wdio",isDocsHomePage:!1,title:"WebdriverIO",description:"Using WebdriverIO with React for End to End testing",source:"@site/docs/react/e2e-testing/wdio.md",sourceDirName:"react/e2e-testing",slug:"/react/e2e-testing/wdio",permalink:"/superplate/docs/react/e2e-testing/wdio",editUrl:"https://github.com/pankod/superplate/tree/master/documentation/docs/react/e2e-testing/wdio.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1620740656,formattedLastUpdatedAt:"5/11/2021",frontMatter:{id:"wdio",title:"WebdriverIO",sidebar_label:"WebdriverIO",description:"Using WebdriverIO with React for End to End testing"},sidebar:"someSidebar",previous:{title:"Cypress",permalink:"/superplate/docs/react/e2e-testing/cypress"},next:{title:"Docker",permalink:"/superplate/docs/react/docker"}},p=[{value:"Writing Tests",id:"writing-tests",children:[]},{value:"Running Tests",id:"running-tests",children:[]},{value:"File structure",id:"file-structure",children:[]},{value:"Adding WebdriverIO to your project later",id:"adding-webdriverio-to-your-project-later",children:[]}],m={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Next-gen browser and mobile automation test framework for Node.js."),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("a",{parentName:"p",href:"https://webdriver.io/docs/gettingstarted.html"},"Refer to official documentation for detailed usage. ","\u2192")),(0,i.kt)("h3",{id:"writing-tests"},"Writing Tests"),(0,i.kt)("p",null,"Testing your application will require interacting with UI elements. Best practice for selecting elements in your tests is with special attributes for testing.  "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add test attributes to elements of your UI.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/main/index.tsx"',title:'"src/components/main/index.tsx"'},'import React from "react";\nimport { Button } from "components";\n\nexport const Main: React.FC = () => {\n  return (\n    <div>\n    // highlight-start\n      <h1 data-test="main-heading">superplate</h1>\n    // highlight-end\n      <p>The frontend boilerplate with superpowers!</p>\n    // highlight-start\n      <Button data-test="docs-btn-anchor">Docs</Button>\n    // highlight-end\n    </div>\n  );\n};\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Now these elements can be selected in tests with ",(0,i.kt)("inlineCode",{parentName:"li"},"$")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"$$"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const heading = await $('[data-test=\"main-heading\"]');\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Don't forget to visit the page before each test.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="test/e2e/specs/home.spec.ts"',title:'"test/e2e/specs/home.spec.ts"'},'describe("Homepage", () => {\n  beforeEach(async () => {\n    await browser.url("/");\n  });\n\n  it("Brings header", async () => {\n    const heading = await $(\'[data-test="main-heading"]\');\n    expect(await heading.getText()).toBe("superplate");\n  });\n\n  it("Should have true href", async () => {\n    const button = await $(\'[data-test="docs-btn-anchor"]\');\n    expect(await button.getTagName()).toBe("a");\n    const buttonHref = await button.getAttribute("href");\n    expect(buttonHref).toBeTruthy();\n    expect(buttonHref).toBe("https://pankod.github.io/superplate/");\n  });\n\n  it("Should have icons", async () => {\n    const icons = await $$(\'[data-test="icon"]\');\n    expect(icons).toHaveLength(6);\n  });\n});\n\n')),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://webdriver.io/docs/selectors.html"},"Refer to official documentation on selecting elemets for detailed usage. ","\u2192")),(0,i.kt)("h3",{id:"running-tests"},"Running Tests"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Configure ",(0,i.kt)("inlineCode",{parentName:"li"},"baseUrl")," option in ",(0,i.kt)("inlineCode",{parentName:"li"},"wdio.conf.js"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="wdio.conf.js"',title:'"wdio.conf.js"'},'exports.config = {\n  ...\n  baseUrl: "http://localhost:3000",\n  ...\n}\n')),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If your ",(0,i.kt)("inlineCode",{parentName:"p"},"url")," parameter starts with ",(0,i.kt)("inlineCode",{parentName:"p"},"/"),", the base url gets prepended, not including the path portion of your baseUrl. If your ",(0,i.kt)("inlineCode",{parentName:"p"},"url")," parameter starts without a scheme or ",(0,i.kt)("inlineCode",{parentName:"p"},"/")," (like ",(0,i.kt)("inlineCode",{parentName:"p"},"some/path"),"), the base url gets prepended directly."))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://webdriver.io/docs/configurationfile.html"},"Refer to official documentation on configuration for detailed usage. ","\u2192")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add a command to run tests.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n    scripts: {\n        "webdriver:run": "wdio wdio.conf.js"\n    }\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Start your project in dev mode")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm run dev\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Run tests with ",(0,i.kt)("inlineCode",{parentName:"li"},"wdio"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm run webdriver:run\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://webdriver.io/docs/clioptions.html"},"Refer to official documentation on command line for detailed usage. ","\u2192")),(0,i.kt)("h3",{id:"file-structure"},"File structure"),(0,i.kt)("p",null,"WebdriverIO test directory is placed in the root of the project."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add ",(0,i.kt)("inlineCode",{parentName:"li"},"tsconfig.json")," for WebdriverIO")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="test/e2e/tsconfig.json"',title:'"test/e2e/tsconfig.json"'},'{\n  "compilerOptions": {\n    "types": ["node", "webdriverio", "@wdio/mocha-framework"]\n  },\n  "include": ["./specs/**/*.ts"]\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Don't forget to exclude WebdriveIO from main ",(0,i.kt)("inlineCode",{parentName:"li"},"tsconfig.json"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="tsconfig.json"',title:'"tsconfig.json"'},'{\n  "exclude": ["test/*"]\n}\n')),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"All this work will be handled automatically by CLI, so you don\u2019t need to do anything extra as long as you choose ",(0,i.kt)("strong",{parentName:"p"},"WebdriverIO")," plugin during the project creation phase."))),(0,i.kt)("h3",{id:"adding-webdriverio-to-your-project-later"},"Adding WebdriverIO to your project later"),(0,i.kt)("p",null,"If you didn't choose the plugin during project creation phase, you can follow the instructions below to add it."),(0,i.kt)(o.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm install -D @wdio/cli \n"))),(0,i.kt)(l.Z,{value:"yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"yarn add -D @wdio/cli\n")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Generate configuration file")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx wdio config -y\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://webdriver.io/docs/gettingstarted.html"},"Refer to official documentation on installation for detailed usage. ","\u2192")))}f.isMDXComponent=!0},6010:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);