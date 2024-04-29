let data=[
    {
        name:"rabbit",
        wt:"3kg",
        img:"https://cdn.pixabay.com/photo/2016/11/21/12/55/bunny-1845263_640.jpg"
    },
    {
        name:"cheetah",
        wt:"90kg",
        img:"https://cdn.pixabay.com/photo/2014/11/03/17/40/leopard-515509_640.jpg"
    },   {
        name:"fox",
        wt:"30kg",
        img:"https://cdn.pixabay.com/photo/2016/04/06/01/51/fox-1310840_640.jpg"
    },   {
        name:"deer",
        wt:"50kg",
        img:"https://cdn.pixabay.com/photo/2016/05/02/13/17/deer-1367217_640.jpg"
    },   {
        name:"sheep",
        wt:"35kg",
        img:"https://cdn.pixabay.com/photo/2017/12/17/15/58/mouflon-3024471_640.jpg"
    },   {
        name:"horse",
        wt:"550kg",
        img:"https://cdn.pixabay.com/photo/2017/10/31/07/49/horses-2904536_640.jpg"
    },
]

let index=0;
let img=document.querySelector("img");
let h2s=document.querySelectorAll("h2");
let btns=document.querySelectorAll("button");

btns[0].addEventListener("click",()=>{
//console.log("pre clicked");
index=index-1;
if(index<0){
    index=0
}
manipulateSlider(index)
})

btns[0].addEventListener("click",()=>{
    index.index-1
    if(index<0){
        index=0
    }
    manipulateSlider(index);
})
window.addEventListener("DOMContentLoaded",()=>{
    manipulateSlider(0)
})

// setInterval(()=>{
//     index=index+1;
//     if(index>data.length-1){
//         index=0
//     }
//     manipulateSlider(index)
// },2000)

function manipulateSlider(index){
    console.log(index);
    img.src=data[index].img
    h2s[0].innerText=data[index].name
    h2s[1].innerText=data[index].wt
}
