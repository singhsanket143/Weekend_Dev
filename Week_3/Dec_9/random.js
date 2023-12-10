console.log(Math.random()) // by default it returns a random real number between 0 - 1
console.log()

// You will be given two values, x and y, and you need to generate a random number 
// between x and y inclusive of x and y

/**
 * 
 * @param {x} Lower_Limit 
 * @param {y} Upper_Limit
 * @return random number in the range [x, y]
 */
function randomInRange(x, y) { // 10, 35 -> y-x + 1 => 35-10 + 1 -> 26
    return Math.floor(Math.random()*(y - x + 1) + x); // [10, 36)
}

console.log(randomInRange(10, 35))