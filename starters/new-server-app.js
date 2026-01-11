// First server using core modules

// http - Launch a server and send requests
// https - Launch a SSL server
// Import modules that are not available globally
// http, https, os, fs, path -> core nodejs modules
const http = require('http');
// This module allows you to work with the file system on your computer
const fs = require('fs');

// Similar way of writing the same request
/*
    function requestHandler(req, res) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello from Node.js!');
    }
    http.createServer(requestHandler);
*/
// .on() -> allows to listen to events
// Create a server and store this instance in a variable
const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    const headers = req.headers;
    // console.log(url, method, headers); 
    if(url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html><body><h1>Hello from Node.js!</h1></body></html>');
        return res.end();  
    }  else if(url === '/test') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html><body><form action="/message" method="POST"><input type="text" name="placeholder-input"><button type="submit">Submit</button></body></html>');
        return res.end();
    } else if(url === '/message' && method === 'POST'){
        // First get the request data before writing to the file
        // Get the request data in chunks
        const body = []
        req.on('data', (chunk) => {
            // Buffered data
            console.log(chunk);
            body.push(chunk);
        });
        // When the request is finished, process the data
        return req.on('end', () => {
            // Convert the buffered data to a string
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            // Get the value of the input field
            const message = parsedBody.split('=')[1].replace(/\+/g, ' ');
            console.log(message);
            // Sanitise the message
            const refinedMsg = decodeURIComponent(message);
            console.log(refinedMsg);
            // Write the message to a file (new changes)
            // synchronous way to write to a file
            fs.writeFileSync('message.txt', refinedMsg);
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });
    }
    // This content executed before the .end() callback
    // res.write('Hello from Node.js (2)!');
    // return res.end();
});

// Starts a process to listen to the port 3140
server.listen(3140);