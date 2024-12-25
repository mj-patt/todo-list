import React from 'react'

//use "entry" props, accessing its task's name
export const ToDoItem = ({entry, onComplete, onDelete, onEdit}) => {

    

    return (
        <div className='ToDoItem'>
            

            {/* view mode */}
            <div>
                <input
                    type="checkbox"
                    checked={entry.completed} //checkbox is checked when task is completed
                    onChange={()=>onComplete(entry.id)}
                    disabled={entry.completed} //disabled checkbox once the task is completed
                />
                <p style={{ textDecoration: entry.completed ? "line-through" : "none" }}>{entry.task}</p>
                <button className='editBtn' onClick={()=>onEdit(entry.id)}>edit</button>
                <button className='deleteBtn' onClick={()=>onDelete(entry.id)}>delete</button>

            </div>
            
        </div>
    )
}