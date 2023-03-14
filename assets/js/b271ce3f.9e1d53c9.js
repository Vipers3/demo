"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1388],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>c});var l=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=l.createContext({}),i=function(e){var n=l.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=i(e.components);return l.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},d=l.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=i(t),c=a,k=d["".concat(p,".").concat(c)]||d[c]||u[c]||r;return t?l.createElement(k,o(o({ref:n},m),{},{components:t})):l.createElement(k,o({ref:n},m))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=d;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var i=2;i<r;i++)o[i]=t[i];return l.createElement.apply(null,o)}return l.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8949:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>i});var l=t(7462),a=(t(7294),t(3905));const r={sidebar_position:1},o="Node \u7b80\u4ecb",s={unversionedId:"Node/node\u7b80\u4ecb",id:"Node/node\u7b80\u4ecb",title:"Node \u7b80\u4ecb",description:"Node.js",source:"@site/docs/8.Node/1.node\u7b80\u4ecb.md",sourceDirName:"8.Node",slug:"/Node/node\u7b80\u4ecb",permalink:"/demo/docs/Node/node\u7b80\u4ecb",draft:!1,editUrl:"https://github.com/Vipers3/demo/docs/8.Node/1.node\u7b80\u4ecb.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Node",permalink:"/demo/docs/category/node"},next:{title:"\u5305\u7ba1\u7406\u5de5\u5177",permalink:"/demo/docs/Node/\u5305\u7ba1\u7406\u5668"}},p={},i=[{value:"Node.js",id:"nodejs",level:2},{value:"\u4f7f\u7528\u5b89\u88c5\u5de5\u5177 Nvm",id:"\u4f7f\u7528\u5b89\u88c5\u5de5\u5177-nvm",level:2},{value:"\u5b89\u88c5 node",id:"\u5b89\u88c5-node",level:4},{value:"Http \u670d\u52a1\u5668",id:"http-\u670d\u52a1\u5668",level:2},{value:"Node \u6a21\u5757\u5316\u89c4\u8303",id:"node-\u6a21\u5757\u5316\u89c4\u8303",level:2},{value:"\u5b9a\u4e49\u6a21\u5757",id:"\u5b9a\u4e49\u6a21\u5757",level:3},{value:"<code>exports  </code>",id:"exports--",level:4},{value:"<code>module.exports</code>",id:"moduleexports",level:4},{value:"\u5f15\u5165\u6a21\u5757",id:"\u5f15\u5165\u6a21\u5757",level:3},{value:"\u539f\u7406",id:"\u539f\u7406",level:3},{value:"ES \u6a21\u5757\u5316\u89c4\u8303",id:"es-\u6a21\u5757\u5316\u89c4\u8303",level:2},{value:"\u6838\u5fc3\u6a21\u5757",id:"\u6838\u5fc3\u6a21\u5757",level:2},{value:"\u7f13\u51b2\u533a buffer",id:"\u7f13\u51b2\u533a-buffer",level:3},{value:"\u5168\u5c40\u53d8\u91cf process",id:"\u5168\u5c40\u53d8\u91cf-process",level:3},{value:"\u5185\u7f6e\u6a21\u5757 path",id:"\u5185\u7f6e\u6a21\u5757-path",level:3},{value:"<code>path.resolve\uff08\uff09</code>",id:"pathresolve",level:4},{value:"<code>path.join()</code>",id:"pathjoin",level:4},{value:"<code>path.dirname()</code>",id:"pathdirname",level:4},{value:"<code>path.extname()</code>",id:"pathextname",level:4},{value:"\u5185\u7f6e\u6a21\u5757 url",id:"\u5185\u7f6e\u6a21\u5757-url",level:3},{value:"<code>url.parse</code>",id:"urlparse",level:4},{value:"fs\uff08File System\uff09",id:"fsfile-system",level:3},{value:"\u5f15\u5165 fs \u6a21\u5757",id:"\u5f15\u5165-fs-\u6a21\u5757",level:4},{value:"\u6587\u4ef6\u64cd\u4f5c",id:"\u6587\u4ef6\u64cd\u4f5c",level:4},{value:"<code>fs.writeFile()</code>",id:"fswritefile",level:4},{value:"<code>fs.readFile()</code>",id:"fsreadfile",level:4},{value:"<code>fs.unlink()</code>",id:"fsunlink",level:4},{value:"<code>fs.rename()</code>",id:"fsrename",level:4},{value:"<code>fs.exists()</code>",id:"fsexists",level:4},{value:"\u6587\u4ef6\u5939\u64cd\u4f5c",id:"\u6587\u4ef6\u5939\u64cd\u4f5c",level:4},{value:"<code>fs.mkdir()</code>",id:"fsmkdir",level:4},{value:"<code>fs.remove()</code>",id:"fsremove",level:4},{value:"<code>fs.rename()</code>",id:"fsrename-1",level:4},{value:"<code>fs.exist()</code>",id:"fsexist",level:4},{value:"<code>fs.stat()</code>",id:"fsstat",level:4}],m={toc:i};function u(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,l.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"node-\u7b80\u4ecb"},"Node \u7b80\u4ecb"),(0,a.kt)("h2",{id:"nodejs"},"Node.js"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u8fd0\u884c\u5728\u670d\u52a1\u5668\u7aef\u7684 js")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u7528\u6765\u7f16\u5199\u670d\u52a1\u5668")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u7279\u70b9\uff1a - \u5355\u7ebf\u7a0b\u3001\u5f02\u6b65\u3001\u975e\u963b\u585e - \u7edf\u4e00 API"),(0,a.kt)("p",{parentName:"li"},"node.js \u548c JavaScript \u6709\u4ec0\u4e48\u533a\u522b"),(0,a.kt)("p",{parentName:"li"},"ECMAScript\uff08node \u6709\uff09 DOM\uff08node \u6ca1\u6709\uff09 BOM\uff08node \u6ca1\u6709\uff09"))),(0,a.kt)("h2",{id:"\u4f7f\u7528\u5b89\u88c5\u5de5\u5177-nvm"},"\u4f7f\u7528\u5b89\u88c5\u5de5\u5177 Nvm"),(0,a.kt)("p",null,"\u9664\u4e86\u76f4\u63a5\u5b89\u88c5\u5916\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7\u5b89\u88c5\u5de5\u5177\u6765\u5b89\u88c5\uff0c\u4f7f\u7528\u5b89\u88c5\u5de5\u5177\u5b89\u88c5\u540e\u66f4\u65b9\u4fbf\u6211\u4eec\u5728\u4e0d\u540c\u7684 node \u7248\u672c\u4e4b\u95f4\u8fdb\u884c\u5207\u6362\uff0c\u4f7f\u7528\u8d77\u6765\u66f4\u52a0\u7075\u6d3b\u3002\n\u8fd9\u91cc\u6211\u4eec\u4ee5 window \u4e0b\u7684 nvm \u4e3a\u4f8b\u6765\u6f14\u793a\uff0c\u9996\u5148\u70b9\u51fb ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/coreybutler/nvm-windows/releases"},"\u5b89\u88c5 nvm"),"\uff0c \u4e0b\u8f7d\u6700\u65b0\u7248\u7684 nvm-setup.exe\u3002\u6839\u636e\u63d0\u793a\u4e0b\u4e00\u6b65\u4e0b\u4e00\u6b65\u5373\u53ef\uff0c\u540c\u6837\u63a8\u8350\u5b89\u88c5\u5230\u9ed8\u8ba4\u8def\u5f84\u3002\u5728\u547d\u4ee4\u884c\u4e2d\u8f93\u5165 nvm version \u540e\uff0c\u51fa\u73b0\u7248\u672c\u5373\u8868\u793a\u5b89\u88c5\u6210\u529f\u3002"),(0,a.kt)("h4",{id:"\u5b89\u88c5-node"},"\u5b89\u88c5 node"),(0,a.kt)("p",null,"\u8f93\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"nvm install latest")," \u4e0b\u8f7d\u5e76\u5b89\u88c5\u6700\u65b0\u7248\u7684 node"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(2410).Z,width:"584",height:"173"})),(0,a.kt)("p",null,"\u8f93\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"nvm use latest")," \u5207\u6362\u5230\u6700\u65b0\u7248 node\uff0c\u8f93\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"nvm use lts")," \u5207\u6362\u5230\u7a33\u5b9a\u7248 node\uff0c\u4e5f\u53ef\u4ee5\u8f93\u5165\u7248\u672c\u53f7\u6765\u5207\u6362\u5230\u6307\u5b9a\u7248\u672c\u3002\n",(0,a.kt)("img",{src:t(697).Z,width:"341",height:"190"})),(0,a.kt)("h2",{id:"http-\u670d\u52a1\u5668"},"Http \u670d\u52a1\u5668"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// \u5f15\u5165\u5185\u7f6e\u6a21\u5757 http\nlet http = require("http");\nlet server = http.createServer((req, res) => {\n  res.setHeader("Content-Type", "text/html;charset=utf-8");\n  //\u670d\u52a1\u5668\u7ed9\u6d4f\u89c8\u5668\u7684\u5185\u5bb9\n  res.write("hello world");\n  //\u544a\u8bc9\u6d4f\u89c8\u5668\u8fd4\u8fd8\u7ed3\u675f\u4e86\n  res.end();\n});\n// \u8bbe\u7f6e\u7aef\u53e3\u53f7\nserver.listen(8989);\n')),(0,a.kt)("h2",{id:"node-\u6a21\u5757\u5316\u89c4\u8303"},"Node \u6a21\u5757\u5316\u89c4\u8303"),(0,a.kt)("p",null,"\u5728 node \u4e2d\uff0c\u9ed8\u8ba4\u652f\u6301\u7684\u6a21\u5757\u5316\u89c4\u8303\u53eb\u505a CommonJS\u3002 \u5728 CommonJS \u4e2d\uff0c\u4e00\u4e2a js \u6587\u4ef6\u5c31\u662f\u4e00\u4e2a\u6a21\u5757"),(0,a.kt)("h3",{id:"\u5b9a\u4e49\u6a21\u5757"},"\u5b9a\u4e49\u6a21\u5757"),(0,a.kt)("p",null,"\u5728\u5b9a\u4e49\u6a21\u5757\u65f6\uff0c\u6a21\u5757\u4e2d\u7684\u5185\u5bb9\u9ed8\u8ba4\u662f\u4e0d\u80fd\u88ab\u5916\u90e8\u770b\u5230\u7684",(0,a.kt)("br",{parentName:"p"}),"\n","\u53ef\u4ee5\u901a\u8fc7 exports \u6765\u8bbe\u7f6e\u8981\u5411\u5916\u90e8\u66b4\u9732\u7684\u5185\u5bb9"),(0,a.kt)("p",null,"\u8bbf\u95ee exports \u7684\u65b9\u5f0f\u6709\u4e24\u79cd\uff1a"),(0,a.kt)("h4",{id:"exports--"},(0,a.kt)("inlineCode",{parentName:"h4"},"exports  ")),(0,a.kt)("h4",{id:"moduleexports"},(0,a.kt)("inlineCode",{parentName:"h4"},"module.exports")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5f53\u6211\u4eec\u5728\u5176\u4ed6\u6a21\u5757\u4e2d\u5f15\u5165\u5f53\u524d\u6a21\u5757\u65f6\uff0crequire \u51fd\u6570\u8fd4\u56de\u7684\u5c31\u662f exports"),(0,a.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u5c06\u5e0c\u671b\u66b4\u9732\u7ed9\u5916\u90e8\u6a21\u5757\u7684\u5185\u5bb9\u8bbe\u7f6e\u4e3a exports \u7684\u5c5e\u6027")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// \u53ef\u4ee5\u901a\u8fc7exports \u4e00\u4e2a\u4e00\u4e2a\u7684\u5bfc\u51fa\u503c\nexports.a = "\u5b59\u609f\u7a7a";\nexports.b = { name: "\u767d\u9aa8\u7cbe" };\nexports.c = function fn() {\n  console.log("\u54c8\u54c8");\n};\n\n// \u4e5f\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7module.exports\u540c\u65f6\u5bfc\u51fa\u591a\u4e2a\u503c\nmodule.exports = {\n  a: "\u54c8\u54c8",\n  b: [1, 3, 5, 7],\n  c: () => {\n    console.log(111);\n  },\n};\n')),(0,a.kt)("h3",{id:"\u5f15\u5165\u6a21\u5757"},"\u5f15\u5165\u6a21\u5757"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'\u4f7f\u7528 require("\u6a21\u5757\u7684\u8def\u5f84")\u51fd\u6570\u6765\u5f15\u5165\u6a21\u5757',(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5f15\u5165\u81ea\u5b9a\u4e49\u6a21\u5757\u65f6"),(0,a.kt)("li",{parentName:"ul"},"\u6a21\u5757\u540d\u8981\u4ee5./ \u6216 ../\u5f00\u5934 - \u6269\u5c55\u540d\u53ef\u4ee5\u7701\u7565",(0,a.kt)("br",{parentName:"li"}),"\u5728 CommonJS \u4e2d\uff0c\u5982\u679c\u7701\u7565\u7684 js \u6587\u4ef6\u7684\u6269\u5c55\u540d node\uff0c\u4f1a\u81ea\u52a8\u4e3a\u6587\u4ef6\u8865\u5168\u6269\u5c55\u540d",(0,a.kt)("inlineCode",{parentName:"li"},"./m1.js")," \u5982\u679c\u6ca1\u6709 js \u5b83\u4f1a\u5bfb\u627e ",(0,a.kt)("inlineCode",{parentName:"li"},"./m1.json "),(0,a.kt)("inlineCode",{parentName:"li"},"js --\x3e json --\x3e node\uff08\u7279\u6b8a\uff09")))),(0,a.kt)("li",{parentName:"ul"},"\u5f15\u5165\u6838\u5fc3\u6a21\u5757\u65f6",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u76f4\u63a5\u5199\u6838\u5fc3\u6a21\u5757\u7684\u540d\u5b57\u5373\u53ef"),(0,a.kt)("li",{parentName:"ul"},"\u4e5f\u53ef\u4ee5\u5728\u6838\u5fc3\u6a21\u5757\u524d\u6dfb\u52a0 node:")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const m1 = require("./m1");\n// const path = require("path")\nconst path = require("node:path");\n\nconst m2 = require("./m2.cjs");\n\nconst hello = require("./hello"); // ./hello/index.jsx\n')),(0,a.kt)("h3",{id:"\u539f\u7406"},"\u539f\u7406"),(0,a.kt)("p",null,"\u6240\u6709\u7684 CommonJS \u7684\u6a21\u5757\u90fd\u4f1a\u88ab\u5c01\u88c5\u5230\u4e00\u4e2a\u51fd\u6570\u4e2d"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"(function (exports, require, module, __filename, __dirname) {\n  \u6a21\u5757\u4ee3\u7801\u4f1a\u88ab\u653e\u5230\u8fd9\u91cc;\n});\n\nconsole.log(__filename); // __filename\u8868\u793a\u5f53\u524d\u6a21\u5757\u7684\u7edd\u5bf9\u8def\u5f84\n\nconsole.log(__dirname); // \u5f53\u6a21\u5757\u6240\u5728\u76ee\u5f55\u7684\u8def\u5f84\n")),(0,a.kt)("h2",{id:"es-\u6a21\u5757\u5316\u89c4\u8303"},"ES \u6a21\u5757\u5316\u89c4\u8303"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cnode \u4e2d\u7684\u6a21\u5757\u5316\u6807\u51c6\u662f CommonJS"),(0,a.kt)("p",null,"\u8981\u60f3\u4f7f\u7528 ES \u7684\u6a21\u5757\u5316\uff0c\u53ef\u4ee5\u91c7\u7528\u4ee5\u4e0b\u4e24\u79cd\u65b9\u6848"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528 mjs \u4f5c\u4e3a\u6269\u5c55\u540d"),(0,a.kt)("li",{parentName:"ol"},"\u4fee\u6539 package.json \u5c06\u6a21\u5757\u5316\u89c4\u8303\u8bbe\u7f6e\u4e3a ES \u6a21\u5757",(0,a.kt)("br",{parentName:"li"}),'\u5f53\u6211\u4eec\u8bbe\u7f6e "type": "module" \u5f53\u524d\u9879\u76ee\u4e0b\u6240\u6709\u7684 js \u6587\u4ef6\u90fd\u9ed8\u8ba4\u4e3a es module')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// \u5bfc\u5165m4\u6a21\u5757\uff0ces\u6a21\u5757\u4e0d\u80fd\u7701\u7565\u6269\u5c55\u540d\uff08\u5b98\u65b9\u6807\u51c6\uff09\nimport { a, b, c } from "./m4.mjs";\n\n// \u901a\u8fc7as\u6765\u6307\u5b9a\u522b\u540d\nimport { a as hello, b, c } from "./m4.mjs";\n\n// \u5f00\u53d1\u65f6\u8981\u5c3d\u91cf\u907f\u514dimport * \u60c5\u51b5\nimport * as m4 from "./m4.mjs";\n\n// console.log(m4.c)\n\n// \u5bfc\u5165\u6a21\u5757\u7684\u9ed8\u8ba4\u5bfc\u51fa\n// \u9ed8\u8ba4\u5bfc\u51fa\u7684\u5185\u5bb9\uff0c\u53ef\u4ee5\u968f\u610f\u547d\u540d\nimport sum, { a } from "./m4.mjs";\n')),(0,a.kt)("h2",{id:"\u6838\u5fc3\u6a21\u5757"},"\u6838\u5fc3\u6a21\u5757"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6838\u5fc3\u6a21\u5757\uff0c\u662f node \u4e2d\u81ea\u5e26\u7684\u6a21\u5757\uff0c\u53ef\u4ee5\u5728 node \u4e2d\u76f4\u63a5\u4f7f\u7528"),(0,a.kt)("li",{parentName:"ul"},"window \u662f\u6d4f\u89c8\u5668\u7684\u5bbf\u4e3b\u5bf9\u8c61 node \u4e2d\u662f\u6ca1\u6709\u7684"),(0,a.kt)("li",{parentName:"ul"},"global \u662f node \u4e2d\u7684\u5168\u5c40\u5bf9\u8c61\uff0c\u4f5c\u7528\u7c7b\u4f3c\u4e8e window"),(0,a.kt)("li",{parentName:"ul"},"ES \u6807\u51c6\u4e0b\uff0c\u5168\u5c40\u5bf9\u8c61\u7684\u6807\u51c6\u540d\u5e94\u8be5\u662f globalThis")),(0,a.kt)("h3",{id:"\u7f13\u51b2\u533a-buffer"},"\u7f13\u51b2\u533a buffer"),(0,a.kt)("p",null,"\u4e8c\u8fdb\u5236\u6570\u636e\u7ed3\u6784"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u521b\u5efa buffer")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"let b = Buffer.alloc(10);\nconsole.log(b);\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u628a\u5b57\u7b26\u4e32\u8f6c\u6362\u6210 buffer")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'b = Buffer.from("\u5927\u5bb6\u597d");\nconsole.log(b);\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u66f4\u5feb\u901f\u7684\u521b\u5efa buffer")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"b = Buffer.allocUnsafe(10);\nconsole.log(b);\nb.fill(1);\nconsole.log(b);\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5c06 buffer \u8f6c\u6362\u4e3a\u5b57\u7b26\u4e32")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'b = Buffer.from("\u5927\u5bb6\u597d");\nconsole.log(b);\nvar res = b.toString();\nconsole.log(res);\n')),(0,a.kt)("h3",{id:"\u5168\u5c40\u53d8\u91cf-process"},"\u5168\u5c40\u53d8\u91cf process"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u8868\u793a\u5f53\u524d\u7684 node \u8fdb\u7a0b")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u901a\u8fc7\u8be5\u5bf9\u8c61\u53ef\u4ee5\u83b7\u53d6\u8fdb\u7a0b\u7684\u4fe1\u606f\uff0c\u6216\u8005\u5bf9\u8fdb\u7a0b\u505a\u5404\u79cd\u64cd\u4f5c")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5982\u4f55\u4f7f\u7528"),(0,a.kt)("p",{parentName:"li"},"process \u662f\u4e00\u4e2a\u5168\u5c40\u53d8\u91cf\uff0c\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528",(0,a.kt)("br",{parentName:"p"}),"\n","",(0,a.kt)("inlineCode",{parentName:"p"},"process.exit()")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u7ed3\u675f\u5f53\u524d\u8fdb\u7a0b\uff0c\u7ec8\u6b62 node")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"}," process.nextTick(callback[, \u2026args])")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5c06\u51fd\u6570\u63d2\u5165\u5230 tick \u961f\u5217\u4e2d"),(0,a.kt)("li",{parentName:"ul"},"tick \u961f\u5217\u4e2d\u7684\u4ee3\u7801\uff0c\u4f1a\u5728\u4e0b\u4e00\u6b21\u4e8b\u4ef6\u5faa\u73af\u4e4b\u524d\u6267\u884c\n\u4f1a\u5728\u5fae\u4efb\u52a1\u961f\u5217\u548c\u5b8f\u4efb\u52a1\u961f\u5217\u4e2d\u4efb\u52a1\u4e4b\u524d\u6267\u884c")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"setTimeout(() => {\n  console.log(1); // \u5b8f\u4efb\u52a1\u961f\u5217\n});\n\nqueueMicrotask(() => {\n  console.log(2);\n}); // \u5fae\u4efb\u52a1\u961f\u5217\n\nPromise.resolve().then((result) => {\n  console.log(5);\n}); //\u5fae\u4efb\u52a1\u961f\u5217\n\nprocess.nextTick(() => {\n  console.log(3); // tick\u961f\u5217\n});\n\nconsole.log(4); // \u8c03\u7528\u6808\n")),(0,a.kt)("p",null,"nodejs \u548c\u8def\u5f84\u6709\u5173\u7684\u9884\u5b9a\u4e49\u53d8\u91cf",(0,a.kt)("br",{parentName:"p"}),"\n","",(0,a.kt)("inlineCode",{parentName:"p"},"process.argv")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f nodejs \u6267\u884c\u6587\u4ef6\u7684\u8def\u5f84\u5730\u5740"),(0,a.kt)("li",{parentName:"ul"},"\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u6267\u884c\u6587\u4ef6\u7684\u8def\u5f84\u5730\u5740")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"console.log(process.argv);\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u9879\u53ef\u4ee5\u7b80\u5199")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"console.log(process.argv0);\nconsole.log(process.argv[1]);\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"process.cwd()"),"\n\u83b7\u53d6\u547d\u4ee4\u6267\u884c\u7684\u8def\u5f84"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"console.log(process.cwd());\n")),(0,a.kt)("p",null,"2 \u4e2a\u8def\u5f84\u7684\u5168\u5c40\u53d8\u91cf",(0,a.kt)("br",{parentName:"p"}),"\n","",(0,a.kt)("inlineCode",{parentName:"p"},"__filename")," \u6267\u884c\u6587\u4ef6\u7684\u8def\u5f84\u5730\u5740",(0,a.kt)("br",{parentName:"p"}),"\n","",(0,a.kt)("inlineCode",{parentName:"p"},"__dirname")," \u6267\u884c\u6587\u4ef6\u4e0a\u5c42\u76ee\u5f55\u7684\u8def\u5f84"),(0,a.kt)("h3",{id:"\u5185\u7f6e\u6a21\u5757-path"},"\u5185\u7f6e\u6a21\u5757 path"),(0,a.kt)("h4",{id:"pathresolve"},(0,a.kt)("inlineCode",{parentName:"h4"},"path.resolve\uff08\uff09")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7528\u6765\u751f\u6210\u4e00\u4e2a\u7edd\u5bf9\u8def\u5f84 -\u5728\u8ba1\u7b97\u672c\u5730"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u76f4\u63a5\u8c03\u7528 resolve\uff0c\u5219\u8fd4\u56de\u5f53\u524d\u7684\u5de5\u4f5c\u76ee\u5f55",(0,a.kt)("inlineCode",{parentName:"li"},"e:\\Download\\vs code\\code ")),(0,a.kt)("li",{parentName:"ul"},"\u6ce8\u610f\uff0c\u6211\u4eec\u901a\u8fc7\u4e0d\u540c\u65b9\u5f0f\u6267\u884c\u4ee3\u7801\u65f6\uff0c\u5b83\u7684\u5de5\u4f5c\u76ee\u5f55\u6709\u53ef\u80fd\u53d1\u751f\u53d8\u5316\u7684"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u5c06\u4e00\u4e2a\u76f8\u5bf9\u8def\u5f84\u4f5c\u4e3a\u53c2\u6570\uff0c",(0,a.kt)("br",{parentName:"li"}),"\u5219 resolve \u4f1a\u81ea\u52a8\u5c06\u5176\u8f6c\u6362\u4e3a\u7edd\u5bf9\u8def\u5f84",(0,a.kt)("br",{parentName:"li"}),"\u6b64\u65f6\u6839\u636e\u5de5\u4f5c\u76ee\u5f55\u7684\u4e0d\u540c\uff0c\u5b83\u6240\u4ea7\u751f\u7684\u7edd\u5bf9\u8def\u5f84\u4e5f\u4e0d\u540c"),(0,a.kt)("li",{parentName:"ul"},"\u4e00\u822c\u4f1a\u5c06\u4e00\u4e2a\u7edd\u5bf9\u8def\u5f84\u4f5c\u4e3a\u7b2c\u4e00\u4e2a\u53c2\u6570\uff0c",(0,a.kt)("br",{parentName:"li"}),"\u4e00\u4e2a\u76f8\u5bf9\u8def\u5f84\u4f5c\u4e3a\u7b2c\u4e8c\u4e2a\u53c2\u6570",(0,a.kt)("br",{parentName:"li"}),"\u8fd9\u6837\u5b83\u4f1a\u81ea\u52a8\u8ba1\u7b97\u51fa\u6700\u7ec8\u7684\u8def\u5f84")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const path = require("node:path");\n//\u4ee5\u540e\u4f7f\u7528\u8def\u5f84\u65f6\uff0c\u5c3d\u91cf\u901a\u8fc7path.resolve\uff08\uff09\u6765\u751f\u6210\u8def\u5f84\nconst result = path.resolve(__dirname, "./hello.js");\nconsole.log(result);\n')),(0,a.kt)("h4",{id:"pathjoin"},(0,a.kt)("inlineCode",{parentName:"h4"},"path.join()")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5408\u5e76\u5904\u7406\u591a\u4e2a\u8def\u5f84"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u4f1a\u751f\u6210\u4e00\u4e2a\u7edd\u5bf9\u8def\u5f84")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const path = require("path");\nconst myurl = path.join("./test", "./myindex/../mytest//hello", "index.html");\nconsole.log(myurl);\n')),(0,a.kt)("h4",{id:"pathdirname"},(0,a.kt)("inlineCode",{parentName:"h4"},"path.dirname()")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u83b7\u53d6\u8def\u5f84\u4e2d\u5230\u6587\u4ef6\u5939\u90e8\u5206\u7684\u5185\u5bb9")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const path = require("path");\nmyurl = "http://www.baidu.com/index/test/index.jsx";\nlet res = path.dirname(myurl);\nconsole.log(res);\n')),(0,a.kt)("h4",{id:"pathextname"},(0,a.kt)("inlineCode",{parentName:"h4"},"path.extname()")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u8def\u5f84\u91cc\u7684\u6587\u4ef6\u540e\u7f00")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const path = require("path");\nmyurl = "http://www.baidu.com/index/test/index.jsx";\nres = path.extname(myurl);\nconsole.log(res);\n')),(0,a.kt)("h3",{id:"\u5185\u7f6e\u6a21\u5757-url"},"\u5185\u7f6e\u6a21\u5757 url"),(0,a.kt)("h4",{id:"urlparse"},(0,a.kt)("inlineCode",{parentName:"h4"},"url.parse")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u83b7\u53d6 url \u91cc\u7684 querystring \u53c2\u6570"),(0,a.kt)("li",{parentName:"ul"},"url.parse \u63d0\u4f9b\u7b2c\u4e8c\u4e2a\u53c2\u6570\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u53ef\u4ee5\u628a querystring \u5b57\u7b26\u4e32\u8f6c\u6210\u5bf9\u8c61")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'res = url.parse(myurl);\nmyurl = "http://localhost:3000/index/test/index.jsx?name=zhangsan&age=20#mystr";\nres = url.parse(myurl, true);\nconsole.log(res);\nconsole.log(res.query);\n')),(0,a.kt)("h3",{id:"fsfile-system"},"fs\uff08File System\uff09"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"fs \u7528\u6765\u5e2e\u52a9 node \u6765\u64cd\u4f5c\u78c1\u76d8\u4e2d\u7684\u6587\u4ef6"),(0,a.kt)("li",{parentName:"ul"},"\u6587\u4ef6\u64cd\u4f5c\u4e5f\u5c31\u662f\u6240\u8c13\u7684 I/O\uff0c input output"),(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528 fs \u6a21\u5757\uff0c\u540c\u6837\u9700\u8981\u5f15\u7528")),(0,a.kt)("h4",{id:"\u5f15\u5165-fs-\u6a21\u5757"},"\u5f15\u5165 fs \u6a21\u5757"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const fs = require("node:fs/promises");\n')),(0,a.kt)("h4",{id:"\u6587\u4ef6\u64cd\u4f5c"},"\u6587\u4ef6\u64cd\u4f5c"),(0,a.kt)("h4",{id:"fswritefile"},(0,a.kt)("inlineCode",{parentName:"h4"},"fs.writeFile()")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a\u6587\u4ef6")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5f02\u6b65\u521b\u5efa\u4e00\u4e2a\u6587\u4ef6"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},'fs.writeFile("./1.txt", "\u6211\u662f\u5199\u5165\u7684\u6587\u5b57\u5185\u5bb9", (err) => {\n  if (err) {\n    return console.log(err);\n  }\n  console.log("\u5199\u5165\u6210\u529f");\n});\nconsole.log("\u540c\u6b65\u4ee3\u7801\u4f1a\u5148\u6267\u884c");\n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u540c\u6b65\u521b\u5efa\u4e00\u4e2a\u6587\u4ef6"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},'try {\n  fs.writeFileSync("./1.txt", "\u6211\u662f\u5199\u5165\u7684\u6587\u5b57\u5185\u5bb9");\n  console.log("\u521b\u5efa\u6210\u529f");\n} catch (err) {\n  console.log(err);\n}\n')))),(0,a.kt)("h4",{id:"fsreadfile"},(0,a.kt)("inlineCode",{parentName:"h4"},"fs.readFile()")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u8bfb\u53d6\u4e00\u4e2a\u6587\u4ef6")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5f02\u6b65\u8bfb\u53d6\u6587\u4ef6"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},'fs.readFile("./1.txt", (err, data) => {\n  if (err) {\n    return console.log(err);\n  }\n  console.log(data.toString());\n});\n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u540c\u6b65\u8bfb\u53d6\u6587\u4ef6"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},'try {\n  var data = fs.readFileSync("./1.txt");\n  console.log(data.toString());\n} catch (err) {\n  console.log(err);\n}\n')))),(0,a.kt)("h4",{id:"fsunlink"},(0,a.kt)("inlineCode",{parentName:"h4"},"fs.unlink()")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5220\u9664\u6587\u4ef6")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4e0d\u80fd\u91cd\u590d\u5220\u9664")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4ee3\u7801\u5220\u9664\u7684\u5185\u5bb9\u4e0d\u4f1a\u8fdb\u5165\u56de\u6536\u7ad9\uff1b \u5c0f\u5fc3 \u628a\u91cd\u8981\u7684\u4ee3\u7801\u5907\u4efd\uff0c\u6216\u8005\u591a\u63d0\u4ea4 git")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5f02\u6b65\u5220\u9664\u6587\u4ef6"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},'fs.unlink("./1.txt", (err) => {\n  if (err) {\n    return console.log(err);\n  }\n  console.log("\u5220\u9664\u6210\u529f");\n});\n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u540c\u6b65\u5220\u9664\u6587\u4ef6"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},'try {\n  fs.unlinkSync("./1.txt");\n  console.log("\u5220\u9664\u6210\u529f");\n} catch (err) {\n  console.log(err);\n}\n')))),(0,a.kt)("h4",{id:"fsrename"},(0,a.kt)("inlineCode",{parentName:"h4"},"fs.rename()")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4fee\u6539\u6587\u4ef6\u540d")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5f02\u6b65\u4fee\u6539\u6587\u4ef6\u540d"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},'fs.rename("./1.html", "./2.html", (err) => {\n  if (err) {\n    return console.log(err);\n  }\n  console.log("\u4fee\u6539\u6210\u529f");\n});\n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u540c\u6b65\u4fee\u6539\u6587\u4ef6\u540d"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},'try {\n  fs.rename("./1.html", "./2.html");\n  console.log("\u4fee\u6539\u6210\u529f");\n} catch (err) {\n  console.log(err);\n}\n')))),(0,a.kt)("h4",{id:"fsexists"},(0,a.kt)("inlineCode",{parentName:"h4"},"fs.exists()")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5224\u65ad\u67d0\u4e2a\u6587\u4ef6\u662f\u5426\u5b58\u5728")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u540c\u6b65\u5224\u65ad"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},'if (fs.existsSync("./1.txt")) {\n  // \u5982\u679c\u91cd\u590d\u6267\u884c\u5c31\u4f1a\u62a5\u9519\n  fs.unlinkSync("./1.txt");\n} else {\n  console.log("\u6587\u4ef6\u5df2\u7ecf\u88ab\u5220\u9664\u4e86");\n}\n')))),(0,a.kt)("h4",{id:"\u6587\u4ef6\u5939\u64cd\u4f5c"},"\u6587\u4ef6\u5939\u64cd\u4f5c"),(0,a.kt)("h4",{id:"fsmkdir"},(0,a.kt)("inlineCode",{parentName:"h4"},"fs.mkdir()")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a\u76ee\u5f55")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5f02\u6b65\u521b\u5efa\u4e00\u4e2a\u76ee\u5f55"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},'fs.mkdir("./test", 0777, function (err) {\n  // \u7b2c\u4e8c\u4e2a\u53c2\u6570\uff1a\u7b2c\u4e00\u4f4d\u662f\u516b\u8fdb\u5236 \u7b2c\u4e8c\u4f4d\u662f\u6240\u6709\u8005\u6743\u9650 \u7b2c\u4e09\u4f4d\u662f\u7ec4\u6743\u9650 \u7b2c\u56db\u4f4d\u662f\u6240\u6709\u4eba\n  // 7 \u6ee1\u6743\u9650 7=1\uff08\u53ef\u6267\u884c\uff09+2\uff08\u53ef\u5199\uff09+4\uff08\u53ef\u8bfb\uff09\n  if (err) {\n    return console.log(err);\n  }\n  console.log("\u521b\u5efa\u6210\u529f");\n});\n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u540c\u6b65\u521b\u5efa\u4e00\u4e2a\u76ee\u5f55"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},'try {\n  fs.mkdirSync("./mytest", 0777);\n  console.log("\u521b\u5efa\u6210\u529f");\n} catch (err) {\n  console.log(err);\n}\n')))),(0,a.kt)("h4",{id:"fsremove"},(0,a.kt)("inlineCode",{parentName:"h4"},"fs.remove()")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5220\u9664\u4e00\u4e2a\u76ee\u5f55"),(0,a.kt)("li",{parentName:"ul"},"\u6ce8\u610f\uff1a\u5220\u9664\u76ee\u5f55\u53ea\u80fd\u5220\u9664\u7a7a\u76ee\u5f55"),(0,a.kt)("li",{parentName:"ul"},"\u5220\u9664\u4e4b\u540e\u4e0d\u8fdb\u5165\u56de\u6536\u7ad9\uff0c\u76f4\u63a5\u5220\u9664"),(0,a.kt)("li",{parentName:"ul"},"\u5f02\u6b65\u5220\u9664\u4e00\u4e2a\u76ee\u5f55",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},'fs.rmdir("./test", 0777, function (err) {\n  if (err) {\n    return console.log(err);\n  }\n  console.log("\u5220\u9664\u6210\u529f");\n});\n'))),(0,a.kt)("li",{parentName:"ul"},"\u540c\u6b65\u5220\u9664\u4e00\u4e2a\u76ee\u5f55",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},'try {\n  fs.rmdirSync("./mytest", 0777);\n  console.log("\u5220\u9664\u6210\u529f");\n} catch (err) {\n  console.log(err);\n}\n')))),(0,a.kt)("h4",{id:"fsrename-1"},(0,a.kt)("inlineCode",{parentName:"h4"},"fs.rename()")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4fee\u6539\u76ee\u5f55\u7684\u540d\u5b57"),(0,a.kt)("li",{parentName:"ul"},"\u5f02\u6b65\u4fee\u6539",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},'fs.rename("./mytest", "./mytest2", (err) => {\n  if (err) {\n    return console.log(err);\n  }\n  console.log("\u4fee\u6539\u6210\u529f");\n});\n'))),(0,a.kt)("li",{parentName:"ul"},"\u540c\u6b65\u4fee\u6539",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},'try {\n  fs.renameSync("./mytest", "./mytest2");\n  console.log("\u4fee\u6539\u6210\u529f");\n} catch (err) {\n  console.log(err);\n}\n')))),(0,a.kt)("h4",{id:"fsexist"},(0,a.kt)("inlineCode",{parentName:"h4"},"fs.exist()")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5224\u65ad\u67d0\u4e2a\u76ee\u5f55\u662f\u5426\u5b58\u5728")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5982\u679c\u6ca1\u6709 uploads \u76ee\u5f55\u90a3\u4e48\u5c31\u521b\u5efa uploads \u76ee\u5f55\u51fa\u6765"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},'if (!fs.existSync("./uploads")) {\n  try {\n    fs.mkdirSync("./uploads", 0777);\n  } catch (err) {\n    console.log(err);\n  }\n} else {\n  console.log("\u5df2\u7ecf\u521b\u5efa\u8fc7\u4e86");\n}\n')))),(0,a.kt)("h4",{id:"fsstat"},(0,a.kt)("inlineCode",{parentName:"h4"},"fs.stat()")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u8be5\u8def\u5f84\u7684\u8be6\u7ec6\u4fe1\u606f"),(0,a.kt)("li",{parentName:"ul"},"\u5224\u65ad\u67d0\u4e2a\u6587\u4ef6\u662f\u4e0d\u662f\u76ee\u5f55",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// 1.\u83b7\u53d6\u8be5\u8def\u5f84\u7684\u8be6\u7ec6\u4fe1\u606f\nlet stat = fs.statSync(urlstr);\nconsole.log(stat);\n// 2.\u901a\u8fc7\u8be6\u7ec6\u4fe1\u606f\u5bf9\u8c61\u5224\u65ad\u662f\u5426\u662f\u4e00\u4e2a\u6587\u4ef6\u5939\nif (stat.isDirectory()) {\n  console.log("\u662f\u6587\u4ef6\u5939\u6216\u8005\u662f\u76ee\u5f55,Directory");\n} else {\n  console.log("\u662f\u6587\u4ef6,file");\n}\n')))))}u.isMDXComponent=!0},2410:(e,n,t)=>{t.d(n,{Z:()=>l});const l=t.p+"assets/images/02-0066e743a95049ff8cba471aaec64b51.png"},697:(e,n,t)=>{t.d(n,{Z:()=>l});const l=t.p+"assets/images/03-283f5ff01fc21e3d5f4e63d81677f764.png"}}]);