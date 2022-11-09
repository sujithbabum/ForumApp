import { useNavigate } from "react-router-dom";
import { AppState } from "./AppContext";
import React from 'react'

const SearchPanel = ({ search }) => {
    const navigate = useNavigate();
    const { userName } = AppState();

    const handleCreatePost = () => {
        if (userName) navigate("createPost");
        else navigate("login");
    };

    return (
        <div className="search-container">
            <div>
                <input
                    onChange={search}
                    type="text"
                    className="input-search"
                    placeholder="search..."
                />
            </div>
            <button onClick={handleCreatePost} id="login-btn">
                Create Post{" "}
            </button>
        </div>
    );
};

export default SearchPanel;
