import React from 'react'

//use "entry" props, accessing its task's name
export const ToDoItem = ({entry, onComplete}) => {
    return (
        <div className='ToDoItem'>
            <input
                type="checkbox"
                checked={entry.completed} //checkbox is checked when task is completed
                onChange={()=>onComplete(entry.id)}
                disabled={entry.completed} //disabled checkbox once the task is completed
            />
            <p style={{ textDecoration: entry.completed ? "line-through" : "none" }}>{entry.task}</p>
        </div>
    )
}