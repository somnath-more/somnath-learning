// //  Q 1 . Hoisting
//  console.log("Hello")
//  console.log(x);
//  console.log(getName)
//  console.log(getName(3))
//  console.log(getName(4))
//  var x=7;
//  function getName(num){
//      var ans=num*num;
//      return ans;
//  }

//  Video: No:04
 
//  "use strict"
//  var x=7;
//  console.log("J");
//  a();
//  b();

//  function a(){
//      var x=4;
//      console.log(x);
//  }

//  function b(){
//      var x=3;
//      console.log(x);
//  }
//  console.log(x);

//    Lexical Scope  and Scopt of the variable
//  console.log(t);
//  function c(){
//       console.log(t);
//      function d(){
//          console.log(t);
//      }
//      d()
//  }
//  let t=4;  var has global scope 
//  c()

//  Scope of the variable
//  {
//      var a=10;
//      let b=20;
//      const c=30;
//  }
//  console.log(a);
//  console.log(b);
//  console.log(c);

//  let xyz=5;
//  function ganesh() {
//       let xyz=6;
//      function dev() {
//          console.log(xyz);
//      }
//      dev()
//  }
//  ganesh()

//   Closure function in js 
//  function ham(){
//      var h=9;
//      function a() {
//          var d=3;
//          function b() {
//              console.log(d,h);
//          }
//          b();
//      }
//      a();
//  }
//  ham()

//  function makeAdder(x) {
//       x: 5
//      return function (y) {
//        return x + y;
//      };
//       closure return function and it lexical scope
//    }
  
//     const add5 =function (y) {return x + y};
//  const add5 = makeAdder(5);
//    const add10 = makeAdder(10);
    
//    console.log(add5(2));  7
//    console.log(add10(2));  12
  

//  function Hello() {
  
//      for(var i=1;i<=5;i++){
//          setTimeout(()=>{
//              console.log(i);
//          },i*1000);
//      }
//      console.log(i);

//  }
//  Hello()
//  const d=10;
//  function a(){
//      var b=10;
//      const c=10;
//      console.log(b);
//  }
//  a();
//  var b=11;
//  console.log(b);
//  function (){
//      console.log("hello");
    
//  }

//  const radius=[3,1,2,4];
//  const area=function (radius){
//      return Math.PI* radius*radius;
//  }

//  const circumference=function (radius){
//      return 2*Math.PI*radius;
//  }
//  const diameter=function (radius){
//      return 2*radius;
//  }

//  const calculate=function (radius,logic){
//      const output=[];
//      for (let index = 0; index <radius.length; index++) {
//          output.push(logic(radius[index]));
        
//      }
//      return output;
//  }

//  console.log(calculate(radius,area));
//  console.log(calculate(radius,circumference));
//  console.log(calculate(radius,diameter));
//  Interview
//  Q : 1
//  function x(){
//      let a=1;
//      let b=2;
//      var v=2;
//      c=3;
//      console.log(a);
//      console.log(b);



//  }
//  x();


//  console.log(c);
//  console.log(v);
//  console.log(a);
//  console.log(b);
//  Q. 2
//  console.log(023);
//  console.log(123);
//  Q 3:
//  let x=20;
//  function foo(){
//      console.log(x);
//      let x=10;
    
//  }
//  foo()
// Q 4 : 
//  foo()
//   var foo=20;
//  function foo(){
//      console.log("Caloling Foo");
  
    
//  }
//  console.log(foo)
//  Q 5 . 
// //  foo refers to the function because the function declaration takes precedence over the var declaration.
//  function a(){
//       var x=10;
//      function b() {
//        console.log("Hello");
//        console.log(x);
          
//      }
//      return b;
//  }
//  a()();

//  Q 6. 
//  console.log("Start");
//  setTimeout(()=>{
//    console.log("I am in Callback(macro) queue")
//  },0)
//  console.log("Program ended")
// Q
//  for(let i=1;i<=3;i++){
//      setTimeout(()=>{
//          console.log(i);
//      },1000)
//  }

