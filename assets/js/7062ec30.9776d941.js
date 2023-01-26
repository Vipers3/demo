"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6367],{3905:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>f});var t=n(7294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=t.createContext({}),c=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},p=function(e){var r=c(e.components);return t.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),f=a,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||i;return n?t.createElement(d,o(o({ref:r},p),{},{components:n})):t.createElement(d,o({ref:r},p))}));function f(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8150:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var t=n(7462),a=(n(7294),n(3905));const i={},o=void 0,l={unversionedId:"\u624b\u5199API/\u6570\u7ec4\u65b9\u6cd5\u7684\u5b9e\u73b0",id:"\u624b\u5199API/\u6570\u7ec4\u65b9\u6cd5\u7684\u5b9e\u73b0",title:"\u6570\u7ec4\u65b9\u6cd5\u7684\u5b9e\u73b0",description:"1\u3001filter \u7684\u5b9e\u73b0",source:"@site/docs/10.\u624b\u5199API/8.\u6570\u7ec4\u65b9\u6cd5\u7684\u5b9e\u73b0.md",sourceDirName:"10.\u624b\u5199API",slug:"/\u624b\u5199API/\u6570\u7ec4\u65b9\u6cd5\u7684\u5b9e\u73b0",permalink:"/demo/docs/\u624b\u5199API/\u6570\u7ec4\u65b9\u6cd5\u7684\u5b9e\u73b0",draft:!1,editUrl:"https://github.com/Vipers3/demo/docs/10.\u624b\u5199API/8.\u6570\u7ec4\u65b9\u6cd5\u7684\u5b9e\u73b0.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6df1\u62f7\u8d1d",permalink:"/demo/docs/\u624b\u5199API/\u6df1\u62f7\u8d1d"},next:{title:"promise\u7684\u5b9e\u73b0",permalink:"/demo/docs/\u624b\u5199API/promise\u7684\u5b9e\u73b0"}},s={},c=[{value:"1\u3001filter \u7684\u5b9e\u73b0",id:"1filter-\u7684\u5b9e\u73b0",level:2},{value:"2\u3001map \u7684\u5b9e\u73b0",id:"2map-\u7684\u5b9e\u73b0",level:2},{value:"3\u3001some \u7684\u5b9e\u73b0",id:"3some-\u7684\u5b9e\u73b0",level:2},{value:"4\u3001every \u7684\u5b9e\u73b0",id:"4every-\u7684\u5b9e\u73b0",level:2}],p={toc:c};function u(e){let{components:r,...n}=e;return(0,a.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1filter-\u7684\u5b9e\u73b0"},"1\u3001filter \u7684\u5b9e\u73b0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"Array.prototype.myFilter = function (cb) {\n  var newArr = [];\n  for (var i = 0; i < arr.length; i++) {\n    var res = cb(arr[i], i, arr);\n    if (res) {\n      newArr.push(arr[i]);\n    }\n  }\n  return newArr;\n};\nvar arr = [1, 2, 3, 4];\nvar arr2 = arr.myFilter((item, index, arr) => {\n  return item > 2;\n});\nconsole.log(arr2);\n")),(0,a.kt)("h2",{id:"2map-\u7684\u5b9e\u73b0"},"2\u3001map \u7684\u5b9e\u73b0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'var arr = [1, 2, 3, 4];\nArray.prototype.myMap = function (fn) {\n  var arr2 = [];\n  for (var i = 0; i < this.length; i++) {\n    var res = fn(this[i], i, arr);\n    arr2.push(res);\n  }\n  return arr2;\n};\n\nvar res = arr.myMap(function (item, index, arr) {\n  return item + "hello";\n});\nconsole.log(res);\n')),(0,a.kt)("h2",{id:"3some-\u7684\u5b9e\u73b0"},"3\u3001some \u7684\u5b9e\u73b0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"Array.prototype.mySome = function (fn) {\n  for (var i = 0; i < this.length; i++) {\n    if (fn(this[i], i, this)) {\n      return true;\n    }\n  }\n  return false;\n};\n\nvar arr = [1, 2, 3, 4, 5];\nvar arr2 = arr.mySome((item, index, arr) => {\n  return item > 3;\n});\nconsole.log(arr2);\n")),(0,a.kt)("h2",{id:"4every-\u7684\u5b9e\u73b0"},"4\u3001every \u7684\u5b9e\u73b0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"Array.prototype.myEvery = function (fn) {\n  for (var i = 0; i < this.length; i++) {\n    var res = fn(this[i], index, this);\n    if (!res) {\n      return false;\n    }\n  }\n  return true;\n};\n\nvar arr = [1, 2, 3, 4, 5];\nvar arr2 = arr.every((item, index, arr) => {\n  return item > 3;\n});\nconsole.log(arr2);\n")))}u.isMDXComponent=!0}}]);