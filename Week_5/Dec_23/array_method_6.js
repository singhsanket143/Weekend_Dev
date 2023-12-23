function factorial(num) { 
    return Array.from({length: num}, function (_, i) {
        console.log(_, i)
        return i+1;
    }).reduce((acc, val) => acc * val, 1); 
}

// function factorial() { 
//     return [1,2,3,4,5].reduce((acc, val) => acc * val, 1); 
// }

// function factorial() { 
//     return [1,2,3,4,5].reduce(function reducer(acc, val) {
//         return acc * val;
//     }, 1); 
// }

console.log(factorial(5));