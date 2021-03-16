import React, {useState, useRef } from 'react';

const Exercise = (props) => {
    return (
        <ul>
            <li>{props.exercise_name}</li>
        </ul>
    );
}

export default Exercise;