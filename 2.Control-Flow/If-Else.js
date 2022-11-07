/*
In JavaScript, there are three forms of the if...else statement.
if statement
if...else statement
if...else if...else statement
*/

const number = 4;

//If Statements
if (number > 0){
    //body of the if statment
    console.log("The Number is Positive");
}
console.log("The if Statement is easy");

//If -else Statement
// check if number is greater than 0
if (number > 0) {
    console.log("The number is positive");
}
// if number is not greater than 0
else {
    console.log("The number is either a negative number or 0");
}

console.log("The if...else statement is easy");

//If-else-if
// check if number is greater than 0
if (number > 0) {
    console.log("The number is positive");
}
// check if number is 0
else if (number == 0) {
    console.log("The number is 0");
}
// if number is neither greater than 0, nor zero
else {
    console.log("The number is negative");
}

console.log("The if...else if...else statement is easy");


//Nested If statment
if (number >= 0) {
    if (number == 0) {
        console.log("You entered number 0");
    } else {
        console.log("You entered a positive number");
    }
} else {
    console.log("You entered a negative number");
}
