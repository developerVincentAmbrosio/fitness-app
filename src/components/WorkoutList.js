import React from 'react';
import Exercise from './Exercise';

const WorkoutList = (props) => {
    const exercises = props.exercises.map((exercise, i) => (
        <Exercise
         key={i}
         name={exercise}
        />
    ))
    return (
        <ul>
            {exercises}
        </ul>
    );
}

export default WorkoutList;