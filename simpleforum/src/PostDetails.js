import { useLocation } from "react-router-dom";
import Comment from "./Comment";
import Menubar from "./Menubar";
import Response from "./Response";
import React from 'react'

const PostDetails = () => {
    const post = useLocation().state;

    const {
        _id,
        author,
        title,
        content,
        lastUpdated,
        responses,
    } = post;
    return (
        <>
            <Menubar buttonValue={"Login"} linkValue={"login"} />
            <div className="post-details-container">
                <h2>{title}</h2>
                <div className="topic-container">
                    <p>{author}</p>
                    <p>{content}</p>
                </div>
                {responses.map((response) => (
                    <Comment response={response} key={response.id} />
                ))}
                <Response id_={_id} />
            </div>
        </>
    );
};

export default PostDetails;
