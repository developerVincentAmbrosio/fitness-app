import React, { useState } from 'react';
import ListOfExercises from './ListOfExercises';

const ExerciseInput = props => {
    const [value, setValue] = useState('');

    return (
        <form 
            onSubmit = {event => {
            event.preventDefault();
            props.handleSubmit(value, event);
            setValue('');
            }}>
            
            <label htmlFor="Exercise">Add an exercise </label>
                <select name="exercises">
                    <ListOfExercises />
                </select> <br/>

            <label for="Set">Set:</label>
            <input type="text" name="Set" value="" /><br/>

            <label for="Previous">Previous:</label>
            <input type="text" name="Previous" value="Previous" /><br/>

            <label for="Weight">Weight:</label>
            <input type="text" name="Weight" value="" /><br/>

            <label for="Reps">Reps:</label>
            <input type="text" name="Reps" value="" /><br/>

            <button>Add another set</button>

            <button onClick={() => props.handleSubmit}>Add</button>
        </form>
    );
}

export default ExerciseInput;

            {/* <input type="text" value={value}
            onChange={event => setValue(event.target.value)}
            /> */}