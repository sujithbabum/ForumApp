const UserModel = require("../models/UserModel");

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

chai.use(chaiHttp);

describe('/GET is user logged in', () => {
    it('it should GET whether user is logged in', (done) => {
        chai.request('http://localhost:4000')
            .get('/userRoutes/isLoggedIn')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });
});

describe('/POST to login valid user', () => {
    it('it should POST user details to login ', (done) => {
        let post = new UserModel({
            name: "sujith",
            password: "sujith"
        });
        chai.request('http://localhost:4000')
            .post('/userRoutes/login')
            .send(post)
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });
});

describe('/POST to login invalid user', () => {
    it('it should POST user details to login ', (done) => {
        let post = new UserModel({
            name: "sujith",
            password: "sujith"
        });
        chai.request('http://localhost:4000')
            .post('/userRoutes/login')
            .send(post)
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });
});

describe('/POST a user', () => {
    it('it should NOT POST a user to register ', (done) => {
        let post = new UserModel({
            name: "unit", //user name less than legth 5
            email: "b@c.com",
            password: "unittest01"
        });
        chai.request('http://localhost:4000')
            .post('/userRoutes/register')
            .send(post)
            .end((err, res) => {
                res.should.have.status(400);
                done();
            });
    });
});