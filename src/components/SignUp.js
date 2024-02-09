import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [name, SetName] = useState("");
    const [password, SetPassword] = useState("");
    const [email, SetEmail] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/');
        }
    }, [navigate]);

    const collectData = async () => {
        let result = await fetch('http://localhost:5000/register', {
            method: 'post',
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        result = await result.json();
        console.warn(result);
        localStorage.setItem("user", JSON.stringify(result.result));
        localStorage.setItem("token", JSON.stringify(result.auth));
        navigate('/');
    };

    return (
        <div className="register">
            <h1>Register</h1>
            <input className="inputBox" type="text"
                value={name} onChange={(e) => SetName(e.target.value)} placeholder="Enter Name" />

            <input className="inputBox" type="text"
                value={email} onChange={(e) => SetEmail(e.target.value)} placeholder="Enter Email" />

            <input className="inputBox" type="password"
                value={password} onChange={(e) => SetPassword(e.target.value)} placeholder="Enter Password" />

            <button onClick={collectData} className="appButton" type="button" >Sign Up</button>
        </div>
    );
};

export default SignUp;