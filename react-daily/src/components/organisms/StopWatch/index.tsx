import React, { useEffect, useRef, useState } from 'react';

const StopWatch: React.FC = () => {
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const timeRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isRunning) {
      timeRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      if (timeRef.current) {
        clearInterval(timeRef.current);
      }
    }
    return () => {
      if (timeRef.current) {
        clearInterval(timeRef.current);
      }
    };
  }, [isRunning]);

  return (
    <div>
      <h1>StopWatch</h1>
      <p>Time: {time} seconds</p>
      <button type="button" onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? 'Stop' : 'Start'}
      </button>
      <button type="button" onClick={() => setTime(0)}>
        Reset
      </button>
    </div>
  );
};

export default StopWatch;
