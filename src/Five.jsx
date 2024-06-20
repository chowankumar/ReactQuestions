import React, { useState } from 'react'

const Five = () => {
    const [value,setValue] = useState(false);

    const toggle =()=>{
        setValue(!value)

    }
  return (
    <div>
        <input type="checkbox" onChange={toggle} />
        <p> {value?"on" : "off"} </p>
    </div>
  )
}

export default Five