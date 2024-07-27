const accountId = 10101;
let accountEmail = "abhi@gmail.com";
var accountPass = "happy123";
accountCity = "mumbai";
let accountBranch;

// Reassigning values
accountEmail = "ban@gmail.com";
accountPass = 123;
accountCity = "bilari";

// Create an array of objects with variable names, values, and types
const data = [
    { Variable: 'accountId', Value: accountId, Type: typeof accountId },
    { Variable: 'accountEmail', Value: accountEmail, Type: typeof accountEmail },
    { Variable: 'accountPass', Value: accountPass, Type: typeof accountPass },
    { Variable: 'accountCity', Value: accountCity, Type: typeof accountCity },
    { Variable: 'accountBranch', Value: accountBranch, Type: typeof accountBranch }
];

// Display the data in a table
console.table(data);

// dont use var because of issue in scope
//const cannot be changed
//let can be changed