import React from 'react';

const ExerciseItem = props => {
    return(
        <li onClick={()=> props.handleClick(props.name)}>{props.name}</li>

    );
}

export default ExerciseItem;