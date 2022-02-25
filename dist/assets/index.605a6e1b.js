var w=Object.defineProperty,v=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var f=(e,r,i)=>r in e?w(e,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[r]=i,m=(e,r)=>{for(var i in r||(r={}))b.call(r,i)&&f(e,i,r[i]);if(p)for(var i of p(r))E.call(r,i)&&f(e,i,r[i]);return e},u=(e,r)=>v(e,y(r));import{s as l,r as d,j as h,W as M,R as C,a as S,F as j}from"./vendor.df86a5e0.js";const A=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function i(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(n){if(n.ep)return;n.ep=!0;const o=i(n);fetch(n.href,o)}};A();const L=l.div(({theme:e})=>({height:"100vh",display:"grid",placeItems:"center",padding:"0 15px"})),R=l.main(({theme:e})=>({maxWidth:500,width:"100%",padding:"30px 30px 40px",position:"relative",backgroundColor:e.palette.background.paper,borderRadius:10,display:"flex",flexDirection:"column",alignItems:"stretch",justifyContent:"center",gap:25})),k=l.header(({theme:e})=>({h1:{margin:0,fontSize:14,letterSpacing:4,textAlign:"center",textTransform:"uppercase",color:e.palette.primary.main}})),z=l.section(({theme:e})=>({p:{fontSize:28,textAlign:"center",margin:0}}));function F(e){const r=o=>typeof window!="undefined"?window.matchMedia(o).matches:!1,[i,a]=d.exports.useState(r(e));function n(){a(r(e))}return d.exports.useEffect(()=>{const o=window.matchMedia(e);return n(),o.addEventListener("change",n),()=>{o.removeEventListener("change",n)}},[e]),i}const I=l.div({display:"flex",alignItems:"center",justifyContent:"center"}),t=h.exports.jsx,s=h.exports.jsxs,H=h.exports.Fragment,W=()=>{const e=F("(min-width: 530px)");return t(I,{children:e?t("svg",{width:"444",height:"16",xmlns:"http://www.w3.org/2000/svg",children:s("g",{fill:"none",fillRule:"evenodd",children:[t("path",{fill:"#CEE3E9",d:"M0 8h196v1H0zM248 8h196v1H248z"}),s("g",{transform:"translate(212)",fill:"#CEE3E9",children:[t("rect",{width:"6",height:"16",rx:"3"}),t("rect",{x:"14",width:"6",height:"16",rx:"3"})]})]})}):t("svg",{width:"295",height:"16",xmlns:"http://www.w3.org/2000/svg",children:s("g",{fill:"none",fillRule:"evenodd",children:[t("path",{fill:"#CEE3E9",d:"M0 8h122v1H0zM173 8h122v1H173z"}),s("g",{transform:"translate(138)",fill:"#CEE3E9",children:[t("rect",{width:"6",height:"16",rx:"3"}),t("rect",{x:"14",width:"6",height:"16",rx:"3"})]})]})})})},g=150,Z=l.button(({theme:e})=>({position:"absolute",bottom:0,left:"50%",transform:"translate(-50%, 50%)",cursor:"pointer",userSelect:"none",appearance:"none",textDecoration:"none",textAlign:"center",verticalAlign:"middle",outline:0,margin:0,border:0,padding:8,backgroundColor:e.palette.primary.main,display:"inline-flex",alignItems:"center",justifyContent:"center",height:50,width:50,borderRadius:"50%",overflow:"hidden",transition:`box-shadow ${g}ms ease-out`,"&:hover":{boxShadow:`0 0 25px 1px ${e.palette.primary.main}`,transition:`box-shadow ${g}ms ease-in`}})),$=e=>t(Z,u(m({},e),{children:t("svg",{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg",children:t("path",{d:"M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z",fill:"#202733"})})})),B="https://api.adviceslip.com/advice",D=()=>{const[e,r]=d.exports.useState(),[i,a]=d.exports.useState(!1),n=async()=>{try{a(!0);const c=await(await fetch(B)).json();r(c)}catch(o){console.error(o)}finally{a(!1)}};return d.exports.useEffect(()=>{n()},[]),t(L,{children:s(R,{children:[t(k,{children:s("h1",{children:["Advice #",e==null?void 0:e.slip.id]})}),t(z,{children:t("p",{children:i?"loading...":`"${e==null?void 0:e.slip.advice}"`})}),t(W,{}),t($,{onClick:n})]})})},O=()=>t(H,{children:t(D,{})});var N="/fem-advice-generator-app/assets/Manrope-ExtraBold.24454f09.ttf";const P=M(({theme:e})=>({"@font-face":{fontFamily:"Manrope",src:`url(${N}) format('truetype')`,fontWeight:800},"*":{margin:0,padding:0,boxSizing:"border-box"},html:{"@media (max-width: 1080px)":{fontSize:"93.75%"},"@media (max-width: 720px)":{fontSize:"87.5%"}},body:{backgroundColor:e.palette.background.default,color:e.palette.text.primary},"body, input, textarea, button":{fontFamily:'"Manrope", sans-serif',WebkitFontSmoothing:"antialiased"},"h1, h2, h3, h4, h5, h6, strong":{fontWeight:600},button:{cursor:"pointer","&[disabled]":{opacity:.6,cursor:"not-allowed"}}})),x={white:"hsl(193, 38%, 86%)",black:"#000"},T={palette:{primary:{main:"hsl(150, 100%, 66%)"},background:{default:"hsl(217, 19%, 24%)",paper:"hsl(217, 19%, 38%)"},text:{primary:x.white},divider:x.white}};C.render(t(S.StrictMode,{children:s(j,{theme:T,children:[t(P,{}),t(O,{})]})}),document.getElementById("root"));
