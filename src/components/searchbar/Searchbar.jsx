import React, { useContext, useEffect, useState } from 'react'
import { TodoContext } from '../../context/todoContext';
import "./searchbar.css";
export const Searchbar = () => {
    const {addTask,clearAll,edit,editTask}= useContext(TodoContext);
    const [inp,setInp]=useState("");

    
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!edit)
        {
            addTask(inp);
            setInp("");
        }
        else{
            editTask(inp,edit.id);
        }
        }
    
    const handleClear=()=>{
        clearAll();
    }

    useEffect(()=>{
        if(edit)
        {
            setInp(edit.task);
          }
        else
        setInp("");
    },[edit])


    return (
        <>
         <div className="searchbar-container">
             <form onSubmit={handleSubmit}>
                 <input type="text" placeholder="add new task.." 
                 value={inp} onChange={(e)=>{ setInp(e.target.value) }} required />
             <div className="buttons">
             <button type='submit' className='btn-add'> {edit?"Edit":"Add"} </button>
             <button type="reset" className='btn-clear' onClick={handleClear}>Clear</button>
             </div>
             </form>
         </div>
        </>
    )
}
