const path = require('path');
const helpers = require('./helpers.js');
const error_handler = require('../error-handling.js');

const file_path = path.join(__dirname, '../product-data.json');

function getAllProducts() {
    return helpers.readDataFromFile(file_path);
}

function getAProduct(id) {
    let parsed_id = error_handler.checkIfIdisANumber(id);
    if (typeof (parsed_id) === Object) {
        return parsed_id;
    }
    return helpers.readDataFromFile(file_path)
        .then((all_products) => {
            expected_product = all_products.find(product => product.productId === parsed_id);
            return error_handler.checkIfProductExists(expected_product);
        })
        .catch((err) => {
            //TODO: Use error handling here
            return err;
        })
}

function updateAProduct(id, product_details) {
    return helpers.readDataFromFile(file_path)
        .then((all_products) => {
            let expected_product_index = all_products.findIndex(product => product.productId === id);
            if (expected_product_index !== -1) {
                all_products[expected_product_index] = product_details;
                return helpers.updateProductInFile(file_path, all_products);
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

function addAProduct(product_details) {
    return helpers.readDataFromFile(file_path)
        .then((all_products) => {
            let expected_product = all_products.find(product => product.productId === product_details.productId);
            if (expected_product) {
                return "Product Already exists"
            } else {
                //TODO: Use error handling here
                all_products.push(product_details)
                return helpers.updateProductInFile(file_path, all_products);
            }
        })
        .catch((err) => {
            //TODO: Use error handling here
            return err;
        })
}

function deleteAProduct(id) {
    return helpers.readDataFromFile(file_path)
        .then((all_products) => {
            let expected_product = all_products.find(product => product.productId === id);
            if (expected_product) {
                let updated_data = all_products.filter(product => product !== expected_product);
                if (updated_data) {
                    return helpers.updateProductInFile(file_path, updated_data);
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

module.exports = { getAProduct, getAllProducts, updateAProduct, addAProduct, deleteAProduct };