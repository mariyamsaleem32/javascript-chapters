
setInterval(myFunction, 1000)

function myFunction() {
     let d = new Date();
     document.getElementById("demo").
     innerHTML =
     d.getHours() + ":" +
     d.getMinutes() + ":" + 
     d.getSeconds() 
     document.getElementById("demo").style.fontSize = "37px" ;
} 