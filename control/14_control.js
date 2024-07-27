// if-else
// // false vales 
// false,0,-0, BigInt 0n, "", null,undefined, NaN

// //true values
// "0",'false'," ",[],{},function(){}

//nullish coalescing operator
 let val1;
//  val1= 5??10;
// val1=null ?? 10;
// val1 = undefined??15;
// val1 = null??20??30

// console.log(val1);

// const icetea = 100;
// icetea>=80? console.log("yes"): console.log("no");

// let score = 20;
// do{
//     console.log(score);
//     score++;
// }while(score<30);

// const arr = [1,2,3,4,5]
//  for (const num of arr) {
//     console.log(num);
//  }

//  const helo = "hejnsu snjsbssbc nhcus q"
//  for (const iterator of helo) {
//     console.log(`char is ${iterator}`);
//  }

//maps

// const map = new Map()
// map.set('in',"india")
// map.set('usa',"united")
// map.set('ch',"china")
// console.log(map);

// for (const [key, valuer] of map) {
//     console.log(key, "=", valuer);
// }
// const myobj ={
//     name: "abhi",
//     age:21
// }
// for (const [key,values] of myobj) {
//    console.log(key, "=", values);
// }
//TypeError: myobj is not iterable


// +++++++++++++ obj ++++++++++
// const myobj ={
//          name: "abhi",
//          age:21
//     }
//     for (const key in myobj) {
//         console.log(myobj[key]);
//     }


const arr =[1,2,3,5,4,6]
// for (const key in arr) {
//     console.log(arr[key]);
        
//     } 

// arr.forEach(function (item){
//     console.log(item);
// })

const coding = [
    {
        lname:"javascript",
        lfile:"js"
    },
    {
        lname:"python",
        lfile:"py"
    }
]
coding.forEach((item)=>{
    console.log(item.lname);
})