import React, { useState } from 'react';


const SingleMessage = (props) => {
    const { post } = props;
    const [edit, setEdit] = useState(false);
    const [newTitle, setNewTitle] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const [newPrice, setNewPrice] = useState('');
    const [newLocation, setNewLocation] = useState('');
    const [newWillDeliver, setNewWillDeliver] = useState(false);
    const [send, setSend] = useState(false);

    const deletePost = async () => {
        try {
            const response = await fetch(`${BASE_URL}/posts/${post._id}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem("account-token")}`
                }

            })
            const data = await response.json();
        }
        catch (err) {
            console.log(err);
        }
    }
    const editPost = async () => {
        try {const response = await fetch(`${BASE_URL}/posts/${post._id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application.json',
                'Authorization': `Bearer ${localStorage.getItem("account-token")}`
            },
            body: JSON.stringify({
                post: {
                    title: newTitle,
                    description: newDescription,
                    price: newPrice,
                    location: newLocation,
                    willDeliver: newWillDeliver
                }
            })
        });
            const data = await response.json();

            setNewTitle('');
            setNewDescription('');
            setNewPrice('');
            setNewLocation('');
            setNewWillDeliver(false);
            fetchAllPosts();
        }
        catch (err) {
            console.log(err);
        }
    }
    return (
        !edit ? <div className="single-post">
            <div>
                {post.title}
            </div>
            <div>
                Description: {post.description}
            </div>
            <div>
                Price: {post.price}
            </div>
            <div>
                Location: {post.location}
            </div>
            <div>
                Will Deliver?: {
                post.willDeliver ?
                "Yes" : "No"
                }
            </div>
            {
                post.isAuthor ? <div>
                    <button onClick={deletePost}>Delete Post</button>
                    <button onClick={() => setEdit(true)}>Edit Post</button>
                    </div> 
                : 
                localStorage.getItem("account-token") ? 
                send ? 
                <SendMessage key={post._id} post={post} />
                : <button onClick={() => setSend(true)}>Send Message</button>
                : null
            }
        </div>
        : <div>
            <form id="edit-post">
                <input type="text" value={newTitle} placeholder="New title" onChange={(event) => setNewTitle(event.target.value)}>

                </input>
                <textarea type="text" value={newDescription} placeholder="New description" onChange={(event) => setNewDescription(event.target.value)}>

                </textarea>
                <input type="text" value={newPrice} placeholder="New price" onChange={(event) => setNewPrice(event.target.value)}>

                </input>
                <input type="text" value={newLocation} placeholder="New location" onChange={(event) => setNewLocation(event.target.value)}>

                </input>
                <label>Will Deliver?</label>
                <input type="checkbox" value={newWillDeliver} onChange={() => willDeliver == false ? setNewWillDeliver(true) : setNewWillDeliver(false)}>

                </input>
                <button onClick={editPost}>
                    Save Changes
                </button>
            </form>
        </div>
    )
}

export default SingleMessage;