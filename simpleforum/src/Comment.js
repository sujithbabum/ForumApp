import React from 'react'

const Comment = ({ response }) => {
    return (
        <div className="message-container">
            <p>{response.author}</p>
            <p>{response.content}</p>
        </div>
    );
};

export default Comment;
