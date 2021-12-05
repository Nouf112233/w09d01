import React, { useState } from 'react'
import {useNavigate,useParams} from 'react-router-dom'
import axios from 'axios';
import './style.css'

const Register = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [role,setRole]=useState("");
    const navigate = useNavigate();

    const register=()=>{
        axios.post(`${process.env.REACT_APP_BASIC_URL}/register`, {email:email,password:password,role:role})
        navigate(`/login`);
    }

    return (
        <div>
            <input placeholder="email" type="email" onChange={(e)=>setEmail(e.target.value)} required/><br/>
            <input placeholder="password" type="password" onChange={(e)=>setPassword(e.target.value)}required/><br/>
            <input type="radio" id="user" name="role" value="user" onChange={()=>setRole("61a611491b5718ea5ec72245")}/>
            <label for="user">user</label><br/>
            <input type="radio" id="admin" name="role" value="admin" onChange={()=>setRole("61a611731b5718ea5ec72247")}/>
            <label for="admin">admin</label><br/>
            <button onClick={register}>register</button>

            
        </div>
    )
}

export default Register
