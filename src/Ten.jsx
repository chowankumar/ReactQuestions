import React, { useState } from 'react'

const Ten = () => {
    const [color,setColor] = useState("yellow");
    const colorHandler =()=>{
        const newColor = color === 'yellow' ?  'pink' : 'white'
        setColor(newColor)
    }
  return (
    <div>
        <div onClick={colorHandler} style={{backgroundColor:color, height:'200px'}}>

        </div>

    </div>
  )
}

export default Ten