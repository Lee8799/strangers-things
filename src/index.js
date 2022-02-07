import React, {useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link } from 'react-router-dom';
import  {createPost, deletePost, Login, register, update, viewPost, welcomePage } from './components';
import '../src/style.css';
import { callApi } from './util';

const { REACT_APP_BASE_URL } = process.env;

const App = () => {
  const [posts, setPosts] = useState([]);
    const [token, setToken] = useState('');
    const [user, setUser] = useState('');
    const [postId, setPostId] = useState('');
    const [messages, setMessages] = useState([]);
    
    const fetchPosts = async () => {
        const response = await callApi({
            url: '/posts',
            token
        });
        const allPosts = response.data.posts;
        if(allPosts) setPosts(allPosts);
    }

ReactDOM.render(
  <App/>,
  document.getElementById('App'),
)};