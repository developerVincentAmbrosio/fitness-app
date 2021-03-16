import React, {useState} from 'react';

const Stopwatch = (props) => {
    const [stopwatch, setStopwatch] = useState({ms:0, s:0, m:0, h:0}); 
    const [interv, setInterv] = useState();
    const [status, setStatus] = useState(0);
    const [isActive, setIsActive] = useState(false);

    var updatedMs = stopwatch.ms, updatedS = stopwatch.s, updatedM = stopwatch.m, updatedH = stopwatch.h;
    
    const runStopwatch = () => {
        if (updatedMs === 100) {
            updatedS ++;
            updatedMs = 0;
        }
        if (updatedS === 60) {
            updatedM ++;
            updatedS = 0;
        }
        if (updatedM === 60) {
            updatedH++;
            updatedM = 0;
        }
        updatedMs++;
        return setStopwatch({ms:updatedMs, s:updatedS, m:updatedM, h:updatedH});
    }

    const startStopwatch = () => {
        setIsActive(true)
        runStopwatch()
        setInterv(setInterval(runStopwatch, 10))
    };

    const pauseStopwatch = () => {
        setIsActive(false)
        clearInterval(interv)
        setStatus(1)
    };

    const resetStopwatch = () => {
        setIsActive(false)
        clearInterval(interv)
        setStatus(0)
        setStopwatch({ms:0, s:0, m:0, h:0}) 
    };

    const displayHours = () => {
        if (stopwatch.h === 0) {
            return '';
        } else {
        return <span>{(stopwatch.h >= 10) ? stopwatch.h : '0'+ stopwatch.h}</span>
        }
    }

    return(
        <>
            {displayHours()}&nbsp;&nbsp;
            {/* <span>{(stopwatch.h >= 10) ? stopwatch.h : '0'+ stopwatch.h}</span>&nbsp;:&nbsp; */}
            <span>{(stopwatch.m >= 10) ? stopwatch.m : '0'+ stopwatch.m}</span>&nbsp;:&nbsp;
            <span>{(stopwatch.s >= 10) ? stopwatch.s : '0'+ stopwatch.s}</span>&nbsp;:&nbsp;
            <span>{(stopwatch.ms >= 10) ? stopwatch.ms : '0'+ stopwatch.ms}</span><br/>
            <button 
            onClick={!isActive ? startStopwatch : pauseStopwatch}>{isActive ? 'Stop' : 'Start'}
            </button>
            <button
                onClick={resetStopwatch}>Reset
            </button>
        </>
    );
}

export default Stopwatch;