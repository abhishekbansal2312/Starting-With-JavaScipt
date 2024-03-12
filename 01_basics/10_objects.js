const mySym = Symbol("key1")
const User ={
    "full name":"Abhishek Bansal",
    age:21,
    location:"Bilari",
    isLoggedIn:false,
    LastLoginDays:["mon","tue"]
    [mySym]="key1"
}

 
console.log(User.age);
// console.log(User.full name); this cannot work here
console.log(User["full name"]);

