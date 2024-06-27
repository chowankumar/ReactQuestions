import { useState } from "react"
import "./Todo.css"
import { MdCheck,MdDeleteForever } from "react-icons/md";



export const Todo =()=>{
    const [inputValue,setInputValue] = useState("");
    const [task,setTask] = useState([]);

    const handleInputChange =(value) =>{
        setInputValue(value)
    }

    const handleFormSubmit =(event)=>{
        event.preventDefault();  

        if(!inputValue) return;
        if(task.includes(inputValue)){
            setInputValue("");
            return
        }

        setTask((prevTask)=> [...prevTask, inputValue])
        setInputValue("")
    }

    return <section className="todo-container">
        <header>
            <h1>Todo List</h1>
        </header>

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

        <section>
            <ul>
                {
                   task.map((currTdo,index)=>{
                    return  (
                    <li key={index} className="todo-item">
                        <span>{currTdo}</span>
                        <button className="check-btn"><MdCheck /></button>
                        <button className="delete-btn"><MdDeleteForever /></button>

                    </li>
                    )
                   }) 
                }
            </ul>
        </section>
    </section>
}