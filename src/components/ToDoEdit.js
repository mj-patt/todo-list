import React, {useState} from 'react'

export const ToDoEdit = ({entry, onSave}) => {

    const [value, setValue] = useState(entry.task); //useState for the task text
    const [importance, setImportance] = useState(entry.importance);


    const handleSubmit = (event) => {
        event.preventDefault();
        onSave(value, entry.id, importance);

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
            <form className='ToDoEdit' onSubmit={handleSubmit}>
                <input type="text" className='todo-input' value={value} onChange={handleTextChange}/>
                
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
                
                <button type="submit" className='submitBtn'>Update</button>
            </form>
       </div>
    )
}