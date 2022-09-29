/* 
    Given an arr and a separator string, output a string of every item in the array separated by the separator.

    No trailing separator at the end
    Default the separator to a comma with a space after it if no separator is provided
*/

/*
const arr1 = [1, 2, 3];
const separator1 = ", ";
const expected1 = "1, 2, 3";

const arr2 = [1, 2, 3];
const separator2 = "-";
const expected2 = "1-2-3";

const arr3 = [1, 2, 3];
const separator3 = " - ";
const expected3 = "1 - 2 - 3";

const arr4 = [1];
const separator4 = ", ";
const expected4 = "1";

const arr5 = [];
const separator5 = ", ";
const expected5 = "";

function stringMaker(arr, separator) {
    var str = "";
    for (i = 0; i < arr.length; i++) {
        str += arr[i];
        if (i < (arr.length - 1)) {
            str += separator;
        }
    }
    return str;
}
console.log(stringMaker(arr1, separator1));
console.log(stringMaker(arr2, separator2));
console.log(stringMaker(arr3, separator3));
console.log(stringMaker(arr4, separator4));
console.log(stringMaker(arr5, separator5));
*/



/* 
Book Index
Given an array of ints representing page numbers
return a string with the page numbers formatted as page ranges when the nums
span a consecutive range.
*/

const nums6 = [1, 13, 14, 15, 37, 38, 70];
const expected6 = "1, 13-15, 37-38, 70";

const nums7 = [5, 6, 7, 8, 9];
const expected7 = "5-9";

const nums8 = [1, 2, 3, 7, 9, 15, 16, 17];
const expected8 = "1-3, 7, 9, 15-17";

function pageNumbers(arr) {
    var str = "";
    for (i = 0; i < arr.length; i++) {
        str += arr[i];
        if (arr[i] == (arr[i + 1] - 1)) {
            while (arr[i] == (arr[i + 1] - 1)) {
                i++;
            }
            str += ("-" + arr[i]);
        }
        if (i < (arr.length - 1)) {
            str += ", ";
        }
    }
    return str;
}

console.log(pageNumbers(nums6));
console.log(pageNumbers(nums7));
console.log(pageNumbers(nums8));