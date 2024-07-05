import { useEffect, useState } from "react"
import "./Todo.css"

import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";



export const Todo = () => {

    const [task,setTask] = useState([]);

    const handleFormSubmit = (inputValue) => {
        const { id, content, checked } = inputValue;
        if (!content) return;

        const ifTodocontentMatched = task.find(
        (curTask) => curTask.content === content);
        if(ifTodocontentMatched) return;
        

        setTask((prevTask) => [...prevTask, {id,content,checked}])
    };

    //delete todo    
    const handleDeleteTodo = (value) => {

        const updatedTask = task.filter((curtask) => curtask.content !== value)
        setTask(updatedTask)
    }

    const handleClearTodoData = () => {
        setTask([])
    }

    const handleCheckTodo=(content)=>{

         const updatedTask = task.map((currTask)=> {
          if(currTask.content === content){
            return {...currTask, checked: !curTask.checked};
          }else {
            return currTask
          }
         })
         setTask(updatedTask)

    }

    return <section className="todo-container">
        <header>
            <h1>Todo List</h1>
            <TodoDate />
        </header>

        <TodoForm onAddTodo={handleFormSubmit} />

        <section>
            <ul>
                {
                    task.map((currTodo, index) => {
                        return (
                            <TodoList
                                key={currTodo.id}
                                data={currTodo.content}
                                checked={currTodo.checked}
                                onHandleDeleteTodo={handleDeleteTodo}
                                onHnadleCheckTodo={handleCheckTodo}
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