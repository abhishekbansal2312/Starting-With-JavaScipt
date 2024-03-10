const amount = 100;
//Number
console.log(amount);

const balance = new Number(100);
//strictly number
console.log(balance);

let x = balance.toString();
console.log(typeof(x));

console.log(balance.toFixed(2));

let num = 123.4567;
console.log(num.toFixed(2));
console.log(num.toPrecision(2));

let hundreds = 100000000;
console.log(hundreds.toLocaleString("en-IN"));
//add comas for readibility
// +++++++++++++++++++++++++++maths+++++++++++++++

console.log(Math);

// console.log(Math.abs(-9));//positive absolute value
// console.log(Math.round(4.6))
// console.log(Math.ceil(4.2))
// console.log(Math.floor(4.6))
// console.log(Math.sqrt(4))
// console.log(Math.min(4,6,1,3,6,8,3))

console.log(Math.floor(Math.random()*100+1));
const min= 50;
const max=100;
console.log(Math.floor(Math.random()*(max-min+1))+min);
