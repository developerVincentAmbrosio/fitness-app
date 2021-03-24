import React, { useState } from 'react';

const ExerciseInput = props => {
    const [value, setValue] = useState('');

    return (
        <form 
            onSubmit = {event => {
            event.preventDefault();
            props.handleSubmit(value, event);
            setValue('');
            }}>
            <input type="text" value={value}
            onChange={event => setValue(event.target.value)}
            />
            <button onClick={() => props.handleSubmit}>Add</button>
        </form>
    );
}

export default ExerciseInput;