import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';

const People = () => {
    const [person, setPerson] = useState(
        {
            name: "",
            height: "",
            mass: "",
            hair_color: "",
            skin_color: "",
        }
    );

    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(response => {
                console.log(response);
                setPerson(response.data)
            })
            .catch(err => console.log(err))
    }, [id]
    );


    return (
        <div className="text-light col-auto mx-auto">
            <h2 className="text-center">{person.name}</h2>
            <table className="table text-light col-auto border border-light">
                <tbody>
                    <tr>
                        <th scope="row">Height:</th>
                        <td>{person.height} cm</td>
                    </tr>
                    <tr>
                        <th scope="row">Mass:</th>
                        <td>{person.mass} kg</td>
                    </tr>
                    <tr>
                        <th scope="row">Hair Color:</th>
                        <td>{person.hair_color}</td>
                    </tr>
                    <tr>
                        <th scope="row">Skin Color:</th>
                        <td>{person.skin_color}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default People;