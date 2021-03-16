import React, {useState, useRef } from 'react';
import Exercise from './Exercise';
//import '../styles/Accordion.css';

const Accordion = () => {
    const list = ['exercise type', 'weight', 'reps'];
    const content = useRef(null);
    const [height, setHeight] = useState(0);

    const toggleAccordion = () => {
        setHeight (height === 0 ? content.current.scrollHeight : 0);
    };

    return (
        <>
            <button
             onClick={ <Exercise />}
            > Add an Exercise +
            </button>
            {/* <ul height = {height} ref={content}>
                <l1>
                {list.map((item, index)=> <li key={index}>{item}</li>)}
                </l1>
            </ul> */}
        </>
    );
}

export default Accordion;
