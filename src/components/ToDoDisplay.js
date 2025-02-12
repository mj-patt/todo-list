import React, {useEffect, useState} from 'react'
import { ToDoInput } from './ToDoInput'
import { ToDoItem } from './ToDoItem'
import { ToDoEdit } from './ToDoEdit'
import { Header } from './Header'
// import {v4 as uuidv4} from 'uuid';
// uuidv4()

export const ToDoDisplay = () => {

    //save the todos in an array
    const [todos, setTodos] = useState([])

    //idCounter acts as counter to assign a number as id starting from 1
    //this will be used to preserve the order of the task before sorting
    const [idCounter, setIdCounter] = useState(1)

    //to reset id counter when to do list is empty
    useEffect(()=>{
         if(todos.length===0){
            setIdCounter(1);
        }
    }, [todos]);

    
    //add new input in the array by setting new state using te previous todos + the new entry
    //task is the input 
    const addTodo = (todo, importance)=> {
        
        setTodos([...todos, {id: idCounter, task: todo, importance, completed: false, isEditing: false}])
        setIdCounter(idCounter+1)
        
    }

    
    const completeTask=(entryId) => {
        setTodos(
            todos.map((todo) =>
            todo.id===entryId ? {...todo, completed: true} : todo
        )
        )
    }

    //use filter to delete the task that matchs the id param
    const deleteTask=(entryId)=> {
        setTodos (
            todos.filter(todo => todo.id!==entryId)
        )
    
    }

    const editTask=(entryId)=> {
        setTodos (
            todos.map((todo) => 
            todo.id===entryId ? {...todo, isEditing:true}:todo
            )              
        )
        
    }


    //update edited task and its importance level
    const saveChanges=(entry, entryId, importance)=>{

        setTodos (
            todos.map ((todo) => 
            todo.id === entryId ? {...todo, task: entry, importance: importance, isEditing:false} : todo
            )
        )

    }

    console.log(todos)

    const sortAsc=()=>{
        const sortedTasks = [...todos].sort((a,b)=>{
            return a.importance - b.importance
        })
        setTodos(sortedTasks)
    }

    const sortDesc=()=>{
        const sortedTasks = [...todos].sort((a,b)=>{
            return b.importance - a.importance
        })
        setTodos(sortedTasks)
    }

    //show the original order of the task (cancel out the sorting function)
    const sortOri=()=>{
        const sortedTasks= [...todos].sort((a,b)=>{
            return a.id - b.id
        })
        setTodos(sortedTasks)
    }

    const cleanUp=()=>{

        setTodos(todos.filter(todo => todo.completed===false))
        
    }

    //prop is named "entry"
    return (
        <div className='PageWrapper'>
        <div className='ToDoDisplay'>
            
            
            <div className='InputForm'>
            <ToDoInput addTodo={addTodo}/>
            </div>

            <div className='BtnHeader'>
            <Header 
            sortAsc={sortAsc} 
            sortDesc={sortDesc}
            sortOri={sortOri}
            cleanUp={cleanUp}
            />
            </div>

            <div className='EntryList'>
            {todos.map((todo, id) => (
                todo.isEditing ? (
                    <ToDoEdit
                    entry={todo}
                    key={id}
                    onSave={saveChanges}
                    />
                ) : (
                    <ToDoItem 
                    entry={todo} 
                    key={id}
                    onComplete={completeTask} 
                    onDelete={deleteTask}
                    onEdit={editTask}
                    
                            
                    
                    
                    />
                )
            ))}
            </div>

        
        </div>

        </div>
    )
}