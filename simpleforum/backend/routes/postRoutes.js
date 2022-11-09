const express = require("express");
const router = express.Router();
const PostModel = require("../models/PostModel");


router.get("/", async (request, response) => {
    try {
        const allPosts = await PostModel.find();
        response.json(allPosts);
    } catch (error) {
        response.json({ message: error });
    }
});

router.post("/createPost", async (request, response) => {
    const newPost = new PostModel({
        author: request.body.author,
        title: request.body.title,
        content: request.body.content,
        responses: request.body.responses,
    });
    try {
        const savedPost = await newPost.save();
        response.json(savedPost);
    } catch (error) {
        response.json({ message: error })
    }
});

router.patch("/postComment", (request, response) => {
    const requestBody = request.body;
    PostModel.findOneAndUpdate(
        { _id: requestBody._id },
        {
            $push: {
                responses: {
                    author: requestBody.name,
                    content: requestBody.content,
                },
            },
        },
        { new: true },
        function (error, success) {
            if (error) {
                console.log(error);
            } else {
                console.log(success);
            }
        }
    );
});

module.exports = router;