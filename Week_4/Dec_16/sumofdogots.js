let x = 10005;
let sum = 0;
while(x > 0) {
    let lastDigit = x % 10;
    sum += lastDigit;
    // remove the last digit from x
    x = Math.floor(x/10);
}

console.log(sum);