import React, { useState } from 'react'
import {useNavigate,useParams} from 'react-router-dom'
import axios from 'axios';
import './style.css'

const SignIn = ({setToken}) => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate = useNavigate();

    const signin=async()=>{
        const user=await axios.post(`${process.env.REACT_APP_BASIC_URL}/login`, {email:email,password:password})
        localStorage.setItem("Token",user.data.token);
        setToken(true);
        navigate(`/tasks`);
    }
    return (
        <div>
            <input placeholder="email" type="email" onChange={(e)=>setEmail(e.target.value)} required/><br/>
            <input placeholder="password" type="password" onChange={(e)=>setPassword(e.target.value)}required/><br/>
            <button onClick={signin}>signin</button>
            
        </div>
    )
}

export default SignIn
