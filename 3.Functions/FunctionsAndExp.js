// program to print the text
// declaring a function
function greet(name) {
    console.log("Hello " + name + ":)");
}

// variable name can be different
let name = "Anirudh Rao "

// calling function
greet(name);


// program to add two numbers using a function
// declaring a function
function add(a, b) {
    console.log(a + b);
}

// calling functions
add(3,4);
add(2,9);

// program to add two numbers
// declaring a function
function add(a, b) {
    return a + b;
}

// take input from the user
let number1 = 2;
let number2 = 3.2;

// calling function
let result = add(number1,number2);

// display the result
console.log("The sum is " + result);
