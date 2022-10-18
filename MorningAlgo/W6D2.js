// Factorial recursive function
function factorial(n) {

    // base case
    if (n == 1) {
        console.log("1! = 1");
        return 1;
    }

    // return case
    x = (factorial(n - 1) * n);
    console.log(n + "! = " + x);
    return x;
}



/*-------------problem 1---------------------

The height map of an area in represented an 2 dimensional array. 

If rain pours in one point in the map to untill it fills everywhere to 
a height value, 
which parts of the map will go under water?



Solution:
Make a 2d array for showing the points that has gone under water.

Then use a recursive algorithm to fill the 2d array. For example:
If the height value is less than a point's height:
    put '-' in the array's element. 
If the height value is higher than a point's height:
    put 'X' in the element
suppose that this is the height map:

[
[3, 5, 6, 7, 2],
[2, 3, 7, 9, 8],
[4, 2, 1, 3, 9],
[3, 2, 6, 2, 6],
[9, 8, 7, 5, 3]
]
*/

map1 = [
    [3, 5, 6, 7, 2],
    [2, 3, 7, 9, 8],
    [4, 2, 1, 3, 9],
    [3, 2, 6, 2, 6],
    [9, 8, 7, 5, 3]
];


function floodIndicator(map, xVal, yVal, height) {
    floodMap.push({x: xVal, y: yVal});
    console.log(floodMap);
    return floodRecursion(map, x, y, height, floodMap)
}

function floodRecursion(map, x, y, height, floodMap) {
    if (map[x][y] <= height) floodMap[x][y] = "flooded";
    console.log("map at " + x + ", " + y + ": " + map[x][y]);
    console.log("floodMap at " + x + ", " + y + ": " + floodMap[x][y]);

    // base case
    if (
        (map[x + 1][y] > height || floodMap[x + 1][y] == "flooded") &&
        (map[x - 1][y] > height || floodMap[x - 1][y] == "flooded") &&
        (map[x][y + 1] > height || floodMap[x][y + 1] == "flooded") &&
        (map[x][y - 1] > height || floodMap[x][y - 1] == "flooded")
    ) return floodMap;

    // return case
    if (map[x + 1][y] < height) return floodIndicator(map, (x + 1), y, height);
    if (map[x - 1][y] < height) return floodIndicator(map, (x - 1), y, height);
    if (map[x][y + 1] < height) return floodIndicator(map, x, (y + 1), height);
    if (map[x][y - 1] < height) return floodIndicator(map, x, (y - 1), height);
}

console.log(floodIndicator(map1, 2, 2, 2));