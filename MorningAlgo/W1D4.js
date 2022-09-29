// // explaining functions
// var x=5;                    //var x is estableshed, and given value of 5
// function setX(newValue){    //creates setX with parameter of newValue
//     x = newValue;           //var x is changed to newValue
// }                           //function doesn't run, it's established to be called later
// console.log(x);             //prints 5
// setX(15);                   //function is called, and x is now set to 15
// console.log(x);             //prints 15

// function addToX(amount){
//     return x + amount;      
//     //"return" will return the result of the line, then stop the function
//     console.log("hello there!") //will not be completed, due to return
// }
// console.log(x);             //prints 5
// var result = addToX(-10);   //stores -5 to result
// console.log(result);        //prints -5
// console.log(x);             //prints 5

function isPal(arr) {
    for(var left=0; left<(arr.length/2); left++) {
        var right = arr.length-1-left;
        if(arr[left] != arr[right]) {
            return "Not a pal-indrome!";
        }
    }
    return "Pal-indrome!";
}
    
var result1 = isPal([6, 5, 4, 4, 5, 5]);
console.log(result1);
    
var result2 = isPal("rats live on no evil star");
console.log(result2)