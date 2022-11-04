// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
// You can use each character in text at most once. Return the maximum number of instances that can be formed.

function balloons(text, target = "balloon") {
    let textMap = {};
    let tarMap = {};
    let count = Infinity;
    let newCount;

    for (char of text) {
        textMap.hasOwnProperty(char) ?
            textMap[char]++ :
            textMap[char] = 1;
    }

    for (char of target) {
        tarMap.hasOwnProperty(char) ?
            tarMap[char]++ :
            tarMap[char] = 1;
    }

    console.log(textMap, tarMap);
    for (char in tarMap) {
        if (textMap.hasOwnProperty(char))
            newCount = Math.floor(textMap[char] / tarMap[char]);
        else return 0;

        if (count > newCount)
            count = newCount;
    }

    return count;
}

console.log(balloons("a;lskdjfa;lskdjfal;ksdjfl;aksdjflksdjflkasjdlfkjsdlkfjasldkfjlaksdjflkasjdflk"));