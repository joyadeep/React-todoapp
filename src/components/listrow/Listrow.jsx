import React, { useContext } from 'react'
import {FiEdit,FiDelete} from 'react-icons/fi';
import { TodoContext } from '../../context/todoContext';
import "./listrow.css";

export const Listrow = ({item}) => {
    
    const {removeTask,findTask}=useContext(TodoContext);
    const handleDelete=()=>{
        removeTask(item.id);
        }

    const handleEdit=()=>{
        findTask(item.id);
    }


    return (
        <>
          <div className="listrow-container">
              <div className="task">{item.task}</div>
              <div className="options">
                  <div className="edit" onClick={handleEdit}> <FiEdit/> </div>
                  <div className="delete" onClick={handleDelete}><FiDelete/></div>
                 </div>
          </div>
        </>
    )
}
