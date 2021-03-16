import React, {useState} from 'react';
import Moment from 'react-moment';
import Stopwatch from './Stopwatch';
import Accordion from './Accordion';
import Nav from './Nav';


const Tracker = () => {

    const [currentDate] = useState(Date().toLocaleString());
    
        return (
            <body>
                <heading>
                    <h2><Moment format="M/D/YY">{currentDate}</Moment></h2>
                    <Stopwatch />
                </heading>
                <br/>
                <secton>
                    <Accordion />
                    <button>Finish workout</button>
                </secton>
                <nav>
                    <Nav />
                </nav>
            </body>
        );
}

export default Tracker;