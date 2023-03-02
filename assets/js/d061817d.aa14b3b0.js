"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3970],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),l=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(t),f=o,y=d["".concat(i,".").concat(f)]||d[f]||u[f]||a;return t?r.createElement(y,c(c({ref:n},p),{},{components:t})):r.createElement(y,c({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=d;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var l=2;l<a;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1249:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=t(7462),o=(t(7294),t(3905));const a={},c=void 0,s={unversionedId:"\u624b\u5199API/ajax\u7684\u5c01\u88c5",id:"\u624b\u5199API/ajax\u7684\u5c01\u88c5",title:"ajax\u7684\u5c01\u88c5",description:"",source:"@site/docs/12.\u624b\u5199API/10.ajax\u7684\u5c01\u88c5.md",sourceDirName:"12.\u624b\u5199API",slug:"/\u624b\u5199API/ajax\u7684\u5c01\u88c5",permalink:"/demo/docs/\u624b\u5199API/ajax\u7684\u5c01\u88c5",draft:!1,editUrl:"https://github.com/Vipers3/demo/docs/12.\u624b\u5199API/10.ajax\u7684\u5c01\u88c5.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"promise\u7684\u5b9e\u73b0",permalink:"/demo/docs/\u624b\u5199API/promise\u7684\u5b9e\u73b0"},next:{title:"\u7f51\u9875\u90e8\u7f72",permalink:"/demo/docs/intro"}},i={},l=[],p={toc:l};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'function getData(config) {\n  // 1. \u521b\u5efa\u5b9e\u4f8b\u5bf9\u8c61\n  const xhr = new XMLHttpRequest();\n\n  // \u63d0\u524d\u89e3\u6784\uff0c\u65b9\u4fbf\u4f7f\u7528\n  const { method = "get", url, query, data, success } = config;\n\n  // 2. \u7f16\u8f91\u8bf7\u6c42\u884c\u4fe1\u606f\n  let str = "?query=" + +new Date();\n  if (query && method.toUpperCase() === "GET") {\n    for (const k in query) {\n      // k \u662f\u952e\uff0cquery[k]  \u662f\u503c\n      // \u5982\u679c\u67e5\u8be2\u53c2\u6570\u6709\u4e2d\u6587\uff0c\u5c3d\u91cf\u8f6c\u4e3a ASCII \u7801\n      str += "&" + k + "=" + encodeURI(query[k]);\n    }\n\n    // \u4e00\u5b9a\u8981\u5c11\u4e00\u4f4d\n    // str = str.slice(0, -1);\n  }\n\n  xhr.open(method, url + str);\n\n  // 2.1 \u76d1\u542c\u8bf7\u6c42\u7684\u72b6\u6001\n  xhr.onreadystatechange = function () {\n    if (xhr.readyState !== 4) return;\n    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {\n      const data = JSON.parse(xhr.response);\n      // if(callback) callback(data);\n      success && success(data);\n    }\n  };\n\n  let body = null;\n  if (method.toUpperCase() === "POST") {\n    // \u58f0\u660e\u8bf7\u6c42\u4f53\u7684\u9ed8\u8ba4MIME\u7c7b\u578b\n    // \u58f0\u660e\u952e\u548c\u503c\uff0c\u5206\u522b\u662f Content-Type:  application/x-www-form-urlencoded\n    xhr.setRequestHeader(\n      "Content-Type",\n      "application/x-www-form-urlencoded;charset=UTF-8"\n    );\n\n    body = "";\n    for (const k in data) {\n      // k \u662f\u952e\uff0cquery[k]  \u662f\u503c\n      // \u5982\u679c\u67e5\u8be2\u53c2\u6570\u6709\u4e2d\u6587\uff0c\u5c3d\u91cf\u8f6c\u4e3a ASCII \u7801\n      body += k + "=" + encodeURI(data[k]) + "&";\n    }\n    body = body.slice(0, -1);\n  }\n  // console.log(body);\n  // 3. \u53d1\u9001\u8bf7\u6c42\u643a\u5e26\u8bf7\u6c42\u4f53\n  xhr.send(body);\n}\n')))}u.isMDXComponent=!0}}]);