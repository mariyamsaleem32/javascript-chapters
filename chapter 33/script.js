// Specifying a date and time

var findDAy = new Date( "28 july 2006");
console.log(findDAy);  // day is friday

let birthDate = new Date('2006-07-28');
let currentDate = new Date();

let difference = currentDate.getTime() - birthDate.getTime();

let seconds = Math.floor(difference / 1000);
let minutes = Math.floor(seconds / 60);
let hours = Math.floor(minutes / 60);
let days = Math.floor(hours / 24);
let months = Math.floor(days / 30.436875); // Average days in a month (365.2425 days/year / 12 months)
let years = Math.floor(days / 365.25); // Average days in a year (365.25 days/year)


let remainingHours = hours % 24;
let remainingMinutes = minutes % 60;
let remainingSeconds = seconds % 60;

console.log(`You are ${days} days old, ${months} months old, ${years} years old.`);
console.log(`You are ${remainingHours} hours, ${remainingMinutes} minutes, and ${remainingSeconds} seconds old.`);


