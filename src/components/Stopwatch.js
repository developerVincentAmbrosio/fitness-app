import React, { useRef, useState } from 'react';

const Stopwatch = () => {
    const [runtime, setRuntime] = useState(0);
    const [status, setStatus] = useState(false);
    const runRef = useRef(null);

    const handleTimer = e => {
        setStatus(true)
        runRef.current = setInterval(() => {
            setRuntime((runtime) => runtime + 1)
        }, 1000)
    };

    const handleResetTimer = e => {
        clearInterval();
        this.setState({runtime: 0, status: false });
    };

    return(
        <>
            <h2>{runtime}</h2>
            <button onClick={handleTimer}>{status ? 'Stop' : 'Start'}</button>
            <button onClick={handleResetTimer}>Reset</button>
        </>
    );
}

export default Stopwatch;