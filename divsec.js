// let inps=document.querySelectorAll("input");
// let btn=document.querySelector("button")
// let section=document.querySelector("section")

// btn.addEventListener("click",()=>{
//     let color=inps[0].value;
//     let divs=inps[1].value;
//     for(let i=0;i<divs;i++){
//         let div=document.createElement("div")
//         div.style.height="100px"
//         div.style.width="100px"
//         div.style.background=color
//         section.append(div)
//     }
// })

let plus=document.querySelector("#plus")
let minus=document.querySelector("#minus")
let span=document.querySelector("span");
plus.addEventListener("click",()=>{
    let val=Number(span.innerText)
    if(val>0){
        document.body.style.background="green"
    }
    else if(val<0){
        document.body.style.background="red"
    }
    else{
        document.body.style.background="blue"
    }
    span.innerText=val+1;
})
minus.addEventListener("click",()=>{
    let val=Number(span.innerText)
    if(val>0)
    {
        document.body.style.background="red"
    }
    else if(val<0)
    {
        document.body.style.background="blue"
    }
    else{
        document.body.style.background="blue"
    }
    span.innerText=val-1
})
