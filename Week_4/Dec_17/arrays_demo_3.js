// if we have an arrat empty or having some values we can add more values to it

let arr = [3,4,1,5,6];

console.log(arr);

arr.push(10); // it add 10 at the last of array

console.log(arr);

arr.unshift(-1); // it adds -1 to the start of array
console.log(arr);

// remove element at the start , at the 0th index

arr.shift();

console.log(arr);


// remove element from the end

arr.pop();
console.log(arr);

arr.push(10, 20);
console.log(arr);