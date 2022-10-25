/* // GIVEN
console.log(example);
var example = "I'm the example!";
// AFTER HOISTING BY THE INTERPRETER
// var example;
// console.log(example); // logs undefined
// example = "I'm the example!"; 
*/


/* // #1
console.log(hello);
var hello = 'world';
// AFTER HOISTING BY THE INTERPRETER
// var hello;
// console.log(hello) // logs undefinded
// hello = 'world'; 
*/


/* // #2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// AFTER HOISTING BY THE INTERPRETER
// var needle = 'haystack';
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }
// test();  // console.logs "magnet"
 */


/* // #3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// AFTER HOISTING BY THE INTERPRETER
// var brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);    // console.logs "super cool". VFunction is never called
 */


/* // #4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// AFTER HOISTING BY THE INTERPRETER
// var food = 'chicken';
// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }
// console.log(food);   // console.logs "chicken"
// eat();               // console.logs "half-chicken"
 */


/* // #5
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// AFTER HOISTING BY THE INTERPRETER
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// mean();      // error: mean isn't a function
 */


/* // #6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// AFTER HOISTING BY THE INTERPRETER
// var genre = "disco";
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);  // console.logs "undefined", logged before variable was defined, but after declared
// rewind();            // console.logs "rock", "r&b"
// console.log(genre);  // console.logs "disco"
 */


/* // #7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// AFTER HOISTING BY THE INTERPRETER
// function learn() {
//     var dojo = "burbank";    // hoists var dojo = "burbank"
//     dojo = "seattle";        // dojo is redefined as "seattle"
//     console.log(dojo);       // "seattle"
//     var dojo = "burbank";    // dojo is re-redefined as "burbank"
//     console.log(dojo);       // "burbank"
// }
// dojo = "san jose";
// console.log(dojo);   // "san jose"
// learn();             // "seattle", "burbank"
// console.log(dojo);   // "san jose"
 */



// #8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
// AFTER HOISTING BY THE INTERPRETER
// function makeDojo(name, students){
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){
//         dojo = "closed for now";
//     }
//     return dojo;
// }
// console.log(makeDojo("Chicago", 65));    // error: constants can't be changed