if(!self.define){let e,t={};const i=(i,s)=>(i=new URL(i+".js",s).href,t[i]||new Promise((t=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=t,document.head.appendChild(e)}else e=i,importScripts(i),t()})).then((()=>{let e=t[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(t[o])return;let r={};const f=e=>i(e,o),d={module:{uri:o},exports:r,require:f};t[o]=Promise.all(s.map((e=>d[e]||f(e)))).then((e=>(n(...e),r)))}}define(["./workbox-6da860f9"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"index.html",revision:"1024138b144af2096e11be4fb05f0fc8"},{url:"main.js",revision:"b204fdf49d17f0e9e125e748d3bda235"}],{})}));
