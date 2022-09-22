var arr = ["hey", "hello", "hi"];
arr [i]; //outputs "hey"

// This is an object being declared
var obj = {
    "flavor": "vanilla",
    "numScoops": 3, 
    "toppings": ["sprinkles", "hot fudge"]
}

// This is how you recall an object


//  DOM
//  Document Object Model

//  How to turn html element into a variable
//
//  <body></body>
//  <div id="box"></box>
//  select an element
var box = document.querySelector("#box");
box.innerText = "hello";
box.style.backgroundColor = "orange";

//  Events
//  -> triggers function
//  onclickbox -> change the color of the box