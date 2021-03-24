import React, { useState } from 'react';

const ExerciseInput = props => {
    const [value, setValue] = useState('');
    const title = '';
    return (
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
    );
}

export default ExerciseInput;