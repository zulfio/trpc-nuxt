import _ from"./TabsHeader.4ceb7ffd.js";import{b as s,J as t}from"./entry.5c8819da.js";const i=(n,d)=>n.type&&n.type.tag&&n.type.tag===d,u=s({data(){return{activeTabIndex:0,counter:0}},render(){const n=this.$slots.default(),d=n.filter(e=>i(e,"code-block")||i(e,"code")).map((e,r)=>{var a,c,p;return{label:((a=e==null?void 0:e.props)==null?void 0:a.filename)||((c=e==null?void 0:e.props)==null?void 0:c.label)||`${r}`,active:((p=e==null?void 0:e.props)==null?void 0:p.active)||!1,component:e}});return t("div",{class:{"code-group":!0,"first-tab":this.activeTabIndex===0}},[t(_,{ref:"tabs-header",activeTabIndex:this.activeTabIndex,tabs:d,"onUpdate:activeTabIndex":e=>this.activeTabIndex=e}),t("div",{class:"code-group-content",text:this.activeTabIndex},n.map((e,r)=>{var a,c;return t("div",{style:{display:r===this.activeTabIndex?"block":"none"},class:{"":!i(e,"code")}},[i(e,"code")?e:t("div",{class:{"preview-canvas":!0}},[((c=(a=e.children)==null?void 0:a.default)==null?void 0:c.call(a))||t("div")])])}))])}});export{u as _};
