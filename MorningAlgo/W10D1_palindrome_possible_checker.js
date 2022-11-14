// This function is used to check if any mixed string can be arranged into a palindrome.

function isPossiblePalindrome(str){
    let list = {};

    // character count in str is added to list.
    for (key of str){
        if (list.hasOwnProperty(key)) list[key]++;
        else list[key] = 1;
    }

    // oddCount is a count of all odd amounts of characters in the str
    let oddCount = 0;
    for (key in list){
        if (list[key] % 2 == 1) oddCount++;
        // if oddCount is 2 or more, palindrome is not possible under any circumstance
        if (oddCount >=2 ) return false;
    }

    // for odd length strings, palindrome is possible only when there is 1 odd amount character
    if (str.length % 2 == 1 && oddCount == 1) return true;
    // for even length strings, palindrome is possible only when there are no odd amount characters
    if (str.length % 2 == 0 && oddCount == 0) return true;

    // all other strings are not possible palindromes
    return false;
}

const str1 = "cattaco"; // true
const str2 = "abba";    // true
const str3 = "data";    // false

console.log(str1, isPossiblePalindrome(str1));
console.log(str2, isPossiblePalindrome(str2));
console.log(str3, isPossiblePalindrome(str3));