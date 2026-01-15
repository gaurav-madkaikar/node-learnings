const express = require('express');

const router = express.Router();
const products = [];

// /admin/list-products -> GET
router.get('/list-products', (req, res) => {
    if(products.length === 0) {
        res.send('<h1>No products found!</h1><form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
    } else {
        res.send('<h1>Products added to cart!</h1><ul>' + products.map((product) => '<li>' + product + '</li>').join('') + '</ul><form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
    }
});

// /admin/add-product -> POST
router.post('/add-product', (req, res) => {
    console.log(req.body);
    products.push(req.body.title);
    res.redirect('/admin/list-products');
});

module.exports = router;