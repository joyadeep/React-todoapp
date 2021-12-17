import React, { useContext } from 'react'
import "./todolist.css";
import { TodoContext } from '../../context/todoContext'
import { Listrow } from '../listrow/Listrow';
import { Searchbar } from '../searchbar/Searchbar';

export const Todolist = () => {
    const {list,removeTask}=useContext(TodoContext);
    
    return(
        <div className="todolist-container">
          
          <div className="todolist-content">
              <h1 style={{color:"black"}}>Todo</h1>

              <Searchbar/>

                {!list.length?<div className='empty-list'>Wohoo ! No task available</div>:<>
                {
                    list.map((item)=>{
                        return(
                                <Listrow item={item}  key={item.id}/>
                          )
                    })
                }
                </>
                }
              
          </div>

          
        </div>
    )
}
