import React from 'react';
import Nav from './Nav';

class Tracker extends React.Component{
    render() {
        return (
            <body>
                <heading>
                    <h2>Date and duration of workout</h2>
                </heading>
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
                <hr/>
                <secton>
                    <button>Start rest timer</button>
                    <button>Finish workout</button>
                </secton>
                <nav>
                    <Nav />
                </nav>
            </body>
        );
    }
}

export default Tracker;