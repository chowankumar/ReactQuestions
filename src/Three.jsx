import React, { useState } from 'react'

const Three = () => {
    const [input,setInput] = useState('');
  return (
    <div>

        <input type="text"   placeholder='enter your name' value={input} onChange={(e)=>setInput(e.target.value)}/>
        <br />
         <p>user input : {input}</p>
    </div>
  )
}

export default Three