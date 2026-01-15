const express = require('express');

const router = express.Router();
const users = [];

router.get('/list', (req, res) => {
    let htmlText = '<h1>Users listing page</h1>';
    if (users.length > 0) {
        htmlText += '<h2>List of users added:</h2><ul>' + users.map(usr => `<li>${usr}</li>`).join('') + '</ul>'
    } else {
        htmlText += '<h2>No users present!</h2>'
    }
    htmlText += '<form action="/users/add" method="POST"><input type="text" name="username" /><button type="submit">Submit</button></form>'
    res.send(htmlText);
});

router.post('/add', (req, res) => {
    console.log(req.body);
    users.push(req.body.username);
    res.redirect('/users/list');
});

module.exports = router;