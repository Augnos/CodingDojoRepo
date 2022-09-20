function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

// var p1 = pizzaOven('deep dish', 'traditional', ['mozzarella'], ['pepperoni', 'sausage']);
// console.log(p1);
// var p2 = pizzaOven('hand tossed', 'marinara', ['mozzarella', 'feta'], ['mushrooms', 'olives', 'onions']);
// console.log(p2);
// var p3 = pizzaOven('thin crust', 'white sauce', ['mozzarella'], ['mushrooms', 'bell peppers', 'onions']);
// console.log(p3);
// var p4 = pizzaOven('deep dish', 'traditional', ['mozzarella, cheddar'], ['mushrooms', 'pepporoni', 'jalapeños']);
// console.log(p4);


// random pizza generator
var crustType = [
    'deep dish',
    'hand tossed',
    'thin crust',
    'gluten-free'
];
var sauceType = [
    'traditional',
    'marinara',
    'buttery garlic',
    'alfredo'
];
var cheeses = [
    'mozzarella',
    'cheddar',
    'feta',
    '3 cheese',
    'asiago'
];
var toppings = [
    'pepperoni',
    'mushrooms',
    'onions',
    'olives',
    'bell peppers',
    'pineapple',
    'ham',
];
function randomPizza() {
    console.log("Your crust: " + crustType[Math.floor((Math.random() * crustType.length))]);
    console.log("Your sauce: " + sauceType[Math.floor((Math.random() * sauceType.length))]);

    console.log("Your cheeses: ");
    for (i = Math.floor(Math.random() * cheeses.length + 1); i > 0; i--) {
        console.log(cheeses[Math.floor((Math.random() * cheeses.length))]);
    }
    console.log("Your toppings: ");
    for (i = Math.floor(Math.random() * toppings.length + 1); i > 0; i--) {
        console.log(toppings[Math.floor((Math.random() * toppings.length))]);
    }
}
randomPizza();
