function addNumbers() {
    // no parameters passed in the function
    let result = 0;
    for(let i = 0; i < arguments.length; i++) {
        // i denotes index of array 0-based
        result = result + arguments[i];
    } 
    return result;
}

// variable arguments
console.log(addNumbers(9, 1, 2));
console.log(addNumbers(7, 1, 2, 0, 1));
console.log(addNumbers());
