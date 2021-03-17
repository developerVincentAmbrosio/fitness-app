import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import Heading from './Heading';
import Exercise from './Exercise';
import Workout from './Workout';
import Nav from './Nav';

const Tracker = () => {
    const [startWorkout, setStartWorkout] = useState(false);

    const handleAddExercise = () => {
        setStartWorkout(true)
    };

        return (
            <body>
                <Heading /><br/>

                <button
                    onClick={handleAddExercise}
                >Add exercise</button>
                
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