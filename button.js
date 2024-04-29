//random color
// let btn=document.querySelector("button");
// btn.addEventListener("click",()=>{
//     document.body.style.background=`#${generateNum()}`
// })
//touch the button
window.addEventListener("keydown",()=>{
    document.body.style.background="#"+generateNum()
})
//release the button
// window.addEventListener("keyup",()=>{
//     document.body.style.background="#"+generateNum()
// })
//screensize change means
// window.addEventListener("resize",()=>{
//     document.body.style.background="#"+generateNum()
// })
//based on mouse
// window.addEventListener("mouseover",()=>{
//     console.log("i was clicked");
//     document.body.style.background="#"+generateNum()
// })
// window.addEventListener("keypress",()=>{
//     console.log("i was clicked");
//     document.body.style.background="#"+generateNum()
// })
function generateNum(){
    let ans=parseInt(Math.random()*900000+100000)
    console.log(ans);
    return ans;
}