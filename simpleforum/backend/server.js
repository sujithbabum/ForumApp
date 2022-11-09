const express = require('express');
const mongoose = require("mongoose");
const postsRoute = require("./routes/postRoutes");
const userRoute = require("./routes/userRoutes");
const bodyParser = require("body-parser");
require("dotenv/config");

const app = express();

app.listen(process.env.PORT, () => console.log("server is up and running"));

app.use(bodyParser.json());
app.use("/userRoutes", userRoute);
app.use("/postRoutes", postsRoute);

mongoose.connect(process.env.DB_CONNECTION_STRING, () => {
    console.log("connected to db");
});

module.exports = app; // for testing