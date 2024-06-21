import React, { useState } from 'react'

const Practice = () => {
    const [count,setCount] = useState(0)
  return (
    <div>
        <div><button onClick={()=>{setCount(count+1)}}>+</button></div>
        <div>{count}</div>
        <div><button onClick={()=>{setCount(count-1)}}>-</button></div>
    </div>
  )
}

export default Practice

