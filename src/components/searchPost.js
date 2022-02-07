import React, { useState } from 'react';

const Search =  ({posts, setPosts, fetchPosts}) => {
    const [searchTerm, setSearchTerm] = useState('');

    const postMatches = (post, text) => {
        let check = post.includes(text);
        return check;
    }
    const handleSubmit = () => {
        const filteredPosts = posts.filter(post => postMatches(post.title.toLowerCase(), searchTerm));
        setPosts(filteredPosts);
        if (!searchTerm.length) {
            fetchPosts();
        }
    }

    return <>
        <form className="search-form" onSubmit={(event) => {
            event.preventDefault();
            handleSubmit();
        }}>
            <input type="text" placeholder="search by title" className="search-input" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)}></input>
            <button type="submit" className="search-btn">Search</button>
        </form>
    </>
}

export default searchPost;