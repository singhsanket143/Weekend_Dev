/**
 * reverse -> this reverses an array
 */

let arr = [3,2,1,4,5];

arr.reverse();

console.log(arr);

/**
 * join -> it combines elements of an array into a String
 */

let result = arr.join(); // default separator between elements will be comma

console.log(result)


let result1 = arr.join(" ");

console.log(result1);


/**
 * 
 * delete  -> operator
 */

let array = [32,23,4,5,1,6,0];

delete array[1]; // updates the value with undefined

console.log(array);

console.log(array[1])