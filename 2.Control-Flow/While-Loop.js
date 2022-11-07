// program to display numbers from 1 to 5
// initialize the variable
let i = 1, n = 5;

// while loop from i = 1 to 5
while (i <= n) {
    console.log(i);
    i += 1;
}

// program to find the sum of positive numbers
// if the user enters a negative numbers, the loop ends
// the negative number entered is not added to sum

let sum = 0;

// take input from the user
let number = 2

while(number >= 0) {

    // add all positive numbers
    sum += number;

    // take input again if the number is positive
    number = 10
}

// display the sum
console.log(`The sum is ${sum}.`);