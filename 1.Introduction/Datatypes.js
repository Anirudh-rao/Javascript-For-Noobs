//1. Strings Example
const name2= 'ram';
const name1 = "hari";
const result = `The names are ${name2} and ${name1}`;
console.log(result)

//2.Numbers Example
const number1 = 3;
const number2 = 3.433;
const number3 = 3e5 // 3 * 10^5

const number4 = 3/0;
console.log(number4); // Infinity

const number5 = -3/0;
console.log(number5); // -Infinity

// strings can't be divided by numbers
const number6 = "abc"/3;
console.log(number6);  // NaN



// 3. BigInt value
const value1 = 900719925124740998n;

// Adding two big integers
const result1 = value1 + 1n;
console.log(result1); // "900719925124740999n"

const value2 = 900719925124740998n;

// Error! BitInt and number cannot be added
//const result2 = value2 + 1;
//console.log(result2);

//4. Boolean
const dataChecked = true;
const valueCounted = false;
console.log(dataChecked)
console.log(valueCounted)


//6. Others
//Undefined
let name;
console.log(name); // undefined

//Null
const number = null;
console.log(number)

//Symbol
// two symbols with the same description

const value3 = Symbol('hello');
const value4 = Symbol('hello');
console.log(value3)
console.log(value4)



//7.Objects
const student = {
    firstName: 'ram',
    lastName: null,
    class: 10
};
console.log(student)

// data is of undefined type
let data;

// data is of integer type
data = 5;

// data is of string type
data = "JavaScript Programming";


const name8 = 'ram';
typeof(name8); // returns "string"

const number9 = 4;
typeof(number9); //returns "number"

const valueChecked4 = true;
typeof(valueChecked4); //returns "boolean"

const a = null;
typeof(a); // returns "object"