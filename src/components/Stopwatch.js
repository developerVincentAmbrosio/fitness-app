import React, { useRef, useState } from 'react';

const Stopwatch = () => {
    const [runtime, setRuntime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
//    const [isPaused, setIsPaused] = useState(false);
    const runRef = useRef(null);

    const handleStartTimer = () => {
        setIsRunning(true)
        runRef.current = setInterval(() => {
            setRuntime((runtime) => runtime + 1)
        }, 1000)
    };

    const handlePauseTimer = () => {
        clearInterval(runRef.current)
        setIsRunning(false)
    };

    const handleResetTimer = () => {
        clearInterval(runRef.current)
        setIsRunning(false)
       // setIsPaused(false)
        setRuntime(0)
    };

    const formatTimer = () => {
        const getSeconds = `0${(runtime % 60)}`.slice(-2)
        const minutes = `${Math.floor(runtime / 60)}`
        const getMinutes = `0${minutes % 60}`.slice(-2)
        const getHours = `0${Math.floor(runtime / 3600)}`.slice(-2)

        return `${getHours} : ${getMinutes} : ${getSeconds}`
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