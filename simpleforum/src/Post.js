import { Link } from "react-router-dom";
import React from 'react'

const appendLeadingZeroes = (value) => {
    if (value <= 9) {
        return "0" + value;
    }
    return value;
};

const convertDate = (date) => {
    let current_datetime = new Date(date);
    let formatted_date =
        current_datetime.getFullYear() +
        "-" +
        appendLeadingZeroes(current_datetime.getMonth() + 1) +
        "-" +
        appendLeadingZeroes(current_datetime.getDate()) +
        " " +
        appendLeadingZeroes(current_datetime.getHours()) +
        ":" +
        appendLeadingZeroes(current_datetime.getMinutes()) +
        ":" +
        appendLeadingZeroes(current_datetime.getSeconds());
    return formatted_date;
};

const Post = ({ post }) => {
    const { _id, author, title, content, lastUpdated, responses } = post;
    const date = convertDate(lastUpdated);

    return (
        <Link
            to={`/postRoutes/${_id}`}
            state={post}
            style={{ textDecoration: "none" }}
        >
            <div className="post-container">
                <p>{title.length < 50 ? title : title.substring(0, 50) + "..."}</p>
                <p>{author}</p>
                <p>{responses.length}</p>
                <p>{date}</p>
            </div>
        </Link>
    );
};

export default Post;
