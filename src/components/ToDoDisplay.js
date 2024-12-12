import React, {useState} from 'react'
import { ToDoInput } from './ToDoInput'
import { ToDoItem } from './ToDoItem'
import {v4 as uuidv4} from 'uuid';
uuidv4()

export const ToDoDisplay = () => {

    //save the todos in an array
    const [todos, setTodos] = useState([])

    //add new input in the array by setting new state using te previous todos + the new entry
    //task is the input
    //default importance level is less important
    const addTodo = todo => {
        setTodos([...todos, {id: uuidv4(), task: todo, superImp: false, important: false, lessImp: true, completed: false, isEditing: false}])
    }

    //prop is named "entry"
    return (
        <div className='ToDoDisplay'>
            <ToDoInput addTodo={addTodo}/>
            
            {todos.map((todo, index) => (
                <ToDoItem entry={todo} key={index} />
            ))}
        </div>
    )
}