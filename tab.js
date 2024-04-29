//100 tables

let tab=document.createElement("table")
tab.style.border="5px solid"
tab.style.borderCollapse="collapse"
// //let count=0
for(let i=0;i<10;i++)
{
let tr=document.createElement("tr")
for(let j=0;j<10;j++)
{
        let td=document.createElement("td");
        td.style.height="70px"
        td.style.width="70px"
        td.style.border="5px solid"
        //count++
        let val=1*10+j+1
        td.innerText=val
//         // if(j%2===0){
//         //     td.style.background="green"
//         // }
        if(i%2===0){
            td.style.background="green"
        }
        tr.append(td)
    }
    tab.append(tr)
}
document.body.append(tab)

//........................
//10 tables
// let tab=document.createElement("table")
// for(let i=1;i<=10;i++){
// let tr=document.createElement("tr")
// for(let j=1;j<=10;j++){
//     let td=document.createElement("td")
//     let val=j;
//     td.innerText=val;
//     tr.append(td)
// }
// tab.append(tr)
// }
// document.body.append(tab)

// chesss
