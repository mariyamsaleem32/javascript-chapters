// The DOM

// console.log(document);                                       // return html document on console

// console.log(document.getElementById("main"));               // return only id on console not div

// console.log(document.getElementById("main").innerHTML);    // return only html text on console not id path

// console.log(document.getElementById("main").innerHTML = "<h1>mariyam saleem</h1>"); 

// function getValue() {
// var input = document.getElementById("input").value;
// console.log(input);
// }
// getValue();                                                 // not work just works on html event method

// task
function calculateAge() {
    var birthdateInput = document.getElementById("birthdate").value;
    
    // Check if a date is selected
    if (!birthdateInput) {
        alert("Please select your birth date.");
        return;
    }
    
    // Create a Date object from the input value
    var birthdate = new Date(birthdateInput);
    var currentDate = new Date();

    // Calculate the difference in milliseconds
    var difference = currentDate.getTime() - birthdate.getTime();

    // Convert the difference to seconds, minutes, hours, days, months, and years
    var seconds = Math.floor(difference / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 24);
    var months = Math.floor(days / 30.436875); // Average days in a month (365.2425 days/year / 12 months)
    var years = Math.floor(days / 365.25); // Average days in a year (365.25 days/year)

    // Calculate remaining hours, minutes, and seconds
    var remainingHours = hours % 24;
    var remainingMinutes = minutes % 60;
    var remainingSeconds = seconds % 60;

    // Output the age
    console.log(`You are ${days} days old, ${months} months old, ${years} years old.`);
    console.log(`You are ${remainingHours} hours, ${remainingMinutes} minutes, and ${remainingSeconds} seconds old.`);
}

