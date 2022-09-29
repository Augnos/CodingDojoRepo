var arr = [44, 33, 22, 65, 13];

function reverse(arr){
    for(var left = 0; left < arr.length/2; left++){
        var right = arr.length-1-left;
        
        var temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
    }

    return arr;
}

//arr.reverse();

console.log(reverse(arr));
