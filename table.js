// let h1=document.createElement("h1")
// console.log(h1);

// h1.innerText="<h2>i am a h2 tag</h2>"
// h1.textContent="<h2>i s a h2 tag</h2>"
// h1.innerhtml="<h2>i am a h2 tag</h2>"
// h1.innerText="i am a h1 created through js"
// document.body.append(h1)
// let div=document.querySelector("div")
// console.log(div);
// let h2=document.createElement("h2")
// h2.innerText="i am a h2"
// console.log(h2);
// div.append(h2);

//...............
let tab=document.createElement("table")
let tr1=document.createElement("tr")
let tr2=document.createElement("tr")
let td1=document.createElement("td")
let td2=document.createElement("td")
let td3=document.createElement("td")
let td4=document.createElement("td")
td1.innerText=1;
td2.innerText=2;
td3.innerText=3;
td4.innerText=4;
tr1.append(td1,td2)
tr2.append(td3,td4)
// // one child at a time
// // tr1.appendChild(td1,td2)

tab.append(tr1,tr2)
document.body.append(tab);
tab.style.border="2px solid"