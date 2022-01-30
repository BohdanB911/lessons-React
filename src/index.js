import React from 'react';
import { useState } from 'react';
import '../src/style.css'
import ReactDom from 'react-dom';
import AppHeader from './components/Header/app-header';
import TodoList from './components/ToDoList/ToDoList';
import SearchPanel from './components/Search-panel/search-panel';
import ToDoListDone from './components/ToDoListDone/ToDoListDone';

const App = ()=>{

  const [toDo,setToDo] = useState([]);
  const [done,setDone] = useState([]);

  const handleAdd = (e) => {
     e.preventDefault();
     if(e.target.task.value.length >0){
      setToDo([...toDo,{
        'id': toDo.length+1,
        "task":e.target.task.value,
        "data": new Date(),
        "status": 'todo'
      }]);
     }
     e.target.reset()
  };
  
const handlerMove = (e,item)=>{
    e.preventDefault();
    
    console.log(item)
    setDone([...done,item]); 
    toDo.splice(toDo.indexOf(item),1);
    console.log(done)
};
const handlerDelete = (e,item) =>{
  e.preventDefault();
  setToDo(toDo.filter(elem => elem.id !== item.id));
  setDone(done.filter(elem => elem.id !== item.id));
  console.log(item)
};
const handleReset = (e) => {
   e.preventDefault();
   setDone(done.splice(0,-1))
}

  return(
    <div>
      <AppHeader/>
      <SearchPanel
          handler={handleAdd}
      />
      <div className='to-do_wrap'>
      <TodoList
          yourTask={toDo}
          handleMove={handlerMove}
          handleDelete={handlerDelete}
      />
      <ToDoListDone
          doneElem={done}
          handleDelete={handlerDelete}
          handleReset={handleReset}
      />
      </div>
    </div>
  )
}


ReactDom.render( <App/>,document.getElementById('root'));
