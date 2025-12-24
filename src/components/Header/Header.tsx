import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom"
import './Header.css' 

export default function Header(props) {
    console.log("header props:", props)
    const navigate = useNavigate()
    const [modal, setModal] = useState(false)

    const logout = () => {
        setModal(!modal)
        props.setUserId(0);
        props.setUsername("");
        props.setToken("");
        props.setEmail("");
        window.sessionStorage.removeItem("token");
        window.sessionStorage.removeItem("userId");
        window.sessionStorage.removeItem("UserData");
        navigate("/");
        window.location.reload(false);
    };

    const ID = window.sessionStorage.getItem("userId");

    return (
        <>
            {!ID ?
            <header className='main-header'>
                <Link to="/" className="link-main"> 
                    <h1>Aequor Luna</h1> 
                </Link>

                <div className="links-header">
                    <Link to='/blog' className="link-header">blog</Link>
                    <Link to='/art' className="link-header">art</Link>
                </div>
            </header>

            :
            <header className='main-header'>
                <Link to="/" className="link-main"> 
                    <h1>Aequor Luna</h1> 
                </Link>

                <div className="links-header">
                    <Link to='/blog' className="link-header">blog</Link>
                    <Link to='/art' className="link-header">art</Link>
                    <Link to='/' className="link-header">log out</Link>
                </div>
            </header>
            }
        </>
    )
};
