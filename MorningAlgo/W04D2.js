/*
----1st  question: -------
    Reverse Word Order
    Given a string of words(with spaces)
return a new string with words in reverse sequence.
*/

const str1 = "This is a test";
const expected1 = "test a is This";

const str2 = "hello";
const expected2 = "hello";

const str3 = "   This  is a   test  ";
const expected3 = "test a is This";

function sentenceReverse(arr) {
    // variables declared
    var tempStr = "";
    var finalStr = "";

    // for loop goes through input string
    for (i = 0; i < arr.length; i++) {

        // if and while arr[i] is a chacter other than space or undefined,
        // it will be added to tempStr.
        if (arr[i] != " ") {
            while ((arr[i] != " ") && (arr[i] != undefined)) {
                tempStr += arr[i];
                i++;
            }

            // when the while loop ends, the word is added to the start of finalStr.
            if (finalStr == "") {
                finalStr = tempStr;
            }
            else {
                finalStr = tempStr + " " + finalStr;
            }
            tempStr = "";
        }
    }
    return finalStr;

}

console.log(sentenceReverse(str1));
console.log(sentenceReverse(str2));
console.log(sentenceReverse(str3));


/* 
----------Question 2:-----------
Parens Valid
Given an str that has parenthesis in it
return whether the parenthesis are valid
*/

const str4 = "Y(3(p)p(3)r)s";
const expected4 = true;

const str5 = "N(0(p)3";
const expected5 = false;
// Explanation: not every parenthesis is closed.

const str6 = "N(0)t ) 0(k";
const expected6 = false;
// Explanation: because the second ")" is premature: there is nothing open for it to close.

const str7 = "a(b))(c";
const expected7 = false;
// Explanation: same number of opens and closes but the 2nd closing closes nothing.

function parensValid(arr) {
    // variable to count paranthesis declared
    parenCounter = 0

    // when "(" is recieved in for loop, counter goes up.
    // when ")" is recieved, counter goes down
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == "(") {
            parenCounter++;
        } else if (arr[i] == ")") {
            parenCounter--;
        }

        // if counter is <0 (when a premature ")" is received), function returns false
        if (parenCounter < 0) {
            return false;
        }
    }

    // if counter at the end of string is NOT 0, function returns false.
    if (parenCounter == 0) {
        return true;
    } else {
        return false;
    }
}

console.log(parensValid(str4));
console.log(parensValid(str5));
console.log(parensValid(str6));
console.log(parensValid(str7));



/*
-----------Question 3 :------------
Braces Valid
Given a string sequence of parentheses, braces and brackets, determine whether it is valid. 
*/

const str8 = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!";
const expected8 = true;

const str9 = "D(i{a}l[ t]o)n{e";
const expected9 = false;

const str10 = "A(1)s[O (n]0{t) 0}k";
const expected10 = false;



function bracketCounter(arr, opener, closer) {
    counter = 0;

    for (i = 0; i < arr.length; i++) {
        if (arr[i] == opener) {
            counter++;
        } else if (arr[i] == closer) {
            counter--;
        }

        if (counter < 0) {
            return false;
        }
    }

    if (counter == 0) {
        console.log (opener + closer + "is true")
        return true;
    } else {
        console.log (opener + closer + "is false")
        return false;
    }
}


function allBrackets(arr) {
    if (
        bracketCounter(arr, "(", ")") &&
        bracketCounter(arr, "[", "]") &&
        bracketCounter(arr, "{", "}")) {
        return true;
    } else {
        return false;
    }
}

console.log(allBrackets(str8));
console.log(allBrackets(str9));
console.log(allBrackets(str10));