import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import Heading from './Heading';
import Exercise from './Exercise';
import Dropdown from './Dropdown';
import Workout from './Workout';
import Nav from './Nav';

const Tracker = () => {
    const [startWorkout, setStartWorkout] = useState(false);
    const [imperial, setImperial] = useState(true);

    const handleAddExercise = () => {
        setStartWorkout(true)
    };

    const handleLbsToKilos = () => {
        if (imperial === true) {
            setImperial(false)
        } else {
            setImperial(true)
        }
    };

    // var weightUsed = '';

    // const handleWeightConversion = (value) => {
    //     if (imperial === true) {
    //         weightUsed = value / 2.205
    //     } else {
    //         weightUsed = value * 2.205
    //     }
    //     return Math.floor(weightUsed) 
    // };

        return (
            <body>
                <Heading /><br/>

                <button
                    onClick={handleAddExercise}
                 >Add exercise
                </button>

                <button
                    onClick={handleLbsToKilos}>
                    {imperial ? 'Pounds' : 'Kilos' }
                </button>

                <Exercise onChange={handleLbsToKilos} />
                <br/>

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