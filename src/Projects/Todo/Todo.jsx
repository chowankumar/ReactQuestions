import { useEffect, useState } from "react"
import "./Todo.css"

import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";



export const Todo = () => {

    const [task, setTask] = useState([]);
   
    const handleFormSubmit = (inputValue) => {
        const {id,content,checked} = inputValue; 
        if (!content) return;
        if (task.includes(inputValue)) return;
        setTask((prevTask) => [...prevTask, inputValue])
    };

    //delete todo    
    const handleDeleteTodo = (value) => {

        const updatedTask = task.filter((curtask) => curtask !== value)
        setTask(updatedTask)
    }

    const handleClearTodoData = () => {
        setTask([])
    }


    return <section className="todo-container">
        <header>
            <h1>Todo List</h1>
            <TodoDate/>
        </header>

        <TodoForm onAddTodo={handleFormSubmit} />

        <section>
            <ul>
                {
                    task.map((currTodo, index) => {
                        return (
                            <TodoList 
                            key={index}
                            data={currTodo}
                            onHandleDeleteTodo={handleDeleteTodo}
                            />
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