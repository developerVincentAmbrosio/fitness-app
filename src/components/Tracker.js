import React from 'react';
import { Link } from 'react-router-dom';

import Heading from './Heading';
import Workout from './Workout';
import Nav from './Nav';

const Tracker = () => {

        return (
            <body>
                <Heading />
                <Workout />

                <Link to='/finish'>
                    <button>Finish workout</button>
                </Link>
                <nav>
                    <Nav />
                </nav>
            </body>
        );
}

export default Tracker;