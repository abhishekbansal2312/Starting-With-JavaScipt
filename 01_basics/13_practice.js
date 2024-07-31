// num=20;
// let square = (num)=>{
//     return num*num
// }
// console.log(square(num));

// let myobj = {
//     name: "ankit",
//     age: 20,
//     city: "delhi"
// }
// myobj.id=123;
// console.log(myobj);
// delete myobj.id;
// console.log(myobj);

// myobj.hobbies=["coding","reading","gaming"];
// console.log(myobj);

// console.log(myobj["name"]);

// let num = 20;
// (num%2==0)?console.log("even"):console.log("odd");

// let color = 2;
// switch(color){
//     case 1 : console.log("red");
//     break;
//     case 2 : console.log("blue");
//     break;
//     case 3 : console.log("green");
//     break;
//     default : console.log("-1");
// }

//Create an array of numbers of size 10 which have values upto 100
// let arr = [];
// for(let i=0;i<10;i++){
//     arr.push(i*10);
// }
// console.log(arr);

//Create an array of numbers of size 10 which have values upto 100 and are divisible by 5
// let arr1 = [];
// for(let i=0;i<10;i++){
//     arr1.push(i*5);
// }
// console.log(arr1);

// const array = [2,1,3,6,3,1,9,2,3,6,6,9,1,3];
// array.sort((a,b)=>(a-b));

// console.log(array);


const lang = ['html', 'css', 'javascript', 'react', 'node', 'postgres'];
console.log(lang.length);
console.log(lang[2]);
lang.pop();
console.log(lang);
lang.push("sql");
console.log(lang);
lang.shift();
console.log(lang);
console.log(lang.join("/"));

let languages = lang;
console.log(languages);

sortedLanguages=languages.sort(
    function(a,b){
        return a.length-b.length;
    }
)
console.log(languages);

let node = sortedLanguages.indexOf("node");
let react = sortedLanguages.indexOf("react");

console.log(node , react);

const upperLang = sortedLanguages.map(language => language.toUpperCase());
console.log(upperLang);

//////////////////////
const todos = [
    { title: "Buy groceries", description: "Milk, Bread, Butter", status: "done" },
    { title: "Read a book", description: "Finish 'The Great Gatsby'", status: "not done" },
    { title: "Workout", description: "Gym session at 6 PM", status: "done" },
    { title: "Code practice", description: "Solve 5 problems on LeetCode", status: "not done" },
    { title: "Plan trip", description: "Book flights and hotels", status: "not done" }
  ];

  todos.forEach(todo => {
    console.log(`Title: ${todo.title}, Description: ${todo.description}`);
  });

  todos.forEach(todo => {
    console.log(`Title: ${todo.title}, Status: ${todo.status}`);
  });

  const todoTitles = todos.map(todo => todo.title);
console.log(todoTitles);

const notDoneTodos = todos.filter(todo => todo.status === 'not done');
console.log(notDoneTodos);

const doneTodos = todos.filter(todo => todo.status === 'done');
console.log(doneTodos);