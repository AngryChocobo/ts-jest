"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[3325],{4137:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),g=s(n),f=o,d=g["".concat(u,".").concat(f)]||g[f]||p[f]||i;return n?r.createElement(d,a(a({ref:t},l),{},{components:n})):r.createElement(d,a({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=g;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},2136:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return l},default:function(){return g}});var r=n(7462),o=n(3366),i=(n(7294),n(4137)),a=["components"],c={id:"debugging",title:"Debugging ts-jest"},u=void 0,s={unversionedId:"debugging",id:"debugging",isDocsHomePage:!1,title:"Debugging ts-jest",description:"You can activate the debug logger by setting the environment variable TSJESTLOG before running tests.",source:"@site/docs/debugging.md",sourceDirName:".",slug:"/debugging",permalink:"/ts-jest/docs/next/debugging",editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/docs/debugging.md",tags:[],version:"current",frontMatter:{id:"debugging",title:"Debugging ts-jest"},sidebar:"docs",previous:{title:"Migration from <=23.10",permalink:"/ts-jest/docs/next/migration"}},l=[],p={toc:l};function g(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You can activate the debug logger by setting the environment variable ",(0,i.kt)("inlineCode",{parentName:"p"},"TS_JEST_LOG")," before running tests.\nThe output of the logger will be in ",(0,i.kt)("strong",{parentName:"p"},"ts-jest.log")," in current working directory."),(0,i.kt)("p",null,"The debug logger contains some useful information about how internal ",(0,i.kt)("inlineCode",{parentName:"p"},"ts-jest")," works, including which files are processed,\nwhich Jest config or TypeScript config is used etc."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Linux/MacOS")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"export TS_JEST_LOG=ts-jest.log\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Windows")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"set TS_JEST_LOG=ts-jest.log\n")))}g.isMDXComponent=!0}}]);