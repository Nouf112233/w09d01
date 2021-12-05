import React,{useEffect, useState} from 'react'
import axios from 'axios'
import './style.css'

const Tasks = ({token}) => {
    const [taskUser,setTaskUser]=useState([]);
    // const [taskAdmin,setTaskAdmin]=useState([]);
    const [up,setUp]=useState(false);
    const [toke,setToke]=useState("");

    useEffect(() => {
        
        const tok=localStorage.getItem("Token");
        getTasks(tok);
        setToke(tok);
        // console.log("tok",tok);
        // getTasksAdmin(tok);     
        
    },[])

    const getTasks=async(tok)=>{
       try{
        const tasks=await axios.get(`${process.env.REACT_APP_BASIC_URL}/tasks`, {headers:{Authorization:`Bearer ${toke}`}})
        console.log("tasks",tasks.data);
        setTaskUser(tasks.data);
        // setRole("user");
       }catch(error) {
           console.log(error);
       }
    }
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

    const deletetask=(_id)=>{
        axios.delete(`${process.env.REACT_APP_BASIC_URL}/task`,{taskId:_id}, {headers:{Authorization:`Bearer ${tok}`}})
        setUp(!up);
    }

    return (
        <div>
           
           { taskUser.length &&
           taskUser.map(item=>{
               console.log("item",item)
               return <div>
                   <h1>{item.name}</h1>
                   <button onClick={()=>deletetask(item._id)}>delete</button>
                   <button onClick={()=>updatetask(item._id)}>update</button>
                   </div>
               
      

           })
           
           }
          
        </div>
    )
}

export default Tasks
