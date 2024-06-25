import React, { useState } from 'react'
import "./Css/Twenty.css"

const Twenty = () => {
    const [isOn,setIsOn] = useState(false)
    const handleToggleSwitch =()=>{
        setIsOn(!isOn)

    }
  return (

    <div className='toggle-switch' style={{background:isOn? "#4caf50" : "#f44336"}} onClick={handleToggleSwitch}>
        <div className={`switch ${isOn?"on" : "off"}` } >
            <span className='switch-state'>{isOn?"On":"off"}</span>

        </div>
        
    </div>
  )
}

export default Twenty