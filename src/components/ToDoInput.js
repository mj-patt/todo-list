import React, {useState} from 'react'

export const ToDoInput = ({addTodo}) => {
    const [value, setValue] = useState("")


    const handleSubmit = (event) => {
        event.preventDefault();
        addTodo(value);
        setValue("")
    }


    //set value as what is typed on the input form
    const handleChange = (event) => {
        let value = event.target.value;
        setValue(value)
        console.log(value)
    }
   

    return (
        <div>
            <h1>TODO</h1>
            <form className='ToDoInput' onSubmit={handleSubmit}>
                <input type="text" className='todo-input' placeholder='What does need to be done?' value={value} onChange={handleChange}/>
                <button type="submit" className='submitBtn'>+</button>
            </form>
       </div>
    )
}