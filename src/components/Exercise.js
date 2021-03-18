import React, {useState} from 'react';

const Exercise = (props) => {
    // const [value, setValue] = useState('');
    // const [pounds, setPounds] = useState('');
    // const [kilograms, setKilgrams] = useState('');
    // const [weight, setWeight] = useState ('');

    // const handleScale = () => {

    // }

    // const weightConversion = (weight) => {
    //     if (scale == 'lbs') {
    //         weight / 2.205
    //     } else {
    //         weight * 2.205
    //     }
    //     Math.floor
    // };



    return(
        <form>
            <label for="Exercise">Exercise:</label>
            <input type="text" name="Exercise" value="" /><br/>

            <label for="Previous">Previous:</label>
            <input type="text" name="Previous" value="Previous" /> {props.Imperial ? 'lbs' : 'Kilos'}<br/>

            <label for="Weight">Weight:</label>
            <input type="text" name="Weight" value="" /> {props.Imperial ? 'lbs' : 'Kilos'}<br/>

            <label for="Set">Set:</label>
            <input type="text" name="Set" value="" /><br/>

            <label for="Reps">Reps:</label>
            <input type="text" name="Reps" value="" /><br/>
        </form>
    );
}

export default Exercise;