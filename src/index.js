
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

export { default as Register } from './Register';

const cohort = '2110-USD-RM-WEB-PT';
const BASE_URL = `https://strangers-things.herokuapp.com/api/${ cohort }`;

import {
    Auth,
    login,
    logOut,
    PostForm,
    PostList,
    Register,
    welcome,
    message,
    update,
    NavBar

} from './components';

const App = (props) => {
    return (
    <BrowserRouter>
        <NavBar />
        
        <section id="postsection">
            
            <Route path="/posts">

                <Posts />
            </Route>
            <Route exact path="/">
            
                <Posts />
            </Route>
            <Route path="/register">
                <Register />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/profile">
                {
                    localStorage.getItem("account-token") ?
                    <>
                    <button className="logout-button" onClick={(event) => {
                        localStorage.removeItem("account-token");
                        event.preventDefault();
                        window.location.reload(false);
                        }}>Logout</button>
                    <section>
                        <Messages />
                    </section></>
                    : <>
                    <section>
                        <Register />
                    </section>
                    <br></br>
                    <div className="seperator">OR</div>
                    <br></br>
                    <section>
                        <Login />
                    </section>
                    </>
                }
            </Route>
        </section>
    </BrowserRouter>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById("app")
);