// for loop

for (var i = 0; i < 6; i++) {
console.log(i); 
break;   // loop will be upgrade 1 to 5
}
// console.log(i);  
  
for (let i = 10; i >=5; i++) {
    console.log(i); 
    break;   // loop will not be upgrade answer is 0
    }

var arr = [11, 22, 83, 40, 55, 66, 78,10];
var min = arr[0];

for (let i = 0; i < arr.length; i++) {
 if (min > arr[i]) {
       min = arr[i]
 }
}
console.log(min);

var pakistaniCities = "karachi";
for (let i = 0; i < pakistaniCities.length; i++) {
    console.log(pakistaniCities[i]);
}

let word = prompt("Enter any word");
let reverse = "";
for (let i = word.length - 1; i >= 0; i--) {
    reverse += word[i];
}
if (word === reverse) {
    document.write("It's palindrom");   
} else {
    document.write("It's not palindrom");
}
