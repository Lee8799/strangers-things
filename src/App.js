
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import deletePost from './Components/deletePost';
import login from './Components/login';
import welcomePage from './Components/welcomePage';
import logOut from './Components/logOut';
import createPost from './Components/createPost';
import viewPost from './Components/viewPost';
import myProfile from './Components/myProfile';
import searchPost from './Components/searchPost';


import '../src/style.css'
import { callApi } from './api';

const { REACT_APP_BASE_URL } = process.env;

const App = () => {
    const [posts, setPosts] = useState([]);
    const [token, setToken] = useState('');
    const [user, setUser] = useState('');
    const [postId, setPostId] = useState('');
    const [messages, setMessages] = useState([]);
    
    const fetchPosts = async () => {
        const response = await callApi({
            url: 'https://strangers-things.herokuapp.com/api/2110-vpi-web-pt/posts',
            token
        });
        const allPosts = response.data.posts;
        if(allPosts) setPosts(allPosts);
    }
    
    useEffect(() => {
        try {
            fetchPosts();
            } catch (error) {
                console.log(error);
            }
        }, [token])

  return (
    <BrowserRouter>
        <div id="container">
            <div className="navbar">
                <Link className="main-link" to="/">HOME</Link>
                <Link className="main-link" to="/posts">POSTS</Link>
                {
                    token && <Link className="main-link" to="/profile">PROFILE</Link>
                }
                {
                    token ? <Logout setToken={setToken}/> : <Link className="main-link" to="/account/:method">LOGIN/REGISTER</Link>
                }
            </div>
            <Route exact path="/">
                <Home username={user} token={token} posts={posts}/>
            </Route>
            <Route exact path="/posts">
                <Search posts={posts} setPosts={setPosts} fetchPosts={fetchPosts}/>
                <DeletePosts posts={posts} token={token} fetchPosts={fetchPosts} setPostId={setPostId} />
            </Route>
            <Route exact path="/addpost">
                <AddPost token={token} setPosts={setPosts} />
            </Route>
            <Route exact path="/posts/:postId">
                <PostView posts={posts} token={token} fetchPosts={fetchPosts}/>
            </Route>
            <Route exact path="/profile">
                <MyProfile token={token} messages={messages} setMesaages={setMessages} user={user}/>
            </Route>
            <Route exact path="/account/:method">
                <Link className="links" to="/account/login">Login</Link> 
                <Link className="links" to="/account/register">Register</Link>
                <AccountForm setToken={setToken} setUser={setUser}/>   
            </Route>
        </div>
    </BrowserRouter>
  )
}
ReactDOM.render(
  <App />,
  document.getElementById('App'),
);