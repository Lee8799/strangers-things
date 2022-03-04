import { useNavigate, useParams } from "react-router-dom"
import { useState } from "react";
import { callApi } from "../api";

const update = ({posts, setPosts}) => {
  const [title, setTitle] = useState([]);
  const [description, setDescription] = useState ([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    console.log('title, description: ', title, description);
    console.log('postId: ', postId);
     const response = await fetch (`https://strangers-things.herokuapp.com/api/2110-vpi-web-pt/posts/ ${postId}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'Application/json',
      },
      description: JSON.stringify({
        title,
        description,

      })
    });
    const data = await response.json();
    console.log ('data: ', data);
    if (data && data.title) {
      const newPosts = posts.map(post => {
        if (post.id === postId) {
          return data;
        } else {
          return post;
        }
      });
      setPosts (newPosts);
      setTitle('');
      setDescription('');

    }
  }
}

 export default update;