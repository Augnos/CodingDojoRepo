var floor = Math.floor(5.9);
// console.log(floor);
var ceil = Math.ceil(6.01);
// console.log(ceil);
var rand = Math.random();
// console.log(rand);

//roll a die and output randomly 1-6
//return that random number, no decimals!
function d6(){
    return Math.ceil((Math.random() * 6));

}

console.log(d6());

function eightBall(){
    var lifesAnswers = [
        "It is certain.",
        "It is decidedly so.",
        "Without a doubt.",
        "Yes – definitely.",
        "You may rely on it.",
        "As I see it, yes.",
        "Most likely.",
        "Outlook good.",
        "Yes.",
        "Signs point to yes.",
        "Reply hazy, try again.",
        "Ask again later.",
        "Better not tell you now.",
        "Cannot predict now.",
        "Concentrate and ask again.",
        "Don't count on it.",
        "My reply is no.",
        "My sources say no.",
        "Outlook not so good.",
        "Very doubtful."
    ];

    return lifesAnswers[Math.floor((Math.random() * lifesAnswers.length))];
}

console.log(eightBall());