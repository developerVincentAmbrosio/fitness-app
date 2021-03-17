import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <body>
            <heading>
                <h1>Welcome to fitness app!</h1>
            </heading>
            <main>
                <h2>An app that tracks your workouts, sets, reps and notes</h2>
                <Link to='/tracker'>
                    <button>Start crushing it!</button>
                </Link>
            </main>
        </body>
    )
}

export default Landing;