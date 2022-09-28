var word1 = [];
var word2 = [];

function compareWords(word1, word2) {
    if (word1.length != word2.length) {
        console.log("words are different lengths ");
        return (false);
    }
    for (i = 0; i < word1.length; i++) {
        if (word1[i].toUpperCase() === word2[i].toUpperCase()) {
            continue;
        } else {
            console.log("false at character " + (i + 1));
            return (false);
        }
    }
    return (true);
}

console.log(compareWords("pythons", "pyTHon"));