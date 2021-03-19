import React, { useState } from 'react';
import ExerciseItem from './ExerciseItem';

const WorkoutList = props => {

    const exercises = props.exercises.map((exercise, i) => (
        <ExerciseItem
            key={i}
            name={exercise}
            handleClick={props.handleClick}
        />
    ))

    return(
        <ol>
            <li>
                {exercises}
            </li>
        </ol>
    );
}

export default WorkoutList;

        {/* 
            const [exercises, setExercises] = useState(['bench press']);

            <secton>
                    <Workout exercises={exercises} />
                    <Exercise handleSubmit={(exercise) => {
                        setExercises(exercises.concat(exercise));
                        }}
                    /> 
            </secton>
        */}