import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";

const Tasks = ({ token }) => {
  const [taskUser, setTaskUser] = useState([]);
  // const [taskAdmin,setTaskAdmin]=useState([]);
  const [up, setUp] = useState(false);
  const [toke, setToke] = useState("");
  const [taskName, setTaskname] = useState("");

  useEffect(() => {
    const tok = localStorage.getItem("Token");
    getTasks(tok);
    setToke(tok);
    // console.log("tok",tok);
    // getTasksAdmin(tok);
  }, [up]);

  const getTasks = async (tok) => {
    try {
      const tasks = await axios.get(
        `${process.env.REACT_APP_BASIC_URL}/tasks`,
        { headers: { Authorization: `Bearer ${tok}` } }
      );
    //   console.log("tasks", tasks.data);
      setTaskUser(tasks.data);
      // setRole("user");
    } catch (error) {
      console.log(error);
    }
  };
  // const getTasksAdmin=async(tok)=>{
  //     try{
  //      const tasks=await axios.get(`${process.env.REACT_APP_BASIC_URL}/alltasks`, {headers:{Authorization:`Bearer ${tok}`}})
  //      console.log("tasksadmin",tasks.data);
  //      setTaskAdmin(tasks.data);
  //      setRole("admin");
  //     }catch(error) {
  //         console.log(error);
  //     }
  //  }

  const deletetask = async(taskId) => {
     
     try{
         const result=await axios.delete(
        `${process.env.REACT_APP_BASIC_URL}/task`,
        {data:{taskId}},
        { headers: { Authorization: `Bearer ${toke}` } }
      );
    setUp(!up);
     }catch(error){
        console.log(error);
     }

}

  const updatetask = (_id) => {
      if(taskName.length>0){
    axios.put(
      `${process.env.REACT_APP_BASIC_URL}/task`,
      { taskId: _id,taskName:taskName },
      { headers: { Authorization: `Bearer ${toke}` } }
    );
      }
    setTaskname("");
    setUp(!up);
  };

  return (
    <div>
      {taskUser.length &&
        taskUser.map((item) => {
          console.log("item", item);
          return (
            <div>
              <h1>{item.name}</h1>
              <button onClick={() => deletetask(item._id)}>delete</button>
              <input
                type="text"
                value={taskName}
                onChange={(e) => {
                  setTaskname(e.target.value);
                }}
              />
              <button onClick={() => updatetask(item._id)}>update</button>
            </div>
          );
        })}
    </div>
  );
};

export default Tasks;
