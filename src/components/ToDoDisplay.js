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
    const addTodo = (todo, importance)=> {
        setTodos([...todos, {id: uuidv4(), task: todo, importance, completed: false, isEditing: false}])
    }

    console.log(todos)

    const completeTask=(entryId) => {
        setTodos(
            todos.map((todo) =>
            todo.id===entryId ? {...todo, completed: true} : todo
        )
        )
    }

    //prop is named "entry"
    return (
        <div className='ToDoDisplay'>
            <ToDoInput addTodo={addTodo}/>
            
            {todos.map((todo, id) => (
                <ToDoItem 
                entry={todo} 
                key={id}
                onComplete={completeTask} />
            ))}
        </div>
    )
}