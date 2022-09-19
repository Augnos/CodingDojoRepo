console.log("Print odds 1-20");
console.log("Using a loop, write code that will console.log all of the odd values from 1 up to 20.");

for (i = 1; i <= 20; i++) {
    if (i % 2 == 1){
        console.log(i);
    }
}

console.log("");
console.log("Decreasing Multiples of 3");
console.log("Using a loop, write code that will console.log all of the values that are evenly divisible by 3 from 100 down to 0.");

for (i = 100; i > 0; i--) {
    if (i % 3 == 0) {
        console.log(i);
    }
}

console.log("");
console.log("Print the sequence");
console.log("Using a loop, write code that will console.log the values in this sequence 4, 2.5, 1, -0.5, -2, -3.5.");

var arr = [4, 2.5, 1, -0.5, -2, -3.5]
for (i=0; i < arr.length; i++) {
    console.log(arr[i]);
}

console.log("");
console.log("Sigma");
console.log("Write code that will add all of the values from 1-100 onto some variable sum and at the end console.log the result 1 + 2 + 3 + ... + 98 + 99 + 100. We should get back 5050 at the end.");

var sigma = 0;
for (i=1; i <= 100; i++) {
    sigma += i;
}
console.log(`The sigma of 1-100 is: ${sigma}`);

console.log("");
console.log("Factorial");
console.log("Write code that will multiply all of the values from 1-12 onto some variable product and at the end console.log the result 1 * 2 * 3 * ... * 10 * 11 * 12. We should get back 479001600 at the end.");

var factorial = 1;
for (i=1; i <= 12; i++) {
    factorial *= i;
}
console.log(`The factorial of 1-12 is: ${factorial}`);
