/*
In certain situations, JavaScript automatically
converts one data type to another (to the right type).
This is known as implicit conversion.
*/

// numeric string used with + gives string type
let result;

//String Conversion
result = '3' + 2;
console.log(result) // "32"

result = '3' + true;
console.log(result); // "3true"

result = '3' + undefined;
console.log(result); // "3undefined"

result = '3' + null;
console.log(result); // "3null"


//Number Conversion
result = '4' - '2';
console.log(result); // 2

result = '4' - 2;
console.log(result); // 2

result = '4' * 2;
console.log(result); // 8

result = '4' / 2;
console.log(result); // 2


//NAN Conversion
result = 'hello' - 'world';
console.log(result); // NaN

result = '4' - 'hello';
console.log(result); // NaN


//Boolean Conversion
result = '4' - true;
console.log(result); // 3

result = 4 + true;
console.log(result); // 5

result = 4 + false;
console.log(result); // 4

//Null Conversion
result = 4 + null;
console.log(result);  // 4

result = 4 - null;
console.log(result);  // 4