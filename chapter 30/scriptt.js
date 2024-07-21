var num = 10.53324578;
console.log(num.toFixed(10));


var str = num.toString();
 if (str.charAt(str.length - 1) === "5") {
 str = str.slice(0, str.length - 1) + "6";
 }
 num = Number(str);
 prettyNum = num.toFixed(2);
console.log(prettyNum);