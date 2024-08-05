// function logMessage() {
//   console.log("running function");
// }

// let count = 0;
// const interval = setInterval(() => {
//   if (count === 0) {
//     setTimeout(logMessage, 2000);
//   } else {
//     logMessage();
//   }
//   count++;
//   if (count >= 5) {
//     clearInterval(interval);
//   }
// }, 1000);

let count = 0;
setTimeout(() => {
  const interval = setInterval(() => {
    console.log("running function");
    count++;
    if (count >= 5) {
      clearInterval(interval);
    }
  }, 1000);
}, 1000);
// ///////////////////////////
// // Modify the program that it runs only 5 times total, and stops automatically
// // after the 5th time.

// function map(array, callback) {
//   const newArr = [];
//   for (let i = 0; i < array.length; i++) {
//     newArr.push(callback(array[i]));
//   }
//   return newArr;
// }

// function addTwo(num) {
//   return num + 2;
// }

// console.log(map([1, 2, 3], addTwo));
// function display(data){console.log(data)}
// function printHello(){console.log("Hello");}
// function blockForLong(){
//     const arr = [];
//     for (let i = 0; i < 3_000_000_000; i++){
//         arr.push(i)
//     }
//  }
// setTimeout(printHello, 0);
// const futureData = fetch('https://twitter.com/AmeriRyan/status/1291935897076641792')
// futureData.then(display)
// blockForLong()
// console.log("Me first!");

// // Define the forEach function
// function forEach(array, callback) {
//     for (let i = 0; i < array.length; i++) {
//       callback(array[i]);
//     }
//   }

//   // Define the mapWith function
//   function mapWith(array, callback) {
//     let result = [];
//     forEach(array, function(element) {
//       result.push(callback(element));
//     });
//     return result;
//   }

//   // Define the addTwo function
//   function addTwo(num) {
//     return num + 2;
//   }

//   // Test the mapWith function
//   console.log(mapWith([1, 2, 3], addTwo)); // should output [3, 4, 5]
// console.log([1, [2, [3]]].Spread);
