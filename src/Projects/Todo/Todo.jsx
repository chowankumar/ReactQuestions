import { useEffect, useState } from "react"
import "./Todo.css"
import { MdCheck,MdDeleteForever } from "react-icons/md";



export const Todo = ()=>{
    const [inputValue,setInputValue] = useState("");
    const [task,setTask] = useState([]);
    const [dateTime,setDateTime] = useState("");

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


    //todo date and time

    useEffect(()=>{
      const interval =   setInterval(()=>{
            const now = new Date();
            const formattedDate = now.toLocaleDateString();
            const formatettedTime = now.toLocaleTimeString();
        
            setDateTime(`${formattedDate} - ${formatettedTime}`)
           },1000)

           return ()=> clearInterval(interval )

    },[])

   //delete todo    
   const handleDeleteTodo =(value)=>{

    const updatedTask = task.filter((curtask)=> curtask !== value)
    setTask(updatedTask)


   }

   const handleClearTodoData =()=>{
    setTask([])
   }


    return <section className="todo-container">
        <header>
            <h1>Todo List</h1>
            <h2 className="date-time">{dateTime}</h2>
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
                   task.map((currTodo,index)=>{
                    return  (
                    <li key={index} className="todo-item">
                        <span>{currTodo}</span>
                        <button className="check-btn"><MdCheck /></button>
                        <button 
                        className="delete-btn"
                        onClick={()=> handleDeleteTodo(currTodo)}
                        ><MdDeleteForever /></button>

                    </li>
                    )
                   }) 
                }
            </ul>
        </section>

        <section>
            <button
            className="clear-btn"
            onClick={handleClearTodoData}
            > Clear all</button>
        </section>
    </section>
}