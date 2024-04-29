let gp=document.querySelector("#gp");
let p=document.querySelector("#p");
let child=document.querySelector("#child")

gp.addEventListener("click",()=>{
    console.log("grandparent");
},false)
p.addEventListener("click",()=>{
    console.log("parent");
},false)
child.addEventListener("click",()=>{
    console.log("child");
},false)