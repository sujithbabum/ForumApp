/* //const express = require("express");
//const app = require("../server.js")
const expect = require("chai").expect;
const server = require("../server")
const agent = require("supertest").agent(server);

//const app = express();
//app.listen(4000);

describe('GET all posts', () => {
    it('should get all the available posts', async function (done) {
        const res = await agent.get("/postRoutes");
        // .expect(200)
        // .then((res) => {
        expect(res.status).to.eql(200);
        expect(res.body.data.length).to.eql(2);
        // more validations can be added here as required
        done()
        //});
    });
}); */

let mongoose = require("mongoose");
let PostRoute = require('../routes/postRoutes');
const PostModel = require("../models/PostModel");

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);

describe('/GET all posts', () => {
    it('it should GET all the posts', (done) => {
        chai.request('http://localhost:4000')
            .get('/postRoutes')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.length.should.be.eql(8);
                done();
            });
    });
});

describe('/POST a post', () => {
    it('it should POST a post ', (done) => {
        let responseArray = [];
        let post = new PostModel({
            author: "sujith",
            title: "unit test post",
            content: "unit test post content",
            responses: responseArray
        });
        chai.request('http://localhost:4000')
            .post('/postRoutes/createPost')
            .send(post)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            });
    });

});