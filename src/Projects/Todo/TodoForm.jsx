import { useState } from "react";
export const TodoForm =({onAddTodo})=>{
    const [inputValue,setInputValue] = useState("");
    const handleInputChange =(value) =>{
        setInputValue(value)
    }

    const handleFormSubmit =(event)=>{
        event.preventDefault();
        onAddTodo(inputValue)
        setInputValue("");

    }
    return (
        <section className="form">
        <form  onSubmit={handleFormSubmit}>
            <div>
                <input type="text"
                 className="todo-input"
                 autoComplete="off"
                 value={inputValue}
                 onChange={(event)=> handleInputChange(event.target.value)}
                />
            </div>
            <div>
                <button type="text" className="todo-btn">Add</button>
            </div>
        </form>
    </section>
    )
}