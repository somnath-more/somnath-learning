import React, { useMemo, useState, ChangeEvent } from 'react';
import TextField from '../../atoms/TextField';
import Button from '../../atoms/Button';

const UseMemo: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [text, setText] = useState<string>('');

  const calculateFactorial = (): number => {
    alert('Check am I memoized or not');
    let factorial = 1;
    for (let i = 1; i <= count; i++) {
      factorial *= i;
    }
    return factorial;
  };

  const memo = useMemo<number>(calculateFactorial, [count]);

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div>
      <h1>UseMemo Example</h1>
      <p>
        Count the Factorial of {count}: {memo}
      </p>
      <Button onClick={() => setCount(count + 1)} text="Factorial" />
      <p>Text Value: {text}</p>
      <TextField
        label="Text"
        placeholder="Enter a Task"
        value={text}
        onChange={handleTextChange}
      />
    </div>
  );
};

export default UseMemo;
