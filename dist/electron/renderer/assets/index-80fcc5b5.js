import{u as O,M as Q,I as W,N as X,O as Y,_ as w}from"./index-5259c4bc.js";import"./index-ff321b56.js";import{d as L,C as o,D as x,aI as e,aG as t,G as m,u as s,aM as i,aN as d,bn as B,bx as Z,bo as j,bc as D,aE as n,cb as M,cc as C,bv as tt,bV as S,aK as T,aJ as z,bb as P,cd as et,bQ as V,b_ as G,f as ot,ce as U,bq as H,br as R,bs as E,b0 as nt,bT as at,bU as _t}from"./arco-adc6c535.js";import"./index-9f147a7c.js";import"./index-8259b3ef.js";import"./index-97e73ebb.js";import"./index-467baea6.js";import"./index-fbf88a6b.js";import"./index-6fd54ea8.js";import"./index-bdf6b15a.js";import"./index-3250ff6a.js";import"./index-f8805adc.js";import"./index-50b53bc0.js";import{u as F}from"./loading-f0025922.js";import"./index-f5ef5fbf.js";import{q as st,a as ct,b as lt}from"./user-center-0f16bec2.js";import{u as J}from"./request-8bd9cf33.js";import"./index-3281bd49.js";import"./index-5e44522e.js";import"./index-3a46639e.js";import"./index-c7bd6e11.js";import"./index-bfc5dcdf.js";import"./chart-28c88d04.js";import"./vue-bc752e41.js";const rt={class:"header"},it=["src"],dt={class:"user-msg"},ut=L({__name:"user-info-header",setup($){const a=O();return(u,l)=>{const c=Q,_=B,g=Z,f=W,p=j,y=X,h=Y,v=D;return o(),x("div",rt,[e(v,{size:12,direction:"vertical",align:"center"},{default:t(()=>[e(_,{size:64},{"trigger-icon":t(()=>[e(c)]),default:t(()=>[m("img",{src:s(a).avatar},null,8,it)]),_:1}),e(g,{heading:6,style:{margin:"0"}},{default:t(()=>[i(d(s(a).name),1)]),_:1}),m("div",dt,[e(v,{size:18},{default:t(()=>[m("div",null,[e(f),e(p,null,{default:t(()=>[i(d(s(a).jobName),1)]),_:1})]),m("div",null,[e(y),e(p,null,{default:t(()=>[i(d(s(a).organizationName),1)]),_:1})]),m("div",null,[e(h),e(p,null,{default:t(()=>[i(d(s(a).locationName),1)]),_:1})])]),_:1})])]),_:1})])}}});const pt=w(ut,[["__scopeId","data-v-f7f2e416"]]),mt=L({__name:"latest-notification",setup($){const{loading:a,setLoading:u}=F(!0);return setTimeout(()=>{u(!1)},500),(l,c)=>{const _=M,g=C,f=tt,p=S;return o(),n(p,{class:"general-card",title:l.$t("userInfo.title.latestNotification")},{default:t(()=>[s(a)?(o(),n(g,{key:0,animation:!0},{default:t(()=>[e(_,{rows:3})]),_:1})):(o(),n(f,{key:1,status:"404"},{subtitle:t(()=>[i(d(l.$t("userInfo.nodata")),1)]),_:1}))]),_:1},8,["title"])}}});const ft=w(mt,[["__scopeId","data-v-760c2052"]]),yt=["src"],gt=L({__name:"my-project",setup($){const a=Array(6).fill({}),{loading:u,response:l}=J(st,a);return(c,_)=>{const g=P,f=M,p=C,y=j,h=B,v=et,b=D,k=S,N=V,A=G;return o(),n(k,{class:"general-card",title:c.$t("userInfo.title.myProject")},{extra:t(()=>[e(g,null,{default:t(()=>[i(d(c.$t("userInfo.showMore")),1)]),_:1})]),default:t(()=>[e(A,{gutter:16},{default:t(()=>[(o(!0),x(T,null,z(s(l),(r,q)=>(o(),n(N,{key:q,xs:12,sm:12,md:12,lg:12,xl:8,xxl:8,class:"my-project-item"},{default:t(()=>[e(k,null,{default:t(()=>[s(u)?(o(),n(p,{key:0,loading:s(u),animation:!0},{default:t(()=>[e(f,{rows:3})]),_:1},8,["loading"])):(o(),n(b,{key:1,direction:"vertical"},{default:t(()=>[e(y,{bold:""},{default:t(()=>[i(d(r.name),1)]),_:2},1024),e(y,{type:"secondary"},{default:t(()=>[i(d(r.description),1)]),_:2},1024),e(b,null,{default:t(()=>[e(v,{size:24},{default:t(()=>[i(d(r.contributors)+" ",1),(o(!0),x(T,null,z(r.contributors,(I,K)=>(o(),n(h,{key:K,size:32},{default:t(()=>[m("img",{alt:"avatar",src:I.avatar},null,8,yt)]),_:2},1024))),128))]),_:2},1024),e(y,{type:"secondary"},{default:t(()=>[i(" 等"+d(r.peopleNumber)+"人 ",1)]),_:2},1024)]),_:2},1024)]),_:2},1024))]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1},8,["title"])}}});const vt=w(gt,[["__scopeId","data-v-72d285e0"]]),ht=["src"],bt=L({__name:"latest-activity",setup($){const{loading:a,setLoading:u}=F(!0),l=ot(new Array(7).fill({}));return(async()=>{try{const{data:_}=await ct();l.value=_}catch{}finally{u(!1)}})(),(_,g)=>{const f=P,p=U,y=V,h=M,v=G,b=C,k=B,N=H,A=R,r=E,q=S;return o(),n(q,{class:"general-card",title:_.$t("userInfo.title.latestActivity")},{extra:t(()=>[e(f,null,{default:t(()=>[i(d(_.$t("userInfo.viewAll")),1)]),_:1})]),default:t(()=>[e(r,{bordered:!1},{default:t(()=>[(o(!0),x(T,null,z(l.value,I=>(o(),n(A,{key:I.id,"action-layout":"horizontal"},{default:t(()=>[s(a)?(o(),n(b,{key:0,loading:s(a),animation:!0,class:"skeleton-item"},{default:t(()=>[e(v,{gutter:6},{default:t(()=>[e(y,{span:2},{default:t(()=>[e(p,{shape:"circle"})]),_:1}),e(y,{span:22},{default:t(()=>[e(h,{widths:["40%","100%"],rows:2})]),_:1})]),_:1})]),_:1},8,["loading"])):(o(),n(N,{key:1,title:I.title,description:I.description},{avatar:t(()=>[e(k,null,{default:t(()=>[m("img",{src:I.avatar},null,8,ht)]),_:2},1024)]),_:2},1032,["title","description"]))]),_:2},1024))),128))]),_:1})]),_:1},8,["title"])}}});const kt=w(bt,[["__scopeId","data-v-6df6255c"]]),It=["src"],xt=L({__name:"my-team",setup($){const a=new Array(4).fill({}),{loading:u,response:l}=J(lt,a);return(c,_)=>{const g=U,f=V,p=M,y=G,h=C,v=B,b=H,k=R,N=E,A=S;return o(),n(A,{class:"general-card",title:c.$t("userInfo.tab.title.team"),"header-style":{paddingBottom:"18px"},"body-style":{paddingBottom:"12px"}},{default:t(()=>[e(N,{bordered:!1},{default:t(()=>[(o(!0),x(T,null,z(s(l),r=>(o(),n(k,{key:r.id,"action-layout":"horizontal"},{default:t(()=>[s(u)?(o(),n(h,{key:0,loading:s(u),animation:!0},{default:t(()=>[e(y,{gutter:6},{default:t(()=>[e(f,{span:6},{default:t(()=>[e(g,{shape:"circle"})]),_:1}),e(f,{span:16},{default:t(()=>[e(p,{widths:["100%","40%"],rows:2})]),_:1})]),_:1})]),_:1},8,["loading"])):(o(),n(b,{key:1,title:r.name},{avatar:t(()=>[e(v,null,{default:t(()=>[m("img",{src:r.avatar},null,8,It)]),_:2},1024)]),description:t(()=>[i(" 共"+d(r.peopleNumber)+"人 ",1)]),_:2},1032,["title"]))]),_:2},1024))),128))]),_:1})]),_:1},8,["title"])}}});const wt=w(xt,[["__scopeId","data-v-6347e02b"]]),Lt={class:"container"},$t={class:"content"},Nt={class:"content-left"},At={class:"content-right"},Tt={name:"Info"},zt=L({...Tt,setup($){return(a,u)=>{const l=nt("Breadcrumb"),c=at,_=_t;return o(),x("div",Lt,[e(l,{items:["menu.user","menu.user.info"]},null,8,["items"]),e(pt),m("div",$t,[m("div",Nt,[e(_,{cols:24,"col-gap":16,"row-gap":16},{default:t(()=>[e(c,{span:24},{default:t(()=>[e(vt)]),_:1}),e(c,{span:24},{default:t(()=>[e(kt)]),_:1})]),_:1})]),m("div",At,[e(_,{cols:24,"row-gap":16},{default:t(()=>[e(c,{span:24},{default:t(()=>[e(wt)]),_:1}),e(c,{class:"panel",span:24},{default:t(()=>[e(ft)]),_:1})]),_:1})])])])}}});const ee=w(zt,[["__scopeId","data-v-108ecb15"]]);export{ee as default};