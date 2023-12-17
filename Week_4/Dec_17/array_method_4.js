let arr = [1,2,3,4,5];

for(let i = 0; i < arr.length; i++) {
    console.log("Element at index ", i, "is", arr[i]);
}

console.log(arr);
/**
 * foreach goes to every element of the array, and executes the given callback on that element
 * doesn't return anything
 */
arr.forEach((element, idx) => {
    // one by one every element is passed as argument to this callback
    console.log("Element at index ", idx, "is", element);
})

/**
 * Implement your own dummy customForEach
 * 
 * function customForEach(arr, cb) {
 *  // it applies the cb to every element of array
 * }
 * 
 * donot use the internal foreach method
 * 
 */
console.log("*******")
function customForEach(arr, cb) {
    for(let i = 0; i < arr.length; i++) {
        // now we have access to every index and element of the array
        cb(arr[i], i);
    }
}

customForEach([1,2,3], (element, idx) => {
    console.log("Element at index ", idx, "is", element);
}); // example of how you will call your function