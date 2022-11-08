/*
------------------- Problem 1----------------
    Given an int to represent how much change is needed
    calculate the fewest number of coins needed to create that change,
    using the standard US denominations
*/

const cents1 = 25;
const expected1 = { quarter: 1 };

const cents2 = 50;
const expected2 = { quarter: 2 };

const cents3 = 9;
const expected3 = { nickel: 1, penny: 4 };

const cents4 = 99;
const expected4 = { quarter: 3, dime: 2, penny: 4 };

function changeMaker(cents) {
    let coins = {};

    if (cents >= 25) {
        var quarters = Math.floor(cents / 25);
        cents -= quarters * 25;
        coins.quarters = quarters;
    }

    if (cents >= 10) {
        var dimes = Math.floor(cents / 10);
        cents -= dimes * 10;
        coins.dimes = dimes;
    }

    if (cents >= 5) {
        var nickels = Math.floor(cents / 5);
        cents -= nickels * 5;
        coins.nickels = nickels;
    }

    if (cents >= 1) {
        coins.pennies = cents;
    }

    return coins;
}

console.log(changeMaker(cents1));
console.log(changeMaker(cents2));
console.log(changeMaker(cents3));
console.log(changeMaker(cents4));

/*
-------------- problem 2 ----------------
for this problem, don't use any built-in sort function.
    Missing Value
    You are given an array of length N that contains, in no particular order,
    integers from 0 to N . One integer value is missing.
    Quickly determine and return the missing value.
*/

const nums5 = [3, 0, 1];
const expected5 = 2;

const nums6 = [3, 0, 1, 2];
const expected6 = null;
// Explanation: nothing is missing

/*
Bonus: now the lowest value can now be any integer(including negatives),
    instead of always being 0.
*/

const nums7 = [2, -4, 0, -3, -2, 1];
const expected7 = -1;

const nums8 = [5, 2, 7, 8, 4, 9, 3];
const expected8 = 6;

function findMissionInt(nums) {
    let low = nums[0];
    let high = nums[0];
    let sum = 0;
    let zeroPresent = false;

    for (x of nums) {
        sum += x;
        if (x == 0) zeroPresent = true;
        if (x < low) low = x;
        if (x > high) high = x;
    }

    const expectedSum = (high - low + 1) * (high + low) / 2;
    if (expectedSum == sum && zeroPresent) return null;
    else return (expectedSum - sum);
}

console.log(findMissionInt(nums5));
console.log(findMissionInt(nums6));
console.log(findMissionInt(nums7));
console.log(findMissionInt(nums8));