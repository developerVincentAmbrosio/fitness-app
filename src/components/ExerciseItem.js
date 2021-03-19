import React, {useState} from 'react';
import Dropdown from './Dropdown';

const ExerciseItem = props => {
    const [items] = useState(['1','2','3','4']); //for dropdown
    const [sets, setSets] = useState('');
    const [reps, setReps] = useState('');
    const [previousWeight, setPreviousWeight] = useState('');
    const [weight, setWeight] = useState('');

    return(
        <>
            <li 
                onClick={()=> props.handleClick(props.name)}>
                {props.name}
                <p>Weight used:</p>
                {/* <form onSubmit={event => {
                    event.preventDefault()
                    props.handleSubmit(weight)
                    setWeight('');
                }}>
                </form>  */}
            </li>
            
            <Dropdown title="reps" items={items}/>
            <Dropdown title="sets " items={items}/>
        </>    
    );
}

export default ExerciseItem;