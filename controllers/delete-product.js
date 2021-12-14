const path = require('path');
const data_handler = require('../model/data-access.js');

const file_path = path.join(__dirname, '../product-data.json');

const deleteAProduct = async (req, res) => {
    let id = parseInt(req.params.id);
    data_handler.readDataFromFile(file_path)
        .then((all_products) => {
            expected_product = all_products.find(product => product.productId === id);
            if (expected_product) {
                let updated_data = all_products.filter(product => product !== expected_product);
                if (updated_data) {
                    data_handler.updateProductInFile(file_path, updated_data);
                    res
                        .status(200)
                        .json({
                            "status": "success",
                            "message": "Product deleted",
                            "data": updated_data
                        })
                } else {
                    res
                        .status(404)
                        .send("There was an error while deleting the product. Please try again later")
                }
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

module.exports = { deleteAProduct };