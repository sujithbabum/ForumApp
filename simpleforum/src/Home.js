import PostsHeader from "./PostsHeader";
import Post from "./Post";
import SearchPanel from "./SearchPanel";
import React, { useState } from "react";

const Home = ({ data }) => {
    const [posts, setPost] = useState(data);

    const handleSearch = (event) => {
        let searchValue = event.target.value.toLowerCase();
        setPost(
            data.filter((post) => {
                return (
                    post.author.toLowerCase().includes(searchValue) ||
                    post.title.toLowerCase().includes(searchValue)
                );
            })
        );
    };

    return (
        <main id="home">
            <div className="home-container">
                <div className="forum-list">
                    <SearchPanel
                        search={handleSearch}
                    />
                    <PostsHeader />
                    {posts.map((post) => {
                        return <Post post={post} key={post._id} />;
                    })}
                </div>
            </div>
        </main>
    );
};

export default Home;