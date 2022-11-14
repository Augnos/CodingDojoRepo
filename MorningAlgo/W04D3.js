// ---------- Problem # 1-------------

const str = "Hello World";

const rotateAmnt1 = 0;
// const expected1 = "Hello World";

const rotateAmnt2 = 1;
// const expected2 = "dHello Worl";

const rotateAmnt3 = 2;
// const expected3 = "ldHello Wor";

const rotateAmnt4 = 4;
// const expected4 = "orldHello W";

const rotateAmnt5 = 13;
// const expected5 = "ldHello Wor";

function rotateString(str,rotations) {
    for (i = 0; i < rotations; i++){
        var rotator = str[str.length-1];
        str = rotator + str.slice(0,str.length-1);
    }
    return(str);
}

console.log(rotateString(str,rotateAmnt1));
console.log(rotateString(str,rotateAmnt2));
console.log(rotateString(str,rotateAmnt3));
console.log(rotateString(str,rotateAmnt4));
console.log(rotateString(str,rotateAmnt5));

// ---------- Problem # 2-------------

const strA1 = "ABCD";
const strB1 = "CDAB";
// Explanation: if you start from A in the 2nd string, the letters are in the same order, just rotated
// const expected1 = true;

const strA2 = "ABCD";
const strB2 = "CDBA";
// Explanation: all same letters in 2nd string, but out of order
// const expected2 = false;

const strA3 = "ABCD";
const strB3 = "BCDAB";
// Explanation: same letters in correct order but there is an extra letter.
// const expected3 = false; 

function isRotation(str1, str2) {
    
    if (str1.length != str2.length) {
        return ("length check false");
    }

    for (i = 0; i < str1.length; i++){
        var rotator = str1[str1.length-1];
        str1 = rotator + str1.slice(0,str1.length-1);

        if (str1 == str2) {
            return true;
        }
    }

    return ("all rotations false");
}

console.log(isRotation(strA1,strB1));
console.log(isRotation(strA2,strB2));
console.log(isRotation(strA3,strB3));