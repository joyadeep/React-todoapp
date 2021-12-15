import React from 'react'
import {FiEdit,FiDelete} from 'react-icons/fi';
// import {MdOutlineDeleteOutline} from 'react-icons/md'
import "./listrow.css";
export const Listrow = ({item}) => {
    return (
        <>
          <div className="listrow-container">
              <div className="task">{item.task}</div>
              <div className="options">
                  <div className="edit"> <FiEdit/> </div>
                  <div className="delete"><FiDelete/></div>
                  
                  {/* <MdOutlineDeleteOutline/> */}
              </div>
          </div>
        </>
    )
}
