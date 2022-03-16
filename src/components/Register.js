import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const BASE_URL = `https://strangers-things.herokuapp.com/api/${ cohort }`;



const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch(`${BASE_URL}/users/register`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user: {
                    username: username,
                    password: password,
                }
            })
        });
        const { data: { token } } = await response.json();

        localStorage.setItem("account-token", token);

        setUsername('');
        setPassword('');
        window.location.reload(false);


    }

    const locallySourcedToken = localStorage.getItem("account-token");

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="New Username" value={username} onChange={(event) => setUsername(event.target.value)}>

                </input>
                <br></br>
                <input type="text" placeholder="New Password" value={password} onChange={(event) => setPassword(event.target.value)}>

                </input>
                <br></br>
                <button type="submit">
                    Create New Account
                </button>
            </form>
            <div>
                {
                    locallySourcedToken && locallySourcedToken.length ? <div>You're logged in!</div> : null
                }
            </div>
        </div>

    )
}


export default Register;