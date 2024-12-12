import React from 'react'

//use "entry" props, accessing its task's name
export const ToDoItem = ({entry}) => {
    return (
        <div className='ToDoItem'>
            <p>{entry.task}</p>
        </div>
    )
}