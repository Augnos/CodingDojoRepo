// given a 'search for' object with primative values and a list of objects
// return a new list of objects containing the same key value pairs as the search for

// given searchFor and items
const searchFor1 = {
    firstName: "Bob",
    age: 31
};

const items1 = [
    { firstName: "Bob", lastName: "Bobbert", age: 31 },
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
    { firstName: "Bob", lastName: "White", age: 31 }
];

// return a new list of objects containing the same key pair values
const output1 = [
    { firstName: "Bob", lastName: "Bobbert", age: 31 },
    { firstName: "Bob", lastName: "White", age: 31 }
];


function search(items, searchFor) {
    // create a new array with just the keys of searchFor
    const searchKeys = Object.keys(searchFor);

    // filter the items
    return items.filter(item => {
    //                  for each item in items

        // for each key in searchKeys
        for (const key of searchKeys) {
            // if the key doesn't exist or doesn't match searchFor, item gets filtered
            if (!item.hasOwnProperty(key) || item[key] != searchFor[key]) return false;
        }

        // if every key of item matches, item will be returned
        return true;
    })
}

console.log(search(items1, searchFor1));