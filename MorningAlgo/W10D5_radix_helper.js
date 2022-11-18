// this function will take an integer and return an object of the place and its value

function radixHelper(int = 0){
    let str = int.toString();
    let place = {};
    for (let i=0; i < str.length; i++){
        place[Math.pow(10, i)] = parseInt(str[str.length-1-i]);
    }
    return (int, place);
}

console.log(radixHelper(69));
console.log(radixHelper(420));
console.log(radixHelper(1337));
console.log(radixHelper(90210));
