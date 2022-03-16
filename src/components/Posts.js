import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { SinglePost, PostForm } from './index';

const BASE_URL = `https://strangers-things.herokuapp.com/api/${ cohort }`;


const Posts = () => {
    const [allPosts, setAllPosts] = useState([]);
    const [form, setForm] = useState(false);



    const fetchAllPosts = async () => {
        try {
            const response = await fetch(`${BASE_URL}/posts`);
            const data = await response.json();
            console.log(data);
            setAllPosts(data.data.posts);
        }
        catch (err) {
            console.log(err);
        }}
    useEffect(() => {
        fetchAllPosts();
    }, []);
    let totalPosts = null;

    if (allPosts && allPosts.length) {
        totalPosts = <div>
            {
                allPosts.map((post) => 
                    <SinglePost key={post._id} post={post} />
                    )
            }
            </div>

    }

    return (
        <div className="app-page-view">
            <h1>
                Posts
            </h1>
            {
                localStorage.getItem("account-token") ? 
                form ?
                <PostForm fetchAllPosts={fetchAllPosts} setForm={setForm} />
                : <button className="create-post-button" onClick={() => setForm(true)}>Create New Post</button>
                : null
            }
            {totalPosts}
        </div>
        )

}


export default Posts;