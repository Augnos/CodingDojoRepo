import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Planets = () => {
    const [planet, setPlanet] = useState(
        {
            name: "",
            climate: "",
            terrain: "",
            surface_water: "",
            population: "",
        }
    );

    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then(response => {
                console.log(response);
                setPlanet(response.data)
            })
            .catch(err => console.log(err))
    }, [id]
    );


    return (
        <div className="text-light col-auto mx-auto">
            <h2 className="text-center">{planet.name}</h2>
            <table className="table text-light col-auto border border-light">
                <tbody>
                    <tr>
                        <th scope="row">Climate:</th>
                        <td>{planet.climate}</td>
                    </tr>
                    <tr>
                        <th scope="row">Terrain:</th>
                        <td>{planet.terrain}</td>
                    </tr>
                    <tr>
                        <th scope="row">Surface Water:</th>
                        <td>{planet.surface_water}%</td>
                    </tr>
                    <tr>
                        <th scope="row">Population:</th>
                        <td>{planet.population.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Planets;