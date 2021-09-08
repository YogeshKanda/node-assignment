const get_products = require('../controllers/get-products');
const update_products = require('../controllers/update-products.js');
const add_product = require('../controllers/add-products.js');
const delete_product = require('../controllers/delete-product.js');
const express = require('express')
const router = express.Router()

router
    .route('/products')
    .get(get_products.getAllProducts)
    .post(add_product.addProduct)

router
    .route('/products/:id')
    .get(get_products.getProduct)
    .put(update_products.updateProduct)

module.exports = router;