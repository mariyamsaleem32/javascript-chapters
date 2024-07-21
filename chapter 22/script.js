/* Strings:
Measuring length
and extracting part */

var str = "hello world";
console.log(str.length);
console.log(str.slice(-5)); // negative index start from - 1
console.log(str.slice(0,5)); //index 1 is 0 and and end index is extra 1
console.log(str.slice(str.length-5)); 
//complete length is 11 and 11 -5 is 6 space and world

