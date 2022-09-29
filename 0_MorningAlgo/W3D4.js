// Problem 1

const str1 = "a x a";
const expected1 = true;

const str2 = "racecar";
const expected2 = true;

const str3 = "Dud";
const expected3 = false;

const str4 = "oho!";
const expected4 = false;

function isPal(str) {
    for (var left = 0; left < (str.length / 2); left++) {
        var right = str.length - 1 - left;
        if (str[left] != str[right]) {
            return false;
        }
    }
    return true;
}

console.log(isPal(str1));
console.log(isPal(str2));
console.log(isPal(str3));
console.log(isPal(str4));


// Problem2

const str5 = "what up, daddy-o?";
const expected5 = "dad";

const str6 = "uh, not much";
const expected6 = "u";

const str7 = "Yikes! my favorite racecar erupted!";
const expected7 = "e racecar e";

const str8 = "a1001x20002y5677765z";
const expected8 = "5677765";

const str9 = "a1001x20002y567765z";
const expected9 = "567765";

function longPal(str) {
    // init longestPalindrome as an empty string
    var longestPal = "";

    // first for loop starts at begginning of str, and moves through every potential start of a palindrome
    for (var start = 0; start < (str.length); start++) {
        var currentPal = "";     // every new start inits currentPal as an empty string

        // second for loop will set an end, and move through every potential end of a palindrome
        for (var end = 0; end < (str.length - start); end++) {
            currentPal += str[start+end];    // for every new end point, currentPal adds the ending character

            // if statement is used to check if 2 things are true:
            // 1. if the string between the points is a palindrome,
            // 2. if the currentPal string is longer than the longestPal
            if ( isPal(currentPal) && currentPal.length > longestPal.length) {
                
                // if all conditions are met, currentPal becomes longestPal
                longestPal = currentPal;
            }
        }
    }
    
    // longestPal is returned once entire strings have been checked
    return longestPal;
}


console.log(longPal(str5));
console.log(longPal(str6));
console.log(longPal(str7));
console.log(longPal(str8));
console.log(longPal(str9));