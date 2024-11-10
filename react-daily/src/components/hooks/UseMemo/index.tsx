
import React, { useMemo, useState } from 'react'
import TextField from '../../atoms/TextField';
import Button from '../../atoms/Button';

const UseMemo = () => {
    const [count,setCount] =useState(0);
    const [text,setText] = useState('');

    const calculateFactorial = () => {
        alert("Check am i memoize or not")
        let factorial = 1;
        for(let i = 1; i <= count; i++) {
            factorial *= i;
        }
        return factorial;
    }

    const memo= useMemo(calculateFactorial,[count])
  return (
    <div>
        <h1>UseMemo Example</h1>
        <p>Count the Factorial of {count}:{memo}</p>
        <Button onClick={()=> setCount(count+1)} text={'Factorial'}/>
        <p>Text Value : {text}</p>
        <TextField label={"Text"} placeholder={"Enter a Task"} value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  )
}

export default UseMemo