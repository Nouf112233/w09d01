import React,{useState} from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Register from './components/Register';
import SignIn from './components/Signin';
import Tasks from './components/Tasks';
import LogOut from './components/LogOut';
import LogIn from './components/Login';
import './App.css';

function App() {
 const [token,setToken]=useState(false);


  return ( 
  <> 
 {!token ? 
 <LogIn setToken={setToken}/> :
 <Tasks />
  }
  <Routes>
  <Route exact path="/tasks" element={<Tasks token={token}/>} />
  <Route exact path="/register" element={<Register />} />
  <Route exact path="/signin" element={<SignIn setToken={setToken}/>} />
  <Route exact path="/logout" element={<LogOut setToken={setToken}/>} />
  </Routes>


  </>
  
  );
}

export default App;
