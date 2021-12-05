import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Register from "./components/Register";
import SignIn from "./components/Signin";
import Tasks from "./components/Tasks";
import LogOut from "./components/LogOut";
import LogIn from "./components/Login";
import Task from "./components/Task";
import axios from "axios";
import "./App.css";

function App() {
  const [token, setToken] = useState(false);
  const [taskUser, setTaskUser] = useState([]);
  const [taskAdmin, setTaskAdmin] = useState([]);
  const [up, setUp] = useState(false);
  const [toke, setToke] = useState("");
 

  // get all task if user is admin
  const getTasksAdmin = async (toke) => {
    try {
      const tasks = await axios.get(
        `${process.env.REACT_APP_BASIC_URL}/alltasks`,
        { headers: { Authorization: `Bearer ${toke}` } }
      );
      console.log("tasksadmin", tasks.data);
      setTaskAdmin(tasks.data);

    } catch (error) {
       // if error and user is not admin get task for user
      const getTasks = async (toke) => {
        try {
          const tasks = await axios.get(
            `${process.env.REACT_APP_BASIC_URL}/tasks`,
            { headers: { Authorization: `Bearer ${toke}` } }
          );
          //   console.log("tasks", tasks.data);
          setTaskUser(tasks.data);
          // setRole("user");

        } catch (error) {
          console.log(error);
        }
      };
    }
  };

  const getToken=()=>{
    const tok = localStorage.getItem("Token");
    setToke(tok);
  }

  useEffect(() => {
    getToken();
    getTasksAdmin(toke);
  }, [up]);

  return (
    <>
      {!token ? (
        <LogIn setToken={setToken} />
      ) : taskUser.length ? (
        <Tasks toke={toke} setUp={setUp} up={up} taskUser={taskUser} />
      ) : (
        <Task toke={toke} setUp={setUp} up={up} taskAdmin={taskAdmin} />
      )}
      <Routes>
        <Route exact path="/tasks" element={<Tasks token={token} />} />
        <Route exact path="/task" element={<Task token={token} />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/signin" element={<SignIn setToken={setToken} />} />
        <Route exact path="/logout" element={<LogOut setToken={setToken} />} />
      </Routes>
    </>
  );
}

export default App;
