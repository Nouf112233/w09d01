import React,{useState} from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Register from './components/Register';
import SignIn from './components/Signin';
import Tasks from './components/Tasks';
import LogOut from './components/LogOut';
import './App.css';

function App() {
 const [token,setToken]=useState("");


  return ( 
  <> 
  <Register />
  <Routes>
  <Route exact path="/" element={<Tasks />} />
  <Route exact path="/register" element={<Register />} />
  <Route exact path="/signin" element={<SignIn />} />
  <Route exact path="/logout" element={<LogOut />} />
  </Routes>


  </>
  
  );
}

export default App;
