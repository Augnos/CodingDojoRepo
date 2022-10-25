// Bubble sort

nums1 = [6, 3, 7, 4, 5];
// expected = [3, 4, 5, 6, 7]

function bubbleSort (arr) {
    for (i=0; i < arr.length; i++){
        for (j=0; j < arr.length-1-i; j++){
            if(arr[j] > arr[j+1]) [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
        }
    }
    return arr;
}

console.log(bubbleSort(nums1));