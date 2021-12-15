import react, { createContext, useState } from 'react';

export const TodoContext=createContext();

const TodoContextProvider=(props)=>{

const [list,setList]=useState([{task:"plant trees",id:1},{task:"buy vegetables",id:2},{task:"visit office",id:3}]);
    return(
        <TodoContext.Provider value={{list,setList}} >
            {props.children}
        </TodoContext.Provider>
    )

}

export default TodoContextProvider;