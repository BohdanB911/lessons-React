import React from "react";
import '../ToDoListDone/ToDoListDone.css'


const ToDoListDone = (props)=>{
    const {doneElem, handleDelete,handleReset} = props;
console.log(doneElem)
return(
 
    <div className="doneList">
        <div >
        {doneElem.map((item) => (
           <div className="doneList-item" key={`${item.task}-${item.date}-${item.id}`}>
                <p className="list_text">{item.task}</p>
                <button className="delete" onClick={(e) => handleDelete(e,item)}>
                X
                </button>
                <p>https://sharing.clickup.com/t/h/1uwwwwy/FBLBJ1X3WKDW8S7</p>
           </div>
         ))}
     </div>
     <button className="reset_btn" onClick={(e) => handleReset(e)}>
         RESET
     </button>
    </div>
  
)


}

export default ToDoListDone;