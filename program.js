function armStrong(x){
    let iv=x;
   
    let ans=Number(x.toString().split("").reduce((iv,ele,index,arr)=>iv+Math.pow(ele,arr.length),0))
    return ans===iv
}  

function isEven(x)
{
    return x%2===0
}

function isOdd(x)
{
    return x%2===1
}
function diserium(x){
let iv=x;
let ans=Number(x.toString().split("").reduce((iv,ele,index,arr)=>iv+Math.pow(ele,arr.index+1),0))
return ans===iv
}

let inp=document.querySelector("input")

let select=document.querySelector("#number-prog")

let btn=document.querySelector("button")

let ans=document.querySelector("#ans")

btn.addEventListener("click",()=>{
    let val=Number(inp.value)
    let selected=select.value;
    if(selected==="armstrong")
    {
        if(armStrong(val))
        {
            ans.innerText="is a armstrong"
            console.log("ia s armstrong");
        }
        else{
            ans.innerText="is not a armstrong"
            console.log("is not a armstrong");
        }
    }
    else if(selected==="diserium"){
    if(diserium(val))
    {
        ans.innerText="is a diserium"
        console.log("ia s diserium");
    }
    else{
        ans.innerText="is not a diserium"
        console.log("is not a diserium");
    }
}
else if(selected==="odd")
{
    if(isOdd(val))
    {
        ans.innerText="is a odd"
        console.log("ia a odd");
    }
    else{
        console.log("is not a isodd");
    }
}
else(selected==="even")
{
    if(isEven(val))
    {
        ans.innerText="is a even"
        console.log("ia s even");
    }
    else{
        console.log("is not a even");
    }
}
})