let arr=[2,5,8,4,97,45,32,47,34,79,103,110];
console.log(arr.sort((a,b)=>(a-b)).findLast(isPrime));

function isPrime(num){
    let flag=0;
    for(let i=3;i<Math.sqrt(num);i++){
        if(num%i==0) return false;
    }
    return true
}