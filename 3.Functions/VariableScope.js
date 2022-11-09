// program to show the change in global variable
let a = "hello";

function greet() {
    a = 3;
}

// before the function call
console.log(a);

//after the function call
greet();
console.log(a); // 3


// program showing local scope of a variable
let a1 = "hello";

function greet1() {
    let b = "World"
    console.log(a + b);
}

greet1();



// program showing block-scoped concept
// global variable
let a2 = 'Hello';

function greet2() {

    // local variable
    let b2= 'World';

    console.log(a2 + ' ' + b2);

    if (b2 == 'World') {

        // block-scoped variable
        let c = 'hello';

        console.log(a2 + ' ' + b2 + ' ' + c);
    }

    // variable c cannot be accessed here
    //console.log(a + ' ' + b + ' ' + c);
}

greet2();
