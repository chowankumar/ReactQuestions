import { useState } from "react"

export const Nineteen=()=>{
    const [inputValue,setInputValue] = useState("");
    return(
        <>
        <InputComponent inputValue={inputValue} setInputValue={setInputValue}/>
        <DisplayCompnent inputValue={inputValue}/>
        </>
    )
}

const InputComponent =({inputValue,setInputValue})=>{
    
    return(
        <>
        <input type="text"
        placeholder="enter your name here "
        value={inputValue}
        onChange={(e)=>setInputValue(e.target.value)}
         />
        </>
    )
}

const DisplayCompnent = ({inputValue})=>{
    return <>
    <p>The current input value is : {inputValue}</p>
    </>
}