import react, { createContext, useState } from 'react';

export const TodoContext=createContext();

const TodoContextProvider=(props)=>{

const [list,setList]=useState([{task:"plant trees",id:1},{task:"buy vegetables",id:2},{task:"visit office",id:3}]);

const addTask=(task)=>{
    setList([...list,{task,id:Math.floor(Math.random()*100)}]);
    console.log("task added successfully")
}

const clearAll=()=>{
    setList([]);
}

return(
        <TodoContext.Provider value={{list,addTask,clearAll}} >
            {props.children}
        </TodoContext.Provider>
    )

}

export default TodoContextProvider;