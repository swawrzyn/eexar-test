import{d as m,t as _,r as w,w as h,c as u,a as C,n as x,o as l,b as T,s as B,F as g,e as $,f as v,g as A,h as d,i as b,j as G}from"./vendor.8d044fac.js";const j=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}};j();var y=(e,s)=>{const t=e.__vccOpts||e;for(const[n,r]of s)t[n]=r;return t};const N=m({props:{coordinates:{required:!0,type:Array},num:{required:!0,type:Number}},emits:["tile-click"],setup(e){const{num:s}=_(e),t=w("");return h(s,(n,r)=>{n>r?(t.value="yellow",setTimeout(()=>{t.value=""},500)):r!=0&&n==0&&(t.value="green",setTimeout(()=>{t.value=""},1500))}),{pulse:t}}});function O(e,s,t,n,r,o){return l(),u("td",{class:x(["w-8 h-6 align-middle text-center text-xs cursor-pointer select-none shadow-sm hover:shadow-md hover:bg-yellow-100 active:bg-yellow-300 border transition-all border-gray-100",{"bg-yellow-200":e.pulse==="yellow","bg-green-200":e.pulse==="green"}]),onClick:s[0]||(s[0]=a=>e.$emit("tile-click",e.coordinates))},C(e.num>0?e.num:""),3)}var S=y(N,[["render",O]]);function L(){return new SharedWorker("/eexar-test/assets/game-worker.b0372394.js",{type:"classic"})}var k=()=>T(new L().port);const R=(e=0,s,t)=>{const n=new Array(t);for(let r=0;r<t;r++)n[r]=new Array(s).fill(e);return n},F=async(e,s)=>{const t={};for(const[n,r]of e.entries()){const a=await k().sumRowsCols(JSON.parse(JSON.stringify(r)),n,s);t[n]=a}for(const n in t)e[n]=t[n];return e},q=async e=>{for(const[s,t]of e.entries()){const r=await k().checkFibonacciRow(t,5);if(r.length)for(const o of r)e[s][o]=0}return e},E=async(e,s)=>{let t=[...e];return t=await F(t,s),t=await q(t),t},K=m({components:{GameTile:S},props:{restart:{default:!1,type:Boolean}},emits:["update:restart"],setup(e,{emit:s}){let t=B(R(0,50,50));const n=w(0),{restart:r}=_(e);return h(r,(a,c)=>{if(a){for(const[i,f]of t.entries())t[i]=f.map(p=>0);s("update:restart",!1)}}),{board:t,tileClick:async a=>{const c=await E(t,a);for(const[i,f]of c.entries())t[i]=f},updateKey:n}}});function W(e,s,t,n,r,o){const a=v("GameTile");return l(),u("div",{key:e.updateKey,class:"bg-white shadow-lg"},[(l(!0),u(g,null,$(e.board,(c,i)=>(l(),u("tr",{key:`row-${i+1}`},[(l(!0),u(g,null,$(c,(f,p)=>(l(),A(a,{key:`cell-${i+1}:${p+1}`,coordinates:[i,p],num:f,onTileClick:ee=>e.tileClick([i,p])},null,8,["coordinates","num","onTileClick"]))),128))]))),128))])}var z=y(K,[["render",W]]);const I=m({setup(){return{restart:w(!1)}},components:{GameBoard:z}}),J={class:"w-full flex flex-col items-center justify-center"},P={class:"w-full flex items-center justify-center"},D=d("div",{class:"w-1/2 flex flex-col items-start justify-start"},[d("div",{class:"text-3xl font-bold"},"EEXAR Technical Test"),d("span",null,"By: Stefan Wawrzyn")],-1),M={class:"w-1/2 flex items-center justify-end"},U=["disabled"];function V(e,s,t,n,r,o){const a=v("GameBoard");return l(),u("div",J,[d("div",P,[D,d("div",M,[d("button",{type:"button",class:"bg-blue-500 hover:bg-blue-700 active:bg-blue-900 text-white px-4 py-2 rounded font-bold transition-colors shadow hover:shadow-md active:shadow-lg",onClick:s[0]||(s[0]=c=>e.restart=!0),disabled:e.restart}," Restart ",8,U)])]),b(a,{restart:e.restart,"onUpdate:restart":s[1]||(s[1]=c=>e.restart=c)},null,8,["restart"])])}var X=y(I,[["render",V]]);const H=m({components:{Game:X},setup(){}}),Q={class:"h-screen container mx-auto flex items-center justify-center"};function Y(e,s,t,n,r,o){const a=v("Game");return l(),u("div",Q,[b(a)])}var Z=y(H,[["render",Y]]);G(Z).mount("#app");
