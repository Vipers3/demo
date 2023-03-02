"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7179],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>k});var l=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},o=Object.keys(e);for(l=0;l<o.length;l++)t=o[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)t=o[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=l.createContext({}),i=function(e){var n=l.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=i(e.components);return l.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},c=l.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),c=i(t),k=a,m=c["".concat(p,".").concat(k)]||c[k]||s[k]||o;return t?l.createElement(m,r(r({ref:n},u),{},{components:t})):l.createElement(m,r({ref:n},u))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=c;var d={};for(var p in n)hasOwnProperty.call(n,p)&&(d[p]=n[p]);d.originalType=e,d.mdxType="string"==typeof e?e:a,r[1]=d;for(var i=2;i<o;i++)r[i]=t[i];return l.createElement.apply(null,r)}return l.createElement.apply(null,t)}c.displayName="MDXCreateElement"},1593:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>s,frontMatter:()=>o,metadata:()=>d,toc:()=>i});var l=t(7462),a=(t(7294),t(3905));const o={sidebar_position:5},r="mongodb",d={unversionedId:"Node/mongoDB",id:"Node/mongoDB",title:"mongodb",description:"\u7b80\u4ecb",source:"@site/docs/8.Node/5.mongoDB.md",sourceDirName:"8.Node",slug:"/Node/mongoDB",permalink:"/demo/docs/Node/mongoDB",draft:!1,editUrl:"https://github.com/Vipers3/demo/docs/8.Node/5.mongoDB.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Ajax",permalink:"/demo/docs/Node/Ajax"},next:{title:"mongoose",permalink:"/demo/docs/Node/mongoose"}},p={},i=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u4e0b\u8f7d\u5b89\u88c5",id:"\u4e0b\u8f7d\u5b89\u88c5",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u4e09\u4e2a\u91cd\u8981\u6982\u5ff5",id:"\u4e09\u4e2a\u91cd\u8981\u6982\u5ff5",level:3},{value:"\u5e38\u7528\u547d\u4ee4",id:"\u5e38\u7528\u547d\u4ee4",level:3},{value:"\u6570\u636e\u5e93\u96c6\u5408\u547d\u4ee4",id:"\u6570\u636e\u5e93\u96c6\u5408\u547d\u4ee4",level:4},{value:"\u6587\u6863\u547d\u4ee4",id:"\u6587\u6863\u547d\u4ee4",level:4},{value:"\u6761\u4ef6\u63a7\u5236",id:"\u6761\u4ef6\u63a7\u5236",level:4},{value:"\u8fd0\u7b97\u7b26",id:"\u8fd0\u7b97\u7b26",level:5},{value:"\u903b\u8f91\u6216",id:"\u903b\u8f91\u6216",level:5},{value:"\u6b63\u5219\u5339\u914d",id:"\u6b63\u5219\u5339\u914d",level:5},{value:"Mongoose",id:"mongoose",level:2},{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:3},{value:"\u4f5c\u7528",id:"\u4f5c\u7528",level:3},{value:"\u4f7f\u7528\u6d41\u7a0b",id:"\u4f7f\u7528\u6d41\u7a0b",level:3},{value:"\u6570\u636e\u7c7b\u578b",id:"\u6570\u636e\u7c7b\u578b",level:3},{value:"CURD",id:"curd",level:3},{value:"\u589e\u52a0",id:"\u589e\u52a0",level:4},{value:"\u5220\u9664",id:"\u5220\u9664",level:4},{value:"\u66f4\u65b0",id:"\u66f4\u65b0",level:4},{value:"\u67e5\u8be2",id:"\u67e5\u8be2",level:4},{value:"\u5b57\u6bb5(\u5c5e\u6027)\u7b5b\u9009",id:"\u5b57\u6bb5\u5c5e\u6027\u7b5b\u9009",level:5},{value:"\u6570\u636e\u6392\u5e8f",id:"\u6570\u636e\u6392\u5e8f",level:5},{value:"\u6570\u636e\u622a\u53d6",id:"\u6570\u636e\u622a\u53d6",level:5},{value:"\u5173\u7cfb\u578b\u6570\u636e\u5e93\uff08RDBS\uff09",id:"\u5173\u7cfb\u578b\u6570\u636e\u5e93rdbs",level:3},{value:"\u975e\u5173\u7cfb\u578b\u6570\u636e\u5e93\uff08NoSQL not only SQL \uff09",id:"\u975e\u5173\u7cfb\u578b\u6570\u636e\u5e93nosql-not-only-sql-",level:3}],u={toc:i};function s(e){let{components:n,...o}=e;return(0,a.kt)("wrapper",(0,l.Z)({},u,o,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mongodb"},"mongodb"),(0,a.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,a.kt)("p",null,"MongoDB \u662f\u4e3a\u5feb\u901f\u5f00\u53d1\u4e92\u8054\u7f51 Web \u5e94\u7528\u800c\u8bbe\u8ba1\u7684\u6570\u636e\u5e93\u7cfb\u7edf\uff0c\u5b98\u65b9\u5730\u5740 ",(0,a.kt)("a",{parentName:"p",href:"https://www.mongodb.com/"},"https://www.mongodb.com/")),(0,a.kt)("p",null,"\u6570\u636e\u5e93\uff08DataBase\uff09\u662f\u6309\u7167\u6570\u636e\u7ed3\u6784\u6765\u7ec4\u7ec7\u3001\u5b58\u50a8\u548c\u7ba1\u7406\u6570\u636e\u7684\u4ed3\u5e93\u3002\u662f\u4e00\u4e2a\u5e94\u7528\u7a0b\u5e8f"),(0,a.kt)("h2",{id:"\u4e0b\u8f7d\u5b89\u88c5"},"\u4e0b\u8f7d\u5b89\u88c5"),(0,a.kt)("p",null,"\u4e0b\u8f7d\u5730\u5740 ",(0,a.kt)("a",{parentName:"p",href:"https://www.mongodb.com/download-center/community"},"https://www.mongodb.com/download-center/community")),(0,a.kt)("p",null,"\u4e00\u3001\u4e3a\u4e86\u65b9\u4fbf\u5728\u547d\u4ee4\u884c\u4e0b\u8fd0\u884c\uff0c\u53ef\u4ee5\u914d\u7f6e mongodb \u547d\u4ee4\u7684\u73af\u5883\u53d8\u91cf PATH"),(0,a.kt)("p",null,"\u6b64\u7535\u8111 -> \u5c5e\u6027 -> \u9ad8\u7ea7\u7cfb\u7edf\u8bbe\u7f6e -> \u73af\u5883\u53d8\u91cf -> \u53cc\u51fb Path -> \u65b0\u5efa -> \u8bbe\u7f6e mongod.exe \u6240\u5728\u6587\u4ef6\u5939\u8def\u5f84"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"C:\\Program Files\\MongoDB\\Server\\3.2\\bin\n")),(0,a.kt)("p",null,"\u4e8c\u3001\u521b\u5efa\u9ed8\u8ba4\u7684\u4ed3\u5e93\u6587\u4ef6\u5939"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"c:\\data\\db\n")),(0,a.kt)("p",null,"\u4e09\u3001\u6253\u5f00\u547d\u4ee4\u884c\u7a97\u53e3\u8f93\u5165\u300emongod\u300f\u542f\u52a8\u6570\u636e\u5e93\u670d\u52a1\u5668"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(5202).Z,width:"1113",height:"626"}),"\n\u56db\u3001\u53e6\u8d77\u4e00\u4e2a\u547d\u4ee4\u884c\u8fd0\u884c \u300emongo\u300f\n",(0,a.kt)("img",{src:t(5202).Z,width:"1113",height:"626"})),(0,a.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,a.kt)("h3",{id:"\u4e09\u4e2a\u91cd\u8981\u6982\u5ff5"},"\u4e09\u4e2a\u91cd\u8981\u6982\u5ff5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u670d\u52a1\u53ef\u4ee5\u521b\u5efa\u591a\u4e2a\u6570\u636e\u5e93"),(0,a.kt)("li",{parentName:"ul"},"\u6570\u636e\u5e93\uff08database\uff09 \u6570\u636e\u5e93\u662f\u4e00\u4e2a\u4ed3\u5e93\uff0c\u5728\u4ed3\u5e93\u4e2d\u53ef\u4ee5\u5b58\u653e\u96c6\u5408"),(0,a.kt)("li",{parentName:"ul"},"\u96c6\u5408\uff08collection\uff09 \u96c6\u5408\u7c7b\u4f3c\u4e8e JS \u4e2d\u7684\u6570\u7ec4\uff0c\u5728\u96c6\u5408\u4e2d\u53ef\u4ee5\u5b58\u653e\u6587\u6863"),(0,a.kt)("li",{parentName:"ul"},"\u6587\u6863\uff08document\uff09 \u6587\u6863\u6570\u636e\u5e93\u4e2d\u7684\u6700\u5c0f\u5355\u4f4d\uff0c\u7c7b\u4f3c\u4e8e JS \u4e2d\u7684\u5bf9\u8c61\uff0c\u5728 MongoDB \u4e2d\u6bcf\u4e00\u6761\u6570\u636e\u90fd\u662f\u4e00\u4e2a JS \u7684\u5bf9\u8c61")),(0,a.kt)("h3",{id:"\u5e38\u7528\u547d\u4ee4"},"\u5e38\u7528\u547d\u4ee4"),(0,a.kt)("h4",{id:"\u6570\u636e\u5e93\u96c6\u5408\u547d\u4ee4"},"\u6570\u636e\u5e93\u96c6\u5408\u547d\u4ee4"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u663e\u793a\u6240\u6709\u7684\u6570\u636e\u5e93")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"show dbs\nshow databases\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\uff08\u521b\u5efa\uff09\u5207\u6362\u5230\u6307\u5b9a\u7684\u6570\u636e\u5e93")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"use \u6570\u636e\u5e93\u540d\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"\u663e\u793a\u5f53\u524d\u6240\u5728\u7684\u6570\u636e\u5e93")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"db\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"\u5220\u9664\u5f53\u524d\u6570\u636e\u5e93\uff08\u5148\u5207\u6362\u518d\u5220\u9664\uff09")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"use project_1\ndb.dropDatabase()\n")),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"\u663e\u793a\u5f53\u524d\u6570\u636e\u5e93\u4e2d\u7684\u6240\u6709\u96c6\u5408")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"db.createCollection('books');\nshow collections\n")),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},"\u5220\u9664\u5f53\u524d\u96c6\u5408")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"db.collection.drop();\n")),(0,a.kt)("ol",{start:7},(0,a.kt)("li",{parentName:"ol"},"\u91cd\u547d\u540d\u96c6\u5408")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'db.collection.renameCollection("newName");\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u64cd\u4f5c\u96c6\u5408\u65f6\uff0c\u5982\u679c\u96c6\u5408\u4e0d\u5b58\u5728\u5219\u4f1a\u81ea\u52a8\u521b\u5efa\u96c6\u5408")),(0,a.kt)("h4",{id:"\u6587\u6863\u547d\u4ee4"},"\u6587\u6863\u547d\u4ee4"),(0,a.kt)("p",null,"1\uff09\u63d2\u5165\u6587\u6863"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"db.collection.insert(\u6587\u6863\u5bf9\u8c61);\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u67e5\u8be2\u6587\u6863")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"db.collection.find(\u67e5\u8be2\u6761\u4ef6)\ndb.collection.findOne(\u67e5\u8be2\u6761\u4ef6)\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"\u66f4\u65b0\u6587\u6863")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'db.collection.update(\u67e5\u8be2\u6761\u4ef6, \u65b0\u7684\u6587\u6863);\n// \u66f4\u65b0\u4e00\u4e2a\ndb.collection.updateOne(\u67e5\u8be2\u6761\u4ef6, \u8981\u66f4\u65b0\u7684\u5185\u5bb9);\n// \u6279\u91cf\u66f4\u65b0\ndb.collection.updateMany(\u67e5\u8be2\u6761\u4ef6, \u8981\u66f4\u65b0\u7684\u5185\u5bb9);\n//eg\ndb.students.update({ name: "xiaohigh" }, { $set: { age: 19 } });\n')),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"\u5220\u9664\u96c6\u5408\u4e2d\u7684\u6587\u6863")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"db.collection.remove(\u67e5\u8be2\u6761\u4ef6)\n")),(0,a.kt)("h4",{id:"\u6761\u4ef6\u63a7\u5236"},"\u6761\u4ef6\u63a7\u5236"),(0,a.kt)("h5",{id:"\u8fd0\u7b97\u7b26"},"\u8fd0\u7b97\u7b26"),(0,a.kt)("p",null,"\u5728 mongodb \u4e0d\u80fd > < >= <= !== \u7b49\u8fd0\u7b97\u7b26\uff0c\u9700\u8981\u4f7f\u7528\u66ff\u4ee3\u7b26\u53f7"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},">")," \u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"$gt")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<")," \u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"$lt")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},">=")," \u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"$gte")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<=")," \u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"$lte")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"!==")," \u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"$ne"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# \u67e5\u8be2\u4ef7\u683c\u5c0f\u4e8e 2000 \u7684\u624b\u673a\ndb.phone.find({price: {$lt: 2000}})\n")),(0,a.kt)("h5",{id:"\u903b\u8f91\u6216"},"\u903b\u8f91\u6216"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$in")," \u6ee1\u8db3\u5176\u4e2d\u4e00\u4e2a\u5373\u53ef"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"db.students.find({age:{$in:[18,24,26]}}) //  /[aedf]/\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$or")," \u903b\u8f91\u6216\u7684\u60c5\u51b5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"db.students.find({ $or: [{ age: 18 }, { age: 24 }] });\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$and")," \u903b\u8f91\u4e0e\u7684\u60c5\u51b5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"db.students.find({$and: [{age: {$lt:20}}, {age: {$gt: 15}}]});\n")),(0,a.kt)("h5",{id:"\u6b63\u5219\u5339\u914d"},"\u6b63\u5219\u5339\u914d"),(0,a.kt)("p",null,"\u6761\u4ef6\u4e2d\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 JS \u7684\u6b63\u5219\u8bed\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"db.students.find({ name: /imissyou/ });\n")),(0,a.kt)("h2",{id:"mongoose"},"Mongoose"),(0,a.kt)("h3",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,a.kt)("p",null,"Mongoose \u662f\u4e00\u4e2a\u5bf9\u8c61\u6587\u6863\u6a21\u578b\uff08ODM\uff09\u5e93\uff0c\u5b83\u5bf9 Node \u539f\u751f\u7684 MongoDB \u6a21\u5757\u8fdb\u884c\u4e86\u8fdb\u4e00\u6b65\u7684\u4f18\u5316\u5c01\u88c5\uff0c\u5e76\u63d0\u4f9b\u4e86\u66f4\u591a\u7684\u529f\u80fd\u3002 \u5b98\u7f51 ",(0,a.kt)("a",{parentName:"p",href:"http://www.mongoosejs.net/"},"http://www.mongoosejs.net/")),(0,a.kt)("h3",{id:"\u4f5c\u7528"},"\u4f5c\u7528"),(0,a.kt)("p",null,"\u4f7f\u7528\u4ee3\u7801\u64cd\u4f5c mongodb \u6570\u636e\u5e93"),(0,a.kt)("h3",{id:"\u4f7f\u7528\u6d41\u7a0b"},"\u4f7f\u7528\u6d41\u7a0b"),(0,a.kt)("p",null,"\u4e00\u3001\u5b89\u88c5 mongoose"),(0,a.kt)("p",null,"\u5728\u547d\u4ee4\u884c\u4e0b\u4f7f\u7528 npm \u6216\u8005\u5176\u4ed6\u5305\u7ba1\u7406\u5de5\u5177\u5b89\u88c5\uff08cnpm yarn\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm install mongoose --save\n")),(0,a.kt)("p",null,"\u4e8c\u3001\u5f15\u5165\u5305"),(0,a.kt)("p",null,"\u5728\u8fd0\u884c\u6587\u4ef6\u4e2d\u5f15\u5165 mongoose"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'var mongoose = require("mongoose");\n')),(0,a.kt)("p",null,"\u4e09\u3001\u8fde\u63a5\u6570\u636e\u5e93"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'mongoose.connect("mongodb://127.0.0.1/data");\n')),(0,a.kt)("p",null,"\u56db\u3001\u76d1\u542c\u8fde\u63a5\u4e8b\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'mongoose.connection.on("open", function () {\n  //\u4e0b\u9762\u7f16\u5199\u6570\u636e\u5e93\u64cd\u4f5c\u4ee3\u7801\n\n  //\u4e94\u3001\u521b\u5efa\u6587\u6863\u7ed3\u6784\n  var SongSchema = new mongoose.Schema({\n    title: String, //\u6b4c\u540d\n    author: String, //\u6b4c\u624b\n  });\n\n  //\u516d\u3001\u521b\u5efa\u6587\u6863\u6a21\u578b\n  var SongModel = mongoose.model("songs", SongSchema);\n\n  //\u4e03\u3001\u4f7f\u7528\u6a21\u578b\u8fdb\u884c\u6587\u6863\u5904\u7406\uff08\u8fd9\u91cc\u4ee5\u589e\u52a0\u6570\u636e\u4e3a\u4f8b\uff09\n  SongModel.create(\n    { title: "\u91ce\u72fcdisco", author: "\u5b9d\u77f3gem" },\n    function (err, data) {\n      if (err) throw err; //\u8fd9\u91cc\u5224\u65ad\u9519\u8bef\n\n      //\u4e0b\u9762\u7f16\u5199\u521b\u5efa\u6210\u529f\u540e\u7684\u903b\u8f91\n      // ... ...\n\n      //\u516b\u3001\u5173\u95ed\u6570\u636e\u5e93\u8fde\u63a5\uff08\u53ef\u9009\uff0c\u4ee3\u7801\u4e0a\u7ebf\u4e4b\u540e\u4e00\u822c\u4e0d\u52a0\uff09\n      mongoose.connection.close();\n    }\n  );\n});\n')),(0,a.kt)("h3",{id:"\u6570\u636e\u7c7b\u578b"},"\u6570\u636e\u7c7b\u578b"),(0,a.kt)("p",null,"\u6587\u6863\u7ed3\u6784\u53ef\u9009\u7684\u5b57\u6bb5\u7c7b\u578b\u5217\u8868"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"String"),(0,a.kt)("li",{parentName:"ul"},"Number"),(0,a.kt)("li",{parentName:"ul"},"Array"),(0,a.kt)("li",{parentName:"ul"},"Date"),(0,a.kt)("li",{parentName:"ul"},"Buffer"),(0,a.kt)("li",{parentName:"ul"},"Boolean"),(0,a.kt)("li",{parentName:"ul"},"Mixed \u4efb\u610f\u7c7b\u578b\uff08\u4f7f\u7528 mongoose.Schema.Types.Mixed \u8bbe\u7f6e\uff09"),(0,a.kt)("li",{parentName:"ul"},"ObjectId"),(0,a.kt)("li",{parentName:"ul"},"Decimal128\uff084.3 \u7248\u672c\u540e\u52a0\u5165\uff09")),(0,a.kt)("h3",{id:"curd"},"CURD"),(0,a.kt)("p",null,"\u6570\u636e\u5e93\u7684\u57fa\u672c\u64cd\u4f5c\u5305\u62ec\u56db\u4e2a\uff0c\u589e\u52a0\uff08create\uff09\uff0c\u5220\u9664\uff08delete\uff09\uff0c\u4fee\u6539\uff08update\uff09\uff0c\u67e5\uff08read\uff09"),(0,a.kt)("h4",{id:"\u589e\u52a0"},"\u589e\u52a0"),(0,a.kt)("p",null,"\u63d2\u5165\u4e00\u6761"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'SongModel.create(\n  {\n    title: "\u7ed9\u6211\u4e00\u9996\u6b4c\u7684\u65f6\u95f4",\n    author: "Jay",\n  },\n  function (err, data) {\n    //\u9519\u8bef\n    console.log(err);\n    //\u63d2\u5165\u540e\u7684\u6570\u636e\u5bf9\u8c61\n    console.log(data);\n  }\n);\n')),(0,a.kt)("p",null,"\u6279\u91cf\u63d2\u5165"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'SongModel.insertMany(\n  [\n    {\n      title: "\u7ed9\u6211\u4e00\u9996\u6b4c\u7684\u65f6\u95f4",\n      author: "Jay",\n    },\n    {\n      title: "\u7231\u7b11\u7684\u773c\u775b",\n      author: "JJ Lin",\n    },\n    {\n      title: "\u7f18\u5206\u4e00\u9053\u6865",\n      author: "Leehom Wang",\n    },\n  ],\n  function (err, data) {\n    console.log(err);\n    console.log(data);\n  }\n);\n')),(0,a.kt)("h4",{id:"\u5220\u9664"},"\u5220\u9664"),(0,a.kt)("p",null,"\u5220\u9664\u4e00\u6761\u6570\u636e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'SongModel.deleteOne({ _id: "5dd65f32be6401035cb5b1ed" }, function (err, data) {\n  console.log(err);\n  console.log(data);\n});\n')),(0,a.kt)("p",null,"\u6279\u91cf\u5220\u9664"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'SongModel.deleteMany({ author: "Jay" }, function (err, data) {\n  console.log(err);\n  console.log(data);\n});\n')),(0,a.kt)("h4",{id:"\u66f4\u65b0"},"\u66f4\u65b0"),(0,a.kt)("p",null,"\u66f4\u65b0\u4e00\u6761\u6570\u636e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'SongModel.updateOne(\n  { author: "JJ Lin" },\n  { author: "\u6797\u4fca\u6770" },\n  function (err, data) {\n    console.log(err);\n    console.log(data);\n  }\n);\n')),(0,a.kt)("p",null,"\u6279\u91cf\u66f4\u65b0\u6570\u636e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'SongModel.updateMany(\n  { author: "Leehom Wang" },\n  { author: "\u738b\u529b\u5b8f" },\n  function (err, data) {\n    console.log(err);\n    console.log(data);\n  }\n);\n')),(0,a.kt)("h4",{id:"\u67e5\u8be2"},"\u67e5\u8be2"),(0,a.kt)("p",null,"\u67e5\u8be2\u4e00\u6761\u6570\u636e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'SongModel.findOne({ author: "\u738b\u529b\u5b8f" }, function (err, data) {\n  console.log(err);\n  console.log(data);\n});\n//\u6839\u636e id \u67e5\u8be2\u6570\u636e\nSongModel.findById("5dd662b5381fc316b44ce167", function (err, data) {\n  console.log(err);\n  console.log(data);\n});\n')),(0,a.kt)("p",null,"\u6279\u91cf\u67e5\u8be2\u6570\u636e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'//\u4e0d\u52a0\u6761\u4ef6\u67e5\u8be2\nSongModel.find(function (err, data) {\n  console.log(err);\n  console.log(data);\n});\n//\u52a0\u6761\u4ef6\u67e5\u8be2\nSongModel.find({ author: "\u738b\u529b\u5b8f" }, function (err, data) {\n  console.log(err);\n  console.log(data);\n});\n')),(0,a.kt)("h5",{id:"\u5b57\u6bb5\u5c5e\u6027\u7b5b\u9009"},"\u5b57\u6bb5(\u5c5e\u6027)\u7b5b\u9009"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"SongModel.find()\n  .select({ _id: 0, title: 1 })\n  .exec(function (err, data) {\n    console.log(data);\n  });\n")),(0,a.kt)("h5",{id:"\u6570\u636e\u6392\u5e8f"},"\u6570\u636e\u6392\u5e8f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"SongModel.find()\n  .sort({ hot: 1 })\n  .exec(function (err, data) {\n    console.log(data);\n  });\n")),(0,a.kt)("h5",{id:"\u6570\u636e\u622a\u53d6"},"\u6570\u636e\u622a\u53d6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"SongModel.find()\n  .skip(10)\n  .limit(10)\n  .exec(function (err, data) {\n    console.log(data);\n  });\n")),(0,a.kt)("h3",{id:"\u5173\u7cfb\u578b\u6570\u636e\u5e93rdbs"},"\u5173\u7cfb\u578b\u6570\u636e\u5e93\uff08RDBS\uff09"),(0,a.kt)("p",null,"\u4ee3\u8868\u6709\uff1aMySQL\u3001Oracle\u3001DB2\u3001SQL Server..."),(0,a.kt)("p",null,"\u7279\u70b9\uff1a\u5173\u7cfb\u7d27\u5bc6\uff0c\u90fd\u662f\u8868"),(0,a.kt)("p",null,"\u4f18\u70b9\uff1a"),(0,a.kt)("p",null,"1\u3001\u6613\u4e8e\u7ef4\u62a4\uff1a\u90fd\u662f\u4f7f\u7528\u8868\u7ed3\u6784\uff0c\u683c\u5f0f\u4e00\u81f4\uff1b"),(0,a.kt)("p",null,"2\u3001\u4f7f\u7528\u65b9\u4fbf\uff1a\u901a\u7528\uff0c\u53ef\u7528\u4e8e\u590d\u6742\u67e5\u8be2\uff1b"),(0,a.kt)("p",null,"3\u3001\u9ad8\u7ea7\u67e5\u8be2\uff1a\u53ef\u7528\u4e8e\u4e00\u4e2a\u8868\u4ee5\u53ca\u591a\u4e2a\u8868\u4e4b\u95f4\u975e\u5e38\u590d\u6742\u7684\u67e5\u8be2\u3002"),(0,a.kt)("p",null,"\u7f3a\u70b9\uff1a"),(0,a.kt)("p",null,"1\u3001\u8bfb\u5199\u6027\u80fd\u6bd4\u8f83\u5dee\uff0c\u5c24\u5176\u662f\u6d77\u91cf\u6570\u636e\u7684\u9ad8\u6548\u7387\u8bfb\u5199\uff1b"),(0,a.kt)("p",null,"2\u3001\u6709\u56fa\u5b9a\u7684\u8868\u7ed3\u6784\uff0c\u5b57\u6bb5\u4e0d\u53ef\u968f\u610f\u66f4\u6539\uff0c\u7075\u6d3b\u5ea6\u7a0d\u6b20\uff1b"),(0,a.kt)("p",null,"3\u3001\u9ad8\u5e76\u53d1\u8bfb\u5199\u9700\u6c42\uff0c\u4f20\u7edf\u5173\u7cfb\u578b\u6570\u636e\u5e93\u6765\u8bf4\uff0c\u786c\u76d8 I/O \u662f\u4e00\u4e2a\u5f88\u5927\u7684\u74f6\u9888\u3002"),(0,a.kt)("h3",{id:"\u975e\u5173\u7cfb\u578b\u6570\u636e\u5e93nosql-not-only-sql-"},"\u975e\u5173\u7cfb\u578b\u6570\u636e\u5e93\uff08NoSQL not only SQL \uff09"),(0,a.kt)("p",null,"\u4ee3\u8868\u6709\uff1aMongoDB\u3001Redis..."),(0,a.kt)("p",null,"\u7279\u70b9\uff1a\u5173\u7cfb\u4e0d\u7d27\u5bc6\uff0c\u6709\u6587\u6863\uff0c\u6709\u952e\u503c\u5bf9"),(0,a.kt)("p",null,"\u4f18\u70b9\uff1a"),(0,a.kt)("p",null,"1\u3001\u683c\u5f0f\u7075\u6d3b\uff1a\u5b58\u50a8\u6570\u636e\u7684\u683c\u5f0f\u53ef\u4ee5\u662f key,value \u5f62\u5f0f\u3002"),(0,a.kt)("p",null,"2\u3001\u901f\u5ea6\u5feb\uff1anosql \u53ef\u4ee5\u5185\u5b58\u4f5c\u4e3a\u8f7d\u4f53\uff0c\u800c\u5173\u7cfb\u578b\u6570\u636e\u5e93\u53ea\u80fd\u4f7f\u7528\u786c\u76d8\uff1b"),(0,a.kt)("p",null,"3\u3001\u6613\u7528\uff1anosql \u6570\u636e\u5e93\u90e8\u7f72\u7b80\u5355\u3002"),(0,a.kt)("p",null,"\u7f3a\u70b9\uff1a"),(0,a.kt)("p",null,"1\u3001\u4e0d\u652f\u6301\u4e8b\u52a1\uff1b"),(0,a.kt)("p",null,"2\u3001\u590d\u6742\u67e5\u8be2\u65f6\u8bed\u53e5\u8fc7\u4e8e\u7e41\u7410\u3002"))}s.isMDXComponent=!0},5202:(e,n,t)=>{t.d(n,{Z:()=>l});const l=t.p+"assets/images/mongod-b01108af7fb19c3506dbaf52c4524b54.png"}}]);