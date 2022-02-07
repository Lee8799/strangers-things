import React from 'react';
import { useHistory } from 'react-router-dom';
import { callApi } from '../util';

const MyProfile = ({ token, messages, user, setMesaages}) => {
    const history = useHistory();

    const handleSubmit = async () => {
        const messageResp = await callApi({
            url: 'https://strangers-things.herokuapp.com/api/2110-vpi-web-pt/posts/users/me',
            token,
        });
        setMesaages(messageResp.data.messages);    
    }
    if(!token) {
        history.push('/')
    }

    return <>
    <h1>My Profile</h1>
    <form onSubmit={(ev) => {
        ev.preventDefault();
        handleSubmit()
    }}>
        <button type="submit">Click for Messages</button>
    </form>
    <h2>Sent Messages</h2>
    {
        token ? 
        messages.map((message, idx) => {
            return <div key={idx} >
                {
                    user === message.fromUser.username ?
                    <>
                    <div>
                        <div><b>Product Title: </b>"{message.post.title}" </div>
                        <div><b>Product ID: </b>{message.post._id}</div>
                    </div>
                    </>
                    : ''
                }
            </div>
        }) 
        : ''
    }
    <h2>Received Messages</h2>
    {
        token ? 
        messages.map((message, idx) => {
            return <div key={idx} >
                {
                    user !== message.fromUser.username ?
                    <>
                        <div><b>Product Title: </b>"{message.post.title}" </div>
                        <div><b>Product ID: </b>{message.post._id}</div>
                        <div><b>Message: </b>{message.content}</div> 
                        <hr></hr>
                    </>
                    : ''
                }
            </div>
        }) : ''
    }
    </>        
}
export default MyProfile;