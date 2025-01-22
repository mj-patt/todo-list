import React, {useState} from 'react'

export const ToDoInput = ({addTodo}) => {

    const [value, setValue] = useState(""); //useState for the task text
    const [importance, setImportance] = useState("2");


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
        <div className="InputWrapper">
            <h1>MY TODO</h1>
            <form className='ToDoInput' onSubmit={handleSubmit}>
                <input type="text" className='InputText' placeholder='What does need to be done?' value={value} onChange={handleTextChange}/>
                
                <div className="d-flex justify-content-between Cont1">
                <div className="Cont2">
                    <label className="ImpLabel">
                        <input
                            type ="radio"
                            value="3"
                            checked={importance === "3"}
                            onChange={handleImportanceChange}
                            className="RadioBtn"
                        />
                        Super Important
                    </label>
                    <label className="ImpLabelMid">
                        <input
                            type="radio"
                            value="2"
                            checked={importance === "2"}
                            onChange={handleImportanceChange}
                            className="RadioBtn"
                            
                        />
                        Important
                    </label>
                    <label className="ImpLabel">
                        <input
                            type="radio"
                            value="1"
                            checked={importance==="1"}
                            onChange={handleImportanceChange}
                            className="RadioBtn"
                        />
                        Less Important
                    </label>
                </div>
                
                <button type="submit" className='SubmitBtn'>Submit</button>
                </div>

            </form>
       </div>
    )
}