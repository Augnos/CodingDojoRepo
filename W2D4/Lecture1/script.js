var pokeInput = document.querySelector("#pokeInput");

function fetchPokemon(event) {
    event.preventDefault();
    console.log("fetching...");

    var name = pokeInput.value.toLowerCase();

    // var response = fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
    // console.log(response);

    //PROMISES: pending, fulfilled, rejected
    fetch("https://pokeapi.co/api/v2/pokemon/" + name)
        .then(res => res.json())
        .then(res => {
            //response is here! do what you want!
            console.log("got a response!");
            console.log(res.sprites.front_default);

            document.querySelector("#pokeImg").src = res.sprites.front_default;
        })
        .catch(err => {
            alert("the api call didn't work!");
            console.log(err.response);
        })
}

async function otherFunc() {
    var response = await fetch("https://pokeapi.co/api/v2/pokemon/bidoof")
    response = await response.json();
    console.log(response);
}