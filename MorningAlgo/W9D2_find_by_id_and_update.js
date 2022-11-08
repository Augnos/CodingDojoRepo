// findByIdAndUpdate(id, updateObject, arr)

// Given an id, an object that has keys with corresponding updated values, and an array of objects

// Find the object by "id" key that matches the given id value and then update that object's
// keys with the provided new values.

// Return the updated object, or null if no object was found

const obj1 = {
    admin_level: 1000000,
    name: "student 1 million",
    isLateToday: true
}

const id1 = 1;

const students1 = [
    {
        id: 1,
        name: "student1",
        isLateToday: false,
        lateCount: 15,
        redBeltStatus: false
    },
    {
        id: 2,
        name: "student2",
        isLateToday: false,
        lateCount: 1,
        redBeltStatus: false
    },
    {
        id: 3,
        name: "student3",
        isLateToday: false,
        lateCount: 0,
        redBeltStatus: false
    }
];

function findByIdAndUpdate(searchId, updatedVals, collection) {
    // filter the collection array to only contain objects that match the searchId
    filtered = collection.filter(item => {
        if (item.id == searchId) return true;
        return false;
    })

    // set results to be the (only) object in the filtered array
    let results = filtered[0];

    // return null when there are no matches for searchId
    if (results == undefined) return null;

    // returns the object with the updatedVals
    for (key in updatedVals) {
        results[key] = updatedVals[key];
    }

    return results;
}

console.log(findByIdAndUpdate(id1, obj1, students1));