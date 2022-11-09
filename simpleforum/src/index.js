import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import CreatePost from "./CreatePost";
import PostDetails from "./PostDetails";
import AppContext from "./AppContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <AppContext>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/createPost" element={<CreatePost />} />
        <Route path="/postRoutes/:id" element={<PostDetails />} />
      </Routes>
    </BrowserRouter>
  </AppContext>
);