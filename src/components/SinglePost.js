import React, { useState } from "react";

const SendPost = async (props) => {
    const { post, message } = props;

    return (
        <div className="send-post">
            <div>
                {post.title}
            </div>
            <div>
                {message.content}
            </div>
            <div>
                {message.username}
            </div>
        </div>
    )

}

export default SendPost;