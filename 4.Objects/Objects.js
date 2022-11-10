// nested object
const student = {
    name: 'John',
    age: 20,
    marks: {
        science: 70,
        math: 75
    },
    //Embeding Functions
    greet: function() { console.log('hello') }
}

// accessing property of student object
console.log(student.marks); // {science: 70, math: 75}

// accessing property of marks object
console.log(student.marks.science); // 70

//Accessing Functions
student.greet(); // hello