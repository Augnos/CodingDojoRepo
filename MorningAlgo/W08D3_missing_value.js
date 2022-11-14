// #1 Missing Value

// You are given an array with the length of n that contains in no order integers from 0 to n.
// The length of the array is n and the largest number is no bigger than n.

// Quickly determine and return the missing value.

// The short version: If I give you an array of 0-9 and it's missing a number, how do you find it?

// quickly: O(n)
// no space constraints

let arr1 = [3, 0, 1]
// return 2

let arr2 = [5, 2, 7, 8, 4, 9, 3, 0, 1]
// return 6

function missingValue(arr, n = arr.length) {
    // printing the inputs
    console.log("array: " + arr + ", length: " + n);
    
    // sum1 is the ∑ of all numbers between 0 and n
    let sum1 = (0 + n) * ((n + 1) / 2);
    // sum2 is the ∑ of the current array, with the missing number
    let sum2 = 0;
    for (i in arr) sum2 += arr[i];
    
    // missing value will be the difference of the sums, given only a single missing value
    return (sum1 - sum2);
}

console.log(missingValue(arr1));
console.log(missingValue(arr2));