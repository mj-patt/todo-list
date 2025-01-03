import React, {useState} from 'react'

export const ToDoInput = ({addTodo}) => {

    const [value, setValue] = useState(""); //useState for the task text
    const [importance, setImportance] = useState("");


    const handleSubmit = (event) => {
        event.preventDefault();
        addTodo(value, importance);
        setValue("");
        setImportance("");
    }


    //set value as what is typed on the input form -> task as text
    const handleTextChange = (event) => {
        setValue(event.target.value);
    }

    //set the importance level of the task
    const handleImportanceChange = (event) => {
        setImportance(event.target.value);
    }
   

    return (
        <div>
            <h1>TODO</h1>
            <form className='ToDoInput' onSubmit={handleSubmit}>
                <input type="text" className='todo-input' placeholder='What does need to be done?' value={value} onChange={handleTextChange}/>
                
                <div>
                    <label>
                        <input
                            type ="radio"
                            value="3"
                            checked={importance === "3"}
                            onChange={handleImportanceChange}
                        />
                        Super Important
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="2"
                            checked={importance === "2"}
                            onChange={handleImportanceChange}
                            
                        />
                        Important
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="1"
                            checked={importance==="1"}
                            onChange={handleImportanceChange}
                        />
                        Less Important
                    </label>
                </div>
                
                <button type="submit" className='submitBtn'>+</button>
            </form>
       </div>
    )
}