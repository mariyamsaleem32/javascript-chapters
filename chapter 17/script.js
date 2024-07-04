//Arrays:
//Removing, inserting,
//and extracting elements

/*
////add and remove elements from start
var arr = ["sameena","hina","zunera","amna"];
console.log(arr);
arr.shift();      //remove
console.log(arr);
arr.unshift("rabiya","iqra");  //add
console.log(arr);
*/                                     

var students = ["fatima","hina","zunera","amna","usra"];
console.log(students);
students.splice(2,2,"zoya","asma");   // start from 2nd index to 3rd
console.log(students);

var pets = ["dog", "cat", 57,"fly", "bug", "alima", false];
console.log(pets.slice(1, 5));
console.log(pets.slice(5));

