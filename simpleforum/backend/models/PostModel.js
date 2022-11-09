const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    author: {
        type: String,
    },
    title: {
        type: String,
    },
    content: {
        type: String,
    },
    responses: [
        {
            author: String,
            content: String,
        },
    ],
    lastUpdated: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("PostModel", postSchema);