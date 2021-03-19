import React, {useState, useRef, useEffect} from 'react';
import '../styles/Dropdown.css';

import { useDetectOutsideClick } from './useDetectOutsideClick';

const Dropdown = () => {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);

    const activateDropDown = () => setIsActive(!isActive);

    let Numbers = [];
    for(let i = 1; i < 5; i++) {
        Numbers.push(i);
    }


    return(
        <main className="menu-container">
            <button onClick={activateDropDown} className="menu-trigger">Sets</button>
            <div ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
                <ul>
                    {Numbers.map(function(item) {
                        return<li>{item.number}</li>
                    })}
                </ul>
            </div>
        </main>

    );   
}

export default Dropdown;