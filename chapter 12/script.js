//if...else and else if statements

var studentName = prompt("Enter your name");
if (studentName.toLowerCase() == "mariyam") {
alert("you are right user");
}
else if (studentName.toLowerCase() == "hina") {
    alert("you are new user");
}
else{
    alert("you are not right user");
}

// var salary = amountThree;
// var amountOne = 10000;
// var amountTwo = 25000;
// var amountThree = 100000;
// var amountFour = 1000000;
// var amountFive = 10000000;
//if statement will not work otherwise else condition will be work because I assigned
// variable to value before initializ and js works top to bottom.

var amountOne = 10000;
var amountTwo = 25000;
var amountThree = 100000;
var amountFour = 1000000;
var amountFive = 10000000;
var salary = amountThree;
 // now it will work answer will be  you are average
if (salary === amountOne) {
    console.log("you are poor" + " " + studentName);
} else if (salary === amountTwo) {
    console.log("you are middle" + " " + studentName);
} else if (salary === amountThree) {
    console.log("you are average" + " " + studentName);
} else if (salary === amountFour) {
    console.log("you are rich" + " " + studentName);
} else if (salary === amountFive) {
    console.log("you are highly rich" + " " + studentName);
} else {
    console.log("I don't know about your status" + " " + studentName); 
}

var flag = true;
if (flag) {
console.log("It is raining!");
}
else{
    console.log("else is running!");  
}

var studentName = "mariyam";
var chocolete = "dairyMilk";
var chips = "lays";
if (studentName === "mariyam") {
alert("she likes"+" "+chocolete);
}
 if (studentName === "hina") {
    alert("she likes"+" "+chips);
}
else{
    alert("she likes nothing");
} 
// we can also use if multi times but else will only work with nearest if
// never work with first if 
//if first if statement will be true so, else will automatecaly works with first if
 

var a = 3;
var b = 5;
var c = a + b;  // 3 + 5 = 8
var d = 8;
var answer = "good"
if (c === d) {
console.log(answer);
}

