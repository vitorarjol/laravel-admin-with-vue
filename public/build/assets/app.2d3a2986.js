import{I as e,c as t,D as o,h as r}from"./vendor.e68a5b8b.js";let n;const s={};!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(o){const r=new URL(e,location),n=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((o,s)=>{const i=new URL(e,r);if(self[t].moduleMap[i])return o(self[t].moduleMap[i]);const a=new Blob([`import * as m from '${i}';`,`${t}.moduleMap['${i}']=m;`],{type:"text/javascript"}),l=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(a),onerror(){s(new Error(`Failed to import: ${e}`)),n(l)},onload(){o(self[t].moduleMap[i]),n(l)}});document.head.appendChild(l)})),self[t].moduleMap={}}}("/build/assets/");const i={"./Pages/Auth/Login.vue":()=>function(e,t){if(!t)return e();if(void 0===n){const e=document.createElement("link").relList;n=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in s)return;s[e]=!0;const t=e.endsWith(".css"),o=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${o}`))return;const r=document.createElement("link");return r.rel=t?"stylesheet":n,t||(r.as="script",r.crossOrigin=""),r.href=e,document.head.appendChild(r),t?new Promise(((e,t)=>{r.addEventListener("load",e),r.addEventListener("error",t)})):void 0}))).then((()=>e()))}((()=>__import__("./Login.67721a63.js")),["/build/assets/Login.67721a63.js","/build/assets/vendor.e68a5b8b.js"])},a=document.getElementById("app");e.init(),t({render:()=>r(o.App,{initialPage:JSON.parse(a.dataset.page),resolveComponent:e=>{const t=i[`./Pages/${e}.vue`];if(!t)throw new Error(`Página desconhecida: ${e}. Verifique se o arquivo vue relacionado existe.`);return t().then((e=>e.default))}})}).mixin({methods:{route:window.route,title:e=>`Ping CRM - ${e}`}}).use(o.plugin).mount(a);
