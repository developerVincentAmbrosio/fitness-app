import React, {useState, useRef, useEffect} from 'react';
import '../styles/Dropdown.css';

import { useDetectOutsideClick } from './useDetectOutsideClick';

const Dropdown = () => {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);

    const activateDropDown = () => setIsActive(!isActive);

    return(
        <main className="menu-container">
            <button onClick={activateDropDown} className="menu-trigger">Sets</button>
            <div ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                </ul>
            </div>
        </main>

    );   
}

export default Dropdown;