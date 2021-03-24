import React, { useState } from 'react';
import ExerciseInput from './ExerciseInput';
``
const AddSetInfo = () => 

    const repsList = reps.map(reps)

    const [reps, setReps] = useState([]);
    const [weight, setWeight] = useState([]);

    const previous = weight[weight.length -1];

    const handleAddReps = (item) => {
        setReps(reps.concat(item));
    };

    const handleAddWeight = (item) => {
        setWeight(weight.concat(item));
    };

    return(
        <>
            Reps:
            <ExerciseInput handleSubmit={handleAddReps}/>
            Weight:
            <ExerciseInput handleSubmit={handleAddWeight}/>
        </>
    );
}

export default AddSetInfo;