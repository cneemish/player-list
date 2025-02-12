1. In this app we'll be covering Node, React, mongoose, MongoDB, javascript & express js. 
2. We created user-app folder > backend-file {to write backend} > npm init 
                              > frontend-file {to write frontend}
3. Install react using vite "npm create vite@latest" > install > run & test 
4. Install dependencies "npm i --save-dev @babel/cli @babel/core @babel/node @babel/preset-env" & "npm i body-parser cors express mongoose nodemon" 
                         > Babel - for backward compatibility for js                                > installing depenencies like body-parser, cors, express mongoose & nodemon
5. nodemon - to update the latest changes to the server without runing it again
6. Making changes in package.js > update scripts to "scripts": {
    "start": "nodemon ./index.js --exec babel-node -e js"
  },
7. Create index.js > backend-file "inside index.js start with importing express and simple req , res for get and listen"
8. npm start - to check the server at the desinated port 
9. Inside backend-file > create conrollers, models & routes folder and files inside the respective folder 
10. Add DB connection either locally or via mongodb Atlas
11. Create controllers and routes
12. Add POST, GET, PUT and DELETE endpoints in routes.js
13. Test the API endpoints. 
14. Creating front end using materializecss
15. Install axios for backend sever 