let arr=[[1,2],[3,4],[5,6]];
const flattenarray = arr.reduce(
    (prev,current)=>prev.concat(current),[]
)
console.log(flattenarray);