const str = "This is a new string";

// substring
console.log(str.substring(1, 6)); // [1, 6)]

console.log(str.toUpperCase());

console.log(str.toLowerCase());

const arr = str.split("");

console.log(str.split(""));
console.log(str.split(" "));
console.log(str.split());
console.log(str.split("i"));


//

console.log(str.charAt(2))
console.log(str.at(2));

const result = str.concat("new string");

console.log(result);

const num = parseInt("2314");

console.log(num, typeof num);

const s = "   auhdiufds.  ";// 'iudcuisc'

console.log(s.trim());

const y = "this is another one";
console.log(y.replaceAll(" ", ""));
console.log(y.split(" ").join(""))