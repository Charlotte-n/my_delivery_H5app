import{d as s,q as a,b as e,c as r,f as t,u as o,t as i,p as l,h as d,_ as n,r as c,o as u,X as m,e as v,w as p,l as f,m as _,F as h,i as g,x as j,k as I,E as w}from"./index-lwfdNeUd.js";import{v as k}from"./el-loading-A5Jaj6AO.js";import{H as x}from"./index-V_BAUGZc.js";import{f as y}from"./formate_img-ey60ccwK.js";import{g as b}from"./order-kah_0DHZ.js";import{l as C}from"./listenBottomOut-Y2N2QcEh.js";import{u as E}from"./position-OESf1APT.js";import"./use-global-config-JXa-0KUy.js";import"./index-0z1mzhXR.js";import"./get-LVbWSPPF.js";import"./index-3rhPArT_.js";import"./index-szXM9Nvp.js";import"./index-fssVXj-i.js";const z=s=>(l("data-v-74837794"),s=s(),d(),s),B={class:"img"},D=["src"],F={class:"order"},H={class:"shop_name"},L=z((()=>t("span",{class:"arrow"},">",-1))),$={class:"time"},q={class:"order-status"},G={class:"middle-price"},K=z((()=>t("div",{class:"zhanwei"},null,-1))),O=z((()=>t("div",{class:"order_name"},"价格",-1))),S={class:"price"},X=n(s({__name:"orderlist-item",props:{orderInfo:{}},setup(s){const l=a(),d=s,n=()=>{l.push({path:"/order/detail/"+d.orderInfo.id})},c=()=>{l.push({path:"/deliveryShopDetail/"+d.orderInfo.restaurant_id})};return(s,a)=>(e(),r("div",null,[t("div",{class:"desc",onClick:n},[t("div",B,[t("img",{src:o(y)(d.orderInfo.restaurant_image_url),alt:""},null,8,D)]),t("div",F,[t("div",H,[t("span",null,i(d.orderInfo.restaurant_name),1),L]),t("div",$,i(d.orderInfo.formatted_created_at),1)]),t("div",q,i(d.orderInfo.status_bar.title),1)]),t("div",G,[K,O,t("div",S," ￥"+i(d.orderInfo.basket.packing_fee.price),1)]),t("div",{class:"status"},[t("button",{onClick:c},"再来一单")])]))}}),[["__scopeId","data-v-74837794"]]),A={class:"orderlist_container"},J={class:"orderlists"},M={key:0,style:{height:"100vh"}},N=(s=>(l("data-v-8c1ffd9b"),s=s(),d(),s))((()=>t("div",{style:{height:"10vw"}},null,-1))),P=n(s({__name:"index",setup(s){const i=a(),l=E(),d=c(!1),n=c([]),y=c({limit:20,offset:0}),z=async()=>{const s=await b(y.value);0!==s.length?(y.value.offset+=20,n.value=[...n.value,...s]):d.value=!0},B=C(d,z),D=c(!1),F=()=>{i.push({path:`/takeaway/${l.geohash}`})};return u((async()=>{D.value=!0,await z(),D.value=!1,window.addEventListener("scroll",B)})),m((()=>{window.removeEventListener("scroll",B)})),(s,a)=>{const i=w,l=k;return e(),r("div",A,[t("header",null,[v(x,null,{first:p((()=>[v(i,{size:"25",onClick:F},{default:p((()=>[v(o(j))])),_:1})])),second:p((()=>[I(" 订单列表 ")])),_:1})]),t("div",J,[D.value?f((e(),r("div",M,null,512)),[[l,D.value]]):_("",!0),(e(!0),r(h,null,g(n.value,(s=>(e(),r("div",{class:"orderlist-item",key:s.id},[v(X,{orderInfo:s},null,8,["orderInfo"])])))),128))]),N])}}}),[["__scopeId","data-v-8c1ffd9b"]]);export{P as default};
