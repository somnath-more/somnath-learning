// Data Types
// Q1. What are the different data types in JavaScript?
/*
   Number, String, Object, Boolean, null, undefined, Symbol (ES6), BigInt (ES11)
*/

// Q2. Explain the difference between == and ===.
console.log(4 == '4'); // true
console.log(4 === '4'); // false

// Q3. What is NaN and how to check if a value is NaN?
console.log(typeof NaN); // "number"
console.log(isNaN(NaN)); // true

// Q4. What is the output of console.log(typeof null)?
console.log(typeof null); // "object"

// Q5. Explain variable hoisting in JavaScript.
console.log(a); // undefined
var a = 10;

// Functions
// Q6. What is the difference between function declarations and function expressions?
function declare() {
    console.log("I am a function declaration");
}
const express = function () {
    console.log("I am a function expression");
};

// Q7. Explain closures in JavaScript.
function outerFunction() {
    let outerVar = "I am outside!";
    return function innerFunction() {
        console.log(outerVar);
    };
}
const innerFunc = outerFunction();
innerFunc(); // "I am outside!"

// Q8. What is the output of this code?
function foo() {
    var x = 10;
    console.log(x);
}
foo(); // 10

// Q9. Explain the concept of IIFE (Immediately Invoked Function Expression).
(function() {
    console.log("I am IIFE!");
})(); // "I am IIFE!"

// Q10. What is the purpose of the 'this' keyword in JavaScript?
// 'this' refers to the object that is currently executing the function.

// Promises
// Q11. What is a promise in JavaScript?
const promise = new Promise((resolve, reject) => {
    resolve("Success!");
});

// Q12. Explain the difference between synchronous and asynchronous functions.
console.log("Synchronous");
setTimeout(() => console.log("Asynchronous"), 1000);

// Q13. What is the output of this code?
const promise1 = Promise.resolve("Hello");
promise1.then(data => console.log(data)); // "Hello"

// Q14. What is Promise chaining?
const promiseChain = new Promise((resolve) => resolve(1))
    .then(result => result + 1)
    .then(result => console.log(result)); // 2

// Q15. What are async/await?
async function asyncFunc() {
    return "Async/Await!";
}
asyncFunc().then(data => console.log(data)); // "Async/Await!"

// Scopes
// Q16. Explain the difference between var, let, and const.
var a = 1; // function scoped
let b = 2; // block scoped
const c = 3; // block scoped and read-only

// Q17. What is the output of the following code?
var x = 10;
if (true) {
    var x = 20; // same variable
}
console.log(x); // 20

// Q18. Explain the concept of block scope.
{
    let blockScoped = "I am block scoped!";
    console.log(blockScoped); // "I am block scoped!"
}

// Q19. What is the output of this code?
let y = 5;
{
    let y = 10;
    console.log(y); // 10
}
console.log(y); // 5

// Objects
// Q20. How do you clone an object in JavaScript?
const original = { a: 1, b: 2 };
const clone = { ...original };

// Q21. Explain the concept of shallow copy vs deep copy.
const shallowCopy = Object.assign({}, original);
const deepCopy = JSON.parse(JSON.stringify(original));

// Q22. How do you extract properties from an object using destructuring?
// const obj = { name: 'John', age: 30 };
// const { name, age } = obj;

// Q23. How can you create a method within an object?
const person = {
    name: 'Alice',
    greet: function() {
        console.log(`Hello, ${this.name}`);
    }
};
person.greet(); // "Hello, Alice"

// Arrays
// Q24. How do you filter an array for values greater than 3?
const numbers = [1, 2, 3, 4, 5];
const filtered = numbers.filter(num => num > 3); // [4, 5]

// Q25. How do you calculate the total sum of an array?
const totalSum = numbers.reduce((acc, curr) => acc + curr, 0); // 15

// Q26. How do you check if a specific value exists in an array?
const exists = numbers.includes(3); // true

// Q27. How do you get the index of a value in an array?
const index = numbers.indexOf(4); // 3

// Q28. What is the output of the following code?
let arr1 = [1, 2, 3];
let arr2 = arr1.slice();
arr2[0] = 0;
console.log(arr1); // [1, 2, 3]

// Loops
// Q29. Explain the difference between forEach and map.
const mapped = numbers.map(num => num * 2); // [2, 4, 6, 8, 10]

// Q30. What is the output of the following code?
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000);
}

// Q31. What is the output of this code?
for (var j = 0; j < 3; j++) {
    setTimeout(() => console.log(j), 1000);
}
// Output will be 3, 3, 3 because var is function scoped

// Miscellaneous
// Q32. Explain what a higher-order function is.
function higherOrder(fn) {
    fn();
}

// Q33. What is the output of the following code?
let x = 1;
function foo() {
    let x = 2;
    console.log(x);
}
foo(); // 2
console.log(x); // 1

// Q34. What is event delegation in JavaScript?
// Event delegation allows you to attach a single event listener to a parent element to manage events from multiple child elements.

// Q35. How do you handle errors in promises?
promise
    .then(result => console.log(result))
    .catch(error => console.error(error));

// Q36. What is the output of the following code?
let n = 5;
function test() {
    console.log(n);
    let n = 10; // ReferenceError: Cannot access 'n' before initialization
}
test();

// Q37. Explain the concept of the prototype chain.
function Person(name) {
    this.name = name;
}
Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
};

// Q38. What is the difference between a class and a constructor function?
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

// Q39. What is the output of the following code?
const obj = { a: 1 };
console.log(Object.keys(obj)); // ['a']

// Q40. How do you create a new array from an existing one without modifying the original?
const newArray = [...numbers];

// Q41. What is a template literal?
const name = "World";
console.log(`Hello, ${name}!`); // "Hello, World!"

// Q42. Explain the use of the spread operator.
const arr = [1, 2, 3];
const newArr = [...arr, 4, 5]; // [1, 2, 3, 4, 5]

// Q43. What is the output of the following code?
console.log("5" + 5); // "55"

// Q44. What are the different ways to declare a variable in JavaScript?
/*
   var, let, const
*/

// Q45. What is the output of this code?
console.log(5 + '5'); // "55"

// Q46. Explain the use of the map method.
const doubled = numbers.map(num => num * 2); // [2, 4, 6, 8, 10]

// Q47. What is the output of this code?
console.log(typeof undefined); // "undefined"

// Q48. What is the output of this code?
const greeting = (name) => {
    return `Hello, ${name}!`;
};
console.log(greeting("Alice")); // "Hello, Alice!"

// Q49. What is the difference between call, apply, and bind?
/*
   - call: invokes the function with a specified 'this' value and arguments.
   - apply: invokes the function with a specified 'this' value and an array of arguments.
   - bind: returns a new function with a specified 'this' value and allows you to set the arguments.
*/

// Q50. How do you check if a variable is an array?
console.log(Array.isArray(numbers)); // true
