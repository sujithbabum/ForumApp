# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the first terminal and under simpleforum project directory, you need to run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\

And in another terminal and inside backend directory, you need to run:

### `npm run start`

Runs the nodemon server and this will be listining to PORT 4000 and also connects to mongo db.

Tests: 

For unit testing, i am using Mocha framework for NodeJs, Chai for assertion library and Chai-http to test HTTP calls.
Configured test settings under launch.json. 
As soon as we go to Run and Debug section in VS Code, you will see dropdown options to test both API files
