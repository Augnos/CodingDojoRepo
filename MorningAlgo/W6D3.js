/* 
Let's warm up with the Fibonacci sequence in recursive. 
Return the fibonacci number at the nth position, recursively.

Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
The next number is found by adding up the two numbers before it,
starting with 0 and 1 as the first two numbers of the sequence.
*/

const num1 = 0;
const expected1 = 0;

const num2 = 1;
const expected2 = 1;

const num3 = 2;
const expected3 = 1;

const num4 = 3;
const expected4 = 2;

const num5 = 4;
const expected5 = 3;

const num6 = 8;
const expected6 = 21;

function fibonacci(n) {

    if (n == 0) return 0;
    if (n == 1) return 1;

    x = (fibonacci(n - 1) + fibonacci(n - 2));
    return x;
}


console.log(fibonacci(num1));
console.log(fibonacci(num2));
console.log(fibonacci(num3));
console.log(fibonacci(num4));
console.log(fibonacci(num5));
console.log(fibonacci(num6));

// Fibonacci using memoization
function fiboMem(n) {

    let a;
    let b=1;
    let c=0;

    if (n == 0) return 0;
    for (i = 2; i <= n; i++) {
        a = b + c;
        c = b; 
        b = a;
    }
    
    return b
}

console.log(fiboMem(num1));
console.log(fiboMem(num2));
console.log(fiboMem(num3));
console.log(fiboMem(num4));
console.log(fiboMem(num5));
console.log(fiboMem(num6));