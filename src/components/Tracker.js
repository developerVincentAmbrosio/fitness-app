import React from 'react';
import Moment from 'react-moment';
import Stopwatch from './Stopwatch';
import Nav from './Nav';


class Tracker extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            currentDate: Date().toLocaleString(),
            runtime: 0,
            isRunning: false,
            isPaused: false,
        };
    }
    render() {
        return (
            <body>
                <heading>
                    <h2><Moment format="M/D/YY">{ this.state.currentDate }</Moment></h2>
                    <Stopwatch />
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