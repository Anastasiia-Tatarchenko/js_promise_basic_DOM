var e=document.querySelector(".logo"),t=new Promise(function(t,n){e.addEventListener("click",t)}),n=new Promise(function(e,t){setTimeout(t,3e3)}),o=function(e){var t=document.createElement("div");t.classList.add("message"),t.textContent=e,document.body.append(t)},r=function(e){var t=document.createElement("div");t.classList.add("message","error-message"),t.textContent=e,document.body.append(t)};t.then(function(){return o("Promise was resolved!")}).catch(function(){return r("Promise was rejected!")}),n.then(function(){return o("Promise was resolved!")}).catch(function(){return r("Promise was rejected!")});
//# sourceMappingURL=index.52935137.js.map
