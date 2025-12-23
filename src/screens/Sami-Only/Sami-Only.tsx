import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import API from '../../utils/API';
import './Sami-Only.css'

function Sami(props) {
    // console.log("Log In:", props)

    const navigate = useNavigate();
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleChange = e => {
        if (e.target.name === "username") {
            setUsername(e.target.value)
        } else if (e.target.name === "password") {
            setPassword(e.target.value)
        }
    };

    const submitHandler = e => {
        e.preventDefault()

        API.login({
            username: username,
            password: password
        })
            .then(data => {
                // console.log('login data:',data)
                props.setUserId(data.user.id)
                props.setEmail(data.user.email)
                props.setFullName(data.user.fullName)
                props.setUsername(data.user.username)
                props.setToken(data.token)
                // window.sessionStorage.setItem("token", data.token)
                window.sessionStorage.setItem("userId", data.user.id);
                navigate("/")
                // window.location.reload(false);
            }).catch(err => {
                console.log(err)
                alert("Unable to Sign Up")
            })
    }

    return (
        <>
            <main className='main-form-li'>
                <section>
                    <h1>Welcome Sami :^)</h1>
                    <form className='login-form' onSubmit={submitHandler}>
                        <input id='si-user' name='username' placeholder='username' value={username} onChange={handleChange}></input>
                        <input id='si-pass' name='password' type='password' placeholder='password' value={password} onChange={handleChange}></input>
                        <button id='si-submit'>Log In</button>
                    </form>
                </section>
            </main>
        </>
    );
};

export default Sami 
