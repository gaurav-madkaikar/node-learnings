const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const userRoutes = require('./routes/user')
const app = express();

// Parse the body of the request
app.use(bodyParser.urlencoded({ extended: false }));

// For all routes starting with /admin, use the adminRoutes middleware
app.use('/admin', adminRoutes);
app.use('/shop', shopRoutes);
app.use('/users', userRoutes)

app.get("/", (req, res) => {
    // res.send('<h1>Root Page</h1>');
    res.redirect('/shop');
});

// For invalid pages
app.use((req, res) => {
    // Set status to 404 before returning the html content
    // res.status(404).send('<h1>Page not found</h1>');
    console.log(__dirname);
    res.status(404).sendFile(path.join(__dirname, 'views', 'page-not-found.html'));
});


app.listen(5196);