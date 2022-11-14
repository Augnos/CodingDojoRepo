/* 
    Given in an alumni interview in 2021.
    String Encode
    You are given a string that may contain sequences of consecutive characters.
    Create a function to shorten a string by including the character,
    then the number of times it appears. 


    If final result is not shorter (such as "bb" => "b2" ),
    return the original string.
  */

const str1 = "aaaabbcddd";
const expected1 = "a4b2c1d3";

const str2 = "";
const expected2 = "";

const str3 = "a";
const expected3 = "a";

const str4 = "bbcc";
const expected4 = "bbcc";

function stringDecoder(arr) {

    // str is your new string, init'd to ""
    var str = "";
    // mult is a temporary value to define how many times a character is repeated, init'd to 1
    var mult = 1;

    // for loop starts at start of string and moves through each character
    for (i = 0; i < arr.length; i++) {
        // if next index is the same as current index, while loop is enterred until i reaches last character of repeated characters
        if (arr[i] == (arr[i + 1])) {
            while (arr[i] == (arr[i + 1])) {
                // each iteration of while loop adds to mult and i
                mult++;
                i++;
            }
            // str appended with index and number of times it repeated, then mult is reset to 1
            str += (arr[i] + mult);
            mult = 1;
        }
        // if index doesn't repeat, then str appended with index and 1
        else {
            str += (arr[i] + mult);
            mult = 1
        }
    }
    // if str is longer than the original string (arr), then it is skipped and original string is returned
    if (str.length >= arr.length) {
        return arr;
    }
    else {
        return str;
    }
}

// console.log(stringDecoder(str1));
// console.log(stringDecoder(str2));
// console.log(stringDecoder(str3));
// console.log(stringDecoder(str4));



const str5 = "a3b2c1d3";
const expected5 = "aaabbcddd";

const str6 = "a3b2c12d10";
const expected6 = "aaabbccccccccccccdddddddddd";

function stringEncoder(arr) {

    var str = "";
    for (i = 0; i < arr.length; i += 2) {
        console.log(i);
        var slice = arr.slice(i, i+2);
        console.log(slice);
        for (j = parseInt(slice[1]); j > 0; j--) {
            // return(console.log(typeof(j)));
            str += slice[0];
            console.log(str);
        }
    }
}

console.log(stringEncoder(str5));
console.log(stringEncoder(str6));