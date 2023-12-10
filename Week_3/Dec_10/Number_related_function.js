console.log(Number.MAX_VALUE); // +infinity 
console.log(Number.MIN_VALUE); // -infinity


// convert a decimal number to a binary

const x = 13;
console.log(x.toString(2)) // converts the number to a binary
console.log(x.toString(8)); // convert the numbet to octal

// if you call toString without an argument, then it just converts the number to string
console.log(x.toString());


// to convert a binary to decimal 
// We have a function parseInt that takes a string representing the binary number
// and throws the decimal value of it
// Apart from the string, you pass the base of the input u gave to function

console.log(parseInt("1101", 2));
console.log(parseInt("15", 8));


// The most interesting number of JS: NaN

// NaN -> Not a Number

// Let's say, we have a collection (can be represented with arrays) of elements
// and u want to search for an element. 
// If you found the element, you return index of the element
// In case when element is not found what should we return ?
 

// One option is to return -1. 
// undefined and null may be ?
// "not found"
// What about NaN ?
console.log(typeof NaN);

// fun fact about NaN, it is the only value of JS, that is not equal to itself



// Precision of a number
const num = 10.345178;
console.log(num.toPrecision(5)); // number of significant digits to print

console.log(num.toFixed(4)); // number of decimal places after decimal that u want to get




// Zero
const zero = 0;
const pos_zero = +0;
const neg_zero = -0;

console.log(zero, pos_zero, neg_zero);
console.log(neg_zero == zero);
console.log(neg_zero === zero); // 0 == +0 == -0



