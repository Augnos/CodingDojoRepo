/* 
------ problem 1:-------------
Recursive Sigma
Input: integer
Output: sum of integers from 1 to Input integer
*/

const num1 = 5;
// const expected1 = 15;
// Explanation: (1+2+3+4+5)

const num2 = 2.5;
// const expected2 = 3;
// Explanation: (1+2)

const num3 = -1;
// const expected3 = 0;


function sigma(num) {
    num = Math.floor(num);
    if (num < 1) return 0;
    if (num == 1) return 1;

    return (sigma(num - 1) + num);
}

console.log(sigma(num1));
console.log(sigma(num2));
console.log(sigma(num3));

/*
------------- Problem 2---------------------
Recursively sum an arr of ints
*/

const nums1 = [1, 2, 3, 4, 5];
// const expected1 = 6;

const nums2 = [1];
// const expected2 = 1;

const nums3 = [];
// const expected3 = 0; 

function sigmaArr(nums) {
    if (nums.length < 1) return 0;
    if (nums.length == 1) return (nums[0]);

    base = nums.shift();
    return (base + sigmaArr(nums));
}

console.log(sigmaArr(nums1));
console.log(sigmaArr(nums2));
console.log(sigmaArr(nums3));