//  setTimeout(()=>{
//      console.log("I am in Call back queueor Macro Task queue");
//  })
//  Promise.resolve().then(()=> console.log("Promise present in micros task queue"))
//  console.log("End")

//  let details={
//      name:"somnath",
//      age: 24
//  }
//  let spreading={...details}
//  const {name,age}=spreading;
//  let details1={
//      "user-name":"somnath",
//      age: 24
//  }
//  details1.toString();
//  console.log(details1["user-name"]);

//  let {"user-name":user,age}=details1;
//  console.log(user,age)


//  console.log(typeof NaN);
//  console.log('4'-2);
//  console.log('4'+1);
//  console.log('4' == 4)
//  console.log(4==='4')
//  let arr=["neha","papu","harshad"]
//  let changeValue= document.getElementById("hello");
//  let i=0;
//  changeValue.onclick=()=>{
//      if(i === arr.length){
//          i=0;
//      }
//      changeValue.innerHTML= arr[i];
//      i++;
//  }


// 1
//  let a;
//  console.log(a);
//  a=10;

//  2
//  console.log(1<2<3);
//  console.log(1>2>3);
//   3
//  console.log(5+'5');
//  console.log(5-'5');
//   4
//  console.log(5 == '5');
//  console.log(5 === '5');
//  5
//  function xyz() {
//      var a=b=4; 
//      let c=9;
//      console.log(c);
//      console.log(a);         
    
//  }
//  xyz()
//  console.log(b);
//  console.log(a);

//  6
//  console.log(typeof typeof 1)
//  7 
//  g=7;
//  console.log(g);
//  let g;
//   Q.8
//  let arr1=[2];
//  let arr2=[3];
//  console.log(arr1+arr2);
//  console.log(typeof arr1);
//   typeof arr1 is object
//   Q.9
//  const data={
//      "name": 'john',
//      "work": 'engineer'
//  }
//  console.log(data.name)

//   Q 10
//  const data1={
//      "name": 'john',
//      "work": 'engineer'
//  }

//  data1.name="Roman"
//  console.log(data1.name)

//   Q 11
//  const data2={
//      "name": 'john',
//      "work": 'engineer'
//  }
//  Object.freeze(data2)
//  data2.name="Roman"
//  console.log(data2.name)
//  Q 12 : Extracting the key of object
//  const data2={
//      "name": 'john',
//      "work": 'engineer'
//  }
//  console.log(Object.keys(data2));
//  data2.name="Roman"

//  console.log(data2.name)
//   Q . 13
//  let arr=[];
//  console.log(false == arr);
//  Q 14: functional or gloabal scope
//  if(false){
//      console.log("Hello")
//      var a=10;
//  }
//  console.log(a);

 
//  const timer=setTimeout(()=>{
//    console.log("Hello JavaScript Lover")
//  },2000)
//  clearTimeout(timer)

//  console.log("Will it clear timer variable")

//  var x=4;
//  let y=3;
//  {
//      var x=2;
//      let y=6;
//      console.log(y)
//  }

//  console.log(x+" "+y)

 
//  let a=5;
//  let b=a++;
//  console.log(a+b );
//  console.log(a,b)

//  const data={
//      id: "1",
//  }

//  data.id="2";
//  console.log(data.id)
//   abcdefghijklmnopqrstuvwxyz
//  setTimeout(()=>{
//      console.log("1")
//  },0)
//  console.log("2")

//  var a=[1,2,3];
//  var b=a.slice();
//  b[0]=0;
//  console.log(a);
//  console.log(b);

//  let person= {name: 'venus'};
//  const members= [person];
//  console.log(members);
//  person=null;
//  console.log(members);
//   What is the shallow copy
//  const ingredientsList = ["noodles", { list: ["eggs", "flour", "water"] }];

