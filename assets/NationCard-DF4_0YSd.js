import{k as o,r as l,a as i,b as c,d as e,t as s,n as d}from"./index-y45DeIRv.js";import{_ as m}from"./plugin-vue_export-helper-DlAUqK2U.js";const _={class:"BackgroundImg"},p=["src","alt"],u={class:"Title"},g={class:"Span"},v={class:"Element"},C=["src","alt"],h={__name:"NationCard",props:{name:{type:String,required:!0},motto:{type:String,required:!0},imageUrl:{type:String,required:!0},element:{type:String,required:!0},elementColor:{type:String,required:!0},active:{type:Boolean,required:!1}},setup(a){o(n=>({"5d06aadd":r.value}));const t=a,r=l(t.elementColor);return(n,y)=>(i(),c("a",{class:d(["NationCard",t.active?"NationCardActive":""])},[e("div",_,[e("img",{src:t.imageUrl,alt:t.name},null,8,p)]),e("div",u,[e("div",g,[e("span",null,[e("span",null,s(t.name),1),e("p",null,s(t.motto),1)])])]),e("div",v,[e("img",{src:`/src/img/ElementLogo-${t.element}.webp`,alt:t.element,width:"80"},null,8,C)])],2))}},q=m(h,[["__scopeId","data-v-49c372d1"]]);export{q as N};