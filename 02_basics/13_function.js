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
(function hello(name){
    console.log(`hello ${name}`);
})('bansal');

((name)=>{
    console.log(`hello ${name}`);
})('Abhishek')