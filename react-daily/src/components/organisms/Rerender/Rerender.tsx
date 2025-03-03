import React, { useEffect, useState } from 'react'

const Rerender = () => {
    const [count,setCount]=useState(0)
    useEffect(()=>{
        console.log("ReRendered");
        
    },[count])
  return (
    <div>
        Rerender
       <input value={count} onChange={()=> setCount(count+1)} placeholder='render input'/>
    </div>
  )
}

export default Rerender