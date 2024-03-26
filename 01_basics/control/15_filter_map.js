// // const coding = ["cpp", "js","py"]

// // const values = coding.forEach((item)=>{
// //     return item;
// // })
// // console.log(values);
// // //for each loop doesn't returns

// const mynums= [1,2,3,4,5,6,7,8,9];
// // const newsums=mynums.filter((num)=>{ return num>4})
// // [ 5, 6, 7, 8, 9 ]

// // const newnums = [];
// // mynums.forEach((num)=>{
// //     if(num>4){
// //         newnums.push(num)
// //     }
// // })

// // console.log(newnums);

// // let user = books.filter((book)=>{return book.publish>=2000})


// const mynum = [1,2,3,4,5,6,7,8,9]
// // let number =  mynum.map((nums)=>{
// //     return nums+10;
// // })
// // console.log(number);
// // mynum.forEach((num)=>{
// //     console.log(num+10); 
// // })

// // const number = mynum
// //       .map((num)=>num*10)
// //       .map((num)=>num+1)
// //       .filter((num)=>num>50)
// // console.log(number);

// const arr = [1,2,3,4];

// const mytotal= arr.reduce((acc,current)=>{
//     console.log(`acc: ${acc}, currentvalue: ${current}`);
//     return acc+current
// },5)
// console.log(mytotal);

const shoppingcart= [
{
    itemname:"allo",
    price:20
},
{
    itemname:"baigan",
    price:90
},
{
    itemname:"tamatar",
    price:80
},
{
    itemname:"mirch",
    price:10
}
]
const price = shoppingcart.reduce((acc,curr)=>{
   return acc + curr.price
},0)
console.log(price);