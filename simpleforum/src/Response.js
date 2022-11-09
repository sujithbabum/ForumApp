import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { AppState } from "./AppContext";

const Response = ({ id_ }) => {
    const navigate = useNavigate();
    const { userName } = AppState();
    const handleClick = async (content) => {

        var seen = [];
        const requestContent = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(
                {
                    name: userName,
                    content: content,
                    _id: id_,
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
        await fetch("/postRoutes/postComment", requestContent).then((_) => {
            navigate("/");
        });
        // .catch((err) => console.log(err));
    };

    const [content, setContent] = useState("");

    return (
        <div className="response-container">
            <h2>Add a comment</h2>
            <textarea
                value={content}
                onChange={(event) => setContent(event.target.value)}
            />
            <Link to="/"><button className="response-button" onClick={() => handleClick(content)}>Post</button></Link>
        </div>
    );
};

export default Response;
