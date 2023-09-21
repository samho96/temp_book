"use strict";(self.webpackChunkhelp_site=self.webpackChunkhelp_site||[]).push([[1473],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=c(r),h=o,f=s["".concat(u,".").concat(h)]||s[h]||d[h]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=h;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},8471:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={},i="Running GCode",l={unversionedId:"Quick Start/Running GCode",id:"Quick Start/Running GCode",title:"Running GCode",description:'To run your GCode you will need to be connected the controller. Click on the "Upload G-code" and browse to the GCode you want to run. After you have upload the file click run and the machine should start running the Gcode.',source:"@site/docs/Quick Start/Running GCode.md",sourceDirName:"Quick Start",slug:"/Quick Start/Running GCode",permalink:"/Quick Start/Running GCode",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"quickstartSidebar",previous:{title:"Setting Zero",permalink:"/Quick Start/Setting Zero"},next:{title:"Troubleshooting",permalink:"/Quick Start/Troubleshooting"}},u={},c=[{value:"Helpful Tips",id:"helpful-tips",level:3}],p={toc:c},s="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(s,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"running-gcode"},"Running GCode"),(0,o.kt)("p",null,'To run your GCode you will need to be connected the controller. Click on the "Upload G-code" and browse to the GCode you want to run. After you have upload the file click run and the machine should start running the Gcode.'),(0,o.kt)("p",null,"Once you have loaded your program, zeroed your machine and your workpiece is secure you are now\nready to run the job."),(0,o.kt)("p",null,"Make sure you raise the router up so the tool is above the clamps, this will help prevent any collisions.  The Post Processors should set the the spindle to retract before running, however it is always good practice to move to make clearances."),(0,o.kt)("p",null,"ALWAYS make sure you are in reach of the emergency stop when running a program."),(0,o.kt)("p",null,"If at any point you have to hit the emergency stop you will need to re-home the machine and double check work co-ordinates."),(0,o.kt)("p",null,"If everything is still safe, the material and tool are still secured, wait until the router has fully ramped up to speed before continuing with the program."),(0,o.kt)("h3",{id:"helpful-tips"},"Helpful Tips"),(0,o.kt)("p",null,"Make sure your workpiece is secured to the bed with at least 4 clamps."),(0,o.kt)("p",null,"If you are cutting all the way through your material it is a good idea to have a sacrificial piece of material underneath to prevent any damage to the bed of the machine"),(0,o.kt)("p",null,"ALWAYS make sure the bit is tight in the spindle chuck. "),(0,o.kt)("p",null,"ALWAYS be within reach of the E-Stop"))}d.isMDXComponent=!0}}]);