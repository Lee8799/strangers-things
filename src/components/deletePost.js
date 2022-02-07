import React, {useState} from 'react'
import { useHistory } from "react-router-dom";
import { callApi } from '../util';

const Create = ({posts, setPosts}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState ('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const response = await fetch ('https://strangers-things.herokuapp.com/api/2110-vpi-web-pt/posts', {
      method: 'DELETE',
      headers: {
        'Content-type': 'Application/json',
      },
      description: JSON.stringify({
        title,
        description,

      })
    });
    const data = await response.json();
    console.log ('data ', data);
    setPosts([data, ...post]);
    setTitle('');
    setDescription('');
  }
}

export default deletePost;