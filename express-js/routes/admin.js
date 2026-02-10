// Handle products
const path = require('path');
const express = require('express');

const router = express.Router();
const products = [];

// /admin/list-product -> GET
router.get('/products', (req, res) => {
    // if(products.length === 0) {
    //     res.send('<h1>No products found!</h1><form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
    // } else {
    //     res.send('<h1>Products added to cart!</h1><ul>' + products.map((product) => '<li>' + product + '</li>').join('') + '</ul><form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
    // }
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
});

// /admin/add-product -> POST
router.post('/add-product', (req, res) => {
    console.log("Product added: ", req.body.title);
    products.push(req.body.title);
    res.status(201).redirect('/shop');
    // res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
});

module.exports = router;