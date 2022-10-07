/* 
---------- problem # 1---------------------------------
    Given an objects to represent new inventory,
    and an object to represent current inventory,
    update the quantities of the current inventory

    if the item doesn't exist in current inventory, add it to the inventory
    return the current inventory after updating it.
*/

const newInv1 = {
    "Grain of Rice": 9000,
    "Peanut Butter": 50,
    "Royal Jelly": 20
};
const currInv1 = {
    "Peanut Butter": 20,
    "Grain of Rice": 1
};
const expected1 = {
    "Peanut Butter": 70,
    "Grain of Rice": 9001,
    "Royal Jelly": 20
};

const newInv2 = {};
const currInv2 = { "Peanut Butter": 20 };
const expected2 = { "Peanut Butter": 20 };

const newInv3 = { "Peanut Butter": 20 };
const currInv3 = {};
const expected3 = { "Peanut Butter": 20 };


function updateInventory(newInv, currInv) {

    combinedInv = {};
    for (x in currInv) {
        console.log(combinedInv[x]);
        
        if (combinedInv[x] = undefined) {
            combinedInv[x] = 0 ;
            console.log(combinedInv[x]);
            
        }
        else {
            combinedInv[x] += currInv[x];
        }
    }
    return combinedInv;
}

console.log(updateInventory(newInv1, currInv1));