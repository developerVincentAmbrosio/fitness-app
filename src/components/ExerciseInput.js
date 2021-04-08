import React, { useState } from 'react';
import ListOfExercises from './ListOfExercises';

const ExerciseInput = () => {
    const [state, setState] = useState({
        exercise_name: [],
        set_number: [],
        weight_used: [],
        num_of_reps: []
    });

    const handleChange = event => {
        event.preventDefault()
        const value = event.target.value
        setState({
            ...state,
            [event.target.name]: value
        });
    }

    return (
        <form >
            <label htmlFor="exercise_name">Add an exercise: </label>
                <select
                    name="exercise_name"
                    value={state.exercise_name}
                    onChange={handleChange}
                >
                    <ListOfExercises />
                </select> <br/>

            <label textarea="set_number">Set: </label>
            <input 
                type="text"
                name="set_number"
                value={state.set_number}
                onChange={handleChange}
            /> <br/>

            <label textarea="weight_used">Weight: </label>
            <input 
                type="text" 
                name="weight_used" 
                value={state.weight_used}
                onChange={handleChange}
            /> <br/>

            <label textarea="num_of_reps">Reps:</label>
            <input 
                type="text" 
                name="num_of_reps"
                value={state.num_of_reps}
                onChange={handleChange}
            /> <br/>

            <button
                //onClick={handleAddSet}
            >{state.set_number.length < 1 ? "Add set" : "Add another set"}</button>

            {/* <button onClick={() => handleSubmit}>Add</button> */}
        </form>
    );
}

export default ExerciseInput;