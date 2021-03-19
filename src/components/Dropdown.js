import React, {useState } from 'react';
import '../styles/Dropdown.css';
//import onClickOutside from 'react-onclickoutside';

const Dropdown = ({ title, items }) => {
    const [open, setOpen] = useState(false);
    const [selection, setSelection] = useState([]);
    
    const toggle = () => setOpen(!open); 
    
    Dropdown.handleClickOutside = () => setOpen(false);

    const handleOnClick = (item) => {
        setSelection([item])
    };

    return(
        <div className="dd-container">
            <div
                tabIndex={0}
                className="dd-header"
                role="button"
                onKeyPress={() => toggle(!open)}
                onClick={() => toggle(!open)}
            >
                <div className="dd-header-title">
                    <p className="dd-header-title-bold">{title}</p>
                </div>
                <div className="dd-header-action">
                    <p>{open ? 'Close' : 'Open'}</p>
                </div> 
            </div>
            {open && (
            <ul className="dd-list">
            {items.map(item => (
                <li className="dd-list-item">
                    <button type="button" onClick={() => handleOnClick(item)}>
                        <span>{item }</span>
                    </button>
                </li>
            ))}
            </ul>
            )}
        </div>
    );
}

// const clickOutsideConfig = {
//     handleClickOutside: ()=> Dropdown.handleClickOutside,
// };

// export default onClickOutside(Dropdown, clickOutsideConfig);

export default Dropdown;