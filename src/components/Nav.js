import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Nav.css';

const Nav = () => {
    return (
        <nav>
            <Link to='/'>
                Home
            </Link>
            <Link to='/tracker'>
                Tracker
            </Link>
        </nav>
    )
}

export default Nav;