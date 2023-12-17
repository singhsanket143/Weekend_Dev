/**
 * 1. Slice -> given an array and you want continuous segment of array then 
 * you can use slice
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
 * arr = [10, 20, 30, 40, 50, 60, 70];
 * indx:  0.   1.  2.  3.  4.  5.  6
 *        -7.  -6. -5. -4. -3. -2  -1
 */ 

let arr = [10, 20, 30, 40, "sanket", 60, 70];

console.log(arr.slice(1, 4)); // segment from index [1, 4) // subarray 

console.log(arr.slice(-4, -2)); // [-4, -2)

console.log(arr.slice(-1, 4)); // []

console.log(arr.slice(-2, -4)) // []

console.log(arr.slice(3))