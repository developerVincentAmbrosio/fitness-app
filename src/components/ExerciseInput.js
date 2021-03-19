import React, { useState } from 'react';

const ExerciseInput = props => {
    const [value, setValue] = useState('');
    return (
        <div>
            <p>add an exercise:</p>
        <form 
            onSubmit = {event => {
            event.preventDefault();
            props.handleSubmit(value);
            setValue('');
            }}>
            <input type="text" value={value}
            onChange={event => setValue(event.target.value)}
            />
        </form>
        </div>
    );
}

export default ExerciseInput;