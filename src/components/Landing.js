import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');

    const handleUserInput = event => {
        setUser(event.target.value)
    };

    const handlePassInput = event => {
        setPass(event.target.value)
    };

    return (
        <body>
            <heading>
                <h1>Welcome to fitness app!</h1>
            </heading>
            <main>
                <form>
                    <legend>An app that tracks your workouts, sets, reps and notes</legend>
                    <label for="user">User name:</label>
                    <input type="text" name="user" value={user} onChange={handleUserInput} /><br/>

                    <label for="pass">Password:</label>
                    <input type="text" name="pass" value={pass} onChange={handlePassInput} />
                </form>
                <Link to='/tracker'>
                    <button>Start crushing it!</button>
                </Link>
            </main>
        </body>
    )
}

export default Landing;