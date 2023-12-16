let n = 5;
for(let i = 1; i <= n; i++) { // outer -> task for rows

    // the below for loop prints i stars for ith row in same line
    for(let j = 1; j <= n; j++) { // inner -> columns
        process.stdout.write("*"); /// ***
    }
    // for the next row, we need to go to a new line
    console.log(); // gives a new line -> process.stdout.write("\n");

}
    