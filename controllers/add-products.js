const path = require('path');
const data_handler = require('../model/data-access.js');

const file_path = path.join(__dirname, '../product-data.json');

const addProduct = async (req, res) => {
    let id = parseInt(req.params.id);
    data_handler.readDataFromFile(file_path)
        .then((all_products) => {
            expected_product = all_products.find(product => product.productId === id);
            if (expected_product) {
                res
                    .status(404)
                    .send("Product already exists")
            }
            else {
                all_products.push(product_details)
                data_handler.updateProductInFile(file_path, all_products);
                res
                    .status(200)
                    .json({
                        "status": "success",
                        "message": "Product added successfully",
                        "data": all_products
                    })
            }
        })
        .catch((err) => {
            res
                .status(404)
                .json(err)
        })
}

module.exports = { addProduct };