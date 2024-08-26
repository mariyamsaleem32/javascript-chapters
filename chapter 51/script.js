function myAddFunction1() {
    
let node1 = document.createElement("li");
node1.innerText = "water";
document.getElementById("list").appendChild(node1);
}

// let myList = document.createTextNode("water");
// node.appendChild(myList);

function myRemoveFunction() {
    const list = document.getElementById("list");
    list.removeChild(list.firstElementChild);
    }