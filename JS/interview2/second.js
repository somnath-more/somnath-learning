// 1. Declaration and Initialization
let a;
console.log(a);
a = 10;

// 2. Comparison Chain
console.log(1 < 2 < 3);
console.log(1 > 2 > 3);

// 3. Type Coercion with Addition and Subtraction
console.log(5 + '5');
console.log(5 - '5');

// 4. Equality vs. Strict Equality
console.log(5 == '5');
console.log(5 === '5');

// 5. Variable Scope in Functions
function xyz() {
    var a = b = 4; 
    let c = 9;
    console.log(c);
    console.log(a);         
}
xyz();
console.log(b);

// 6. Type of Type
console.log(typeof typeof 1);

// 7. Variable Hoisting with `let`
g = 7;
console.log(g);
let g;

// 8. Array Concatenation and Type
let arr1 = [2];
let arr2 = [3];
console.log(arr1 + arr2);
console.log(typeof arr1);

// 9. Accessing Object Properties
const data = {
    "name": 'john',
    "work": 'engineer'
};
console.log(data.name);

// 10. Modifying Object Properties
const data1 = {
    "name": 'john',
    "work": 'engineer'
};
data1.name = "Roman";
console.log(data1.name);

// 11. Frozen Object Behavior
const data2 = {
    "name": 'john',
    "work": 'engineer'
};
Object.freeze(data2);
data2.name = "Roman";
console.log(data2.name);

// 12. Extracting Keys from an Object
const data3 = {
    "name": 'john',
    "work": 'engineer'
};
console.log(Object.keys(data3));
data3.name = "Roman";
console.log(data3.name);

// 13. Comparing with Falsy Values
let arr = [];
console.log(false == arr);

// 14. Variable Scope within Blocks
if (false) {
    console.log("Hello");
    var a = 10;
}
console.log(a);

// 15. Clearing a Timer
const timer = setTimeout(() => {
    console.log("Hello JavaScript Lover");
}, 2000);
clearTimeout(timer);
console.log("Will it clear timer variable");

// 16. Variable Shadowing
var x = 4;
let y = 3;
{
    var x = 2;
    let y = 6;
    console.log(y);
}
console.log(x + " " + y);

// 17. Postfix Increment
let a = 5;
let b = a++;
console.log(a + b);
console.log(a, b);

// 18. Modifying Object Properties with Constants
const data4 = {
    id: "1",
};
data4.id = "2";
console.log(data4.id);

// 19. Order of Console Outputs with `setTimeout`
setTimeout(() => {
    console.log("1");
}, 0);
console.log("2");

// 20. Array Slicing and Mutation
var a = [1, 2, 3];
var b = a.slice();
b[0] = 0;
console.log(a);
console.log(b);

// 21. Object Reference and Mutation
let person = { name: 'venus' };
const members = [person];
console.log(members);
person = null;
console.log(members);

// 22. Shallow Copy of Objects
const ingredientsList = ["noodles", { list: ["eggs", "flour", "water"] }];
const ingredientsListCopy = Array.from(ingredientsList);
console.log(ingredientsListCopy);
ingredientsListCopy[1].list = ["rice flour", "water"];
console.log(ingredientsList[1].list);

// 23. Deep Copy of Objects
const ingredientsListDeep = ["noodles", { list: ["eggs", "flour", "water"] }];
const ingredientsListDeepCopy = JSON.parse(JSON.stringify(ingredientsListDeep));
ingredientsListDeepCopy[1].list = ["rice flour", "water"];
console.log(ingredientsListDeep[1].list);

// 24. Closure Concept
function printArray() {
    for (var i = 0; i < 4; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000 * i);
    }
    console.log("Hello");
}

// 25. Default Parameters in Functions
function defaultValues(x = 10, y = 14) {
    return x + y;
}
console.log(defaultValues(null, 7));
console.log(defaultValues(undefined, 8));

// 26. Type of NaN
console.log(typeof NaN);

// 27. Array Push and Length
let arrList = [1];
let arrList1 = arrList.push(9);
console.log(arrList1);

// 28. Operator Precedence
console.log(3 + 4 + '7');

// 29. Immutable String Behavior
let str = "Jupyter";
str[0] = 'c';
console.log(str);
let str1 = "Jupyter";
let charArray = str.split("");
console.log(charArray);

// 30. Hoisting of Variables
console.log(name);
let name = "John";

// 31. Variable Hoisting with `var`
console.log(num);
var num;
num = 9;
console.log(num);
var num = 1;
console.log(num++);
console.log(++num);

// 32. Variable Declaration Without `var`, `let`, or `const`
numb = 6;
console.log(numb);

// 33. Variable Hoisting with `let`
var numb = 2;
console.log(numb);
let numb;

// 34. Comparison of Primitive vs Object
let a = 1;
let b = new Number(1);
console.log(a == b);
console.log(a === b);

// 35. Closures in Functions
function a() {
    var x = 0;
    return function b() {
        console.log(x);
    }
}
a()();

// 36. Function Expression
var hello = function () {
    console.log("Hello JS");
}
hello();

// 37. Variable Shadowing with `var` and `let`
var a = 99;
let b = 100;
{
    var a = 101;
    let b = 102;
    console.log(a, b);
}
console.log(a, b);

// 38. Variable Scope in Blocks
var sing = 1;
{
    let sing = 2;
}
console.log(sing);

let king = 1;
{
    var king = 2;
}
console.log(king);

// 39. Nullish Coalescing Operator
const defaultName = "default";
let name = null;
console.log(name ?? defaultName);

// 40. Chaining with Optional Chaining
const obj = {
    name: {
        first: "John",
        last: "Doe"
    }
};
console.log(obj.name?.first);

// 41. Destructuring Objects
const person = { name: 'Alice', age: 25 };
const { name, age } = person;
console.log(name);

// 42. Spread Operator in Arrays
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2];
console.log(combined);

// 43. Function Call with `apply()`
function showName() {
    console.log(this.name);
}
const user = { name: 'Bob' };
showName.apply(user);

// 44. Promises and Asynchronous Code
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Success!"), 1000);
});
myPromise.then(result => console.log(result));

// 45. Async/Await Syntax
async function fetchData() {
    const response = await myPromise;
    console.log(response);
}
fetchData();


// 46. Simple Arrow Function
const add = (a, b) => a + b;
console.log(add(2, 3));

// 47. Template Literals
const name = "Alice";
const greeting = `Hello, ${name}!`;
console.log(greeting);

// 48. Filtering Arrays
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

// 49. Merging Objects
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const merged = { ...obj1, ...obj2 };
console.log(merged);

// 50. Handling Errors with Try/Catch
try {
    throw new Error("Something went wrong!");
} catch (error) {
    console.log(error.message);
}