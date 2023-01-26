"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1106],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>b});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),p=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=p(t),b=o,m=f["".concat(i,".").concat(b)]||f[b]||u[b]||a;return t?r.createElement(m,c(c({ref:n},s),{},{components:t})):r.createElement(m,c({ref:n},s))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=f;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var p=2;p<a;p++)c[p]=t[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},6974:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=t(7462),o=(t(7294),t(3905));const a={},c=void 0,l={unversionedId:"\u624b\u5199API/apply\u7684\u5b9e\u73b0",id:"\u624b\u5199API/apply\u7684\u5b9e\u73b0",title:"apply\u7684\u5b9e\u73b0",description:"\u51fd\u6570\u7684\u5f62\u5f0f",source:"@site/docs/10.\u624b\u5199API/4.apply\u7684\u5b9e\u73b0.md",sourceDirName:"10.\u624b\u5199API",slug:"/\u624b\u5199API/apply\u7684\u5b9e\u73b0",permalink:"/demo/docs/\u624b\u5199API/apply\u7684\u5b9e\u73b0",draft:!1,editUrl:"https://github.com/Vipers3/demo/docs/10.\u624b\u5199API/4.apply\u7684\u5b9e\u73b0.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"call\u7684\u5b9e\u73b0",permalink:"/demo/docs/\u624b\u5199API/call\u7684\u5b9e\u73b0"},next:{title:"bind\u7684\u5b9e\u73b0",permalink:"/demo/docs/\u624b\u5199API/bind\u7684\u5b9e\u73b0"}},i={},p=[{value:"\u51fd\u6570\u7684\u5f62\u5f0f",id:"\u51fd\u6570\u7684\u5f62\u5f0f",level:3},{value:"\u4ee5\u65b9\u6cd5\u7684\u5f62\u5f0f",id:"\u4ee5\u65b9\u6cd5\u7684\u5f62\u5f0f",level:3}],s={toc:p};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"\u51fd\u6570\u7684\u5f62\u5f0f"},"\u51fd\u6570\u7684\u5f62\u5f0f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'function myApply(fn, obj, [...arg]) {\n  var newObj = obj || window;\n  newObj = Object(newObj); //\u5c06\u57fa\u672c\u6570\u636e\u7c7b\u578b\u8f6c\u6362\u4e3a\u5bf9\u8c61\n  newObj.fn = fn;\n  var res = newObj.fn(...arg);\n  delete newObj.fn;\n  return res;\n}\n\nvar obj = { name: "\u5c0f\u660e" };\nfunction fn(a, b, c) {\n  console.log(this, a, b, c);\n}\nmyApply(fn, obj, [1, 2, 3]);\n')),(0,o.kt)("h3",{id:"\u4ee5\u65b9\u6cd5\u7684\u5f62\u5f0f"},"\u4ee5\u65b9\u6cd5\u7684\u5f62\u5f0f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'Function.prototype.myApply = function (obj, [...arg]) {\n  var newObj = obj;\n  newObj = Object(newObj); //\u5c06\u57fa\u672c\u6570\u636e\u7c7b\u578b\u8f6c\u6362\u4e3a\u5bf9\u8c61\n  newObj.fn = this;\n  var res = newObj.fn(...arg);\n  delete newObj.fn;\n  return res;\n};\n\nvar obj = { name: "\u5c0f\u660e" };\nfunction fn(a, b, c) {\n  console.log(this, a, b, c);\n}\nfn.myApply(obj, [1, 2, 3]);\n')))}u.isMDXComponent=!0}}]);