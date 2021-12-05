import React from 'react'
import {  Link } from "react-router-dom";
import './style.css'

function LogIn() {
    return (
        <div>
            <Link to="/register">Register</Link>
            <Link to="/signin">SignIn</Link>
        </div>
    )
}

export default LogIn
