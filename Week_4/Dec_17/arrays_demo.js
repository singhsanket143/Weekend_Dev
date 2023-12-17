// How can we create arrays in JS ?

let x = []; // pair of square brackets 
// this above code initialised an empty array

console.log(x);

let arr = [10, "sanket", null, undefined, false, 33.333, 62];
// the above code initialised array with default values already
console.log(arr); 


let array = Array(15);

console.log(array);


// length of an array
console.log(array.length);

let arrayWithAll0 = Array(20).fill(0);

console.log(arrayWithAll0);

let arrayWith0inRange = Array(20).fill(-1, 3, 6); // [3, 6)
console.log(arrayWith0inRange);