const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const userRoutes = require('./routes/user')
const app = express();

// Parse the body of the request
app.use(bodyParser.urlencoded({ extended: false }));

// For all routes starting with /admin, use the adminRoutes middleware
app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use('/users', userRoutes)

app.get("/", (req, res) => {
    res.send('<h1>Root Page</h1>');
});

// For invalid pages
app.use((req, res) => {
    // Set status to 404 before returning the html content
    res.status(404).send('<h1>Page not found</h1>');
});


app.listen(5196);