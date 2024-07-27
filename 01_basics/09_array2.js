const alp=["a","b","c","d","e"]
const vowels =["a","e","i","o","u"]

// alp.push(vowels)
// console.log(alp);
// [ 'a', 'b', 'c', 'd', 'e', [ 'a', 'e', 'i', 'o', 'u' ] ]

alp.concat(vowels);
console.log(alp);
// [ 'a', 'b', 'c', 'd', 'e', [ 'a', 'e', 'i', 'o', 'u' ] ]

// const letters = alp.concat(vowels)
// console.log(letters);
// 'a', 'b', 'c', 'd','e', 'a', 'e', 'i', 'o', 'u'

// const letter = [...alp,...vowels]
// console.log(letter)
// [
//     'a', 'b', 'c', 'd',
//     'e', 'a', 'e', 'i',
//     'o', 'u'
//   ]

// const array = [1,2,3,[4,5,6],7,[6,7,[0,9,[6,3]]]]
// const arrayElemts = array.flat(Infinity)
// console.log(arrayElemts); 
// [
//     1, 2, 3, 4, 5, 6,
//     7, 6, 7, 0, 9, 6,
//     3
//   ]

// console.log(Array.from("Abhishek"));