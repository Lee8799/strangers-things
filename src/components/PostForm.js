import React, { useState } from 'react';


const BASE_URL = `https://strangers-things.herokuapp.com/api/${ cohort }`;


const PostForm = (props) => {
    const { fetchAllPosts, setForm } = props;
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('');
    const [willDeliver, setWillDeliver] = useState(false);

    const handleSubmit = async (event) => {

        event.preventDefault();

        const locallySourcedToken = localStorage.getItem("account-token");
        
        try{ 
            const response = await fetch(`${BASE_URL}/posts`, {
                method: "POST",
                headers: {
                    'Content-Type': "application/json",
                    'Authorization': `Bearer ${locallySourcedToken}`
                },
                body: JSON.stringify({
                    post: {
                        title: title,
                        description: description,
                        price: price,
                        location: location,
                        willDeliver: willDeliver
                    }
                })
            })
            const data = response.json();

            fetchAllPosts();
            setTitle('');
            setDescription('');
            setPrice('');
            setLocation('');
            setWillDeliver(false);
            setForm(false);
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <form id="create-post" onSubmit={handleSubmit}>
                <input type="text" value={title} placeholder="Title" onChange={(event) => setTitle(event.target.value)}>

                </input>
                <br></br>
                <textarea type="text" value={description} placeholder="Description" onChange={(event) => setDescription(event.target.value)}>

                </textarea>
                <br></br>
                <input type="text" value={price} placeholder="Price" onChange={(event) => setPrice(event.target.value)}>

                </input>
                <br></br>
                <input type="text" value={location} placeholder="Location" onChange={(event) => setLocation(event.target.value)}>

                </input>
                <br></br>
                <label>Will Deliver?</label>
                <input type="checkbox" value={willDeliver} onChange={() => willDeliver == false ? setWillDeliver(true) : setWillDeliver(false)}>

                </input>
                <br></br>
                <button type="submit">Create Post</button>
            </form>
        </div>
    )
}

export default PostForm;