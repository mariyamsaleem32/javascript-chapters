/* Strings:
Replacing characters */

var str = "SMIT SMIT SMIT saylani";
console.log(str.replaceAll("SMIT","hello")); // replace all smit to hello

var str = "SMIT saylani";
console.log(str.replace("SMIT","saylani")); // just replace one smit to saylani

// first index means replace this word and last means with replace this word


var userName = "hello world hello hello hello ";
var word = "hello";
var rep = "world";
var count = 0;

for(i = 0; i < userName.length; i++){
    var find = userName.slice(i,i + word.length);
    if (find === word) {
        count ++;
        if(count === 3){
            userName = userName.slice(0,i) + rep + userName.slice(i + word.length)
    }
}
}

console.log(userName);