import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i}from"./assets/vendor-77e16229.js";const l=document.querySelector(".form");l.addEventListener("submit",o=>{o.preventDefault();const t=document.querySelector("input[name=delay]").value,r=document.querySelector("input[value=fulfilled]").checked;new Promise((e,s)=>{setTimeout(()=>{r?e(t):s(t)},t)}).then(e=>{i.success({title:"OK",message:`Fulfilled promise in ${e}`,position:"topRight"})}).catch(e=>{i.error({title:"Error",message:`Rejected promise in ${e}`,position:"topRight"})})});
//# sourceMappingURL=commonHelpers2.js.map