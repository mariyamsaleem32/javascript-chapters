//ch Math expressions: Unfamiliar operators

 /*
 ++num;  //pre increment
 --num;  //pre decrement
 num++;  //post increment
 num--;  //post decrement
*/

var num = 10;
alert("now num is:"+" "+num);
 num++;       //increase 1
 alert("now num is:"+" "+num+" "+"by applying post increment");

 var number = 2 + 2 * 4 - 5 * 2;
 alert(number);              //answer is 0

 
 var num = ( 2 + 2) * 4 - 5 * 2;
 alert(num);                //now answer is 6

 let a = 2;
 let b = 3;
 let result = (a++ + --b) - b++ - --a * a++;
              // 2 + 2 - 2 - 2 * 2
              //  4 - 2 = 2   2 - 4 = -2
 alert(result);        
 //answer is - 2 

