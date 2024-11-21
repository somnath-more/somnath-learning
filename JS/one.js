

// console.log('Exporting');
// const sachin = {
//   name: 'Sachin Tendulkar', // Fixed the name to match the output you're expecting
//   age: 35
// };


// export default sachin;

var search = "som"
const searchSort = () => {
  return (a, b) => {
    let roleA = a.role.toLowerCase();
    let roleB = b.role.toLowerCase();
    if (roleA < roleB) return -1;
    if (roleA > roleB) return 1;
    return 0;
  };
};

var arr = [
  { name: "somnath", role: "weveloper" },
  { name: "ganesh", role: "scientist" }
];

console.log(arr.sort(searchSort()));

// console.log(searcData);
