
function isEvenOrOdd(x, fn) {

    // call fn here
    fn();
    
    return x%2 == 0;
}

isEvenOrOdd(10, function () {
    console.log("Processing....");
    console.trace("Trace of the functions");
});