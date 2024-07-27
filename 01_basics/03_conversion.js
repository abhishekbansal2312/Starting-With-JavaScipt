let value= "33abc"
console.log(typeof(value));//string
let stringToNum = Number(value);
console.log(typeof(stringToNum));//number
console.log(stringToNum);//nan 


let value2= null;
console.log(typeof(value2));//object
let stringToNum2 = Number(value2);
console.log(typeof(stringToNum2));//number
console.log(stringToNum2);//0

let value3= "33abc"
console.log(typeof(value3));//string
let stringToNum3 = Number(value3);
console.log(typeof(stringToNum3));//number
console.log(stringToNum3);//nan

//33=>33
//33abc=>nan
//true=1; false=>0

let isLoggedIN=1;
let booleanisLoggedIn=Boolean(isLoggedIN);
console.log(booleanisLoggedIn); //true

let isLoggedIN1="";
let booleanisLoggedIn1=Boolean(isLoggedIN1);
console.log(booleanisLoggedIn1); //false

let isLoggedIN2="abbishek";
let booleanisLoggedIn2=Boolean(isLoggedIN2);
console.log(booleanisLoggedIn2); //true

let isLoggedIN3=undefined; //null
let booleanisLoggedIn3=Boolean(isLoggedIN3);
console.log(booleanisLoggedIn3); //false