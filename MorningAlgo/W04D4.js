/* 
---------- problem # 1---------------------------------
    Given an array of objects / dictionaries to represent new inventory,
    and an array of objects / dictionaries to represent current inventory,
    update the quantities of the current inventory

    if the item doesn't exist in current inventory, add it to the inventory
    return the current inventory after updating it.
*/

const newInv1 = [
    { name: "Grain of Rice", quantity: 9000 },
    { name: "Peanut Butter", quantity: 50 },
    { name: "Royal Jelly", quantity: 20 },
];
const currInv1 = [
    { name: "Peanut Butter", quantity: 20 },
    { name: "Grain of Rice", quantity: 1 },
];
const expected1 = [
    { name: "Peanut Butter", quantity: 70 },
    { name: "Grain of Rice", quantity: 9001 },
    { name: "Royal Jelly", quantity: 20 },
];

const newInv2 = [];
const currInv2 = [{ name: "Peanut Butter", quantity: 20 }];
const expected2 = [{ name: "Peanut Butter", quantity: 20 }];

const newInv3 = [{ name: "Peanut Butter", quantity: 20 }];
const currInv3 = [];
const expected3 = [{ name: "Peanut Butter", quantity: 20 }];

// function updateInventory(inv1, inv2) {
//     if (inv1.length > inv2.length){
//         bigInv = inv1;
//         smolInv = inv2;
//     } else {
//         bigInv = inv2;
//         smolInv = inv1;
//     }

//     for (i=2; i < bigInv.length; i++) {
//         for (x in bigInv[i]){
//             if (smolInv[i][x] == undefined) {
//                 console.log(false);
//                 smolInv.push(bigInv[i][x])
//             }
//         }
//     }

// }



// solution
function updateInventory(newInv = [], currInv = []) {
    for (let i = 0; i < newInv.length; i++) {
        let itemFound = false;
        const newItem = newInv[i];

        for (let j = 0; j < currInv.length; ++j) {
            const currItem = currInv[j];

            if (newItem.name === currItem.name) {
                itemFound = true;
                currItem.quantity += newItem.quantity;
                // no need to keep looping over the rest of the items since we found what we are looking for
                break;
            }
        }
        // after looking through all current inventory
        if (itemFound === false) {
            currInv.push(newItem);
        }
    }
    return currInv;
}

// console.log alone will return "[{…}, {…}, {…}]". This function will print every object separately instead.
function invLog(arr) {
    for (i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
    console.log("invLog complete");
    console.log("");
}

invLog(updateInventory(newInv1, currInv1));
invLog(updateInventory(newInv2, currInv2));
invLog(updateInventory(newInv3, currInv3));