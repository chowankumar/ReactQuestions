import React, { useState } from 'react'

const Fouteen = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [isregistered,setIsRegistered] = useState(false);

  return (
    <div>
        <form action="">
            <input type="email" placeholder='Email' onChange={(e)=> setEmail(e.target.value)} />
            <input type="password" placeholder='Password' 
            onChange={(e)=> setPassword(e.target.value)}
            />

            <button>
              {isregistered?'Login':'Register'}
            </button>

        </form>
        <p>
          {isregistered?"Dont have an account ? Register now": "already have an account? login"}
        </p>
        <button onClick={()=> setIsRegistered(!isregistered)}>{isregistered ? 'register' : 'login'}</button>

    </div>
  )
}

export default Fouteen