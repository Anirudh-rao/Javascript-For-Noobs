//strings example
const name = 'Peter';
const name1 = "Jack";
const result = `The names are ${name} and ${name1}`;
console.log(result);

const a = 'hello';
console.log(a[1]); // "e"

const a = 'hello';
console.log(a.charAt(1)); // "e"

let a = 'hello';
a = 'Hello';
console.log(a); // "Hello"

let a = 'hello';
a[0] = 'H';
console.log(a); // "hello"

// using the + operator
const message1 = 'This is a long message ' +
'that spans across multiple lines' +
'in the code.'

// using the \ operator
const message2 = 'This is a long message \
that spans across multiple lines \
in the code.'

const a = 'hello';
const b = new String('hello');

console.log(a); // "hello"
console.log(b); // "hello"

console.log(typeof a); // "string"
console.log(typeof b); // "object"