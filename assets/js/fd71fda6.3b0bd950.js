"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2912],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||s;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<s;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(7294),a=n(9443);var s=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(6010),o="tabItem_1uMI",l="tabItemActive_2DSg";var p=function(e){var t,n=e.lazy,a=e.block,p=e.defaultValue,c=e.values,u=e.groupId,d=e.className,m=r.Children.toArray(e.children),g=null!=c?c:m.map((function(e){return{value:e.props.value,label:e.props.label}})),f=null!=p?p:null==(t=m.find((function(e){return e.props.default})))?void 0:t.props.value,h=s(),y=h.tabGroupChoices,k=h.setTabGroupChoices,v=(0,r.useState)(f),N=v[0],b=v[1],w=[];if(null!=u){var C=y[u];null!=C&&C!==N&&g.some((function(e){return e.value===C}))&&b(C)}var j=function(e){var t=e.currentTarget,n=w.indexOf(t),r=g[n].value;b(r),null!=u&&(k(u,r),setTimeout((function(){var e,n,r,a,s,i,o,p;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,s=e.right,i=window,o=i.innerHeight,p=i.innerWidth,n>=0&&s<=p&&a<=o&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},x=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=w.indexOf(e.target)+1;n=w[r]||w[0];break;case"ArrowLeft":var a=w.indexOf(e.target)-1;n=w[a]||w[w.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},d)},g.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":N===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:x,onFocus:j,onClick:j},null!=n?n:t)}))),n?(0,r.cloneElement)(m.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}},9443:function(e,t,n){var r=(0,n(7294).createContext)(void 0);t.Z=r},1333:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return d},default:function(){return g}});var r=n(7462),a=n(3366),s=(n(7294),n(3905)),i=n(5064),o=n(8215),l=["components"],p={id:"cypress",title:"Cypress",sidebar_label:"Cypress",description:"Using Cypress with React for End to End testing"},c=void 0,u={unversionedId:"react/e2e-testing/cypress",id:"react/e2e-testing/cypress",isDocsHomePage:!1,title:"Cypress",description:"Using Cypress with React for End to End testing",source:"@site/docs/react/e2e-testing/cypress.md",sourceDirName:"react/e2e-testing",slug:"/react/e2e-testing/cypress",permalink:"/superplate/docs/react/e2e-testing/cypress",editUrl:"https://github.com/pankod/superplate/tree/master/documentation/docs/react/e2e-testing/cypress.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1620740656,formattedLastUpdatedAt:"5/11/2021",frontMatter:{id:"cypress",title:"Cypress",sidebar_label:"Cypress",description:"Using Cypress with React for End to End testing"},sidebar:"someSidebar",previous:{title:"Testing Library",permalink:"/superplate/docs/react/testing/testing-library"},next:{title:"WebdriverIO",permalink:"/superplate/docs/react/e2e-testing/wdio"}},d=[{value:"Writing Tests",id:"writing-tests",children:[]},{value:"Running Tests",id:"running-tests",children:[]},{value:"File structure",id:"file-structure",children:[]},{value:"Adding Cypress to your project later",id:"adding-cypress-to-your-project-later",children:[]}],m={toc:d};function g(e){var t=e.components,n=(0,a.Z)(e,l);return(0,s.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Fast, easy and reliable testing for anything that runs in a browser.")),(0,s.kt)("p",null,"Cypress is a next generation front end testing tool built for the modern web. It addresses the key pain points developers and QA engineers face when testing modern applications.",(0,s.kt)("br",{parentName:"p"}),"\n",(0,s.kt)("a",{parentName:"p",href:"https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell"},"Refer to official documentation for detailed usage. ","\u2192")),(0,s.kt)("h3",{id:"writing-tests"},"Writing Tests"),(0,s.kt)("p",null,"Testing your application will require interacting with UI elements. Best practice for selecting elements in your tests is with special attributes for testing.",(0,s.kt)("br",{parentName:"p"}),"\n",(0,s.kt)("a",{parentName:"p",href:"https://docs.cypress.io/guides/getting-started/writing-your-first-test.html"},"Refer to official documentation on writing tests for detailed usage. ","\u2192")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Add test attributes to elements of your UI.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="components/main/index.tsx"',title:'"components/main/index.tsx"'},'import React from "react";\nimport { Button } from "components";\n\nexport const Main: React.FC = () => {\n  return (\n    <div>\n    // highlight-start\n      <h1 data-test="main-heading">superplate</h1>\n    // highlight-end\n      <p>The frontend boilerplate with superpowers!</p>\n    // highlight-start\n      <Button data-test="docs-btn-anchor">Docs</Button>\n    // highlight-end\n    </div>\n  );\n};\n')),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Now these elements can be selected in tests with ",(0,s.kt)("inlineCode",{parentName:"li"},"cy.get"))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"cy.get(`[data-test=main-heading]`);\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Add two custom commands from ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/cypress-io/cypress-realworld-app/blob/develop/cypress/support/commands.ts#L28"},"Real World App (RWA)")," for easier selection of elements.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="cypress/support/commands.ts"',title:'"cypress/support/commands.ts"'},'Cypress.Commands.add("getBySel", (selector, ...args) => {\n  return cy.get(`[data-test=${selector}]`, ...args);\n});\n\nCypress.Commands.add("getBySelLike", (selector, ...args) => {\n  return cy.get(`[data-test*=${selector}]`, ...args);\n});\n')),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Don't forget to visit the page before each test.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="cypress/integration/home.spec.ts"',title:'"cypress/integration/home.spec.ts"'},'describe("Homepage", () => {\n  beforeEach(() => {\n    cy.visit("/");\n  });\n\n  it("Brings header", () => {\n    cy.getBySel("main-heading").should("contain.text", "superplate");\n  });\n\n  it("Should have true href", () => {\n    // https://github.com/cypress-io/cypress-example-recipes/blob/master/examples/testing-dom__tab-handling-links/cypress/integration/tab_handling_anchor_links_spec.js\n    cy.getBySel("docs-btn-anchor")\n      .should("have.prop", "href")\n      .and("equal", "https://pankod.github.io/superplate/");\n  });\n});\n')),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://docs.cypress.io/guides/references/best-practices.html#Selecting-Elements"},"Refer to official documentation on selecting elemets for detailed usage. ","\u2192")),(0,s.kt)("h3",{id:"running-tests"},"Running Tests"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Add ",(0,s.kt)("inlineCode",{parentName:"li"},"baseUrl")," option to cypress configuration.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="cypress.json"',title:'"cypress.json"'},'{\n  "baseUrl": "http://localhost:3000"\n}\n')),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"}," This will automatically prefix ",(0,s.kt)("inlineCode",{parentName:"p"},"cy.visit()")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"cy.request()")," commands with this ",(0,s.kt)("inlineCode",{parentName:"p"},"baseUrl"),"."))),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://docs.cypress.io/guides/references/configuration.html"},"Refer to official documentation on configuration for detailed usage. ","\u2192")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Add commands for opening Cypress Test Runner and running tests.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n    scripts: {\n        "cypress:open": "cypress open",\n        "cypress:run": "cypress run --config video=false",\n        "cypress:test": "start-server-and-test start http://localhost:3000 cypress:run"\n    }\n}\n')),(0,s.kt)("h4",{id:"testing-in-development"},"Testing in development"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Start your project in dev mode")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npm run dev\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Run tests headlessly with ",(0,s.kt)("inlineCode",{parentName:"li"},"cypress run"))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npm run cypress:run\n")),(0,s.kt)("h4",{id:"testing-with-production-bundle"},"Testing with production bundle"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Build your project")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"run tests")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npm run cypress:test\n")),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},(0,s.kt)("inlineCode",{parentName:"p"},"cypress run")," runs tests to completion. By default, ",(0,s.kt)("inlineCode",{parentName:"p"},"cypress run")," will run all tests headlessly in the Electron browser."),(0,s.kt)("p",{parentName:"div"},(0,s.kt)("inlineCode",{parentName:"p"},"cypress open")," opens the test runner and lets you run your tests invidually."))),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://docs.cypress.io/guides/guides/command-line.html"},"Refer to official documentation on command line for detailed usage. ","\u2192")),(0,s.kt)("h3",{id:"file-structure"},"File structure"),(0,s.kt)("p",null,"Cypress directory is placed in the root of the project."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Add ",(0,s.kt)("inlineCode",{parentName:"li"},"tsconfig.json")," for Cypress")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="cypress/tsconfig.json"',title:'"cypress/tsconfig.json"'},'{\n  "compilerOptions": {\n    "target": "es5",\n    "lib": ["es5", "dom"],\n    "types": ["cypress"]\n  },\n  "include": ["**/*.ts"]\n}\n')),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Don't forget to exclude Cypress from main ",(0,s.kt)("inlineCode",{parentName:"li"},"tsconfig.json"))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="tsconfig.json"',title:'"tsconfig.json"'},'{\n  "exclude": ["cypress/*"]\n}\n')),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"All this work will be handled automatically by CLI, so you don\u2019t need to do anything extra as long as you choose ",(0,s.kt)("strong",{parentName:"p"},"Cypress")," plugin during the project creation phase."))),(0,s.kt)("h3",{id:"adding-cypress-to-your-project-later"},"Adding Cypress to your project later"),(0,s.kt)("p",null,"If you didn't choose the plugin during project creation phase, you can follow the instructions below to add it."),(0,s.kt)(i.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"npm install -D cypress \n"))),(0,s.kt)(o.Z,{value:"yarn",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"yarn add -D cypress\n")))),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Follow instructions starting in ",(0,s.kt)("a",{parentName:"li",href:"#writing-tests"},"Writing Tests"))),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://docs.cypress.io/guides/getting-started/installing-cypress.html"},"Refer to official documentation on installation for detailed usage. ","\u2192")))}g.isMDXComponent=!0},6010:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);