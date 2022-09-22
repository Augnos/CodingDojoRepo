
var countText = document.querySelector("#countText");
var count =0;
function buttonClicker(){
    count++;
    //console.log("you clicked the button!");
    countText.innerText = count;
}