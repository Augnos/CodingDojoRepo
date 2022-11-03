// https://leetcode.com/problems/two-sum/

// Given an array of integers, return indices of the
// two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.

// the array is unsorted, contains no floats, and there may be duplicate values

// Given 
let nums1 = [2, 11, 7, 15];
let target1 = 9;
// Because nums[0] + nums[2] = 2 + 7 = 9
// return [0, 2].

const twoSum = (nums, target) => {
    list = {};
    result = [];

    for (let i = 0; i < nums.length; i++) {

        // if i already a key in list, continue to next index
        if (nums[i] in list) continue;
        // else add i as new key with an empty array
        list[nums[i]] = [];
        // if i > target, continue to next index
        // if (nums[i] > target) continue;

        for (let j = i + 1; j < nums.length; j++) {
            if (list[nums[i]].includes(nums[j])) continue;
            list[nums[i]].push(nums[j]);

            // if (nums[j] > target) continue;

            if (nums[i] + nums[j] == target) {
                result.push(nums[i]);
                result.push(nums[j]);
                return result;
            }
        }
    }
}

function twoSumBetter(nums, target) {
    // declaring list to hold correct value pairs
    const list = {};

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in list) return [list[nums[i]], i];
        list[target - nums[i]] = i;
    }
    return [];
}


// from Leetcode
var twoSumFastest = function (nums, target) {
    const list = {}

    for (let i = 0; i < nums.length; i++) {
        const missingNumber = target - nums[i];
        if (list[missingNumber] >= 0) return [list[missingNumber], i];
        list[nums[i]] = i;
    }
    return [0, 0]
}


console.log(twoSumBetter([1, 1, 1, 1, 1, 1, 1, 5, 1, 1, 1, 6, 1, 1, 1, 1, 1], 11));