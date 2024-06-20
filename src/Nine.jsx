 import React, { useState } from 'react'
 
 const Nine = () => {
    const [color,setcolor] = useState("black");

   return (
    <>
     <div style={{background:color,height:'200px'}}>
        

    </div>
    
        <button onClick={()=>setcolor("red")}>red</button>
        <button onClick={()=>setcolor("purple")}>purple</button>
        <button onClick={()=>setcolor("pink")} >pink</button></>
    
   )
 }
 
 export default Nine