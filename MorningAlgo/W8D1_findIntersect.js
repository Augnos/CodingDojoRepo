// Find the intersecting values of 2 supersets of arrays, and return a set of the instersections as an array.

superset1 = [1, 1, 1, 2, 2, 3, 9, 11];
superset2 = [1, 1, 2, 2, 3, 7, 11];

function intersect(arr1, arr2) {
    let set = [];
    let idx1 = 0;
    let idx2 = 0;

    while (idx1 < arr1.length && idx2 < arr2.length) {

        if (set[set.length - 1] != arr1[idx1] && arr1[idx1] == arr2[idx2]) {
            set.push(arr1[idx1]);
            idx1++;
            idx2++;
        } else if (arr1[idx1] < arr2[idx2]) {
            idx1++;
        } else idx2++;
    }

    return set;
}

console.log(intersect(superset1, superset2));