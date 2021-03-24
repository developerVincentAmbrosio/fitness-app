import React, {useState} from 'react';
import { Link } from 'react-router-dom';

//import Dropdown from './Dropdown';
import Heading from './Heading';
import WorkoutList from './WorkoutList';
import ExerciseInput from './ExerciseInput';
import Nav from './Nav';

const Tracker = () => {

    const [startWorkout, setStartWorkout] = useState(false);
    const [imperial, setImperial] = useState(true);
    const [exercises, setExercises] = useState ([]);
    



    const handleLbsToKilos = () => {
        if (imperial === true) {
            setImperial(false)
        } else {
            setImperial(true)
        }
    };

    const handleAddExercise = (item) => {
        setExercises(exercises.concat(item));
    }

    const handleRemoveExercise = (item) => {
        setExercises(exercises.filter((i) => i !== item));
    }


{/* <WorkoutList exercises={exercises} handleClick={(exercise) => {
    setExercises(exercises.slice().filter((i) => i !== exercise));
    }}/> */}

    return (
        <body>
            <Heading /><br/>
            <div id="list-container">
                <p>Add an exercise:</p>
                <ExerciseInput handleSubmit={handleAddExercise}/>
                <WorkoutList items={exercises}
                    onRemoveItem={handleRemoveExercise}
                />
            </div>

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
onClick={handleAddExercise}
>Add exercise
</button>

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