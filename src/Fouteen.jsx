import React, { useState } from 'react'

const Fouteen = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [registered,isRegistered] = useState(false);

  return (
    <div>
        <form action="">
            <input type="email" placeholder='Email' onChange={(e)=> setEmail((e)=>e.target.value)} />
        </form>

    </div>
  )
}

export default Fouteen