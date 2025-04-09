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


