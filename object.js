









//.......
// let std={}
// console.log(std);
// console.log(typeof std);
// let std={};
// std.name="raj"
// std.fname="rajappa"
// console.log(std);
// console.log(std.name);
// console.log(std.fname);
// let std=new Object()
// console.log(std);
// std.name="raj"
// console.log(std);
// let std={
//     name:"raj",
//     fName:"rajappa",
//     skills:["html","css","js"],
//     inSchool:()=>{
//         console.log("as a student");
//     },
//     cycle:"hero"
// }
// std.bike="bmw"
// std.skills.push("dsa")
// delete std.cycle
// console.log(std.skills);
// console.log(std);

// constructorfunction................
// function createstudentobject(x,y,z){
//     this.name=x
//     this.id=y
//     this.phno=z
// }
// let std1=new createstudentobject("raj",1,6382375225)
// let std2=new createstudentobject("rani",2,9791419155)
// let std3=new createstudentobject("kamal",3,7904992283)
// let std4=new createstudentobject("riyaas",4,123456)
// let std5=new createstudentobject("teja",5,7654321)
// let std6=new createstudentobject("geetha",6,76585899)
// console.log(std1);
// console.log(std2);
// console.log(std3);
// console.log(std4);
// console.log(std5);
// console.log(std6);

// class.....................
// class createstudentobject{
//     constructor(x,y,z){
//         this.name=x
//         this.id=y
//         this.phno=z
//     }
// }
// let std1=new createstudentobject("raj",1,2384680324)
// console.log(std1);
// let std2=new createstudentobject("rani",2,987593423)
// console.log(std2);

// let num=[12,41,17,18,24,99]
// let eligibleforvote=num.filter((x)=>{
// return x>=18
// })
// console.log(eligibleforvote);

// let moneyspent=eligibleforvote.map((x)=>{
// if(x>90)
// {
//     return 2000
// }
// else{
//     return 1000
// }
// })
// console.log(moneyspent);

// let totalamount=moneyspent.reduce((iv,ele)=>{
// return iv+ele
// },3000)
// console.log(totalamount);

// let ans=num.forEach((ele)=>{
// console.log(ele+100);
// return ele>=18
// })
// console.log(ans)

// let obj=new Object();
// console.log(obj);
// console.log(obj.name="sri");
// console.log(obj);
// console.log(obj.id=123);
// console.log(obj);
// console.log(obj.freez());
// console.log(obj.name="sri12323");
// console.log(obj);


//...................
// let str="hi"
// let str1=str
// let str2=str1
// str2="hello"
// console.log(str2);
// console.log(str);

// let arr=[10,20]
// let arr1=arr
// let arr2=arr1
// arr.push(500)
// console.log(arr2);
// console.log(arr1);
// console.log(arr);
//..........................
// const std={
//     name:"raj",
//     id:1,
//     phnum:1234567,
//     fname:"raj appa",
//     sal:"100k",
// }
// Object.freeze(std);
// console.log(Object.isFrozen(std));
// delete std.phnum;
// std.sal="200k"
// std.gf="riya"
// console.log(std);
// let std={
//     name:"riyaas",
//     id:1,
//     age:18,
//     pnum:29372,
//     sal:100,
// }
// Object.freeze(std)
// console.log(Object.isFrozen());
// delete std.id;
// std.sal="400k"
// std.age=88
// console.log(std);














