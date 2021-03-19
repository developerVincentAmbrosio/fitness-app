import React, {useState} from 'react';
import ExerciseInput from './ExerciseInput';
//import Dropdown from './Dropdown';

const ExerciseItem = props => {
//    const [items] = useState(['1','2','3','4']); //for dropdown
    const [sets, setSets] = useState('');
    const [reps, setReps] = useState('');
    const [previousWeight, setPreviousWeight] = useState('');
    const [weight, setWeight] = useState('');

    return(
            <li 
                onClick={()=> props.handleClick(props.name)}>
                {props.name}
                <p>Weight used:</p>
                <ExerciseInput 
                    handleSubmit = {(weight) => {
                    setWeight();
                }} />
            </li>
    );
}

export default ExerciseItem;

            {/* <Dropdown title="reps" items={items}/>
            <Dropdown title="sets " items={items}/> */}  