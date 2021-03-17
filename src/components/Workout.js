import React from 'react';
import Exercise from './Exercise';

const Workout = (props) => {

    const exercises = props.exercises.map((exercise, i) => (
        <Exercise
         key={i}
         name={exercise}
        />
    ))
    return (
        <ul>
            <li>{exercises}</li>
        </ul>
    );
}

export default Workout;

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