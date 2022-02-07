import React from 'react';
import { useParams } from 'react-router-dom';

const PostView = ({posts, token, fetchPosts}) => {
  
    // console.log('posts', posts)
    const { postId } = useParams();
    console.log('postId', postId);
    const postResp = posts.find(post => post._id === postId);
    console.log('post: ', postResp)
    return <>
            {
                postResp && postResp.messages && postResp.messages.map(message => <div key={message._id}>{message.fromUser.username}: {message.content}</div>)
            }
            <MessageForm post={postResp} token={token} fetchPosts={fetchPosts} />
       
    </>
}

export default viewPost;