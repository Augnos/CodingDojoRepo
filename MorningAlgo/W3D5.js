// Problem 1

/* 
  Zip Arrays into Map

  Given two arrays, 
  create an associative array (aka hash map, an obj / dictionary) containing keys from the first array, and values from the second.
  Associative arrays are sometimes called maps because a key (string) maps to a value 
 */

var keys1 = ["abc", 3, "yo"];
var vals1 = [42, "wassup", true];
var expected1 = {
    abc: 42,
    3: "wassup",
    yo: true,
};

var keys2 = [];
var vals2 = [];
var expected2 = {};


function zipArrayIntoMap(keys, values) {
    var map = {};
    for (i = 0; i < keys.length && i < values.length; i++) {
        map[keys[i]] = values[i];
        // return map;
    }
    return map;
}

console.log(zipArrayIntoMap(keys1, vals1));
console.log(zipArrayIntoMap(keys2, vals2));


// Problem 2

/* 
  Invert Hash

  A hash table / hash map is an obj / dictionary
  Given an object / dict, 
  return a new object / dict that has the keys and the values swapped so that the keys become the values and the values become the keys
*/

const obj3 = { name: "Zaphod", charm: "high", morals: "dicey" };
const expected3 = { Zaphod: "name", high: "charm", dicey: "morals" };

function invertObj(obj) {
    return (zipArrayIntoMap(Object.values(obj), Object.keys(obj)));
}

console.log(invertObj(obj3));