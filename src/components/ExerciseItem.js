import React from 'react';
import AddSetInfo from './AddSetInfo';
//import Dropdown from './Dropdown';

const ExerciseItem = props => {


    return(
            <li>
                {props.name}&nbsp;&nbsp;
                {/* <AddSetInfo /> */}
                <br/>
                <button>Remove</button>
                
            </li>
    );
}

export default ExerciseItem;

            {/* <Dropdown title="reps" items={items}/>
            <Dropdown title="sets " items={items}/> */}  