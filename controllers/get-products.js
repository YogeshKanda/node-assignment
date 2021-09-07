const path = require('path');
const data_handler = require('../model/data-access.js');

const file_path = path.join(__dirname, '../product-data.json');

function getAllProducts() {
    return data_handler.readDataFromFile(file_path);
}

function getAProduct() {
    return data_handler.readDataFromFile(file_path)
        .then((all_products) => {
            expected_product = all_products.find(product => product.productId === id);
            return error_handler.checkIfProductExists(expected_product);
        })
        .catch((err) => {
            //TODO: Use error handling here
            return err;
        })
}

module.exports = { getAProduct, getAllProducts };