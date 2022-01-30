import React from "react";

import '../ToDoList/ToDoList.css'

const TodoList =(props) => {

  const {yourTask,handleMove,handleDelete} = props;
  console.log(yourTask)
  return (
    
       <div className="todo_list">
       {yourTask.map((item) => (
        <div className="item" key={`${item.task}-${item.date}-${item.id}`}>
          <div className="list_text">
          <p>{item.task}</p>
          </div>
           <div>
           <button className="move" onClick={(e) => handleMove(e,item)}>
             DONE
           </button>
            <button className="delete" onClick={(e) => handleDelete(e,item)}>
             X
            </button>
           </div>
        </div>
         ))}
       </div>
 
   )
  
}

export default TodoList;