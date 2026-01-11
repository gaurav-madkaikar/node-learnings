const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Top-level staement for parsing the body of the request
// bodyParser.urlencoded - middleware function that parses the body of the request
// extended: false => parse the body of the request using querystring library which only supports strings and arrays
// extended: true => parse the body of the request using qs library which supports nested objects and arrays
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/users", (req, res, next) => {
    console.log("Users page!");
    // next();
    res.redirect("/");
});

app.get("/add-product", (req, res) => {
    console.log("Product page! - Request path:", req.path);
    res.send('<form action="/products" method="POST"><input type="text" name="product"><button type="submit">Add Product</button></form>');
});

app.post("/products", (req, res) => {
    console.log("List products page!");
    console.log("Product: ", req.body);
    res.send('<h1>List products page</h1>');
});

// Ignore favicon requests
app.get('/favicon.ico', (req, res) => res.status(204).end());

// Applicable to all routes that start with /
app.use("/", (req, res) => {
    console.log("Root page! - Request path:", req.path);
    res.send('<h1>Hello from Express! - Root page</h1>');
});

app.listen(5195);