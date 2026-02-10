const path = require('path');
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    // res.send('<h1>Shopping Homepage</h1>');
    // res.sendFile('../views/shop.html'); -> Invalid syntax
    res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'))
});

module.exports = router;