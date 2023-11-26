function f(n) {
    if(n == 0) return 1;
    const result = n * f(n-1);
    return result;
}

console.log(f(3))