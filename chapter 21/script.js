// chapter 21 Changing case

// var cityToCheck = prompt("Enter your favorite city and I shall tell you it is clean or not");
// cityToCheck = cityToCheck.toLowerCase();

// var cleanestCities = ["Cheyenne",  "santa fe", "Tucson", "great falls", "honolulu"];

// for (let i = 0; i <  cleanestCities.length; i++) 
//     {
//         if(cityToCheck === cleanestCities[i])
//        {
//          alert("It's one of the clanest city");
//        }
//     }
// Note that the keyword toLowerCase must be in camelCase.

var userName = "mariyam pary";
 var answer =  "";

 for (var i = 0; i < userName.length; i++) {
   answer += userName[i].toUpperCase()
}
console.log(answer); //all capital

var fullName = "muhammad saleem pary";
 var result =  "";
 var temp = "";

 for (let i = 0; i < fullName.length; i++) {
   if (i === 0) {
      result += fullName[i].toUpperCase();
   } else if (fullName[i] === " ") {
     temp += fullName[i + 1].toUpperCase();
   }
 else {
   if (temp) {
      result += " "+temp;
      temp = "";
   } else{
result += fullName[i]
}
 }
}
 console.log(result); // first and sec letter capital