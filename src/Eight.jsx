import React, { useState } from 'react'

const Eight = () => {

    const [input, setInput] = useState('');
    const [todos, setTodos] = useState([]);

    const addTodo = () => {
        if(input.trim() !== '') {
            setTodos([...todos,input]);
            setInput('');

        }

    }

    const remove =(index)=>{
        const updatetodos = todos.filter((_,i)=> i!== index)
        setTodos(updatetodos)
    }

    return (
        <div>
            <input type="text" placeholder='enter your todo' onChange={(e) => setInput(e.target.value)} />
            <button onClick={addTodo}>Add</button>
            <ul>
                {
                    todos.map((todo,index) => {
                         
                        return  <li key={index}>{todo}
                            <button onClick={()=> remove(index)}>Remove</button>
                        </li>
                    })
                }

            </ul>

        </div>
    )
}

export default Eight