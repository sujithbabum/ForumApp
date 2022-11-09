# ForumApp

For this project i have used 
  - NodeJS/Express for the backend APIs
  - ReactJS for the frontend UI
  - MongoDB free Atlas account to store data
  - used VS code 


#App features
 - Login page
 - register page
 - view all posts page
 - view single post details page where we can comment
 - Search posts by title or author
 - can create new post
 
# To run the app
After cloning this repo
 - run -> npm install 
    under both 'simpleforum' and 'backend' directories to load node_modules
 Then
 - First terminal(should be under backend folder 'ForumApp\simpleforum\backend>'
      run -> npm run start
      this should run the server and will be listining to PORT 4000 and connect to the database
 - Second terminal(should be under base folder 'ForumApp\simpleforum>'
      run -> npm start
      this should run the frontend ui

#Unit tests
Added unit test for NodeJS APIs using Mocha and Chai
Go to Run and Debug section in VS Code, you will see dropdown options to test both API files
 
 
 
 
