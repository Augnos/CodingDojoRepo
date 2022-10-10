/* 
----------------Question 1 -----------------------

Given an array of ints representing a line of people where the space between
indexes is 1 foot, with 0 meaning no one is there and 1 meaning someone is in
that space,
return whether or not there is at least 6 feet separating every person.
Bonus: O(n) linear time (avoid nested loops that cause re-visiting indexes).
*/

const queue1 = [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1];
const expected1 = false;

const queue2 = [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1];
const expected2 = true;

const queue3 = [1, 0, 0, 0, 0, 0, 0, 0, 1];
const expected3 = true;

const queue4 = [];
const expected4 = true;

function spaceChecker(queue) {
    for (i=0; i < queue.length; i++) {
        
        // returns false when there are 1's next to each other
        if (queue[i] == 1 & queue[i+1] == 1) return false;

        // for loop checks number of spaces between i's, and iterates count and i
        if (queue[i] == 1 & queue[i+1] == 0) {
            var count = 0;
            while (queue[i+1] == 0){
                count++;
                i++;
            }

            // counts between 1s less than 6 return false
            if (count < 6 && queue[i+1] == 1) return false;
        }
    }

    // all conditions met return
    return true;
}

console.log(spaceChecker(queue1));
console.log(spaceChecker(queue2));
console.log(spaceChecker(queue3));
console.log(spaceChecker(queue4));

/*
------------- Question 2-------------------
Balance Index
Here, a balance point is ON an index, not between indices.
Return the balance index where sums are equal on either side
(exclude its own value).

Return -1 if none exist.
*/

const nums5 = [-2, 5, 7, 0, 3];
const expected5 = 2;

const nums6 = [9, 9];
const expected6 = -1;

function balance (nums) {
    leftBalance = 0;
    rightBalance = 0;

    // for loop to set right balance value
    for (i=0; i < nums.length; i++) {
        rightBalance += nums[i];
    }

    for (i=0; i < nums.length; i++) {
        rightBalance -= nums[i];
        if (leftBalance == rightBalance) return(i);
        leftBalance += nums[i];
    }
    return(-1);
}

console.log(balance(nums5));
console.log(balance(nums6));