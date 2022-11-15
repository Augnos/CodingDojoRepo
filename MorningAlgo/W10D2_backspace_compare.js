/* https://leetcode.com/problems/backspace-string-compare/

BACKSPACE STRING COMPARE
Given two strings S and T containing only lowercase letters and "#" characters,
return if they are equal when both are typed into empty text editors.

# character means a backspace character.

i.e., after processing the backspaces, are the two strings equal?

Bonus: solve in O(n) time

Examples:

Input: S = "ab#c", T = "ad#c" "ac" "ac"
Output: true
Explanation: Both S and T become "ac"

Input: S = "ab##", T = "c#d#"
Output: true
Explanation: Both S and T become ""
    
Input: S = "a##c", T = "#a#c"
Output: true
Explanation: Both S and T become "c"
*/


function reduce (str){
    let newStr="";
    
    for( i=0; i< str.length; i++){
        if (str[i] != "#") newStr += str[i];
        if (str[i] === "#" && newStr != "") newStr = newStr.slice(0, newStr.length-1);
    }
    return newStr;
}

function backspaceCompare(s, t){
    return reduce(s) === reduce(t) ? true : false;
}

console.log(backspaceCompare("ab#c", "ad#c"));
console.log(backspaceCompare("ab##", "c#d#"));
console.log(backspaceCompare("a##c", "#a#c"));
console.log(backspaceCompare("a##c", "#ac"));
