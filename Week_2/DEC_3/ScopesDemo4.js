var teacher = "Sanket Singh"; // Known to js in global scope

function fun() { // Known to js in global scope
    var teacher = "Anurag"; // Known to js in fun scope
    content = "JS";
    console.log("hello", teacher);
}

function gun() { // Known to js in global scope
    var student = "Karthik"; // Known to js in gun scope
    console.log("Welcome to the class", student, "Teacher for your class is", teacher);
}

console.log(teacher, content); // Sanket Singh, No auto global promotion here

fun();
gun();

console.log(teacher, content);
