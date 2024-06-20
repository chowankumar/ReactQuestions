import React, { useState } from 'react'

const Four = () => {
    const items = ['item1','item2','item3','item3']
  return (
    <div>

        {items.map((item,index)=>
           
            
            <li key={index}>{item}</li>
           
        )}


    </div>
  )
}

export default Four