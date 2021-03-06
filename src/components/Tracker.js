import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../styles/Tracker.css';

//import Dropdown from './Dropdown';
import Heading from './Heading';
//import WorkoutList from './WorkoutList';
import ExerciseInput from './ExerciseInput';
import Nav from './Nav';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

const Tracker = () => {

    const [exercises, setExercises] = useState([]);

    // const [startWorkout, setStartWorkout] = useState(false);
    const [imperial, setImperial] = useState(true);

    const handleLbsToKilos = () => {
        if (imperial === true) {
            setImperial(false)
        } else {
            setImperial(true)
        }
    };

    const handleAddExercise = (item, event) => {
        event.preventDefault();
        setExercises(exercises.concat(item));
    };

    const handleRemoveExercise = (item, event) => {
        event.preventDefault();
        setExercises(exercises.filter((i) => i !== item));

    };


{/* <WorkoutList exercises={exercises} handleClick={(exercise) => {
    setExercises(exercises.slice().filter((i) => i !== exercise));
    }}/> */}

    return (
        <body>
            <Heading /><br/>
            <hr/>
            <div id="list-container">
                <p>Add an exercise:</p>
                <ExerciseInput handleSubmit={handleAddExercise}/>
                {/* <WorkoutList items={exercises}
                    onRemoveItem={handleRemoveExercise}
                /> */}
            </div>
            <hr/>
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

{/*             

<button
onClick={handleLbsToKilos}>
{imperial ? 'Pounds' : 'Kilos' }
</button>

<ExerciseItem onChange={handleLbsToKilos} />
<br/> */}


    // var weightUsed = '';

    // const handleWeightConversion = (value) => {
    //     if (imperial === true) {
    //         weightUsed = value / 2.205
    //     } else {
    //         weightUsed = value * 2.205
    //     }
    //     return Math.floor(weightUsed) 
    // };