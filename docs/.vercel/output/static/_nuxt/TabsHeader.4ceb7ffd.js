import{b as _,x as c,G as x,o as a,f as n,F as g,r as m,h as u,K as v,j as b,p as k,l as I,t as w,L as T,M as $,B as S,v as C}from"./entry.5c8819da.js";const z=t=>(T("data-v-c344a03d"),t=t(),$(),t),B={class:"tabs-header relative bg-gray-800 text-white"},H=["onClick"],L=z(()=>u("span",{class:"flex h-full w-full rounded-lg bg-gray-700 dark:bg-gray-900"},null,-1)),N=[L],U=_({__name:"TabsHeader",props:{tabs:{type:Array,required:!0},activeTabIndex:{type:Number,required:!0}},emits:["update:activeTabIndex"],setup(t,{emit:p}){const h=t,o=c(),s=c(),l=e=>{!e||(s.value.style.left=`${e.offsetLeft}px`,s.value.style.top=`${e.offsetTop}px`,s.value.style.width=`${e.clientWidth}px`,s.value.style.height=`${e.clientHeight}px`,s.value.style.transform="scale(1)",s.value.style.opacity=1)},f=(e,i)=>{p("update:activeTabIndex",i),S(()=>l(e.target))};return x(o,e=>{!e||setTimeout(()=>{l(o.value.children[h.activeTabIndex])},50)},{immediate:!0}),(e,i)=>(a(),n("div",B,[t.tabs?(a(),n("div",{key:0,ref_key:"tabsRef",ref:o,class:"relative z-0 px-2"},[(a(!0),n(g,null,m(t.tabs,({label:d},r)=>(a(),n("button",{key:`${r}${d}`,class:I(["xs:py-3 xs:my-0 relative my-2 rounded-lg px-2 py-1.5 font-mono text-sm tracking-tight focus:outline-none",[t.activeTabIndex===r?"text-white":"text-gray-200 hover:text-white"]]),onClick:y=>f(y,r)},w(d),11,H))),128)),u("span",{ref_key:"highlightUnderline",ref:s,class:"highlight-underline xs:py-1.5 absolute -z-[1]",style:v({transform:"scale(0)",opacity:0})},N,4)],512)):b("",!0),k(e.$slots,"footer",{},void 0,!0)]))}});const F=C(U,[["__scopeId","data-v-c344a03d"]]);export{F as default};
