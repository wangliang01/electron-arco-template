import{f as u}from"./arco-adc6c535.js";import{u as f}from"./loading-f0025922.js";function d(o,s=[],t=!0){const{loading:a,setLoading:n}=f(t),e=u(s);return o().then(r=>{e.value=r.data}).finally(()=>{n(!1)}),{loading:a,response:e}}export{d as u};