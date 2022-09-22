var nums = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
var moreNums = [
    [1, 2, 3, 4, 5, 6],
    [2, 7, 4, 1, 5, 5]
]

function flatten(arr2d) {
    var flat = [];
    for (i = 0; i < arr2d.length; i++) {
        for (j = 0; j < arr2d[i].length; j++) {
            flat.push(arr2d[i][j]);
        }
    }
    return flat;
}

console.log(flatten(nums));
console.log(flatten(moreNums));