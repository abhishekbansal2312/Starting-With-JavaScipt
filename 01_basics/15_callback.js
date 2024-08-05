// function f2(name, callback) {
//     console.log('i am function 2');
//     callback(name);
// }
// function greet(name){
//     console.log('hello '+name);
// }
// function sayGoodbye(name){
//     console.log('goodbye' + name);
// }

//  f2("john",greet)
// //  in arrow function
// f2("john",name=>console.log('hello '+name))
function f3(name, callback) {
  console.log("i am function f3");
  if (typeof name === "string") {
    const data = `hello ${name}`;
    callback(null, data);
  } else {
    const error = new Error("name must be a string");
    callback(error, null);
  }
}

const callback = (error, data) =>
  error ? console.log("error:", error.message) : console.log(data);

f3("john", callback);
f3(123, callback);

// f3("john", greet);
