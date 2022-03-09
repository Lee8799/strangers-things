import { useState } from "react";
import { callApi } from "../api";


const PostForm = ({ token, posts, setPosts }) => {
  const blankPost = { title: '', description: '', price: '', location: '', willDeliver: false }
  const [post, setPost] = useState(blankPost);

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const { data: { post: newPost } } = await callApi({
        url: '/posts',
        method: 'POST',
        body: { post },
        token
      });
      setPosts([...posts, newPost]);
      setPost(blankPost);
    } catch (error) {
      console.error(error)

    }
  }

  return (
    <>
      <h2>Add Post</h2>
      <PostForm handleSubmit={handleAdd} post={post} setPost={setPost} />
    </>
  )
}

export default PostForm;