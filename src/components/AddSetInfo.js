import React, { useState } from 'react';
import ExerciseInput from './ExerciseInput';

const AddSetInfo = (props) => {
    const [sets, setSets] = useState(0);
    const [reps, setReps] = useState([]);
    const [weight, setWeight] = useState([]);
    const [startExercise, setStartExercise] = useState(false);

    // const items = item.map((items, i) => ({
    //      `
    //     <li>${setsDisplay()} &nbsp;&nbsp; Reps: ${reps} &nbsp;&nbsp; Weight: ${previous}</li>`

    // }))

    // const chart = () => {
    //     return `
    //     <li>${setsDisplay()} &nbsp;&nbsp; Reps: ${reps} &nbsp;&nbsp; Weight: ${previous}</li>`
    // }

    const previous = weight[weight.length -1];

    const handleAddSets = (event) => {
        event.preventDefault()
        setStartExercise(true)
        setsCounter()
    };

    const setsCounter = () => {
        setSets(sets + 1)
        console.log(sets)
    };

    const setsDisplay = () => {
        return (startExercise ? "Set number: " + sets :  "")
    };

    const handleAddReps = (item) => {
        setReps(reps.concat(item));
    };

    const handleAddWeight = (item) => {
        setWeight(weight.concat(item));
    };

    return(
        <ul>
            AddSetInfo
            {/* {items} */}
          {/* <button onClick={handleAddSets}>Add Set</button> <br/>
          Add Reps: <ExerciseInput handleSubmit={handleAddReps}/>
          Add Weight: <ExerciseInput title='Add Weight' handleSubmit={handleAddWeight}/> */}
        </ul>
    );
}

export default AddSetInfo;