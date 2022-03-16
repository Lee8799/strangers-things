import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';


const NavBar = () => {
    const [dropdown, setDropdown] = useState(false);

    return(
    <div id="navbar">
        <Route path="/profile">
            <div id="posts">
        <Link to="/posts" style={{ textDecoration: 'none' }}>Posts</Link>
            </div>
        </Route>
        <Route path="/me">
            <div id="posts">
        <Link to="/posts" style={{ textDecoration: 'none' }}>Posts</Link>
            </div>
        </Route>
        <Route path="/register">
            <div id="posts">
        <Link to="/posts" style={{ textDecoration: 'none' }}>Posts</Link>
            </div>
        </Route>
        <Route path="/login">
            <div id="posts">
        <Link to="/posts" style={{ textDecoration: 'none' }}>Posts</Link>
            </div>
        </Route>

        <div id="title">
            Stranger's Things
        </div>

        <Route exact path="/">
            <div className="dropdown-container" onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}>
                <div id="profile">
                    <Link to="/profile" style={{ textDecoration: 'none' }}>Profile</Link>
                </div>
                <div id="dropdown">
                    {
                        dropdown ?
                        !localStorage.getItem("account-token") ?
                        <>
                        <div>
                            <Link to="/register" style={{ textDecoration: 'none' }}>Register</Link>
                        </div>
                        <div>
                            <Link to="/login" style={{ textDecoration: 'none' }}>Login</Link>
                        </div> </>
                        : <>
                        <div>
                            <Link to="/me" style={{ textDecoration: 'none' }}>Messages</Link>
                        </div>
                        <a href="#" onClick={(event) => {
                            localStorage.removeItem("account-token");
                            event.preventDefault();
                            window.location.reload(false);
                        }}>
                            Logout
                        </a>
                        </>
                        : null
                    }
                </div>
            </div>
        </Route>
        <Route path="/posts">
            <div className="dropdown-container" onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}>
                <div id="profile">
                    <Link to="/profile" style={{ textDecoration: 'none' }}>Profile</Link>
                </div>
                <div id="dropdown">
                    {
                        dropdown ?
                        !localStorage.getItem("account-token") ?
                        <>
                        <div>
                            <Link to="/register" style={{ textDecoration: 'none' }}>Register</Link>
                        </div>
                        <div>
                            <Link to="/login" style={{ textDecoration: 'none' }}>Login</Link>
                        </div> </>
                        : <>
                        <div>
                            <Link to="/me" style={{ textDecoration: 'none' }}>Messages</Link>
                        </div>
                        <a href="#" onClick={(event) => {
                            localStorage.removeItem("account-token");
                            event.preventDefault();
                            window.location.reload(false);

                        }}>
                            Logout
                        </a>
                        </>
                        : null
                    }
                </div>
            </div>
        </Route>
        <Route path="/me">
            <div className="dropdown-container" onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}>
                <div id="profile">
                    <Link to="/profile" style={{ textDecoration: 'none' }}>Profile</Link>
                </div>
                <div id="dropdown">
                    {
                        dropdown ?
                        !localStorage.getItem("account-token") ?
                        <>
                        <div>
                            <Link to="/register" style={{ textDecoration: 'none' }}>Register</Link>
                        </div>
                        <div>
                            <Link to="/login" style={{ textDecoration: 'none' }}>Login</Link>
                        </div> </>
                        : <>
                        <a href="#" onClick={(event) => {
                            localStorage.removeItem("account-token");
                            event.preventDefault();
                            window.location.reload(false);

                        }}>
                            Logout
                        </a>
                        </>
                        : null
                    }
                </div>
            </div>
        </Route>
        <Route path="/register">
            <div className="dropdown-container" onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}>
                <div id="profile">
                    <Link to="/profile" style={{ textDecoration: 'none' }}>Profile</Link>
                </div>
                <div id="dropdown">
                    {
                        dropdown ?
                        !localStorage.getItem("account-token") ?
                        <>
                        
                        <div>
                            <Link to="/login" style={{ textDecoration: 'none' }}>Login</Link>
                        </div> </>
                        : <>
                        <div>
                            <Link to="/me" style={{ textDecoration: 'none' }}>Messages</Link>
                        </div>
                        <a href="#" onClick={(event) => {
                            localStorage.removeItem("account-token");
                            event.preventDefault();
                            window.location.reload(false);

                        }}>
                            Logout
                        </a>
                        </>
                        : null
                    }
                </div>
            </div>
        </Route>
        <Route path="/login">
            <div className="dropdown-container" onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}>
                <div id="profile">
                    <Link to="/profile" style={{ textDecoration: 'none' }}>Profile</Link>
                </div>
                <div id="dropdown">
                    {
                        dropdown ?
                        !localStorage.getItem("account-token") ?
                        <>
                        <div>
                            <Link to="/register" style={{ textDecoration: 'none' }}>Register</Link>
                        </div>
                        </>
                        : <>
                        <div>
                            <Link to="/me" style={{ textDecoration: 'none' }}>Messages</Link>
                        </div>
                        <a href="#" onClick={(event) => {
                            localStorage.removeItem("account-token");
                            event.preventDefault();
                            window.location.reload(false);

                        }}>
                            Logout
                        </a>
                        </>
                        : null
                    }
                </div>
            </div>
        </Route>
    </div>
    )
}

export default NavBar;