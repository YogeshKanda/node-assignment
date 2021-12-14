const path = require('path');
const data_handler = require('../model/data-access.js');

const file_path = path.join(__dirname, '../product-data.json');

const updateProduct = async (req, res) => {
    let id = parseInt(req.params.id);
    data_handler.readDataFromFile(file_path)
        .then((all_products) => {
            let expected_product_index = all_products.findIndex(product => product.productId === id);
            if (expected_product_index !== -1) {
                all_products[expected_product_index] = req.body;
                data_handler.updateProductInFile(file_path, all_products);
                res
                    .status(200)
                    .json({
                        "status": "success",
                        "message": "Product updated",
                        "data": all_products
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

module.exports = { updateProduct };