import{d as s,r as a,o as t,a as e,b as l,c as i,e as n,w as o,f as c,t as r,u,g as d,E as v,p as _,h as p,_ as m,F as h,i as y,j as f,k as g,l as k,m as j,n as C,q as x,s as I}from"./index-lwfdNeUd.js";import{g as w}from"./city-GAKJnE27.js";import{v as b}from"./el-loading-A5Jaj6AO.js";import"./index-fssVXj-i.js";import"./use-global-config-JXa-0KUy.js";import"./index-0z1mzhXR.js";import"./get-LVbWSPPF.js";import"./index-3rhPArT_.js";import"./index-szXM9Nvp.js";const S={class:"local_city"},$=(s=>(_("data-v-222812c7"),s=s(),p(),s))((()=>c("div",{class:"top"},[c("span",null,"当前定位城市:"),c("span",null,"定位不准确,请在城市列表中选择")],-1))),E=m(s({__name:"local-position",setup(s){const _=a(),p=a();return t((()=>{(async()=>{const s=await w("guess");_.value=null==s?void 0:s.name,p.value=null==s?void 0:s.id})()})),(s,a)=>{const t=v,m=e("router-link");return l(),i("div",S,[$,n(m,{class:"bottom","router-link":"",to:`/city/${p.value}`},{default:o((()=>[c("span",null,r(_.value),1),c("span",null,[n(t,null,{default:o((()=>[n(u(d))])),_:1})])])),_:1},8,["to"])])}}}),[["__scopeId","data-v-222812c7"]]),F={class:"hot_city"},q=(s=>(_("data-v-4138d5ce"),s=s(),p(),s))((()=>c("div",{class:"title"},"热门城市",-1))),z={class:"hot_cities"},A=m(s({__name:"hot-city",setup(s){const n=a([]);return t((()=>{(async()=>{const s=await w("hot");n.value=s})()})),(s,a)=>{const t=e("router-link");return l(),i("div",F,[q,c("div",z,[(l(!0),i(h,null,y(n.value,(s=>(l(),f(t,{class:"city",key:s.id,to:`/city/${s.id}`},{default:o((()=>[g(r(s.name),1)])),_:2},1032,["to"])))),128))])])}}}),[["__scopeId","data-v-4138d5ce"]]),B={key:0,style:{height:"80vh"}},D={class:"letter"},G={class:"cities"},H=m(s({__name:"letter-city",setup(s){const n=a({}),u=s=>{let a={};for(let t=65;t<=90;t++)s[String.fromCharCode(t)]&&(a[String.fromCharCode(t)]=s[String.fromCharCode(t)]);return a},d=a(!1);return t((async()=>{d.value=!0,await(async()=>{const s=await w("group"),a=u(s);n.value=a})(),d.value=!1})),(s,a)=>{const t=e("router-link"),u=b;return l(),i(h,null,[d.value?k((l(),i("div",B,null,512)),[[u,d.value]]):j("",!0),(l(!0),i(h,null,y(n.value,((s,a)=>(l(),i("div",{class:"letter_city",key:a},[c("div",D,r(a),1),c("div",G,[(l(!0),i(h,null,y(s,(s=>(l(),f(t,{key:s.id,class:"city text1-ellipsis",to:`/city/${s.id}`},{default:o((()=>[g(r(s.name),1)])),_:2},1032,["to"])))),128))])])))),128))],64)}}}),[["__scopeId","data-v-490ea3f2"]]),J={class:"top"},K=(s=>(_("data-v-2c4387c8"),s=s(),p(),s))((()=>c("div",{class:"left"},"孟屿外卖",-1))),L={key:0,class:"right"},M={key:1},N=m(s({__name:"index",setup(s){const a=C(),t=x(),e=()=>{t.push({path:"/user"})};return(s,r)=>{const d=v;return l(),i("header",J,[K,""===u(a).userInfo.user_id||null==u(a).userInfo.user_id?(l(),i("div",L,[c("span",{onClick:r[0]||(r[0]=s=>u(t).push("/login"))},"登录"),c("span",{onClick:r[1]||(r[1]=s=>u(t).push("/login"))},"注册")])):(l(),i("div",M,[n(d,{size:"30",onClick:e},{default:o((()=>[n(u(I))])),_:1})]))])}}}),[["__scopeId","data-v-2c4387c8"]]),O={class:"home_container"},P={class:"home-header"},Q={class:"local"},R={class:"home_hot_city"},T=m(s({__name:"index",setup:s=>(s,a)=>(l(),i("div",O,[c("header",P,[n(N)]),c("div",Q,[n(E)]),c("div",R,[n(A)]),c("div",null,[n(H,{class:"home_letter_city"})])]))}),[["__scopeId","data-v-bc247a64"]]);export{T as default};
