import React from 'react'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
//use "entry" props, accessing its task's name
export const ToDoItem = ({entry, onComplete, onDelete, onEdit}) => {

    const colorAssignment = {
        3:'#6F4376',
        2:'#CDACD9',
        1:'#EED6E3'  
    }
    

    return (
        <div className='ToDoItem'>
            

            {/* view mode */}
            <div className="SingleItem" style={{
            backgroundColor: colorAssignment[entry.importance]}} 
            >
                <label className='CheckboxLabel'>
                <input
                    type="checkbox"
                    checked={entry.completed} //checkbox is checked when task is completed
                    onChange={()=>onComplete(entry.id)}
                    disabled={entry.completed} //disabled checkbox once the task is completed
                    className="DoneBtn"
                />
                <span className="CustomCheckbox"></span>
                </label>
                <p className="ToDoText" style={{ textDecoration: entry.completed ? "line-through" : "none" }}>{entry.task}</p>
                <div className='BtnDuo'>
                    <button className='EditBtn' onClick={()=>onEdit(entry.id)} style={{display: entry.completed ? "none" : "absolute"}}><FontAwesomeIcon icon={faPen}/></button>
                    <button className='DeleteBtn' onClick={()=>onDelete(entry.id)}><FontAwesomeIcon icon={faTrash}/></button>
                </div>

            </div>
            
        </div>
    )
}