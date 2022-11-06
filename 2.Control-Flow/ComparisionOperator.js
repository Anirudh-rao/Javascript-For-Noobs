// 1.  Equal To Operator

const  a = 5, b = 2 , c = 'helllo'

//Equal Operator
console.log(a == 5);
console.log(b == '2');
console.log(c == 'Hello');

// 2. Not equal operator
console.log(a != 2); // true
console.log(b != 'Hello'); // true

// 3. Strict equal operator -- data and Data type Equal
console.log(a === 2); // true
console.log(a === '2'); // false

// 4. strict not equal operator
console.log(a !== 2); // false
console.log(a !== '2'); // true
console.log(b !== 'Hello'); // true

// 5. greater than or equal operator
console.log(a >= 3); //true

// 6. less than operator
console.log(a < 2); // false
console.log(b < 3); // true


// 7. less than or equal operator
console.log(a <= 3) // true
console.log(a <= 2); // true

// 8. logical AND
console.log(a && a); // true
console.log(a && b);  // false

console.log((c > 2) && (c < 2)); // false

// 9. logical OR
console.log(a || b); // true
console.log(b || b); // false
console.log((c>2) || (c<2)); // true


// 10. logical NOT
console.log(!a); // false
console.log(!b); // true
