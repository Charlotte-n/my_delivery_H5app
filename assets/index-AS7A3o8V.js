import{d as e,r as a,o as s,c as l,f as o,e as t,w as r,P as i,am as n,s as c,F as d,b as u,u as p,v as m,k as v,p as f,h as j,E as _,_ as h}from"./index-ezaKyRUM.js";import{E as w}from"./el-button-G5w0OJi-.js";import{E as x,a as y}from"./el-switch-CqVFaPQm.js";import{H as g}from"./index-B0F8CFXd.js";import{g as k,a as V}from"./user-tJDYPP4E.js";import"./index-UxtcFsd7.js";import"./use-global-config-NwH93UbI.js";import"./index-y0F2KAOy.js";import"./get-bkzyVv_4.js";import"./isObject-QEGFV2bT.js";import"./index-zz84WgLh.js";import"./index-bVoBTCc4.js";import"./use-form-item-IU14fyLG.js";import"./constants-JSdZFONt.js";import"./index-4Q4EsjFn.js";import"./icon-P9s6K0ZF.js";import"./index-s6KMGca5.js";import"./event-DkVV3hnh.js";import"./error-lyDbv7Kx.js";import"./index-eL0_fwGT.js";import"./typescript-fEetNX7U.js";import"./aria-ClGo7ZJR.js";import"./index-Li4iQ5F3.js";const b={class:"form"},U={class:"form-item"},C={key:0,class:"username_warning"},E={class:"password form-item"},P={key:1,class:"password_warning"},z={class:"verify_code"},F={class:"code"},H={class:"code_img"},I=["src"],O=(e=>(f("data-v-656b7ae5"),e=e(),j(),e))((()=>o("span",null,"看不清",-1))),B={key:2,class:"code_warning"},G={class:"login"},J=h(e({__name:"index",setup(e){const f=a(!1),j=a(),h=()=>{f.value?j.value.type="text":j.value.type="password"},J=()=>{history.go(-1)},K=a({}),L=async()=>{const e=await k();K.value=e},M=a({username:"",password:"",captcha_code:""}),N=a(!1),Q=a(!1),R=a(!1),T=a(0),W=async()=>{if(""===M.value.username&&(N.value=!0,T.value=1),""===M.value.password&&(Q.value=!0,T.value=1),""===M.value.captcha_code&&(R.value=!0,T.value=1),1!==T.value)try{(await V(M.value)).status}catch(e){x({message:"登录失败",type:"error"})}};return s((()=>{L()})),(e,a)=>{const s=_,x=y,k=w;return u(),l(d,null,[o("header",null,[t(g,null,{first:r((()=>[t(s,{size:"20",onClick:J},{default:r((()=>[t(p(m))])),_:1})])),second:r((()=>[v(" 密码登录 ")])),_:1})]),o("form",b,[o("div",U,[i(o("input",{type:"text",placeholder:"账号","onUpdate:modelValue":a[0]||(a[0]=e=>M.value.username=e)},null,512),[[n,M.value.username]])]),N.value?(u(),l("div",C," 请输入账号 ")):c("",!0),o("div",E,[i(o("input",{type:"password",placeholder:"密码",ref_key:"handlePassword",ref:j,"onUpdate:modelValue":a[1]||(a[1]=e=>M.value.password=e)},null,512),[[n,M.value.password]]),t(x,{modelValue:f.value,"onUpdate:modelValue":a[2]||(a[2]=e=>f.value=e),class:"ml-2",size:"large","inline-prompt":"",style:{"--el-switch-on-color":"#ff692f","--el-switch-off-color":"#ccc"},"active-text":"隐藏密码","inactive-text":"显示密码",onChange:h},null,8,["modelValue"])]),Q.value?(u(),l("div",P," 请输入密码 ")):c("",!0),o("div",z,[i(o("input",{type:"text",placeholder:"验证码","onUpdate:modelValue":a[3]||(a[3]=e=>M.value.captcha_code=e),maxlength:"4"},null,512),[[n,M.value.captcha_code]]),o("div",F,[o("div",H,[o("img",{src:K.value.code,alt:""},null,8,I)]),o("div",{class:"change_code"},[O,o("span",{onClick:L},"换一张")])])]),R.value?(u(),l("div",B,"请输入验证码")):c("",!0)]),o("div",G,[t(k,{onClick:W},{default:r((()=>[v("登录")])),_:1})])],64)}}}),[["__scopeId","data-v-656b7ae5"]]);export{J as default};
