import{d as p,s as m,j as v,a as c,b as f,c as b,f as l,w as a,e as t,t as n,g as k,k as h,_ as x}from"./index-ca4eb09b.js";import{u as B}from"./blog-5a841a7b.js";const g={class:"article"},C={class:"article-header"},N={class:"article-content"},y=p({__name:"Article",setup(A){const r=h(),_=B(),{articles:d}=m(_),s=v(()=>d.value.find(o=>o.id===Number(r.params.id)));return(o,e)=>{const u=c("el-button"),i=c("el-card");return f(),b("div",g,[l(i,null,{header:a(()=>[t("div",C,[t("h1",null,n(s.value?.title),1),t("span",null,n(s.value?.date),1)])]),default:a(()=>[t("div",N,n(s.value?.content),1),l(u,{onClick:e[0]||(e[0]=V=>o.$router.push("/")),class:"back-button"},{default:a(()=>e[1]||(e[1]=[k(" Back to Home ")])),_:1})]),_:1})])}}});const S=x(y,[["__scopeId","data-v-227c5e0d"]]);export{S as default};