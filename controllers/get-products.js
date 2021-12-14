const path = require('path');
const data_handler = require('../model/data-access.js');

const file_path = path.join(__dirname, '../product-data.json');

const getAllProducts = async (req, res) => {
    try {
        let product_data = await data_handler.readDataFromFile(file_path);
        res
            .status(200)
            .json({
                "status": "success",
                "message": "Product data found",
                "data": product_data
            })
    }
    catch (err) {
        res
            .status(404)
            .json(err)
    }
}

const getProduct = async (req, res) => {
    let id = parseInt(req.params.id);
    data_handler.readDataFromFile(file_path)
        .then((all_products) => {
            expected_product = all_products.find(product => product.productId === id);
            if (expected_product) {
                res
                    .status(200)
                    .json({
                        "status": "success",
                        "message": "Product data found",
                        "data": expected_product
                    })
            }
            else {
                res
                    .status(404)
                    .send("Product not found")
            }
        })
        .catch((err) => {
            res
                .status(404)
                .json(err)
        })
}

module.exports = { getProduct, getAllProducts };