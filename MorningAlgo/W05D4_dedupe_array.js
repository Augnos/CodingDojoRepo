
/* 
------------  problem 1 ---------------
    Given a SORTED array of integers, dedupe the array 
    Because array elements are already in order, all duplicate values will be grouped together.
    Ok to use a new array
    Bonus: do it in O(n) time (no nested loops, new array ok)
    Bonus: Do it in-place (no new array)
    Bonus: Do it in-place in O(n) time and no new array
    Bonus: Keep it O(n) time even if it is not sorted
*/

const nums1 = [1, 1, 1, 1];
const expected1 = [1];

const nums2 = [1, 1, 2, 2, 3, 3];
const expected2 = [1, 2, 3];

const nums3 = [1, 1, 2, 3, 3, 4];
const expected3 = [1, 2, 3, 4];

const nums4 = [1, 1];
const expected4 = [1];

function dedupe(nums){
    // establishing a variable to hold nums.length as it changes when array length changes in for loop
    newLength = nums.length-1;

    // for loop iterates 1 extra time to cycle the result to the original order
    for (i=0; i <= nums.length + 1; i++) {
        
        // breaks loop when there is only 1 index in array
        if (newLength == 0) break;
        
        // if first index == last index, remove the first index
        if (nums[0] == nums[newLength]) {
            nums.shift();
            newLength--;
        
        // if first index != last index, move first endex to the end of the array
        } else {
            nums.push(nums[0]);
            nums.shift();
        }
    }
    return nums;
}

console.log(dedupe(nums1));
console.log(dedupe(nums2));
console.log(dedupe(nums3));
console.log(dedupe(nums4));

/*
-------------problem 2 -----------------------
    Given an array of integers
    return the first integer from the array that is not repeated anywhere else
    If there are multiple non-repeated integers in the array,
    the "first" one will be the one with the lowest index.
*/

const nums5 = [3, 5, 4, 3, 4, 6, 5];
const expected5 = 6;

const nums6 = [3, 5, 5];
const expected6 = 3;

const nums7 = [3, 3, 5];
const expected7 = 5;

const nums8 = [5];
const expected8 = 5;

const nums9 = [];
const expected9 = null;

function firstUnrepeated(nums){
    const valueCount = new Object();
    re
    for (i=0; i < nums.length, i++) {
        if (temp.includes(nums[i])){

        }
        valueCount.nums[i]++;
    }
}