// https://opendsa-server.cs.vt.edu/embed/quicksortAV
// https://www.youtube.com/watch?v=ZZuD6iUe3Pc
// https://upload.wikimedia.org/wikipedia/commons/8/84/Lomuto_animated.gif


// Steps:
// 1. Pick an item out of the arr to be your pivot value
//   - usually the middle item or the last item
// 2. Partition the array IN PLACE such that all values less than the pivot are to the left of it
//    and all values greater than the pivot are to the right (not perfectly sorted)
// 3. return: new idx of the pivot value

// Params: arr, left, right
// - for now, left will be 0, and right will be the last idx
// - later these params will be used to specify a sub section of the array to partition

//                 arr, 0th idx,  last idxx
function quickSortHelper(arr, left = 0, pivot = arr.length - 1) {
    if (arr.length < 2) return arr;

    let right = pivot - 1;

    while (left <= right) {

        while (arr[left] < arr[pivot]) left++;
        while (arr[right] > arr[pivot]) right--;

        if (arr[left] > arr[pivot] && arr[right] < arr[pivot]) [arr[left], arr[right]] = [arr[right], arr[left]];
    }

    [arr[left], arr[pivot]] = [arr[pivot], arr[left]];
    return arr[pivot];
}

console.log(quickSortHelper([4, 2, 6]))