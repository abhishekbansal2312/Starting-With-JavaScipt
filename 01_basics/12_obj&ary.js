
// const obj ={
//     first:"abhishek",
//     last:"bansal",
//     age:function(x){
//         let year=2002;
//         return x-year;
//     },
//     getfullname: function(){
//          return `${this.first} ${this.last}`;
//     }

// }

// console.log(obj.age(2024));

//add a new member to the object
// obj.city="delhi";
// obj.hobbies=["reading","coding","music"];
// obj.object= {
//     name:"abhishek",
//     age:19
// }

// console.log(obj.city);
// console.log(obj.hobbies[0]);
// console.log(obj.object.name);


// reuse objects////////////////////////
let user = function(name,age,city){ 
    return {
        name: name,
        age: age,
        city: city
    }
}
const abhishek= user("abhishek",19,"delhi");
console.log(abhishek);
const ankit= new user("ankit",20,"delhi");
console.log(ankit);


//created a object template/////

// function User(name,age,city){  //constructor function
//     this.name=name;
//     this.age=age;
//     this.city=city;
// }
//why we calling it inside a function because we want to create a new object every time we call it
//we can create a object using new keyword
//new keyword create a new object and return it
//this keyword is used to refer the current object

//created a object
// const abhishek1= new User("abhishek",19,"delhi");
// const ankit1= new User("ankit",20,"delhi");
// console.log(typeof abhishek1);
// console.log(typeof User);
// console.log(ankit1);


//////arrays
// const myary = [200,300,400,500];

// const ans = myary.forEach((element)=>{
//     console.log(element*element);
// })
// console.log(ans);




// console.log(myary);

// function square(num){
//     console.log(num*num);
// }

// myary.forEach(square);

// let array = myary.map((element)=>{
//     return element*element*element;
// })
// console.log(array);


// const myary = [1,2,3,4,5,6];
// let array1 = myary.filter((element)=>{
//    if(element%2==0){
//        return element;
//    }
// })
// console.log(array1);
//////////////////////////////////////////////////
// const myary = [1,2,3,4,5,6];
// let array2 = myary.filter((element)=>{
//     if(element%2!=0){
//         return element;
//     }
//  }
// ).map((element)=>{
//     return element*element;
// }).filter((element)=>{
//     if(element<10){
//         return element;
//     }
// })
// console.log(array2);
////////////////////////////////////////////////////

//set in arrays
// let myset = new Set();
// console.log(myset);

// myset.add(1); 
// console.log(myset)
// console.log(myset.size)

let maps = new Map();
maps.set(1,"abhishek");
maps.set(2,"ankit");
maps.set(3,"abhinav");
console.log(maps);
console.log((maps.size>2)?console.log("hurrah"):console.log("no"));
maps.delete(2)

console.log(maps);





