// Extracting parts of the date and time

var monthNames = ["jan", "feb", "mar", "apr", "may", "june", "july","aug","sep","oct","nov","dec"];
var month = new Date();
console.log("the current month is"+" "+monthNames[month.getMonth()]);

var date = new Date();
console.log("the current date is"+" "+date.getDate()+" "+monthNames[month.getMonth()]);

var year = new Date();
console.log("the current year is"+" "+year.getFullYear());

var hour = new Date();
console.log("the current hour is"+" "+hour.getHours());

var min = new Date();
console.log("the current minute is"+" "+min.getMinutes());

var sec = new Date();
console.log("the current second is"+" "+sec.getSeconds());

var all = new Date();
console.log("the current mil is"+" "+all.getMilliseconds());

var now = new Date();
var theHr = now.getHours();
var theMin = now.getMinutes();
alert("time: " + theHr + ":" + theMin);