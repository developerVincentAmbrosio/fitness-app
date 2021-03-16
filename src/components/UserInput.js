import React, {useState, useRef } from 'react';

const UserInput = (props) => {
    const [value, setValue] = useState('');
    return(
        <form>
            <label for="Exercise">Exercise:</label>
            <input type="text" name="Exercise" value="" /><br/>

            <label for="Set">Set:</label>
            <input type="text" name="Set" value="" /><br/>

            <label for="Previous">Previous:</label>
            <input type="text" name="Previous" value="Previous" /><br/>

            <label for="Weight">Weight:</label>
            <input type="text" name="Weight" value="" /><br/>

            <label for="Reps">Reps:</label>
            <input type="text" name="Reps" value="" /><br/>

            <button>Add another set</button>
        </form>
    );
}

export default UserInput;