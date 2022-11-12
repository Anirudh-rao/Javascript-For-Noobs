const text1 = 'hello';
const text2 = 'world';
const text3 = '     JavaScript    ';

// concatenating two strings
const result1 = text1.concat(' ', text2);
console.log(result1); // "hello world"

// converting the text to uppercase
const result2 = text1.toUpperCase();
console.log(result2); // HELLO

// removing whitespace from the string
const result3 = text3.trim();
console.log(result3); // JavaScript

// converting the string to an array
const result4 = text1.split();
console.log(result4); // ["hello"]

// slicing the string
const result5= text1.slice(1, 3);
console.log(result5); // "el"

//Escape Charecters
const name = 'My name is \'Peter\'.';
console.log(name);

const BackSlash = 'My name is \"Peter\".'
console.log(BackSlash);

const NewLine = 'My name is \n Peter.'
console.log(NewLine);

const CarriageReturn = 'My name is \r Peter.'
console.log(CarriageReturn);

const VerticalTab = 'My name is \v Peter.'
console.log(VerticalTab);

const HorizontalTab = 'My name is \t Peter.'
console.log(HorizontalTab);

const Backspace = 'My name is \b Peter.'
console.log(Backspace);

const FormFeed = 'My name is \f Peter.'
console.log(FormFeed);
