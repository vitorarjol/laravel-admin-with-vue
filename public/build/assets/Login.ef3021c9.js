import{d as e,o as s,a,T as o,b as t,t as l,w as r,v as i,e as n,f as c,g as d}from"./vendor.0d41314f.js";var p=e({name:"Login",data:()=>({email:"",password:"",rememberMe:!1,showPassword:!1}),methods:{togglePasswordVisibility(){this.showPassword=!this.showPassword}}});const m={class:"page page-center"},h={class:"container-tight py-4"},u={class:"card card-md",action:".",method:"get",autocomplete:"off"},w={class:"card-body"},b=t("h2",{class:"card-title text-center mb-4"},"Acesse sua conta",-1),g={class:"mb-3"},f=t("label",{class:"form-label"},"E-mail",-1),v={class:"mb-2"},k=t("label",{class:"form-label"},[d(" Senha "),t("span",{class:"form-label-description"},[t("a",{href:"#"},"Esqueci minha senha")])],-1),y={class:"input-group input-group-flat"},x={key:0,class:"link-secondary",title:"Exibir","data-bs-toggle":"tooltip"},P=t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},[t("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),t("circle",{cx:"12",cy:"12",r:"2"}),t("path",{d:"M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7"})],-1),M={key:1,class:"link-secondary",title:"Esconder","data-bs-toggle":"tooltip"},V=t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-eye-off",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},[t("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),t("line",{x1:"3",y1:"3",x2:"21",y2:"21"}),t("path",{d:"M10.584 10.587a2 2 0 0 0 2.828 2.83"}),t("path",{d:"M9.363 5.365a9.466 9.466 0 0 1 2.637 -.365c4 0 7.333 2.333 10 7c-.778 1.361 -1.612 2.524 -2.503 3.488m-2.14 1.861c-1.631 1.1 -3.415 1.651 -5.357 1.651c-4 0 -7.333 -2.333 -10 -7c1.369 -2.395 2.913 -4.175 4.632 -5.341"})],-1),C={class:"mb-2"},E={class:"form-check"},j=t("span",{class:"form-check-label"},"Continuar conectado",-1),U=t("div",{class:"form-footer"},[t("button",{type:"submit",class:"btn btn-primary w-100"},"Acessar")],-1),z=t("div",{class:"text-center text-muted mt-3"},[d(" Não possui uma conta? "),t("a",{href:"#",tabindex:"-1"},"Cadastre-se")],-1);p.render=function(e,d,p,A,B,H){return s(),a("div",m,[(s(),a(o,{to:"head"},[t("title",null,l(e.setPageTitle("Login")),1)])),t("div",h,[t("form",u,[t("div",w,[b,t("div",g,[f,r(t("input",{type:"email",class:"form-control",placeholder:"Digite seu e-mail","onUpdate:modelValue":d[1]||(d[1]=s=>e.email=s)},null,512),[[i,e.email]])]),t("div",v,[k,t("div",y,[r(t("input",{type:e.showPassword?"text":"password",class:"form-control",placeholder:"Senha",autocomplete:"off","onUpdate:modelValue":d[2]||(d[2]=s=>e.password=s)},null,8,["type"]),[[n,e.password]]),t("span",{class:"input-group-text",onClick:d[3]||(d[3]=(...s)=>e.togglePasswordVisibility&&e.togglePasswordVisibility(...s))},[e.showPassword?(s(),a("a",x,[P])):(s(),a("a",M,[V]))])])]),t("div",C,[t("label",E,[r(t("input",{type:"checkbox",class:"form-check-input","onUpdate:modelValue":d[4]||(d[4]=s=>e.rememberMe=s)},null,512),[[c,e.rememberMe]]),j])]),U])]),z])])};export default p;