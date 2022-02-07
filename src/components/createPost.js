import React, {useState} from 'react'
import { useHistory } from "react-router-dom";
import { callApi } from '../util';


const createPost = (props) => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('')
  

  const { token, setPosts } = props
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const response = await fetch ('https://strangers-things.herokuapp.com/api/2110-vpi-web-pt/posts', {
      url: '/posts',
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
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
    setPrice('');
  }
}
return <>
    {
        token &&
        <div>
            <h1>Create New Post</h1>
            <form onSubmit={handleAdd}>
                <fieldset>
                    <label>Title: </label>
                    <input type="text" placeholder="*title*" value={title} onChange={(event) => {setTitle(event.target.value)}}></input>
                </fieldset>
                <fieldset>
                    <label>Price: </label>
                    <input type="text" placeholder="price" value={price} onChange={(event) => {setPrice(event.target.value)}}></input>
                </fieldset>
                <fieldset>
                    <label>Description: </label>
                    <input type="text" placeholder="description" value={description} onChange={(event) => {setDescription(event.target.value)}}></input>
                </fieldset>
                <fieldset>
                    <label>Location: </label>
                    <input type="text" placeholder="location" value={location} onChange={(event) => {setLocation(event.target.value)}}></input>
                </fieldset>
                <fieldset>
                    <button className="newpost-submit" type="submit">Submit</button>
                </fieldset>
            </form>
        </div>    
    }
    </>


export default createPost;
