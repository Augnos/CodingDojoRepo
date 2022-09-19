var response = document.querySelector("#response");
var conchShell = document.querySelector("#conchShell");

function askQuestionStart(event) {
    event.preventDefault();
    if (userInput.value.length > 0) {
        conchShell.src = "Images/conch.gif";
        setTimeout(askQuestionEnd, 4000);
    }
    else {
        // alert("Please ask a question!");
        userInput.classList.add("not-valid");
        setTimeout(()=>{userInput.classList.remove("not-valid");},500)
    }
}
function askQuestionEnd() {
    userInput.value = "";
    userInput.focus();
    conchShell.src = "Images/conch.png";
    response.innerText = eightBall();
}

function eightBall() {
    var lifesAnswers = [
        'It is certain.',
        'It is decidedly so.',
        'Without a doubt.',
        'Yes - definitely.',
        'You may rely on it.',
        'As I see it, yes.',
        'Most likely.',
        'Outlook good.',
        'Signs point to yes.',
        'Yes.',
        'Reply hazy, try again.',
        'Ask again later.',
        'Better not tell you now.',
        'Cannot predict now.',
        'Concentrate and ask again.',
        "Don't count on it.",
        'My reply is no.',
        'My sources say no.',
        'Outlook not so good.',
        'Very doubtful.',
    ];
    var i = Math.floor(Math.random() * lifesAnswers.length);
    return lifesAnswers[i];
}

function askQuestion() {
    response.innerText = eightBall();
    askQuestionStart();

}