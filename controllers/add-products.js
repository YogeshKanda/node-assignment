const path = require('path');
const data_handler = require('../model/data-access.js');

const file_path = path.join(__dirname, '../product-data.json');

function addProduct(product_details) {
    return data_handler.readDataFromFile(file_path)
        .then((all_products) => {
            let expected_product = all_products.find(product => product.productId === product_details.productId);
            if (expected_product) {
                return "Product Already exists"
            } else {
                //TODO: Use error handling here
                all_products.push(product_details)
                return data_handler.updateProductInFile(file_path, all_products);
            }
        })
        .catch((err) => {
            //TODO: Use error handling here
            return err;
        })
}

module.exports = { addProduct };