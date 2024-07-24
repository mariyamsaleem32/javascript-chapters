/* The DOM:
Parents and children */

console.log(document.head); // return head on console

console.log(document.body); // return body on console body is parent element

console.log(document.body.childNodes[1]);  // return div on console because div is child of body

  // Selecting and styling the paragraph using id selector
  let head = document.getElementById("header");
  head.style.color = "pink";
  head.style.backgroundColor = "black";
  head.style.fontSize = "54px";
  head.style.fontFamily = "Times New Roman";

  // Selecting and styling the paragraph using class selector
  let paragraphs = document.getElementsByClassName("pera");

 paragraphs[1].innerHTML = " Asslam o alikum, I'm mariyam saleem I'm interested in creating websites I'm currently learning html5,CSS3 and javascript,react, I'm looking to collaborate on  How to reach me Fun fact Popular repositories";

  paragraphs[0].style.color = "yellow";
  paragraphs[1].style.color = "green";
  paragraphs[2].style.color = "blue";
  paragraphs[0].style.backgroundColor = "skyBlue";
  paragraphs[1].style.backgroundColor = "black";
  paragraphs[2].style.backgroundColor = "orange";
  paragraphs[1].style.fontSize = "44px";
  paragraphs[0].style.fontSize = "40px";
  paragraphs[2].style.fontSize = "37px";
  paragraphs[2].style.fontFamily = "Times New Roman";

  