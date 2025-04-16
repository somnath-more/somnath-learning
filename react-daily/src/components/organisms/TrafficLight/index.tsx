import React, { useEffect, useState } from 'react';
import './index.css';

const TrafficLightData = [
  {
    id: 'red',
    color: 'red',
    duration: 4000,
    nextLight: 'yellow',
  },
  {
    id: 'yellow',
    color: 'yellow',
    duration: 500,
    nextLight: 'green',
  },
  {
    id: 'green',
    color: 'green',
    duration: 3000,
    nextLight: 'red',
  },
];

const TrafficLight = () => {
  const [currentLight, setCurrentLight] = useState('red');

  useEffect(() => {
    const current = TrafficLightData.find(light => light.id === currentLight);
    if (!current) return;

    const timeout = setTimeout(() => {
      setCurrentLight(current.nextLight);
    }, current.duration);

    return () => clearTimeout(timeout);
  }, [currentLight]);

  return (
    <div className="traffic-light">
      {TrafficLightData.map((light) => (
        <div
          key={light.id}
          className={`light ${light.color} ${currentLight === light.id ? 'active' : ''}`}
        ></div>
      ))}
    </div>
  );
};

export default TrafficLight;
