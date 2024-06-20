import React from 'react'
import { useState } from 'react'

const Two = () => {
    const [count,setCount] = useState(0);
    const [count2,setCount2] = useState(0);
    
    const add =()=>{
        setCount(count+1);
    }

    const sub =()=>{
        setCount(count-1);
    }
  return (
   <>
   <p>This is the method number 1 :</p>
    <div><button  onClick={add}>+</button></div>
    {count}
     <div><button  onClick={sub}>-</button></div>




    <p>This is the method number 2 :</p>
    <div><button  onClick={()=>setCount2(count2+1)}>+</button></div>
    {count2}
     <div><button  onClick={()=>setCount2(count2-1)} >-</button></div>
   </>
  )
}

export default Two