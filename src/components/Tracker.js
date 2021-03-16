import React, {useState} from 'react';
import Moment from 'react-moment';
import Stopwatch from './Stopwatch';
import WorkoutList from './WorkoutList';
import UserInput from './UserInput';
import Nav from './Nav';


const Tracker = () => {
    const [currentDate] = useState(Date().toLocaleString());
    const [exercises, setExercises] = useState(['bench press']);

    
        return (
            <body>
                <heading>
                    <h2><Moment format="M/D/YY">{currentDate}</Moment></h2>
                    <Stopwatch />
                </heading>
                <br/>
                <secton>
                    <WorkoutList exercises={exercises} />
                    <UserInput handleSubmit={(exercise) => {
                        setExercises(exercises.concat(exercise));
                        }}
                    />
                    <button>Finish workout</button>
                </secton>
                <nav>
                    <Nav />
                </nav>
            </body>
        );
}

export default Tracker;