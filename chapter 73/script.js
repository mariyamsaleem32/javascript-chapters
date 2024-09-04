/* Objects:
Constructors for methods */

// function student(name, fatherName, age, cls, email) {
//         this.name = name
//         this.fatherName = fatherName
//         this.age = age
//         this.cls = cls
//         this.email = email
//         this.nationality = "pakistani"
//     };
    
    
    
//     let student1 = new student("mariyam", "saleem", 18, "IV", "mariyam134556@gmail.com");
//     let student2 = new student("hina", "saleem", 25, "x", "hinakhan139556@gmail.com");
//     let student3 = new student("alina", "umer", 21, "xx", "alina661556@gmail.com");
    
//     console.log(student1);
//     console.log(student2);
//     console.log(student3);

function student(name, fatherName, age, cls, email) {
    this.name = name
    this.fatherName = fatherName
    this.age = age
    this.cls = cls
    this.email = email
    this.nationality = "pakistani"
};



let student1 = new student("mariyam", "saleem", 18, "IV", "mariyam134556@gmail.com");
let student2 = new student("hina", "saleem", 25, "x", "hinakhan139556@gmail.com");
let student3 = new student("alina", "umer", 21, "xx", "alina661556@gmail.com");

console.log(student1);
console.log(student2);
console.log(student3);