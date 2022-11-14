/*
    Create a function to determine the max amount of
    servings that can be made based on a recipe and
    available ingredients.

    Input:
        - recipe object where keys are ingredient names
        and values are unit required (int)
        - available ingredients object where keys are ingredient
        names and values are unit available (int)

    Output:
        - int (max servings)

    Side note (super extra challenge version): Realistically, the values
    would be an object as well with the keys: unit (unit of measure), and amount.
    If the available ingredient was stored in a different unit,
    a conversion table would be needed to convert units of measure.
*/

// Example Input
const recipe1 = {
    "organic fat": 99,
    "live squid": 1,
    "birds nest": 1,
    "fried flesh": 1,
    "spicy": 5,
    "gourmet memes": 4200
};

const available1 = {
    "organic fat": 990,
    "birds nest": 10,
    "fried flesh": 10,
    "live squid": 1,
    "spicy": 50,
    "gourmet memes": 42000,
    "sugar": 9001,
    "spice": 5,
    "everything nice": 1,
};

// Output: 1 because only 1 live squid is available
// Output: 10 IF we had 10 live squids because then we have 10x of every ingredient
// Output: 0 IF we had 0 live squids or live squids key didn't exist in 'available'

function getMaxServings(recipe, available) {
    // initial count is set to infinity
    servings = Infinity;

    // for loop checks each ingredient of recipe for how much of that ingredient is available
    for (key in recipe) {
        console.log(key, available[key] + "/" + recipe[key])

        // maxServings declared
        let maxServings;

        // if statement checks if that ingredient is even available at all
        if (available.hasOwnProperty(key)) {
            // if so, maxServings is set to the number of times we can make the recipe with what's available
            maxServings = Math.floor(available[key] / recipe[key]);
        } else return 0; // if not, we return 0, and can't make any number of the recipe

        // servings is updated to value of maxServings every time the recipe is limited by the available ingredient checked.
        if (servings > maxServings) servings = maxServings;
    }

    return servings;
}

console.log("Max servings: " + getMaxServings(recipe1, available1));

// one-liner solution
const getMaxServingsOneLiner = (recipe, available) => Math.min(...Object.entries(recipe).map(([key, value]) => available[key] / value)) || 0;

console.log("Max servings: " + getMaxServingsOneLiner(recipe1, available1));