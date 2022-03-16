import React, { useState } from "react";

const BASE_URL = `https://strangers-things.herokuapp.com/api/${ cohort }`;

const SendMessage = (props) => {
    const { post } = props;
    const [content, setContent] = useState('')
    const submitMessage = async () => {
try {
    const response = await fetch(`${BASE_URL}/posts/${post_id}/messages`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem("account-token")}`
                },
            body: JSON.stringify({
                message: {
                content: content
                    }
                })
            });
            const data = response.json();
            console.log(data, content);
            setContent('');
        }
        catch (err) {
            console.log(err);
        }
    }

return (
    <div>
        <form>
        <textarea type="text" value={content} placeholder="Message" onChange={(event) => setContent(event.target.value)}>

        </textarea>
            <br></br>
            <button onClick={submitMessage}>Submit Message</button>
        </form>
    </div>
        )
}

export default SendMessage;