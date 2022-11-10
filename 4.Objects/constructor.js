// constructor function
function Person () {
    this.name = 'John',
    this.age = 23,

    this.greet = function () {
        console.log('hello');
    }
}

// create objects
const person1 = new Person();
const person2 = new Person();

// access properties
console.log(person1.name);  // John
console.log(person2.name);  //


// constructor function
function Person (person_name, person_age, person_gender) {

   // assigning  parameter values to the calling object
    this.name = person_name,
    this.age = person_age,
    this.gender = person_gender,

    this.greet = function () {
        return ('Hi' + ' ' + this.name);
    }
}


// creating objects
const person3 = new Person('John', 23, 'male');
const person4 = new Person('Sam', 25, 'female');

// accessing properties
console.log(person3.name); // "John"
console.log(person4.name); // "Sam"
