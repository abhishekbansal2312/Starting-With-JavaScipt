// setTimeout(()=>{
//     console.log("hello world");

// },2000)

// console.log(`Current Working Dir:  ${global.process.cwd()}`);

// console.log(__dirname);
// console.log(__filename);

// console.log(varName);  // ReferenceError: varName is not defined
// console.log(document);  // ReferenceError: document is not defined

// const { importfile } = require("./13_function.js");
const { add, subtract, multiply, divide } = require("./13_function.js");
// console.log(importfile);

// console.log(add(2, 3));
// console.log(subtract(2, 3));
// console.log(multiply(2, 3));
// console.log(divide(2, 3));

// console.log(typeof add);

const os = require("os");
console.log(os.platform());
console.log(os.arch());
console.log(os.userInfo);
