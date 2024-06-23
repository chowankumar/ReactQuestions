import React, { useState } from 'react'

const Eighteen = () => {
const [users,setUsers] = useState([
    {name:"chowan",age:23},
    {name:"amrat",age:21},
])
  return (
    <div>
        <h1>Users List</h1>
        <ul>
            {users.map((item,index)=>{
               return (
                <li key={index}>
                    {item.name} {item.age} years old
                </li>
               )
            })}
        </ul>
    </div>
  )
}

export default Eighteen