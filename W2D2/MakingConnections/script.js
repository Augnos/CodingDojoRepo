console.log("page loaded...");

var badge = document.querySelector(".badge");
var connectionCount = document.querySelector("#connectionCount");
var userName = document.querySelector("#userName");

function requestAccept(element) {
    element.remove();
    badge.innerText--;
    connectionCount.innerText++;
}

function requestClose(element) {
    element.remove();
    badge.innerText--;
}

function editProfile(element) {
    element.innerText = "any other name";
}