//Arrays:
//Removing, inserting,
//and extracting elements


//add and remove elements from start
var arr = ["sameena","hina","zunera","amna"];
console.log(arr);
arr.shift();      //remove sameena
console.log(arr);
arr.unshift("rabiya","fatima");  //add rabiya and fatima
console.log(arr);
                                    
var students = ["fatima","hina","zunera","amna","usra"];
console.log(students);
students.splice(2,2,"zoya","asma");   // start from 3rd index to 4th
console.log(students);

var pets = ["dog", "cat", 57,"fly", "bug", "alima", false];
console.log(pets.slice(1, 5)); //from cat to bug 
console.log(pets.slice(5));    // from alima to last

