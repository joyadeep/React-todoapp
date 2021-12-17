import  { createContext, useState } from 'react';

export const TodoContext=createContext();

const TodoContextProvider=(props)=>{

const [list,setList]=useState([]);
const [edit,setEdit]=useState(null);

const addTask=(task)=>{
    setList([...list,{task,id:Math.floor(Math.random()*1000)}]);
  }

const clearAll=()=>{
    setList([]);
}

const removeTask=(id)=>{
    setList(list.filter(task=>task.id !== id));
}

const findTask=(id)=>{
    const foundtask=list.find(task=>task.id===id);
    setEdit(foundtask);
   }

const editTask=(task,id)=>{
   const newList=list.map(tlist=>tlist.id===id?{task,id}:tlist);
    setList(newList);
   setEdit(null);

}

return(
        <TodoContext.Provider value={{list,addTask,clearAll,removeTask,edit,findTask,editTask}} >
            {props.children}
        </TodoContext.Provider>
    )

}

export default TodoContextProvider;