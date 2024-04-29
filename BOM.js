// console.log(navigator);
// navigator.geolocation.getCurrentPosition((x)=>{
// console.log(x);
// console.log(x.coords.latitude);
// console.log(x.coords.longitude);
// })
// console.log(location);
// location.reload()
//new........
// console.log(window.document);
// console.log(window.document.body.style.background="red");
// console.log(window.document.head.style.background="red");
// console.log(document.body.h1);

// let h2=document.getElementById("h2id");
// console.log(h2);
// h2.style.background="green"




// let para=document.getElementsByClassName("para")
// console.log(para);
// console.log(para[0]);
// para.push(109)
// console.log(Array.isArray(para));
// let pureArr=Array.from(para)
// console.log(pureArr);
// console.log(Array.isArray(pureArr));
// pureArr[0].style.background="yellow"
// pureArr[1].style.background="yellow"
// for(let items of pureArr){
//     items.style.background="yellow"
// }
// for(let i=0;i<pureArr.length;i++)
// {
//     if(i%2===0){
//         pureArr[i].style.background="green"
//     }
//     else{
//         pureArr[i].style.background="red"
//     }
// }


// let divs=document.getElementsByTagName("div")
// console.log(divs);
// for(let i=0;i<divs.length;i++){
//     divs[i].style.background="green"
// }

// let h4=document.querySelector("#h4id")
// console.log(h4);
// h4.style.background="green"

// let p=document.querySelector(".para")
// p.style.background="red"

// let div=document.querySelector("div")
// div.style.background="pink"

// let li=document.querySelector("ol li")
// li.style.background="blue"

let li=document.querySelectorAll("ol li")
console.log(li);
for(let i=0;i<li.length;i++)
{
    li[i].style.background="green"
}
