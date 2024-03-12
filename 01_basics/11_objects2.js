// const user = new Object()     //singleton

const tuser = {}

tuser.id = "123ab"
tuser.name = "abhishek"
tuser.isLoggedIn = false

// console.log(tuser)
const regUser ={
    email : "some@gmail.com",
    fullname:{
        fname: "Abhishek",
        lname:"Bansal"
    }
}

// console.log(regUser.fullname.fname)

const obj1 = {1:"A",2:"B"}
const obj2 = {3:"C",4:"C"}

// const obj3 = {obj1,obj2}
// { obj1: { '1': 'A', '2': 'B' }, obj2: { '3': 'C', '4': 'C' } }
// const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3)
// { '1': 'A', '2': 'B', '3': 'C', '4': 'C' }
// const obj3 = {...obj1,...obj2}
// console.log(obj3)
// { '1': 'A', '2': 'B', '3': 'C', '4': 'C' }
// console.log(Object.keys(tuser));
// console.log(Object.values(tuser));
// console.log(tuser.hasOwnProperty('name'));
const user = {
    id :"123ab",
    name : "abhishek",
    isLoggedIn : false
}

const {id}= user
console.log(id);