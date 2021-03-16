import React, {useState, useRef } from 'react';

const WorkoutList = (props) => {
    const exercises = props.itmes.map((item, i) => (
        <ListItem
         key={id}
         name={item}
        />
    ))
    return (
        <ul>
            {items}
        </ul>
    );
}

export default WorkoutList;