import React, { useState } from 'react';
import ListOfExercises from './ListOfExercises';

const ExerciseInput = () => {
    // const [value, setValue] = useState('');

    const [set_number, setSet_number] = useState('');
    const [weight_used, setWeight_used] = useState('');
    const [num_of_reps, set_Num_of_reps] = useState('');

    const handleSetNumberSubmit = event => {
        event.preventDefault();
        setSet_number(event.target.value)
        console.log('set: ' + event.target.value)
    }

    const handleNumOfRepsSubmit = event => {
        event.preventDefault();
        set_Num_of_reps(event.target.value)
        console.log('reps: ' + event.target.value)
    }

    const handleSetWeightUsed = event => {
        event.preventDefault();
        setWeight_used(event.target.value)
        console.log('weight: ' + event.target.value)
    }

    const handleAddAnotherSet = event => {
        event.preventDefault();
        setSet_number(0)
        setWeight_used(0)
        set_Num_of_reps(0)
    }

    return (
        <form >
            <label htmlFor="Exercise">Add an exercise </label>
                <select name="exercises">
                    <ListOfExercises />
                </select> <br/>

            <label htmlFor="Set">Set:</label>
            <input 
                type="text"
                name="Set"
                value={set_number}
                onChange={handleSetNumberSubmit}
            /><br/>

            <label htmlFor="Weight">Weight:</label>
            <input 
                type="text" 
                name="Weight" 
                value={weight_used}
                onChange={handleSetWeightUsed}
            /><br/>

            <label for="Reps">Reps:</label>
            <input 
                type="text" 
                name="Reps"
                value={num_of_reps}
                onChange={handleNumOfRepsSubmit}
            /><br/>

            <button
                onClick={handleAddAnotherSet}
            >Add another set</button>

            {/* <button onClick={() => handleSubmit}>Add</button> */}
        </form>
    );
}

export default ExerciseInput;

            {/* <input type="text" value={value}
            onChange={event => setValue(event.target.value)}
            /> */}

            {/* <label htmlFor="Previous">Previous:</label>
            <input type="text" name="Previous" value="Previous" /><br/> */}
