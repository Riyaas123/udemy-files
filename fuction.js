// console.log(",,,,,,,,,,,,,,,,,Higher order function .......................");
// function max(c){
//      let a=10;
//      var b=20;
//      return c(a,b);
// }
// let x=max(function(a,b)
// {
//     return a*b;
// });
// console.log(x);




// console.log("call back function");
// function max(){
   
//     console.log("i am first");

// }
// function max1(a,b){
//     a();   
//     b();
    
//     console.log("hello");
    
// }

// function max2(){
//     console.log("i am last");
// }

// max1(max,max2)

// function* generator(){
//     let i=5;
//     while(i<=5);
// {
//     yield(i);
//     i--;
// }
// }
// let genobj=generatorfunction();
// console.log()

// reverse string in js
// let str="hi hello java"
// let ans=""
// for(let i=str.length-1;i>=0;i--)
// {
// ans+=str[i]
// }
// console.log(ans);

let num=[11,56,98,77,33]
 let ans1=num.filter((ele,index,myArr)=>{
    return ele%2==0
 })
