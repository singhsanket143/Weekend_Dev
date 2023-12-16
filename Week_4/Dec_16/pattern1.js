let total_rows = 10;
for(let i = 1; i <= total_rows; i++) {

    // the below for loop prints i stars for ith row in same line
    for(let j = 1; j <= i; j++) {
        process.stdout.write("*"); /// ***
    }
    // for the next row, we need to go to a new line
    console.log(); // gives a new line -> process.stdout.write("\n");

}
    