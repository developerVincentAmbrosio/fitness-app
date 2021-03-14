import React, { useRef, useState } from 'react';

const Stopwatch = () => {
    const [stopwatchTime, setStopwatchTime] = useState([])
    const [stopwatchSeconds, setStopwatchSeconds] = useState(0)
    const [stopwatchMinutes, setStopwatchMinutes] = useState(0)
    const [stopwatchHours, setStopwatchHours] = useState(0)
    const [isRunning, setIsRunning] = useState(false)

    const handleStartTimer = () => {
        setIsRunning(true)
        stopwatchTime = setInterval(() => {
            if (stopwatchSeconds !== 60) {
                setStopwatchSeconds + 1
            } else if (stopwatchSeconds === 60) {
                setStopwatchMinutes + 1
                setStopwatchSeconds(0)
            } else if (stopwatchMinutes === 60) {
                setStopwatchHours + 1
                setStopwatchMinutes(0)
            }
        }, 1000);
    };

    const handlePauseTimer = () => {
        clearInterval(stopwatchTime)
        setIsRunning(false)
        setStopwatchTime([stopwatchHours, stopwatchMinutes, stopwatchSeconds])
    };

    const handleResetTimer = () => {
        clearInterval(stopwatchTime)
        setIsRunning(false)
        setStopwatchSeconds(0)
        setStopwatchMinutes(0)
        setStopwatchHours(0)
    };

    const formatTimer = () => {
        return `${stopwatchHours} : ${stopwatchMinutes} : ${stopwatchSeconds}`
    };
    
    return(
        <>
            <h2>{formatTimer}</h2>
            <button onClick={!isRunning ? handleStartTimer : handlePauseTimer}>{isRunning ? 'Stop' : 'Start'}</button>
            <button onClick={handleResetTimer} disabled={!isRunning}>Reset</button>
        </>
    );
}

export default Stopwatch;