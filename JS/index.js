const arr=[1,2,3];

const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum);
console.log(arr.reverse());
console.log(arr.push(sum));
console.log(arr.slice(1, arr.length));
