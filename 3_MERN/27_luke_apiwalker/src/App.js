import { useState } from 'react';
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

import Planets from './components/Planets';
import People from './components/People';
import Home from './components/Home';


function App() {
    const [category, setCategory] = useState("people");
    const [id, setId] = useState("1");
    const navigate = useNavigate();

    const formHandler = e => {
        e.preventDefault();

        navigate(`/${category}/${id}`);
    }


    return (
        <div className="container-fluid vh-100 text-light bg-dark pt-3">
            <Link to="/" className='text-center text-decoration-none' style={{ color: "turquoise" }} ><h1 className='fw-lighter'>Luke APIwalker</h1></Link>

            <form className="row justify-content-center mt-3" onSubmit={formHandler}>

                <div className="col-auto">
                    <label className="col-form-label">Search for:</label>
                </div>
                <div className="col-auto">
                    <select className="form-select" onChange={e => setCategory(e.target.value)}>
                        <option value={"people"}>People</option>
                        <option value={"planets"}>Planets</option>
                    </select>
                </div>

                <div className="col-auto">
                    <label className="col-form-label">ID:</label>
                </div>
                <div className="col-auto">
                    <input value={id} onChange={e => setId(e.target.value)} type="number" id="category" className="form-control" />
                </div>

                <div className="col-auto">
                    <button type="submit" className="btn btn-primary" >Go</button>
                </div>

            </form>

            <div className="row justify-content-center mt-3">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/planets/:id" element={<Planets />} />
                    <Route path="/people/:id" element={<People />} />
                </Routes>
            </div>

        </div>
    );
}

export default App;