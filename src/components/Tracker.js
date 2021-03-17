import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import Heading from './Heading';
import WorkoutList from './WorkoutList';
import UserInput from './UserInput';
import Nav from './Nav';


const Tracker = () => {
    const [exercises, setExercises] = useState(['bench press']);

        return (
            <body>
                <Heading />
                <secton>
                    <WorkoutList exercises={exercises} />
                    <UserInput handleSubmit={(exercise) => {
                        setExercises(exercises.concat(exercise));
                        }}
                    />
                    <Link to='/finish'>
                    <button>Finish workout</button>
                </Link>
                </secton>
                <nav>
                    <Nav />
                </nav>
            </body>
        );
}

export default Tracker;