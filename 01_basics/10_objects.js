const mySym = Symbol("key1")  //declare sym first to use with obj 
const User ={
    "full name":"Abhishek Bansal",
    age:21,
    location:"Bilari",
    isLoggedIn:false,
    LastLoginDays:["mon","tue"],
    [mySym]:"key1"  //declaration of SYMBOL IN OBJ
}

console.log(User.age);
// console.log(User.full name); this cannot work here
console.log(User["full name"]);
console.log(User[mySym]);  

User.age = 22; //udate the object
console.log(User.age);

// Object.freeze(User); //locks the object

// console.log(User);
// {
//     'full name': 'Abhishek Bansal',
//     age: 22,
//     location: 'Bilari',
//     isLoggedIn: false,
//     LastLoginDays: [ 'mon', 'tue' ],
//     [Symbol(key1)]: 'key1'
//   }
// const a = 20;
// b = 25;
// console.log(a);


User.greetings = function(){
    console.log(`hello USer, ${this["full name"]}`)
}
console.log(User.greetings());