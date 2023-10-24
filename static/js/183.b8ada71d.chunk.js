"use strict";(self.webpackChunkgastro_smart=self.webpackChunkgastro_smart||[]).push([[183],{2390:function(n,e,t){t.d(e,{Gq:function(){return f},Rx:function(){return Z},Yb:function(){return x},ZB:function(){return g},kI:function(){return w},lX:function(){return m},yt:function(){return h}});var i,r,o,s,a,l,d,c=t(168),u=t(6058),p=t(5867),x=p.ZP.div(i||(i=(0,c.Z)(["\n    width: 700px;\n    height: 450px;\n    border: 2px solid #777;\n    border-radius: 4px;\n  \n    display: grid;\n    grid-auto-flow: column;\n    grid-auto-columns: 1fr;\n"]))),g=p.ZP.div.withConfig({shouldForwardProp:function(n){return(0,u.Z)(n)&&"photo"!==n}})(r||(r=(0,c.Z)(["\n    background-image: url(",");\n    background-size: cover;\n    background-position: center;  \n"])),(function(n){return n.photo})),f=p.ZP.form(o||(o=(0,c.Z)(["\n   padding: 30px;\n   display: grid;\n   \n   align-content: center;\n   justify-content: center;\n   justify-items: start;\n   gap: 25px;\n\n   &>button.LogBtn{\n    width: 120px;\n    height: 38px;\n   }\n"]))),m=p.ZP.label(s||(s=(0,c.Z)(["\n    position: relative;\n    display: grid;\n    gap: 4px;\n\n    &>button.showBtn{\n        position: absolute;\n        top: 33px;\n        right: 20px;\n    }\n"]))),h=p.ZP.input.withConfig({shouldForwardProp:function(n){return(0,u.Z)(n)&&"errors"!==n}})(a||(a=(0,c.Z)(["\n    width: 250px;\n    height: 38px;\n    border: 1px solid #777;\n    border-color: ",";\n    border-radius: 4px;\n    padding: 8px;\n    outline: none;\n"])),(function(n){return n.errors?"crimson":"#777"})),w=p.ZP.p(l||(l=(0,c.Z)(["\n    font-size: 14px;\n    display: flex;\n    gap: 10px;\n    align-items: baseline;\n    &>a{\n        font-size: 20px;\n        color: #0D5D81;\n    }\n"]))),Z=p.ZP.p(d||(d=(0,c.Z)(["\n    color: crimson;\n    position: absolute;\n    bottom: -16px;\n    font-size: 11px;\n    font-weight: 500;\n"])))},8172:function(n,e,t){t.r(e),t.d(e,{default:function(){return m}});var i=t(1413),r=t(9439),o=t(2390),s=t.p+"static/media/meat.a442e7c0c89e66b2e173.jpg",a=t(2609),l=t(1087),d=t(2791),c=t(6355),u=t(1134),p=t(8596),x=t(184),g=function(){var n=(0,d.useState)(!1),e=(0,r.Z)(n,2),t=e[0],g=e[1],f=(0,u.cI)({defaultValues:{name:"",password:""},mode:"all"}),m=f.register,h=f.handleSubmit,w=f.control,Z=f.formState,v=f.reset,b=Z.errors,j=Z.isDirty,y=Z.isValid,P=Z.isSubmitSuccessful;(0,d.useEffect)((function(){P&&v()}),[P,v]);return(0,x.jsxs)(o.Yb,{children:[(0,x.jsxs)(o.Gq,{onSubmit:h((function(n){console.log(n)}),(function(n){console.log("Form errors",n)})),noValidate:!0,children:[(0,x.jsx)("h2",{children:"Login"}),(0,x.jsxs)(o.lX,{children:[" Name",(0,x.jsx)(o.yt,(0,i.Z)((0,i.Z)({},m("name",{required:"Name is required",minLength:{value:2,message:"Minimum length is 2"},pattern:{value:/^[a-zA-Z0-9]{2,20}$/,message:"Name is not valid"},validate:function(n){return"jonny"!==n.toLowerCase()||"Enter a different name"}})),{},{type:"text",errors:b.name})),(null===b||void 0===b?void 0:b.name)&&(0,x.jsx)(o.Rx,{children:b.name.message})]}),(0,x.jsxs)(o.lX,{children:[" Password",(0,x.jsx)(o.yt,(0,i.Z)((0,i.Z)({},m("password",{required:"Password is required",minLength:{value:6,message:"Minimum length is 6"},pattern:{value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,16}$/,message:"Include capital letters and numbers"},validate:function(n){return"qwe123"!==n.toLowerCase()||"Enter a different password"}})),{},{type:t?"text":"password",errors:b.password})),(null===b||void 0===b?void 0:b.password)&&(0,x.jsx)(o.Rx,{children:b.password.message}),(0,x.jsx)(a.Ty,{type:"button",className:"showBtn",onClick:function(){return g(!t)},children:t?(0,x.jsx)(c.tgn,{}):(0,x.jsx)(c.dSq,{})})]}),(0,x.jsx)(a.zx,{type:"submit",className:"LogBtn",disabled:!j||!y,children:"Submit"}),(0,x.jsxs)(o.kI,{children:["Don't have an account?",(0,x.jsx)(l.rU,{to:"/register",children:"Register"})]})]}),(0,x.jsx)(p.DevTool,{control:w}),(0,x.jsx)(o.ZB,{photo:s})]})},f=t(1444);function m(){return(0,x.jsx)(f.wz,{children:(0,x.jsx)(g,{})})}},1444:function(n,e,t){t.d(e,{pp:function(){return p},wz:function(){return x}});var i,r,o,s,a,l,d,c=t(168),u=t(5867),p=u.ZP.div(i||(i=(0,c.Z)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n\n  &>p{\n    font-size: 22px;\n    font-weight: 600;\n    color: var(--text-color);\n    transition: all 1s ease-in-out;\n  }\n\n    @media screen and (min-width: 768px) {\n    min-height: 700px;\n    }\n\n    @media screen and (min-width: 1280px) {\n      min-height: 700px;\n    }\n\n"]))),x=(u.ZP.div(r||(r=(0,c.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 1em;\n  align-self: start;\n"]))),u.ZP.div(o||(o=(0,c.Z)(["\n  position: relative;\n  display: grid;\n  gap: 1em;\n\n  &>button.LoadMore{\n    width: 160px;\n    justify-self: center;\n    color: var(--blue);\n    background-color: transparent;\n    font-weight: 600;\n    margin-top: 50px;\n\n    &>svg {\n      fill:  var(--blue);\n    }\n  }\n\n  &>h2{\n    font-size: 32px;  \n    font-weight: 600;\n    justify-self: center;\n    align-self: center;\n    color: var(--text-color);\n    transition: all 1s ease-in-out;\n    \n    @media screen and (min-width: 768px) {\n  font-size: 46px;\n    }\n  }\n\n"]))),u.ZP.h1(s||(s=(0,c.Z)(["\n\n  text-align: center;\n\n  font-size: 40px;\n  font-weight: 700;\n  color: var(--text-color);\n  padding: 12px;\n  transition: all 1s ease-in-out;\n\n  &+span {\n    max-width: 800px;\n    font-weight: 600;\n    color: #eee;\n    font-size: 24px;\n    text-align: center;\n    display: block;\n\n  }\n"]))),u.ZP.div(a||(a=(0,c.Z)(["\n min-width: 300px;\n display: grid;\n place-items: center;\n text-align: center;\n color: var(--text-color);\n transition: all 1s ease-in-out;\n  & > svg {\n       fill: var(--text-color);\n        transition: all 1s ease-in-out;\n\n  }\n  & > b {\n\n    font-size: 38px;\n  }\n\n"]))),u.ZP.ul(l||(l=(0,c.Z)(["\n  display: grid;\n  place-items: center;\n  gap: 30px;\n  \n  @media screen and (min-width: 768px) {\n    grid-template-columns: repeat(2, 1fr);\n}\n    @media screen and (min-width: 1280px) {\n      grid-template-columns: repeat(4, 1fr);\n    }\n"]))),u.ZP.div(d||(d=(0,c.Z)(["\n  display: grid;\n  place-items: center;\n  height: 600px;\n  width: 100%;\n  padding: 60px 0;\n  background-color: #F3F8FC;\n"]))))}}]);
//# sourceMappingURL=183.b8ada71d.chunk.js.map