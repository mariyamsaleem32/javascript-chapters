// Form validation: text fields

function registrationForm() {
    let fName = document.getElementById("firstNameField").value;
    let lName = document.getElementById("lastNameField").value; // Fixed typo
    let contact = document.getElementById("contactField").value; // Fixed ID and variable name
    let email = document.getElementById("emailField").value; // Fixed variable name
    let password = document.getElementById("passwordField").value;
    let cPassword = document.getElementById("conformPasswordField").value; // Fixed typo
    
    if (fName == "" || lName == "" || contact == "" || email == "" || password == "" || cPassword == "") {
        alert("All fields are mandatory to fill");
        return false;
    } else if (contact.length > 11 || contact.length < 10) {
        alert("Number should be of 10 digits");
        return false;
    } else if (password !== cPassword) {
        alert("Passwords do not match");
        return false;
    } else {
        return true;
    }
}
