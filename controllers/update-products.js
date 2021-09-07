const path = require('path');
const data_handler = require('../model/data-access.js');

const file_path = path.join(__dirname, '../product-data.json');

function updateProduct(id, product_details) {
    return data_handler.readDataFromFile(file_path)
        .then((all_products) => {
            let expected_product_index = all_products.findIndex(product => product.productId === id);
            if (expected_product_index !== -1) {
                all_products[expected_product_index] = product_details;
                return data_handler.updateProductInFile(file_path, all_products);
            } else {
                //TODO: Use error handling here
                return "Product Not Found"
            }
        })
        .catch((err) => {
            //TODO: Use error handling here
            return err;
        })
}

module.exports = { updateProduct };