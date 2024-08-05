// const user={
//     user:"abhishek",
//     id:123,

//     welcome: function(){
//         console.log(`${this.user}, welcome`);
//     }
// // }
// const chai = ()=>{
//     let user="Abhishek";
//     console.log(this.user);
// }
// console.log(chai());

// +++++++++++++++++iffe++++++++++
// (function hello(name){
//     console.log(`hello ${name}`);
// })('bansal');

// ((name)=>{
//     console.log(`hello ${name}`);
// })('Abhishek')

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
//export the function
// exports.add = add;
// exports.subtract = subtract;
// exports.multiply = multiply;
// exports.divide = divide;

// module.exports = {
//   add: add,
//   subtract: subtract,
//   multiply: multiply,
//   divide: divide,
// };

//import all the functions from this file
module.exports = {
  add,
  subtract,
  multiply,
  divide,
};
