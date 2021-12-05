import React from 'react'
import axios from 'axios';

function Task({taskAdmin, toke,setUp,up }) {

    const deletetask = async (taskId) => {
        try {
          const result = await axios.delete(
            `${process.env.REACT_APP_BASIC_URL}/taskadmin`,
            { data: { taskId } },
            { headers: { Authorization: `Bearer ${toke}` } }
          );
          setUp(!up);
        } catch (error) {
          console.log(error);
        }
      };
    return (
        <div>
           { taskAdmin.map((item) => {
          console.log("item", item);
          return (
            <div key={item._id}>
              <h1>{item.name}</h1>
              <button onClick={() => deletetask(item._id)}>delete</button>

            </div>
          )})}
            
        </div>
    )
}

export default Task
