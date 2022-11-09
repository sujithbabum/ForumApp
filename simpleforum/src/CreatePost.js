import { Link, useNavigate } from "react-router-dom";
import Menubar from "./Menubar";
import React, { useState } from "react";
import { AppState } from "./AppContext";

const CreatePost = () => {
    const navigate = useNavigate();
    const { userName } = AppState();
    const handleClick = async (title, content) => {
        var seen = [];
        const requestContent = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(
                {
                    author: userName,
                    title: title,
                    content: content,
                    responses: [],
                },
                (key, val) => {
                    if (val != null && typeof val == "object") {
                        if (seen.indexOf(val) >= 0) {
                            return;
                        }
                        seen.push(val);
                    }
                    return val;
                }
            ),
        };
        await fetch("/postRoutes/createPost", requestContent).then((_) => {
            navigate("/");
        });
    };
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    return (
        <>
            <Menubar buttonValue={"Login"} linkValue={"login"} />
            <div className="create-post-container">
                <h2>Create New Post</h2>
                <p>Title</p>
                <input
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    type="text"
                    placeholder="Please enter a title"
                />

                <p>Content</p>
                <textarea
                    value={content}
                    onChange={(event) => setContent(event.target.value)}
                />
                <Link to="/">
                    <button
                        id="create-post-btn"
                        onClick={() => handleClick(title, content)}
                    >
                        Post
                    </button>
                </Link>
            </div>
        </>
    );
};

export default CreatePost;
