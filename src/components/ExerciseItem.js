import React, { useState } from 'react';
import AddSetInfo from './AddSetInfo';
//import Dropdown from './Dropdown';

const ExerciseItem = props => {

    // const items = props.items.map((item, i)=> (
    //     <AddSetInfo
    //         key={props.i}

    //     />
    // ))
    
    const [sets, setSets] = useState(0);
    const [startExercise, setStartExercise] = useState(false);

    const handleAddSets = (event) => {
        event.preventDefault()
        setStartExercise(true)
        setsCounter()
    };

    const setsCounter = () => {
        setSets(sets + 1)
        console.log(sets)
    };

    const setsDisplay = () => {
        return (startExercise ? <AddSetInfo /> : '')
    };

    return(
            <li>
                {props.name} &nbsp;&nbsp;
                <button onClick={handleAddSets}>Add Set</button> &nbsp;&nbsp;
                <button>Remove</button>
                <ul>
                    {setsDisplay()}
                </ul>   
            </li>
    );
}

export default ExerciseItem;

            {/* <Dropdown title="reps" items={items}/>
            <Dropdown title="sets " items={items}/> */}  