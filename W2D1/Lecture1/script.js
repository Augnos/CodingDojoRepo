var count = 0;
function clickHandler(element){
    count++;
    element.innerText = `you clicked me ${count} times!`;
}

var countOver = 0;
function mouseOver(element){
    countOver++;
    console.log("you moused over!");
    element.innerText = "in: " + countOver + " out: " + countOut;
}
var countOut = 0;
function mouseOut(element){
    countOut++;
    console.log("you moused out!");
    element.innerText = "in: " + countOver + " out: " + countOut;

}

var separateCount = 0;
var countTag = document.querySelector("#countTag");
function separateCounter(){
    separateCount++;
    countTag.innerText = "count: " + separateCount;
}
