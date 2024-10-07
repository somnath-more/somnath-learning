// const arr=[1,2,3];

// const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// console.log(sum);
// console.log(arr.reverse());
// console.log(arr.push(sum));
// console.log(arr.slice(1, arr.length));


// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Data has been successfully fetched');   // eslint-disable-line resolve response
//     }, 2000);
// });

// myPromise.then((data) => console.log(data)).catch((err) => console.log(err));

// import sachin from "./one.js"; // Make sure the path to one.js is correct

// console.log("Starting...");
// console.log(sachin.name); // Should output 'Sachin Tendulkar'


// interview with procodder

// function calc(){
//     console.log(x)
//     x=10;
// }
// calc();
// foo(); 
// var foo=4;
// function foo(){
//   console.log("foo");
// }
// foo(); 

for(let i=1;i<=3;i++){
    setTimeout(function(){
        console.log(i);
    }, 1000);
}