//  Functions:
// Passing them data 

// let greet = "hello";
// function greeting(name) {
//  console.log(greet + " " + name);
// } 
// greet = "hi"
// greeting("john");

// let userInput = +prompt("Enter a number");

// function myString(num) {
//     console.log(num.toString());
// }

// myString(userInput);

function fillCity() {
    var cityName;
    var zipEntered = document.getElementById("zip").value.trim(); // Use .value and trim whitespace
    
    console.log("Entered ZIP code:", zipEntered);

    switch (zipEntered) {
        case "7816":
            cityName = "Karachi";
            break;
        case "1590":
            cityName = "Islamabad";
            break;
        case "5321":
            cityName = "Faislabad";
            break;
        default:
            cityName = "Unknown"; 
    }
    
    // Output the city name to the console and in an alert
    console.log("City Name:", cityName);
    alert("City: " + cityName);
}


