const student = {

    // data property
    firstName: 'Monica',

    // accessor property(getter)
    get getName() {
        return this.firstName;
    },
    //accessor property(setter)
    set changeName(newName) {
        this.firstName = newName;
    },

};
// getting property
Object.defineProperty(student, "getName", {
    get : function () {
        return this.firstName;
    }
});

// setting property
Object.defineProperty(student, "changeName", {
    set : function (value) {
        this.firstName = value;
    }
});

console.log(student.firstName); // Monica

// changing the property value
student.changeName = 'Sarah';

console.log(student.firstName); // Sarah

// accessing data property
console.log(student.firstName); // Monica

// accessing getter methods
console.log(student.getName); // Monica

// trying to access as a method
//console.log(student.getName()); // error

// change(set) object property using a setter
student.changeName = 'Sarah';

console.log(student.firstName); // Sarah