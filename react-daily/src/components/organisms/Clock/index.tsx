import React, { useEffect, useState } from 'react';
import './clock.css'; // Import the CSS file for styling

export default function Clock() {
    const [currentTime, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000); // Update every second

        return () => clearInterval(interval); // Cleanup on component unmount
    }, []);

    // Format the time in IST
    const formatTime = (date: Date) => {
        return date.toLocaleTimeString('en-US', { hour12: false, timeZone: 'Asia/Kolkata' });
    };

    return (
        <div className="clock-container">
            <div className="clock-time">{formatTime(currentTime)}</div>
        </div>
    );
}
