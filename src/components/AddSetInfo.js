import React, { useState } from 'react';
import ExerciseInput from './ExerciseInput';

const AddSetInfo = () => {
    const [sets, setSets] = useState(1);
    const [reps, setReps] = useState([]);
    const [weight, setWeight] = useState([]);
    const [startExercise, setStartExercise] = useState(false);

    const previous = weight[weight.length -1];

    const handleSetsCounter = (event) => {
        event.preventDefault()
        setSets(sets + 1)
        console.log(sets)
    };

    const beginExercise = () => {
        setStartExercise(true);
    }

    const handleAddReps = (item) => {
        setReps(reps.concat(item));
        // console.log('reps: ' + reps)
    };

    const handleAddWeight = (item) => {
        setWeight(weight.concat(item));
    };

    const setsDisplay = () =>
        'Set number: ' + sets;

    return(
        <>
          <button onClick={handleSetsCounter}>Add Set</button>
          {/* <ExerciseInput handleSubmit={handleAddReps}/>
          Add Weight: <ExerciseInput handleSubmit={handleAddWeight}/>
          Previous: {previous} */}
        
        </>
    );
}

export default AddSetInfo;