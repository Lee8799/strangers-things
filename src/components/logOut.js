import React from 'react';
import { Link } from 'react-router-dom';


const logOut = ({setToken}) => {
    return <Link className="main-link" to="/" onClick={() => setToken('')}>LOGOUT</Link>
}

export default logOut;