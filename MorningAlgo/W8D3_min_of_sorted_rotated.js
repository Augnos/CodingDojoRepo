// #2 Min of Sorted-Rotated

// You are given an an array of integers with a length of up to 255 thousand.
// This array has first been sorted, then rotated by an unknown amount.

// Find and return the minimum value.

// Ninja Goal: Do this faster than 0(n) ie: find your answer without visiting every single element
// (think binary search)

const arr1 = [5, 6, 7, 8, 9, 10, 11, 12, 13, 1]
// return 3


function findMinSlow(arr, low = 0, mid = Math.floor(arr.length / 2), high = arr.length - 1) {
    // printing the array and each variable at every recursion
    console.log(arr, low, mid, high);

    // base cases
    if (arr[low] == arr[high]) return arr[low];
    if (arr[low] < arr[high]) return arr[low];
    if (arr[mid] < arr[mid - 1]) return arr[mid];

    // slice the array in half, and recurse only the half where slice[low] > slice[high]
    if (arr[low] > arr[mid]) return findMinSlow(arr.slice(0, mid));
    if (arr[mid] > arr[high]) return findMinSlow(arr.slice(mid, high + 1));
}

console.log(findMinSlow(arr1));


function findMin(arr, low = 0, mid = Math.floor(arr.length / 2), high = arr.length - 1) {
    // printing the array and each variable at every recursion
    console.log(arr, low, mid, high);

    // base cases
    if (arr[low] == arr[high]) return arr[low];
    if (arr[low] < arr[high]) return arr[low];
    if (arr[mid] < arr[mid - 1]) return arr[mid];

    // slice the array in half, and recurse only the half where slice[low] > slice[high]
    if (arr[low] > arr[mid]) return findMinSlow(arr.slice(0, mid));
    if (arr[mid] > arr[high]) return findMinSlow(arr.slice(mid, high + 1));
}