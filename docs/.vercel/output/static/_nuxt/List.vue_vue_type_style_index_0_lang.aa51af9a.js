import{b as r,N as u,E as m,J as e,q as p,m as f,O as _}from"./entry.5c8819da.js";const d={primary:"heroicons-outline:check",info:"heroicons-outline:information-circle",success:"heroicons-outline:check-circle",warning:"heroicons-outline:exclamation",danger:"heroicons-outline:exclamation-circle"},h=r({props:{icon:{type:String,default:null},type:{type:String,default:"primary",validator:n=>["primary","info","success","warning","danger"].includes(n)}},setup(n){const a=u(),{flatUnwrap:t,unwrap:c}=_(),o=m(()=>n.icon||d[n.type]);return()=>{var i;const l=t((i=a.default&&a.default())!=null?i:[],["ul"]).map(s=>c(s,["li"]));return e("ul",l.map(s=>e("li",{class:"mb-3 flex items-center"},[e("span",{class:`list-${n.type} mt-px mr-3 flex-shrink-0`},e(p,{name:o.value,class:"h-6 w-6"})),e("span",e(f,{use:()=>s}))])))}}});export{h as _};
