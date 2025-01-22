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
        <div className='EditWrapper'>
            <form className='ToDoEdit' onSubmit={handleSubmit}>
            <div className='EditLeft'>
                <input type="text" className='EditText' value={value} onChange={handleTextChange}/>
                
                <div>
                    <label className='EditImp'>
                        <input
                            type ="radio"
                            value="3"
                            checked={importance === "3"}
                            onChange={handleImportanceChange}
                        />
                        Super Important
                    </label>
                    <label className='EditImp'>
                        <input
                            type="radio"
                            value="2"
                            checked={importance === "2"}
                            onChange={handleImportanceChange}
                            
                        />
                        Important
                    </label>
                    <label className='EditImp'>
                        <input
                            type="radio"
                            value="1"
                            checked={importance==="1"}
                            onChange={handleImportanceChange}
                        />
                        Less Important
                    </label>
                </div>
            </div>
            <div className='EditRight'>
                <button type="submit" className='UpdateBtn'>Update</button>
            </div>
            </form>
       </div>
    )
}