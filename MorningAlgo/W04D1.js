/* 
    1st Problem
Given an array of strings
    return the number of times each string occurs (a frequency / hash table)
*/

const arr1 = ["a", "a", "a"];
const expected1 = {
    a: 3,
};

const arr2 = ["a", "b", "a", "c", "B", "c", "c", "d"];
const expected2 = {
    a: 2,
    b: 1,
    c: 3,
    B: 1,
    d: 1,
};

const arr3 = [];
const expected3 = {};

function letterCounter(arr) {
    obj = {};
    for (i = 0; i < arr.length; i++) {
        if (obj[arr[i]] == undefined) {
            obj[arr[i]] = 1;
        } else {
            obj[arr[i]] += 1;
        }
    }
    return (obj);
}

console.log(letterCounter(arr1));
console.log(letterCounter(arr2));
console.log(letterCounter(arr3));


/* 
2nd problem:
    Given a non-empty array of odd length containing ints where every int but one
    has a matching pair (another int that is the same)
    return the only int that has no matching pair.
*/

const nums4 = [1];
const expected4 = 1;

const nums5 = [5, 4, 5];
const expected5 = 4;

const nums6 = [5, 4, 3, 4, 3, 4, 5];
const expected6 = 4; // there is a pair of 4s but one 4 has no pair.

const nums7 = [5, 2, 6, 2, 3, 1, 6, 3, 2, 5, 2];
const expected7 = 1;

function unpairedInt(arr) {
    obj = {};
    for (i = 0; i < arr.length; i++) {
        if (obj[arr[i]] == undefined) {
            obj[arr[i]] = 1;
        } else if (obj[arr[i]] == 0) {
            obj[arr[i]] = 1;
        } else if (obj[arr[i]] == 1) {
            obj[arr[i]] = 0;
        }
    }
}


/* 
    3rd problem:
    Given a string,
    return a new string with the duplicates excluded
    Bonus: Keep only the last instance of each character.
*/

const str8 = "abcABC";
const expected8 = "abcABC";

const str9 = "helloo";
const expected9 = "helo";

const str10 = "";
const expected10 = "";

const str11 = "aa";
const expected11 = "a";

function dupeExcluder(arr) {
    var str = [];
    var obj = {};
    if (arr.length == 0){
        return("");
    }
    for (i = 0; i < arr.length; i++) {
        if (obj[arr[i]] == undefined) {
            obj[arr[i]] = 1;
            str += arr[i];
        }
    }
    return(str);
}

console.log(dupeExcluder(str8));
console.log(dupeExcluder(str9));
console.log(dupeExcluder(str10));
console.log(dupeExcluder(str11));