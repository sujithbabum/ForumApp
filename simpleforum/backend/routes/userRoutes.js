const express = require("express");
const router = express.Router();
const UserModel = require("../models/UserModel");
const bcrypt = require("bcrypt");
const joi = require("joi");
const schema = joi.object({
    name: joi.string().min(5).max(10).required(),
    email: joi.string().min(5).max(100).email().required(),
    password: joi.string().min(5).max(10).required(),
});

router.get("/isLoggedIn", (request, response) => {
    response.status(200).send("user is logged in");
});

router.post("/register", async (request, response) => {
    const result = schema.validate(request.body);
    if (result.error)
        return response.status(400).send(result.error);
    const userAlreadyExists = await UserModel.findOne({
        name: request.body.name,
        email: request.body.email,
    });
    if (userAlreadyExists) return response.status(400).send("user already exists");

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(request.body.password, salt);
    const user = new UserModel({
        name: request.body.name,
        email: request.body.email,
        password: hashPassword,
    });
    try {
        await user.save();
        response.status(200).send("user has registered successfully");
    } catch (error) {
        response.status(400).send(error)
    }
});

router.post("/login", async (request, response) => {
    const userAlreadyExists = await UserModel.findOne({
        name: request.body.name,
    });
    if (!userAlreadyExists)
        return response.status(400).send(`User with name - ${request.body.name} does not exist`);
    const passwordVerified = await bcrypt.compare(request.body.password, userAlreadyExists.password);
    if (!passwordVerified)
        return response.status(400).send("incorrect password");

    response.json({ name: userAlreadyExists.name });
});

module.exports = router;