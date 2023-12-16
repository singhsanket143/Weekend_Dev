let i = 20;

while(i >= 1) {
    console.log(i);
    i = i - 1;
}

console.log("END");

// convert the above while loop to a for loop
for(let i = 20; i >= 1; i = i - 1) {
    console.log(i);// this will print in a new line
}

for(let i = 20; i >= 1; i = i - 1) {
    process.stdout.write(i + " ");// this will print in a same line
}

