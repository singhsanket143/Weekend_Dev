// The major difference between let and var exist around the scoping mechanism

// let and const support block scope, if block scope not present then global scope
// var support function scope, and if function scope not present then global scope


// let and const supportTDZ 
// var doesn't support TDZ


// Differences between let and const
// Reassignment

// variables declared with let are reassignable
// const on the other hand is not

function letReassignment() {
    let x = 10;
    console.log(x);
    x = "Sanket";
    console.log(x);
}


function constReassignment() {
    const x = 10;
    console.log(x); // Print x
    x = "Sanket"; // Because x is const, reassignment is not possible // throw an error
    console.log(x);
}

function constReassignmentWithObjects() {
    const obj = {x: 10, y: 20};
    console.log(obj);
    obj = {a: 5}; // reassignment to a brand new object // throw an error
}


function constUpdatingValue() {
    const o = {x: 100, y: 0};
    o.x = 90; // this donot throw an error
    o.z = 99;
}

function temp() {
    const x = {a: 10, b: 20};
    console.log(x);
    const y = x;
    y.a = 99;
    console.log(y);
    console.log(x);
}

constUpdatingValue();
temp();