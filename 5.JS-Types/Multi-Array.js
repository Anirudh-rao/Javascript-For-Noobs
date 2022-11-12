// multidimensional array
const data = [[1, 2, 3], [1, 3, 4], [4, 5, 6]];

let studentsData = [['Jack', 24], ['Sara', 23], ['Peter', 24]];

let student1 = ['Jack', 24];
let student2 = ['Sara', 23];
let student3 = ['Peter', 24];

// multidimensional array
let studentsData1 = [student1, student2, student3];


let x = [
    ['Jack', 24],
['Sara', 23],
['Peter', 24]
];

// access the first item
console.log(x[0]); // ["Jack", 24]

// access the first item of the first inner array
console.log(x[0][0]); // Jack

// access the second item of the third inner array
console.log(x[2][1]); // 24


//Adding data
studentsData.push(['Peter', 24]);
console.log(studentsData); //[["Jack", 24], ["Sara", 23], ["Peter", 24]

studentsData[1][2] = 'hello';
console.log(studentsData); // [["Jack", 24], ["Sara", 23, "hello"]]

// removing 1 index array item
studentsData.splice(1,1);
console.log(studentsData); // [["Jack", 24]]