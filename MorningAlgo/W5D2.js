/*
-------------1: Binary Search ------------
Array: Binary Search (non recursive)
    Given a sorted array and a value, return whether the array contains that value.
    Do not sequentially iterate the array. Instead, ‘divide and conquer’,
    taking advantage of the fact that the array is sorted 
    Bonus (alumni interview):
    first complete it without the bonus, because they ask for additions
    after the initial algo is complete
    return how many times the given number occurs
*/

const nums1 = [1, 3, 5, 6];
const searchNum1 = 4;
// const expected1 = false;

const nums2 = [4, 5, 6, 8, 12];
const searchNum2 = 5;
// const expected2 = true;

const nums3 = [3, 4, 6, 8, 12];
const searchNum3 = 3;
// const expected3 = true;

// bonus, how many times does the search num appear?
const nums4 = [2, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9];
const searchNum4 = 2;
// const expected4 = 4;


function binarySearch(nums, searchNum){
    topSplit = nums.length;
    botSplit = -1;

    searchCount = 0;

    while (botSplit + 1 != topSplit) {
        halfSplit = Math.floor((topSplit + botSplit)/2);

        if (nums[halfSplit] == searchNum) {
            searchCount++;
            for (i=1; nums[halfSplit + i] == nums[halfSplit]; i++) {
                searchCount++;
            }
            for (i=1; nums[halfSplit - i] == nums[halfSplit]; i++) {
                searchCount++;
            }
            return searchCount;
        }
        else if (nums[halfSplit] > searchNum) {
            topSplit = halfSplit;
        }
        else if (nums[halfSplit] < searchNum) {
            botSplit = halfSplit;
        }
    }

    return false;
}

console.log(binarySearch(nums1, searchNum1));
console.log(binarySearch(nums2, searchNum2));
console.log(binarySearch(nums3, searchNum3));
console.log(binarySearch(nums4, searchNum4));