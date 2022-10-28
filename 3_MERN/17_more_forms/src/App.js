import React, { useState } from 'react';
import './App.css';

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confPassword };
        console.log("Welcome", newUser);
        setHasBeenSubmitted(true);
    };

    const formMessage = () => {
        if (hasBeenSubmitted) {
            return "Thank you for submitting the form!";
        } else {
            return "Welcome, please submit teh form";
        }
    };

    const firstMessage = () => {
        if (firstName !== "" && firstName.length < 2) {
            return "First name must be at least 2 characters";
        }
    }

    const lastMessage = () => {
        if (lastName !== "" && lastName.length < 2) {
            return "Last name must be at least 2 characters";
        }
    }

    const emailMessage = () => {
        if (email !== "" && email.length < 2) {
            return "email must be at least 2 characters";
        }
    }

    const passwordMessage = () => {
        if (password !== "" && password.length < 8) {
            return "Password must be at least 8 characters";
        }
    }

    const passwordMatch = () => {
        if (confPassword !== "" && password !== confPassword) {
            return "Passwords must match";
        }
    }


    return (
        <>
            <form onSubmit={createUser}>
                <h3> {formMessage()}</h3>
                <div>
                    <label>First Name </label>
                    <input type="text" onChange={(e) => setFirstName(e.target.value)} />
                    <p>{firstMessage()}</p>
                </div>
                <div>
                    <label>Last Name </label>
                    <input type="text" onChange={(e) => setLastName(e.target.value)} />
                    <p>{lastMessage()}</p>
                </div>
                <div>
                    <label>Email </label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} />
                    <p>{emailMessage()}</p>
                </div>
                <div>
                    <label>Password </label>
                    <input type="text" onChange={(e) => setPassword(e.target.value)} />
                    <p>{passwordMessage()}</p>
                </div>
                <div>
                    <label>Confirm Password </label>
                    <input type="text" onChange={(e) => setConfPassword(e.target.value)} />
                    <p>{passwordMatch()}</p>
                </div>
                <input type="submit" value="Create User" />
            </form>

        </>
    );
};

export default UserForm;