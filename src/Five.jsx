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

// Use onChange: For input elements like checkboxes, radio buttons, and text inputs, because it accurately reflects changes to the input's value.
// Use onClick: For button elements or when you need to respond to any click event, not necessarily tied to an input value change.