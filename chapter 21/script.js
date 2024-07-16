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

var fullName = "mariyam Saleem";
fullName = fullName.slice(0,1).toUpperCase() + fullName.slice(1);
console.log(fullName);

