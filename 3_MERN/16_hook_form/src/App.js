import React, { useState } from 'react';

const UserForm = (props) => {
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confpassword, setConfPassword] = useState("");
    

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { first, last, email, password, confpassword };
        console.log("Welcome", newUser);
    };

    const formData = props => {
        const [state, setState] = useState({
            first: props.first
        })
    }

    return (
        <>
        <form onSubmit={createUser} className="mx-auto form">
            <div>
                <label>First Name </label>
                <input type="text" onChange={(e) => setFirst(e.target.value)} />
            </div>
            <div>
                <label>Last Name </label>
                <input type="text" onChange={(e) => setLast(e.target.value)} />
            </div>
            <div>
                <label>Email </label>
                <input type="text" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Password </label>
                <input type="text" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>
                <label>Confirm Password </label>
                <input type="text" onChange={(e) => setConfPassword(e.target.value)} />
            </div>
            <input type="submit" value="Create User" />
        </form>
        <div>
        Your Form Data
        <table>
            <tr>
                <th>First Name</th>
                <td>{first}</td>
            </tr>
            <tr>
                <th>Last Name</th>
                <td>{last}</td>
            </tr>
            <tr>
                <th>Email</th>
                <td>{email}</td>
            </tr>
            <tr>
                <th>Password</th>
                <td>{password}</td>
            </tr>
            <tr>
                <th>Confirm Password</th>
                <td>{confpassword}</td>
            </tr>
        </table>
        </div>




        </>
    );
};

export default UserForm;