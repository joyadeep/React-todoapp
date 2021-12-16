import React, { useContext, useState } from 'react'
import { TodoContext } from '../../context/todoContext';
import "./searchbar.css";
export const Searchbar = () => {
    const {addTask,clearAll}= useContext(TodoContext);
    const [inp,setInp]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(`submited successfully : ${inp}`)
        addTask(inp);
        setInp("");
    }

    const handleClear=()=>{
        clearAll();
        // console.log("cleared all");
    }
    return (
        <>
         <div className="searchbar-container">
             <form onSubmit={handleSubmit}>
                 <input type="text" placeholder="add new task.." 
                 value={inp} onChange={(e)=>{ setInp(e.target.value) }} required />
             <div className="buttons">
             <button type='submit' className='btn-add'>Add</button>
             <button type="reset" className='btn-clear' onClick={handleClear}>Clear</button>
             </div>
             </form>
         </div>
        </>
    )
}
