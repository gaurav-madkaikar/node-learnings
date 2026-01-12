const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRoutes);
app.use(shopRoutes);

app.get("/", (req, res) => {
    res.send('<h1>Root Page</h1>');
});

// For invalid pages
app.use((req, res) => {
    res.status(404).send('<h1>Page not found</h1>');
});


app.listen(5196);