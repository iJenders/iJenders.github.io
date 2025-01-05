import{_ as C,r as _,w as I,c as R,a as S,b as n,d as t,e as s,u as w,f as $,g as z,E as B,h as m,o as b,i as o,R as U,t as L}from"./index-x2gk20J4.js";import{S as A,T as g,E as V,R as r,a as y,b as D,t as d}from"./Solution-HWurOLyT.js";const P={class:"container"},j={class:"content"},q={class:"card"},F={class:"button-group"},G={class:"form"},H={class:"form-group"},J={class:"form-field"},K={class:"form-field"},M={class:"formula"},O={__name:"ExponentialView",setup(Q){const v=_("0"),u=_(1),a=_(1),c=_();I([u,a],([i,e],[l,f])=>{console.log(i,e),i==0&&(u.value=l),e==0&&(a.value=f)});const k=R(()=>{switch(v.value){case"1":return`∫ e${a.value!=1?d(u.value+"")+d("x"):d("x")}sin(${a.value!=1?a.value:""}x) dx`;case"2":return`∫ e${a.value!=1?d(u.value+"")+d("x"):d("x")}cos(${a.value!=1?a.value:""}x) dx`}}),E=()=>{let i,e=!1;switch(v.value){case"1":i=new g(new V(new r(1,1),new r(u.value,1)),new y(new r(1,1),new r(a.value,1),"sin"));break;case"2":i=new g(new V(new r(1,1),new r(u.value,1)),new y(new r(1,1),new r(a.value,1),"cos"));break;default:B({title:"Advertencia",message:"Seleccione un caso de integración",type:"warning"}),e=!0;break}if(!e){let l=i.integrate();c.value=l,console.log(l)}};return(i,e)=>{const l=m("el-text"),f=m("el-radio"),T=m("el-radio-group"),x=m("el-input-number"),N=m("el-button");return b(),S("div",P,[n("div",j,[t(w(U),{to:"/",class:"back-button"},{default:s(()=>[t(w(D),{color:"#44f",size:16}),t(l,{type:"primary"},{default:s(()=>e[3]||(e[3]=[o("Volver")])),_:1})]),_:1}),n("div",q,[e[17]||(e[17]=n("h2",{class:"title"},"Producto Trigonométrico",-1)),n("div",F,[t(T,{modelValue:v.value,"onUpdate:modelValue":e[0]||(e[0]=p=>v.value=p)},{default:s(()=>[t(f,{value:"1",size:"large"},{default:s(()=>[e[6]||(e[6]=o(" ∫ e")),t(l,{type:"success"},{default:s(()=>e[4]||(e[4]=[o("ᵃ")])),_:1}),e[7]||(e[7]=o("ˣsin(")),t(l,{type:"success"},{default:s(()=>e[5]||(e[5]=[o("b")])),_:1}),e[8]||(e[8]=o("x) dx "))]),_:1}),t(f,{value:"2",size:"large"},{default:s(()=>[e[11]||(e[11]=o(" ∫ e")),t(l,{type:"success"},{default:s(()=>e[9]||(e[9]=[o("ᵃ")])),_:1}),e[12]||(e[12]=o("ˣcos(")),t(l,{type:"success"},{default:s(()=>e[10]||(e[10]=[o("b")])),_:1}),e[13]||(e[13]=o("x) dx "))]),_:1})]),_:1},8,["modelValue"])]),n("form",G,[n("div",H,[n("div",J,[t(l,null,{default:s(()=>e[14]||(e[14]=[o(' Valor de "a" ')])),_:1}),t(x,{modelValue:u.value,"onUpdate:modelValue":e[1]||(e[1]=p=>u.value=p),"step-strictly":"",step:1},null,8,["modelValue"])]),n("div",K,[t(l,null,{default:s(()=>e[15]||(e[15]=[o(' Valor de "b" ')])),_:1}),t(x,{modelValue:a.value,"onUpdate:modelValue":e[2]||(e[2]=p=>a.value=p),"step-strictly":"",step:1},null,8,["modelValue"])])]),n("div",M,[t(l,null,{default:s(()=>[o(" I = "+L(k.value),1)]),_:1})]),t(N,{type:"primary",plain:"",onClick:E},{default:s(()=>e[16]||(e[16]=[o("Calcular")])),_:1})]),c.value?(b(),$(A,{key:0,solution:c.value},null,8,["solution"])):z("",!0)])])])}}},Y=C(O,[["__scopeId","data-v-03e3826e"]]);export{Y as default};
