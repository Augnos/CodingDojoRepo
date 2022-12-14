var floor = Math.floor(5.9);
// console.log(floor);
var ceil = Math.ceil(6.01);
// console.log(ceil);
var rand = Math.random();
// console.log(rand);

//roll a die and output randomly 1-6
//return that random number, no decimals!
function d6(){
    // return Math.ceil((Math.random() * 6));       not truly equal, 0 has a slightly larger chancewith Math.ceil

    //                              range offset    Range and offset with Math.random is used to create an RNG for any collections of integers. 
    return Math.floor((Math.random() * 6 + 1));
}

console.log("Roll D6: " + d6());

function eightBall(){
    var lifesAnswers = [
        "It is certain.",
        "It is decidedly so.",
        "Without a doubt.",
        "Yes - definitely.",
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

console.log("8 Ball says: " + eightBall());