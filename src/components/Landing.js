import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Landing.css';

 const Landing = () => {
    const [state, setState] = useState ({
        user: {
            'id': '',
            'first_name': '',
            'last_name:': '',
            'email': '',
            'user_pass': '',
            'is_active': ''
        },
        isLoaded: false,
        hasError: null,
        query: []
    });

    const handleChange = event => {
        event.preventDefault()
        const value = event.target.value
        setState({
            ...state,
            [event.target.name]: value
        })
    };

    // useEffect(() => {
    //     fetch(`http://localhost:8000/api/user?q=email=${state.email}&user_pass=${state.user_pass}`)
    //         .then(res => res.json())
    //         .then(res => this.setState({ user })
    //         .cath(() => this.setState({isLoaded: true}))
    //         )
    // }, []);

    // if (state.hasError) {
    //     return <div>Error: {state.hasError.message}</div>
    // } else if (!state.isLoaded) {
    //     return <div>Loading...</div>
    // };


    const validate = (res) => {
        if (res.user.is_active) {
            res.user.find(item => res.user.item === state.user.item)
        }
    };

    const validateError = `There is a problem with the user name and/or password. 
                           Please try entering your information again`;

    return (
        <body id="landing-bkgd">
            <heading>
                <h1>Welcome to fitness app!</h1>
            </heading>
            <main id="landing-bkgd">
                <div>{validate ? '' : validateError }</div>
                <form>
                    <legend>An app that tracks your workouts, sets, reps and notes</legend>
                    <hr/>
                    <label for="user">User name:&nbsp;</label>
                    <input 
                        type="text"
                        name="email"
                        value={state.email}
                        // onChange={handleChange}
                    /> <hr/>

                    <label for="pass">Password:&nbsp;</label>
                    <input 
                        type="text"
                        name="user_pass"
                        value={state.user_pass}
                        // onChange={handleChange}
                    />
                </form>
                <hr/>
                <Link to='/tracker'>
                    <button onSubmit={handleChange}>Start crushing it!</button>
                </Link>
            </main>
        </body>
    )
}

export default Landing;