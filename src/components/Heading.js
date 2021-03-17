import React, {useState} from 'react';
import Moment from 'react-moment';
import Stopwatch from './Stopwatch';

const Heading = () => {
    const [currentDate] = useState(Date().toLocaleString());

    return(
        <heading>
            <h2><Moment format="M/D/YY">{currentDate}</Moment></h2>
            <Stopwatch />
        </heading>
    );
}

export default Heading;