nums1 = [2, 6, 5, 1, 3, 9, 10, 8, 7, 4]

function quickSort(arr) {
    pivot = Math.ceil(Math.random() * arr.length);
    let i, j;
    console.log("pivot: " + pivot);
    for (i = 0; i < arr.length;) {
        if (i = j) break;
        if (arr[i] < arr[pivot]) {
            console.log("skipping arr[" + i + "]");
            i++;
        }
        else for (j = arr.length - 1; j >= 0;) {
            if (i = j) break;
            if (arr[j] > arr[pivot]) j--;
            else [arr[i], arr[j]] = [arr[j], arr[i]]
        }
    }
    console.log(j);
    return j;


}

console.log(quickSort(nums1));