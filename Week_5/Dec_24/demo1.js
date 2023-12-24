const result = eval("5 + 4");

console.log(result);


let x = 10;

let y = 20;
console.log(x, y);
eval(`x = ${y}`); // x = 20
console.log(x, y);

console.log(eval(" '3' + 2 "))