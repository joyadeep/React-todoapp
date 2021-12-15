import React, { useContext } from 'react'
import "./todolist.css";
import { TodoContext } from '../../context/todoContext'
import { Listrow } from '../listrow/Listrow';

export const Todolist = () => {
    const todo=useContext(TodoContext);
    console.log(todo.list);
    return (
        <div className="todolist-container">
            <h1>Todo list</h1>
          {
              todo.list.map((item)=>{
                  return(
                      <div className="item" style={{marginBottom:"5px",textAlign:"left"}} key={item.id}>
                          {/* {item.task} */}
                          <Listrow item={item} />
                      </div>
                  )
              })
          }
        </div>
    )
}
