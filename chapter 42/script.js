// do...while loops

let myNum = +prompt("Enter a number");
let n = 10;
do{
    n--; }
while (n >= myNum) 
console.log(n);

var sum = 0;
var theNumber = 1;
do {
    sum += theNumber;
    theNumber++;
} while (sum <= 100);
console.log("Sum:", sum); // Output: Sum: 105

// writ a program to display factorial of a number.
let number = 4;
let factorial = 1;
    do {
    factorial = factorial * number;
    number --;
}
while (number > 0);
document.write("factorial of a number is:"+" "+factorial+"</br>");

// write a program to display finding the first 10 even number.
 let evenNumber = [];
 let i = 1;
 do{
    if (i % 2 === 0) {
        evenNumber.push(i)
    } 
    i++;}
    while (evenNumber.length<10);
    console.log(evenNumber);
 
// write a program to display user input vallidation.
let userInput;
let passWord ="javascript123";
 do {
userInput = prompt("Enter your password")
}
while (userInput!==passWord)
document.write("access granted");  

let coundown = 10;
do{
    coundown--;
}
while (coundown>0) 
    console.log(coundown);