//  const ingredientsListCopy = Array.from(ingredientsList);
//  console.log(ingredientsListCopy);
//   ["noodles",{"list":["eggs","flour","water"]}]
//  ingredientsListCopy[1].list = ["rice flour", "water"];
//  console.log(ingredientsList[1].list);
//  Array [ "rice flour", "water" ]
//  what is Deep copy
// const ingredientsList = ["noodles", { list: ["eggs", "flour", "water"] }];
// const ingredientsListDeepCopy = JSON.parse(JSON.stringify(ingredientsList));
//  Change the value of the 'list' property in ingredientsListDeepCopy.
// ingredientsListDeepCopy[1].list = ["rice flour", "water"];
//  The 'list' property does not change in ingredients_list.
// console.log(ingredientsList[1].list);
//  Array(3) [ "eggs", "flour", "water" ]
//   closures concept

// function printArray(){
//     for(var i=0;i<4;i++){
//        setTimeout(()=>{
//          console.log(i);
//        },1000*i)
//     }
//     console.log("Hello")
//  }
//  function printArray(){
//     for(let i=0;i<4;i++){
//        setTimeout(()=>{
//          console.log(i);
//        },1000*i)
//     }
//     console.log("Hello")
//  }

//  default values
//  function defaultValues(x=10,y=14) {
//      return x+y;
//  }
//  defaultValues(null,7);
//  defaultValues(undefined,8)

//  console.log(typeof NaN);

//  let arrList=[1]
//  let arrList1=arrList.push(9);
//  console.log(arrList1.push(3));
//   javascript precendance
//  console.log(3+4+'7');
//  let str= "Jupyter";
//  str[0]='c';
//  console.log(str);
//  let str1= "Jupyter";
//  let charArray = str.split("");
//  console.log(charArray)
//   Q . 
//  console.log(name);
//  let name="John";
//  console.log(num);
//  var num;
//  num=9;
//  console.log(num);
//  var num=1;
//  console.log(num++)
//  console.log(++num);
//   Q .
//  numb=6;
//  console.log(numb)
//    Q. 
//  var numb=2;
//  console.log(numb);
//  let numb;

//  let a=1;
//  let b=new Number(1);
//  console.log(a==b);
//  console.log(a===b);
//   Q  Most Imp Questions
// function a() {
//     var x=0;
//     return function b() {
//         console.log(x);
//     }
// }
// a()();
//  Q
// var hello = function () {
//     console.log("Hello JS");
// }
// hello();
//  Q 
// var a=99;
// let b=100;
// {
//     var a=101;
//     let b=102;
//     console.log(a,b);
// }
// console.log(a,b);

//   Q
// var sing= 1;
// {
//     let sing=2;
// }
// console.log(sing);

// let king= 1;
// {
//     var king=2;
// }
// console.log(king);

// function a() {
//     var g=1;
//     function b() {
//         function c() {
//             console.log(g);
//         }
//         c();
//     }
//     b();
// }
// a();
//   Q 
//  console.log(typeof null);
//    Q . Tell me Best Practise in javascript
//   Q. Data types n javascript
//    Number 
//    Object
//    String 
//    null
//    undefined
//    Boolean
//  concepts of promise

//  const promise1 = new Promise((resolve, reject) => {
//      resolve("Hello");
//  });

//  promise1.then((data) => {
//      console.log(data);  Output: "Hello"
//  });

 
//  new Promise(()=>{
//      console.log('d');
//  })

//  console.log("s")
//  console.log("1");
//  setTimeout(()=>{
//      console.log("2")
//  },2000)
//  setTimeout(()=>{
//      console.log("3")
//  },0)
//  console.log("4");

//   Q Destructuring in js 
//  let arr=[1,2,3,4,5,6,7];
//  let [,y,z]=arr;
//  console.log(y,z);

//  let newArray=[...arr];
//  console.log(newArray);
//  console.log(newArray[0]);
//  a();
//  var a=1;
//  console.log(a);
//  function a(){
//      console.log("Hello World !!")
//  }
//  a();

//  x++;
//  console.log(x);
//  var x=21;

// let arr=[1,2,3,4,5,6,7];
//   can you filter value grateer than 3 , I will solve
//   can you find total Sum
//  Check if `k` is present and get its index
