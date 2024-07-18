 import React, { useState } from 'react'
 
 const Twentytwo = () => {

    const[count,setCount]  = useState(0);
    const[step,setStep] = useState(0);

    const INC =()=>{

       if(count >= 0 && count < 100){
          setCount(count+step)
       }

    }
    const DEC = ()=>{
        if(count > 0 && count <= 100){
         setCount(count-step);
        }
 
     }
   return (
     <div>
        <p>{count}</p>
        <button onClick={INC} disabled={count >= 100}>Incease</button>
        <button onClick={DEC} disabled={count <= 0}>decrease</button>
        <button onClick={()=> setCount(0)}>reset</button>
        <input
         type="Enter the value"
         value={step}
         onChange={(e)=>setStep(Number(e.target.value))}
         />
     </div>
   )
 }
 
 export default Twentytwo