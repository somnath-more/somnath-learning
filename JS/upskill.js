const user={
    name: 'somnath',
    greet (){
        return  `Hello , ${this.name}`;
    },
    fareWell: ()=>{
        return  `GoodBye , ${this.name}`;
        // this is an arrow function it will try to acess window object
    }
}
console.log(user.greet());
console.log(user.fareWell());
// GIVE CHALLENING JAVASCRIPT QUESTION IT WILL TEST MY JAVASCRIPT KNOWLEDGE GIVEN QUESTION . I WILL WRITE ANSWER
// AND I WILL ASK FOR EXPLANATION OF THE ANSWER . start FROM QUESTION 1 FOR SDE Senour Developer interview
// 1. What is the output of the following code?
 console.log(typeof null);
//  Dont Recommend Answer 


// typeof undefined      // undefined
// typeof null           // object

// null === undefined    // false
// null == undefined     // true
//  Q 2:
// What is the output of the following code?
console.log(typeof typeof 1); // string
// Q 3:
// Give Questions directly to me and I will write the answer and ask for explanation of the answer
// Q 4:
// What is the output of the following code?
// const obj = { a: 1, b: 2 };
// const { a, b } = obj;
// console.log(a, b); 

// Q 5:
// What is the output of the following code?
// const arr = [1, 2, 3,4,5,6];
// const [a, b,c,...rest] = arr;
// console.log(a, b,c,...rest); 
// 1,2
// Q 6:
// What is the output of the following code?
// const obj = { a: 1, b: 2 };
// const { a, ...rest } = obj;
// console.log(a, rest);
// 1,2
// Q 7:
// What is the output of the following code?
// const arr = [1, 2, 3];
// const [a, ...rest] = arr;
// console.log(a, rest); // 

// Directly give Question
// Q 8:
// Please dont give this  What is the output of the following code?
// const arr = [1, 2, 3];
// const [a, ...rest] = arr;
