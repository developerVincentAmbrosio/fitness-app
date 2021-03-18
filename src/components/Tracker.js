import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import Heading from './Heading';
import Exercise from './Exercise';
import Workout from './Workout';
import Nav from './Nav';

const Tracker = () => {
    const [startWorkout, setStartWorkout] = useState(false);
    const [Imperial, setImperial] = useState(true);

    const handleAddExercise = () => {
        setStartWorkout(true)
    };

    const lbsToKilos = () => {
        if (Imperial === true) {
            setImperial(false)
        } else {
            setImperial(true)
        }
    };

    // var weightUsed = '';

    // const handleWeightConversion = (value) => {
    //     if (Imperial === true) {
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
                    onClick={lbsToKilos}>
                    {Imperial ? 'Pounds' : 'Kilos' }
                </button>

                
                {startWorkout ? <Exercise /> : ''}
                <button>Add another set</button>
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