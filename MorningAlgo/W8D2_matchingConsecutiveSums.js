// function will find the sums of consecutive numbers in a given array, 
// and return an output of arrays where the sum is equal to k.
function conSum(arr, k) {

    // declared output as empty array
    let output = [];

    // i is start and j is end or potential slices. For loop will iterate "i" through the entire starting array.
    // at each new iteration of i, j=i and sum=arr[i].
    for (i = 0, j = 0, sum = arr[i]; i < arr.length; i++, j = i, sum = arr[i]) {
        
        // j will increase while sum is less than k.
        while (sum < k) {
            j++;
            sum += arr[j];
        }

        // array between i and j is pushed to the output.
        // looped to check edge cases, and j is increased until the sum is no longer equal to k
        while (sum == k) {
            output.push(arr.slice(i, j + 1));
            j++;
            sum += arr[j];
        }
    }

    return output;
}

arr1 = [1, 3, 5, 7, 0, 8];


console.log(conSum(arr1, 8))