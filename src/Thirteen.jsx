import React, { useState } from 'react'

const Thirteen = () => {
    const [file,setFile] = useState(null);

    const handleFileChange =(e)=>{
        const selectFile = e.target.files[0];
        setFile(selectFile)

    }
    

  return (
    <div>
        <input 
        type="file" 
        accept='image/*'
        onChange={handleFileChange}
         />
        {file&&<img src={URL.createObjectURL(file)}/>}
        
    </div>
  )
}

export default Thirteen