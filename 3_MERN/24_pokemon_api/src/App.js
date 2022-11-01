import "../node_modules/bootstrap/dist/css/bootstrap.css"
import { useState } from "react";

function App() {
    const [pokemon, setPokemon] = useState([]);

    const clickHandler = () => {

        fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1154")
            .then(response => { return response.json() })
            .then(response => {
                console.log(response);
                setPokemon(response.results);
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="App container justify-content-center mx-auto" onClick={clickHandler}>
            <div className="row">
                <button className="col-auto my-3 btn btn-primary mx-auto" onClick={clickHandler}>Fetch Pokémon!</button>
            </div>
            <div className="row justify-content-between">
                {
                    pokemon.map((element, i) => {
                        return <div key={i} className="col-lg-2 col-auto">{i+1}. {element.name}</div>
                    })
                }
            </div>
        </div>
    );
}

export default App;
