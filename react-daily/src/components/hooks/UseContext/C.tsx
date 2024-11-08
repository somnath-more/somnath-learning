import React from 'react'
import useUserContext from './CustomHook';

const C = () => {
    const {name,email}=useUserContext();
    if (!name) return <p>Loading...</p>
    if (!email) return <p>Loading...</p>

    return (
      <div>
        <p>Component C</p>
         <p>Name: {name}</p>
         <p>Email: {email}</p>

        <button onClick={() => alert('Clicked C')}>Click me</button>
      </div>
    )
  }



export default C