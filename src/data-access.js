const file_handler = require('fs');
const path = require('path');

const file_path = path.join(__dirname, '../product-data.json');

function getAllProducts() {
    return readDataFromFile(file_path);
}

function getAProduct(id) {
    //TODO: If id is not a number
    return readDataFromFile(file_path)
        .then((all_products) => {
            expected_product = all_products.find(product => product.productId === id);
            if (expected_product) {
                return expected_product;
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

function updateAProduct(id, product_details) {
    return readDataFromFile(file_path)
        .then((all_products) => {
            let expected_product_index = all_products.findIndex(product => product.productId === id);
            if (expected_product_index !== -1) {
                all_products[expected_product_index] = product_details;
                return updateProductInFile(file_path, all_products);
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
    return readDataFromFile(file_path)
        .then((all_products) => {
            let expected_product = all_products.find(product => product.productId === product_details.productId);
            if (expected_product) {
                return "Product Already exists"
            } else {
                //TODO: Use error handling here
                all_products.push(product_details)
                return updateProductInFile(file_path, all_products);
            }
        })
        .catch((err) => {
            //TODO: Use error handling here
            return err;
        })
}

function deleteAProduct(id) {
    return readDataFromFile(file_path)
        .then((all_products) => {
            let expected_product = all_products.find(product => product.productId === id);
            if (expected_product) {
                let updated_data = all_products.filter(product => product !== expected_product);
                if (updated_data) {
                    return updateProductInFile(file_path, updated_data);
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

function readDataFromFile(file_path) {
    return new Promise((resolve, reject) => {
        file_handler.readFile(file_path, (err, data) => {
            if (err) {
                reject(err)
                return
            }
            resolve(JSON.parse(data))
            return
        })
    })
}

function updateProductInFile(file_path, updated_data) {
    return new Promise((resolve, reject) => {
        file_handler.writeFile(file_path, JSON.stringify(updated_data), 'utf-8', err => {
            if (err) {
                reject(err)
                return
            }
            resolve("File Updated")
            return
        })
    })
}

module.exports = { getAProduct, getAllProducts, updateAProduct, addAProduct, deleteAProduct };