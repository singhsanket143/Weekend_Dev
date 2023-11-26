const isEvenOrOdd = function (num) {
    console.trace()
    return num % 2 == 0;
}

// Is this a named function expression ? 
// NO

// How to call it ?
// You can use the name of the variable inside which you've stored the function to call it

const result = isEvenOrOdd(50);
console.log(result);