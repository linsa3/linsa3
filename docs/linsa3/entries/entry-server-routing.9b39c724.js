import{_ as n,s as c,g as d,a as u,o,b as f,c as _,l as h,d as v,e as y,f as x,h as E,i as C}from"../chunks/chunk-aac2503e.js";const r={},F={},m={},L={},P=[],p={},b=!0,R=[],w={onBeforeRoute:null},O=Object.assign({"/pages/404.page.tsx":()=>n(()=>import("./pages_404.page.addca538.js"),["linsa3/entries/pages_404.page.addca538.js","linsa3/chunks/chunk-f74aa845.js"]),"/pages/index/index.page.tsx":()=>n(()=>import("./pages_index_index.page.0d05e0d9.js"),["linsa3/entries/pages_index_index.page.0d05e0d9.js","linsa3/chunks/chunk-f74aa845.js","linsa3/static/index.page.1f1cf835.css"])}),S={...O};r[".page"]=S;const z=Object.assign({"/renderer/_default.page.client.tsx":()=>n(()=>import("./renderer_default.page.client.15c202e5.js"),["linsa3/entries/renderer_default.page.client.15c202e5.js","linsa3/chunks/chunk-f74aa845.js","linsa3/entries/renderer_default.page.server.extractAssets.e88159ae.js","linsa3/static/default.page.server.1aded4a9.css"])}),A={...z};r[".page.client"]=A;const H=Object.assign({"/renderer/_default.page.server.tsx":()=>n(()=>import("./renderer_default.page.server.extractAssets.e88159ae.js"),["linsa3/entries/renderer_default.page.server.extractAssets.e88159ae.js","linsa3/static/default.page.server.1aded4a9.css"])}),I={...H};p[".page.server"]=I;const j=Object.freeze(Object.defineProperty({__proto__:null,isGeneratedFile:b,neverLoaded:p,pageConfigGlobal:w,pageConfigs:R,pageFilesEager:F,pageFilesExportNamesEager:L,pageFilesExportNamesLazy:m,pageFilesLazy:r,pageFilesList:P},Symbol.toStringTag,{value:"Module"}));c(j);const l=d({withoutHash:!0});async function T(){const e=u();return o(e,{isHydration:!0,isBackwardNavigation:null,_hasPageContextFromClient:!1}),o(e,await U(e._pageId)),B(),e}function B(){const e=d({withoutHash:!0});f(l===e,`The URL was manipulated before the hydration finished ('${l}' to '${e}'). Ensure the hydration has finished before manipulating the URL. Consider using the onHydrationEnd() hook.`)}async function U(e){const t={},{pageFilesAll:a,pageConfigs:i}=await _(!0);return o(t,{_pageFilesAll:a,_pageConfigs:i}),o(t,await h(a,i,e)),a.filter(s=>s.fileType!==".page.server").forEach(s=>{var g;v(!((g=s.fileExports)!=null&&g.onBeforeRender),`export { onBeforeRender } of ${s.filePath} is loaded in the browser but never executed (because you are using Server-side Routing). In order to reduce the size of you browser-side JavaScript, define onBeforeRender() in a .page.server.js file instead, see https://vite-plugin-ssr.com/onBeforeRender-isomorphic#server-routing`,{onlyOnce:!0})}),t}y();const k=!0;x(k);D();async function D(){var t,a;const e=await T();await E(e,!1),C(e,"onHydrationEnd"),await((a=(t=e.exports).onHydrationEnd)==null?void 0:a.call(t,e))}
