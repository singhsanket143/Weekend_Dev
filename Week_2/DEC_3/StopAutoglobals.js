"use strict"; // this enables the strict mode

var teacher = "Sanket Singh"; // Known to js in global scope

function fun() { // Known to js in global scope
    var teacher = "Anurag"; // Known to js in fun scope
    content = "JS"; // now it will not make content autoglobal, as we are in strict mode and throws error
    console.log("hello", teacher);
}

function gun() { // Known to js in global scope
    var student = "Karthik"; // Known to js in gun scope
    console.log("Welcome to the class", student, "Teacher for your class is", teacher);
}

console.log("hello");

// console.log(teacher, content); // Sanket Singh, No auto global promotion here

fun();
gun();

console.log(teacher, content);
