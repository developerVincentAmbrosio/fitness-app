import React, {useState} from 'react';

const Exercise = (props) => {
    const [userInput, setUserInput] = useState('');

    const setsWheel = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
    const repsWheel = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
                       '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];
    
    const [selectSets, setSelectSets] = useState(0);
    const [selectReps, setSelectReps] = useState(0);
     
    // const [pounds, setPounds] = useState('');
    // const [kilograms, setKilgrams] = useState('');
    // const [weight, setWeight] = useState ('');

    // const handleScale = () => {

    // }


    const handleUserInput = event => {
        setUserInput(event.target.value)
    };

    return(
        <form>
            <label for="Exercise">Exercise:</label>
            <input type="text" name="Exercise" value={userInput} onChange={handleUserInput} /><br/>

            <label for="Previous">Previous:</label>
            <input type="text" name="Previous" value="Prev" /> <br/>

            <label for="Weight">Weight:</label>
            <input type="text" name="Weight" value={userInput} onChange={handleUserInput} /> <br/>

            <label for="Set">Set:</label>
            
            <br/>

            <label for="Reps">Reps:</label>
            <input type="text" name="Reps" value={userInput} onChange={handleUserInput} /><br/>
        </form>
    );
}

export default Exercise;