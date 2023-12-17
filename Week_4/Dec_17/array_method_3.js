/**
 * 
 * splice -> method -> remove elements and memory space from array
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
 */

let arr = [9,8,7,6,5,4,3,2,1];

const result = arr.splice(3, 5); // from index 1 remove 3 elements to the right

console.log("Returned value", result);
console.log(arr);

arr.splice(1);

console.log(arr);

let array = [9,8,7,6,5,4,3,2,1];

const res = array.splice(3,4,-1,-2,-3,-4,-5,-6);

console.log(array);