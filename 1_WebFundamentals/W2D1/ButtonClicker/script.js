console.log("this is a dojonary");

var loginButton = document.querySelector("#loginButton");
function login() {
    loginButton.innerText = "Logout";
}

var addButton = document.querySelector("#addButton");
function addDefinition() {
    addButton.remove();
}

var likeButton = document.querySelector(".likeButton");
function liked() {
    alert("Ninja was liked");
}