import React, {useState} from 'react';
import AddSetInfo from './AddSetInfo';
import ExerciseInput from './ExerciseInput';
//import Dropdown from './Dropdown';

const ExerciseItem = props => {

    // const handleRemoveExercise = (item) => {
    //     props.onRemoveItem
    // };


    return(
            <li>
                {props.name}
                <button type="button"
                   // onClick={handleRemoveExercise}
                >Remove
                </button>
                <AddSetInfo />
            </li>
    );
}

export default ExerciseItem;

            {/* <Dropdown title="reps" items={items}/>
            <Dropdown title="sets " items={items}/> */}  