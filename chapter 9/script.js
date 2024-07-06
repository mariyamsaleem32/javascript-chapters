//prompt

var getNumber = prompt("Enter your number");
console.log(typeof getNumber);
// answer is string becuse I do'nt use + or parseInt before prompt

var getNumber = parseInt(prompt("Enter your number"));
 console.log(typeof getNumber);    //answer is number

// we can also do like this
var getNumber = prompt("Enter your number");
var getUserName = prompt("Enter your name");
console.log(Number(getNumber) + typeof getUserName); 