const path = require('path');
const data_handler = require('../model/data-access.js');

const file_path = path.join(__dirname, '../product-data.json');

function deleteAProduct(id) {
    return data_handler.readDataFromFile(file_path)
        .then((all_products) => {
            let expected_product = all_products.find(product => product.productId === id);
            if (expected_product) {
                let updated_data = all_products.filter(product => product !== expected_product);
                if (updated_data) {
                    return data_handler.updateProductInFile(file_path, updated_data);
                } else {
                    return "File could not be updated"
                }
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

module.exports = { deleteAProduct };