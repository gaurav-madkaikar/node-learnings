// Get rid of the core modules and use express module
// Express is a web application framework for Node.js
// It is a minimal and flexible framework that provides a robust set of features to develop web applications
// It is a middleware framework that provides a robust set of features to develop web applications

const express = require('express');
const http = require('http');
const fs = require('fs');

const app = express();
// We can define multiple `middleware` functions
// Middleware functions are functions that have access to the request and response objects
// Middleware functions can perform the following tasks:
// 1. Execute some code
// 2. Make changes to the request and response objects
// 3. End the request-response cycle
// 4. Call the next middleware function in the stack

// req - request object
// res - response object
// next - function to call the next middleware function in the stack
app.use("/users", (req, res, next) => {
    console.log("In the middleware!");
    next(); // Call the next matching middleware function in the stack (i.e. "/users" route)
});

// Ignore favicon requests
app.get("/favicon.ico", (req, res) => res.status(204).end());

app.use("/", (req, res, next) => {
    console.log("Root page!");
    // Instead if using resetHeader, res.write and res.end, we can use res.send()
    // res.send() - sends the response to the client
    // Response body, headers, status code
    res.send('<h1>Hello from Express!</h1>', { 'Content-Type': 'text/html' }, 200);
});

app.listen(5194);

// Alternative way to start the server
// const server = http.createServer(app);
// server.listen(5194);