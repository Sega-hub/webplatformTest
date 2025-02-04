(()=>{(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3402,1472],{50460:(_e,H,a)=>{"use strict";a.d(H,{p:()=>rn});var t=a(14041),O=a(42899),z=a(58837),T=a(66839),L=a(9394),le=a(91360),_=a(22856),G=a(96872);const F="TECH_DOCS_SHADOW_DOM_STYLE_LOAD",Ee=e=>{(0,t.useEffect)(()=>{if(!e)return()=>{};const o=e.querySelectorAll('head > link[rel="stylesheet"]');let r=o?.length??0;const s=new CustomEvent(F);if(!r)return e.dispatchEvent(s),()=>{};const i=()=>{--r===0&&e.dispatchEvent(s)};return o?.forEach(c=>{c.addEventListener("load",i)}),()=>{o?.forEach(c=>{c.removeEventListener("load",i)})}},[e])},M=e=>{const[o,r]=(0,t.useState)(!1);return(0,t.useEffect)(()=>{if(!e)return()=>{};r(!0);const s=e.style;s.setProperty("opacity","0");const i=()=>{r(!1),s.setProperty("opacity","1")};return e.addEventListener(F,i),()=>{e.removeEventListener(F,i)}},[e]),o},b=e=>{const{element:o,onAppend:r,children:s}=e,[i,c]=(0,t.useState)((0,L.vt)({...(0,_.A)(),insertionPoint:void 0}));Ee(o);const h=M(o),A=(0,t.useCallback)(y=>{if(!o||!y)return;c((0,L.vt)({...(0,_.A)(),insertionPoint:o.querySelector("head")||void 0}));let S=y.shadowRoot;S||(S=y.attachShadow({mode:"open"})),S.replaceChildren(o),typeof r=="function"&&r(S)},[o,r]);return t.createElement(t.Fragment,null,h&&t.createElement(G.k,null),t.createElement(le.Ay,{jss:i,sheetsManager:new Map},t.createElement("div",{ref:A,"data-testid":"techdocs-native-shadowroot"}),s))};var q=a(85639),ee=a(41544),ue=a(16454),te=a(87437),ce=a(78467),N=a(61783),I=a(33986);const ye=(0,z.A)(e=>({loading:{right:e.spacing(1),position:"absolute"}})),B=e=>o=>t.createElement(te.Lt,{inheritParentContextIfAvailable:!0},t.createElement(e,{...o})),ne=()=>{const e=ye();return t.createElement(ce.A,{className:e.loading,"data-testid":"search-autocomplete-progressbar",color:"inherit",size:20})},v=B(function(o){const{loading:r,value:s,onChange:i=()=>{},options:c=[],getOptionLabel:h=C=>String(C),inputPlaceholder:A,inputDebounceTime:y,freeSolo:S=!0,fullWidth:E=!0,clearOnBlur:w=!1,"data-testid":R="search-autocomplete",...Ce}=o,{setTerm:be}=(0,te.SQ)(),Z=(0,t.useCallback)(C=>C?typeof C=="string"?C:h(C):"",[h]),V=(0,t.useMemo)(()=>Z(s),[s,Z]),Q=(0,t.useCallback)((C,U,J,m)=>{be(Z(U)),i(C,U,J,m)},[Z,be,i]),ge=(0,t.useCallback)(({InputProps:{ref:C,className:U,endAdornment:J},InputLabelProps:m,...n})=>t.createElement(I.I,{...n,ref:C,clearButton:!1,value:V,placeholder:A,debounceTime:y,endAdornment:r?t.createElement(ne,null):J,InputProps:{className:U}}),[r,V,A,y]);return t.createElement(N.Ay,{...Ce,"data-testid":R,value:s,onChange:Q,options:c,getOptionLabel:h,renderInput:ge,freeSolo:S,fullWidth:E,clearOnBlur:w})});var he=a(18690),Ae=a(41472);const Ie=e=>e?.document,Ye=e=>{const{entityId:o,entityTitle:r,debounceTime:s=150}=e,[i,c]=(0,t.useState)(!1),h=(0,he.Zp)(),{setFilters:A,term:y,result:{loading:S,value:E}}=(0,te.SQ)(),[w,R]=(0,t.useState)([]);(0,t.useEffect)(()=>{let Q=!0;if(Q&&E){const ge=E.results.slice(0,10);R(ge)}return()=>{Q=!1}},[S,E]);const{kind:Ce,name:be,namespace:Z}=o;(0,t.useEffect)(()=>{A(Q=>({...Q,kind:Ce,namespace:Z,name:be}))},[Ce,Z,be,A]);const V=(Q,ge)=>{if(Ie(ge)){const{location:C}=ge.document;h(C)}};return t.createElement(v,{"data-testid":"techdocs-search-bar",size:"small",open:i&&!!y,getOptionLabel:()=>"",filterOptions:Q=>Q,onClose:()=>{c(!1)},onOpen:()=>{c(!0)},onChange:V,blurOnSelect:!0,noOptionsText:"No results found",value:null,options:w,renderOption:({document:Q,highlight:ge})=>t.createElement(Ae.TechDocsSearchResultListItem,{result:Q,lineClamp:3,asListItem:!1,asLink:!1,title:Q.title,highlight:ge}),loading:S,inputDebounceTime:s,inputPlaceholder:`Search ${r||o.name} docs`,freeSolo:!1})},Ke=e=>{const o={term:"",types:["techdocs"],pageCursor:"",filters:e.entityId};return t.createElement(te.Lt,{initialState:o},t.createElement(Ye,{...e}))};var ke=a(64947),Ne=a(74219),je=a(67296),ht=a(73845),Xe=a(29365),it=a(72501),Ze=a(99703),lt=a(32881);const Pe=(0,z.A)(e=>(0,Ze.A)({paper:{width:"100%",[e.breakpoints.up("sm")]:{width:"75%"},[e.breakpoints.up("md")]:{width:"50%"},padding:e.spacing(2.5)},root:{height:"100%",overflow:"hidden"},logs:{background:e.palette.background.default}})),pt=({buildLog:e,onClose:o})=>{const r=Pe(),s=e.length===0?"Waiting for logs...":e.join(`
`);return t.createElement(O.A,{container:!0,direction:"column",className:r.root,spacing:0,wrap:"nowrap"},t.createElement(O.A,{item:!0,container:!0,justifyContent:"space-between",alignItems:"center",spacing:0,wrap:"nowrap"},t.createElement(it.A,{variant:"h5"},"Build Details"),t.createElement(Xe.A,{key:"dismiss",title:"Close the drawer",onClick:o,color:"inherit"},t.createElement(lt.A,null))),t.createElement(O.A,{item:!0,xs:!0},t.createElement(je.r,{text:s,classes:{root:r.logs}})))},Ue=({buildLog:e})=>{const o=Pe(),[r,s]=(0,t.useState)(!1);return t.createElement(t.Fragment,null,t.createElement(ke.A,{color:"inherit",onClick:()=>s(!0)},"Show Build Logs"),t.createElement(ht.Ay,{classes:{paper:o.paper},anchor:"right",open:r,onClose:()=>s(!1)},t.createElement(pt,{buildLog:e,onClose:()=>s(!1)})))};var De=a(18139),Qe=a(54195),Je=a(52262);const qe=({errorMessage:e})=>{const o=(0,De.gf)(Qe.U).getOptionalString("techdocs.builder"),r=(0,Je.s)(),{entityRef:s}=(0,T.V)(),i=(0,he.zy)();(0,t.useEffect)(()=>{const{pathname:h,search:A,hash:y}=i;r.captureEvent("not-found",`${h}${A}${y}`,{attributes:s})},[r,s,i]);let c="";return[void 0,"local"].includes(o)||(c="Note that techdocs.builder is not set to 'local' in your config, which means this Backstage app will not generate docs if they are not found. Make sure the project's docs are generated and published by some external process (e.g. CI/CD pipeline). Or change techdocs.builder to 'local' to generate docs from this Backstage instance."),t.createElement(ee.M,{status:"404",statusMessage:e||"Documentation not found",additionalInfo:c})};var ft=a(73466),pe=a(28966),oe=a(49707);function fe({contentLoading:e,content:o,activeSyncState:r}){return e||r==="BUILD_READY_RELOAD"||!o&&r==="CHECKING"?"CHECKING":!o&&r==="BUILDING"?"INITIAL_BUILD":o?r==="BUILDING"?"CONTENT_STALE_REFRESHING":r==="BUILD_READY"?"CONTENT_STALE_READY":r==="ERROR"?"CONTENT_STALE_ERROR":"CONTENT_FRESH":"CONTENT_NOT_FOUND"}function Se(e,o){const r={...e};switch(o.type){case"sync":o.state==="CHECKING"&&(r.buildLog=[]),r.activeSyncState=o.state,r.syncError=o.syncError;break;case"contentLoading":r.contentLoading=!0,r.contentError=void 0;break;case"content":typeof o.path=="string"&&(r.path=o.path),r.contentLoading=!1,r.content=o.content,r.contentError=o.contentError;break;case"buildLog":r.buildLog=r.buildLog.concat(o.log);break;default:throw new Error}return["BUILD_READY","BUILD_READY_RELOAD"].includes(r.activeSyncState)&&["contentLoading","content"].includes(o.type)&&(r.activeSyncState="UP_TO_DATE",r.buildLog=[]),r}function Y(e,o,r,s){const[i,c]=(0,t.useReducer)(Se,{activeSyncState:"CHECKING",path:s,contentLoading:!0,buildLog:[]}),h=(0,De.gf)(oe.s),{retry:A}=(0,pe.A)(async()=>{c({type:"contentLoading"});try{const E=await h.getEntityDocs({kind:e,namespace:o,name:r},s);return c({type:"content",content:E,path:s}),E}catch(E){c({type:"content",contentError:E,path:s})}},[h,e,o,r,s]),y=(0,t.useRef)({content:void 0,reload:()=>{}});return y.current={content:i.content,reload:A},(0,ft.A)(async()=>{c({type:"sync",state:"CHECKING"});const E=setTimeout(()=>{c({type:"sync",state:"BUILDING"})},1e3);try{switch(await h.syncEntityDocs({kind:e,namespace:o,name:r},R=>{c({type:"buildLog",log:R})})){case"updated":y.current.content?c({type:"sync",state:"BUILD_READY"}):(y.current.reload(),c({type:"sync",state:"BUILD_READY_RELOAD"}));break;case"cached":c({type:"sync",state:"UP_TO_DATE"});break;default:c({type:"sync",state:"ERROR",syncError:new Error("Unexpected return state")});break}}catch(w){c({type:"sync",state:"ERROR",syncError:w})}finally{clearTimeout(E)}},[e,r,o,h,c,y]),{state:(0,t.useMemo)(()=>fe({activeSyncState:i.activeSyncState,contentLoading:i.contentLoading,content:i.content}),[i.activeSyncState,i.content,i.contentLoading]),contentReload:A,path:i.path,content:i.content,contentErrorMessage:i.contentError?.toString(),syncErrorMessage:i.syncError?.toString(),buildLog:i.buildLog}}const x=(0,t.createContext)({}),ae=()=>(0,t.useContext)(x),de=e=>{const{children:o}=e,{"*":r=""}=(0,he.g)(),{entityRef:s}=(0,T.V)(),{kind:i,namespace:c,name:h}=s,A=Y(i,c,h,r);return t.createElement(x.Provider,{value:A},o instanceof Function?o(A):o)},we=e=>o=>t.createElement(de,null,t.createElement(e,{...o})),f=(0,z.A)(e=>({root:{marginBottom:e.spacing(2)},message:{wordBreak:"break-word",overflowWrap:"anywhere"}})),d=()=>{let e=null;const o=f(),{state:r,contentReload:s,contentErrorMessage:i,syncErrorMessage:c,buildLog:h}=ae();return r==="INITIAL_BUILD"&&(e=t.createElement(Ne.A,{classes:{root:o.root},variant:"outlined",severity:"info",icon:t.createElement(ce.A,{size:"24px"}),action:t.createElement(Ue,{buildLog:h})},"Documentation is accessed for the first time and is being prepared. The subsequent loads are much faster.")),r==="CONTENT_STALE_REFRESHING"&&(e=t.createElement(Ne.A,{variant:"outlined",severity:"info",icon:t.createElement(ce.A,{size:"24px"}),action:t.createElement(Ue,{buildLog:h}),classes:{root:o.root}},"A newer version of this documentation is being prepared and will be available shortly.")),r==="CONTENT_STALE_READY"&&(e=t.createElement(Ne.A,{variant:"outlined",severity:"success",action:t.createElement(ke.A,{color:"inherit",onClick:()=>s()},"Refresh"),classes:{root:o.root}},"A newer version of this documentation is now available, please refresh to view.")),r==="CONTENT_STALE_ERROR"&&(e=t.createElement(Ne.A,{variant:"outlined",severity:"error",action:t.createElement(Ue,{buildLog:h}),classes:{root:o.root,message:o.message}},"Building a newer version of this documentation failed."," ",c)),r==="CONTENT_NOT_FOUND"&&(e=t.createElement(t.Fragment,null,c&&t.createElement(Ne.A,{variant:"outlined",severity:"error",action:t.createElement(Ue,{buildLog:h}),classes:{root:o.root,message:o.message}},"Building a newer version of this documentation failed."," ",c),t.createElement(qe,{errorMessage:i}))),e};var p=a(5893),g=a(54917),P=a(54934),Te=a(96124),re=a.n(Te);const et=/main\.[A-Fa-f0-9]{8}\.min\.css$/,tt=/^https:\/\/fonts\.googleapis\.com/,Me=/^https:\/\/fonts\.gstatic\.com/,gt=e=>e.nodeName==="LINK",vt=e=>{const o=e?.getAttribute("href")||"",r=o.match(et),s=o.match(tt),i=o.match(Me);return r||s||i},It=e=>(gt(e)&&!vt(e)&&e.remove(),e),nt=e=>e.nodeName==="IFRAME",Le=(e,o)=>{const r=e.getAttribute("src")||"";try{const{host:s}=new URL(r);return o.includes(s)}catch{return!1}},Kt=e=>o=>(nt(o)&&!Le(o,e)&&o.remove(),o),jt=()=>{const e=(0,De.gf)(Qe.U);return(0,t.useMemo)(()=>e.getOptionalConfig("techdocs.sanitizer"),[e])},Xt=()=>{const e=jt();return(0,t.useCallback)(async o=>{const r=e?.getOptionalStringArray("allowedIframeHosts");re().addHook("beforeSanitizeElements",It);const s=["link","meta"];return r&&(s.push("iframe"),re().addHook("beforeSanitizeElements",Kt(r))),re().addHook("uponSanitizeElement",(i,c)=>{c.tagName==="meta"&&(i.getAttribute("http-equiv")==="refresh"&&i.getAttribute("content")?.includes("url=")||i.parentNode?.removeChild(i))}),re().addHook("uponSanitizeAttribute",(i,c)=>{i.tagName!=="meta"&&(c.attrName==="http-equiv"||c.attrName==="content")&&i.removeAttribute(c.attrName)}),re().sanitize(o.outerHTML,{ADD_TAGS:s,FORBID_TAGS:["style"],ADD_ATTR:["http-equiv","content"],WHOLE_DOCUMENT:!0,RETURN_DOM:!0})},[e])};var Zt=a(65901),K=a(268),se=({theme:e})=>`
/*==================  Variables  ==================*/
/*
  As the MkDocs output is rendered in shadow DOM, the CSS variable definitions on the root selector are not applied. Instead, they have to be applied on :host.
  As there is no way to transform the served main*.css yet (for example in the backend), we have to copy from main*.css and modify them.
*/

:host {
  /* FONT */
  --md-default-fg-color: ${e.palette.text.primary};
  --md-default-fg-color--light: ${e.palette.text.secondary};
  --md-default-fg-color--lighter: ${(0,K.a)(e.palette.text.secondary,.7)};
  --md-default-fg-color--lightest: ${(0,K.a)(e.palette.text.secondary,.3)};

  /* BACKGROUND */
  --md-default-bg-color:${e.palette.background.default};
  --md-default-bg-color--light: ${e.palette.background.paper};
  --md-default-bg-color--lighter: ${(0,K.a)(e.palette.background.paper,.7)};
  --md-default-bg-color--lightest: ${(0,K.a)(e.palette.background.paper,.3)};

  /* PRIMARY */
  --md-primary-fg-color: ${e.palette.primary.main};
  --md-primary-fg-color--light: ${e.palette.primary.light};
  --md-primary-fg-color--dark: ${e.palette.primary.dark};
  --md-primary-bg-color: ${e.palette.primary.contrastText};
  --md-primary-bg-color--light: ${(0,K.a)(e.palette.primary.contrastText,.7)};

  /* ACCENT */
  --md-accent-fg-color: var(--md-primary-fg-color);
  --md-accent-fg-color--transparent: ${(0,K.X4)(e.palette.primary.main,.1)};
  --md-accent-bg-color: var(--md-primary-bg-color);
  --md-accent-bg-color--light: var(--md-primary-bg-color--light);

  /* SHADOW */
  --md-shadow-z1: ${e.shadows[1]};
  --md-shadow-z2: ${e.shadows[2]};
  --md-shadow-z3: ${e.shadows[3]};

  /* EXTENSIONS */
  --md-admonition-fg-color: var(--md-default-fg-color);
  --md-admonition-bg-color: var(--md-default-bg-color);
  /* Admonitions and others are using SVG masks to define icons. These masks are defined as CSS variables. */
  --md-admonition-icon--note: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83 3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25z"/></svg>');
  --md-admonition-icon--abstract: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4 5h16v2H4V5m0 4h16v2H4V9m0 4h16v2H4v-2m0 4h10v2H4v-2z"/></svg>');
  --md-admonition-icon--info: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13 9h-2V7h2m0 10h-2v-6h2m-1-9A10 10 0 002 12a10 10 0 0010 10 10 10 0 0010-10A10 10 0 0012 2z"/></svg>');
  --md-admonition-icon--tip: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.55 11.2c-.23-.3-.5-.56-.76-.82-.65-.6-1.4-1.03-2.03-1.66C13.3 7.26 13 4.85 13.91 3c-.91.23-1.75.75-2.45 1.32-2.54 2.08-3.54 5.75-2.34 8.9.04.1.08.2.08.33 0 .22-.15.42-.35.5-.22.1-.46.04-.64-.12a.83.83 0 01-.15-.17c-1.1-1.43-1.28-3.48-.53-5.12C5.89 10 5 12.3 5.14 14.47c.04.5.1 1 .27 1.5.14.6.4 1.2.72 1.73 1.04 1.73 2.87 2.97 4.84 3.22 2.1.27 4.35-.12 5.96-1.6 1.8-1.66 2.45-4.32 1.5-6.6l-.13-.26c-.2-.46-.47-.87-.8-1.25l.05-.01m-3.1 6.3c-.28.24-.73.5-1.08.6-1.1.4-2.2-.16-2.87-.82 1.19-.28 1.89-1.16 2.09-2.05.17-.8-.14-1.46-.27-2.23-.12-.74-.1-1.37.18-2.06.17.38.37.76.6 1.06.76 1 1.95 1.44 2.2 2.8.04.14.06.28.06.43.03.82-.32 1.72-.92 2.27h.01z"/></svg>');
  --md-admonition-icon--success: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>');
  --md-admonition-icon--question: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.07 11.25l-.9.92C13.45 12.89 13 13.5 13 15h-2v-.5c0-1.11.45-2.11 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41a2 2 0 00-2-2 2 2 0 00-2 2H8a4 4 0 014-4 4 4 0 014 4 3.2 3.2 0 01-.93 2.25M13 19h-2v-2h2M12 2A10 10 0 002 12a10 10 0 0010 10 10 10 0 0010-10c0-5.53-4.5-10-10-10z"/></svg>');
  --md-admonition-icon--warning: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13 14h-2v-4h2m0 8h-2v-2h2M1 21h22L12 2 1 21z"/></svg>');
  --md-admonition-icon--failure: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2c5.53 0 10 4.47 10 10s-4.47 10-10 10S2 17.53 2 12 6.47 2 12 2m3.59 5L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41 15.59 7z"/></svg>');
  --md-admonition-icon--danger: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.5 20l4.86-9.73H13V4l-5 9.73h3.5V20M12 2c2.75 0 5.1 1 7.05 2.95C21 6.9 22 9.25 22 12s-1 5.1-2.95 7.05C17.1 21 14.75 22 12 22s-5.1-1-7.05-2.95C3 17.1 2 14.75 2 12s1-5.1 2.95-7.05C6.9 3 9.25 2 12 2z"/></svg>');
  --md-admonition-icon--bug: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14 12h-4v-2h4m0 6h-4v-2h4m6-6h-2.81a5.985 5.985 0 00-1.82-1.96L17 4.41 15.59 3l-2.17 2.17a6.002 6.002 0 00-2.83 0L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8z"/></svg>');
  --md-admonition-icon--example: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 13v-2h14v2H7m0 6v-2h14v2H7M7 7V5h14v2H7M3 8V5H2V4h2v4H3m-1 9v-1h3v4H2v-1h2v-.5H3v-1h1V17H2m2.25-7a.75.75 0 01.75.75c0 .2-.08.39-.21.52L3.12 13H5v1H2v-.92L4 11H2v-1h2.25z"/></svg>');
  --md-admonition-icon--quote: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14 17h3l2-4V7h-6v6h3M6 17h3l2-4V7H5v6h3l-2 4z"/></svg>');
  --md-footnotes-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.42L5.83 13H21V7h-2z"/></svg>');
  --md-details-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.59 16.58 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.42z"/></svg>');
  --md-tasklist-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/></svg>');
  --md-tasklist-icon--checked: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>');
  --md-nav-icon--prev: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 11v2H8l5.5 5.5-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5 8 11h12z"/></svg>');
  --md-nav-icon--next: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.59 16.58 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.42z"/></svg>');
  --md-toc-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 9h14V7H3v2m0 4h14v-2H3v2m0 4h14v-2H3v2m16 0h2v-2h-2v2m0-10v2h2V7h-2m0 6h2v-2h-2v2z"/></svg>');
  --md-clipboard-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 21H8V7h11m0-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-3-4H4a2 2 0 0 0-2 2v14h2V3h12V1z"/></svg>');
  --md-search-result-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h7c-.41-.25-.8-.56-1.14-.9-.33-.33-.61-.7-.86-1.1H6V4h7v5h5v1.18c.71.16 1.39.43 2 .82V8l-6-6m6.31 16.9c1.33-2.11.69-4.9-1.4-6.22-2.11-1.33-4.91-.68-6.22 1.4-1.34 2.11-.69 4.89 1.4 6.22 1.46.93 3.32.93 4.79.02L22 23.39 23.39 22l-3.08-3.1m-3.81.1a2.5 2.5 0 0 1-2.5-2.5 2.5 2.5 0 0 1 2.5-2.5 2.5 2.5 0 0 1 2.5 2.5 2.5 2.5 0 0 1-2.5 2.5z"/></svg>');
  --md-source-forks-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M5 3.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm0 2.122a2.25 2.25 0 1 0-1.5 0v.878A2.25 2.25 0 0 0 5.75 8.5h1.5v2.128a2.251 2.251 0 1 0 1.5 0V8.5h1.5a2.25 2.25 0 0 0 2.25-2.25v-.878a2.25 2.25 0 1 0-1.5 0v.878a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 5 6.25v-.878zm3.75 7.378a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm3-8.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5z"/></svg>');
  --md-source-repositories-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 1 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 0 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 0 1 1-1h8zM5 12.25v3.25a.25.25 0 0 0 .4.2l1.45-1.087a.25.25 0 0 1 .3 0L8.6 15.7a.25.25 0 0 0 .4-.2v-3.25a.25.25 0 0 0-.25-.25h-3.5a.25.25 0 0 0-.25.25z"/></svg>');
  --md-source-stars-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694v.001z"/></svg>');
  --md-source-version-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2.5 7.775V2.75a.25.25 0 0 1 .25-.25h5.025a.25.25 0 0 1 .177.073l6.25 6.25a.25.25 0 0 1 0 .354l-5.025 5.025a.25.25 0 0 1-.354 0l-6.25-6.25a.25.25 0 0 1-.073-.177zm-1.5 0V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.75 1.75 0 0 1 1 7.775zM6 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/></svg>');
  --md-version-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc.--><path d="m310.6 246.6-127.1 128c-7.1 6.3-15.3 9.4-23.5 9.4s-16.38-3.125-22.63-9.375l-127.1-128C.224 237.5-2.516 223.7 2.438 211.8S19.07 192 32 192h255.1c12.94 0 24.62 7.781 29.58 19.75s3.12 25.75-6.08 34.85z"/></svg>');
  
  --md-status--updated: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>cellphone-arrow-down</title><path d="M17,1H7A2,2 0 0,0 5,3V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V3A2,2 0 0,0 17,1M17,19H7V5H17V19M16,13H13V8H11V13H8L12,17L16,13Z" /></svg>');
  --md-status: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 9h2V7h-2m1 13c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2m-1 15h2v-6h-2v6Z"/></svg>');
  --md-status--new: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m23 12-2.44-2.78.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12m-10 5h-2v-2h2v2m0-4h-2V7h2v6Z"/></svg>');
  --md-status--deprecated: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9 3v1H4v2h1v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1V4h-5V3H9m0 5h2v9H9V8m4 0h2v9h-2V8Z"/></svg>');
  --md-status--encrypted: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4m0 6c1.4 0 2.8 1.1 2.8 2.5V11c.6 0 1.2.6 1.2 1.3v3.5c0 .6-.6 1.2-1.3 1.2H9.2c-.6 0-1.2-.6-1.2-1.3v-3.5c0-.6.6-1.2 1.2-1.2V9.5C9.2 8.1 10.6 7 12 7m0 1.2c-.8 0-1.5.5-1.5 1.3V11h3V9.5c0-.8-.7-1.3-1.5-1.3Z"/></svg>');
}

:host > * {
  /* CODE */
  --md-code-fg-color: ${e.palette.text.primary};
  --md-code-bg-color: ${e.palette.code?.background??e.palette.background.paper};
  --md-code-hl-color: ${(0,K.X4)(e.palette.warning.main,.5)};
  --md-code-hl-color--light: var(--md-code-hl-color);
  --md-code-hl-keyword-color: ${e.palette.type==="dark"?e.palette.primary.light:e.palette.primary.dark};
  --md-code-hl-function-color: ${e.palette.type==="dark"?e.palette.secondary.light:e.palette.secondary.dark};
  --md-code-hl-string-color: ${e.palette.type==="dark"?e.palette.success.light:e.palette.success.dark};
  --md-code-hl-number-color: ${e.palette.type==="dark"?e.palette.error.light:e.palette.error.dark};
  --md-code-hl-constant-color: var(--md-code-hl-function-color);
  --md-code-hl-special-color: var(--md-code-hl-function-color);
  --md-code-hl-name-color: var(--md-code-fg-color);
  --md-code-hl-comment-color: var(--md-default-fg-color--light);
  --md-code-hl-generic-color: var(--md-default-fg-color--light);
  --md-code-hl-variable-color: var(--md-default-fg-color--light);
  --md-code-hl-operator-color: var(--md-default-fg-color--light);
  --md-code-hl-punctuation-color: var(--md-default-fg-color--light);

  /* TYPESET */
  --md-typeset-font-size: 1rem;
  --md-typeset-color: var(--md-default-fg-color);
  --md-typeset-a-color: ${e.palette.link};
  --md-typeset-table-color: ${e.palette.text.primary};
  --md-typeset-table-color--light: ${(0,K.X4)(e.palette.text.primary,.05)};
  --md-typeset-del-color: ${e.palette.type==="dark"?(0,K.X4)(e.palette.error.dark,.5):(0,K.X4)(e.palette.error.light,.5)};
  --md-typeset-ins-color: ${e.palette.type==="dark"?(0,K.X4)(e.palette.success.dark,.5):(0,K.X4)(e.palette.success.light,.5)};
  --md-typeset-mark-color: ${e.palette.type==="dark"?(0,K.X4)(e.palette.warning.dark,.5):(0,K.X4)(e.palette.warning.light,.5)};
  --md-typeset-kbd-color: var(--md-code-bg-color);
  --md-typeset-kbd-accent-color var(--md-code-bg-color);
  --md-typeset-kbd-border-color: var(--md-default-fg-color--light);
}

@media screen and (max-width: 76.1875em) {
  :host > * {
    /* TYPESET */
    --md-typeset-font-size: .9rem;
  }
}

@media screen and (max-width: 600px) {
  :host > * {
    /* TYPESET */
    --md-typeset-font-size: .7rem;
  }
}

  --md-footer-bg-color: var(--md-default-bg-color);
  --md-footer-bg-color--dark: var(--md-default-bg-color);
`,ot=({theme:e})=>`
/*==================  Reset  ==================*/

body {
  --md-text-color: var(--md-default-fg-color);
  --md-text-link-color: var(--md-accent-fg-color);
  --md-text-font-family: ${e.typography.fontFamily};
  font-family: var(--md-text-font-family);
  background-color: unset;
}
`;const Et="224px";var Qt=({theme:e,sidebar:o})=>`
/*==================  Layout  ==================*/

/* mkdocs material v9 compat */
.md-nav__title {
  color: var(--md-default-fg-color);
}

.md-grid {
  max-width: 100%;
  margin: 0;
}

.md-nav {
  font-size: calc(var(--md-typeset-font-size) * 0.9);
}
.md-nav__link:not(:has(svg)) {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.md-nav__link:has(svg) > .md-ellipsis {
  flex-grow: 1;
}
.md-nav__icon {
  height: 20px !important;
  width: 20px !important;
  margin-left:${e.spacing(1)}px;
}
.md-nav__icon svg {
  margin: 0;
  width: 20px !important;
  height: 20px !important;
}
.md-nav__icon:after {
  width: 20px !important;
  height: 20px !important;
}
.md-status--updated::after {
  -webkit-mask-image: var(--md-status--updated);
  mask-image: var(--md-status--updated);
}

.md-nav__item--active > .md-nav__link, a.md-nav__link--active {
  text-decoration: underline;
  color: var(--md-typeset-a-color);
}
.md-nav__link--active > .md-status:after {
  background-color: var(--md-typeset-a-color);
}
.md-nav__link[href]:hover > .md-status:after {
  background-color: var(--md-accent-fg-color);
}

.md-main__inner {
  margin-top: 0;
}

.md-sidebar {
  bottom: 75px;
  position: fixed;
  width: 16rem;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-color: rgb(193, 193, 193) #eee;
  scrollbar-width: thin;
}
.md-sidebar .md-sidebar__scrollwrap {
  width: calc(16rem);
  overflow-y: hidden;
}
@supports selector(::-webkit-scrollbar) {
  [dir=ltr] .md-sidebar__inner {
      padding-right: calc(100% - 15.1rem);
  }
}
.md-sidebar--secondary {
  right: ${e.spacing(3)}px;
}
.md-sidebar::-webkit-scrollbar {
  width: 5px;
}
.md-sidebar::-webkit-scrollbar-button {
  width: 5px;
  height: 5px;
}
.md-sidebar::-webkit-scrollbar-track {
  background: #eee;
  border: 1 px solid rgb(250, 250, 250);
  box-shadow: 0px 0px 3px #dfdfdf inset;
  border-radius: 3px;
}
.md-sidebar::-webkit-scrollbar-thumb {
  width: 5px;
  background: rgb(193, 193, 193);
  border: transparent;
  border-radius: 3px;
}
.md-sidebar::-webkit-scrollbar-thumb:hover {
  background: rgb(125, 125, 125);
}

.md-content {
  max-width: calc(100% - 16rem * 2);
  margin-left: 16rem;
  margin-bottom: 50px;
}

.md-content > .md-sidebar {
  left: 16rem;
}

.md-footer {
  position: fixed;
  bottom: 0px;
  pointer-events: none;
}

.md-footer-nav__link, .md-footer__link {
  pointer-events: all;
}

.md-footer__title {
  background-color: unset;
}
.md-footer-nav__link, .md-footer__link {
  width: 16rem;
}

.md-dialog {
  background-color: unset;
}

@media screen and (min-width: 76.25em) {
  .md-sidebar {
    height: auto;
  }
}

@media screen and (max-width: 76.1875em) {
  .md-nav {
    transition: none !important;
    background-color: var(--md-default-bg-color)
  }
  .md-nav--primary .md-nav__title {
    cursor: auto;
    color: var(--md-default-fg-color);
    font-weight: 700;
    white-space: normal;
    line-height: 1rem;
    height: auto;
    display: flex;
    flex-flow: column;
    row-gap: 1.6rem;
    padding: 1.2rem .8rem .8rem;
    background-color: var(--md-default-bg-color);
  }
  .md-nav--primary .md-nav__title~.md-nav__list {
    box-shadow: none;
  }
  .md-nav--primary .md-nav__title ~ .md-nav__list > :first-child {
    border-top: none;
  }
  .md-nav--primary .md-nav__title .md-nav__button {
    display: none;
  }
  .md-nav--primary .md-nav__title .md-nav__icon {
    color: var(--md-default-fg-color);
    position: static;
    height: auto;
    margin: 0 0 0 -0.2rem;
  }
  .md-nav--primary > .md-nav__title [for="none"] {
    padding-top: 0;
  }
  .md-nav--primary .md-nav__item {
    border-top: none;
  }
  .md-nav--primary :is(.md-nav__title,.md-nav__item) {
    font-size : var(--md-typeset-font-size);
  }
  .md-nav .md-source {
    display: none;
  }

  .md-sidebar {
    height: 100%;
  }
  .md-sidebar--primary {
    width: 16rem !important;
    z-index: 200;
    left: ${o.isPinned?`calc(-16rem + ${Et})`:"calc(-16rem + 72px)"} !important;
  }
  .md-sidebar--secondary:not([hidden]) {
    display: none;
  }

  [data-md-toggle=drawer]:checked~.md-container .md-sidebar--primary {
    transform: translateX(16rem);
  }

  .md-content {
    max-width: 100%;
    margin-left: 0;
  }

  .md-header__button {
    margin: 0.4rem 0;
    margin-left: 0.4rem;
    padding: 0;
  }

  .md-overlay {
    left: 0;
  }

  .md-footer {
    position: static;
    padding-left: 0;
  }
  .md-footer-nav__link {
    /* footer links begin to overlap at small sizes without setting width */
    width: 50%;
  }
}

@media screen and (max-width: 600px) {
  .md-sidebar--primary {
    left: -16rem !important;
    width: 16rem;
  }
}


@media print {
  .md-sidebar,
  #toggle-sidebar {
    display: none;
  }

  .md-content {
    margin: 0;
    width: 100%;
    max-width: 100%;
  }
}
`;const Jt=["h1","h2","h3","h4","h5","h6"],kt=/(em)|(rem)/gi,Nt=/var\(|\)/gi;var xe=({theme:e})=>`
/*==================  Typeset  ==================*/

.md-typeset {
  font-size: var(--md-typeset-font-size);
}

${Jt.reduce((o,r)=>{const s=e.typography.htmlFontSize??16,i=e.typography[r],{lineHeight:c,fontFamily:h,fontWeight:A,fontSize:y}=i,S=E=>{if(typeof E=="number")return S(`${E/s*.6}rem`);if(typeof E=="string"){if(E.match(Nt)){const w=window.getComputedStyle(document.body).getPropertyValue(E.replaceAll(Nt,""));if(w!=="")return S(w)}else if(E.match(kt))return`calc(${E.replace(kt,"")} * var(--md-typeset-font-size))`}return E};return o.concat(`
    .md-typeset ${r} {
      color: var(--md-default-fg-color);
      line-height: ${c};
      font-family: ${h};
      font-weight: ${A};
      font-size: ${S(y)};
    }
  `)},"")}

.md-typeset .md-content__button {
  color: var(--md-default-fg-color);
}

.md-typeset hr {
  border-bottom: 0.05rem dotted ${e.palette.divider};
}

.md-typeset details {
  font-size: var(--md-typeset-font-size) !important;
}
.md-typeset details summary {
  padding-left: 2.5rem !important;
}
.md-typeset details summary:before,
.md-typeset details summary:after {
  top: 50% !important;
  width: 20px !important;
  height: 20px !important;
  transform: rotate(0deg) translateY(-50%) !important;
}
.md-typeset details[open] > summary:after {
  transform: rotate(90deg) translateX(-50%) !important;
}

.md-typeset blockquote {
  color: var(--md-default-fg-color--light);
  border-left: 0.2rem solid var(--md-default-fg-color--light);
}

.md-typeset table:not([class]) {
  font-size: var(--md-typeset-font-size);
  border: 1px solid var(--md-default-fg-color);
  border-bottom: none;
  border-collapse: collapse;
  border-radius: ${e.shape.borderRadius}px;
}
.md-typeset table:not([class]) th {
  font-weight: bold;
}
.md-typeset table:not([class]) td, .md-typeset table:not([class]) th {
  border-bottom: 1px solid var(--md-default-fg-color);
}

.md-typeset pre > code::-webkit-scrollbar-thumb {
  background-color: hsla(0, 0%, 0%, 0.32);
}
.md-typeset pre > code::-webkit-scrollbar-thumb:hover {
  background-color: hsla(0, 0%, 0%, 0.87);
}

.md-typeset code {
  word-break: keep-all;
}
`,yt=()=>`
/*==================  Animations  ==================*/
/*
  Disable CSS animations on link colors as they lead to issues in dark mode.
  The dark mode color theme is applied later and theirfore there is always an animation from light to dark mode when navigation between pages.
*/
.md-dialog, .md-nav__link, .md-footer__link, .md-typeset a, .md-typeset a::before, .md-typeset .headerlink {
  transition: none;
}
`,At=({theme:e})=>`
/*==================  Extensions  ==================*/

/* HIGHLIGHT */
.highlight .md-clipboard:after {
  content: unset;
}

.highlight .nx {
  color: ${e.palette.type==="dark"?"#ff53a3":"#ec407a"};
}

/* CODE HILITE */
.codehilite .gd {
  background-color: ${e.palette.type==="dark"?"rgba(248,81,73,0.65)":"#fdd"};
}

.codehilite .gi {
  background-color: ${e.palette.type==="dark"?"rgba(46,160,67,0.65)":"#dfd"};
}

/* TABBED */
.tabbed-set>input:nth-child(1):checked~.tabbed-labels>:nth-child(1),
.tabbed-set>input:nth-child(2):checked~.tabbed-labels>:nth-child(2),
.tabbed-set>input:nth-child(3):checked~.tabbed-labels>:nth-child(3),
.tabbed-set>input:nth-child(4):checked~.tabbed-labels>:nth-child(4),
.tabbed-set>input:nth-child(5):checked~.tabbed-labels>:nth-child(5),
.tabbed-set>input:nth-child(6):checked~.tabbed-labels>:nth-child(6),
.tabbed-set>input:nth-child(7):checked~.tabbed-labels>:nth-child(7),
.tabbed-set>input:nth-child(8):checked~.tabbed-labels>:nth-child(8),
.tabbed-set>input:nth-child(9):checked~.tabbed-labels>:nth-child(9),
.tabbed-set>input:nth-child(10):checked~.tabbed-labels>:nth-child(10),
.tabbed-set>input:nth-child(11):checked~.tabbed-labels>:nth-child(11),
.tabbed-set>input:nth-child(12):checked~.tabbed-labels>:nth-child(12),
.tabbed-set>input:nth-child(13):checked~.tabbed-labels>:nth-child(13),
.tabbed-set>input:nth-child(14):checked~.tabbed-labels>:nth-child(14),
.tabbed-set>input:nth-child(15):checked~.tabbed-labels>:nth-child(15),
.tabbed-set>input:nth-child(16):checked~.tabbed-labels>:nth-child(16),
.tabbed-set>input:nth-child(17):checked~.tabbed-labels>:nth-child(17),
.tabbed-set>input:nth-child(18):checked~.tabbed-labels>:nth-child(18),
.tabbed-set>input:nth-child(19):checked~.tabbed-labels>:nth-child(19),
.tabbed-set>input:nth-child(20):checked~.tabbed-labels>:nth-child(20) {
  color: var(--md-accent-fg-color);
  border-color: var(--md-accent-fg-color);
}

/* TASK-LIST */
.task-list-control .task-list-indicator::before {
  background-color: ${e.palette.action.disabledBackground};
}
.task-list-control [type="checkbox"]:checked + .task-list-indicator:before {
 background-color: ${e.palette.success.main};
}

/* ADMONITION */
.admonition {
  font-size: var(--md-typeset-font-size) !important;
}
.admonition .admonition-title {
  padding-left: 2.5rem !important;
}

.admonition .admonition-title:before {
  top: 50% !important;
  width: 20px !important;
  height: 20px !important;
  transform: translateY(-50%) !important;
}
`;const Tt={dark:["#only-light","#gh-light-mode-only"],light:["#only-dark","#gh-dark-mode-only"]};var qt=({theme:e})=>`
/*==================  Palette  ==================*/
/*
  When color palette toggle is enabled in material theme for Mkdocs, there is a possibility to show conditionally 
  images by adding #only-dark or #only-light to resource hash. Backstage doesn't use mkdocs color palette mechanism,
  so there is a need to add css rules from palette*.css manually.
*/

${Tt[e.palette.type].map(o=>`img[src$="${o}"]`).join(", ")} {
  display: none;
}
`;const en=[se,ot,Qt,xe,yt,At,qt],tn=()=>(0,Zt.Ut)(),Pt=()=>{const e=tn(),o=(0,g.A)();return(0,t.useMemo)(()=>{const r={theme:o,sidebar:e};return en.reduce((s,i)=>s+i(r),"")},[o,e])},nn=()=>{const e=Pt();return(0,t.useCallback)(o=>(o.getElementsByTagName("head")[0].insertAdjacentHTML("beforeend",`<style>${e}</style>`),o),[e])},Ut=(e,o,r)=>{const s=e==="src"&&o.endsWith(".svg"),i=!o.match(/^([a-z]*:)?\/\//i),c=o.startsWith(r);return s&&(i||c)},$=({techdocsStorageApi:e,entityId:o,path:r})=>async s=>{const i=await e.getApiOrigin(),c=async(h,A)=>{for(const y of h)if(y.hasAttribute(A)){const S=y.getAttribute(A);if(!S)return;const E=await e.getBaseUrl(S,o,r);if(Ut(A,S,i))try{const R=await(await fetch(E,{credentials:"include"})).text();y.setAttribute(A,`data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(R)))}`)}catch{y.setAttribute("alt",`Error: ${S}`)}else y.setAttribute(A,E)}};return await Promise.all([c(s.querySelectorAll("img"),"src"),c(s.querySelectorAll("script"),"src"),c(s.querySelectorAll("source"),"src"),c(s.querySelectorAll("link"),"href"),c(s.querySelectorAll("a[download]"),"href")]),s};var Bt=a(78264),W=a(90292),Ht=a(52536),k=a.n(Ht);let Fe;Fe=Promise.resolve().then(a.t.bind(a,25873,19));function $e(e,o){Fe.then(r=>{"createRoot"in r?r.createRoot(o).render(e):r.render(e,o)})}const zt=e=>o=>{const r=o.querySelector('[title="Edit this page"]');if(!r||!r.href)return o;const s=new URL(r.href),i=e.byUrl(s);if(i?.type!=="github"&&i?.type!=="gitlab")return o;const c=o.querySelector("article>h1")?.childNodes[0].textContent||"",h=encodeURIComponent(`Documentation Feedback: ${c}`),A=encodeURIComponent(`Page source:
${r.href}

Feedback:`),y=i?.type==="github"?(0,Bt.F)(s.href,"blob"):s.href,S=k()(y),E=`/${S.organization}/${S.name}`,w=r.cloneNode();switch(i?.type){case"gitlab":w.href=`${s.origin}${E}/issues/new?issue[title]=${h}&issue[description]=${A}`;break;case"github":w.href=`${s.origin}${E}/issues/new?title=${h}&body=${A}`;break;default:return o}return $e(t.createElement(W.A),w),w.style.paddingLeft="5px",w.title="Leave feedback for this page",w.id="git-feedback-link",r?.insertAdjacentElement("beforebegin",w),o};var bt=a(27326);const _t=()=>e=>{const o=e.querySelector('.md-header label[for="__drawer"]'),r=e.querySelector("article");if(!o||!r)return e;const s=o.cloneNode();return $e(t.createElement(bt.A),s),s.id="toggle-sidebar",s.title="Toggle Sidebar",s.classList.add("md-content__button"),s.style.setProperty("padding","0 0 0 5px"),s.style.setProperty("margin","0.4rem 0 0.4rem 0.4rem"),r?.prepend(s),e},Ft=()=>e=>(((r,s)=>{Array.from(r).filter(i=>i.hasAttribute(s)).forEach(i=>{const c=i.getAttribute(s);if(c){c.match(/^https?:\/\//i)&&i.setAttribute("target","_blank");try{const h=Be(window.location.href);i.setAttribute(s,new URL(c,h).toString())}catch{i.replaceWith(i.textContent||c)}}})})(Array.from(e.getElementsByTagName("a")),"href"),e);function Be(e){const o=new URL(e);return!o.pathname.endsWith("/")&&!o.pathname.endsWith(".html")&&(o.pathname+="/"),o.toString()}const St=({baseUrl:e,onClick:o})=>r=>(Array.from(r.getElementsByTagName("a")).forEach(s=>{s.addEventListener("click",i=>{const h=s.getAttribute("href");h&&h.startsWith(e)&&!s.hasAttribute("download")&&(i.preventDefault(),o(i,h))})}),r);var He=a(7031),wt=a(50868),Lt=a(10437),We=a(71677),ct=a(36338);const dt=(0,He.A)(e=>({tooltip:{fontSize:"inherit",color:e.palette.text.primary,margin:0,padding:e.spacing(.5),backgroundColor:"transparent",boxShadow:"none"}}))(We.Ay),$t=()=>t.createElement(Lt.A,null,t.createElement("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"})),Wt=({text:e})=>{const[o,r]=(0,t.useState)(!1),[,s]=(0,ct.A)(),i=(0,t.useCallback)(()=>{s(e),r(!0)},[e,s]),c=(0,t.useCallback)(()=>{r(!1)},[r]);return t.createElement(dt,{title:"Copied to clipboard",placement:"left",open:o,onClose:c,leaveDelay:1e3},t.createElement(Xe.A,{style:{color:"inherit",position:"absolute"},className:"md-clipboard md-icon",onClick:i},t.createElement($t,null)))},on=e=>o=>{const r=o.querySelectorAll("pre > code");for(const s of r){const i=s.textContent||"",c=document.createElement("div");s?.parentElement?.prepend(c),$e(t.createElement(wt.A,{theme:e},t.createElement(Wt,{text:i})),c)}return o},xt=()=>e=>(e.querySelector(".md-header")?.remove(),e),at=()=>e=>(e.querySelector(".md-footer .md-copyright")?.remove(),e.querySelector(".md-footer-copyright")?.remove(),e),ze=({onLoading:e,onLoaded:o})=>r=>(e(),r.addEventListener(F,function s(){o(),r.removeEventListener(F,s)}),r),Ve=()=>e=>(setTimeout(()=>{const o=e?.querySelectorAll("li.md-nav__item--active");o.length!==0&&(o.forEach(s=>{const i=s?.querySelector("input");i?.checked||i?.click()}),o[o.length-1].scrollIntoView())},200),e),Rt=async(e,o)=>{let r;if(typeof e=="string")r=new DOMParser().parseFromString(e,"text/html").documentElement;else if(e instanceof Element)r=e;else throw new Error("dom is not a recognized type");for(const s of o)r=await s(r);return r};var Vt=a(38097);const Gt=(0,z.A)(e=>({button:{color:e.palette.primary.light,textDecoration:"underline"}})),Ct=({message:e,handleButtonClick:o,autoHideDuration:r})=>{const s=Gt(),[i,c]=(0,t.useState)(!0),h=()=>c(!1);return t.createElement(Vt.A,{open:i,anchorOrigin:{vertical:"top",horizontal:"right"},autoHideDuration:r,color:"primary",onClose:h,message:e,action:t.createElement(ke.A,{classes:{root:s.button},size:"small",onClick:()=>{h(),o()}},"Redirect now")})},Yt=(e,o)=>{const s=i=>{const c=Be(window.location.href),h=new URL(i,c);if(h.hostname!==window.location.hostname){const y=window.location.pathname,S=y.indexOf(o),E=y.slice(0,S+o.length);return new URL(E,c).href}return h.href};return i=>{for(const c of Array.from(i.querySelectorAll("meta")))if(c.getAttribute("http-equiv")==="refresh"){const h=c.getAttribute("content")?.split("url=");if(!h||h.length<2)return i;const A=h[1],y=s(A);if(window.location.href===y)return i;const S=document.createElement("div");return $e(t.createElement(Ct,{message:"This TechDocs page is no longer maintained. Will automatically redirect to the designated replacement.",handleButtonClick:()=>e(y),autoHideDuration:3e3}),S),document.body.appendChild(S),setTimeout(()=>{e(y)},3e3),i}return i}};function mt(e,o){const r=new URL(o),s=`${r.origin}${r.pathname.replace(/\/$/,"")}`,i=e.replace(s,"").replace(/^\/+/,""),c=new URL(`http://localhost/${i}`);return`${c.pathname}${c.search}${c.hash}`}function ut(){const e=(0,t.useRef)((0,he.Zp)()),r=(0,De.gf)(Qe.U).getOptionalString("app.baseUrl");return(0,t.useCallback)(i=>{let c=i;if(r)try{c=mt(i,r)}catch{}e.current(c)},[r])}const Re="screen and (max-width: 76.1875em)",Ge=e=>{const o=ut(),r=(0,g.A)(),s=(0,p.A)(Re),i=Xt(),c=nn(),h=(0,Je.s)(),A=(0,De.gf)(oe.s),y=(0,De.gf)(P.Y),{state:S,path:E,content:w}=ae(),[R,Ce]=(0,t.useState)(null),be=M(R),Z=(0,t.useCallback)(()=>{if(!R)return;R.querySelectorAll(".md-sidebar").forEach(U=>{if(s)U.style.top="0px";else{const m=document?.querySelector(".techdocs-reader-page")?.getBoundingClientRect().top??0;let n=R.getBoundingClientRect().top??0;const u=R.querySelector(".md-container > .md-tabs")?.getBoundingClientRect().height??0;n<m&&(n=m);const D=Math.max(n,0)+u;U.style.top=`${D}px`;const X=R.querySelector(".md-container > .md-footer")?.getBoundingClientRect().top??window.innerHeight;U.style.height=`${X-D}px`}U.style.setProperty("opacity","1")})},[R,s]);(0,t.useEffect)(()=>(window.addEventListener("resize",Z),window.addEventListener("scroll",Z,!0),()=>{window.removeEventListener("resize",Z),window.removeEventListener("scroll",Z,!0)}),[R,Z]);const V=(0,t.useCallback)(()=>{if(!R)return;const C=R.querySelector(".md-footer");C&&(C.style.width=`${R.getBoundingClientRect().width}px`)},[R]);(0,t.useEffect)(()=>(window.addEventListener("resize",V),()=>{window.removeEventListener("resize",V)}),[R,V]),(0,t.useEffect)(()=>{be||(V(),Z())},[S,be,V,Z]);const Q=(0,t.useCallback)((C,U)=>Rt(C,[i,$({techdocsStorageApi:A,entityId:e,path:U}),Ft(),_t(),xt(),at(),zt(y),c]),[e,y,A,i,c]),ge=(0,t.useCallback)(async C=>Rt(C,[Yt(o,e.name),Ve(),on(r),St({baseUrl:window.location.origin,onClick:(U,J)=>{const m=U.ctrlKey||U.metaKey,n=new URL(J),l=U.target?.innerText||J,u=J.replace(window.location.origin,"");h.captureEvent("click",l,{attributes:{to:u}}),n.hash?m?window.open(J,"_blank"):(o(J),C?.querySelector(`[id="${n.hash.slice(1)}"]`)?.scrollIntoView()):m?window.open(J,"_blank"):o(J)}}),ze({onLoading:()=>{},onLoaded:()=>{C.querySelector(".md-nav__title")?.removeAttribute("for")}}),ze({onLoading:()=>{Array.from(C.querySelectorAll(".md-sidebar")).forEach(J=>{J.style.setProperty("opacity","0")})},onLoaded:()=>{}})]),[r,o,h,e.name]);return(0,t.useEffect)(()=>{if(!w)return()=>{};let C=!0;return Q(w,E).then(async U=>{if(!U?.innerHTML||!C)return;window.scroll({top:0});const J=await ge(U);Ce(J)}),()=>{C=!1}},[w,E,Q,ge]),R};var rt=a(41883),Dt=a(11618),Mt=a(15246);const st=()=>{const e=(0,Dt.YR)(),{shadowRoot:o}=(0,T.V)(),r=o?.querySelector('[data-md-component="content"]'),s=o?.querySelector('div[data-md-component="sidebar"][data-md-type="navigation"], div[data-md-component="navigation"]');let i=s?.querySelector('[data-techdocs-addons-location="primary sidebar"]');i||(i=document.createElement("div"),i.setAttribute("data-techdocs-addons-location","primary sidebar"),s?.prepend(i));const c=o?.querySelector('div[data-md-component="sidebar"][data-md-type="toc"], div[data-md-component="toc"]');let h=c?.querySelector('[data-techdocs-addons-location="secondary sidebar"]');return h||(h=document.createElement("div"),h.setAttribute("data-techdocs-addons-location","secondary sidebar"),c?.prepend(h)),t.createElement(t.Fragment,null,t.createElement(rt.A,{container:i},e.renderComponentsByLocation(Mt.e.PrimarySidebar)),t.createElement(rt.A,{container:r},e.renderComponentsByLocation(Mt.e.Content)),t.createElement(rt.A,{container:h},e.renderComponentsByLocation(Mt.e.SecondarySidebar)))},an=(0,z.A)({search:{width:"100%","@media (min-width: 76.1875em)":{width:"calc(100% - 34.4rem)",margin:"0 auto"},"@media print":{display:"none"}}}),rn=we(e=>{const{withSearch:o=!0,onReady:r}=e,s=an(),{entityMetadata:{value:i,loading:c},entityRef:h,setShadowRoot:A}=(0,T.V)(),y=Ge(h),S=window.location.pathname,E=window.location.hash,w=M(y),[R]=(0,q.$r)([`[id="${E.slice(1)}"]`]);(0,t.useEffect)(()=>{w||(E?R&&R.scrollIntoView():document?.querySelector("header")?.scrollIntoView())},[S,E,R,w]);const Ce=(0,t.useCallback)(be=>{A(be),r instanceof Function&&r()},[A,r]);return c===!1&&!i?t.createElement(ee.M,{status:"404",statusMessage:"PAGE NOT FOUND"}):y?t.createElement(ue.U,null,t.createElement(O.A,{container:!0},t.createElement(O.A,{xs:12,item:!0},t.createElement(d,null)),o&&t.createElement(O.A,{className:s.search,xs:"auto",item:!0},t.createElement(Ke,{entityId:h,entityTitle:i?.metadata?.title})),t.createElement(O.A,{xs:12,item:!0},t.createElement(b,{element:y,onAppend:Ce},t.createElement(st,null))))):t.createElement(ue.U,null,t.createElement(O.A,{container:!0},t.createElement(O.A,{xs:12,item:!0},t.createElement(d,null))))}),j=null},84893:(_e,H,a)=>{"use strict";a.d(H,{Z:()=>q});var t=a(14041),O=a(58837),z=a(29365),T=a(75173),L=a(71677),le=a(37757),_=a(77125),G=a(9684),F=a(66839),Ee=a(11618),M=a(15246);const b=(0,O.A)(ee=>({root:{gridArea:"pageSubheader",flexDirection:"column",minHeight:"auto",padding:ee.spacing(3,3,0),"@media print":{display:"none"}}})),q=ee=>{const ue=b(),[te,ce]=(0,t.useState)(null),N=(0,t.useCallback)(Ae=>{ce(Ae.currentTarget)},[]),I=(0,t.useCallback)(()=>{ce(null)},[]),{entityMetadata:{value:ye,loading:B}}=(0,F.V)(),ne=(0,Ee.YR)(),v=ne.renderComponentsByLocation(M.e.Subheader),he=ne.renderComponentsByLocation(M.e.Settings);return!v&&!he||B===!1&&!ye?null:t.createElement(T.A,{classes:ue,...ee.toolbarProps},t.createElement(_.A,{display:"flex",justifyContent:"flex-end",width:"100%",flexWrap:"wrap"},v,he?t.createElement(t.Fragment,null,t.createElement(L.Ay,{title:"Settings"},t.createElement(z.A,{"aria-controls":"tech-docs-reader-page-settings","aria-haspopup":"true",onClick:N},t.createElement(G.A,null))),t.createElement(le.A,{id:"tech-docs-reader-page-settings",getContentAnchorEl:null,anchorEl:te,anchorOrigin:{vertical:"bottom",horizontal:"right"},open:!!te,onClose:I,keepMounted:!0},t.createElement("div",null,he))):null))}},33402:(_e,H,a)=>{"use strict";a.d(H,{b:()=>qe,W:()=>ft});var t=a(14041),O=a(18690),z=a(82326),T=a(11618),L=a(66839),le=a(50460),_=a(93285),G=a(42899),F=a(4387),Ee=a(13660),M=a(15246),b=a(699),q=a(37281),ee=a(14158),ue=a(97214),te=a(64398),ce=a(16654),N=a(18139),I=a(54195),ye=a(72814),B=a(45250),ne=a(17749);const v=t.createElement(F.A,{animation:"wave",variant:"text",height:40}),he=pe=>{const{children:oe}=pe,fe=(0,T.YR)(),Se=(0,N.gf)(I.U),{title:Y,setTitle:x,subtitle:ae,setSubtitle:de,entityRef:we,metadata:{value:f,loading:d},entityMetadata:{value:p,loading:g}}=(0,L.V)();(0,t.useEffect)(()=>{f&&(x(f.site_name),de(()=>{let{site_description:Le}=f;return(!Le||Le==="None")&&(Le=""),Le}))},[f,x,de]);const P=Se.getOptional("app.title")||"Backstage",Te=[Y,ae,P].filter(Boolean).join(" | "),{locationMetadata:re,spec:et}=p||{},tt=et?.lifecycle,Me=p?(0,b.t)(p,ue.vv):[],gt=(0,ye.S)(ne.rQ)(),vt=t.createElement(t.Fragment,null,t.createElement(te.S,{label:(0,B.capitalize)(p?.kind||"entity"),value:t.createElement(q.z,{color:"inherit",entityRef:we,title:p?.metadata.title,defaultKind:"Component"})}),Me.length>0&&t.createElement(te.S,{label:"Owner",value:t.createElement(ee.i,{color:"inherit",entityRefs:Me,defaultKind:"group"})}),tt?t.createElement(te.S,{label:"Lifecycle",value:String(tt)}):null,re&&re.type!=="dir"&&re.type!=="file"?t.createElement(te.S,{label:"",value:t.createElement(G.A,{container:!0,direction:"column",alignItems:"center"},t.createElement(G.A,{style:{padding:0},item:!0},t.createElement(Ee.A,{style:{marginTop:"-25px"}})),t.createElement(G.A,{style:{padding:0},item:!0},"Source")),url:re.target}):null);return!g&&p===void 0||!d&&f===void 0?null:t.createElement(ce.Y,{type:"Documentation",typeLink:gt,title:Y||v,subtitle:ae===""?void 0:ae||v},t.createElement(_.A,{titleTemplate:"%s"},t.createElement("title",null,Te)),vt,oe,fe.renderComponentsByLocation(M.e.Header))};var Ae=a(84893),Ie=a(76888),Ye=a(85408),Ke=a(12554),ke=a(95208),Ne=a(64947),je=a(95159),ht=a(61617),Xe=a(91042),it=a(76842),Ze=a(3399);const lt="/.backstage/auth/v1/cookie",Pe=365*24*36e5;function pt(pe){const{pluginId:oe}=pe??{},fe=(0,N.gf)(je.a),Se=(0,N.gf)(ht.I),Y=(0,t.useMemo)(()=>"BroadcastChannel"in window?new BroadcastChannel(`${oe}-auth-cookie-expires-at`):null,[oe]),[x,ae]=(0,Xe.Y)(async()=>{const d=`${await Se.getBaseUrl(oe)}${lt}`,p=await fe.fetch(`${d}`,{credentials:"include"});if(!p.ok){if(p.status===404)return{expiresAt:new Date(Date.now()+Pe)};throw await Ze.o3.fromResponse(p)}const g=await p.json();if(!g.expiresAt)throw new Error("No expiration date found in response");return g});(0,it.u)(ae.execute);const de=(0,t.useCallback)(()=>{ae.execute()},[ae]),we=(0,t.useCallback)(f=>{const d=(1+3*Math.random())*6e4,p=Date.parse(f.expiresAt)-Date.now()-d,g=setTimeout(de,p);return()=>clearTimeout(g)},[de]);return(0,t.useEffect)(()=>{if(x.status!=="success"||!x.result)return()=>{};Y?.postMessage({action:"COOKIE_REFRESH_SUCCESS",payload:x.result});let f=we(x.result);const d=p=>{const{action:g,payload:P}=p.data;g==="COOKIE_REFRESH_SUCCESS"&&(f(),f=we(P))};return Y?.addEventListener("message",d),()=>{f(),Y?.removeEventListener("message",d)}},[x,we,Y]),x.status==="not-executed"?{status:"loading"}:x.status==="loading"&&!x.result?{status:"loading"}:x.status==="loading"&&x.error?{status:"loading"}:x.status==="error"&&x.error?{status:"error",error:x.error,retry:de}:{status:"success",data:x.result}}function Ue(pe){const{children:oe,...fe}=pe,Se=(0,ke.n)(),{Progress:Y}=Se.getComponents(),x=pt(fe);return x.status==="loading"?t.createElement(Y,null):x.status==="error"?t.createElement(Ke.b,{error:x.error},t.createElement(Ne.A,{variant:"outlined",onClick:x.retry},"Retry")):t.createElement(t.Fragment,null,oe)}var De=a(54917),Qe=a(98392),Je=a(50868);const qe=pe=>{const{withSearch:oe,withHeader:fe=!0}=pe;return t.createElement(z.Y,{themeId:"documentation"},fe&&t.createElement(he,null),t.createElement(Ae.Z,null),t.createElement(le.p,{withSearch:oe}))},ft=pe=>{const oe=(0,De.A)(),fe=(0,Qe.A)({...oe,...pe.overrideThemeOptions||{}}),{kind:Se,name:Y,namespace:x}=(0,Ie.K)(ne.Oc),{children:ae,entityRef:de={kind:Se,name:Y,namespace:x}}=pe,we=(0,O.P1)();if(!ae){const p=(we?t.Children.toArray(we.props.children):[]).flatMap(g=>g?.props?.children??[]).find(g=>!(0,Ye.E)(g,T.AF)&&!(0,Ye.E)(g,T.Wm));return t.createElement(Je.A,{theme:fe},t.createElement(Ue,{pluginId:"techdocs"},t.createElement(L.R,{entityRef:de},p||t.createElement(qe,null))))}return t.createElement(Je.A,{theme:fe},t.createElement(Ue,{pluginId:"techdocs"},t.createElement(L.R,{entityRef:de},({metadata:f,entityMetadata:d,onReady:p})=>t.createElement("div",{className:"techdocs-reader-page"},t.createElement(z.Y,{themeId:"documentation"},ae instanceof Function?ae({entityRef:de,techdocsMetadataValue:f.value,entityMetadataValue:d.value,onReady:p}):ae)))))}},41472:(_e,H,a)=>{"use strict";a.r(H),a.d(H,{TechDocsSearchResultListItem:()=>F});var t=a(14041),O=a(46423),z=a(5951),T=a(58837),L=a(72501),le=a(75202),_=a(51470);const G=(0,T.A)({flexContainer:{flexWrap:"wrap"},itemText:{width:"100%",marginBottom:"1rem"}}),F=Ee=>{const{result:M,highlight:b,lineClamp:q=5,asListItem:ee=!0,asLink:ue=!0,title:te,icon:ce}=Ee,N=G(),I=({children:ne})=>ue?t.createElement(le.N_,{noTrack:!0,to:M.location},ne):t.createElement(t.Fragment,null,ne),ye=()=>{const ne=b?.fields.title?t.createElement(_.e,{text:b.fields.title,preTag:b.preTag,postTag:b.postTag}):M.title,v=b?.fields.entityTitle?t.createElement(_.e,{text:b.fields.entityTitle,preTag:b.preTag,postTag:b.postTag}):M.entityTitle,he=b?.fields.name?t.createElement(_.e,{text:b.fields.name,preTag:b.preTag,postTag:b.postTag}):M.name;return M?t.createElement(z.A,{className:N.itemText,primaryTypographyProps:{variant:"h6"},primary:t.createElement(I,null,te||t.createElement(t.Fragment,null,ne," | ",v??he," docs")),secondary:t.createElement(L.A,{component:"span",style:{display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:q,overflow:"hidden"},color:"textSecondary",variant:"body2"},b?.fields.text?t.createElement(_.e,{text:b.fields.text,preTag:b.preTag,postTag:b.postTag}):M.text)}):null},B=({children:ne})=>ee?t.createElement(t.Fragment,null,ce&&t.createElement(O.A,null,typeof ce=="function"?ce(M):ce),t.createElement("div",{className:N.flexContainer},ne)):t.createElement(t.Fragment,null,ne);return t.createElement(B,null,t.createElement(ye,null))}},96124:function(_e){/*! @license DOMPurify 3.1.7 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.1.7/LICENSE */(function(H,a){_e.exports=a()})(this,function(){"use strict";const{entries:H,setPrototypeOf:a,isFrozen:t,getPrototypeOf:O,getOwnPropertyDescriptor:z}=Object;let{freeze:T,seal:L,create:le}=Object,{apply:_,construct:G}=typeof Reflect<"u"&&Reflect;T||(T=function(d){return d}),L||(L=function(d){return d}),_||(_=function(d,p,g){return d.apply(p,g)}),G||(G=function(d,p){return new d(...p)});const F=B(Array.prototype.forEach),Ee=B(Array.prototype.pop),M=B(Array.prototype.push),b=B(String.prototype.toLowerCase),q=B(String.prototype.toString),ee=B(String.prototype.match),ue=B(String.prototype.replace),te=B(String.prototype.indexOf),ce=B(String.prototype.trim),N=B(Object.prototype.hasOwnProperty),I=B(RegExp.prototype.test),ye=ne(TypeError);function B(f){return function(d){for(var p=arguments.length,g=new Array(p>1?p-1:0),P=1;P<p;P++)g[P-1]=arguments[P];return _(f,d,g)}}function ne(f){return function(){for(var d=arguments.length,p=new Array(d),g=0;g<d;g++)p[g]=arguments[g];return G(f,p)}}function v(f,d){let p=arguments.length>2&&arguments[2]!==void 0?arguments[2]:b;a&&a(f,null);let g=d.length;for(;g--;){let P=d[g];if(typeof P=="string"){const Te=p(P);Te!==P&&(t(d)||(d[g]=Te),P=Te)}f[P]=!0}return f}function he(f){for(let d=0;d<f.length;d++)N(f,d)||(f[d]=null);return f}function Ae(f){const d=le(null);for(const[p,g]of H(f))N(f,p)&&(Array.isArray(g)?d[p]=he(g):g&&typeof g=="object"&&g.constructor===Object?d[p]=Ae(g):d[p]=g);return d}function Ie(f,d){for(;f!==null;){const g=z(f,d);if(g){if(g.get)return B(g.get);if(typeof g.value=="function")return B(g.value)}f=O(f)}function p(){return null}return p}const Ye=T(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Ke=T(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),ke=T(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Ne=T(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),je=T(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),ht=T(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Xe=T(["#text"]),it=T(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),Ze=T(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),lt=T(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Pe=T(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),pt=L(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Ue=L(/<%[\w\W]*|[\w\W]*%>/gm),De=L(/\${[\w\W]*}/gm),Qe=L(/^data-[\-\w.\u00B7-\uFFFF]/),Je=L(/^aria-[\-\w]+$/),qe=L(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),ft=L(/^(?:\w+script|data):/i),pe=L(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),oe=L(/^html$/i),fe=L(/^[a-z][.\w]*(-[.\w]+)+$/i);var Se=Object.freeze({__proto__:null,MUSTACHE_EXPR:pt,ERB_EXPR:Ue,TMPLIT_EXPR:De,DATA_ATTR:Qe,ARIA_ATTR:Je,IS_ALLOWED_URI:qe,IS_SCRIPT_OR_DATA:ft,ATTR_WHITESPACE:pe,DOCTYPE_NAME:oe,CUSTOM_ELEMENT:fe});const Y={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,progressingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},x=function(){return typeof window>"u"?null:window},ae=function(d,p){if(typeof d!="object"||typeof d.createPolicy!="function")return null;let g=null;const P="data-tt-policy-suffix";p&&p.hasAttribute(P)&&(g=p.getAttribute(P));const Te="dompurify"+(g?"#"+g:"");try{return d.createPolicy(Te,{createHTML(re){return re},createScriptURL(re){return re}})}catch{return console.warn("TrustedTypes policy "+Te+" could not be created."),null}};function de(){let f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:x();const d=m=>de(m);if(d.version="3.1.7",d.removed=[],!f||!f.document||f.document.nodeType!==Y.document)return d.isSupported=!1,d;let{document:p}=f;const g=p,P=g.currentScript,{DocumentFragment:Te,HTMLTemplateElement:re,Node:et,Element:tt,NodeFilter:Me,NamedNodeMap:gt=f.NamedNodeMap||f.MozNamedAttrMap,HTMLFormElement:vt,DOMParser:It,trustedTypes:nt}=f,Le=tt.prototype,Kt=Ie(Le,"cloneNode"),jt=Ie(Le,"remove"),Xt=Ie(Le,"nextSibling"),Zt=Ie(Le,"childNodes"),K=Ie(Le,"parentNode");if(typeof re=="function"){const m=p.createElement("template");m.content&&m.content.ownerDocument&&(p=m.content.ownerDocument)}let se,ot="";const{implementation:Et,createNodeIterator:Qt,createDocumentFragment:Jt,getElementsByTagName:kt}=p,{importNode:Nt}=g;let xe={};d.isSupported=typeof H=="function"&&typeof K=="function"&&Et&&Et.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:yt,ERB_EXPR:At,TMPLIT_EXPR:Tt,DATA_ATTR:qt,ARIA_ATTR:en,IS_SCRIPT_OR_DATA:tn,ATTR_WHITESPACE:Pt,CUSTOM_ELEMENT:nn}=Se;let{IS_ALLOWED_URI:Ut}=Se,$=null;const Bt=v({},[...Ye,...Ke,...ke,...je,...Xe]);let W=null;const Ht=v({},[...it,...Ze,...lt,...Pe]);let k=Object.seal(le(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Fe=null,$e=null,zt=!0,bt=!0,_t=!1,Ft=!0,Be=!1,St=!0,He=!1,wt=!1,Lt=!1,We=!1,ct=!1,dt=!1,$t=!0,Wt=!1;const on="user-content-";let xt=!0,at=!1,ze={},Ve=null;const Rt=v({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let Vt=null;const Gt=v({},["audio","video","img","source","image","track"]);let Ct=null;const Yt=v({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),mt="http://www.w3.org/1998/Math/MathML",ut="http://www.w3.org/2000/svg",Re="http://www.w3.org/1999/xhtml";let Ge=Re,rt=!1,Dt=null;const Mt=v({},[mt,ut,Re],q);let st=null;const an=["application/xhtml+xml","text/html"],rn="text/html";let j=null,e=null;const o=p.createElement("form"),r=function(n){return n instanceof RegExp||n instanceof Function},s=function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(e&&e===n)){if((!n||typeof n!="object")&&(n={}),n=Ae(n),st=an.indexOf(n.PARSER_MEDIA_TYPE)===-1?rn:n.PARSER_MEDIA_TYPE,j=st==="application/xhtml+xml"?q:b,$=N(n,"ALLOWED_TAGS")?v({},n.ALLOWED_TAGS,j):Bt,W=N(n,"ALLOWED_ATTR")?v({},n.ALLOWED_ATTR,j):Ht,Dt=N(n,"ALLOWED_NAMESPACES")?v({},n.ALLOWED_NAMESPACES,q):Mt,Ct=N(n,"ADD_URI_SAFE_ATTR")?v(Ae(Yt),n.ADD_URI_SAFE_ATTR,j):Yt,Vt=N(n,"ADD_DATA_URI_TAGS")?v(Ae(Gt),n.ADD_DATA_URI_TAGS,j):Gt,Ve=N(n,"FORBID_CONTENTS")?v({},n.FORBID_CONTENTS,j):Rt,Fe=N(n,"FORBID_TAGS")?v({},n.FORBID_TAGS,j):{},$e=N(n,"FORBID_ATTR")?v({},n.FORBID_ATTR,j):{},ze=N(n,"USE_PROFILES")?n.USE_PROFILES:!1,zt=n.ALLOW_ARIA_ATTR!==!1,bt=n.ALLOW_DATA_ATTR!==!1,_t=n.ALLOW_UNKNOWN_PROTOCOLS||!1,Ft=n.ALLOW_SELF_CLOSE_IN_ATTR!==!1,Be=n.SAFE_FOR_TEMPLATES||!1,St=n.SAFE_FOR_XML!==!1,He=n.WHOLE_DOCUMENT||!1,We=n.RETURN_DOM||!1,ct=n.RETURN_DOM_FRAGMENT||!1,dt=n.RETURN_TRUSTED_TYPE||!1,Lt=n.FORCE_BODY||!1,$t=n.SANITIZE_DOM!==!1,Wt=n.SANITIZE_NAMED_PROPS||!1,xt=n.KEEP_CONTENT!==!1,at=n.IN_PLACE||!1,Ut=n.ALLOWED_URI_REGEXP||qe,Ge=n.NAMESPACE||Re,k=n.CUSTOM_ELEMENT_HANDLING||{},n.CUSTOM_ELEMENT_HANDLING&&r(n.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(k.tagNameCheck=n.CUSTOM_ELEMENT_HANDLING.tagNameCheck),n.CUSTOM_ELEMENT_HANDLING&&r(n.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(k.attributeNameCheck=n.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),n.CUSTOM_ELEMENT_HANDLING&&typeof n.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(k.allowCustomizedBuiltInElements=n.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Be&&(bt=!1),ct&&(We=!0),ze&&($=v({},Xe),W=[],ze.html===!0&&(v($,Ye),v(W,it)),ze.svg===!0&&(v($,Ke),v(W,Ze),v(W,Pe)),ze.svgFilters===!0&&(v($,ke),v(W,Ze),v(W,Pe)),ze.mathMl===!0&&(v($,je),v(W,lt),v(W,Pe))),n.ADD_TAGS&&($===Bt&&($=Ae($)),v($,n.ADD_TAGS,j)),n.ADD_ATTR&&(W===Ht&&(W=Ae(W)),v(W,n.ADD_ATTR,j)),n.ADD_URI_SAFE_ATTR&&v(Ct,n.ADD_URI_SAFE_ATTR,j),n.FORBID_CONTENTS&&(Ve===Rt&&(Ve=Ae(Ve)),v(Ve,n.FORBID_CONTENTS,j)),xt&&($["#text"]=!0),He&&v($,["html","head","body"]),$.table&&(v($,["tbody"]),delete Fe.tbody),n.TRUSTED_TYPES_POLICY){if(typeof n.TRUSTED_TYPES_POLICY.createHTML!="function")throw ye('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof n.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw ye('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');se=n.TRUSTED_TYPES_POLICY,ot=se.createHTML("")}else se===void 0&&(se=ae(nt,P)),se!==null&&typeof ot=="string"&&(ot=se.createHTML(""));T&&T(n),e=n}},i=v({},["mi","mo","mn","ms","mtext"]),c=v({},["annotation-xml"]),h=v({},["title","style","font","a","script"]),A=v({},[...Ke,...ke,...Ne]),y=v({},[...je,...ht]),S=function(n){let l=K(n);(!l||!l.tagName)&&(l={namespaceURI:Ge,tagName:"template"});const u=b(n.tagName),D=b(l.tagName);return Dt[n.namespaceURI]?n.namespaceURI===ut?l.namespaceURI===Re?u==="svg":l.namespaceURI===mt?u==="svg"&&(D==="annotation-xml"||i[D]):!!A[u]:n.namespaceURI===mt?l.namespaceURI===Re?u==="math":l.namespaceURI===ut?u==="math"&&c[D]:!!y[u]:n.namespaceURI===Re?l.namespaceURI===ut&&!c[D]||l.namespaceURI===mt&&!i[D]?!1:!y[u]&&(h[u]||!A[u]):!!(st==="application/xhtml+xml"&&Dt[n.namespaceURI]):!1},E=function(n){M(d.removed,{element:n});try{K(n).removeChild(n)}catch{jt(n)}},w=function(n,l){try{M(d.removed,{attribute:l.getAttributeNode(n),from:l})}catch{M(d.removed,{attribute:null,from:l})}if(l.removeAttribute(n),n==="is"&&!W[n])if(We||ct)try{E(l)}catch{}else try{l.setAttribute(n,"")}catch{}},R=function(n){let l=null,u=null;if(Lt)n="<remove></remove>"+n;else{const X=ee(n,/^[\r\n\t ]+/);u=X&&X[0]}st==="application/xhtml+xml"&&Ge===Re&&(n='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+n+"</body></html>");const D=se?se.createHTML(n):n;if(Ge===Re)try{l=new It().parseFromString(D,st)}catch{}if(!l||!l.documentElement){l=Et.createDocument(Ge,"template",null);try{l.documentElement.innerHTML=rt?ot:D}catch{}}const ie=l.body||l.documentElement;return n&&u&&ie.insertBefore(p.createTextNode(u),ie.childNodes[0]||null),Ge===Re?kt.call(l,He?"html":"body")[0]:He?l.documentElement:ie},Ce=function(n){return Qt.call(n.ownerDocument||n,n,Me.SHOW_ELEMENT|Me.SHOW_COMMENT|Me.SHOW_TEXT|Me.SHOW_PROCESSING_INSTRUCTION|Me.SHOW_CDATA_SECTION,null)},be=function(n){return n instanceof vt&&(typeof n.nodeName!="string"||typeof n.textContent!="string"||typeof n.removeChild!="function"||!(n.attributes instanceof gt)||typeof n.removeAttribute!="function"||typeof n.setAttribute!="function"||typeof n.namespaceURI!="string"||typeof n.insertBefore!="function"||typeof n.hasChildNodes!="function")},Z=function(n){return typeof et=="function"&&n instanceof et},V=function(n,l,u){xe[n]&&F(xe[n],D=>{D.call(d,l,u,e)})},Q=function(n){let l=null;if(V("beforeSanitizeElements",n,null),be(n))return E(n),!0;const u=j(n.nodeName);if(V("uponSanitizeElement",n,{tagName:u,allowedTags:$}),n.hasChildNodes()&&!Z(n.firstElementChild)&&I(/<[/\w]/g,n.innerHTML)&&I(/<[/\w]/g,n.textContent)||n.nodeType===Y.progressingInstruction||St&&n.nodeType===Y.comment&&I(/<[/\w]/g,n.data))return E(n),!0;if(!$[u]||Fe[u]){if(!Fe[u]&&C(u)&&(k.tagNameCheck instanceof RegExp&&I(k.tagNameCheck,u)||k.tagNameCheck instanceof Function&&k.tagNameCheck(u)))return!1;if(xt&&!Ve[u]){const D=K(n)||n.parentNode,ie=Zt(n)||n.childNodes;if(ie&&D){const X=ie.length;for(let ve=X-1;ve>=0;--ve){const Oe=Kt(ie[ve],!0);Oe.__removalCount=(n.__removalCount||0)+1,D.insertBefore(Oe,Xt(n))}}}return E(n),!0}return n instanceof tt&&!S(n)||(u==="noscript"||u==="noembed"||u==="noframes")&&I(/<\/no(script|embed|frames)/i,n.innerHTML)?(E(n),!0):(Be&&n.nodeType===Y.text&&(l=n.textContent,F([yt,At,Tt],D=>{l=ue(l,D," ")}),n.textContent!==l&&(M(d.removed,{element:n.cloneNode()}),n.textContent=l)),V("afterSanitizeElements",n,null),!1)},ge=function(n,l,u){if($t&&(l==="id"||l==="name")&&(u in p||u in o))return!1;if(!(bt&&!$e[l]&&I(qt,l))){if(!(zt&&I(en,l))){if(!W[l]||$e[l]){if(!(C(n)&&(k.tagNameCheck instanceof RegExp&&I(k.tagNameCheck,n)||k.tagNameCheck instanceof Function&&k.tagNameCheck(n))&&(k.attributeNameCheck instanceof RegExp&&I(k.attributeNameCheck,l)||k.attributeNameCheck instanceof Function&&k.attributeNameCheck(l))||l==="is"&&k.allowCustomizedBuiltInElements&&(k.tagNameCheck instanceof RegExp&&I(k.tagNameCheck,u)||k.tagNameCheck instanceof Function&&k.tagNameCheck(u))))return!1}else if(!Ct[l]){if(!I(Ut,ue(u,Pt,""))){if(!((l==="src"||l==="xlink:href"||l==="href")&&n!=="script"&&te(u,"data:")===0&&Vt[n])){if(!(_t&&!I(tn,ue(u,Pt,"")))){if(u)return!1}}}}}}return!0},C=function(n){return n!=="annotation-xml"&&ee(n,nn)},U=function(n){V("beforeSanitizeAttributes",n,null);const{attributes:l}=n;if(!l)return;const u={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:W};let D=l.length;for(;D--;){const ie=l[D],{name:X,namespaceURI:ve,value:Oe}=ie,Ot=j(X);let me=X==="value"?Oe:ce(Oe);if(u.attrName=Ot,u.attrValue=me,u.keepAttr=!0,u.forceKeepAttr=void 0,V("uponSanitizeAttribute",n,u),me=u.attrValue,u.forceKeepAttr||(w(X,n),!u.keepAttr))continue;if(!Ft&&I(/\/>/i,me)){w(X,n);continue}Be&&F([yt,At,Tt],ln=>{me=ue(me,ln," ")});const sn=j(n.nodeName);if(ge(sn,Ot,me)){if(Wt&&(Ot==="id"||Ot==="name")&&(w(X,n),me=on+me),St&&I(/((--!?|])>)|<\/(style|title)/i,me)){w(X,n);continue}if(se&&typeof nt=="object"&&typeof nt.getAttributeType=="function"&&!ve)switch(nt.getAttributeType(sn,Ot)){case"TrustedHTML":{me=se.createHTML(me);break}case"TrustedScriptURL":{me=se.createScriptURL(me);break}}try{ve?n.setAttributeNS(ve,X,me):n.setAttribute(X,me),be(n)?E(n):Ee(d.removed)}catch{}}}V("afterSanitizeAttributes",n,null)},J=function m(n){let l=null;const u=Ce(n);for(V("beforeSanitizeShadowDOM",n,null);l=u.nextNode();)V("uponSanitizeShadowNode",l,null),!Q(l)&&(l.content instanceof Te&&m(l.content),U(l));V("afterSanitizeShadowDOM",n,null)};return d.sanitize=function(m){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=null,u=null,D=null,ie=null;if(rt=!m,rt&&(m="<!-->"),typeof m!="string"&&!Z(m))if(typeof m.toString=="function"){if(m=m.toString(),typeof m!="string")throw ye("dirty is not a string, aborting")}else throw ye("toString is not a function");if(!d.isSupported)return m;if(wt||s(n),d.removed=[],typeof m=="string"&&(at=!1),at){if(m.nodeName){const Oe=j(m.nodeName);if(!$[Oe]||Fe[Oe])throw ye("root node is forbidden and cannot be sanitized in-place")}}else if(m instanceof et)l=R("<!---->"),u=l.ownerDocument.importNode(m,!0),u.nodeType===Y.element&&u.nodeName==="BODY"||u.nodeName==="HTML"?l=u:l.appendChild(u);else{if(!We&&!Be&&!He&&m.indexOf("<")===-1)return se&&dt?se.createHTML(m):m;if(l=R(m),!l)return We?null:dt?ot:""}l&&Lt&&E(l.firstChild);const X=Ce(at?m:l);for(;D=X.nextNode();)Q(D)||(D.content instanceof Te&&J(D.content),U(D));if(at)return m;if(We){if(ct)for(ie=Jt.call(l.ownerDocument);l.firstChild;)ie.appendChild(l.firstChild);else ie=l;return(W.shadowroot||W.shadowrootmode)&&(ie=Nt.call(g,ie,!0)),ie}let ve=He?l.outerHTML:l.innerHTML;return He&&$["!doctype"]&&l.ownerDocument&&l.ownerDocument.doctype&&l.ownerDocument.doctype.name&&I(oe,l.ownerDocument.doctype.name)&&(ve="<!DOCTYPE "+l.ownerDocument.doctype.name+`>
`+ve),Be&&F([yt,At,Tt],Oe=>{ve=ue(ve,Oe," ")}),se&&dt?se.createHTML(ve):ve},d.setConfig=function(){let m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};s(m),wt=!0},d.clearConfig=function(){e=null,wt=!1},d.isValidAttribute=function(m,n,l){e||s({});const u=j(m),D=j(n);return ge(u,D,l)},d.addHook=function(m,n){typeof n=="function"&&(xe[m]=xe[m]||[],M(xe[m],n))},d.removeHook=function(m){if(xe[m])return Ee(xe[m])},d.removeHooks=function(m){xe[m]&&(xe[m]=[])},d.removeAllHooks=function(){xe={}},d}var we=de();return we})},13660:(_e,H,a)=>{"use strict";var t,O=a(4293),z=a(78920);t={value:!0},H.A=void 0;var T=z(a(14041)),L=O(a(74044)),le=(0,L.default)(T.createElement("path",{d:"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"}),"Code");H.A=le},90292:(_e,H,a)=>{"use strict";var t,O=a(4293),z=a(78920);t={value:!0},H.A=void 0;var T=z(a(14041)),L=O(a(74044)),le=(0,L.default)(T.createElement("path",{d:"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17l-.59.59-.58.58V4h16v12zm-9-4h2v2h-2zm0-6h2v4h-2z"}),"FeedbackOutlined");H.A=le},91042:(_e,H,a)=>{"use strict";a.d(H,{Y:()=>z});var t=a(14041),O=a(16261);function z(T,L){const[le,_]=(0,t.useState)({status:"not-executed",error:void 0,result:L}),G=(0,t.useRef)(),F=(0,t.useRef)(),Ee=(0,O.J)({execute(...M){F.current=M;const b=T(...M);return G.current=b,_(q=>({...q,status:"loading"})),b.then(q=>{b===G.current&&_(ee=>({...ee,status:"success",error:void 0,result:q}))},q=>{b===G.current&&_(ee=>({...ee,status:"error",error:q}))}),b},reset(){_({status:"not-executed",error:void 0,result:L}),G.current=void 0,F.current=void 0}});return[le,(0,t.useMemo)(()=>({reset(){Ee.current.reset()},execute:(...M)=>Ee.current.execute(...M)}),[]),{promise:G.current,lastArgs:F.current}]}}}]);})();

//# sourceMappingURL=3402.cfcdfc07.chunk.js.map