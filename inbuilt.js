// let std={}
// console.log(Math.sin(0));
// console.log(Math.cos(0));
// console.log(Math.tan(0));
// console.log(10/3);
// console.log(Math.ceil(0.01));
// console.log(Math.floor(0.99999));
// console.log(Math.round(1.65));
// console.log(Math.round(1.45));
// console.log(Math.random());
// console.log(0.1234*10000);
// console.log(Math.pow(2,3));
// let otp=Math.ceil(Math.random()*10000)
// console.log(otp);
// if(otp<1000)
// {
//     otp=otp*10
// }
// console.log(otp);
// alert("ur otp num is"+otp)
// let enterotp=Number(prompt("enter ur otp num"))
// if(otp===enterotp){
//     alert("valid otp")
// }
// else{
//     alert("invalid otp")
// }
// let std={}
// console.log(Math.max(12,78,99,-45,56));
// console.log(Math.min(12,78,99,-45,56));
// console.log(Math.PI);
// let month=["jan","feb","march","april","may"]
// let days=["sun","mon","tues","wed","thurs","fri","sat"]
// let d1=new Date()
// d1.setFullYear(2001)
// console.log(d1);
// console.log(d1.getDate());
// console.log(month[d1.getMonth()]);
// console.log(days[d1.getDay()]);
// console.log(d1.getFullYear());
// console.log(d1.getHours());
// console.log(d1.getMinutes());
// console.log(d1.getSeconds());
// console.log(d1.getMilliseconds());
let id=setInterval(()=>{
    console.log("will be executed every 1 sec");
},1000)
let id1=setTimeout(()=>{
    console.log("will be executed once after 5 seconds");
},5000)
setTimeout(()=>{
clearTimeout(id1)
clearInterval(id)
console.log("after & sec clearing interval & timeout");
},2000)