import React from 'react';
import ExerciseItem from './ExerciseItem';

const WorkoutList = props => {

    const items = props.items.map((item, i) => (
        <ExerciseItem
            key={i}
            name={item}
            handleClick={props.handleClick}
            onRemoveItem={props.onRemoveItem}
        />
    ))

    return(
        <ol>
            {items}
        </ol>
    );
}

export default WorkoutList;